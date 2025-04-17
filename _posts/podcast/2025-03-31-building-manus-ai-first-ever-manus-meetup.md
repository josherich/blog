---
layout: post
title: "Building Manus AI (first ever Manus Meetup)"
date: 2025-03-31 00:00:01
categories: podcast latent-space
tags: [podcast_script]
---


[Building Manus AI (first ever Manus Meetup)](https://www.youtube.com/watch?v=Xtw6Og7fNG0)

This is the first time we've been asked this question: What is Manus? The name matters.

Actually, this name comes from an old Latin phrase, which is also the MIT motto: 'Mens et Manus,' meaning 'mind and hand'. It signifies that you can't just think; you have to take action. From our perspective, over the past two years, LLMs have already taken over the world—and not just the latest models. Even a year ago, the models were arguably powerful enough and smarter than most humans in many verticals. But with LLMs, you can only reason.

If you want to have a real impact on the physical world, on real life, you have to build capabilities for the AI system – the 'hand' (Manus), not just the 'mind' (Mens). If you can only think, you can't do anything. Let me give an example. I'm 38 this year. I started coding when I was 8 years old, 30 years ago. My first programming language was Logo. I don't know if anyone here knows Logo; it's a scripting language for drawing.

At that time, 30 years ago in China, not everyone had their own computer. I only had the chance to go to the computer room at my primary school about twice a week. Otherwise, I had to write all the scripts or code in a physical notebook—not a laptop notebook, but a paper one. Even though I might have been one of the top students in our coding lessons 30 years ago, I couldn't get the code right without a computer. If you only visualize the code in your brain without running and testing it on a real computer, you can't write perfect code in one go.

The same thing is happening in the LLM world. We believe the problem over the past few years is that we have very powerful LLM models, but we've essentially put them in a black box, giving them only a pen and a small notebook. We don't give them a computer; we don't give them access to the outside world, yet we ask them to do very hard work. They can't do that effectively. So, we want to provide 'hands' (Manus) for LLMs to help AI make a real impact. That's where our name, Manus, comes from.

Also, I'm going to MIT next week; that's the purpose of this trip. We want to bring the name back to the MIT campus, so to speak. While building Manus, we've also been running benchmarks. What you see on our website is just an early checkpoint from the end of January.

Actually, we now have new results for the GAIA benchmark showing a big improvement, which I just saw yesterday from my colleagues. They've been running the benchmark again, and our current performance is far better than what's shown from the end of January. You might have seen that in OpenAI's research update at the beginning of February, they also used the GAIA benchmark. I don't know if anyone here is familiar with GAIA, but I'll show some examples later to help you understand why OpenAI research and Manus use this benchmark to evaluate our systems.

This is what we've achieved as a company that doesn't train foundation models but only uses existing LLMs. We think that's a pretty good result for us. We don't just have strong performance; we also have high cost efficiency. We found some articles discussing previous research and the costs associated with running the benchmark.

What's the cost per task? It seems that for some verticals, previous state-of-the-art systems might cost around $20 per task, and even higher before the GPT-4 research. During our tests on the benchmark (which has over 100 tasks), we solved them at an average cost of around $2. That's significantly cheaper—perhaps 10 times cheaper—than some previous benchmarks.

Let me give you a quick understanding of what the GAIA benchmark entails.

Yeah. Here's an example question from GAIA. It asks the agent to find a specific picture on NASA's website from January 21st. The agent has to go to the NASA website and find the exact image described: one featuring two astronauts where one appears much smaller than the other. The agent then needs to identify the smaller astronaut and determine their name.

The final part of the question is: how many total minutes did this astronaut spend in space? There isn't a single webpage with this exact answer because this astronaut went to space multiple times. So, Manus has to search the internet, find all the space missions for this astronaut, sum up the duration of each mission, and provide the final total.

So, GAIA benchmark tasks are like this. They seem relatively simple for a human. We'd spend some time understanding the task, using Google, and eventually, an average person could solve it. However, even a year or two ago, it was very difficult for a standard AI like ChatGPT to solve these tasks. But now, with Manus, it's much easier.

You can see Manus formulates a plan: search for the NASA image, identify the astronaut's name, find all their space missions, combine the durations, and deliver the final result.

Here's another example. This one felt a bit strange to me initially because, as a product person trying to build practical tools, some GAIA tasks feel abstract. (I didn't design the GAIA benchmark, by the way). When I first saw this next task, it reminded me of a quest from World of Warcraft.

