---
layout: post
title: "Anthropic's Dario Amodei on AI Competition"
date: 2025-02-05 00:00:01
categories: short
tags: [podcast_script]
---

I think it's perfectly possible to distribute the benefits of AI to all the world, including China and other authoritarian countries, without distributing the military capabilities.  The plan has to be to start from a position of strength and work out how this technology can benefit the whole world and how its downsides can be mitigated.

Dario Amadei, CEO of Anthropic, welcome to China Talk.

Thank you for having me.

Let's start with a brief picture of how rapid AI progress could affect national power.

A few months ago, I wrote an essay called "Machines of Loving Grace," which focused on the positive applications of powerful AI.  I defined powerful AI as a "country of geniuses in a data center," a phrase that captures the implications of what companies are trying to build.  Imagine a country of millions, all polymathic Nobel Prize winners, working within a data center. This drastically changes national power, accelerating economic and scientific progress.  Unfortunately, it also impacts intelligence and national defense, from controlling drone swarms to analyzing intelligence.  Having incredibly smart entities with virtual control offers significant power in many ways.

Why write an essay about export controls?

The reaction to DeepSeek and my experience in the industry highlighted inaccuracies in the discourse, stemming from a lack of understanding of the technology's trajectory.  DeepSeek, a Chinese company, bypassed previous development steps and released a model, leading to a misperception of cost reduction in AI.  This fed into a stereotype of "cheap things made in China."  However, while there's an ongoing trend of decreasing costs in AI, the trend of investing more for better models has outpaced it.  DeepSeek's release, while innovative, fell within the existing cost decrease curve, not a groundbreaking cost reduction.  The key takeaway is a new competitor entering the arena. DeepSeek joins the ranks of Anthropic, OpenAI, Google, perhaps Meta and xAI, as a company capable of creating frontier AI models. This is a milestone and a matter of concern, but the implications were initially overblown.

The significant update is the skill of one, and perhaps more, Chinese players.  What should people reassess about the model development gap going forward?

We've been tracking DeepSeek for a long time, aware of their potential.  For those just learning about them, the update is this: previously, three to five US companies could create leading-edge AI models. Now, there are three to five in the US and one in China.  Their continued progress depends on their access to chips, particularly at a larger scale.

The AI safety community, yourself included, has warned about the risks of racing dynamics.  How do you reconcile this concern with the argument for maintaining a US lead in AI development?

I'm concerned about a race, particularly between equally matched US and China.  The economic and military value of AI incentivizes continuous development, absent strong evidence of danger.  Legislation in the US to address AI risks faces opposition due to the fear of China gaining an advantage.  Therefore, the US must stay ahead of China and other authoritarian countries, both due to concerns about their use of AI and to avoid a racing dynamic. Simultaneously, we must protect against the dangers of the AI systems we build. Export controls may offer a solution, creating a margin between the US and China, allowing time to focus on safety.  This is a difficult situation with real trade-offs, requiring a balance between acceleration and caution. Export controls widen the gap, providing a buffer for governance.

Can you explain the difference between a race to the top with China versus with Western peers?

Western companies operate under the same legal framework, enabling coordinated safety practices. Voluntary actions by one company can incentivize others, as the threat of regulation looms. This coordination is impossible with China due to the adversarial nature of the relationship. While cooperation should be explored, it's limited by differing systems of government and long-standing adversarial dynamics.  A convincing demonstration of imminent danger to human civilization from AI could change the game, but current arguments, while concerning, aren't compelling enough to prompt a pause.  US efforts to discuss AI safety with China haven't seen much interest, but hopefully this will change. We are working to educate the world about AI safety, and hope these ideas diffuse, including to China.  Realistically, progress will be marginal, similar to international treaties, where compliance varies. Compelling evidence of global threat is key to driving cooperation.

The analogy with China's focus on climate change doesn't quite hold, given the dual-use nature of AI.

Yes, and China's commitment to climate goals has been mixed, which is what I'd expect with AI safety as well.  Even among Western companies, voluntary compliance with safety measures varies.  Treaties and goals might improve safety marginally, but the fundamental challenges remain.

What chips should and shouldn't America be selling to China?

Export controls weren't designed to prevent DeepSeek from acquiring tens of thousands of chips; some smuggling is expected. They're more effective at preventing access to millions of chips, which represents a much larger economic scale.  Reports suggest DeepSeek had a mix of H100s (likely smuggled), H800s (exploiting a loophole later closed), and H20s (suitable for inference, not training, possibly used in the second stage of their model).  Given the increasing importance of inference, I recommend banning H20s as well, while carefully targeting bans to avoid harming legitimate economic activity.

