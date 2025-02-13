---
layout: post
title: "Talking DeepSeek and the Meaning Crisis with Richard Hanania"
date: 2025-01-29 00:00:01
categories: short
tags: [podcast_script]
---

Okay. So DeepSeek, they say it's open source, right? So how do they have a company? Like if it's open source means I can do, I have DeepSeek now, I can be DeepSeek. Is that what it means?

Yeah. So DeepSeek is open source via the MIT license, which is actually more permissible than the custom license that ETA has, but it is very widely accessible. You can download it. You can go on like huggingface.com and literally download a copy of it.

So if I'm a computer guy, I can figure out how to take DeepSeek and I can, you know, the example people use is you can take out all the censorship, the Tiananmen Square stuff. So like I can just take DeepSeek if I know about computers, add whatever I want about Tiananmen Square and I can have the exact same product? 

Yeah.

I read that they're selling it to companies. So like people who want an AI bot for their customer service. So why do they have that other people don't? Why can't anyone take this and just use it instead of them?

Yeah. So I'm less familiar with DeepSeek specifically, but I've looked at this with a few other companies that are open source, like Mistrow and Meta. The big advantage is distribution. The DeepSeek people are the number one experts in DeepSeek, right? They're the number one expert in how to use their models, how to adapt their models. And we just really aren't that talent-saturated right now. 

There's this idea that, you know, the market's super efficient. If you put the open source model out there, everyone will just immediately know how to adapt it and use it. And that's just not true. There are some people who know how to adapt it and there are people who do that. But to a large degree, it's mostly the company themselves that are helping other vendors actually use their product. That's where I think Mistrow takes a lot of their revenue. 

That's where, I mean, with Meta, it's a bit different because they adapted for their internal use as well, right? They put it in WhatsApp and Facebook and all these other apps. So they're kind of like their own buyer as well. But with open source AI companies, that's what they'll do.

So, okay. So the thing that the company has is knowledge. It's like selling a tractor, and you're like the experts in the tractor, although you could sort of revert. But they have nothing as far as like patents or like a thing. All they have is knowledge about DeepSeek and how to employ it. I assume that Google or Meta has enough smart engineers that they can basically figure out DeepSeek. They can figure out the others.

Yeah. Yeah. So there are attempts right now to replicate DeepSeek. There is an open-source attempt at Hugging Face. Reportedly, there's an attempt at Meta as well.

Yeah. Everyone's trying to catch up.

Yeah. Is this a strange business decision? Because other companies don't make their products open source?

Yeah. It's really interesting because it’s a very unconventional decision and you basically have to bet that there are very specific dynamics around open-source AI that make this the case. Mark Zuckerberg had an article a while ago talking about our interest in open-sourcing AI. That was really the grounding a lot of people had for it. 

But the idea is this: If AI is this technology that's really, really experiment-driven, it's driven by people kind of working in a decentralized way, coming up with new ideas, just trying stuff in academia. There are a lot of parallels to basically deep science, right? This is a claim that became, or like deep tech; this is the category that became really trendy in venture capital for some time. 

The idea behind that is that if you were just to say, "Oh, we're going to pursue this research direction, and we're just going to have one kind of top-down team," and pursue this research direction, it just wouldn't work. That was the narrative that many, including Mark Zuckerberg, made. Instead, you need this kind of open-source ecosystem where you have all these academics and independent researchers and so on who are kind of just doing free work. 

A lot of academic, I mean, like, obviously the academics get paid, you know, they have their academic salaries and so on, but they take models like LLaMA or, you know, increasingly now models like V3 and R1 from DeepSeek. They modify those models for their own research and their own experiments. That research can then be used to improve the models themselves. That's the gamble that, you know, all these companies are taking.

So it's like, it's like if you have Wikipedia and say Wikipedia was a business, it could hire a bunch of historians and try to write the best Wikipedia articles, or it can sort of outsource it and just have all these Wikipedia pages like it exists now. Then, you know, take that and figure out how to profit from it.