It took me back 20 years! GAIA is interesting. It has tasks like the astronaut one, and also like this one: It provides a picture and asks what brand is shown.

This task also taught me something—I didn't know the English word for the item shown before seeing this benchmark question. The task requires identifying the brand of the harnness the dogs are wearing and finding what specific type of meat is mentioned in an associated news story from a particular date.

So, this task is challenging because the agent needs to understand the image content, search the internet to identify the brand, find the story from the specific date, and then locate the information within that story. The relevant article is actually quite long, so Manus has to scroll significantly.

We can see it here. Yeah, Manus scrolls down the page, finds the article from the correct date, opens it, and scrolls down further. This article, if you open it, is very long, so it has to scroll.

I recall the answer is located about two-thirds of the way down the article. The GAIA benchmark is full of tasks like these. They are becoming easier for advanced AI agents, but even for a human, they require significant effort.

Previously, many agents couldn't handle these tasks effectively. Now, with Manus, we're making good progress. Perhaps in another 6 months, we might approach the limits of what current models can do on this benchmark. We are also conducting some interesting internal evaluations of our system.

For example, while building Manus, we've used tasks sourced from platforms like Fiverr and Upwork—tasks that people actually pay others to do. We have internal evaluations based on these real-world tasks.

Another point I want to make is that we position Manus as aiming to be the first general AI agent. Why do we feel confident using the term 'general AI agent'? During our research, one of my interns reviewed the Y Combinator (YC) website and found that in the W24 batch, there were about 21 agent-oriented projects.

We looked into these 21 projects. Some didn't have a public demo available, only a video on their website. If they had a demo, we tried running it; if not, we compared the use cases proposed in their videos.

We found that Manus could cover the use cases of roughly 76% of the agent projects in that YC batch. These were diverse agents, targeting areas like medical, legal, and marketing.

In many scenarios we tested, Manus's output was comparable or even better than these specialized agents, which reinforces our goal of building a general agent.

So, that's an overview of Manus. The second part I want to cover is the origin story – why Manus AI exists. Before discussing Manus specifically, you should know this company started about two years and four months ago. Manus is actually our second product.

Our first product was called Monica. Many of you might be curious about our domain name, 'Manus.ai'. The reason relates to our first product, Monica, which initially used the 'monica.im' domain.

For those who don't know, Monica is a Chrome browser extension. We started that project about a week before ChatGPT launched. We wanted to build Monica because we saw the frustration users experienced switching between apps, constantly copying and pasting text and images.

Our idea was to let users leverage AI directly within their context, without switching applications. To help you understand what we built previously, I can show you some features of Monica.

For example, the 'Transformer Circuits' blog is one of the best in the AI industry, in my opinion. I read almost every influential piece there, but sometimes, when reading very long English articles, I get fatigued.

So, within Monica, we built a feature called 'Simplify'. When you're reading a long article, you can activate it, and the longer sections get condensed.

We built this feature because while many AI apps offer page or article summaries, I personally find that summaries often don't work well. They don't align with your focus as you read.

When you read a separate summary, you lose the original context, and you might be hesitant to fully trust the summarized information.

So, we built the 'Simplify' feature this way: you can keep scrolling through the article, seeing all the original tables and images. If there's a condensed paragraph you want to explore further, you just hover your mouse over it to see the original text.

That's just one feature; Monica has others. For instance, on YouTube, Monica adds a button to generate a video summary. You can even create an audio podcast based on the YouTube video and download it to your phone.

In the AI field, we read academic papers frequently. Monica allows you to summarize or expand sections within PDF viewers or platforms like arXiv. That's what Monica does. I've just introduced three features.

We have hundreds of features like this. For example, in Gmail, you could use Monica to help draft better emails, a feature we had about a year before Google implemented something similar. Yeah, so it's like when you're using Monica, you can just leverage the power of LLMs directly inside your browser.

Yeah, that's what we built starting about two years ago, and Monica actually did very well. It's now one of the top extensions in its category. We have millions of users and also generate significant revenue right now, and it's still growing. We have ambitious targets for this year. Yeah, so that was the first product we built. Yeah, we're not a brand-new startup that just appeared; we started building in this space even before ChatGPT.