There are reports that DeepSeek used Huawei Ascend chips. Given China's own export control regulations, are you concerned about Anthropic's future ability to access these chips?  [Joke about Anthropic producing chips removed]  What are your thoughts on China's domestic chip production capacity and its implications for export controls on semiconductor manufacturing equipment?

China might catch up in chip production over 10-15 years, but the supply chain is complex.  Export controls on manufacturing equipment and repairs hinder their ability to create chips comparable to Nvidia's or those used by Anthropic. The software ecosystem is also a factor, though less crucial than hardware. I believe Huawei chips are unlikely to become comparable soon.  The critical period for competition is 2026-2030, requiring policy focused on that timeframe.  In the fast-moving AI world, 10-15 years is an eternity.

Was the Biden administration's policy of allowing Chinese firms to use chips on Western hyperscalers outside of China acceptable?

The diffusion rule limits this practice for Chinese cutout companies.  It's less concerning than chip sales because access can be revoked instantly.  However, it still needs to be addressed, especially at scale, as models trained on those chips remain accessible.

What do you make of DeepSeek open-sourcing its model?

The more important factor is DeepSeek's ability to produce a strong model, not whether it's open-sourced.  The implications are similar even if the model were served via API.  The key is that a Chinese company has produced a strong, scalable model.  Export controls determine their access to millions of chips.  Open weights differ from open source, lacking source code. The analogy breaks down.  Companies often shift from open weights to monetization. The availability of weights is mostly a red herring.  Commercially, model strength is the primary competitive factor.

When will governments start worrying about open-sourced models?

The difference between open and closed models is overblown, both commercially and for security.  A powerful model, whether open or closed, poses a risk if stolen or released.  Less powerful models are less concerning.

Regarding reports that DeepSeek distilled a model from OpenAI:

I can't confirm the accuracy of the reports. Distillation is possible, and against terms of service.  Developing detection methods and monitoring techniques are important, but this will likely be an ongoing cybersecurity challenge.  Hiding the chain of thought in reasoning models makes distillation harder, although jailbreaking is possible.  We recently released methods to make jailbreaking more difficult.

If stealing model weights becomes a top state priority, how does that affect the gap between leading labs and others?

The maximum feasible gap is a couple of years, which is significant for both advantage and safety.  Preventing theft for two years is challenging but possible, requiring help from the US government and the models themselves.  Our Responsible Scaling Plan (RSP) anticipates this, with escalating security levels.  ASL 2 represents current strong security measures; ASL 3 targets non-state actors; ASL 4 and 5 target state actors.  These higher levels are triggered by specific model capabilities.

Considering the US government's cybersecurity track record, how much tacit knowledge is required to effectively utilize stolen model weights?

Running the model isn't difficult, but using it to develop the next model is significantly harder due to optimization for specific clusters and setups.

What message do you have for PRC nationals studying in the West who might be hesitant to work for you given your stance on China?

Concerns about China aren't about Chinese people versus American people.  We welcome talent from around the world.  The concern is authoritarian governments and their use of technology.  This isn't about animus against a country but about concerns about a form of government.

Do you have anything to say to DeepSeek?

They seem like talented engineers.  I urge them to take AI safety seriously, particularly AI system autonomy and misuse.  DeepSeek's models performed poorly in our national security evaluations, lacking safeguards against generating harmful information. While today's models aren't literally dangerous, this could change soon.  I hope they either come work in the US or take these risks seriously.

The dominant framing is that AI will entrench autocrats.  Can you envision AI, especially open-source AI, as a democratizing force?

Yes. It's not about open source versus closed source.  Even with open-source models, those with the largest clusters and fine-tuning capabilities hold the advantage.  The key is how the technology is used.  AI can strengthen democracy through fairer administration of justice, by reducing subjectivity in judgment calls.  It can also facilitate democratic deliberation and consensus-building, as shown in our collaboration with Polis.  Improving science, health, and mental health through AI can indirectly enhance decision-making.

Your two blog posts seem to be in tension. How do you think about China, with its large population, in the context of your vision for a more flourishing humanity?

The two views are compatible.  "Machines of Loving Grace" advocates for locking down the supply chain, including export controls, lab security, and semiconductor equipment controls.  It's possible to share AI's benefits without sharing military capabilities.  Models can be served via API for beneficial purposes like drug development and energy production, while blocking harmful applications.  Long-term, we'll need international governance of AI.  A US lead enables negotiating safe deployment from a position of strength. The plan isn't to crush adversaries but to leverage strength to benefit the world and mitigate downsides.