It's even more extreme than that because these results, they're a lot easier to verify than they are to actually come up with the innovation, right? With Wikipedia, writing the article and checking whether it's true, a lot of the time, the fact-checking can be even harder than writing the article, right? Some people just make stuff up, and it’s actually pretty hard to do that. But with AI, a lot of the main metrics that people use to verify how well an AI model performs, it's just very simple to verify. 

You just ask it the questions, you just go through one by one; it's automated. A lot of the time, the biggest cost is the cost of running the AI model itself, especially with stuff like 01. But it’s very easy to verify. And so if you make an improvement, you can very rapidly identify that everyone agrees it's an improvement, there's not a lot of confusion or debate around it. You take those improvements, and you reintegrate them to create an even better version. And that happens really quickly.

It does seem reasonable to suspect that the Chinese government wouldn't let this happen by accident. There is some kind of strategic thinking here. I mean, is that because of the idea that you could just release this into the wild? They're generally sort of heavy-handed regulation about destabilizing technology. I don't know if it's to hurt the American tech industry, or it's perhaps to make the case that expert controls weren't working and try to black pill the Trump administration on expert controls. 

My suspicion is that the Chinese Communist Party had a say in this happening, and they must be doing it for a reason. What do you think?

Yeah, certainly, I think there’s very little separation between Chinese policy and the actions of, you know, quote-unquote, private companies in China. I think that’s really a false distinction when it comes to China. In terms of the interests in releasing open-source AI, to me, the economics come before the politics. I mean, I'm sure we could do an entire episode on that themselves. 

But there is something very interesting with economics, especially on these cheap models, which is there's a very heavy distillation effect. What I mean by that is that when you take the inputs of an AI model, this can be any AI model, open-source or closed-source, to train on the outputs of a closed-source model. I think most people are doing it; like most companies, most non-open AI companies are doing it with the output of a 4.0 or R1 or so on. 

You have these distillation effects that create a very strong ability for other companies to catch up. Now, how does this relate to open source? It means, first of all, that if you’re trying to run a closed-source company, it's harder relative to an open-source company because people can still, you know, do this model distillation thing. 

Second of all, it creates this very interesting economic dynamic where there's a very fast feedback loop in integrating the advantages of one model into another. A lot of that is bottlenecked by engineering time. If it's bottlenecked by engineering time, then the savings that come from open-source engineering are much more important, because that's where, you know, if engineering time is important, and open source saves you engineering time, then it becomes more valuable, the more valuable that engineering time is. 

That's another reason why there might be a preference towards open source, both by, you know, the Chinese government or by companies like LLaMA, or sorry, like Facebook, or like Meta, and companies like Mistral as well. The same case applies to private firms as it does to the Chinese government. One more thing that's interesting is that you mentioned export controls. There have been a lot of narratives around export controls. 

I think a lot of it is just confirmation bias. One interesting take on export controls, which might also be confirmation bias but is interesting to me, is I think Yann LeCun also tweeted this, or posted this on threads. He posted something like, you know, we should be celebrating that Chinese companies are publishing open-source innovations because now we can use them and integrate them into our open-source models—or really, all of our models, closed-source ones as well, really. 

And I think that’s true.

Yeah. Yeah. Let's back up a little bit because why, you know, we haven’t talked about why people are freaking out about this thing. So let me explain to you how I understand this, and you tell me if this is right. So there's something called training a model, which is like, you need chips and a lot of equipment, and people use that. Then there's something called the code. And the code is like, that’s something that's not, that can just be like a sheet of paper, right? Or a text file. And that's the code. The training is the big deal. 

Open AI and these other companies, the numbers are that it took them 100 million to a billion. So I've seen—that's the rage I've seen to train to get that precious, precious code that they have, that took them. And so DeepSeek did the same thing, basically got a model that matches these other American tech companies, but for 5 million instead of 100 billion to a billion. Is that right?

Yes. It’s a little bit more complicated than that because the big breakthrough that really got a lot of news attention was DeepSeek R1, which is this new technique that uses an existing model, V3, DeepSeek V3, and adds essentially another function to it that allows it to answer these harder scientific questions. 