Yeah, but you know, being a Chrome browser extension presented limitations. Not everyone uses Chrome, although almost everyone uses a browser. Furthermore, when we talked about browser extensions, we found many people didn't even know what they were.

After building Monica's success, we were constantly thinking about our next move. What was the next big opportunity? As you know, GPT-3 existed long before ChatGPT, right? Yeah, GPT-3 was already very powerful.

But before ChatGPT, only a few startups, like Jasper and Copy.ai as I recall, truly tapped into the potential of GPT-3. ChatGPT introduced a new interaction paradigm—the chat interface—which largely defined how humans would interact with LLMs.

However, we believe the chat interface isn't the final form. Yeah, because fundamentally, I believe the ability to ask questions, especially the right questions, is difficult for most people.

It's genuinely hard. Yeah. This limitation, we felt, restricts the potential of LLMs. Because you know, the LLM is really smart, but if your product, your chat interface, relies solely on user prompts, its value is limited by the user's ability to ask good questions. If users ask the right questions, they perceive value. If they can't formulate good questions, or can't ask questions at all, they don't perceive the value, making it difficult to scale the product.

Yeah, so we saw that. That's the product limitation, yeah. As we were already very successful with browser extensions, it was a natural step for us to think, yeah, maybe our next product should be a full browser. You know, not everyone uses browser extensions, so maybe we should build the browser ourselves. Yeah, so that thinking started originally about a year ago, last March.

Exactly one year ago, last March, we began taking serious steps towards building an AI browser. I see nowadays you hear a lot of concepts about AI browsers, but we started this effort a year ago with really serious commitment. At that time, our company had about 40 people, and we dedicated 20 of them to this project. As a startup, that was a substantial investment.

We integrated AI features everywhere inside the browser, and we also fine-tuned a smaller language model specifically for browser-related tasks. Right now, you might know about Arc Browser's recent AI features; we were building similar capabilities a year ago, even before Arc announced theirs. Our browser could interact with web pages and even other applications, for example, exporting web data into Excel. We had built these features; it wasn't just a prototype, it was a functioning browser.

We built it. We had features like a dashboard that automatically generated topical summaries or cards based on open tabs, eliminating manual organization. You could upscale images directly on web pages or videos. You could preview or summarize links without clicking them. A lot of features. And also, you could perform automated tasks. For example, you could ask it to search for candidates with specific iOS design experience listed on a webpage, and the browser would navigate and check profiles, even across multiple pages.

We invested significant resources in that project over six months, from March to September last year. Yeah, but finally, last September, we identified some fundamental problems. The first issue is that actually, a traditional browser is designed for direct, single-user interaction.

(Aside: Hey, partner, can you give me some water? Thank you.) As I was saying, the browser is typically for direct user control. When an AI takes control of your browser, it becomes frustrating. Watching a demo video of AI controlling a browser might look cool, but when it's your computer and your workflow being interrupted, you find it very frustrating.

Once the AI starts controlling your browser, you have to physically take your hands off the keyboard and mouse. Even a slight accidental movement could disrupt the entire automated process. Another problem is the uncertainty: you don't know when the AI will finish its task. So, when the AI starts, you have to sit there, paying attention, unable to interact with your computer but needing to watch it.

You can't easily pause it, and you can't switch to other applications to continue your own work. After six months of development, facing these usability issues, we decided to stop the project—just two weeks before our planned release date. Yeah, we never released that AI browser.

After six months of work, you know, there was a very dramatic moment for us. It was like the day we decided to stop our AI browser project. After we made the decision, I took a flight back to Beijing. When the flight landed, I opened my phone and scrolled through Twitter. The first tweet I saw was a video from Josh Miller.

I don't know if you know Josh Miller, CEO of The Browser Company, which makes the Arc browser. You know, when we started our browser project, we drew a lot of inspiration from Arc, so actually, we have real respect for their team and for Josh Miller. It was Josh Miller's video, and in that video, Josh Miller announced that Arc was discontinuing its current direction and moving on to something new.

Okay, yeah, now we felt like we were on the same page regarding the challenges. Yeah, so that was our ultimately unsuccessful attempt at a second product. But you know, even though we stopped the project, we gained valuable learnings from building the AI browser.

