---
layout: post
title: "Aaron Levie, CEO of Box, on Box AI, Enterprise Enthusiasm, and the Evolution of SaaS"
date: 2025-01-29 00:00:01
categories: short
tags: [podcast_script]
---

[Aaron Levie, CEO of Box, on Box AI, Enterprise Enthusiasm, and the Evolution of SaaS](https://www.cognitiverevolution.ai/aaron-levie-ceo-of-box-on-box-ai-enterprise-enthusiasm-and-the-evolution-of-saas/)

The rate of change that we're seeing and the exponential improvement from AI models is incredible. If we keep this pace up, I believe these systems will increasingly be able to perform any type of general task. Jensen at NVIDIA kind of put it the best when he said that the IT department becomes the HR department of AI. This perspective opens up many questions about the future of IT.

I think we are entering a new era with systems of intelligence that let us combine data, AI, and underlying enterprise software to automate virtually anything in our businesses. There will be tremendous opportunities for AI startups; however, it will not come from simply creating an AI-first CRM system. Companies should anticipate that established players like Salesforce are already developing AI-first CRM systems.

Hello, and welcome back to the Cognitive Revolution. Today, I'm excited to share my conversation with Aaron Levy, founder and CEO of Box, the Intelligent Content Cloud. Box Power secures collaboration, managing over 100 billion documents, and is now introducing AI-powered workflow automation for more than 100,000 customers globally. These include household names such as pharmaceutical giant AstraZeneca, the legendary non-profit Teach for America, investment bank Morgan Stanley, peer-to-peer rental market Airbnb, the $1 trillion chipmaker Broadcom, and even the United States Air Force.

As you'll hear, Aaron mentions that leadership at these organizations is now more energized about AI than they've ever been about any other technology in the history of his career. This includes cloud computing, where Box was an early enterprise SaaS pioneer. While cloud adoption faced initial skepticism and resistance around security and compliance, enterprises today are eagerly exploring use cases for AI, often considering more possibilities than are immediately practical.

Box is racing to meet the moment by building new AI functionality into all aspects of their platform. They recently launched Box AI, designed to help enterprises derive more value from their unstructured data in a secure and controlled manner. We discuss several key capabilities, including natural language querying across enterprise content, automated metadata extraction, and their vision for AI agents that can autonomously perform workflows like contract review and routing.

Aaron shares technical details about how Box is layering foundation model capabilities onto their existing foundational features, such as their Hubs product. This product allows users to curate canonical, authoritative versions of key documents and has proven to be an ideal foundation for generating accurate, reliable retrieval-augmented generation experiences at scale.

We also dig into key questions facing enterprises and the software companies that serve them. These include how IT departments will need to evolve from simply supporting work to actively performing work with AI agents, the transition from per-seat to consumption-based pricing models, and whether startups can compete with incumbents racing to add AI capabilities. 

Aaron argues that while incumbents will continue to dominate many established markets, there remains significant opportunity for AI-native startups to create fundamentally new products that can operate across platforms and address unmet needs. 

As always, if you find value in the show, we'd appreciate it if you could share it with friends, leave us a review on Apple or Spotify, or drop a comment on YouTube. Feel free to share your feedback, either via our website, cognitiverevolution.ai, or by DMing me on your favorite social network. I received a lot of encouraging messages after the recent AMA and R1 episodes, and it was wonderful to hear from so many listeners. Please keep the feedback coming.

For now, I hope you enjoy this conversation about AI adoption in the enterprise and the ongoing transformation of enterprise SaaS with Aaron Levy, CEO of Box. 

Aaron, welcome to the Cognitive Revolution. It's great to have you here. 

Thank you. It's good to be here. There's a lot happening in the AI space right now. How are you doing?

Never a dull moment, that's for sure. Let's do a quick warm-up before we dive into what's happening with AI in the enterprise and what you guys are bringing to the table with your latest features. For starters, what are you doing with AI in your personal life and what is your AI worldview? Are we going to see AGI soon, or what are you expecting over the next few years?

It's hard to say with the amorphous definition of AGI. Like everyone else, I'm downstream of what Ilya, Sam, or Greg are talking about, so I don't have any better ability to predict where that's going than anyone else right now. But the rate of change and exponential improvement in AI models is incredible. If we maintain this pace, these systems will increasingly be able to perform any general task you give them. We're seeing impressive results in areas like math and complex logic, as well as coding. Once we have those foundational capabilities, continuous improvement will enable models that can learn on their own and adapt for virtually any task.

It seems like within a few years, we could witness some form of AGI as we've previously defined it—not too far away. The checkpoints in AI development appear to be coming more rapidly than they were not long ago.

How about your day-to-day use of AI? Do you have favorite use cases, or are you mostly doing basic tasks? Where are you at?

Partly because I'm enamored with new technology, I try everything. Recently, I reflected on how many new apps I've added to my home screen in the past six months—more than in the last decade and a half. I only ever added a couple of things before, but now I have at least five new apps, indicating the significant infusion of AI into our personal lives. I'm regularly using Gemini Voice or OpenAI's ChatGPT, exploring perplexity for different answers, and playing with XAI and Grok. AI has effectively become integrated into both my personal and professional life.

You mentioned recently on LinkedIn that this is the most energized you've seen enterprise companies about a new technology in your career. Considering your background in cloud computing, how would you compare the two?

That's an interesting comparison. In the early days of the cloud, I wouldn't describe the energy as excited or animated. Most conversations with enterprises were filled with skepticism and resistance. Moving infrastructure from owned data centers to the cloud and trusting new vendors was a significant shift for many enterprises. 

Yesterday I met with several CIOs and customers in New York, and the reactions were vastly different today. Instead of hesitance, enterprises are actively seeking out potential AI use cases—often more than are practical—demonstrating creativity and excitement that was less prevalent in cloud adoption. 

Enterprises are now asking, "What if we could solve problems we couldn't tackle before?" The energy and opportunity presented by AI is distinct from the cloud era, even though we still have much change ahead. Importantly, the actual deployment of technology is still early, but the excitement is palpable. For enterprise software, this signals enormous opportunity. Companies like Microsoft, Oracle, and Google will benefit, but so will smaller software stacks like Box, Salesforce, and ServiceNow along with new AI startups.

What do you think this change looks like in practice? You mentioned that IT departments may shift from simply supporting work to performing work. Can you elaborate on that?

Certainly! IT departments will have to transform significantly. Traditionally, IT worked in partnership with the business, responding to requests from sales, marketing, or finance teams. They would manage the implementation of technology and ensure the systems enabled business operations. However, the relationship is evolving.

In the AI era, businesses will require IT to deploy AI labor to solve specific problems. For instance, the head of sales might ask IT for AI agents to assist in rolling out a sales campaign. This shift transforms IT departments into strategic partners responsible for directly addressing business problems—not just implementing technology.

As IT departments step into this new role, they'll need to deepen their understanding of the business and stay abreast of AI trends. Jensen at NVIDIA captured it well by saying that IT departments are evolving into the HR departments of AI. This transformation presents exciting opportunities for IT—a departure from traditional practices that opens the door for innovation.

If IT departments are the HR departments of AI, does that suggest that Box is applying for promotions within these organizations? What are the new developments as we head into 2025?

At Box, we work with over 115,000 companies, enabling them to secure and collaborate on their content, which encompasses contracts, financial documents, marketing assets, and more. We're excited to leverage AI as the next frontier to unlock the power of unstructured enterprise data.

We've developed Box.ai, which securely connects AI models to enterprise content while maintaining necessary security and compliance. One of the significant use cases is natural language querying, allowing users to converse with their data. For example, you can query a collection of sales presentations to glean insights or identify trends from medical research documents.

We're also introducing automated metadata extraction, allowing users to pull critical structured data from documents like contracts and store it in a database for later use. Ultimately, we're heading towards a future with agentic workflows—agents that can autonomously operate on data, perform complex tasks, and connect different systems.

This evolution presents an exciting opportunity for Box to redefine intelligent content management while connecting with other technologies for integrated AI functionalities across various workflows.

We'll continue our interview shortly after a word from our sponsors. 

While some may feel that AI is overhyped, it is rapidly infiltrating industries, from self-driving cars to business efficiency. But with the necessary speed and computing power, how do you compete without spiraling costs? Oracle Cloud Infrastructure (OCI) is a blazing fast and secure platform for your infrastructure, database, application development, and AI workloads, providing substantial savings while enhancing performance. 

Experienced companies like Vodafone and Thomson Reuters have already transitioned to OCI. For new U.S. customers, Oracle offers to cut current cloud bills in half with minimum financial commitment until March 31st. Check if your company qualifies at oracle.com/cognitive.

What does the future hold for businesses? With over 41,000 companies using Oracle's NetSuite, the number one cloud ERP brings together accounting, financial management, inventory, and HR into one cohesive platform, enabling organizations to make quick decisions in real-time. For anyone running a business, I recommend avoiding a patchwork of spreadsheets and point solutions. 

NetSuite supports companies of all sizes, response to challenges, and capitalizes on opportunities. You can download the CFO's Guide to AI and Machine Learning for free at netsuite.com/cognitive.

Let’s dive deeper into the retrieval use case. While retrieval-augmented generation (RAG) has gained attention recently, many implementations have struggled. Based on your experiences, what have you observed, particularly regarding retrieving accurate content and the challenges faced?

Absolutely. The common challenge is often that when data sets are too broad or heterogeneous—say, when attempting to search through disparate data types, such as emails, schedules, and documents—the RAG systems fail to retrieve the right content initially. The architecture we were developing before AI took off turned out to be beneficial for our RAG use case. For example, our "Hubs" capability allows users to organize content by topic, creating an authoritative source for retrieval. 

Using this structure, users can easily find the most relevant documents rather than sifting through countless variations of a file, improving the reliability of RAG. This framework also helps reduce the common discrepancies found in enterprise data, which tends to be much messier than public data.

In terms of agents, what does this mean for your platform? How do you envision their roles in 2025, and what kind of autonomy do you plan to incorporate?

Our approach defines agents as a combination of AI models, tool usage within the platform, and access to data. In our current design, agents can perform simple functions, such as having conversations with individual documents or answering queries tailored to specific needs. 

We aim to evolve these capabilities further into agentic workflows where agents engage in sequential tasks with some degree of decision-making autonomy. This would allow an agent to review contracts, identify risky clauses, or route documents to appropriate parties, representing a significant leap in enabling users to automate complex processes.

Ultimately, we believe we're transitioning into a new era of systems of intelligence. These systems will allow businesses to integrate AI, data, and software, automating workflows and enhancing productivity comprehensively.

Regarding the potential bottlenecks enterprises face in realizing AI value, do you share the sentiment that AI capabilities surpass existing deployment levels and that humans are the bottlenecks?

Yes. AI possesses immense capability, often going unrecognized by enterprises, which can hinder its deployment. We must remember that companies will not easily transition processes, especially in regulated industries, which necessitate extremely high reliability. 

While AI can significantly improve processes, many organizations will approach its implementation cautiously due to the inherent skepticism and need for rigorous testing that comes with change management. Our industry is transitioning, but it will take considerable time—perhaps a decade—to fully integrate AI into enterprise environments.

Building on the discussion of enterprise software, it's clear that there are conflicting narratives surrounding its future. With established players poised to adapt and the rise of new startups, how do you see the landscape changing?

Navigating these shifts will undoubtedly be complex. Startups need to target niches that incumbents may find unappealing or difficult to address. Identifying areas where dollar efficiency and improved outcomes can manifest is crucial. There will be plenty of opportunity for innovative AI-native applications to emerge as well, particularly in areas where incumbents hesitate to tread deeply or adapt quickly.

With ongoing discussions about different pricing models, do you think there will be significant changes in how software and AI services are monetized?

Yes, we're exploring various pricing models, but I believe that as the landscape shifts toward increasingly outcome-focused software, a move toward consumption-based pricing models may emerge. Companies could pay for outcomes rather than fixed subscriptions, opening pathways for creative new practices.

Finally, regarding productivity statistics, do you believe AI will have a measurable impact on productivity within Box, or are we in the realm of faith-based predictions right now?

Internally, we are genuinely committed to being an AI-first enterprise. While it can be challenging to quantify the impact immediately, we've deployed AI to assist new employees in accessing information, answering questions based on our data.

As we integrate AI across our company, we're confident this will translate to shipping more software and enhancing overall productivity. I believe that while AI’s effects may take time to fully surface, they will ultimately drive increased productivity and transformation throughout the economy.

Thanks for sharing these insights, Aaron Levy, founder and CEO of Box. Your insights into the evolution of AI in enterprise software are enlightening, and I look forward to continuing this conversation in the future.
