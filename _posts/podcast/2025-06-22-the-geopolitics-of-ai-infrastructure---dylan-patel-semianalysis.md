---
layout: post
title: "The Geopolitics of AI Infrastructure - Dylan Patel, SemiAnalysis"
date: 2025-06-22 00:00:01
categories: podcast
tags: [podcast_script]
---


[The Geopolitics of AI Infrastructure - Dylan Patel, SemiAnalysis](https://www.youtube.com/watch?v=Zz4QjZsYWK0)

So, going to talk about **China**, **US**, **Middle East**, and then **US infrastructure**. There will also be a bit of a **Q&A** if we have time. I don't know. I yap a lot, so it's going to be hard. 

So, 20 minutes. Yeah. Oh, I got 20. That's plenty. Time's ticking. Should I just stall so I don't have Q&A? The crowd's tough. 

I wanted to talk about **Huawei's chips**, right? Because we don't ever get to talk about them. Huawei is really cracked. They absolutely destroyed everyone in **5G** and **telecom** by just engineering better. Now they've done something that's super interesting. 

They have the **Ascend 910B** and **C**, which you may have heard of, which are chips they make. Then they've turned it into this really cool system architecture. You know, **Nvidia** talks a lot about **Blackwell NVL 72**. It's one rack with 72 GPUs connected together in **NVLink**. 

Huawei's done something similar. It's called the **Cloud Matrix 384**—384 of their chips connected together in not one rack, but like 12. There's a ton of optics and power connecting them all. 

What's interesting is that their architecture is actually one that Nvidia tried to deploy, and they failed at. That was called the **DGX H100 Ranger**, which was 256 Nvidia GPUs connected together in one NVLink network with optics. They tried, and it did not work. They could not bring it to production because it was expensive, power hungry, and unreliable. 

That was the impetus for why **Blackwell** stopped going from 1020 kilowatts per server to 120 kilowatts in one server that is effectively one whole rack, because they wanted to keep it all in **copper**. Whereas **DGX H100 Ranger** and the Huawei system uses optics to connect all the GPUs at super high bandwidth—in the high bandwidth **NVLink** or their **Ascend cloud matrix pod** scale-up network. 

It's quite interesting that Huawei was able to engineer something that Nvidia effectively failed at. Now, obviously, this is way more power hungry and potentially unreliable. There's no data, and it would be expensive, except for the fact that China is really good at making things cheap. 

So that's something interesting about the Huawei system. What's also interesting about the **geopolitics** of this is that despite the fact that Huawei is a sanctioned entity and China is a sanctioned country, they were still able to actually access **TSMC** to manufacture these chips. 

The chip is manufactured at TSMC through **Sofco**, which is a **Bitcoin** cryptocurrency mining company that pretended to not be attached to Huawei and just bought these chips. 

Then there's **HBM**, which is **high bandwidth memory** from **Samsung** and **Highex** in **Korea**. All the equipment to package it together is from the **US**, **Netherlands**, and **Japan**. So, it's funny that sanctions are completely useless because they're still able to access this stuff. 

What's interesting is that they can, you know, they've made roughly 3 million chips worth **2.9 million** chips from TSMC. That's allegedly stopped now. The US gave TSMC like a billion-dollar fine for $500 million of revenue that they made, which doesn't seem like a slap on the wrist.
**Honestly**, but **Smick** is also going to **China's TSMC** which is going to start making it as well. 

The other thing I would say is what's funny is that **HBM** was also banned to China entirely. Instead of just like, "hey, HBM's banned," there are cool ways to circumvent this. **Samsung** sells to this company called **Coasia** in **Taiwan**, and then Coasia sells to a company called **Faraday** which packages it into a chip. 

Like, there's a fake chip basically, right? A chip that does literally nothing, and it has HBM packaged on it. They ship it to China, and then they take the HBM off of that chip and put it on the **Ascend**. This actually circumvents all the rules and regulations. So, this is completely legal, which I think is very funny. 

**Huawei** has stockpiled roughly **13 million HBM stacks** already, and they are continuing to receive more shipments. It’s very interesting that this is kind of possible. The other thing is, domestically they have not been able to manufacture in the past, but now they're able to. 

**China's Smick**, their **TSMC**, has enough tools for **50,000 wafers a month**. Today, the only **7nm** chip that anyone has found from **SMIC** is their smartphone chip. Smartphone chips are smaller, easier to make, and they yield better than large AI chips. 

When you look at like, "hey, **5nm**," the first 5nm chip was an **iPhone** chip in 2020, but **Nvidia** didn't release a 5nm GPU until 2022, 2023 with the **H100**. Likewise, Smick is making **7nm** for phones, and they are going to get to the point where they can start making **7nm** for **AI chips** likely in very high volumes this year. Based on the yields, they can actually get millions and millions. 

So, the thought that **China** will not have equivalent compute is kind of wrong. They will have a lot of compute, which will be interesting because there are already big announcements from **DeepSeek** that they're going to work and use **Huawei** chips to try and train their next-generation models. 

That will be really interesting. The other thing that's interesting is that recently **Nvidia** got banned from selling their **H200**. This is like a cut-down version of the **H100** to China. They wrote down **$5 billion** worth of inventory, and on the earnings call, **Colette**, the CFO, said, 

> "If we didn't have export restrictions, we would have sold **$50 billion** worth of GPUs to China this year."

I thought that was a very interesting comment. The ban stopped about a million GPUs, and it's quite interesting that that amount of compute was also blocked.

The other sort of geopolitical thing that everyone's talking about besides **China** is the **Middle East**. Recently, there was a deal in the Middle East. **Trump** went to the Middle East; he didn't go to **Israel**. He only went to **Saudi Arabia** and the **UAE**, which I thought was quite interesting. 

Not to get political, but that's interesting.

The details of the deal are quite cool. On the right is a satellite photo of a **data center** complex in the **UAE** that **G42** is making. The deal is basically that **G42** can buy **500,000 GPUs** a year.
and they get to keep **20%** of them to do whatever they want. The other **80%** have to go to US hyperscalers, **cloud companies**, and **AI companies**. So, **G42** is building a **5-gigawatt data center campus**. The one photo pictured is the first parts of a **gigawatt data center campus**; that is absolutely ridiculously big. **XAI's** data center is like **200 megawatts**. OpenAI and all these other guys are **200 megawatts** or less for the models they've released. So, these are absolutely **ginormous**.

**Stargate**, the first six parts of it in total, is **1.2 gigawatts**. This is a massive data center that they're building. **G42** has a large customer and investor, **Microsoft**. Microsoft is going to be a big one. If everyone remembers back to **2023**, Sam was always like, > "Hey, **7 trillion**, right? You know, he's throwing this crazy number out or everyone kept reporting about it." 

The interesting thing is that part of this was that **OpenAI** wanted to build **GPU clusters in the Middle East**. Not publicly stated, but it's like OpenAI is going to have a cluster in the Middle East. That's a big part of this deal as well. In concession, the **US** gets a couple of benefits. The **UAE** is providing matching investments to the US. For any dollars they spend in the **UAE**, the **UAE** spends on **AI infrastructure**. They're also going to spend in the US. That's already started. 

**G42** has sites in **Kentucky** and **New York** that they're spending in. Nothing that's **5 gigawatts**, but I'm sure they'll get something. We'll see if this all follows through. The other thing is that most of the compute goes to **US companies, right?** **80%** of it. 

I think, you could spin it any way you want, but the lines are also blurring. People today, in their inference clusters at night in the US, are just running reinforcement learning with verifiable rewards, generating trajectories and then keeping the good tokens when there's low utilization. Inference clusters are now also training clusters. I think the lines are blurring between what is an inference and training cluster; this is a **5-gigawatt data center**—that's big. 

You could do training for sure. 

> "Can we keep questions?" 

Sure, we can actually do questions in this round but come up afterwards.

Sorry. No worries. The other one is, I think if we want to, we can yell questions. 

The other one is the **Kingdom of Saudi Arabia**. **Data Vault** is a company there. If you've heard of **The Line** in Saudi Arabia, it's an absolutely ridiculous project. It's actually really cool. They're building a city that's a straight-up line and on both sides they have huge sets of mirrors so they don't have a ton of sun making the city way too hot. It's clean and whatever, right? 

It's a really interesting thing; there are a lot of YouTube videos that show how cool it is. But anyways, part of that **Line Project** is also **Data Vault**, which is making a data center. This is real; this is definitely happening. They've already broken ground on a **2-gigawatt data center**. For context, **XAI's** entire training...
**Infrastructure today is 200 megawatts.** They’ve spent **10 plus billion dollars** on it. You got to rationalize these numbers. It’s like **10x more**. 

So **Data Volt** is going to invest **$20 billion** in **US data centers** in addition to building a bunch in the **Middle East**. A bunch of **American companies** are going to invest as well. The total investment number is like **$80 billion**. **Data Volt** is the data center company for **Humane**, which is sort of the **neoc cloud** for the data center company. 

**Humane** has signed deals to get custom **CPUs from Qualcomm** and buy a bunch of **AMD GPUs** as well as **Nvidia GPUs**. **Humane** is actually the **Ramco** folks, the **Ramco Digital** folks, which is the vast majority of **Grock's revenue**. There’s likely **Grock** stuff in there; I think like **90 plus%** of **Grock's revenue** or the **funding** they’ve got from them is coming from the **Ramco Digital** folks. 

Likewise, there’s also an **AWS** thing. All these **American companies** are also coming together with the **Middle East**. So the question is, why the heck are we sending all these **GPUs** to the **Middle East**? The **EAS** would say that, and then the capitalists will be like, “Yeah, **GPUs and money**,” right? It depends on what side of the fence you're on. I like to think I'm on one side of the fence, so I'll tell you which side. You could guess. 

There are real criticisms. What if these **GPUs** get smuggled to **China**? It’s not like **Saudi Arabia** and the **UAE** are allies. They conveniently play both sides, right? And they always have. So there's always that risk. There are all these **security requirements**. What if the **GPUs** don’t get smuggled there but get rented to **China**? There’s an argument that these **GPUs** would have been used in the **US** anyways, and we know that export restrictions and things like that—the enforcement of them—sucks. It’s not like the **US government apparatus** is going to be able to effectively enforce this. There are real risks here, including giving power to authoritarian countries that have like **kingdoms**. It’s the **Kingdom of Saudi Arabia**. It’s princes, right? It’s a little bit odd. So that’s sort of the arguments against it. 

The supporters are obviously saying, “Yes, more **GPUs**.” Most of these **GPUs** go to **American companies**. A notable example is **OpenAI**. They want a lot more **GPUs**. The **Microsoft-OpenAI deal** sort of split up partially because **OpenAI** wanted so many **GPUs**, and **Microsoft** was like, “No, you’re crazy. That’s way too much. You don’t have revenue.” 

**OpenAI** argues they can convince someone to build it for them. **OpenAI** is really nice; they get to rent the **GPUs**. The thing is, their provider has to build the data center and buy all the **GPUs**, and then they don’t get payback for two or three years of renting **GPUs**, even though the contract is for like five years. 

Yeah, there’s all this theoretical profit, but you don’t actually get the money back on the cluster until year two or three. So if **Microsoft** now builds a...
**$100 billion data center for OpenAI** 

OpenAI doesn't raise $150 billion to pay for it. Then, Microsoft is just left holding the bag, and who wants that big of a data center, right? So unless you believe AI's demand is like unlimited, there's a big risk here. The nice thing is that "a fool is easily parted with their money." SoftBank and the Middle East are potentially the most foolish investors in the world. 

I actually think they're fine. I think these are good deals, but OpenAI gets to have someone pay for the cluster, buy all these GPUs, build all the data centers, and then make the promise that they're going to rent them. The same applies to all the other AI labs across the West. 

The argument I would make is that because of this, OpenAI will have more compute in **2027 or 2028** than they would have had without it. It wouldn't have been built in the US. Also, there are big problems in America in terms of building GPUs. There is a **massive deficit of power**. 

There's no access on the chart on the left for a reason, right, for people taking a picture. On the right, the Middle East is building, by **2030**, like four gigawatts. I said they promised five, but from what we see, they'll have like four by 2030. The US has a humongous deficit in power. I will skip forward a bit. China is good at making power; the US is not. 

This is an interesting one. I presented this to **Secretary Writen Bergman** in February in DC, and it's a really interesting chart. On the right is our **data center data**, indicating a 63-gigawatt shortfall of power in the US based on the data centers that we see under construction. We're tracking every single one site by site, building by building, with satellite photos, permits, and all this stuff. 

On the left is the **US power grid**, so you can have a lot of strong assumptions about renewables, bio-batteries, and all of the single-cycle and dual-cycle gas reactors being installed. However, almost none of the coal plants planned to turn off will actually shut down, and you still have this massive issue. You have 44 gigawatts being added, but still a deficit on the power side. That's assuming, you know, with the fluctuations, right?

You're adding 100 gigawatts of data center capacity, so the US simply doesn't have enough power unless we do something. The argument is that geopolitically, the US can't build enough data centers or enough power, whether it's due to the lack of skilled labor or regulatory issues. Federal regulations are not as much of a problem anymore, but local and state regulations can hold things up. 

In America, we also have this beautiful thing called utility companies that are regulated monopolies, which can do whatever they want. If anyone has a power bill in **California**, they understand that the utilities are inadequate. 

There are numerous issues with building power in the US. If we go back, China has no problem; they added an entire US grid in seven years.
and we're talking about adding, you see **four terawatt hours** on the right graph. I'm talking about adding **100 gigawatts** as a problem, right? Because the **US** just doesn't know how to, or rather hasn't done it in like **four decades**. And so that's the big sort of challenge. 

So for every **Stargate** that's out there, right, 220 megawatts for these four building-like things, and there's two of them already almost completed and then there's another six going up. That's **1.2 gigawatts total for Stargate**. For every one of these that's happening, there's so many projects that are failing, right? 

- I've literally pitched a coal stock to my clients in **Ohio** and the stock's **3x** because there's power issues. 
- It's crazy how power constrained **America** is, right? 

And so the **geopolitics** here is like do you build in the **Middle East** or not? **China's** got no power problems. Even if their chips are less efficient, it doesn't really matter, right? I think the AI race is a very geopolitical and interesting one. 

I'll sort of leave it there. I know there are a couple more slides, but yeah, a couple questions. 

dependent on SMIC. **China's TSMC** is dependent entirely on **Western tools** today. But there are many **Chinese tool companies**. What's interesting is they'll buy billions of dollars of American, Japanese, and Dutch equipment, including **ASML**, but then they'll put it next to their domestic tool, and then they'll run wafers through both, and then they'll just learn how to improve it. 

They'll also tear them down and **reverse engineer** them. It's cool.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "So, going to talk about China, US, Middle East, and then US infrastructure.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "I wanted to talk about Huawei's chips, right? Because we don't ever get to talk about them.",
      "section_level": 1,
      "section_title": "China: Huawei Chips and Geopolitics"
    },
    {
      "index_sentences": "They have the Ascend 910B and C, which you may have heard of, which are chips they make.",
      "section_level": 2,
      "section_title": "Huawei's Chip and System Architecture"
    },
    {
      "index_sentences": "What's also interesting about the geopolitics of this is that despite the fact that Huawei is a sanctioned entity and China is a sanctioned country, they were still able to actually access TSMC to manufacture these chips.",
      "section_level": 2,
      "section_title": "Sanctions and Circumvention"
    },
    {
      "index_sentences": "The other thing is, domestically they have not been able to manufacture in the past, but now they're able to.",
      "section_level": 2,
      "section_title": "Domestic Manufacturing and SMIC"
    },
    {
      "index_sentences": "So, the thought that China will not have equivalent compute is kind of wrong.",
      "section_level": 2,
      "section_title": "China's Future Compute and Partnerships"
    },
    {
      "index_sentences": "The other thing that's interesting is that recently Nvidia got banned from selling their H200.",
      "section_level": 2,
      "section_title": "Impact of US Export Restrictions on Nvidia"
    },
    {
      "index_sentences": "The other sort of geopolitical thing that everyone's talking about besides China is the Middle East.",
      "section_level": 1,
      "section_title": "Middle East Geopolitics and Data Centers"
    },
    {
      "index_sentences": "The details of the deal are quite cool. On the right is a satellite photo of a data center complex in the UAE that G42 is making.",
      "section_level": 2,
      "section_title": "UAE Deal and G42 Data Center"
    },
    {
      "index_sentences": "The other one is the Kingdom of Saudi Arabia. Data Vault is a company there.",
      "section_level": 2,
      "section_title": "Saudi Arabia Deal and Data Vault"
    },
    {
      "index_sentences": "So the question is, why the heck are we sending all these GPUs to the Middle East?",
      "section_level": 2,
      "section_title": "Why Send GPUs to the Middle East?"
    },
    {
      "index_sentences": "There are real criticisms. What if these GPUs get smuggled to China?",
      "section_level": 3,
      "section_title": "Risks of Middle East Deals"
    },
    {
      "index_sentences": "The supporters are obviously saying, “Yes, more GPUs.” Most of these GPUs go to American companies.",
      "section_level": 3,
      "section_title": "Benefits of Middle East Deals"
    },
    {
      "index_sentences": "OpenAI argues they can convince someone to build it for them.",
      "section_level": 2,
      "section_title": "OpenAI's Role and Data Center Funding"
    },
    {
      "index_sentences": "Also, there are big problems in America in terms of building GPUs.",
      "section_level": 1,
      "section_title": "US Infrastructure and Power Deficit"
    },
    {
      "index_sentences": "This is an interesting one. I presented this to Secretary Writen Bergman in February in DC, and it's a really interesting chart.",
      "section_level": 2,
      "section_title": "US Power Grid Shortfall"
    },
    {
      "index_sentences": "In America, we also have this beautiful thing called utility companies that are regulated monopolies, which can do whatever they want.",
      "section_level": 2,
      "section_title": "Challenges in US Building"
    },
    {
      "index_sentences": "If we go back, China has no problem; they added an entire US grid in seven years.",
      "section_level": 2,
      "section_title": "Comparison to China's Power Building"
    },
    {
      "index_sentences": "dependent on SMIC. China's TSMC is dependent entirely on Western tools today.",
      "section_level": 1,
      "section_title": "Chinese Tool Companies and Reverse Engineering"
    },
    {
      "index_sentences": "I'll sort of leave it there. I know there are a couple more slides, but yeah, a couple questions.",
      "section_level": 1,
      "section_title": "Conclusion and Q&A Mention"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Huawei's architecture is actually one that Nvidia tried to deploy (called the DGX H100 Ranger) and failed at. Huawei was able to successfully engineer this large-scale system connecting chips using optics, whereas Nvidia could not bring their similar attempt to production due to cost, power, and unreliability.",
      "index_of_source": "What's interesting is that their architecture is actually one that Nvidia tried to deploy, and they failed at.",
      "question": "What is the significance of Huawei's Cloud Matrix 384 system architecture compared to Nvidia's efforts?"
    },
    {
      "answer": "According to the text, companies like Samsung sell HBM to a company in Taiwan (Coasia), which then sells it to another company (Faraday). Faraday packages the HBM onto a \"fake chip\" that does nothing. This fake chip with the HBM is shipped to China, where the HBM is then removed and put onto the Ascend chips, legally circumventing regulations.",
      "index_of_source": "Samsung sells to this company called Coasia in Taiwan, and then Coasia sells to a company called Faraday which packages it into a chip.",
      "question": "How does Huawei reportedly obtain HBM (High Bandwidth Memory) despite export bans?"
    },
    {
      "answer": "SMIC currently has enough tools for 50,000 wafers a month and is producing 7nm chips for smartphones. They are expected to be able to start making 7nm chips for AI applications in very high volumes this year, based on expected yields.",
      "index_of_source": "China's Smick, their TSMC, has enough tools for 50,000 wafers a month.",
      "question": "What is the current state and future potential of China's domestic 7nm chip manufacturing by SMIC?"
    },
    {
      "answer": "Nvidia's CFO, Colette, stated that without export restrictions, they would have sold $50 billion worth of GPUs to China this year.",
      "index_of_source": "On the earnings call, Colette, the CFO, said, \"If we didn't have export restrictions, we would have sold $50 billion worth of GPUs to China this year.\"",
      "question": "How much revenue did Nvidia's CFO estimate the company lost in China due to export restrictions in one year?"
    },
    {
      "answer": "G42 in the UAE is building a 5-gigawatt data center campus, with parts like Stargate alone totaling 1.2 gigawatts. Data Vault in Saudi Arabia has broken ground on a 2-gigawatt data center. These projects are described as \"absolutely ridiculously big\" compared to existing large AI training infrastructure like XAI's 200 megawatts.",
      "index_of_source": "G42 is building a 5-gigawatt data center campus. The one photo pictured is the first parts of a gigawatt data center campus; that is absolutely ridiculously big.",
      "question": "Describe the massive scale of the AI data center projects being built in the Middle East by entities like G42 and Data Vault."
    },
    {
      "answer": "Arguments against include the risk of GPUs being diverted to China and empowering authoritarian regimes. Arguments for include the need for US companies like OpenAI to access more compute, leveraging Middle East investment (some directed back to the US), and overcoming the significant power deficit and regulatory hurdles preventing large-scale data center construction in the United States.",
      "index_of_source": "Also, there are big problems in America in terms of building GPUs.",
      "question": "What are the geopolitical arguments for and against sending significant GPU resources to the Middle East?"
    },
    {
      "answer": "The US faces a projected 63-gigawatt power shortfall for planned data centers, hindering growth due to difficulties in adding new power generation, regulatory issues, and challenges with utility companies. China, in contrast, has shown the ability to rapidly add power capacity, like adding an entire US grid in seven years, allowing them to build more data centers despite potential chip inefficiencies.",
      "index_of_source": "On the right is our data center data, indicating a 63-gigawatt shortfall of power in the US based on the data centers that we see under construction.",
      "question": "How does the power infrastructure deficit in the United States affect its ability to build data centers compared to countries like China?"
    }
  ]
};
</script>