One key learning was that actually, we think AI should use a browser. Because during our development of the AI browser, we discovered that AI is actually very adept at controlling browsers.

AI knows many browser interaction techniques that most humans don't. We might know a few tricks, but the AI potentially knows them all. Like, there was one test during the AI browser building.

It involved a task asking the agent to watch parts of a YouTube video. Yeah, just some video on YouTube. When the agent navigated to YouTube, it pressed the number '3' key. I was running the test and was initially confused – like, what? Why did it press '3'? Yeah, I don't know if anyone here knows how YouTube works.

If you press '3', what happens? Yeah, you know, tonight we have maybe 20 or 30 people here, but perhaps nobody knows this trick. Yeah, on YouTube, the number keys 0 through 9 act as shortcuts to jump to that percentage of the video. You know, if you press '3', you jump to 30% of the video. That's just one small example; AI knows countless tricks like this, not just on YouTube.

There are so many websites on the internet. So, our conclusion was: "Okay, AI should use a browser," you know, but crucially, it should not use your browser. It needs its own dedicated browser instance so you can continue with your own work uninterrupted.

So that was the first major learning. The second learning was that the AI agent and its browser should operate in the cloud. Yeah, the browser should be in the cloud. This way, you don't have to constantly pay attention to it. Yeah, it just continues to work in the cloud, and once the job is done, it notifies you. That's okay.

The third learning was hard; it was really hard. It took us six months to fully appreciate this lesson: convincing people to switch their primary browser is incredibly difficult. Browsers are massive projects; Google has invested immense resources in Chrome for years. If you try to persuade users with, like, "Okay, we have a cool AI browser; you should try this," you know, before they even experience the AI benefits, they'll focus on missing standard browser features.

"Why don't you have this feature from Chrome? Yeah, I use it every day; I want that." People are so familiar with their browsers, so deeply ingrained in their habits. If you ask them to switch browsers, you essentially have to build a feature-complete, robust browser before you can even showcase your unique AI capabilities. That creates a lot of problems for a startup.

You know, while we were working on the browser project, actually the world was changing. As I just mentioned, we worked on the AI browser from March to September last year, and I think all of you can remember last June when Cursor just got so popular around the world. Yeah, that was significant.

At the very beginning, Cursor inspired us quite a bit. Why is that? Because Cursor's interface is... well, I probably don't need to introduce Cursor here; it’s just so famous.

This is the Bay Area, San Francisco. Everyone here will know what Cursor is. When we observed our team using Cursor—myself (product), our chief scientist (who you saw in the video), our CEO—we all know coding. We started coding 20 or 30 years ago, and we're familiar with coding.

But you know what's interesting? When we looked at colleagues in our company who don't know how to code using Cursor, that was interesting too. When you watch these people use Cursor, the most interesting part is that when they are using it, they don’t actually care about the left side—the code itself.

It's like whatever code Cursor writes, they tend to accept it because they don’t know coding, so they can't judge if Cursor gives the right code. They only care about the right side—the chat interaction. The types of tasks our colleagues were using Cursor for were also amazing. Because when we, as coders, use Cursor, we want to use it to build backend programs, websites.

Our target is the actual code, the scripts. All these codes, the website, that's what we want. But our colleagues in my company, they just used Cursor to do data visualization, batch file processing, and turn a video into audio.

Yeah, they'd just use the generated script once and might never look at it again. After we saw these interesting findings from our colleagues, we thought that maybe we should do the opposite. We should do the opposite.

It's like, what if we kept the 'right panel' in Cursor—the task-oriented interaction—and essentially hid the 'left panel' (the code)? Yeah, for many users, they don’t care about that. Even further, what if we put that 'right panel' interaction model into the cloud? This was inspired by the learnings from our browser project.

So that's it; that brings us to the end of last September. We had stopped the browser project, gained key learnings, and drawn inspiration from observing Cursor usage.

So that was the moment we decided to start building Manus. That was last October. Yeah, Manus development began just about five months ago.

Last October, when we started this project, we made three key important decisions. One was that we wanted to build the conceptual equivalent of Cursor's 'right panel' but operate it in the cloud.

Yeah, so that's the 'how' and 'why' we wanted to build Manus. After deciding that, how did we actually build Manus? Actually, the core concept is relatively simple.

