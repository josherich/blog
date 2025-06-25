---
layout: post
title: "Data Privacy (The Derby Mill Series ep 13)"
date: 2025-06-17 00:00:01
categories: podcast
tags: [podcast_script]
---


[Data Privacy (The Derby Mill Series ep 13)](https://api.substack.com/feed/podcast/166068603/c7b186535dcd29af735f6c21c30080b4.mp3)

you might not care if somebody knows that you bought a **vacuum cleaner** on **Saturday**, but you'll definitely care if they have your **account information**. That was really creepy, **Patricia**. 

"I literally bought a vacuum." 

"Did you really?" 

"No, I'm just kidding." 

Welcome to the **Derby Mills Series**: **intrepid pioneers of the next economy**, featuring discussions with entrepreneurs at the forefront of deploying **machine intelligence** and brainstorming sessions about where the technology may go. 

Welcome to the **Derby Mills Series**: **intrepid pioneers of the next economy**. I'm **Ajay Agarwal**, co-founder of **Intrepid Growth Partners**, and my three collaborators are **Rich Sutton** of the **University of Alberta**, who pioneered **reinforcement learning**; **Sendal Mullen Thananjayan** of **MIT**, who uses **machine learning** to better understand **human decision-making**; and **Neve Gavin**, an applied **AI scientist** working on optimizing **open** and **closed foundation models**. 

Rich, Sendal, and Neve are all **senior advisors** at **Intrepid Growth Partners**. The domain we're exploring in this episode is **privacy**, **personally identifying information**, and **confidential company information**. We're here with **Patricia Thain**, the co-founder and **CEO** of **Private AI**, which detects and removes **PII** (personally identified information) in a client's data and keeps it safe. The company also gives organizations a finer grain understanding and control over what data they collect. **Private AI** is headquartered in **Toronto**. 

And with that, let's start the show. 

So, **Patricia** is an alum of the **University of Toronto**. She did her **PhD** here in **computer science** and is the founder and **CEO** of **Private AI**. 

So, **Patricia**, over to you. 

"Yeah, sounds good. Great to meet/see everybody. So, yeah, we do many things. **Reduction** and **identification** of personal information is a core part of it. We can focus on the use case of **privacy-preserving** in **large language model ecosystems**. For redacting prompts, redacting training data, and redacting contextual data for **RAG embeddings**, if you want to focus on that because it seems to be the hottest topic at the moment. We could add **confidential company information** in there as well." 

Okay, so two of the main concerns at the moment that we're hearing are: 

- Folks don't know what's in their data for **large language models**. 
- Folks don't know how to do proper **access control** within the data they're trying to use for **large language models** as well.

Excellent! And so, **Patricia**, can you just describe a little bit of how you do **redaction** or how you protect information from going either, you know, into or out of these **language models** in terms of effectively predicting what is **private information** and then redacting it? 

"Yeah, well, essentially we use **named entity recognition** models. We also have the ability to do things like **co-reference resolution**. If you're mentioning two organizations in different ways, like **Pepsi** and **PepsiCo**, or if it says **Ajay** and **Ajay Agarwal**, we can detect that those are the same entity. The way that we go about it is by stripping out the **personal information** before you send a prompt to a third-party **large language model** and then reintegrating the information into the response. If it's for **training data** or data for **fine-tuning**, we can do that redaction process, but we can also replace it with **synthetic personal information**. 

It actually has the added benefit of helping with **bias** because several **quasi-identifiers** like **political affiliation**, **religion**, and **location** can lead to bias in the responses of **large language models** as well." 

All right. And so, **Sendal** will kick off. He's thought a little bit about **bias**. Also, just for all the listeners to get the magnitude of the problem, many companies are struggling to use even the most basic tools because of fear of **non-compliance** with private information. 

In other words, the fear of **non-compliance** is one of the greatest barriers to innovating and utilizing these very powerful technologies. So, **Sendal**, over to you to kick off. 

"Great! I have three questions. Building on what **Ajay** said, this is such a fantastic use case, **Patricia**. It's one of those sort of things that unless you're in it, you wouldn't realize how important—how big the market is, how valuable it is. I just love the use case, and it shows a lot of knowledge and wisdom in choosing it." 

So, my questions are sort of going up in levels of complexity. To just start with the simplest one: you talked about both **PII** and confidential company information. So, **personal identifiable information**, I can see how **named entity recognition** could solve that. I'm trying to see what scalability looks like for **confidential company information**. 

For example, "If I'm **Coca-Cola** and I've actually written down my **secret formula** somewhere, that's clearly **CCI**, but that's not really..."
**Named Entity Recognition** is, I guess, if we took everything that names **carbon** and **oxygen** anywhere, then suddenly we'd be redacting too much. So how do you think about the **labels** for a **supervised learning pipeline** for any particular **company** for things like **CCI**?

Yeah, that's a great question, and it does vary company by company. There are some things that are just across the board **confidential information**; sometimes logos for customers if you're sending customer data through, or decks. Also, you know, **financial trends**, **metrics**, **organization names**. So there are some things that you can use **named entity recognition** for, and fairly so. 

So straightforwardly, the way that we're enabling it for other **confidential information** is by having the user input what it is that is **confidential information** for them in that particular period of time because it can also change, you know, month over month, quarter over quarter. The tricky part is also if, you know, there are **spelling mistakes** or **optical character recognition errors** or **automatic speech recognition errors**—how do you capture those? So, those are some of the questions that we're working through with our customers at the moment.

When you enter it, at what level am I? I can see how it works for **supervised learning**; you just give me a bunch of examples with labeled instances, and I'm just going to learn off of that. But if I'm entering it, is it sort of a **high-level semantic description**? Is it in some more formal language structure that you have in mind? How are you thinking about that entry process by which I describe it?

Yeah, for now, it's basically a **block list**, but down the line, ideally, as we learn more from a **company-by-company perspective**, our plan is to come up with something that is a bit more structured. It's closer to **search** and **block**, for example.

Yes, just trying to get it exactly. It would just strike me as a point of thing. I would have thought that a fantastic thing that would give you a lot of **scalability** is sort of solving that little **ML piece**, which is how can a **company** efficiently describe. Because I think a person could describe it; if I was a **head of a company**, I could probably describe it in **English**. I'm not sure that we have the tools to convert that **English description** into a practical thing, but maybe we couldn't. I mean, it sounds like you're saying a company trying to describe itself would already be a bit of a hard problem.

No, it's very much still a hard problem within the company itself. Interesting; one example might be the **color of a product** for a particular period in time before that product is launched.

Oh, that's fantastic! **Block all colors**, right? That's fantastic! 

Yeah, so I guess a way of saying it is that seems like an amazingly interesting problem and a source of **comparative advantage**, **competitive advantage**, and a way for you to build a **moat** if you can track that problem. 

So, I'll move to my next layer of sort of complexity. The next layer is one of my favorite articles in this field is actually a **New York Times** article. I don't know if you ever read this; it's got a beautiful title, **"A face is exposed for AOL searcher number 4417749."** Have any of you read this? This is a milestone in **privacy**.

Patricia, this really came to define—I mean, it was almost a bombshell when it happened. So, **AOL** released this data set that like the computing community that worked in this area just loved. It was **search logs**—de-identified search logs that just like, you know, we took out people's whatever; we didn't give their address, which says like numbers **4417749** was a searcher. This was the thing that showed how, like, even though the community had been using this for a while, suddenly there was this problem that blew up.

Somebody took that searcher, took the individual searches—they had **landscapers in Lilburn, Georgia**; **homes sold in Shadow Lake**—so it's just a few searches and they were enough to narrow down that this searcher was **Thalma Arnold**, a 62-year-old widow. This is like a bombshell. 

Yeah, because literally they found a person that was a searcher, and now we knew everything **Thalma did**. 

Yeah, and it turns out that people like searching for themselves a lot too. A great point! I mean, here they didn't have the name **Thalma Arnold**, but actually, you're right; she did search for several people with the last name **Arnold**, so that did help them. **Thalma** wasn't as egotistical as some of us are—like, "Oh, what's going on with me?" 

But I think the reason I'm emphasizing this is that to me, this is also what started a lot of concerns about **privacy**, but it also illustrates some of the complexity of what **PII** really is. 

So, I guess part of what I would push you on is how do you think about the fact that even if we remove **Thalma's name** from the AOL search logs, we can **re-identify Thalma**? 

### Great question. 

I would have thought like for...
Some applications, it doesn't matter; this is just going into some big statistical machine. That's fine. For other applications, this might matter a lot. **How do you think about that side of things?** It seems so important to what you do.

Okay, so this is quite the deep dive you're asking me to go into. All right, let me take you back to some work that **Professor Sweeney** did out of **Harvard**, where she was basically showing how you can re-identify the **Governor of Massachusetts**. You could identify him from the zip code, and I think it was his date of birth, if I'm not mistaken. I would have to double-check that, but basically, two pieces of identifying information could pinpoint this person with a large amount of certainty.

This was a pivotal moment in **healthcare data de-identification** because people forgot to consider that they should calculate the statistical risk of re-identification when it came to making data sets public. The community has been learning more and more over the years what it is that you should be considering re-identifiable and how to calculate the risk associated with it. 

**Professor Khalid Al-Imam** out of **Ottawa** does incredible work in this area, and it really depends on a few things. Naturally, all direct identifiers—like full names and count numbers—have to be removed when it comes to 2D identification. 

When it comes to quasi-identifiers, you basically have to understand either what the risk of re-identification is within the data set that you're looking at or what the risk of re-identification is as a statistical portion of the population. As you add more quasi-identifiers, the risk of re-identification increases exponentially.

When it comes to things like **unstructured data**, it actually turns out that a lot of the time, you don't need the personal information in order to use the data for many tasks. There was a misnomer: you may have heard **Cynthia Svork**'s assertion that "anonymized data isn't right; it's not useful," but a lot of misconceptions come from what we knew about structured data, which is mainly made up of fully personal information for the majority of the time.

When it comes to unstructured data, if you remove personal information, you can still get insights like:
- Conversation flow
- How well the conversation went
- Whether this customer service agent needs training
- The sentiment associated with a particular product

In addition to utility being something to keep in mind when you're de-identifying data, you also need to consider what the risk is that somebody may try to re-identify the data as well. Even in **cryptography**, you're constantly battling bad actors. Your key can get exposed; there could be quantum machines that break your crypto systems, and you're constantly having to improve your systems and build up more and more barriers. 

Think of **de-identification** or even **data minimization** as one extra barrier that you can add to make it very difficult for bad actors to gain anything from the data. 

I feel like I get a lot of the pieces now, and so maybe just to close this part of the conversation off: **How do you think about assembling all the pieces together for any particular use case?** Or is it a matter of calculating the risks and presenting the risks of different menus back to the company? How do you think about that collection of stuff?

We've done work in healthcare, and I think the nice thing about healthcare is there's comfort in numbers. There are well-established norms now about what it means to remove **PHI**. So, at least there's safety in just doing what everyone else is doing. Don't ask me. But early on, that wasn't the case. When **X-rays** were starting to come out, people didn't know how to remove **PHI** from X-rays.

So, putting aside the comfort in numbers since you're creating the market, how do you think about pulling everything you just said together? How does that get put together? 

It is incredibly use case specific. I do want to say that your goal isn't always to de-identify. Sometimes the goal is to redact key information like credit card numbers because you don't want your identity to be stolen. You might not care if somebody knows that you bought a vacuum cleaner on Saturday, but you'll definitely care if they have your account information.

"That was really creepy, Patricia. I literally bought a vacuum for you on Saturday." 

Did you? No, no, I'm just kidding. 

Okay, well, I use this example a lot, so it's bound to happen one day. Consider the **law of large numbers**. You think about it in terms of what you need to do with the data, what kind of risk is associated with the data, and what kind of permissions you have to use the data. 

Here, this is actually a side note—very interesting.
**Problem** that organizations are having right now is that they have no idea what they agreed to use **original data** for, and so they don't know if they could use it for **training large language models** or not. But anyway, 

what you can do with the data, who has access to the data, what additional security measures you have in place, and what the likelihood is that somebody tries to get access to the data maliciously. 

So there are various measures to keep in mind. Thank you to add to that example of identification by your existing **digital footprints**. 

There was this brilliant kind of demo that just went out recently, whereby using **open source tools** that are available, a couple of kids went around to the local **train station**. They just used their camera to scan the room, find the face, and would go up to those individuals and be like, 

> "Oh hey, you work at **Blackstone**, right? Yeah, we met at that conference last week. How's it going? We need to follow up on the pitch that you're doing." 

Because they had so much **contextual information**, the person on the other side was a bit taken aback but then fully engaged just because it was all too accurate. 

So that's the whole **near-term future** that we have to look forward to. But getting back to the topic in hand, 

similarly echoing **Sendal's comments** around it just being a super pragmatic tool that's addressing a real current need, which is quite refreshing in the field. 

But a similar line of question but on the **synthetic data** side revolves around that parameterization of keywords into **identifiers** such that you actually generate a like-for-like that is still contextually relevant and preserves that **statistical utility**. 

Technically, how do you go about solving that problem? 

So we don't handle that too much, and there are certain things. If you are using a **synthetic data provider**, you should understand how they're calculating **risk** and how they're calculating risk of the original data being exposed in the synthetic data. 

For example, if you're using **differential privacy** within your pipeline, you're going to have to calculate **epsilon values** and **delta values**. You're going to have to calculate this properly, and then you're going to have to do this properly. There's maybe a handful, maybe a couple of handfuls of experts in the world who know how to do this properly when it comes to really complex systems. 

So I wouldn't just take the word of synthetic data being **privacy-preserving** at face value without understanding what the underlying **risk assessment** was. Sure, I think the question was also to the contrary of that, as to whether the data they generate isn't too absolutely unrelated, such that it's not even applicable for training the model because they've abstracted away all of the **contextual parameters**. 

It's a fine balance between the two. It's a fine balance, and also with regards to thinking about the **use case**. You basically have to generate new synthetic data depending on the use case and recalibrate those **risk parameters** accordingly. 

Again in this space, **Professor Kaladam Al-Amom** does really interesting work, and it has been used in **healthcare** and in **pharmaceutical research** very effectively with **HIPAA compliance** in particular in mind. 

**Rich**, over to you. I have just a couple of things. One is I do appreciate this whole thing about the arms race between the **de-identifiers** and the **identifiers**. In the long run, it's probably impossible to preserve privacy totally against a determined hacker. They really just want to find out one particular thing because your **large language models** and your **redactors** are not 100% reliable. 

If someone really wanted to do it, with all the resources they can figure things out. I don't think that's what this is about. I don't think that's what creating a more private world is about. It's about changing the **cost structures**. 

That, I believe, was essentially your answer: 

- Pay attention to the **use case**.
- Focus on the things you care about and the things you don't care about.
- Raise the barriers, and it becomes effectively a phase change in the amount of privacy you have.

I think I like that. 

The second thing I just wanted to bring up is this company, this organization that I've heard of: **Venice.ai**. You probably know about them. Let me explain for everybody. 

**Venice.ai** essentially is an interface to **open source language models** that preserves some privacy. Normally, you send your query to **ChatGPT**, and **OpenAI** knows about your query and they save it forever. 

Hey, they use it in presumably useful ways but not nefarious ways, but they definitely save it, and they know it. Whereas the idea with **Venice** is that the query is sent to the open source AI systems run in such a way that it's never...
**Saved and can't be saved**, and so they claim it's you have a **much greater level of privacy** if you use unredacted props to **Venice** because they will never be saved and stored. 

Yeah, those are two very interesting points. For the first one, you're right that it's very likely if we're trying to **anonymize all data** that if a very motivated actor would likely be able to **re-identify something within there**. Oftentimes, anonymization isn't necessarily the goal because in some cases, like the **credit card number example**, all you want is to remove it. If you remove it, it's not there; there's no way you're going to figure it out. 

I love to see these other examples of **privacy-preserving large language models** in action. If you are deleting the query right after, that's an excellent way to preserve privacy. Still, I would recommend **de-identifying data** between yourself and a third party regardless because there can also always be accidents and always be malicious actors, regardless of whether they want them in their system or not. 

That is a prime example of how **data minimization** can help with privacy. 

Our conversation made me realize that a lot of that might be true for **PIAI**, and I might reframe, at least in my own head, what I've done. I know it's helpful for you. I might reframe the **core contribution** of what you're doing, which is that there is a lot of interest in **privacy** and a lot of interest in **confidentiality**, but it's almost like a continent that we have not really explored or mapped. 

It seems to me that part of what your activity is doing is starting to build a **map of that territory**. If that makes sense, what are the kinds of **CI**, what are the kinds of **PI**, how should I go about thinking about it, and how should regulators go about thinking about it? 

It strikes me that, given the huge effects regulations will have on the space, and given the huge extremes, even at the limit, this is less of a computation. I feel like there are two kinds of **computational problems**: 

- Those that are relatively well-posed and need innovativeness in the computational side to solve them. 
- Those where the core problem is that they are ill-posed to begin with. 

This one strikes me as one that is **very ill-posed to begin with**. It seems to me that the limiting thing that you would provide us is to help us start posing meaningful **CII** and **PII** problems. 

I think as a society we know there's a need but don't quite know how to pose it. So I know that's not a question; it's more of a comment. It just strikes me as I might have thought of it that way, and therefore I might have thought of myself as in the role of a **market maker**. 

That strikes me as a different startup profile than a market like meeting people where they are. In some sense, what's nice about your business is you are meeting people where they are, so you're getting revenue. 

However, I would have had an ambition that I’m actually going to make this market. I would have fundraised a lot more. I would have taken some of my money and actually just hired a **lobbying person** or a person who knows **Washington**. Not literally to lobby for that purpose, but for taking hold of the **marketplace for ideas**. 

This company, **PIE Metrics**, **Frida Poli**, who I work with, I thought they did an amazing job on this because they didn't just sell a product on hiring to companies. They realized part of what we need to do is we're making a market, and we need to actually invest some of our resources on the **policy side**. 

It strikes me that you have that type of similar broad stroke ability to move and make the market settle. 

To clarify for the listeners, when you talk about making a market as opposed to not, let me paraphrase and see if this is what you mean. Not making a market means that you're a **software vendor** that takes the rules or regulations as given, and then you build a tool to help your customers comply with the rules as given. 

As a market maker, I think the distinction you're making is that you are going to do two things:

1. Build a product to help your customers comply with the regulations. 
2. Try to influence the regulations.

Is that what you mean? 

I 100% agree. I would add one thing: it's not just rules and regulations but even **customer demand**. So **Etsy** made me want things that I didn't know I wanted. So I would say it's rules, regulations, and **customer preferences**. 

Okay, excellent, thank you, **Neve**. As always, I always tease that up. My kind of comment perfectly aligns with that. I think that exact model is a more defensible one long term because otherwise, as I was listening to you, there is an element of that kind of **reductive slope**. 

Whereby we almost simplify the problem to the simplest element: "I just care about the credit card," and then over time we're like, "Okay," and then we get the **AI** to automate that to free up humans for more valuable work.
**Tasks** but then it can become a **recursive loop** whereby if the more we hand over the **encryption** and the **security** to the **AI**, the easier it is to also reverse engineer. So, I think this always adding that element of **critical thinking**, shall we say atop of it, is a great blend. 

**Wonderful**, Neve. Thank you and Rich on your side. Well, my last thought is about if we take it to the limit. It involves sort of an **adversarial component**. So you're trying to de-identify things; you could also have somebody that is an **adversary** that tries to do the identification. You can invest various amounts of resources into that **de-identification process**. And you know, if someone really wants privacy, then you spend the money and give them greater assurance because you've spent more resources trying to remove their privacy and found it to be hopefully impossible. Or, if they do find it possible, then you can fix your processes so that doesn't happen. 

Rich, how would you imagine, when you're taking this to the limit, how would you imagine from an **unsupervised approach** to this problem of setting a **reward function**? Like, what would the **reward function** look like here? 

Yeah, well, you know, it's surprising that I didn't, as I always take everything to read voice from there, as you know. But I wasn't thinking that far. But now that you've asked me, you know how does this adversary work? Well, his goal would be to find some—well, I guess he'd have to—his goal would have to be his **reward signal**. His goal would have to be something that he self-specifies: his confidence that he has verified some personal information about the person or the company. That would have to motivate his searches. 

Yeah, I don't really—I haven't really thought through how the adversary would work. I mean, the adversary could be a person; it could just be a regular person. It's almost like traditional **red teaming**, right? But then you almost take a **GAN approach** to that loop. 

It's always your **quality control pre-release**. Okay, let me have an **automated testing pen**, whereby I give a nefarious actor a reward function to de-identify what I've tried to encrypt and see how that goes. It's super interesting. 

**Patricia**, the last 30 seconds are for you. 

Yeah, thank you! Thank you so much for that. The **intellectual question** is a really great point. If you're thinking about the various different types of data and what the **utility** is that you're going to associate with them. **Senil**, you mentioned **X-rays**. So for **DICOM images**, we can remove text and **metadata** that might be identifiable. But if somebody, for example, has a **piece of jewelry** that can re-identify them, right? 

As far as I know from the research that I've read, there's nothing out there that can help you properly modify the image and also keep the **utility** of the image. So that **utility question** is so important when you're thinking through this problem from a **data set by data set perspective**, from a **data type by data type perspective**, and even from a **linguistic perspective**. What you can do with **romance language characters** or **alphabets** is very different from what you might be able to do with **logographic languages**. 

There are so many different things that our team has to think about when they're handling different kinds of information. Thank you so much for this great conversation; I really enjoyed it. 

Right, thank you **Patricia**, **Senil**, **Neve**, and **Rich**. Thank you, and that's our show for today. Thanks to Rich, Senil, and Neve, and a special thanks to **Patricia of Private AI**. 

We've also posted links to our hosts' and guests' **social media feeds** and **web pages** in the show notes. 

Follow us on the **Intrepid Substack** at [insights.intrepidgp.com](http://insights.intrepidgp.com). Rate the podcast and subscribe on your favorite platform for content including **YouTube**, **Spotify**, **Apple Podcasts**, and more. 

Thanks everyone for listening! 

>The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of **Intrepid Growth Partners**. This content is for informational purposes only and should not be considered as financial, investment, or legal advice.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Welcome to the Derby Mills Series: intrepid pioneers of the next economy, featuring discussions with entrepreneurs at the forefront of deploying machine intelligence and brainstorming sessions about where the technology may go.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Welcome to the Derby Mills Series: intrepid pioneers of the next economy.",
      "section_level": 2,
      "section_title": "Welcome and Podcast Series"
    },
    {
      "index_sentences": "Welcome to the Derby Mills Series: intrepid pioneers of the next economy. I'm Ajay Agarwal, co-founder of Intrepid Growth Partners, and my three collaborators are Rich Sutton of the University of Alberta, who pioneered reinforcement learning; Sendal Mullen Thananjayan of MIT, who uses machine learning to better understand human decision-making; and Neve Gavin, an applied AI scientist working on optimizing open and closed foundation models.",
      "section_level": 2,
      "section_title": "Hosts, Collaborators, and Guest Introduction"
    },
    {
      "index_sentences": "The domain we're exploring in this episode is privacy, personally identifying information, and confidential company information.",
      "section_level": 2,
      "section_title": "Episode Domain and Guest Company (Private AI)"
    },
    {
      "index_sentences": "So, Patricia is an alum of the University of Toronto.",
      "section_level": 1,
      "section_title": "Guest Presentation - Patricia Thain"
    },
    {
      "index_sentences": "So, Patricia is an alum of the University of Toronto. She did her PhD here in computer science and is the founder and CEO of Private AI.",
      "section_level": 2,
      "section_title": "Introduction of Guest"
    },
    {
      "index_sentences": "Yeah, sounds good. Great to meet/see everybody. So, yeah, we do many things. Reduction and identification of personal information is a core part of it.",
      "section_level": 2,
      "section_title": "Private AI's Core Activities and Focus"
    },
    {
      "index_sentences": "Okay, so two of the main concerns at the moment that we're hearing are:",
      "section_level": 2,
      "section_title": "LLM Concerns and Private AI's Solution Areas"
    },
    {
      "index_sentences": "Excellent! And so, Patricia, can you just describe a little bit of how you do redaction or how you protect information from going either, you know, into or out of these language models in terms of effectively predicting what is private information and then redacting it?",
      "section_level": 1,
      "section_title": "PII Redaction and Protection Methods"
    },
    {
      "index_sentences": "Excellent! And so, Patricia, can you just describe a little bit of how you do redaction or how you protect information from going either, you know, into or out of these language models in terms of effectively predicting what is private information and then redacting it?",
      "section_level": 2,
      "section_title": "How Private AI Protects Information"
    },
    {
      "index_sentences": "Yeah, well, essentially we use named entity recognition models. We also have the ability to do things like co-reference resolution.",
      "section_level": 3,
      "section_title": "Named Entity Recognition and Co-reference Resolution"
    },
    {
      "index_sentences": "The way that we go about it is by stripping out the personal information before you send a prompt to a third-party large language model and then reintegrating the information into the response.",
      "section_level": 3,
      "section_title": "Redaction and Synthetic Data Replacement"
    },
    {
      "index_sentences": "It actually has the added benefit of helping with bias because several quasi-identifiers like political affiliation, religion, and location can lead to bias in the responses of large language models as well.",
      "section_level": 3,
      "section_title": "Added Benefit: Helping with Bias"
    },
    {
      "index_sentences": "Also, just for all the listeners to get the magnitude of the problem, many companies are struggling to use even the most basic tools because of fear of non-compliance with private information.",
      "section_level": 1,
      "section_title": "Challenges and Problem Magnitude"
    },
    {
      "index_sentences": "Also, just for all the listeners to get the magnitude of the problem, many companies are struggling to use even the most basic tools because of fear of non-compliance with private information.",
      "section_level": 2,
      "section_title": "Fear of Non-Compliance as a Barrier"
    },
    {
      "index_sentences": "Great! I have three questions. Building on what Ajay said, this is such a fantastic use case, Patricia.",
      "section_level": 1,
      "section_title": "Sendal's Discussion"
    },
    {
      "index_sentences": "Great! I have three questions. Building on what Ajay said, this is such a fantastic use case, Patricia.",
      "section_level": 2,
      "section_title": "Fantastic Use Case"
    },
    {
      "index_sentences": "So, my questions are sort of going up in levels of complexity. To just start with the simplest one: you talked about both PII and confidential company information.",
      "section_level": 2,
      "section_title": "Distinguishing PII and CCI"
    },
    {
      "index_sentences": "So, personal identifiable information, I can see how named entity recognition could solve that.",
      "section_level": 2,
      "section_title": "Scalability for CCI"
    },
    {
      "index_sentences": "There are some things that are just across the board confidential information; sometimes logos for customers if you're sending customer data through, or decks.",
      "section_level": 3,
      "section_title": "Named Entity Recognition for CCI"
    },
    {
      "index_sentences": "So straightforwardly, the way that we're enabling it for other confidential information is by having the user input what it is that is confidential information for them in that particular period of time because it can also change, you know, month over month, quarter over quarter.",
      "section_level": 3,
      "section_title": "User Input and Blocklist Approach"
    },
    {
      "index_sentences": "When you enter it, at what level am I? I can see how it works for supervised learning; you just give me a bunch of examples with labeled instances, and I'm just going to learn off of that.",
      "section_level": 3,
      "section_title": "Challenges with CCI Entry Process"
    },
    {
      "index_sentences": "Interesting; one example might be the color of a product for a particular period in time before that product is launched.",
      "section_level": 3,
      "section_title": "Example: Color of a Product"
    },
    {
      "index_sentences": "It's very much still a hard problem within the company itself.",
      "section_level": 3,
      "section_title": "CCI Definition as a Hard Problem"
    },
    {
      "index_sentences": "The next layer is one of my favorite articles in this field is actually a New York Times article.",
      "section_level": 2,
      "section_title": "Re-identification Risk"
    },
    {
      "index_sentences": "AOL released this data set that like the computing community that worked in this area just loved.",
      "section_level": 3,
      "section_title": "AOL Searcher Example"
    },
    {
      "index_sentences": "But I think the reason I'm emphasizing this is that to me, this is also what started a lot of concerns about privacy, but it also illustrates some of the complexity of what PII really is.",
      "section_level": 3,
      "section_title": "Complexity of PII Definition"
    },
    {
      "index_sentences": "Okay, so this is quite the deep dive you're asking me to go into. All right, let me take you back to some work that Professor Sweeney did out of Harvard, where she was basically showing how you can re-identify the Governor of Massachusetts.",
      "section_level": 1,
      "section_title": "Patricia's Response on Re-identification Risk"
    },
    {
      "index_sentences": "Okay, so this is quite the deep dive you're asking me to go into. All right, let me take you back to some work that Professor Sweeney did out of Harvard, where she was basically showing how you can re-identify the Governor of Massachusetts.",
      "section_level": 2,
      "section_title": "Professor Sweeney's Work and Statistical Risk"
    },
    {
      "index_sentences": "Naturally, all direct identifiers—like full names and count numbers—have to be removed when it comes to 2D identification.",
      "section_level": 2,
      "section_title": "Direct vs. Quasi-Identifiers"
    },
    {
      "index_sentences": "As you add more quasi-identifiers, the risk of re-identification increases exponentially.",
      "section_level": 2,
      "section_title": "Risk Increases Expotentially with Quasi-identifiers"
    },
    {
      "index_sentences": "When it comes to things like unstructured data, it actually turns out that a lot of the time, you don't need the personal information in order to use the data for many tasks.",
      "section_level": 2,
      "section_title": "Unstructured Data Utility After De-identification"
    },
    {
      "index_sentences": "Think of de-identification or even data minimization as one extra barrier that you can add to make it very difficult for bad actors to gain anything from the data.",
      "section_level": 2,
      "section_title": "De-identification as a Barrier"
    },
    {
      "index_sentences": "I feel like I get a lot of the pieces now, and so maybe just to close this part of the conversation off: How do you think about assembling all the pieces together for any particular use case?",
      "section_level": 1,
      "section_title": "Assembling Pieces for Use Cases"
    },
    {
      "index_sentences": "It is incredibly use case specific. I do want to say that your goal isn't always to de-identify.",
      "section_level": 2,
      "section_title": "Use Case Specificity"
    },
    {
      "index_sentences": "I do want to say that your goal isn't always to de-identify.",
      "section_level": 2,
      "section_title": "Goal: Redaction vs. Anonymization"
    },
    {
      "index_sentences": "You think about it in terms of what you need to do with the data, what kind of risk is associated with the data, and what kind of permissions you have to use the data.",
      "section_level": 2,
      "section_title": "Factors to Consider"
    },
    {
      "index_sentences": "You might not care if somebody knows that you bought a vacuum cleaner on Saturday, but you'll definitely care if they have your account information.",
      "section_level": 3,
      "section_title": "Data Utility and Risk"
    },
    {
      "index_sentences": "Problem that organizations are having right now is that they have no idea what they agreed to use original data for, and so they don't know if they could use it for training large language models or not.",
      "section_level": 3,
      "section_title": "Data Permissions"
    },
    {
      "index_sentences": "what you can do with the data, who has access to the data, what additional security measures you have in place, and what the likelihood is that somebody tries to get access to the data maliciously.",
      "section_level": 3,
      "section_title": "Security Measures and Malicious Actor Likelihood"
    },
    {
      "index_sentences": "Thank you to add to that example of identification by your existing digital footprints.",
      "section_level": 1,
      "section_title": "Neve's Discussion"
    },
    {
      "index_sentences": "Thank you to add to that example of identification by your existing digital footprints.",
      "section_level": 2,
      "section_title": "Identification by Existing Digital Footprints"
    },
    {
      "index_sentences": "similarly echoing Sendal's comments around it just being a super pragmatic tool that's addressing a real current need, which is quite refreshing in the field.",
      "section_level": 2,
      "section_title": "Pragmatism of the Tool"
    },
    {
      "index_sentences": "But a similar line of question but on the synthetic data side revolves around that parameterization of keywords into identifiers such that you actually generate a like-for-like that is still contextually relevant and preserves that statistical utility.",
      "section_level": 2,
      "section_title": "Synthetic Data Parameterization and Risk"
    },
    {
      "index_sentences": "It's a fine balance between the two. It's a fine balance, and also with regards to thinking about the use case.",
      "section_level": 2,
      "section_title": "Balancing Utility and Privacy in Synthetic Data"
    },
    {
      "index_sentences": "Rich, over to you. I have just a couple of things. One is I do appreciate this whole thing about the arms race between the de-identifiers and the identifiers.",
      "section_level": 1,
      "section_title": "Rich's Discussion"
    },
    {
      "index_sentences": "Rich, over to you. I have just a couple of things. One is I do appreciate this whole thing about the arms race between the de-identifiers and the identifiers.",
      "section_level": 2,
      "section_title": "The Arms Race and Cost Structures"
    },
    {
      "index_sentences": "In the long run, it's probably impossible to preserve privacy totally against a determined hacker.",
      "section_level": 3,
      "section_title": "Impossibility of Total Privacy against Determined Hackers"
    },
    {
      "index_sentences": "I don't think that's what this is about. I don't think that's what creating a more private world is about. It's about changing the cost structures.",
      "section_level": 3,
      "section_title": "Changing Cost Structures as the Goal"
    },
    {
      "index_sentences": "Raise the barriers, and it becomes effectively a phase change in the amount of privacy you have.",
      "section_level": 3,
      "section_title": "Raising Barriers"
    },
    {
      "index_sentences": "The second thing I just wanted to bring up is this company, this organization that I've heard of: Venice.ai.",
      "section_level": 2,
      "section_title": "Venice.ai Example"
    },
    {
      "index_sentences": "Our conversation made me realize that a lot of that might be true for PIAI, and I might reframe, at least in my own head, what I've done. I know it's helpful for you. I might reframe the core contribution of what you're doing, which is that there is a lot of interest in privacy and a lot of interest in confidentiality, but it's almost like a continent that we have not really explored or mapped.",
      "section_level": 1,
      "section_title": "Discussion on Market Making"
    },
    {
      "index_sentences": "Our conversation made me realize that a lot of that might be true for PIAI, and I might reframe, at least in my own head, what I've done. I know it's helpful for you. I might reframe the core contribution of what you're doing, which is that there is a lot of interest in privacy and a lot of interest in confidentiality, but it's almost like a continent that we have not really explored or mapped.",
      "section_level": 2,
      "section_title": "Reframing Private AI's Contribution (Mapping the Territory)"
    },
    {
      "index_sentences": "I feel like there are two kinds of computational problems: Those that are relatively well-posed and need innovativeness in the computational side to solve them. Those where the core problem is that they are ill-posed to begin with.",
      "section_level": 2,
      "section_title": "Ill-posed Problems"
    },
    {
      "index_sentences": "To clarify for the listeners, when you talk about making a market as opposed to not, let me paraphrase and see if this is what you mean.",
      "section_level": 2,
      "section_title": "Market Maker Definition"
    },
    {
      "index_sentences": "I 100% agree. I would add one thing: it's not just rules and regulations but even customer demand.",
      "section_level": 2,
      "section_title": "Influencing Regulations and Customer Preferences"
    },
    {
      "index_sentences": "Okay, excellent, thank you, Neve. As always, I always tease that up. My kind of comment perfectly aligns with that. I think that exact model is a more defensible one long term because otherwise, as I was listening to you, there is an element of that kind of reductive slope.",
      "section_level": 2,
      "section_title": "Market Maker as a Defensible Model"
    },
    {
      "index_sentences": "Tasks but then it can become a recursive loop whereby if the more we hand over the encryption and the security to the AI, the easier it is to also reverse engineer.",
      "section_level": 2,
      "section_title": "Recursive Loop of Security Automation"
    },
    {
      "index_sentences": "Well, my last thought is about if we take it to the limit. It involves sort of an adversarial component.",
      "section_level": 1,
      "section_title": "Rich's Second Discussion"
    },
    {
      "index_sentences": "Well, my last thought is about if we take it to the limit. It involves sort of an adversarial component.",
      "section_level": 2,
      "section_title": "Adversarial Component"
    },
    {
      "index_sentences": "Rich, how would you imagine, when you're taking this to the limit, how would you imagine from an unsupervised approach to this problem of setting a reward function?",
      "section_level": 2,
      "section_title": "Reward Function for an Adversary"
    },
    {
      "index_sentences": "Yeah, well, you know, it's surprising that I didn't, as I always take everything to read voice from there, as you know. But I wasn't thinking that far. But now that you've asked me, you know how does this adversary work? Well, his goal would be to find some—well, I guess he'd have to—his goal would have to be his reward signal.",
      "section_level": 3,
      "section_title": "Confidence as a Reward Signal"
    },
    {
      "index_sentences": "It's almost like traditional red teaming, right? But then you almost take a GAN approach to that loop.",
      "section_level": 2,
      "section_title": "GAN Approach to Red Teaming"
    },
    {
      "index_sentences": "Patricia, the last 30 seconds are for you.",
      "section_level": 1,
      "section_title": "Patricia's Closing Remarks"
    },
    {
      "index_sentences": "Yeah, thank you! Thank you so much for that. The intellectual question is a really great point. If you're thinking about the various different types of data and what the utility is that you're going to associate with them.",
      "section_level": 2,
      "section_title": "Intellectual Questions: Utility, Data Types, Linguistic Differences"
    },
    {
      "index_sentences": "Senil, you mentioned X-rays. So for DICOM images, we can remove text and metadata that might be identifiable.",
      "section_level": 2,
      "section_title": "Example: DICOM Images and Jewelry"
    },
    {
      "index_sentences": "The utility question is so important when you're thinking through this problem from a data set by data set perspective, from a data type by data type perspective, and even from a linguistic perspective.",
      "section_level": 2,
      "section_title": "Utility Question is Important"
    },
    {
      "index_sentences": "Right, thank you Patricia, Senil, Neve, and Rich. Thank you, and that's our show for today.",
      "section_level": 1,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "Right, thank you Patricia, Senil, Neve, and Rich. Thank you, and that's our show for today.",
      "section_level": 2,
      "section_title": "Thank You and Outro"
    },
    {
      "index_sentences": "We've also posted links to our hosts' and guests' social media feeds and web pages in the show notes.",
      "section_level": 2,
      "section_title": "Social Media and Show Notes"
    },
    {
      "index_sentences": "Follow us on the Intrepid Substack at insights.intrepidgp.com. Rate the podcast and subscribe on your favorite platform for content including YouTube, Spotify, Apple Podcasts, and more.",
      "section_level": 2,
      "section_title": "Follow, Rate, and Subscribe"
    },
    {
      "index_sentences": "The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of Intrepid Growth Partners.",
      "section_level": 1,
      "section_title": "Disclaimer"
    },
    {
      "index_sentences": "The views, opinions, and information expressed in this podcast are those of the hosts and guests and do not necessarily reflect the official policy or position of Intrepid Growth Partners.",
      "section_level": 2,
      "section_title": "Podcast Disclaimer"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The hosts are Ajay Agarwal, Rich Sutton, Sendal Mullen Thananjayan, and Neve Gavin, and the guest is Patricia Thain, the co-founder and CEO of Private AI.",
      "index_of_source": "Welcome to the Derby Mills Series: intrepid pioneers of the next economy. I'm Ajay Agarwal, co-founder of Intrepid Growth Partners, and my three collaborators are Rich Sutton of the University of Alberta, who pioneered reinforcement learning; Sendal Mullen Thananjayan of MIT, who uses machine learning to better understand human decision-making; and Neve Gavin, an applied AI scientist working on optimizing open and closed foundation models.",
      "question": "Who are the hosts and guest featured in this episode of the Derby Mills Series?"
    },
    {
      "answer": "Organizations are concerned that they don't know what specific information is contained within the data they use for large language models, and they struggle with implementing proper access control for that data.",
      "index_of_source": "So, two of the main concerns at the moment that we're hearing are: Folks don't know what's in their data for large language models.",
      "question": "What are the two primary data concerns organizations are currently facing when using large language models?"
    },
    {
      "answer": "Private AI achieves this by stripping out the personal information from the prompt before it is sent to the third-party LLM, and then later reintegrating that information into the model's response.",
      "index_of_source": "The way that we go about it is by stripping out the personal information before you send a prompt to a third-party large language model and then reintegrating the information into the response.",
      "question": "How does Private AI technically prevent personal information from being sent to third-party large language models during prompting?"
    },
    {
      "answer": "CCI is more complex because it varies significantly from one company to another, and defining company-specific confidential data accurately requires user input, which is challenging to capture, especially given issues like spelling mistakes or recognition errors.",
      "index_of_source": "Yeah, that's a great question, and it does vary company by company. There are some things that are just across the board confidential information; sometimes logos for customers if you're sending customer data through, or decks.",
      "question": "Why is identifying and redacting Confidential Company Information (CCI) generally considered more complex than handling Personally Identifiable Information (PII)?"
    },
    {
      "answer": "The AOL example showed that even without names, individuals like \"searcher number 4417749\" could be re-identified by combining seemingly non-identifying pieces of information, such as specific search queries about locations or past events.",
      "index_of_source": "So, I'll move to my next layer of sort of complexity. The next layer is one of my favorite articles in this field is actually a New York Times article.",
      "question": "How does the historical example of the AOL search logs demonstrate that simply removing names doesn't guarantee data privacy?"
    },
    {
      "answer": "Maintaining the \"utility\" of the data is crucial, ensuring that even after removing identifying information, the dataset remains useful for its intended purpose, such as training models or gaining analytical insights.",
      "index_of_source": "In addition to utility being something to keep in mind when you're de-identifying data, you also need to consider what the risk is that somebody may try to re-identify the data as well.",
      "question": "Beyond just removing sensitive information, what other key factor is crucial when performing data de-identification?"
    },
    {
      "answer": "The practical goal is not necessarily achieving absolute privacy that's impossible to breach, but rather changing the cost structures by raising barriers to make it significantly more difficult and expensive for malicious actors to re-identify data.",
      "index_of_source": "Rich, over to you. I have just a couple of things. One is I do appreciate this whole thing about the arms race between the de-identifiers and the identifiers.",
      "question": "According to Rich Sutton's perspective on the \"arms race\" between de-identifiers and identifiers, what is the realistic practical goal?"
    },
    {
      "answer": "Private AI is suggested to be a \"market maker\" because, in addition to providing tools for compliance, it actively helps map out the complex domain of privacy (PII/CCI) and could potentially influence the definition of privacy needs and future regulations, much like the example of PIE Metrics.",
      "index_of_source": "It seems to me that part of what your activity is doing is starting to build a map of that territory.",
      "question": "How is Private AI's approach described as potentially being more than just a standard software vendor in the privacy space?"
    }
  ]
};
</script>