So this is the thing that the other companies can't do. Most major AI companies that people talk about are all capable of making something like V3, something that are called a base model, right? That’s what they’re called. Anthropic can do this. Grok can do this. Google can do this. Everyone can do this. What's new is this reasoning function, which is essentially taking these long chains of outputs and using them to solve harder scientific questions. 

Only OpenAI, Google, and now DeepSeek are capable of doing this. I think, you know, for most measures, OpenAI is still in the lead. DeepSeek might be number two now, and Google might be number three when it comes to this function. What's interesting is that a lot of the top gains, a lot of the like cost-efficient gains that people were talking about, they were all publicly known a month ago because DeepSeek V3 came out a month ago. And just no one paid attention to it. No one cared about the cost savings until like this new function that DeepSeek released like a month later. 

Yeah. Okay. So, so the implications here is that basically all you need is $5 million, and you can do what Anthropic and all these companies do. Like their advantage of just being very big and very rich is gone. Is that why people are freaking out? Is that the basis of why this is such a big deal?

Basically, yes. So cost is a big thing. There's the idea that China couldn't do it. China couldn't compete with America. That was already an idea that was beginning to fade, but a lot of people weren't really tuning in. This is the kind of thing that really changed their mind. A lot of people who are New York Times readers or just not really tuned into the AI industry, but maybe care about it from watching the news. This is the first time they’re hearing that China can really compete.

Yeah. So you knew this; you knew this months ago. And so is the conventional wisdom here, even if it's a couple of months late here, correct? Open AI, Meta— their advantage is gone.

Well, so OpenAI’s models still do a bit better. Their public model does a tiny bit better. Then there’s an unreleased version, or at least not released to the public called O3 that does even better than O1. So OpenAI is still ahead. I think LLaMA, which is Meta’s model, they’re almost a little bit behind now, and they’re working to catch up. 

When it comes to the conventional wisdom, it's been the idea for a while that China is at least very close, if not fully caught up. I think that that hasn’t really changed.

Yeah. So before, China was catching up, but the fact that somebody could do this—I mean, there’s the China versus America’s competition thing, but there’s also the question of just like, what's possible, right? And so as the news here that like, even if it’s a little bit behind OpenAI and comparable to others, the idea is that you could do it for 20 times or 200 times cheaper. And so the idea is like, this is like maybe not good for Nvidia or not good for Anthropic, but like bullish for AI changing the world. Is that right?

I think it's good for Nvidia, probably bad for Anthropic if it matters to Anthropic. The stock market doesn't agree with you. Yeah. There are a lot of people who are, you know, this is not financial advice to make that disclaimer, but there are a lot of people who are very vocal about like buying Nvidia right now. I saw like Gary Tan tweet about this.

Yeah. I think that Nvidia was due for a correction for a while for like unrelated reasons. And this was kind of a shotgun explanation. To explain the logic a little bit of why I don’t think this is bad for Nvidia in the long term, and this is really funny because like the CEO of Microsoft just tweeted this, but there's this very long-discussed economic concept called Chevron's paradox. The idea is that, you know, when you have like a huge efficiency gain in consuming a product, right? Let's say electricity. 

If you find some new way of like building a factory that uses a lot less electricity, some of the historical predictions, which is I think fairly intuitive, is that then the price of electricity would go down, right? Chevron's paradox is just the result in economic terms that the opposite tends to be true. You make a factory and you invent a new factory that uses much less electricity. The amount of electricity consumed ends up increasing. 

I think a lot of people, including apparently now the CEO of Microsoft, are talking about this.
articles and tweets become AI-generated content? 

This has been discussed in the broad context of efficiency gains in AI and, more generally, long before people were talking about deep seek. There were other companies making gains in performance, most notably Google. They have just a model that's incredibly cheap to run. The question is, will this push down the price of NVIDIA? For a long time before this, the answer was no; the conventional wisdom was no for precisely this reason. 

When you decrease the cost and the consumption of compute, it makes compute more accessible to more people who want to develop more functions and products. This, in the long run, is expected to be good for NVIDIA. However, there are questions about the actual cost of these models. For instance, do we know that it only costs 5 million? How do we prove it?