As I mentioned before, we think LLMs are very good, very smart, but the problem is we haven't given this 'smart brain' a proper 'computer' to interact with the world. We only give it pen and paper and ask it to write down all the ideas inside its brain, but we don’t give it the computer. That is not modern, right? It’s like operating 100 years ago.

So, the first fundamental thing we did was to give the agent (Manus) a computer. What do I mean by this? It's like we’re using an open-source project called E2B (e2b.dev).

Is anyone here familiar with E2B? We use E2B to assign each Manus task its own dedicated virtual machine environment in the cloud. I know some of you might ask, 'Why use E2B? Why not just use a simpler container solution like Docker?' Yeah.

We made this decision because we believe, in the long term, providing a full-fledged virtual machine environment is really important. If you use the Docker approach, there are many limitations. Yeah, in Manus, if you try it out right now, at the top right, there's a button we hide there because we don't want average users to necessarily use that. But actually, you can just go directly into the agent's computer environment and see all its functions.

Currently, we provide Manus access to tools within this VM, such as a terminal, a file system, and a secure browser instance. In the near future—perhaps in the next three to six months—we plan to enable Manus to utilize other software installed on that virtual machine. Actually, you can really imagine what will happen then.

With E2B's capabilities, in the future, we're not just limited to creating Linux-based virtual machines for the agent. If there are tasks that require software running on Windows or maybe even interacting with an Android emulator, things like that become feasible. So, the first pillar is giving the agent a computer (a VM) equipped with software tools that Manus can control. Each task on Manus gets its own isolated computer environment; that's the first thing.

The second thing is that we give it data access. Because right now, in the world, not all information and data is on the open internet. There's internal company data, proprietary databases, and paid data sources you can find online. But for some use cases, if the agent doesn't have access to that specific data, it can't get the job done. It's like if you hire an intern into a company, but you don't grant them access to the necessary internal system accounts; they can't accomplish their work.

So, the second thing we do is integrate various data sources and APIs. In some cases, we subscribe to APIs ourselves, so we essentially prepay, and the user doesn't have to worry about managing individual subscriptions. This includes access to things like stock data APIs – yes, for real-time prices – and also potentially search APIs for platforms like Twitter or LinkedIn. If people want to do research on social networks, Manus can perform these kinds of tasks. That's the second thing: we provide data access.

The third thing is that we give it some 'training' or personalization. That's very interesting because once you hire an intern in your company, I think in the first week, there must be some friction, right? The intern doesn't know your preferences or what you like in the work output format. So you're always going back and forth. You tell the intern, "Okay, next time if you're delivering this kind of document to me, remember to add these sections beforehand."

In Manus, we have what we call a 'Knowledge' system. It's like, while interacting with Manus, you can always teach Manus your preferences. In our demo video on our website, the user just tells Manus, "Next time if you are doing resume screening, just deliver the results to me in a spreadsheet." Manus remembers this, so the next time it's given a task like resume screening, it will always generate a spreadsheet for you, not a text document. Also, if you are using Manus for research and there's someone you care about a lot, you can just give it maybe a short note, like, "Next time I ask you to do research about Sama Sam Altman, focus on their recent work." It's just like that.

You can always teach Manus, and it can remember this. So that's the third pillar, personalization or 'training'. But these three key pillar components of Manus—the computer, data access, and training—I think they are important, but perhaps not the most important thing. I think what's most important is the fundamental concept and architecture.

Manus is strong because my colleague and I have spent the past week here in the Bay Area, and we've already talked with a lot of agent startups and agent researchers here. Most people right now, we observe, are working on solutions built around predefined workflows. The thinking is, okay, we need stability, and we need accuracy, so we must have defined workflows.

But when we built Manus, from the very first day, we were targeting a general agent. We want to build products for average people, for normal users. So the first decision we made is that we are not making another coding agent, like Cursor or Aider. We didn't want to build that. We want Manus to do universal tasks.

So if we chose the predefined workflow approach, we would have to build a lot of workflows for it, maybe hundreds or thousands of them. Right now, you can see from our website and also from our Discord servers that people are just using Manus for very different kinds of tasks.

