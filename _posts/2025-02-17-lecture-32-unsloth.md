---
layout: post
title: "GPU Mode Lecture 32: Unsloth"
date: 2025-02-17 00:00:01
categories: short
tags: [podcast_script]
---

[GPU Mode Lecture 32: Unsloth](https://www.youtube.com/watch?v=hfb_AIhDYnA)

uh okay, uh hello everyone, welcome to lecture 32 I believe of GPU mode today. Like I'm really thrilled that we have like Daniel, the Han Brothers Daniel and Mike, here to talk to us about unsoft. I think the first time like I'd heard about you guys was for the nups Alum efficiency competition from last year. Uh, y'all were doing some really cool stuff and some very precise performance work. 

Um, it’s been very obvious to me meeting both of you that you both really love what you do, so like your enthusiasm is pretty infectious. I’m really glad you're here in the server. Um, so yeah, like if y’all throughout the chat, if you have any questions please post them in the Q&A here on Zoom. Uh, and we'll occasionally read them out to Daniel. Uh, so thank you. 

Yeah, Daniel, please take it away.

Yeah, thanks Mark for inviting and thanks to everyone in the GPU mode used to be C. But yes, um yeah, like we started off with the LLM efficiency challenge way back last year. And then, yeah, so like we did unsoft as like a side project. Um, but um yeah okay I'll share my screen you guys see that is that oh press slide show. Uh yeah we see it, it's not in slideshow mode yet, but we just yeah, it's good now. Okay cool. 

Um, so I was thinking what should I talk about today. Um it was going to be about like Triton Cuda like everything, so there will be like half of the talk about that. But then I also wanted to talk about like General systems engineering. Um, ‘cause when we first started unsoft it was like we first made it as an optimization library, like you know making fine-tuning faster reducing memory usage. 

But we did not expect all the extra stuff that came with it, um such as fixing bugs in models and stuff like that. Um, so some of you might know me from like Twitter as well, so we fix bugs for example in Gemma. Me and my brother, like you know, it's currently just two people in the startup, but like essentially we fix bugs in Gemma. Um there were like some BOS token issues, some rope issues, um Leonor issues, um sgo. 

Uh yeah, and like just activation function issues. Also, we do like model analysis as well, so like for example, we post like these, I don't know if you guys see this but like we post these um stacked like you know fully packed paint images. So I use like paint to do all this analysis. Um, it's very fun sometimes it can get a bit tough and confusing when the model architecture is very different. 

Um, and sometimes they do mistakes as well, um for example in Gro I think I did a mistake with the um, I think the 10an H part. Um I think I did division but I was actually supposed to do multiplication. So yeah, there are some mistakes in my model analysis as well but it's fun. 

Um also like for example, like uh you know nvidia's nron 340 billion and did some analysis on that. Um, and also like you know token I issues, there's a lot of tokenization problems in language models. Um so that's also very fun to provide to the community as well. You know recently um if you guys have been following there was a gradient accumulation bug. Um and so like we showed that um someone else so Benjamin posted about the bug. 

Uh, I think one week ago or something and this bug has been in you know most trainers for like four years. Um and essentially the grad in accumulation was theorized to be equivalent to full bash training but it actually wasn't. Um, and you know like I'll talk about that today as well mainly. 

Um, so Joey like posted about a you know a very cool picture showcasing the main issue of grin in accumulation mainly the denominator was not correct in the cross-entropy loss calculation. Um, and yeah so we have like a GitHub package as well so like we post for our fine-tuning our you know our fixes, our bug fixes, Cuda kernels. Um, well we use Triton actually Triton kernels all in our GitHub package as well. 

Um, so definitely check that out. Um yeah, so yeah in terms of like a backstory we first started Unsoft as like we’ve Triton kernels, some mths. Um we have like our own back propagation engine and the goal at the beginning was to make LLM fine-tuning like llama mro jamama. Um it was just llama, it was just llama to fine-tuning two times faster at the very start. 

So it was, this was around December and this was you know launched after the LLM efficiency challenge. Um, and we reduced usage by 70%. That was like at the beginning. Um, but we did not know that there was actually lots of extra stuff that you have to like put together with a package in order to make it work. 

Um, so I'll be talking about like most of these things, for example like you know um tokenizer problems, pre-train model issues, exporting models to like BLM. Um, you know collaborations with different entities and companies and organizations. Um, you know making inference better, doing fine-tuning GPO Oro, best practices for Laur and also like many algorithms, um chunk cross-entropy long context fine-tuning chain mat application training on completions and the gr and accumulation bug fits. 

Um, so yeah the goal is like it's not just about making the Triton kernels better um and you know writing optimized libraries that's actually very important. Um, but that was actually just the beginning of making like a full-fledged um training library. 

And yes there are all bugs and issues in every single one. Um so that was the unexpected part. Um, so yeah, so like we essentially have to notice okay even if you make like you know uh like implement for example we did not support Mist models back when we first started. 

So you know we have to support m models of sliding window attention and then JMA came along and there was like inter interleaved sliding window attention and like Global attention so that was like another new thing. And so like there's always like these new things that come out and so we have to implement them in unsoft. 

Um yeah so it was very interesting like many all of these parts of the stack kind of had like bugs and issues. Yeah so going back to like our first release um essentially we took the transformer architecture um like the decoder Lama style transform architecture and we like essentially like wrote it back, wrote it down in like all of maths you know just try to like make it as like into like one page of maths. 

Um and then we noticed like okay we could like Tron every single um you know like do some back propagation tracks like you know doing gradients um derive all the gradients uh do calculus, do matrix calculus, and then like we essentially like make the entire process fully Triton. Um so our theory was okay this will make training somewhat faster um and reduce memory usage. 

So for example the RMS norm kernel that we wrote um um it's cited in many packages as well. Um, we posted so these kernels were like our beginning core that we posted around December sometime we worked with them around like uh November, December, October, in the LLM efficiency challenge as well and we like perfected them and like released them around December. 

I think December one, I'm not I can't remember the release date, but yeah, so these are Leo Norm kernels you can see that we commented out um you know some of these like upcasting and downcasting things. This is actually through Power and era that we did. 

Especially like the backward kernels we had to like upcast everything to float 32. Um, we actually spent a lot of time and energy trying to like exactly um you know copy the exact methodologies of like the correct gradients and the correct um upcasting and downcasting is actually very painful because like for example the ARs L norm core there’s like not that much casting and downcasting to do but the other cells you will see get more complicated. 

So then a quick question uh, like I've been recently doing a GitHub scan of like Triton kernels that exist and I feel like RMS Norm is like by far the most popular Triton kernel on the internet. Do you have some sense as to like why like relative to all the other kernels people possibly write?

That's a great question. I think RMS norm is like the first kernel. Probably is not that complicated but not that easy so it's like medium difficulty. Um, you don't need to do like some interesting, there's not that much maths that you have to do um for the like derivative for the backprop part it's not that complicated to derive the derivative. 

So my view is like RMS norm is like the first kernel people will try that is like not that easy like you know addition is going to be very easy but I think the difficulty level is reasonable for people to like try it out. 

Um, that's my view um if that answers the question. 

Yeah, it does. 

Yeah, thank you. Does Raid have a question? 

Is that it? Okay, like I think it's gonna be hard for us to do hand raises so if you have a question just post it in chat and we can do like a Q&A live near the end. 

Oh yeah, I would do Q&A. Um, yeah okay so the next kernel that we did was like R embeddings. 

This is actually more involved. Um, the main reason why the rip embeddings were more involved is because now you have to like actually derive the derivative and it was actually unclear what the derivative was. 

Um and so we did like some maths and we noticed that you know in llama um they use a function called rate. Um, rotate half might sound confusing but like essentially they like divided the tensor into two they moved to the right tensor to the left they moved their left to the right and then put a like you know minus sign and stuff like that and it's it’s interesting. 

Um, and so like we um so the derivative was complicated. Um and then we noticed that actually it's just a rotation matrix and if you do the transpose it's just literally just transpose it and you just the transpose is just you just put a negative sign. 

Um, and so like that was interesting. Um and so you can see like for example this line, if backward pass it's just sign is equal to minus sign. So like essentially the most hardest part of it was like deriving the derivatives, the rest is actually not that hard. 

Um, I think there are like some implementations of R kernel which is like they don't actually utilize, they don't actually know that the layout of the kernels was the most important and so like we essentially fuse, we essentially like wrote a kernel which are like essentially um considers the layout of the matrix multiplications as well. 

And so like you don't need to, the multiplications not matrix multiplications but like you don't need to like you know write a very complicated kernel if you just consider that okay um if you draw the, if you like draw on a piece of paper a layout of the Rope kernel when you do the actual multiplications you can actually see that you don't actually need to complicate and write the kernel and just like step by step um you know write all of these lines of code. 

Um, so when we write kernels you have to like write them on a piece of paper and you will see that okay it's not as complicated as people think. 

Yeah, um the next thing it's not really Triton kernels but like we do have like a you know um efficient flash attention inside of our um package. Um one of the fundamental problems though is we had to use three different implementations of flash attention and this was launched back in December though. 

Um, so that's probably why now I think people will I guess you can just use scale dot product detention from PyTorch. Um, I think yeah PyTorch 2.5 just had the um you know Hopper architecture much faster. 

So like yeah, I would suggest people to just use PyTorch's version but you know once we launched back in December um we had to like include three different implementations one from xers one from the actual flash attention repo uh from trow and like the actual PyTorch um scale dot product attention. 

And we're going to implement Flex attention as well into unsoft but one of the problems was we couldn't use Flash attention because um you know the Tesla T4 GPUs did not have B FL 16 support and so also scale J product attention did not have B FL 16 support during the December. 

Um, and so like we had to use ex forers as a temporary measure in order to support float 16 um you know flash attention on GPUs. Um, so that was one reason why we have to use forers. 

Yeah, Lama, but you know J has like um gigo and like other things um but like for at the very beginning Swig Glo it was okay to write down the derivatives and do all the um you know differentiation it was okay. 

Um, but I think the biggest, the biggest problem was again the casting and the downcasting. Um, so like you can see like okay why did we comment out you know DW's upcast right? E has like an upcast. 

We had to like comment out the upcast and so like this was like Dre you know we used many ways to like check out the accuracy of the kernels. 

And so like this is actually the correct way to do it. Um, we you know now we can like utilize you know like when you T compile you can like generate Triton kernels and that's much more helpful right? You don't have to like manually test which one is the correct method. 

Um, you can like generate the Triton kernels and look which upcast is correct. Um, so that's how we normally do it now. Um, no more like pain of like trying to try every single combination. 

Um, we also released cross-entropy loss kernels. Um, it's a bit, the code is a bit like combined together so like I could screenshot it. Um, but the cross-entropy loss was very interesting as well. 

Um, it was mainly about like you have to understand the maths behind it like you know how do we actually derive the derivatives how do I like do this efficiently. Um, and so like we provided some of this um in TR to um during you know like when new models got released we had to like add soft capping, log soft capping through Gemma. 

Um, we added like logit scaling for the coher model so we had to like edit the cross-entropy loss kernels to make those work as well. Um, we also like one of the biggest uh importance was like we moved the casting of like um you know the um linear layer for like float. 

Like when you finish the when you do x times W like the LM head, you have to like upcast it to FL 32 instead you can like move it into the actual cross-entropy loss kernel to like reduce memory usage dramatically. 

Um, so logits you know you just cast it dynamically inside the actual kernel. Um so yeah, so like now I'm going to move over to like pre-train models. 

Um, so there are many models that got released like Llama, Mestro, Jamma, Fe, you know quen, um Kia models, many many models from different companies and organizations. Um, one of the things that we found was there's a lot of bugs in there. Um, and it's not really the model creator's fault. 

I would say that when you when you do pre-training of a large model there's always going to be issues because the organization that like created the model um you know is very large and big. 

And so like there's always going to be some sort of issue um that can't be like solved with like you know the whole organization. You have to like have like one person to look through the whole codebase and look through the whole system to see like if there are any issues. 

Um, so like for example, like Gemma, we found this was actually our first bug fix that we ever did um to like support Gemma and we found that actually Gemma had like some issues with their um using the approximate J. 

Um, and you know, you're supposed to use approximate J, not exact. Um and for example, like also we found a rope fix at the same time and so like rope was not done in float 32 and it was actually done in beat float 16. 

And Float 16 and we found that actually Llama, Gemma implementations should not use um you know lower precision um rope kernels. Um, if you do that then you will lose accuracy at long context fine-tuning um so definitely do not do that. 

Um, so yeah, we posted like around seven or eight bug fixes for Gemma. This was around yeah this is around like March this year um quite a while back. 

Um yeah so, uh so so D, I'm sure like a lot of people have been curious about asking you like these seem like, I mean, the way to solve these would be like a guess and I'm sort of curious how you went about like finding these in the first place.

Yeah, that's a great question. Um, I think it's interesting so like the first thing you have to do is like you have to read the codebase for you know when they release like a model implementation. 

We just take like a skim for it like okay is there anything interesting in this model architecture. So like that's why we do like these model analysis like you know we also analyze models. 

Um, and then we like post them and so like once you go through the analysis you're like wait a second why is this like line over here? Like why is like for example, why is the car implementation approximate is equal to true but then the py implementation approximate is false?

Like you know why is it like that? Um, and so like we essentially read every single implementation that the um companies or like Transformers or any single organization launches and then we compare all the implementations. 

And then when we like compare side by side these implementations we see that okay, they're not you know why is this line like different from the other one? Um, and so like after you do all these analysis and then we like write up a correct version.

So we actually have to hypothesize this is the correct version and then we like once you hypothesize that this is the correct version, we then test okay like is there like errors like you know what is the AL to um norm between the um between each implementation? 

And so like it is a long process but in general if you can like read through different implementations and like see which line is like wrong um, you will then like find all these bugs. 

Um, so it's actually not that complicated I think it's like once you get used to reading a lot of code Transformers um you will see these little issues. 

Um, yeah, like it's I think like the search space is bounded. I think it's interesting. 

Okay, so there is like one long question in the Q&A I think it might be best if you read it instead of me maybe let's just go over that one.

Okay, let me glance at my, how do I? It's a Q&A in the chat oh wait it's in a Q&A, wait, wait. 

Wait okay maybe let me just read it for you then, okay, oh yeah here, I'm a bit confused about this partial upcasting inside the kernel.

If you upcast only one of the two operat, I'm pretty sure the compiler will automatically do an upcast anyway. Oh yes okay, interesting point. 

Um, so sometimes if you upcast or downcast it's fine but sometimes the operations don't actually work. Um, so I think like, so for example if you go back to the wait, let's go back to the thing um where is it? 

Um, yeah right yeah so for example if you upcast and down for example this one right, because they were originally in float 16 right. 

So they're originally in B float 16 or float 16 because we're using mixed precision training all of these like tensor, all of these like you know things are in float 16, B float 16 right. 

So like you have to manually upcast them to float 32 for example, sigmo is fine right? Sigmo you must upcast FL 32 because there's no operation to exist in float 16.

So actually I think, I'm not sure if like new Triton versions but you must upcast this to B 32 um I think otherwise your Triton will crash. I'm not 100% sure but like you must upcast it to 30 32 but I think the other ones um you know General Matrix, you know General multiplications um it's not actually in float 32. 

So you have to actually force the compiler to tell them okay you must upcast this or downcast this right? So like some of them we don't actually upcast. 

Um, so the main point is like during the kernel because we're using mixed precision um all of the tensors are in float 16 or B float 16 and so you must upcast manually um to FL 32. 

Um, if that answers the question? 

Continuing on um okay here so uh, when llama got released was also very interesting this was around April um and not sure guys remember llama 3 was just April, but you know that was very cool.

Um, we also found some issues in it as well um for example like we noticed that so there's like a base model and there's an instructor model. 

Um, we noticed that the base model actually had untrained tokens so um the L team probably accidentally set some tokens to like zero. 

Um so in during fine-tuning it’s probably not a good idea to set um tokens to zero because like some people when you do fine-tuning, um the fine-tuners actually don't know that you know some tokens are zero and so sometimes what people do um they shouldn't actually do this, it's more like a user error is like they use the base model and then they use the Llama 3 chat template to fine-tune the base model. 

Um, and so we notice that actually you're not allowed to do that because the EOT like the end of turn tokens, the start header tokens are actually all zero um in the actual base model. 

And so um if you do that your gradients will become NaN um so don't do that. And so like we for example in unsoft we actually warned the user, actually we error out. 

We just error out and we tell the user that okay if you're using the llama three template on the base model um you will get NaN gradients um so definitely do not do that. 

Um, so we also like provide like a check for all models now so if there's like a llama, mro Jamma, Fe, um any single pre-trained model we now check internally in unsoft that you know like um you're using like you know these untrained tokens please do not do this. 

Um yeah, so this is not a problem just for llama, it's actually a problem for many pre-trained models. Um, when Fe got released there was also like an issue with the sliding window which was 2047 but it's actually supposed to be 2048 um you know like it might not sound very silly like you know it’s just plus one but um it actually could affect some fine-tuning runs. 

Um, so definitely fix that. I'm not sure if they still fix it now, but like essentially they um from what I understand is like they um it was added, they had like plus one in their codebase so it's 247 plus one in their codebase but actually in the Transformers implementation um they did not actually you know um copy paste the exact code and so like the Transformers implementation you must use a power of two. 

Well in this case a power of two um it might be like coincidental but like actually it was 2048 so we verified with the Fe team that it actually is 2048. 

Um yeah and also like for Fe um you have to like um we noticed that they used a very interesting architecture so when you do um they fused all the MLP layers, like the um MLP weights and they also fused the QKV into one um into one large matrix. 

So we found that if you do Laura fine-tuning or fine-tuning um you need to actually unfuse them. So you need to unfuse the QKV into like separate three matrices um and if you don't do that your accuracy will be lower than if you fine-tune an unfused model. 

Um, the reason is because when you fuse the matrices into three when you do lur fine-tuning, your A matrix so when you do Laura, your A matrix there will be only one um and the B Matrix will be fine but during Laura you must like each of the QK and V must have separate um A matrices. 

So definitely unfuse them. So CH templates were also a problem that we found um so we, you know, Llama, Mistro and many other pre-trained models um even like you know they all have these issues of tokenization um you know tokenizers are a bit unfortunate for language models. 

I think like that’s probably the biggest issues for language models currently is like tokenizers, tokenizers are like a good temporary fix to like most issues um like it's relatively hard to get like a piece of text and how do you like chunk them into pieces. 

You could do a like you know like character level that's probably not a good idea. You could do like byte level um or you could use like the current tokenization methods like you know BPE and stuff like that so it's a very good um temporary. 

It's probably not going to be the future. Maybe it's not going to be for the future but the main issue is because there's so many tokenization problems in current pre-trained models um so for example on the left um the sun picture is like spaces um so the sun emoji um showcases spaces in each tokenization. 

You can see Llama 2 is like a bit different from Mist one. Mist 2 had like a different tokenization um Mist 3 had like different ones and so like the goal is like you know which one is correct um because like if you don't select the correct tokenizer um during the tokenization stage, you could like screw up the fine-tune. 

So like definitely you need to like um look at the tokenizer um look at which one is the correct one um and yeah, so like those there's a lot of issues in tokenization and chat templates as well. 

Um and it gets like more complicated when you want to export to GGW. GGW has like Llama CPP um Llama CPP has their own tokenization thing and so like that also causes even more problems as well. 

Um yeah so like definitely look at that as well. Yeah so more tokenization problems um we found for example when Llama 3.1 got released um we noticed that the tokenizer did not add a BOS token by default. 

So this was like a few hours of its release so we worked with you know Hugging Face to like add a BOS token by default in Llama 3.1. Um I think it’s, yeah you're supposed to add a BOS token by default. 

Um and yeah also like Mist Oimo also had some untrained token problems. Um yeah and also was very fun when we were posting these like model analysis on Twitter. Um you can see both Llama and M was like packed full of information. 

Um yes, it was very tough in paint trying to like squeeze everything in into the actual um you know model analysis but it was very fun. 

Um yeah so now moving on to like bits and bytes. Um so in unsoft we provide quantized. We provide Kora and we make that two times faster and use 70% less memory and the trick is we also have to like consider that okay people are going to download the float 16. 

Um and you know like do we need to like somehow make this process better? And so we decided to like start uploading models um to Hugging Face and so we upload like for example pre-quantized bits and bytes models. We upload like ggwfs and we upload like many um models from different model providers. 

Um and so like we do this ourselves as well and so like we find that you know users when they use unsoft um it becomes much easier if we provide our own uploads as well. 

Um and also a very big issue that's currently we’re trying to solve is when you finish fine-tuning with Kora you have like the NF4 weights um you know like the weights get quantized down to like um you know N4 um it's a data format and the biggest issue is when you serve these models. 

We tell people to upcast the NFL weights to float 16 and then we add in back the lower weights. Um, there is another method that we know some people do is like they take the actual float 16 weights um like and then you add in back the lower adapters um directly right. 

So like you don't actually do the upcasting for step um we're still investigating which one's better and you know there are like two methods you could do. 

We find that maybe the first one might be a bit less um ideal. Um, the main reason is during N4 conversion there are like some large outliers um which like you know language models have like large outliers according to the bits and bites paper. 

Um, and so like we find that if you don't, the Kora paper and so like if you cut it you know you might screw up the outliers. And so we find that actually maybe if you do the float 16, just you take the float 16 weights like the actual untrained float 16 weights, the base model and just literally add on the lower adapters. 

We think that might actually increase accuracy um so we're going to push that out into unsoft maybe like in a few weeks. 

Um, so after fine-tuning, we notice that you know people have lots of issues with exporting models. Um, so you know we don't when you do the fine-tuning process that's okay, but then like how do we actually run the models? You know, after the fine-tune process. 

So we allow people to like run the models in you know native Transformers. We also like allow people to run the model in VM, Llama CPP, Olama and more. 

Um, we found actually that if you use like a collab, um, if you save to save tensors it’s actually going to make the saving process five times slower. So actually you have to save to PyTorch bin of style. 

Um, so that was actually very interesting so this actually made saving like much faster. Um, so we also provide like different quantization methods for people to like push to Hugging Face as well. 

Um, and so you know that was like a very highly requested feature pushing to Hugging Face um which we also added. Um, we also like allow you to like push multiple quantization methods, for example, like Llama CPP, they’re like different um you know different precisions you know int 8, int 4 and stuff like that. 

So we allow people to like push different um you know versions of the model to like Hugging Face as well. And we also like worked with Olama to like you know now you can like fine-tune a model and export it to Olama and use that on your local computer as well. 

So we also provide I think our biggest difference with other training
was to build an extensible system that could potentially adapt to various hardware architectures in the future. 

Moreover, user experience played a significant role in our decision-making process. We aimed to create something that was not just powerful but also user-friendly. Triton's design allows for easier debugging and a more intuitive interface for developers compared to traditional CUDA development. This makes it accessible even for those who may not have a deep background in CUDA programming. 

Additionally, the community aspect was also very important to us. Triton's development has been influenced by community feedback, and we wanted to ensure that we were aligning our efforts with the needs and capabilities of the developers. We realized that the user experience and community engagement could foster a more robust ecosystem, encouraging contributions and collaboration.

In terms of performance, Triton offered promising optimization opportunities. Its ability to automatically optimize kernel execution was appealing, particularly as we were looking to push the boundaries of performance in machine learning applications. Thus, the combination of user experience, adaptability for future hardware, and performance optimization made Triton an attractive choice for our needs.

Overall, our motivation to use Triton stemmed from a mix of a desire for a better user experience, adaptability for potential future hardware changes, and the performance benefits it provides. The journey and learnings from CUDA helped us immensely, and I believe that combination has allowed us to leverage the best of both worlds in the long run.
3420.52 - 5.36: was we selected Triton as like a intermediary um method to like not do just Cuda but like do like a general language for like um you know Titan programming. It's like you know it compiles down to like all of the other STS so like we don't actually have to write like just Cuda code. 

Um I think if you write Cuda code this will still you can get like more speed ups um like maybe like 10 20% more maybe um but like I think Triton is good enough. Um we generated rely on like you know Torch compile um we rely on like you know the frighten teams they will definitely put all the optimizations back and like make the compiler better. 

So it's more like a course that we made that it should be good for like future proofing kind of um yeah and also it's easy to yeah like it sort of makes sense because like I think a lot of the optimizations you really talked about like are also algorithmic in nature. They're not purely systems level optimizations. 

Yeah and so if you're doing like math then like sticking to Python seems like an easier choice. Um all right so this is more gossip I guess chat is going towards gossip now. So have you been watching the sampling methods that XJ DRR is exploring with the entropic code base? 

Oh yes I saw something like this on um Twitter I've not actually explored it but um it's very interesting. I think there was like um I think from um Opti LLM um they posted on Twitter how um I think like it's it still does worse than like you know Chain of Thought. Um I did investigate a little bit but I have not really investigated that much. 

Um I think I'm going to do that over the weekend but yes I did see it's relatively interesting. It does increase accuracy a lot so very interesting um that's all I can say um so I'm not the best person to ask about that. 

Um yeah all right um so uh Eric uh okay we have Warren who's saying he's been working on it. Yeah, Warren if you have any comments like to post it in chat. Eric again is asking I haven't really looked at the math yet but if grad accumulation is not equal to mini batch do we also get that the expectation of the mini batch is not equal to the full data set gradient? 

Yeah, so okay there are like two I think there are two points of the question. Um I think if you do mini batch, if you do mini batch training do mean wait does the question mean like if you do like full batch like the whole data set like actually grading descent or like okay wait wait okay maybe a backtrack before when you do accumulation. 

The theory was it was equivalent to full batch training so if you use like a batch size of like 128 um you know just a full batch size of 128 the theory was this would be the same as if you use gradient accumulation steps of 128 um and batch size of one. Um that was a theory but actually it's incorrect right so like if you if you use old gradient accumulation methods this was actually not equivalent to full batch training. 

Um so definitely that's not correct but after the fix if you actually divide by the correct denominator actually it is equivalent um except for like some floating Point errors. There is like we do show there is like floating Point accumulation errors of like 0.01 something around there so there is like an L2 Norm of like 0.01. 

So there is that issue but if you use float 32 right if you just use float 32 um then gradient after the fix it is equivalent um but before the fix it was not equivalent. 

Um so I think that's trying to answer the question I think the other part of the question was like um the difference between full like actual full batch training like if you shove the whole data set in um I don't think some people do that. Like you know I don't think some people like shove all one trillion tokens and like train like you know do like make that as the back size. Um I don’t think some people would do that. 

Um the main reason is mainly like speed um and you know you're not going to get any like gradient updates if you like shove in one batch like you know the whole batch size the model probably won even train that well. 

Um so definitely you have to like shrink the batch sizes to like you know. I think Llama was like 1 million um batch size I think um so yeah don't use too large batch sizes um yeah otherwise your mod won't train um at all. Yeah like for what it's worth there's like some other hardware vendors. 

Like when I worked at Graphcore like the research team there was investigating how it's like much you get much better convergence if you can do like batch size one training. It's just that like on GPUs that's not a very good choice um I think Yan was sort of like plus one some of this work. All right more questions. 

Okay you have a lot of questions by the way um so RT is asking are we supposed to use gradient accumulation from Hugging Face now if we want to get checkpointing plus One DB logging to work in the training ARS? I never used UNS Sloth but are the one one Tob logging and checkpointing there in there if I change to UNS trainer? 

Yeah so um we implemented the effects of Hugging Face a few days ago. So if you install the nightly branch of Hugging Face Transformers um the fix should be there. Um for UNS, we provided the fix on day one um we did not... it was like just pure pytorch code so there was no like one one B like logging and like you know any logging things there was none. 

Um so but now we so in UNS I think I pushed a commit yesterday to like install the late nightly Transformers version and so now there's like logging so you can now use Transformers directly um inside of UNS as well. 

Um so this fix is a nightly Transformers um so yeah no need to like you know you it's not need to use our trainer but um if you want like faster training and stuff like that um we do have to fix internally. 

Um I think there are like some issues for um so if you just use a Transformers code I think there are like some still some issues so we're still working with the Hugging Face team to fix it so if you do want like a stable version of gradient accumulation um then just for now you should probably use UNS trainer for now. 

Um but I think we’re still working with the Hugging Face team to like fix all the issues. Um yeah but it's not just a Hugging Face problem so if you use like other trainers. 

I don't know if they're fixed so do not like you know don't like ask me if the trade is fixed or not like I don't know. So like some I know a lot of people like you know there are a lot of training libraries um and if they all implement gradient accumulation they will all have this problem. 

Um and so like well not all trainers but like most trainers will have this problem so I'm uncertain if other packages have fixed it. I do know like firsthand that Transformers have fixed it um you know because we worked with them to fix it. 

I do not know about other packages um yeah. Al obviously UNS has a fix as well but like yes I'm unsure about other packages. 

Um yeah um so Tanish is asking have you checked BitNet CPP and what are your thoughts on it? Yeah so was this released yesterday? I think it was released yesterday. 

Yeah it was pretty cool um so I think they also released the models I think as well. So they one maybe they did they ever release the 1.58 bit models? I think they maybe yeah. I think they also released the models as well together with it. 

Um I think the more interesting part was I think so orbe did they release the models before? I'm actually uncertain um I think like they didn't release anything you could run up until yesterday was my understanding. 

Yeah actually it was the models um yeah it was more interesting than the models I think that was my view was like wait a second they actually released the models that they like did you know the training runs with this 1.5 A bit thing. 

Um so like yes it's very interesting that they released the models um and they did show that actually accuracy is very similar so like it's very interesting actually um and I think in general um I think so I yeah because this is I think this is CPU only right? 

I haven't actually checked it too much but this is CPU only for now is it correct? Or maybe I'm misrepresenting it? Is it typically CPU only? Yeah yeah so like I think um obviously this would be very interesting if this was GPU as well but like I think for now um it's relatively complicated to like do it on GPU because like you know you're not leveraging the... 

I guess you could like maybe UPC somehow in the tentacles but like it's probably not you know it's probably not going to be that effective in GPUs um maybe if Nvidia like you know adds like support for this in like their newer hardware. 

Maybe um but you know I would fall back to like float 4 you know float 4 in the new Blackwell chips is very interesting. It could be like an intermediary like a you know a temporary solution but I think the 1.58 bit is actually very interesting. You can essentially fit you know very large parameter models and like fit this on like CPUs only um and the training losses don't seem that bad. 

Um obviously there is like there is a gap right there is a gap between full float 16 training um even float 8 training with the actual 1.58 bit um and we're not exactly sure about the actual true you know um capabilities of it. 

Like you know we're not like is this going to be actually that useful for like for example long context um you know long conversation runs is this going to be useful? Is it going to like forget some things? We're not sure yet so I think it's very good for the teams to like release this out to the wild and so I guess it remains to be seen. 

Um I will be trying this out over the weekend as well so let's see if this is very useful. Um but I think it is I think the biggest importance was they actually release the model um and so I was actually expected them not to release the model. 

So like you know like why is there such a long you know like why is this taking so long for them to release the model right? So like and finally they released it um so that was yeah that was very insightful. 

Um yeah so if anyone is interested in pre-training like BitNet models on GPU like Gurst has like an implementation in TCHO it's very experimental. We're also not sure how useful it is but if you're about experimenting okay I will take like maybe three more questions and then we'll let like Daniel get back to work. 

Um so so Mark is also asking like have you seen Lolcats and would this be something you're interested in integrating into UNS Sloth? 

Um is this the um I should probably just check uh it's the it's the linearizing LLMs basic linearizing attention and oh yes I remember that one um the one yeah yeah. 

Um I don't maybe U maybe someone should put a feature request um I think like I think maybe we might maybe I'm not I'm not exactly sure yet um I think for now we want to like focus on getting more model support. 

So actually one of our things that is on a road map is like making Apple support um we do need help on like Apple support that's one of the things that we have to have. 

Um but like once we get like Apple support done, ride like a UI um do like some extra stuff like fine-tuning making um Vision support maybe we'll add maybe that. 

Um So maybe someone should like make that as a feature request first um I'll look into it. I think I did like like a Twitter post about it. 

Um I did not like investigate the package yet but I think that's I'll also write that as like a to-do list um so it's a lot to do in the weekend um but I think I did read about it on Twitter. 

It's actually very interesting linearizing attention um I think I think my take is I still think attention is still going to be here to stay. Um I think the trick is attention is like you know you can see the entire context in one go. 

Um and if you linearize attention you definitely lose some you lose something right? So like we can't really say what you lose but I think for I like you know the experiments show that generally it's fine. 

Um but I think in general I think through like for example on local llama on Reddit on Twitter when people try these linearized attention type mechanisms um the quality just seems to be worse in general than full attention. 

Um I think the trick for example people read the character AI blog about the you know um how they did like faster inference instead you should use like you know interleaved tension right? 

So like six sliding window attentions very small you know very very very small um you know sliding window like 2048 or 4 and then some sort of like large Global attention um that seems to work very well. 

Um and so like I think maybe you could like do combination right linearize attention but then add one global attention could work um so like I think you need to add global attention somewhere um and yeah that's that's my take um. 

I think you're your your instinct is correct and I think even the same lab from his research like basically later published work saying exactly what you're saying which is basically you need the global plus the sliding and that's like will out compete most sort of like linear attention variants. 

So maybe I'll ask my own question then here um so something kind of interesting is like you know you don't have control over how large labs train their models and they may make certain choices let's say in training that makes like fine-tuning or inference slower. 

Uh and so like one piece of work I'm seeing is sort of like the sort of model surgery where you like later fine-tune a model to recover like some of the accuracy degradations and I'm wondering if this is like something uh you you've explored and if not why not? 

Yeah so is this like for example like you quantize for example like quantize the weights down to like one bit or two bit and you train like C adapters is that? No no it's more like for example you change like the norm pattern from a model and then you uh you you you find unit to recover the accuracy laws. 

You change the activations uh you change the kind of attention like it's sort of like like actual model surgery interest. Yes, so I think there are some people in the UNS Community who have tried this out. 

Um I have not tried this out personally so like do you mean like for example like changing like Swig Glo or like prob not but like R instead something like that yes yeah. That could work um I think if you so the trick is I think the trick people do is like there's two ways to like go about it. 

You can either train QA you can train Laura adapters combined with a model. I think someone actually released a... was that like a few days ago? Like someone actually released something about this they train lower adapters as well. 

Um one of the model releases did something like that um they you train lower adapters together with the actual change that you did to the model and you can actually recover the accuracy back. 

Um this also works for like if you if you use Torch AR for example right you quantize it down um and then you use like for example Mbius HQQ you quantize it down in Torch AO now. But like anyways like if you use Torch AO in general um the accuracy does degrade but if you train lower adapters on top of it you can kind of like recover the accuracy back as well. 

Um and so like I think if you do like if you train low adapters if you like do if you edit parts of the model and if you do like continuously fine-tune on the model you can recover the accuracy back. 

Um yeah I guess it's kind of interesting as well like you know why does this even work um I think it makes the low adap- I think makes sense for me personally if you like remove like if you swap out this Swiglo and like replace it like Rue like it doesn't seem like it should work. 

Um like because like you're kind of like truncating all the small numbers to like zero it doesn't kind of doesn't seem to make sense but I think it could be interesting um yeah. So I think experiments do show that kind of works maybe not all the time. 

I think like some other things that people do is like they specify the network. Um there were like some research papers which show that if you like you know set if you set like 99% of the small weights to zero um and then if you do that the accuracy is really really really bad. 

Um but if you train like if you find talur adapter on top of this changed model or you continuous fine-tune in the model um you could recover back the accuracy. 

Um so I think like yeah so I think it is relatively very interesting that this seems to work. So um yeah yeah yeah like I guess the way I would understand the intuition you described is like Laura has typically thought of like something to adapt the model to a different task. 

But you could also think of it as something that adapts a model to basically pretend like it's a different architecture. 

Uh yeah and okay I see um yeah that makes sense yeah so there's there's more questions. I'm sorry Daniel like we're gonna okay so so uh okay so is UNS Sloth used in Federated learning contexts like Poland hi mind pedals open Dilo style? 

You don't think so? Um so is pedal wait you mean like distributed learning is that I'm not actually not familiar, is that? Yeah like I think they mean that like the actual distributed learning like the decentralized learning I guess is what people are referring to here. 

Wait what? 

Speak now. Yes, sorry is Daniel still here? Somehow your co-host got removed for a rejoin back. 

Sorry okay all right we're back. Wait did we both crash? Yeah sorry folks. Yeah anyways back what was the question um let me see. Uh we're still recording yes. 

Uh yes so so I think it was about decentralized training basically. Yeah, so you could use like I guess you could use UNS Sloth on like each device to like make it faster but I don't think so. We don't have like an orchestration system to like do distributor training we like you know like computer one computer two like you know do some sort of like communication between them. We don't have that yet. 

Um I think Noah's research is working on that news research I always get the pronunciations wrong as well. Prime was it Prime intellect they did something like that. 

Um so like I think like yeah for now we don't support that um but yeah um yes we don't support that yet. Maybe someone do a feature request as well. Maybe, maybe um this feels this feels like a good Community contribution to whoever asked the question. 

Uh okay so so maybe the next question again so from Eric but like I think this is in reference to the mini batch point. It's like but the mini batch from theory should be in expectation be the same as the full data set. 

Yeah, so that's correct in expectation. Um so like if you do like large batches in general for pre-training runs it should be fine um because like you're essentially smoothing out the denominator across all of the data so it's generally okay. 

Um but for fine-tuning runs it's definitely not good right? So like because your sequence your batch sizes like 32 or like 16 or 128 they're not large but even batch sizes 10, 24 they're generally not good. 

Um so for smaller runs this effect is much more pronounced um but I think it definitely needs to be fixed right? So like in expectation in the old theory was in expectation this was good right? 

So like but we show that actually it's not in expectation, it's mathematically equivalent. Right? So actually it is the same um if you do this correctly right? So like in order to make it exactly the same you have to actually divide the denominator so like essentially this was like a this was actually a hidden like a small little bug that was in all of Transformers and all of the you know trainers that if you don't actually divide by the correct denominator. 

You will get yes you only satisfy the in expectation part right? So like large batches will be fine but on smaller runs this this effect is much much more problematic. 

Um for example in DPO especially DPO for example right DPO people don't use large batches um generally speaking DPO you use like not you don't need to use like one million batch sizes right? 

So like you can use much smaller batch sizes and so in DPO or like reward modeling or OPO this effect is much more problematic and so like I think um so after the fix we show that it's not just in expectation it is actually equivalent um if that makes sense. 

Yeah okay absolutely um so Patrick is asking have you checked DeepSpeak Janice uh the unified multimodal understanding and generation? Yes so interestingly even the DeepSea models we do not support it the sloth yet right the DeepSea COD type models um so that also remains I will have to check that as well um for multimodal specifically as well. 

We're trying to get that out as soon as possible as well so Llama 3 to um multimodal that is on our road map as well. 

So maybe next week I do not know um so yes another thing that is on our to-do list um if people want to help in contributing that as well you know but we're kind of like drowning in feature requests now. 

So like you know if anyone wants to help out that would be much appreciated as well. Um but yeah multimodal for Llama 3.2 maybe next week. Maybe um yeah it's more like how can we actually fit this in like a T4 GPU that's the main question. Um and so like that's yeah so we're trying to do that as well. 

Yeah um any new suggestions on learning rates depending on model sizes for fine-tuning or do the older rules of thumb still hold? That is a great question. Um I think for so the Laur learns less forgets less paper is very useful so we collaborated with them so like they cited some of the methods that we decide like you know said that okay you should use like you know the rank needs to be equal to the alpha. 

The learning rate needs to be much larger so we do show that some of the experiments that they showed is like you know you need to use some of the correct presets. 

Um I think for you know for fine-tuning runs we generally tell people to use learning rates of like you know 2 e minus 4 um to 2 e minus 5 somewhere around those ranges. 

I think for pre-training runs you have to use like much smaller learning rates um but I think for fine-tuning generally um you know you don't need to use very small learning rates um for model sizes. I don't think there is a... that's a very interesting question. 

So I think maybe the question is like do smaller models can smaller models use like different learning rates than like large models like Llama 70 billion or Llama 45 billion? That is a great question I think maybe someone should write a research paper on that. 

Um I don't think there's like any research on this like you know can you fine-tune small models and large models at the same learning rate? Maybe the large models you can use uh maybe the large models you can use a smaller learning rate maybe a smaller one. Um and in the small models you use like a larger learning rate maybe or the other way around. 

I'm actually not sure um yeah to be honest I don't know. Um yeah yeah there's very much feels like a run the experiments kind of thing. 

All right so so so maybe next question from Gecko do you think Torch Compile will ever be as good as writing Triton kernels by hand? That is a good question um I think we so we checked oh there's like a video of like the Torch there was like a video we did like the Torch team as well. 

So like I think in general I think if it's just about fusing so fusing p compile is fine so definitely do that. Um so I would also suggest people to like just use if you have like a Torch if you like have a model literally like if you just write code in PyTorch just add Torch Compile. 

Like I don't know why people don't do but like just add Torch Compile this makes your mix PyTorch magically faster. I think one of the goals maybe of pytorch is to make this default maybe somehow um like allow this to be so stable and so usable that you can just use Torch Compile everywhere. 

Um so maybe that's one of the goals of PyTorch I'm not sure I'm not from PyTorch so maybe that's one of the goals. 

Um but I think I think the biggest difference though is like for the fusing component I think you know for Flex attention now right so like Flex attention does have you know like some handwritten Triton kernels inside of actual PyTorch and so they like they use this template to like you know specialize the template um for like different parts. 

So like that's one thing um I think for other algorithms there is like a lot of math involved um there are like for example chunk cross entropy was like a thing that we like you know had to like um think about the maths and stuff like that. 

I think maybe now that might be like that might be like um placed into Torch Compile um but I think there's many other components that's like that do require lots of maths um that's relatively hard for Torch Compile to do um but I think Torch Compile can get you most of the way there. 

Um there's like you know there's like much more stuff that you have to do for the mass component that's left um yeah maybe in the future. 

Yeah I mean so what you're describing is also very in line like there's like if people go on open review and check the reviews for The Flash attention paper reviewer number two left an interesting comment which was like well like why do we need this work like can't compilers just do this? 

And like I think a TiR point was like no because like compilers won't like algorithmically change your math and make sure it's numerically equivalent. I guess once humans figure out those tricks you can always template match them. 

Uh but like I don't think compilers are good at novel math like this is actually one area where maybe LLMs are a bit better but like I think for now humans are still winning. 

Um okay I'm G to keep going with more questions so do you think training Laura on BERT seems like a free lunch or does that not make sense to do? 

Yeah yes you could do that I think some people have actually asked us to support BERT inside of UNS. We do not support that yet so one of the problems of BERT is like you know it's an encoder style so like it's a bit different from general you know like general decoder style models. 

We don't support that in UNS yet but yes I would suggest that yeah people could train Laura's on that. Um yeah I don't see why not um but I think it's a bit different though. 

Um I think it's not different in terms of results. I think the results will be still fine um I think you like Laura is not like a it's not just for decoder style language models right? 

Laura is using like you know diffusion models, it's using you know image models, it's used everywhere. So like Laura is like a general technique that can work. 

Um yeah so I guess yeah yes you should yeah you should try it out for BERT um yeah. 

I'm gonna ask you one last big question and it's a batch of like maybe five questions I see in chat uh people seem to really like your approach the way you go about like debugging and testing and talking about your work and people want to work more with you uh and they're trying to figure out like what does that actually look like? 

How do I contribute to UNS Sloth? Like what kind of research can I do on top of UNS to be helpful to the UNS community? So where should people engage with you? Can I maybe potentially ping the server as like one place where you could also do this? 

Uh so yeah just like I guess one mega question for you. Yeah definitely like yeah so we have like a GitHub package so if anyone wants to like contribute on the GitHub issues there's a lot of issues. 

Um some of them have not closed but there's a lot of issues like feature requests. Um yeah so definitely that's one way to collaborate. 

Um we have like a Discord Community ourselves on UNS um but the GP mode well could okay re it to g mode but the g mode definitely one place to collaborate as well. 

I'm also on it as well so like sometimes I will linger around and so like if you want to collaborate on there that's also another way to collaborate. 

Um you know we also tweet on Twitter that's another way to... I know people unfortunately some people DM me on Twitter and LinkedIn and email me for like fixing GitHub issues. 

Um please just use the GitHub issues directly okay fine if you want to escalate a problem I would respond to that. Um so if you want to collaborate through those channels you know like to be honest we can collaborate. 

Like if anyone wants to collaborate um we like you know everywhere any public forum. 

Yeah any public forum we'll always answer um we scour like we essentially do like daily scouring of like everywhere so like we all we'll see your um yeah. 

We more than happy to collaborate um and we also we always welcome more contributors um yeah. 

All right well uh I think that that's probably like a good good time to end this. Like Daniel thank you so much for coming in. Michael thank you also for for being here with us. 

Um so for next week actually for the next two lectures uh we're gonna have like two two two lectures on like low bit kernels. So we're going to have like Mam and then we're going to have like Lei uh from the Bit Blas team at MSR. 

So like it's going to be a little bit galore for the next like two weeks. Uh so yeah if you care about efficiency and if you enjoy this lecture I’ll bet you'll enjoy the ones coming next. 