We don't know for sure, and there’s no way to know definitively. This is a subject of significant debate. There are two things that are debated a lot: is the performance fake, and is the cost fake? The cost is particularly hard to assess because there are all sorts of ways to manage the accounting. At the end of the day, you have to trust the researchers writing the paper, which is easier said than done, especially when the company in question is a Chinese entity.

In the long term, this could be verified via a replication attempt. The model is open source, and while we know how the structure is basically run, many are currently trying to replicate it—from scratch. They're working on training models similar to V3 or R1 based on the details specified in the technical publications. However, even this replication may be imperfect because some techniques, even if they publish the code, might not be shared.

So, when you have code, you can more or less reverse engineer how they trained it. Is that right? 

Yes, essentially. Three key elements come into play: you have the code, you have the completed model weights, which are necessary to run the trained model, and you also have the technical paper. DeepSeek published papers—two of them, one on V3, which is the base model, detailing all of the cost optimizations, and one on R1, which is this new reasoning mode released recently. People are saying, “Okay, we're going to take the techniques described in this paper, train our new model using the same algorithms and methods, and see if we get the same results.”

So basically, anyone with five million would still pay five and a half million dollars. Thus, anyone with that amount could do this and claim they achieved it at a lower cost. It seems that this provides a verifiable way to ascertain whether the claims about costs are accurate. Someone will attempt this replication, and if successful, it would serve as conclusive evidence that the results are legitimate. If they fail, it could indicate a variety of other phenomena at play.

In the papers, they talk about sub-software level optimizations that they may not have fully disclosed in their open-source code. This leads us to some deeper insights, particularly in how NVIDIA achieved its success. 

NVIDIA's success stemmed not just from the physical hardware chips but also from a specialized software set known as CUDA. It was essentially a new programming language designed for running machine learning operations on NVIDIA chips, making it much simpler to reprogram operations efficiently. Despite conducting the same mathematical operations, translating them from programming languages like Python into executable operations on the hardware is complex. Various optimizations can enhance this process, which has propelled NVIDIA's dominance in the space.

Moreover, DeepSeek had to operate under export controls and only had access to the second-tier NVIDIA chips, known as H8100s. The banned H100s feature high-bandwidth memory that the H800s lack. Consequently, to reduce compute costs with these H800s, DeepSeek implemented a memory-optimizing instruction set. 

As for potential Western replication attempts, it’s interesting to note that American companies are not under the same export control regulations and have access to H100 chips, which are superior to H800 chips. This dynamic raises the question of whether Westerners frequently utilize H800s.

A curious aspect of this is that, despite being a lower tier, the 800 series number is labeled as being inferior to the 100 series. The sequence of chip designations appears counterintuitive, leading one to wonder about the reasoning behind the nomenclature. 

Looking at the big picture, the future of AI economically appears dynamic. There seems to be a breakout of AI into distinct lanes. When I mention that something could be a big story in 2025, it's often predicated on trends initiated in 2024. Essentially, you have various lanes of AI development. The O1 lane comprises very expensive but highly effective models that can solve a broad range of problems unmet by older models, albeit at a premium cost.

It seems that O1 will leave several second-tier AI companies at a disadvantage, such as Anthropic or others. Meanwhile, Google has actively targeted the enterprise space with lower-cost offerings and has made efforts to penetrate those markets. There's also the open-source lane, which emphasizes adaptability. Companies like Meta and DeepSeek represent this trend where customization is crucial, particularly in utilizing LLMs for specialized use cases or reasons that require localized knowledge.

This brings us to the discussion about the future of jobs in light of AI advancements. The argument, notably posited by Noah Karl, suggests that advancements in AI could threaten occupations. This aligns with trends in economic history, where new technologies initially appear to eliminate jobs rather than create them, as evidenced by the Asimoglu paper advocating that tech replaces jobs without necessarily generating new ones. 

However, historical patterns indicate there often exists an incubation period, during which businesses progressively adapt to new technologies. This slow adoption can mitigate immediate job losses as the economy gradually adjusts to changes brought forth by advancements like electricity or steam engines. 