Actually, I think we can't prepare enough workflows for that. So, at the very heart of Manus, actually, the architecture is conceptually simple but allows for sophisticated behavior. It just gives the underlying model more intelligence and capability. It's kind of like providing more context and tools to the language model, rather than trying to rigidly control the language model's thinking process. We just keep focusing on providing the 'hands' (tools) and building the right environment.

That's the story behind Manus for the past five months.

If anyone has questions, we can just do a very quick Q&A. Okay, that's all.

[Q&A Section]

Questioner 1: I think the idea of building a general agent is really compelling. Two questions: First, how do you plan to continuously improve Manus, especially given the wide variety and changing nature of tasks users might attempt? Second, agents often struggle with managing long context windows, especially when using multiple tools which generate a lot of intermediate information. How do you handle the context limitations with numerous tools?

Speaker: For the first question on improvement: Right now, what we are looking at is user feedback and reported issues. There are people that report issues to us saying, "Okay, this task didn't work as expected." But not every piece of feedback we get can be solved immediately. Some tasks, right now for Manus, are just too hard. It's like asking, "Teach me how to earn one million dollars in one day." You know, for that kind of task, we can't handle it. But sometimes, okay, this task failure is actually really insightful. If we solve that particular issue, many other people will benefit too, and we will invest engineering time.

Right now, we find the solutions primarily come from two areas. One is enhancing the available tools. Manus has access to around 20+ tools, which include writing files, editing files, browsing URLs, things like that. In the past three weeks, we found that maybe some needed tools were not available for Manus, and we're building them. The first one went online just two days ago: it's image reading. Two days ago, Manus could only 'see' images embedded in webpages during browsing, but for image files it downloaded from the internet into its local file system, we didn't provide a way for it to actually look at the image content.

Now we provide this function, and the capability of the whole system just increased. So, one path to improvement is continuously adding more relevant tools for the agent. The second area is, as I mentioned before, data APIs. We prepare some data APIs for Manus. Right now, it's very limited; we only have maybe six APIs integrated. But we are looking at what users are building with Manus, and we are deciding which new APIs to prioritize for integration.

So that's two ways: tools and APIs. Of course, there's also the foundation model part; we are always evaluating and expecting foundation model companies to release more powerful models.

And for the second question you asked about context: You mean how can we handle the long context, right? Especially when you use so many tools, you're going to generate a lot of intermediate context.

One thing, you know, is this industry is just evolving very fast. A year ago, you couldn't imagine that right now we would have the long context lengths available in foundation models. So actually, part of the solution is solved by the foundation model improvements. But even with larger context windows, there are still limitations. We have to employ techniques for context management, like slicing or summarizing context. There are different philosophies behind how we do the slicing and management. It’s like, do you cut everything uniformly or preprocess smartly? We are using various techniques for context slicing and management.

Speaker: Okay, does anybody else have questions?

Questioner 2: Yes, first of all, like, great presentation. So your costs seem to be mostly related to the LLM calls, right? At this point, do you have plans for building your own foundation model? Because that would impact your pricing plan. Right now, your cost is largely based on the tokens you're spending. So, do you have plans for building your own foundation model in the future?

Speaker: Actually, we don't have a plan for that. Because if you step into the model training area, that will cost a lot more. We are a very, very lean, venture-funded startup. If we were to go into the model training part, I think our funding couldn't support us. Actually, we think that in the maybe not very long term, perhaps even in the shorter term, the agentic capabilities of foundation models will become increasingly commoditized. You can already find many models in the market right now that can support this kind of agent usage.

While perhaps right now, there is maybe only one model that clearly excels at the most complex tasks, we expect others to catch up. So we don't have those plans; that’s very expensive.

Questioner 3: I like the idea of Manus using data APIs. In terms of data access, I'm curious. You know, a lot of valuable data is behind paywalls or requires logins. I imagine you're going to have to explore partnerships or other ways to get access to data behind logins or paywalls. I'm curious about your thoughts on that.

Speaker: Good question. We were thinking about this question from the very start. Because even in the first prototype, we found out that in the agentic future, one of the biggest practical blockers right now is often bot detection like Cloudflare. If anyone of you here today is building agents, I think you must have encountered the problem that Cloudflare might block your agents at any minute. So we were thinking about restricted access (paywalls and bot detection) from the very start of Manus. Right now, we have a few approaches to your question.