The assertion that AI will render roles like those we occupy presently obsolete is discouraging. With advancements in technology, it’s prudent to consider the nuances of job creation and what roles may transform rather than vanish completely. 

So now, when thinking predictively, we delve into when one might reach a point where our outputs — such as articles and tweets — could feasibly be replaced entirely by AI-generated content. Realistically, this could occur sooner than we anticipate, given the current trajectory of AI development. As you noted, even a subset of our work focused on delivering information may find parallels with AI capabilities.

But, it's important to note the economic value extends beyond just the output itself. Substack and platforms like it also incorporate the tangible connection readers have with the writers, often bolstered by the community and relationships built along the way. Even if AI excels in producing written content, the human connection remains significant in determining overall value in this evolving landscape.
Up the stories or the task. Yeah, exactly. Yeah. I don't know. It depends on the writer. I think some New York Times writers have already thought of one, you know, I already think the writing style of most New York Times columnists is really marginal, and I just don't get it. I mean, it's obviously not for me. Right? When I say I don't get it, that's not like an insult to them. I'm just saying I personally don't get it.

There’s a certain type of person. I think like you see this, like, you know, you see this with the AI art deniers all the time. There's a certain type of person who attributes a lot of value to their writing style and obviously has a lot of their ego bound up in it. I just don't understand that. I already think most of the work is finding the scoop or even just brainstorming what to write.

I mean, the Hananya bot is interesting because it doesn't sound like me. There was once I posted something sarcastic, and then it replied to me, like taking it seriously—like it didn't get my own sarcasm, which was very funny. There’s a lot of stuff like that. The training that went into it, there’s this website you go to create the bot, and it's like you only get a few thousand words or something to describe what it is. You can give them links of your work. So it's not really trained completely on everything I've ever written. But yeah, I wonder; I think a lot of writers are probably replaceable by AI.

The countervailing case for this is like text is already incredibly marginal. A lot of the work that people write about, even work that many people consider very valuable, is posted for free. Right? The economic dynamics of writing are very weird already. It’s in some ways already very similar to open source. Funny enough, this idea that a lot of people are writing because it's an economically valuable product. 

I think that's true of some people, right? That's objectively true of Noah Smith. He actually makes money from this stuff. I don't know if you make money from the stuff. Yeah, it's probably true for you. I guess I do make some amount of money for this stuff, but probably a lot less relative to the time that I'm spending on it. I think that a lot of writing is already very marginal, very much a replacement model. Yeah. It’s already too cheap to meter.

I think that’s... Exactly. That's kind of like the premise of training all these language models anyway, right? And I had a take on this when it came to creating art—that people are like the idea that it came from a director's mind, a flesh-and-blood human being who they can relate to. And you can say, “What were they thinking at this moment?” or “What were they feeling?” or “What in their past inspired them?” Right? It’s the story. You enjoy an actor or you enjoy a director and his work, writer, or a musician. The person is part of it. It's not separable, right?

And the same thing with a writer too. Most successful writers have some kind of personality and some kind of... I hate the word parasocial, but I guess it's a fine word. They have this parasocial... Wait, why do you hate the word parasocial? I don't know. It makes me feel like I'm doing OnlyFans or something. It seems like something you use. It seems like something Ayala would use in her line of work. But I guess it makes sense for like, we’re all doing it to a certain extent. 

But it's different. Yeah. Welcome to the clean house. Welcome to the parasocial. It was that tweet from Andreessen today, right? That I posted, which is that, yeah, I mean, humans prefer other humans. And if you have an economy that's just like expanding, it's just crazy to think that like we'll get so much richer and then like everyone will just die. We’ll be able to spend a thousand times more on welfare or make work, but then everyone will die because no one can afford to live, right? 

The strongest AI pessimist argument, I think, actually comes from our mutual friend and New York Times interviewee, Curtis Yarvin, who says like, “Oh, the jobs are already fake,” right? Yeah. I think that’s the strongest argument for it. The jobs are already fake. Exactly. Yeah. Like why can't we just afford more fake jobs? It's like they’re going to replace the professors. It's like Google can already replace the professors. Their lectures are already free, available online, right? 

You can go to YouTube and you can get a lecture on anything you want. You can get a college education for a fraction of the price. Maybe the university adds some value. I mean, it's probably not nothing to like be able to ask the professor questions and see them in person and all that. That's some value, I think. Yeah. Yeah. University, those dating markets. I think that's real.

Yeah. But even for learning, you're assuming that what you're learning is valuable, right? So yeah, I mean, I worry about things going in the opposite direction. We are so inclined to like protect jobs and like make fake work. And even in industries that are not that regulated, like imagine going to a restaurant and it becomes like the robots can do everything. You're going to be able to hire like a nice-looking hostess to like talk to you. People are going to want that, right? 

Don’t they do this in Japan? That's like the good version. I think that's the good version because it actually adds something. People actually want that. The bad version is like, you know, the government weight work program where they’re both not actually adding any social value, probably negative social value, and they're not adding any economic value, right? 

Like it’s something that people don't want and it's not productive. The version where it's at least something that people want—I’m not so down about the streamers. I call them marginal, but like to the people who have parasocial relationships with them, that's probably a very admirable thing to make some guy who's watching a Twitch stream more happy and more connected in life. That’s not necessarily like a bad thing.

I don't know if you agree with Andreessen. You're a streamer pessimist. That’s the real talk we need to have. It’s like, you know, streamer risk. I'm more pessimistic. I'm just pessimistic about the internet. I'm pessimistic about everything being digital and people not going outside. If you were a middle-income country 30 years ago, you still had a decent birth rate. And today, if you're a middle-income country, like the exact same GDP, say like a first-world country had in 1990 or something, today your birth rate has plummeted. 

And I think the simplest explanation—and fertility is just one aspect of what we're seeing—the simplest explanation is just that the screens and the phone and the internet have made everyone antisocial. You can see that in depression and mental illnesses that pop up in like online trads and wokes and all these other weird subcultures, all these weird political subcultures. So I’m pessimistic about not just streamers. Maybe streamers are better than sitting on Twitter, fantasizing about mass deportations. I’m just pessimistic about the internet and what it’s doing to us.

I mean, there are several questions there. I think this is a really deep and interesting and multi-dimensional topic. I think on fertility, I'm absolutely with you. It's now much easier to survive. People are not really worried about child mortality. And there are these economic pressures in rich countries. Even in countries that are relatively poor compared to the US, they still have much better health outcomes. I think that's true. And that naturally results in lower fertility.

On the other hand, there’s an aspect of this deflation that's really bad, which is like, you know, the deflation of attention. I'm not sure if this is your experience, but in my experience, a lot of girls I date just want attention and want to be like taken care of. Yeah, that's what all girls want. The marginal cost of that, at least some version of that, is also decreasing, right? With the streamers and with like the AI boyfriends. Now, I think that’s a little bit exaggerated, but definitely with the streamers. 

And the question is, is that good or bad, right? On one hand, there might be some, you know, really lonely and antisocial girls who now don't commit suicide, and that might be a good thing. On the other hand, you might have more relationships that don't form and people are just engaging in this kind of cope, right? In this economic result, there's like two paths. There's like UBI or there's like actual useful jobs where people, because of their taste for other humans, will get human experiences.

It should be, you get wealthy enough. It should be so easy. A lot of guys would like to be professional athletes, right? But they’re not the best in the world at football or basketball. So they watch sports, and so nobody will pay to watch them. So there’s no market for that. You could imagine like just a wealthy country, like every guy being like an NBA player in his little town or something, right? You just have so much economic... People will find meaning. Meaning is easy when you have money. It's just about figuring it out, right? 

People will find meaning in like a bunch of stranger adults throwing a ball around and throwing it into a hoop. And then they'll find meaning in like their high school team. And that's considered something that's meaningful. I have a local high school, and you're the next town over, and you have high school, and our sons play basketball against each other, right? 