I think the solutions are in different stages. The solution we might explore right now is... because we are relatively small at this stage, if we go to talk to large companies and say, "Okay, can you do a partnership to let our agent log in?", they may not answer. So right now, maybe we can find some technical workarounds where appropriate, like potentially using residential IPs for certain purposes, while respecting terms of service. We truly have confidence and believe that the future must be an agent future where everyone will use agents.

So in that future, I think there must be mechanisms for agent companies like us to cooperate with security providers like Cloudflare, to establish ways to verify traffic, saying, "Okay, this is not spam, this is not a malicious bot, this is real user usage performed by a legitimate agent." That is one potential long-term solution. Also, we have other solutions, like maybe we can handle the paywall fees. There are many newspaper websites you need to pay for; actually, we could potentially pay those fees for our users as part of our service.

Because we are going to release our pricing plan very soon, and it’s likely a consumption-based plan. If you're already paying for the agent's usage, we could potentially incorporate the cost of accessing paid resources into that structure. That is another way.

Speaker: Okay, any other questions? If there are no more questions, we can wrap up. Does anybody have anything else?

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "This is the first time we've been asked this question: What is Manus?",
      "section_level": 1,
      "section_title": "Introduction: What is Manus?"
    },
    {
      "index_sentences": "Actually, this name comes from an old Latin phrase, which is also the MIT motto: 'Mens et Manus,' meaning 'mind and hand'.",
      "section_level": 1,
      "section_title": "The Meaning Behind the Name"
    },
    {
      "index_sentences": "If you want to have a real impact on the physical world, on real life, you have to build capabilities for the AI system – the 'hand' (Manus), not just the 'mind' (Mens).",
      "section_level": 1,
      "section_title": "The Importance of 'Hands' for AI"
    },
    {
      "index_sentences": "The same thing is happening in the LLM world. We believe the problem over the past few years is that we have very powerful LLM models, but we've essentially put them in a black box, giving them only a pen and a small notebook.",
      "section_level": 1,
      "section_title": "Providing 'Hands' for LLMs"
    },
    {
      "index_sentences": "Also, I'm going to MIT next week; that's the purpose of this trip.",
      "section_level": 1,
      "section_title": "MIT Trip and Benchmarks"
    },
    {
      "index_sentences": "Actually, we now have new results for the GAIA benchmark showing a big improvement, which I just saw yesterday from my colleagues.",
      "section_level": 1,
      "section_title": "GAIA Benchmark Results"
    },
    {
      "index_sentences": "What's the cost per task? It seems that for some verticals, previous state-of-the-art systems might cost around $20 per task, and even higher before the GPT-4 research.",
      "section_level": 1,
      "section_title": "Cost Efficiency"
    },
    {
      "index_sentences": "Let me give you a quick understanding of what the GAIA benchmark entails.",
      "section_level": 1,
      "section_title": "Understanding the GAIA Benchmark"
    },
    {
      "index_sentences": "Yeah. Here's an example question from GAIA. It asks the agent to find a specific picture on NASA's website from January 21st.",
      "section_level": 2,
      "section_title": "Example 1: NASA Astronaut Task"
    },
    {
      "index_sentences": "Here's another example. This one felt a bit strange to me initially because, as a product person trying to build practical tools, some GAIA tasks feel abstract.",
      "section_level": 2,
      "section_title": "Example 2: Brand Identification Task"
    },
    {
      "index_sentences": "For example, while building Manus, we've used tasks sourced from platforms like Fiverr and Upwork—tasks that people actually pay others to do.",
      "section_level": 1,
      "section_title": "Internal Evaluations with Real-World Tasks"
    },
    {
      "index_sentences": "Another point I want to make is that we position Manus as aiming to be the first general AI agent.",
      "section_level": 1,
      "section_title": "Manus as a General AI Agent"
    },
    {
      "index_sentences": "So, that's an overview of Manus. The second part I want to cover is the origin story – why Manus AI exists.",
      "section_level": 1,
      "section_title": "Origin Story: Why Manus AI Exists"
    },
    {
      "index_sentences": "Our first product was called Monica. Many of you might be curious about our domain name, 'Manus.ai'.",
      "section_level": 1,
      "section_title": "First Product: Monica"
    },
    {
      "index_sentences": "For example, the 'Transformer Circuits' blog is one of the best in the AI industry, in my opinion.",
      "section_level": 1,
      "section_title": "Monica Features"
    },
    {
      "index_sentences": "We have hundreds of features like this. For example, in Gmail, you could use Monica to help draft better emails, a feature we had about a year before Google implemented something similar.",
      "section_level": 1,
      "section_title": "Monica's Success and Limitations"
    },
    {
      "index_sentences": "After building Monica's success, we were constantly thinking about our next move. What was the next big opportunity?",
      "section_level": 1,
      "section_title": "The Next Big Opportunity: AI Browser Idea"
    },
    {
      "index_sentences": "Exactly one year ago, last March, we began taking serious steps towards building an AI browser.",
      "section_level": 1,
      "section_title": "Building the AI Browser"
    },
    {
      "index_sentences": "We invested significant resources in that project over six months, from March to September last year.",
      "section_level": 1,
      "section_title": "Fundamental Problems with the AI Browser"
    },
    {
      "index_sentences": "(Aside: Hey, partner, can you give me some water? Thank you.) As I was saying, the browser is typically for direct user control.",
      "section_level": 1,
      "section_title": "Usability Issues and Decision to Stop"
    },
    {
      "index_sentences": "After six months of work, you know, there was a very dramatic moment for us.",
      "section_level": 1,
      "section_title": "Learnings from the AI Browser Project"
    },
    {
      "index_sentences": "One key learning was that actually, we think AI should use a browser.",
      "section_level": 2,
      "section_title": "AI Should Use a Browser, But Not Yours"
    },
    {
      "index_sentences": "You know, while we were working on the browser project, actually the world was changing.",
      "section_level": 1,
      "section_title": "Inspiration from Cursor"
    },
    {
      "index_sentences": "When we observed our team using Cursor—myself (product), our chief scientist (who you saw in the video), our CEO—we all know coding.",
      "section_level": 1,
      "section_title": "Observing Cursor Usage"
    },
    {
      "index_sentences": "So that's it; that brings us to the end of last September. We had stopped the browser project, gained key learnings, and drawn inspiration from observing Cursor usage.",
      "section_level": 1,
      "section_title": "Decision to Start Building Manus"
    },
    {
      "index_sentences": "Last October, when we started this project, we made three key important decisions.",
      "section_level": 1,
      "section_title": "Key Decisions for Manus"
    },
    {
      "index_sentences": "Yeah, so that's the 'how' and 'why' we wanted to build Manus. After deciding that, how did we actually build Manus?",
      "section_level": 1,
      "section_title": "How Manus Was Built"
    },
    {
      "index_sentences": "So, the first fundamental thing we did was to give the agent (Manus) a computer.",
      "section_level": 2,
      "section_title": "Giving the Agent a Computer"
    },
    {
      "index_sentences": "The second thing is that we give it data access. Because right now, in the world, not all information and data is on the open internet.",
      "section_level": 2,
      "section_title": "Giving the Agent Data Access"
    },
    {
      "index_sentences": "The third thing is that we give it some 'training' or personalization.",
      "section_level": 2,
      "section_title": "Giving the Agent Personalization and Training"
    },
    {
      "index_sentences": "But these three key pillar components of Manus—the computer, data access, and training—I think they are important, but perhaps not the most important thing.",
      "section_level": 2,
      "section_title": "The Most Important Aspect: Architecture"
    },
    {
      "index_sentences": "That's the story behind Manus for the past five months.",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "If anyone has questions, we can just do a very quick Q&A. Okay, that's all.",
      "section_level": 1,
      "section_title": "Q&A Section"
    },
    {
      "index_sentences": "I think the idea of building a general agent is really compelling. Two questions: First, how do you plan to continuously improve Manus, especially given the wide variety and changing nature of tasks users might attempt?",
      "section_level": 2,
      "section_title": "Q1: Continuous Improvement and Context Management"
    },
    {
      "index_sentences": "Actually, we don't have a plan for that. Because if you step into the model training area, that will cost a lot more.",
      "section_level": 2,
      "section_title": "Q2: Building a Foundation Model"
    },
    {
      "index_sentences": "I like the idea of Manus using data APIs. In terms of data access, I'm curious.",
      "section_level": 2,
      "section_title": "Q3: Data Access Behind Paywalls"
    }
  ]
}
</script>