And people find meaning in that. People will poo-poo like professional sports and say, “That's stupid.” But then like high school kids or something, people will say, “Oh, this is community involvement,” or whatever, and it’s like a healthy thing, right? And so you can just have like, you can have high school for adults. We're already doing this, like retirement and social security, retirement homes. 

So like you have that at 65, you have college going into the mid-twenties. And so you just have to expand in both directions, right? And this can be done through government welfare, or it can be done through just kind of market forces or the higher education system, some combination of the two. Right? I would put doom ahead of like losing all the jobs. Okay. That to me doesn't sound as crazy as like, “Oh, no one's going to have any job and then we're all going to starve to death.” 

I think that's just like a very stupid way of looking at it. I was so focused on the meaning part. Recent history has been sort of the opposite, right? The degradation of local sports leagues, right? Local soccer leagues, they would call it football. The phenomenon in recent history is that as there's been more telecommunications technology and better play at the professional level, there's less play and less funding at the local level. Right? So the kind of opposite of what you talked about happened.

Yeah. Well, that can be because of exogenous factors. It could be because of the communications technology and improvements with the professional leagues and so on. But yeah, just in recent history, as technology has gotten better, the opposite has happened. I think as far as the trends are, yeah, even economic growth is not being correlated with people being able to find more meaning.

I think that what needs to happen is like, and I think part of this correction is already happening. And then like people realize that it’s like smoke; everyone smoked and like it wasn't seen as a big deal. But then people realize, okay, this is addictive and we don't want to do this all the time. And then society adjusted both through laws and through norms and customs, right? 

Yeah. What do you think about banning sports betting? I have an article on sports betting to get to Mars, which is kind of tongue-in-cheek, but I'm against paternalism. Like I have to take just like a standalone, like you save a couple of idiots from sports gambling, but you, I mean, how do prediction markets survive in that world, right? How does a lot of things I should be allowed to do survive in a world? I mean, it’s interesting because we had the anarcho-tyranny for a while where the sports gambling was legal, but the prediction markets were... 

Yeah. And it was more predatory. Theoretically the opposite should be able to happen too. It’s like the phones. Like I’m okay with schools and maybe even states like banning cell phones in school. Washington DC goes to Meta and says, “Oh, you have to like create a completely different product that I don’t like,” right? Society needs to adjust to what the internet has done to us, but the adjustment should be private sector instead of public, preferably norms instead of government, preferably at the local level instead of the national or international level. 

You do see this like Jonathan Haidt's book is huge. His work is having a very big influence. Several states, both California and Florida, I think they think they both banned cell phones in schools. Society is adjusting. We had 15 years of like the internet went crazy. Like the internet was let loose and like all teen girls like started thinking they were boys, and there was like all this mental illness and wokeness and increasing depression. We were just sort of unprepared. 

We didn't have the immune system. Our society like didn’t realize like how dangerous we mindlessly let ourselves get sucked into the screen. It’s not been that long. And I see the correction coming. So that’s what I’m hoping. I think something similar will probably happen in sports gambling. It’s like crack cocaine. Like one generation of morons is going to have to be sacrificed before the next generation learns like what would scam like DraftKings and all these other sports leagues are. 

I think these are serious problems, and society has to sort of figure out. And what we need to do is like be aware of the problem and just find ways to do it without just turning Luddite or turning anti-technology. That’s the balance to strike. Yeah. I always be aware of the trade-offs.

Yeah. Okay. I know you have a meeting, Brian. I know you're doing very important work in DC. Is your job done? Are you going to retire now because Trump repealed all Biden's executive orders on AI? Yeah, we're winning. We're not quite tired of winning yet. There are a few more things. I think one interesting thing, interesting point is that Google has not changed its censorship policy at all, but we're not tired of winning yet. So there's still more work to do.

In the long run, I do hope to get back to private sector stuff. I had a moment of FOMO the other day, yesterday, literally reading the deep seek paper, and they were talking about online quantization. And this is like, this is a white whale, no pun intended for a few friends of mine, and just like a fascinating technical problem. I do miss that world. So maybe at some point in the future. All right, Brian. Great talk to you, Richard. See you.
