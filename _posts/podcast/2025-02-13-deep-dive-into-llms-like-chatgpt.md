---
layout: post
title: "Deep Dive into LLMs like ChatGPT"
date: 2025-02-13 00:00:01
categories: podcast misc
tags: [podcast_script]
---

[Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)

Hi everyone! So I've wanted to make this video for a while. It is a comprehensive but general audience introduction to large language models like ChatGPT. What I'm hoping to achieve in this video is to give you kind of mental models for thinking through what this tool is. It is obviously magical and amazing in some respects. It's really good at some things and not very good at others, and there's also a lot of sharp edges to be aware of.

So what is behind this text box? You can put anything in there and press enter, but what should we be putting there? What are these words generated back, how does this work, and what are you talking to exactly? I'm hoping to get at all those topics in this video. We're going to go through the entire pipeline of how this stuff is built, but I'm going to keep everything sort of accessible to a general audience.

Let's take a look at first how you build something like ChatGPT, and along the way, I'm going to talk about some of the cognitive psychological implications of the tools. Okay, so let's build ChatGPT. There are going to be multiple stages arranged sequentially. The first stage is called the pre-training stage. The first step of the pre-training stage is to download and process the internet.

To get a sense of what this roughly looks like, I recommend looking at the URL here. This company called Hugging Face collected, created, and curated this data set called Fine Web, and they go into a lot of detail on this blog post on how they constructed the Fine Web data set. All of the major LLM providers like OpenAI, Anthropic, and Google, and so on will have some equivalent internally of something like the Fine Web data set.

So roughly, what are we trying to achieve here? We're trying to get a ton of text from the internet from publicly available sources. We’re trying to have a huge quantity of very high-quality documents, and we also want a very large diversity of documents because we want to have a lot of knowledge contained inside these models. Achieving this is quite complicated, and as you can see, it takes multiple stages to do well.

Let's take a look at what some of these stages look like in a bit. For now, I would like to note that, for example, the Fine Web data set, which is fairly representative of what you would see in a production-grade application, actually ends up being only about 44 terabytes of disk space. You can get a USB stick for like a terabyte very easily, or I think this could fit on a single hard drive almost today.

So this is not a huge amount of data at the end of the day, even though the internet is very, very large. We are working with text, and we are also filtering it aggressively, so we end up with about 44 terabytes in this example. Let’s take a look at what this data looks like and what some of these stages are.

The starting point for a lot of these efforts and something that contributes most of the data by the end of it is data from Common Crawl. So Common Crawl is an organization that has been basically scouring the internet since 2007. As of 2024, for example, Common Crawl has indexed 2.7 billion web pages. They have all these crawlers going around the internet, and what you end up doing is you start with a few seed web pages. Then, you follow all the links, and you just keep indexing all the information. You end up with a ton of data from the internet over time, so this is usually the starting point for a lot of these efforts.

Now, this Common Crawl data is quite raw and is filtered in many different ways. Here, they document this type of processing that happens in these stages. The first part is URL filtering. This refers to a block list of URLs or domains that you don't want to be getting data from. This usually includes things like malware websites, spam websites, marketing websites, racist websites, adult sites, and so on. A ton of different types of websites are just eliminated at this stage because we don't want them in our data set.

The second part is text extraction. You have to remember that all these web pages consist of the raw HTML saved by these crawlers. When you inspect the raw HTML, you'll notice that it’s got markup, lists, CSS, and all this kind of stuff. What we really want is just the text, not the navigation and other extraneous elements. Thus, there's a lot of filtering and processing that goes into adequately filtering for just the good content of these web pages.

The next stage is language filtering. For example, Fine Web filters using a language classifier where they try to guess what language every single web page is in. They only keep web pages that have more than 65% of English, as an example. This illustrates a design decision that different companies can take for themselves; for example, what fraction of all the different types of languages are we going to include in our data set? If we filter out all of the Spanish, our model later may not be very good at Spanish because it has never seen that much data in that language.

After language filtering, there are a few other filtering steps and deduplication processes, including personally identifiable information removal. This process involves detecting personal details like addresses and Social Security numbers, and filtering out those web pages from the data set as well.

There's a lot of stages in filtering, and while I won't go into full detail, it is an extensive part of preprocessing, and you arrive at what you call the Fine Web data set. When you click on it, you can see some examples of what this actually ends up looking like. Anyone can download this from the Hugging Face webpage. Here are some examples of the final text that ends up in the training set.

This is an article about tornadoes in 2012. There's something about two little yellow battery-sized adrenal glands in your body. Just think of these as essentially web pages on the internet filtered just for text in various ways. Now we have a ton of text—40 terabytes of it—and that now is the starting point for the next step of this stage.

I wanted to give you an intuitive sense of where we are right now. I took the first 200 web pages, and remember we have tons of them. I just concatenated all that text together, and this is what we end up with. We just get this raw internet text, and there's already a ton of it even in these 200 web pages.

We can continue zooming out here, and we just have this massive tapestry of text data. This text data contains all sorts of patterns, and what we want to do now is we want to start training neural networks on this data. The goal is for these neural networks to internalize and model how this text flows. Before we plug text into neural networks, we have to decide how we're going to represent this text and how we're going to feed it in.

The way our technology works for these neural networks is that they expect a one-dimensional sequence of symbols, and they want a finite set of symbols that are possible. We have to decide what the symbols are and then represent our data as a one-dimensional sequence of those symbols. Right now, we have a one-dimensional sequence of text that starts here and goes here and then comes here, etc.

This is a one-dimensional sequence, even though it looks two-dimensional on my monitor. It goes from left to right and top to bottom, right? So it's a one-dimensional sequence of text. Now, being computers, there's an underlying representation here. If I UTF-8 encode this text, I can get the raw bits that correspond to this text in the computer. This is what that looks like.

It turns out that, for example, this very first bar here is the first eight bits. So what is this thing? This is the representation that we are looking for. We have exactly two possible symbols: zero and one, and we have a very long sequence of it. As it turns out, this sequence length is actually going to be a very finite and precious resource in our neural network, and we don't want extremely long sequences of just two symbols.

Instead, we want a trade-off between the size of this vocabulary and the resulting sequence length. We don't want just two symbols and extremely long sequences; we're going to want more symbols and shorter sequences. A naive way to compress or decrease the length of our sequence here is to consider some group of consecutive bits— for example, eight bits— and group them into a single byte. Since these bits are either on or off, taking a group of eight gives us only 256 possible combinations of how those bits could be on or off.

Therefore, we can represent this sequence into a sequence of bytes instead. This sequence of bytes will be eight times shorter, but now we have 256 possible symbols. Every number here goes from 0 to 255. It's important to think of these not as numbers but as unique IDs or unique symbols.

Suppose we replace every one of these with a unique symbol, like an emoji. We would have a sequence of emojis with 256 possible emojis. In production for state-of-the-art language models, you actually want to go even beyond this; you want to continue to shrink the length of the sequence because it is a precious resource in return for more symbols in your vocabulary.

The way this is done is by running what's called the Byte Pair Encoding (BPE) algorithm. The way this works is we're looking for consecutive bytes or symbols that are very common. For example, it turns out that the sequence "116 followed by 32" is quite common and occurs very frequently. So we're going to group this pair into a new symbol.

We’ll mint a symbol with an ID of 256 and rewrite every single instance of the pair "11632" with this new symbol. We can iterate this algorithm as many times as we wish, and each time we mint a new symbol, we're decreasing the length, and we're increasing the symbol size. In practice, a good setting of the vocabulary size turns out to be around 100,000 possible symbols, and GPT-4 uses about 100,277 symbols.

This process of converting from raw text into these symbols, or as we call them tokens, is called tokenization. Let’s now take a look at how GPT-4 performs tokenization, from text to tokens and back again. One website I like to use for exploring these token representations is called Tokenizer. There, you can input text and see the tokenization of that text.

For example, "hello world" actually turns out to be exactly two tokens: the token "hello," which has the token ID of 15,339, and the token "world," which is token ID 1,917. If I join these two for example, I’m going to get again two tokens, but it’s the token "H" followed by the token "L." If I put in two spaces between “hello” and “world,” it’s again a different tokenization, yielding a new token.

You can play with this and observe the consequences of different inputs. Keep in mind that the tokenizer is case-sensitive; if this is a capital "H," it's something different, or if it’s "Hello World," it ends up being three tokens instead of just two. We will circle back to tokenization a bit later in the video, but for now, I just wanted to show you how this works.

This text, basically, at the end of the day, becomes a sequence of length 62. This is the sequence here, and this is how the chunks of text correspond to these symbols. There are 100,277 possible symbols, and we now have one-dimensional sequences of those symbols. We will come back to tokenization, but that’s where we are for now.

So, what I’ve done now is taken this sequence of text that we have here in the dataset and re-represented it using our tokenizer into a sequence of tokens. This is what that looks like. When we go back to the Fine Web dataset, they mentioned that not only is this 44 terabytes of disk space, but it contains about a 15 trillion token sequence in this dataset.

These are just some of the first few tokens of this dataset, but remember, there are 15 trillion tokens here. And again, keep in mind that all of these represent little text chunks. They are all like atoms of these sequences, and the numbers here don’t make any sense; they’re just unique IDs.

Now, we get to the fun part, which is the neural network training. This is where a lot of the heavy lifting happens computationally when you’re training these neural networks. What we do here in this step is we want to model the statistical relationships of how these tokens follow each other in the sequence.

We take windows of tokens from this data fairly randomly, and the window's length can range anywhere between zero tokens all the way up to some maximum size that we decide on. For example, in practice, you could see a token with windows of around 8,000 tokens. In principle, we can use arbitrary window lengths of tokens, but processing very long sequences would just be computationally expensive, so we decide that, say, 8,000 is a good number or 4,000 or 16,000 and crop it there.

Now, in this example, I'm going to take the first four tokens so everything fits nicely. We’re going to take a window of four tokens: “this bar view in and space” are these token IDs. What we’re trying to do here is predict the token that comes next in the sequence, so token 3962 comes next.

We call these four tokens the context, and they feed into a neural network. This is the input to the neural network. I’m going to go into detail about what’s inside this neural network in a bit; for now, it’s important to understand the input and the output of the neural net. The input consists of sequences of tokens of variable length, anywhere between zero and some maximum size like 8,000.

The output now is a prediction of what comes next. Because our vocabulary has 100,277 possible tokens, the neural network is going to output exactly that many numbers. All those numbers correspond to the probability of that token coming next in the sequence, and it's making guesses about what comes next.

In the beginning, this neural network is randomly initialized, so the probabilities during the very beginning of the training are also going to be random. Here, I have three examples, but keep in mind that there are 100,000 numbers here. The probability of this token “space” direction neural network is currently saying four percent, “11799” is two percent, and the probability of “3962,” which is “post,” is three percent.

Now, of course, we have sampled this window from our dataset, so we know what comes next—we know the correct answer is that “3962” actually comes next in the sequence. Now what we have is this mathematical process for doing an update to the neural network. We have a way of tuning it, and I’ll go into a bit of detail on that shortly.

Basic idea is we want this probability of 3%—we want this to be higher. We want the probabilities of all the other tokens to be lower. We have a way of mathematically calculating how to adjust and update the neural network so that the correct answer has a slightly higher probability. If I do an update to the neural network now, the next time I feed this particular sequence of four tokens into the neural network, it will have adjusted to indicate that “post” is maybe 4% and “case” might become 1%, and “direction” could become 2%, or something like that.

This allows us to nudge, to slightly adjust the neural network to give a higher probability to the correct token that comes next in the sequence. It’s essential to remember that this process happens not just for this token here where these four are fed in and predicted, but for all of these tokens in the entire data set.

In practice, we sample small window batches and then, at each token, we want to adjust our neural network so that the probability of that token becomes slightly higher. This all happens in parallel in large batches, and this is the process of training the neural network. It’s a sequence of updating the network to match the statistics of what actually happens in your training set, with its probabilities aligning with the statistical patterns of how these tokens follow each other in the data.

Let’s now briefly discuss the internals of these neural networks just to give you a sense of what's inside. We have the input as sequences of tokens—in this case, four input tokens—but this can be anywhere between zero and let’s say 8,000 tokens. In principle, this could be an infinite number of tokens.

We just crop it at a certain length, which becomes the maximum context length of that model. Now, these inputs X are mixed up in a giant mathematical expression together with the parameters or weights of the neural networks. I’m showing six example parameters and their settings, but modern neural networks will have billions of these parameters.

At the beginning, these parameters are completely randomly set. With a random setting of parameters, you might expect that this neural network would make random predictions, and it does—in the beginning, it's totally random. But through the process of iteratively updating the network, we adjust the parameters so that the outputs of our neural network become consistent with the patterns seen in our training set. Just think of these as knobs on a DJ set. As you're twiddling these knobs, you get different predictions for every possible token sequence input.

Training a neural network just means discovering a setting of parameters that seems to be consistent with the statistics of the training set. Let me just give you an example of what this giant mathematical expression looks like, giving you a sense that modern networks are massive expressions with trillions of terms probably.

However, let me show you a simple example here. It would look something like this: we have inputs like X1 and X2 for two example inputs, mixed up with the network's weights (W0, W1, W2, W3, etc.). Mixing is simple operations like multiplication, addition, exponentiation, and division.

It is the subject of neural architecture research to design effective mathematical expressions that have convenient characteristics: they are expressive, optimizable, parallelizable, etc. At the end of the day, these are not complex expressions—they mix up the inputs with the parameters to make predictions, optimizing the parameters so that the predictions are consistent with the training set.

Now I'd like to show you an actual production-grade example of what these neural networks look like. I'm referring to a website that has a very nice visualization of one of these networks. The neural network used in production settings uses a special structure called a Transformer. This particular example has roughly 8.5 billion parameters.

At the top, we take the inputs, which are the token sequences, then information flows through the neural network until the output, which are the predictions for what comes next—what token comes next. This involves a sequence of transformations, producing intermediate values that predict the next step.

For instance, tokens are embedded into distributed representations, and these values flow through the network using simple mathematical expressions, such as layer normalization, matrix multiplications, and softmax functions. This structure optimizes how data is processed, allowing the model to predict the next tokens by analyzing relationships in the training data.

It's important to note that these models, despite their powerful capabilities, are not perfect. For example, they lack memory and context in the same way that human brains do. They generate predictions based on patterns learned from data, but they do not retain experiences like a human would.

I will not dwell on the precise mathematical details of all these transformations. What’s important to understand is that this is a mathematical function parameterized by a fixed set of parameters, transforming inputs into outputs through calibrated predictions based on the training data.

To summarize, what I have shown you so far involves the internals of the neural network and the process of training it. Now I want to cover one more major stage of working with these networks, called inference. In inference, what we do is generate new data from the trained model.

In this context, we want to observe the patterns the model has internalized based on the training data. Generating from the model is fairly straightforward. We start with some tokens that represent your prefix, like what you want to begin with. For example, say we want to start with the token 91. We feed it into the network, which gives us probabilities based on its training.

Now, we can sample a token based on this probability distribution. The tokens that receive high probabilities from the model are more likely to be sampled, so when we draw from this distribution, we may get a relatively likely token, such as token 860. This could follow the seed token we provided.

Continuing this process, we would then check what the next token could be and repeat, allowing us to build out a sequence. However, while this method sometimes produces coherent sequences, it can also yield unexpectedly different results, as the model utilizes its training probabilities in a stochastic manner.

So, in summary, inference is generating tokens based on the model, one at a time, incorporating probabilities and making continued refinements. In many ways, downloading the internet and tokenizing it is a preprocessing step done once. Once we have our token sequence, we can start training networks that explore various settings or arrangements.

In practical usage, the model ensures it follows learned behaviors: when trained well, it can respond to queries with the valuable knowledge embedded in its parameters. But, ultimately, this is just a step in creating more interactive systems.

This is where we transition to post-training stages, where we refine our models into useful assistants that respond to human inquiries. You'll learn about how to represent conversations as training datasets that guide the AI assistant in its interactions.

That concludes the introduction and foundational concepts of how LLMs operate, from pre-training to powerful interactive systems. Let’s further explore the structure of these models, their training stages, and how they’ve changed the landscape of AI. Your understanding of these mechanisms will empower you to better utilize these evolving technologies and appreciate the complexities that underlie them. Thank you for your attention and let’s dive deeper into these fascinating topics!
Emily buys three apples and two oranges. Each orange costs $2, and the total cost is $13. What is the cost of apples?

Very simple math question now there are two answers here on the left and on the right. They are both correct answers, they both say that the answer is three which is correct, but one of these two is significantly better for the assistant than the other. If I was a data labeler and I was creating one of these, one of these would be a really terrible answer for the assistant, and the other would be okay.

So I'd like you to potentially pause the video even and think through why one of these two is a significantly better answer than the other. If you use the wrong one, your model will actually be really bad at math potentially, and it would have bad outcomes. This is something that you would need to be careful with in your life labeling documentation when you are training people to create the ideal responses for the assistant.

Okay, so the key to this question is to remember that when the models are training and also inferencing, they are working in a one-dimensional sequence of tokens from left to right. This is the picture that I often have in my mind: I imagine the token sequence evolving from left to right and always producing the next token in a sequence. We are feeding all these tokens into the neural network, and this neural network then produces the probabilities for the next token in the sequence.

The important thing to realize is that, roughly speaking, there’s a finite number of layers of computation that happen here. For example, this model has only three layers of what's called attention and MLP (multilayer perceptron). Maybe a typical modern state-of-the-art network would have more like, say, 100 layers, but there are only a limited number of computation steps to go from the previous token sequence to the probabilities for the next token.

This means there’s a finite amount of computation that happens here for every single token, and you should think of this as a very small amount of computation. This amount of computation is almost fixed for each token in this sequence. That’s not actually fully true because the more tokens you feed in, the more expensive this forward pass will be, but not by much.

So you should think of this as a fixed amount of compute that’s going to happen in this model for every single one of these tokens, and this amount of compute can’t possibly be too big because there aren’t that many layers going from the top to the bottom here. There’s not that much computational work done here, and you can't expect the model to basically do arbitrary computation in a single forward pass to get a single token.

What that means is actually we have to distribute our reasoning and our computation across many tokens because every token is only spending a finite amount of computation on it, and we can't expect too much computation out of the model in any single individual token.

That's why this answer here is significantly worse; imagine going from left to right with a single token that needs to emit a complex answer. You're asking for a lot of computation to happen in that one token. If we were to force the model to do all of this work in a single forward pass of the network, it would likely make mistakes.

Conversely, many of the tokens you're creating here might be trivial to the model, and we're wasting tokens; why waste all these tokens when this is trivial? So if the only thing we care about is the final answer, and we separate the issue of presentation to the human, then we don’t really know how to annotate this example.

We’re not the model, and it's clear here in the case of the math example. This reflects a pervasive issue because our knowledge isn’t the model's knowledge; the model has a ton of knowledge in math and physics and whatnot. There are many ways it actually knows more than we do, and by injecting knowledge into our solutions, that might be something the model doesn’t know in its parameters, which can lead to confusion.

Its cognition is different from ours. Therefore, providing token sequences that work best for the model can be challenging. We need to allow the model to discover for itself what token sequence reliably gets to the answer, given the prompt, through the process of reinforcement learning and trial-and-error.

To see how this works in reinforcement learning, we’ll use the Hugging Face Inference Playground. Here, I have chosen the Gemma 2, a two-billion-parameter model. Although this is a small model, we can give it a prompt and see how it processes it.

In reinforcement learning, we need to try various solutions to see which ones work well. We'll take the prompt, run the model, and inspect the results against the correct answer, which is $3. The model got it correct, which is one attempt.

Now, we can delete this and rerun it to see a second attempt. Each generation will be slightly different because these models are stochastic systems. At each token, there’s a probability distribution from which we sample. This generates slightly different paths.

After several iterations, we can see how the model arrives at the answer through different methods. It's important to keep in mind that reinforcement learning allows the model to explore and refine its understanding of how to reach solutions, thus improving its ability to respond to queries across various contexts.

This process emphasizes the significance of allowing models to learn through experience, optimizing their approach to problem-solving rather than relying solely on pre-determined paths. It highlights the dynamic nature of AI learning, showing how it can adapt and develop more reliable responses over time through practice and iteration.
prompt um and some of them will be correct and some of them will not be very correct. Basically, what we want to do is we want to encourage the solutions that lead to correct answers.

So let's take a look at what that looks like. If we come back over here, here's kind of like a cartoon diagram of what this is looking like. We have a prompt, and then we tried many different solutions in parallel. Some of the solutions might go well, so they get the right answer, which is in green, and some of the solutions might go poorly and may not reach the right answer, which is red. Now, this problem here, unfortunately, is not the best example because it's a trivial prompt, and as we saw, even like a two-billion parameter model always gets it right, so it's not the best example in that sense.

But let's just exercise some imagination here and suppose that the green ones are good and the red ones are bad. Okay, so we generated 15 solutions, and only four of them got the right answer. Now, what we want to do is encourage the kinds of solutions that lead to right answers. So whatever token sequences happened in these red solutions, obviously something went wrong along the way somewhere, and this was not a good path to take through the solution.

Whatever token sequences there were in these green solutions, well, things went pretty well in this situation, and we want to do more things like it in prompts like this. The way we encourage this kind of behavior in the future is we basically train on these sequences. These training sequences now are not coming from expert human annotators; there's no human who decided that this is the correct solution. This solution came from the model itself.

So the model is practicing here. It's tried out a few solutions, four of them seem to have worked, and now the model will kind of like train on them. This corresponds to a student basically looking at their solutions and being like, "Okay, well, this one worked really well, so this is how I should be solving these kinds of problems."

Here in this example, there are many different ways to tweak the methodology a little bit here, but just to give the core idea across, maybe it's simplest to just think about taking the single best solution out of these four, like say this one that’s why it was yellow.

So this is the solution that not only led to the right answer but maybe had some other nice properties. Maybe it was the shortest one, or it looked nicest in some ways, or there are other criteria you could think of as an example. But we're going to decide that this is the top solution. We're going to train on it, and then the model will be slightly more likely, once we do the parameter update, to take this path in this kind of setting in the future.

You have to remember that we're going to run many different diverse prompts across lots of math problems, physics problems, and whatever else there might be. So tens of thousands of prompts may come to mind. There are thousands of solutions being prompted, and this is all happening kind of like at the same time. As we're iterating this process, the model is discovering for itself what kinds of token sequences lead it to correct answers.

It's not coming from a human annotator; the model is kind of like playing in this playground. It knows what it's trying to get to, and it's discovering sequences that work for it. These are sequences that don't make any mental leaps; they seem to work reliably and statistically and fully utilize the knowledge of the model as it has it.

So this is the process of reinforcement learning. It's basically a guess and check. We're going to guess many different types of solutions; we're going to check them, and we're going to do more of what worked in the future, and that is reinforcement learning.

In the context of what came before, we see now that the SFT model, the supervised fine-tuning model, is still helpful because it still kind of initializes the model a little bit into the vicinity of the correct solutions. It's kind of like an initialization of the model, in the sense that it gets the model to, you know, take solutions like write out solutions, and maybe it has an understanding of setting up a system of equations or maybe it kind of talks through a solution.

So it gets you into the vicinity of correct solutions, but reinforcement learning is where everything gets dialed in. We really discover the solutions that work for the model and get the right answers, we encourage them, and then the model just kind of gets better over time.

That is the high-level process for how we train large language models. In short, we train them kind of very similar to how we train children. The only difference is that children go through chapters of books and do all these different types of training exercises within the chapter of each book.

Instead, when we train AIs, it's almost like we kind of do it stage by stage, depending on the type of that stage. So first, what we do is pre-training, which as we saw is equivalent to basically reading all the expository material. We look at all the textbooks at the same time, read all the exposition, and try to build a knowledge base.

The second thing we do then is go into the SFT stage, which is really looking at all the fixed, sort of like solutions from human experts. We take all the different kinds of worked solutions across all the textbooks, and we just kind of get an SFT model, which is able to imitate the experts, but does so kind of blindly. It just does its best guess, kind of just like trying to mimic statistically the expert behavior.

That's what you get when you look at all the worked solutions. Finally, in the last stage, we do all the practice problems in the RL stage across all the textbooks. We only do the practice problems, and that's how we get the RL model.

So on a high level, the way we train LLMs is very much equivalent to the process that we use for training children. The next point I would like to make is that these first two stages, pre-training and supervised fine-tuning, have been around for years, and they are very standard. Everyone does them, all the different LLM providers.

It is this last stage, the RL training, that is a lot more early in its process of development and is not standard yet in the field. This stage is a lot more early and nascent, and the reason for that is because I actually skipped over a ton of little details in this process.

The high-level idea is very simple: it's trial and error learning. But there are tons of details and little mathematical nuances to exactly how you pick the solutions that are the best, how much you train on them, what is the prompt distribution, and how to set up the training run such that this actually works.

So there are a lot of little details and knobs to the core idea, which is very, very simple. Getting the details right here is not trivial, so a lot of companies, like for example OpenAI and other LLM providers, have experimented internally with reinforcement learning fine-tuning for LLMs for a while, but they've not talked about it publicly.

It’s all kind of done inside the company, and that's why the paper from DeepMind that came out very recently was such a big deal. This is a paper from a company called DeepMind in China, and this paper really talked very publicly about reinforcement learning fine-tuning for large language models and how incredibly important it is for large language models and how it brings out a lot of reasoning capabilities in the models. We'll go into this in a second.

This paper reinvigorated the public interest of using RL for LLMs and provided a lot of the necessary details to reproduce their results and actually get the stage to work for large language models. Let me take you briefly through this DeepMind R1 paper and what happens when you actually correctly apply RL to language models and what that looks like and what that gives you.

The first thing I'll scroll to is this kind of figure two here, where we are looking at the improvement in how the models are solving mathematical problems. This is the accuracy of solving mathematical problems on the accuracy, and then we can go to the webpage and see the kinds of problems that are actually measured here.

These are simple math problems; you can pause the video if you like, but these are the kinds of problems that the models are being asked to solve. You can see that in the beginning they're not doing very well, but then as you update the model with this many thousands of steps, their accuracy continues to climb.

So the models are improving, and they're solving these problems with higher accuracy as you do this trial and error on a large dataset of these kinds of problems, and the models are discovering how to solve math problems.

But even more incredible than the quantitative kind of results of solving these problems with a higher accuracy is the qualitative means by which the model achieves these results. So when we scroll down, one of the figures here that is kind of interesting is that later on in the optimization, the model seems to be using the average length per response; it goes up.

The model seems to be using more tokens to get its higher accuracy results, so it's learning to create very, very long solutions. Why are these solutions very long? We can look at them qualitatively here.

What they discover is that the model's solutions get very, very long, partially because, as here’s a question and here’s an answer from the model, what the model learns to do—this is an emerging property of new optimization—is that it starts to do things like this: wait, wait, wait! That's not a moment I can flag here; let's reevaluate this step by step to identify the correct sum.

What is the model doing here? The model is basically reevaluating steps. It has learned that it works better for accuracy to try out lots of ideas, try something from different perspectives, retrace, reframe, and backtrack. It's doing a lot of the things that you and I do in the process of problem solving for mathematical questions, but it's rediscovering what happens in your head, not what you put down on the solution.

There is no human who can hardcode this stuff in the ideal assistant response; this is only something that can be discovered in the process of reinforcement learning because you wouldn't know what to put here. This just turns out to work for the model, and it improves its accuracy in problem solving.

So the model learns what we call these chains of thought in your head, and it's an emergent property of the optimization. That's what's bloating up the response length, but that's also what's increasing the accuracy of the problem-solving.

What’s incredible here is that the model is discovering ways to think. It's learning what I like to call cognitive strategies of how you manipulate a problem and how you approach it from different perspectives—how you pull in some analogies or do different kinds of things like that, and how you try out many different things over time.

You check a result from different perspectives to see how you kind of solve problems. But here, it's kind of discovered by the RL, so it's extremely interesting to see this emerge in the optimization without having to hardcode it anywhere.

The only thing we've given it are the correct answers, and this comes out from trying to just solve them correctly, which is incredible.

Now let's go back to the actual problem we've been working with and take a look at what it would look like for this kind of a model—what we call reasoning or thinking models—to solve that problem.

Okay, so recall that this is the problem we've been working with, and when I pasted it into ChatGPT 4, I'm getting this kind of a response. Let’s take a look at what happens when you give this same query to what’s called a reasoning or a thinking model. This is a model that was trained with reinforcement learning.

So this model described in this paper, DeepMind R1, is available on chat. deepmind.com. This is kind of like the company that developed it. You have to make sure that the DeepMind button is turned on to get the R1 model, as it's called. We can paste it here and run it, so let’s take a look at what happens now and what the output of the model is.

Okay, so here it says, "This is previously what we got using basically what is an SFT approach, a supervised fine-tuning approach. This is like mimicking an expert solution. This is what we get from the RL model."

Okay, let me try to figure this out. Emily buys three apples and two oranges; each orange costs $2. If the total is $13, I need to find out... blah blah blah. As you're reading this, you can't escape thinking that this model is thinking.

It is definitely pursuing the solution. It deduces that it must cost $3, and then it says, "Wait a second! Let me check my math again to be sure." Then it tries from a slightly different perspective and says, "Yep, all that checks out; I think that's the answer. I don't see any mistakes." Let me see if there's another way to approach the problem, maybe by setting up an equation.

Let’s let the cost of one apple be $8, then blah blah blah—yep, same answer, so definitely each apple is $3.

All right, confident that that's correct. Then what it does once it's kind of done the thinking process is it writes up the nice solution for the human, and this is now considered—this is more about the correctness aspect and this is more about the presentation aspect, where it kind of writes it out nicely and boxes in the correct answer at the bottom.

What’s incredible about this is we get this thinking process of the model, and this is coming from the reinforcement learning process. This is what’s bloating up the length of the token sequences; they’re doing thinking and they’re trying different ways.

This is what’s giving you higher accuracy in problem solving, and this is where we are seeing these “aha” moments, these different strategies, and ideas for how you can make sure that you’re getting the correct answer.

The last point I wanted to make is that some people are a little bit nervous about putting very sensitive data into chat. deepmind.com because this is a Chinese company. So people are a little bit careful with that.

DeepMind R1 is a model that was released by this company, so this is an open-source model or an open-weights model. It is available for anyone to download and use. You will not be able to run it in its full sort of precision; you won’t run that on a MacBook or local device because this is a fairly large model.

But many companies are hosting the full largest model. One of those companies that I like to use is called Together. When you go to Together, you sign up and you go to Playground; you can select DeepMind R1. There are many different kinds of other models that you can select here. These are all state-of-the-art models.

So this is kind of similar to the Hugging Face inference playground we’ve been playing with so far. But Together will usually host all the state-of-the-art models. So select DeepMind R1; you can try to ignore a lot of these. I think the default settings will often be okay.

We can put this in, and because the model was released by DeepMind, what you're getting here should be basically equivalent to what you're getting now. Because of the randomness in the sampling, we're going to get something slightly different, but in principle, this should be identical in terms of the power of the model, and you should be able to see the same things quantitatively and qualitatively.

But this model is coming from an American company, so that’s DeepMind and that’s what’s called a reasoning model. Now, when I go back to chat, let me go back to chat here.

Okay, so the models that you're going to see in the dropdown here—some of them like GPT-3 and Mini-03—are talking about using advanced reasoning. Now what this is referring to is that it was trained by reinforcement learning with techniques very similar to those of DeepMind R1, per public statements of OpenAI employees.

So these are thinking models trained with RL, and these models like GPT-4 or GPT-4 40 mini that you’re getting in the free tier should think of them as mostly SFT models—supervised fine-tuning models. They don’t actually do this thinking as you see in the RL models, and even though there’s a little bit of reinforcement learning involved with these models—I’ll go into that in a second—these are mostly SFT models, and I think you should think about it that way.

So, in the same way as what we saw here, we can pick one of the thinking models like GPT-3 Mini High. These models, by the way, might not be available to you unless you pay a ChatGPT subscription of either $20 per month or $200 per month for some of the top models.

We can pick a thinking model and run it. Now what’s going to happen here is it’s going to say reasoning and it’s going to start to do stuff like this. What we’re seeing here is not exactly what we’re seeing here. So even though under the hood the model produces these kinds of chains of thought, OpenAI chooses not to show the exact chains of thought in the web interface; it shows little summaries of those chains of thought.

OpenAI kind of does this, I think partly because they are worried about what’s called the distillation risk—that someone could come in and actually try to imitate those reasoning traces and recover a lot of the reasoning performance by just imitating the reasoning chains of thought. So they hide them and only show little summaries of them.

So you’re not getting exactly what you would get in DeepMind with respect to the reasoning itself, and then they write up the solution. These are kind of like equivalent, even though we’re not seeing the full under-the-hood details.

Now, in terms of the performance, these models and DeepMind models are currently on par—that’s hard to tell because of the evaluations—but if you’re paying $200 per month to OpenAI, some of these models I believe still look better.

DeepMind R1 is still a very solid choice for a thinking model that would be available to you, sort of on this website or any other website, because the model is open weights; you can just download it.

So those are the thinking models. So what is the summary so far? Well, we’ve talked about reinforcement learning and the fact that thinking emerges in the process of optimization when we run RL on many math and code problems that have verifiable solutions.

So there’s like an answer of 3, etc. Now these thinking models you can access in, for example, DeepMind or any inference provider like Together. Choosing DeepMind over there, these thinking models are also available in ChatGPT, under any of the O1 or O3 models.

But these GPT-4 R models, etc., they’re not thinking models. You should think of them as mostly SFT models. If you have a prompt that requires advanced reasoning, you should probably use some of the thinking models or at least try them out.

However, empirically for a lot of my use, when you’re asking a simpler question, like a knowledge-based question or something like that, this might be overkill. There’s no need to think for 30 seconds about some factual question.

So for that, I will sometimes default to just GPT-4. Empirically, about 80-90% of my use is just GPT-4, and when I come across a very difficult problem like in math and code, etc., I will reach for the thinking models, but then I have to wait a bit longer because they’re thinking.

You can access these on Chat and DeepMind. I also wanted to point out that AI Studio does see, even though it looks really busy and really ugly, because Google is unable to do this kind of stuff well—it's like what is happening. But if you choose the model and you choose Gemini 2.0, flash thinking experimental 01 21, if you choose that one, that’s also a kind of early experiment, a experimental thinking model by Google.

So we can go here and we can give it the same problem and click run, and this is also a thinking model that will do something similar and come out with the right answer here.

So basically, Gemini also offers a thinking model. Anthropic currently does not offer a thinking model, but basically, this is kind of like the frontier development of these LLMs. I think RL is kind of like this new exciting stage, but getting the details right is difficult, and that’s why all these models and thinking models are currently experimental as of early 2025.

But this is kind of like the frontier development of pushing the performance on these very difficult problems using reasoning that is emerging in these optimizations.

One more connection that I wanted to bring up is that the discovery that reinforcement learning is an extremely powerful way of learning is not new to the field of AI. One place where we've already seen this demonstrated is in the game of Go.

Famously, DeepMind developed the system AlphaGo, and you can watch a movie about it where the system is learning to play the game of Go against top human players. When we go to the paper underlying AlphaGo, so in this paper, when we scroll down, we actually find a really interesting plot that I think is kind of familiar to us.

We're kind of like discovering in the more open domain of arbitrary problem solving instead of the closed specific domain of the game of Go. What they saw—and we're going to see this in LLMs as well as this becomes more mature—is the ELO rating of playing the game of Go.

This is Lee Sedol, an extremely strong human player, and what they are comparing is the strength of a model learned and trained by supervised learning and a model trained by reinforcement learning.

The supervised learning model is imitating human expert players. If you just get a huge amount of games played by expert players in the game of Go and you try to imitate them, you're going to improve, but then you top out, and you never quite get better than some of the top top top players in the game of Go, like Lee Sedol.

So you're never going to reach there because you’re just imitating human players. You can’t fundamentally go beyond a human player if you're just imitating human players.

But in reinforcement learning, the system plays against itself and uses moves that empirically and statistically lead to winning the game. AlphaGo is a system that kind of plays against itself using reinforcement learning to create rollouts.

It’s the exact same diagram here, but there's no prompt; it’s just a fixed game of Go. But it’s trying out lots of solutions, lots of plays, and then the moves that lead to a win, instead of a specific answer, are reinforced, they're made stronger.

So the system learns basically the sequences of actions that empirically and statistically lead to winning the game. Reinforcement learning is not going to be constrained by human performance; it can do significantly better and overcome even the top players like Lee Sedol.

They probably could have run this longer, and they just chose to crop it at some point because this costs money. But this is a very powerful demonstration of reinforcement learning. We’re only starting to see hints of this diagram in larger language models for reasoning problems.

We’re not going to get too far by just imitating experts; we need to set up these little game environments and let the system discover reasoning traces or ways of solving problems that are unique and that basically work well.

Now, on this aspect of uniqueness, notice that when you’re doing reinforcement learning, nothing prevents you from veering off the distribution of how humans are playing the game. When we go back to this AlphaGo search, one of the suggested modifications is called move 37.

Move 37 in AlphaGo refers to a specific point in time where AlphaGo played a move that no human expert would play. The probability of this move being played by a human player was evaluated to be about 1 in 10,000, so it’s a very rare move.

But in retrospect, it was a brilliant move. So AlphaGo, in the process of reinforcement learning, discovered a strategy of playing that was unknown to humans, but is, in retrospect, brilliant.

I recommend this YouTube video, "Lee Sedol vs. AlphaGo, Move 37 Reactions and Analysis," and this is kind of what it looked like when AlphaGo played this move—a very surprising move.

People were freaking out because it’s a move that a human would not play, but AlphaGo played it because in its training this move was a good idea. It just happens not to be a kind of thing that humans would do.

That is again the power of reinforcement learning, and in principle, we can actually see the equivalence of that if we continue scaling this paradigm in language models. What that looks like is kind of unknown.

So what does it mean to solve problems in such a way that even humans would not be able to? How can you be better at reasoning or thinking than humans? How can you go beyond just a thinking human?

Maybe it means discovering analogies that humans could not create, or maybe it’s like a new thinking strategy. It’s kind of hard to think through. Maybe it’s a wholly new language that is not even English.

Maybe it discovers its own language that is a lot better at thinking because the model is unconstrained to even stick with English. Perhaps it takes a different language to think in, or it discovers its own language.

In principle, the behavior of the system is a lot less defined. It is open to do whatever works, and it is also open to slowly drift from the distribution of its training data, which is English.

But all of that can only be done if we have a very large, diverse set of problems in which these strategies can be refined and perfected. A lot of the frontier LLM research is going on right now, trying to create those kinds of prompt distributions that are large and diverse.

These are all kind of like game environments in which the LLMs can practice thinking. It’s kind of like writing; you know, we have to create practice problems for all the domains of knowledge.

If we have practice problems and tons of them, the models will be able to reinforcement learn on them and create these kinds of diagrams, but in the domain of open thinking instead of a closed domain like the game of Go.

There’s one more section within reinforcement learning that I want to cover, and that is that of learning in unverifiable domains. So far, all of the problems we’ve looked at are in what’s called verifiable domains.

That is any candidate solution we can score very easily against a concrete answer. For example, the answer is three, and we can easily score these solutions against the answer of three.

We require the models to box in their answers, and then we just check for equality of whatever is in the box with the answer, or you can also use what’s called an LLM judge. The LLM judge looks at a solution, gets the answer, and basically scores whether it’s consistent with the answer or not.

LLMs, empirically, are good enough at their current capability that they can do this fairly reliably. Therefore, we can apply those kinds of techniques in any case where we have a concrete answer, and we’re just checking solutions against it.

We can do this automatically with no kind of humans in the loop. The problem is that we can’t apply the strategy in what’s called unverifiable domains.

Usually, these are for example creative writing tasks, like writing a joke about pelicans or writing a poem or summarizing a paragraph. In these kinds of domains, it becomes harder to score our different solutions to these problems.

For example, writing a joke about pelicans, we can generate lots of different jokes, of course; that’s fine. For instance, we can go to ChatGPT and get it to generate a joke about pelicans: “So much stuff in their beaks because they don’t belong in backpacks. What?”

Okay, we can try something else: “Why don’t pelicans ever pay for their drinks? Because they always beat it to someone else!" Okay, so these models are obviously not very good at humor.

In fact, I think it’s pretty fascinating because I think humor is secretly very difficult. The model has that capability. Anyway, in any case, you could imagine creating lots of jokes.

The problem we are facing is how do we score them? Now, in principle, we could of course get a human to look at all these jokes just like I did right now.

The problem with that is if you are doing reinforcement learning, you’re going to be doing thousands of updates, and for each update, you want to be looking at say thousands of prompts. For each prompt, you want to be potentially looking at hundreds or thousands of different generations.

There are just way too many of these to look at. In principle, you could have a human inspect all of them and score them, deciding that, okay, maybe this one is funny and maybe this one is funny, and this one is funny, and we could train on them to get the model to become slightly better at jokes, at least in the context of pelicans.

The problem is it takes way too much human time; this is an unscalable strategy. We need some kind of an automatic strategy for doing this. One sort of solution to this was proposed in a paper that introduced what’s called reinforcement learning from human feedback (RLHF).

This was a paper from OpenAI at the time, and many of these people are now co-founders of Anthropic. This proposed an approach for doing reinforcement learning in unverifiable domains.

Let's take a look at how that works. So this is the cartoon diagram of the core ideas involved. As I mentioned, the native approach is if we set infinite human time, we could run RL in these domains just fine.

For example, we can run RL as usual if I have infinite humans; I’ll just want to do these cartoon numbers. I want to do 1,000 updates where each update will be on 1,000 prompts, and for each prompt, we’re going to have 1,000 rollouts we're scoring.

We can run RL with this kind of a setup. The problem is, in the process of doing this, I will need to ask a human to evaluate a joke a total of 1 billion times. That’s a lot of people looking at really terrible jokes!

We don’t want to do that. Instead, we want to take the RLHF approach. In our RLHF approach, the core trick is that of indirection. We're going to involve humans just a little bit, and the way we cheat is that we basically train a separate neural network that we call a reward model.

This neural network will kind of imitate human scores. We’re going to ask humans to score rollouts, and then we're going to imitate human scores using a neural network. This neural network will become a kind of simulator of human preferences.

Once we have a neural network simulator, we can do RL against it. Instead of asking a real human, we're now asking a simulated human for their score of a joke as an example.

Once we have a simulator, we can query it as many times as we want to, and it’s a whole automatic process. We can now do reinforcement learning with respect to the simulator. As you might expect, the simulator is not going to be a perfect human, but if it’s statistically similar to human judgment, you might expect that this will do something. In practice, indeed, it does. So once we have a simulator, we can do RL and everything works great.

Let me show you a cartoon diagram of what this process looks like. Although the details are not 100% super important, it's just a core idea of how this works. Here, I have a cartoon diagram of a hypothetical example of what training the reward model would look like.

We have a prompt, like "write a joke about pelicans," and then here we have five separate rollouts. These are all five different jokes just like this one. The first thing we’re going to do is ask a human to order these jokes from the best to worst.

Here, this human thought that this joke was the best, the funniest, so number one joke, this is the number two joke, number three joke, number four, and five, so this is the worst joke.

We’re asking humans to order instead of giving scores directly because it’s a bit of an easier task. It’s easier for a human to give an ordering than to give precise scores. Now, that is the supervision for the model. So the human has ordered them, and that is their contribution to the training process.

But now, separately, what we’re going to do is we’re going to ask a reward model about its scoring of these jokes. Now, the reward model is a whole separate neural network, completely separate neural net. It's also probably a transformer, but it's not a language model in the sense that it generates diverse language, etc.; it’s just a scoring model.

The reward model will take as inputs the prompt number one and number two—a candidate joke. So those are the two inputs that go into the reward model. For example, the reward model would be taking this prompt and this joke.

The output of the reward model is a single number, and this number is thought of as a score, and it can range from zero to one. Here are some examples of what a hypothetical reward model at some stage in the training process would give as scoring to these jokes.

A score of 0.1 is a very low score, and 0.8 is a really high score, and so on. Now we compare the scores given by the reward model with the ordering given by the human, and there’s a precise mathematical way to calculate this.

Basically, we set up a loss function and calculate a correspondence here and update a model based on it, but I want to give you the intuition. For example, for this second joke, the human thought that it was the funniest, and the model kind of agreed, right?

0.8 is a relatively high score, but this score should have been even higher. So, after an update, we would expect that maybe this score should have grown to be more like the score of 0.81 or something.

For this one here, they actually are in massive disagreement because the human thought that this was number two, but the model's score is only 0.1, indicating a significant difference. This score needs to be much higher, so after an update based on this kind of supervision, we might expect that the score would grow to something more like 0.15 or something.

For this last example, the human thought this one was the worst joke, but the model actually gave it a fairly high score. So, you might expect that after the update, this score would come down significantly, maybe to about 3 or 3.5.

So basically, we’re doing what we did before: we’re slightly nudging the predictions of the models using a neural network training process and trying to make the reward model scores consistent with human ordering. As we update the reward model on human data, it becomes a better simulator of the scores and orders that humans provide, which we can then do RL against.

Critically, we're not asking humans one billion times to look at a joke; we’re maybe looking at 5,000 prompts and five rollouts each, so maybe 5,000 jokes that humans have to look at in total. They just give the ordering, and then we're training the model to be consistent with that ordering.

I’m skipping over the mathematical details, but I want you to understand a high-level idea: this reward model is giving us this score, and we have a way of training it to be consistent with human orderings, and that’s how RLHF works.

That is the rough idea: we basically train simulators of humans and perform RL with respect to those simulators. Now, I want to talk about first the upside of reinforcement learning from human feedback. The first thing is that this allows us to run reinforcement learning, which we know is an incredibly powerful kind of technique, and it allows us to do it in arbitrary domains, including the unverifiable ones.

So this includes things like summarization, poem writing, joke writing, or any other creative writing—domains outside of math and code, etc. Empirically, what we see when we apply RLHF is that this is a way to improve the performance of the model.

I have a thought on why that might be, but I don’t actually know that it is like super well-established. You can empirically observe that when you do RLHF correctly, the models you get are just a little bit better, but as to why it’s not as clear.

Here’s my best guess: this is possibly mostly due to the discriminator-generator gap. What this means is that in many cases, it is significantly easier to discriminate than to generate for humans.

For example, in supervised fine-tuning (SFT), we’re asking humans to generate the ideal assistant response. In many cases, the ideal response is very simple to write, but in many cases might not be so.

For example, in summarization or poem writing or joke writing, how are you—as a human labeler—supposed to give the ideal response in these cases? It requires creative human writing to do that. So RLHF sidesteps this because we get to ask people significantly easier questions as data labelers.

They’re not asked to write poems directly; they’re just given five poems from the model, and they're just asked to order them. That task is just a much easier task for a human labeler to accomplish.

What I think this allows you to do is it kind of allows for a lot higher accuracy data because we’re not asking people to do the generation task, which can be extremely difficult. Instead, we’re just trying to get them to distinguish between creative writing and find the ones that are best.

That is the signal that humans are providing—just the ordering. That is their input into the system, and then the system in RLHF discovers the kinds of responses that would be graded well by humans. So that step of indirection allows the models to become a bit better.

So that’s the upside of RLHF. It allows us to run RL, it empirically results in better models, and it allows people to contribute their supervision without having to do extremely difficult tasks in the case of writing ideal responses.

Unfortunately, RLHF also comes with significant downsides, and the main one is that we are doing reinforcement learning not with respect to humans and actual human judgment, but with respect to a lossy simulation of humans.

This lossy simulation could be misleading because it’s just a simulation. It’s just a language model that’s outputting scores, and it might not perfectly reflect the opinion of an actual human with an actual brain in all the possible different cases.

That’s number one, which is actually something even more subtle and devious that holds back RLHF as a technique that we can scale to significantly smarter systems. Reinforcement learning is extremely good at discovering ways to game the simulation.

This reward model that we’re constructing here that gives the scores to these models are transformers—these transformers are massive neural networks, they have billions of parameters, and they imitate humans, but they do so in a simulated way.

Now, the problem is that these are massive complicated systems—there are billions of parameters here that are outputting a single score. It turns out there are ways to game these models.

You can find kinds of inputs that were not part of their training set, and these inputs inexplicably get very high scores, but this happens in a kind of fake way. Very often what you find if you run RLHF for very long—for example, if we do 1,000 updates, which is a lot of updates—you might expect that your jokes are getting better, and you’re getting real bangers about pelicans.

But that’s not exactly what happens. What happens is, in the first few hundred steps, the jokes about pelicans are probably improving a little bit, and then they actually dramatically fall off a cliff, and you start to get extremely nonsensical results.

For example, you start to get the top joke about pelicans starting to be "the." This makes no sense, right? When you look at it, why should this be a top joke? But when you take "the" and plug it into your reward model, you’d expect a score of zero, but actually, the reward model loves this as a joke.

It will tell you that "the" is a score of 1.0. This is a top joke, and this makes no sense. But it's because these models are just simulations of humans, and they’re massive neural networks, and you can find inputs that get into the nooks and crannies of the model and give nonsensical results at the top.

These examples are what's called adversarial examples. I'm not going to go into the topic too much, but these are adversarial inputs to the model. They are specific inputs that go between the nooks and crannies of the model, giving nonsensical results at the top.

Now, here’s what you might imagine doing: you say, "Okay, the 'the' is obviously not a score of one." It’s obviously a low score, so let’s take "the" and add it to the dataset, giving it an ordering that is extremely bad, like a score of five.

Indeed, your model will learn that "the" should have a very low score, and it will give it a score of zero. The problem is that there will always be an infinite number of nonsensical adversarial examples hiding in the model.

If you iterate this process many times and keep adding nonsensical stuff to your reward model and giving it low scores, you’ll never win the game. You can do this many rounds, and reinforcement learning will always find ways to game the model. It will discover adversarial examples and get high scores with nonsensical results.

Fundamentally, this is because our scoring function is a giant neural network, and reinforcement learning is extremely good at finding just the ways to trick it.

Long story short, you can run RLHF for maybe a few hundred updates, and the model is getting better, and then you have to crop it. You’re done; you can’t run too much against this reward model because the optimization will start to game it. You basically crop it, call it, and ship it.

You can improve the reward model, but you come across these situations eventually at some point. So RLHF, what I usually say, is that RLHF is not RL. What I mean by that is I mean RLHF is RL, but it’s not RL in the magical sense.

This is not RL that you can run indefinitely; these problems, where you are getting correct answers, cannot be gamed as easily. You either got the correct answer, or you didn’t, and the scoring function is much simpler.

You’re just looking at the boxed area and seeing if the result is correct. It’s very difficult to game these functions, but gaming a reward model is possible.

In verifiable domains, you can run RL indefinitely. You could run for tens of thousands or hundreds of thousands of steps and discover all kinds of really crazy strategies that we might not even think about for performing well.

In the game of Go, there’s no way to game the winning or losing of a game. We have a perfect simulator; we know where all the stones are placed, and we can calculate if someone has won or not.

There’s no way to game that, so you can do RL indefinitely and eventually beat even Lee Sedol. But with models like this, which are gameable, you cannot repeat this process indefinitely.

So I see RLHF as not real RL. The reward function is gameable; it's more like a fine-tuning process. It’s a little improvement, but it’s not something that is fundamentally set up correctly where you can insert more compute, run longer, and get much better magical results.

It’s not RL in that sense. It can find you in your model and get better performance, and indeed, if we go back to ChatGPT, the GPT-4 model has gone through RLHF because it works well, but it’s just not RL in the same sense. RLHF is a little fine-tune that slightly improves your model.

That’s how I would think about it. Okay, so that's most of the technical content I wanted to cover. I took you through the three major stages and paradigms of training these models: pre-training, supervised fine-tuning, and reinforcement learning.

I showed you that they loosely correspond to the process we already use for teaching children. In particular, we talked about pre-training being sort of like the basic knowledge acquisition of reading exposition, while supervised fine-tuning is looking at lots and lots of worked examples and imitating experts with practice problems.

The only difference is that we now have to effectively write textbooks for LLMs and AIs across all the disciplines of human knowledge, and also in all cases where we want them to work, like code and math—basically all the other disciplines.

We’re in the process of writing textbooks for them, refining all the algorithms I’ve presented on a high level, and then, of course, doing a really good job at executing training these models at scale and efficiently.

I didn’t go into too many details, but these are extremely large and complicated distributed jobs that have to run over tens of thousands or even hundreds of thousands of GPUs, and the engineering that goes into coordinating this is at the state of the art of what’s possible with computers at that scale.

So I didn’t cover that aspect too much, but this is very serious and there are underlying all these very simple algorithms. Ultimately, I also talked about sort of the theory of mind a little bit of these models.

What I want you to take away is that these models are really good, but they’re extremely useful tools for your work. You shouldn’t sort of trust them fully. I showed you some examples that even though we have mitigations for hallucinations, the models are not perfect and they will hallucinate still.

It’s gotten better over time, and it will continue to get better, but they can hallucinate. In other words, in addition to that, I covered kind of like what I call the Swiss cheese model of LLM capabilities that you should have in your mind.

The models are incredibly good across so many different disciplines but randomly fail in some unique cases. For example, what is bigger, 9.11 or 9.9? The model doesn’t know, but it can solve Olympiad questions.

This is a hole in the Swiss cheese, and there are many of them, so you don’t want to trip over them. So don’t treat these models as infallible.

Check their work; use them as tools, use them for inspiration, use them for the first draft, but work with them as tools and be ultimately responsible for the product of your work.

That’s roughly what I wanted to talk about. This is how they’re trained, and this is what they are. Now, let's turn to what are some of the future capabilities of these models—probably what’s coming down the pipe.

I have a few bullet points on some of the things that you can expect coming down the pipe. The first thing you’ll notice is that the models will very rapidly become multimodal.

Everything I talked about above concerned text, but very soon we’ll have LLMs that can not just handle text, but can also operate natively and very easily over audio, so they can hear and speak, and also images, so they can see and paint.

We’re already seeing the beginnings of all of this, but this will be all done natively inside the language model, and this will enable natural conversations.

Roughly speaking, the reason this is not different from everything we covered above is that as a baseline you can tokenize audio and images and apply the exact same approaches to everything we’ve discussed above.

It’s not a fundamental change—it just has to do with adding some tokens. For tokenizing audio, we can look at slices of the spectrogram of the audio signal and tokenize that, adding more tokens.

That represents audio and just adds them to the context windows, training on them just like above. The same for images; we can use patches and separately tokenize patches.

What is an image? An image is just a sequence of tokens, and this actually kind of works. There’s a lot of early work in this direction, so we can create streams of tokens representing audio and images as well as text and intersperse them, handling them all simultaneously in a single model.

That’s one example of multimodality. Second, something that people are very interested in is that currently, most of the work is handing individual tasks to the models on kind of like a silver platter.

We say, "Please solve this task for me," and the model does this little task, but it’s up to us to still organize a coherent execution of tasks to perform jobs.

The models are not yet at the capability required to do this in a coherent, error-correcting way over long periods. They’re not able to fully string together tasks to perform these longer-running jobs, but they’re getting there, and this is improving over time.

What’s probably going to happen is we’re going to start to see what’s called agents that perform tasks over time. You supervise them, you watch their work, and they come up to report progress.

We’re going to see more long-running agents handling tasks that don’t just take a few seconds of response but many seconds or even minutes or hours over time—but these models are not infallible, as we talked about above.

So all of this will require supervision. For example, in factories, people talk about the human-to-robot ratio for automation. I think we’re going to see something similar in the digital space.

We are going to be talking about human-to-agent ratios, where humans become a lot more supervisors of agent tasks in the digital domain.

Next, I think everything is going to become a lot more pervasive and invisible. It’s kind of like integrated into tools and everywhere. In addition, computers are being used so that these models aren't able to take actions on your behalf.

This is a separate bullet point—if you saw ChatGPT launch the operator, then that’s one early example of that, where you can hand off control to the model to perform keyboard and mouse actions on your behalf.

That’s something very interesting. The last point I have here is just a general comment that there’s still a lot of research to potentially do in this domain.

One example of that is something along the lines of test time training. Remember that everything we’ve done above and that we talked about has two major stages.

There’s first the training stage, where we tune the parameters of the model to perform the tasks well. Once we get the parameters, we fix them and then deploy the model for inference.

From there, the model is fixed; it doesn’t change anymore. It doesn’t learn from all the stuff it’s doing at test time. It has a fixed number of parameters, and the only thing that is changing is the token inside the context windows.

The only type of learning, or test-time learning, that the model has access to is its in-context learning based on kind of like dynamically adjustable context window depending on what it’s doing at test time.

But I think this is still different from humans, who can learn depending on what they are doing. For instance, when you sleep, your brain is updating, which has no equivalent in these models and tools.

There are still many wonky ideas I think to be explored. In particular, I think this will be necessary because the context window is a finite and precious resource.

As we start tackling very long-running multimodal tasks while putting in videos, these token windows will start to grow extremely large—not just thousands, or even hundreds of thousands, but significantly beyond that.

The only trick we have available right now is to make the context windows longer, but I think that approach by itself will not scale to actual long-running tasks that are multimodal over time.

I think new ideas are needed in some of these cases, particularly where these tasks are going to require very long contexts. So those are some examples of some things you can expect coming down the pipe.

Let's now turn to where you can actually keep track of this progress and be up-to-date with the latest and greatest of what’s happening in the field.

I would say the three resources that I have consistently used to stay up-to-date are, number one, El Marina. Let me show you El Marina; this is basically an LLM leaderboard that ranks all the top models, and the ranking is based on human comparisons.

So humans prompt these models, and they get to judge which one gives a better answer. They don’t know which model is which; they’re just looking at which model provides the better answer, allowing you to calculate a ranking.

Here, you can see the different organizations like Google Gemini that produce these models. When you click on any of these, it takes you to the place where that model is hosted.

Currently, we see Google is on top, with OpenAI right behind. We see DeepMind in position number three. The reason this is a big deal is the last column shows the license; DeepMind is an MIT-licensed model—it's open weights.

Anyone can use these weights; anyone can download them; anyone can host their own version of DeepMind, and they can use it in whatever way they like. So it’s not a proprietary model that you don’t have access to—it's an open weights release, and this is unprecedented that a model this strong was released with open weights.

Next, we have a few more models from Google and OpenAI. When you scroll down, you start to see some other usual suspects, like Exai here, and Anthropic with some of their models. Here, we have number 14 and Meta with LLaMA.

Similar to DeepMind, LLaMA is also an open weights model, but it’s down here compared to up here. I will say that this leaderboard was really good for a long time, but I think it has become a little bit gamed in the last few months.

I don’t trust it as much as I used to. I think empirically, a lot of people are using Sonet from Anthropic and that it’s a really good model, so it’s all the way down here at number 14.

Conversely, I think not as many people are using Gemini, but it’s racking really high. Use this as a first pass, but try out a few of the models for your tasks and see which one performs better.

The second resource I would point to is the AI News newsletter. AI News may not be very creatively named, but it is a very good newsletter produced by Swix and friends, so thank you for maintaining it.

It’s been very helpful to me because it is extremely comprehensive. If you go to the archives, you see that it’s produced almost every day, and it is comprehensive. Some of it is written by humans and curated by humans, but a lot of it is constructed automatically with LLMs.

You’ll find that these are quite comprehensive, and you’re probably not missing anything major if you go through it, of course, you might not go through it because it’s so long. The summaries up top are quite good and likely have some human oversight, so this has been very helpful to me.

The last thing I would point to is just X and Twitter. A lot of AI happens on X, so I would suggest following people you like and trust to stay up-to-date with the latest and greatest on X as well.

Those are the major places that have worked for me over time. Finally, a few words on where you can find the models and where you can use them.

The first thing I would say is for any of the biggest proprietary models, you just have to go to the website of that LLM provider. For example, for OpenAI, that’s ChatGPT; I believe it works now. So that’s great for OpenAI.

For Gemini, I think it’s gem.google.com or AI Studio; they have two for some reason that I can’t quite understand. For the open weight models, like DeepMind or others, you have to go to some inference provider for LLMs.

My favorite one is Together, thus when you go to the Together playground, you can pick lots of different models, and they are all open models of different types, and you can talk to them here as an example.

If you’d like to use a base model, it’s not as common to find base models on these inference providers; they are all targeting assistants and chat. So, even here, I couldn’t see base models; I usually go to Hyperbolic because they serve my LLaMA 3.1 base, and I love that model.

You can just talk to it here, so as far as I know, this is a good place for a base model. I wish more people hosted base models because they are useful and interesting to work with in some cases.

Finally, you can also take some of the smaller models and run them locally. For example, DeepMind, the biggest model—you’re not going to be able to run locally on your MacBook, but there are smaller versions of the DeepMind model that are distilled, and you can also run these models at smaller precision.

You won’t run that at the native precision of, for example, fp8 on DeepMind or bf16 LLaMA, but much lower than that. Don’t worry if you don’t fully understand those details, but you can run smaller versions that have been distilled and at even lower precision.

You can fit these on your computer, so you can actually run pretty okay models on your laptop. My favorite place to go is LM Studio, which is basically an app you can get. I think it looks really ugly, and I don’t like that it shows you all these models that are basically not that useful.

Everyone just wants to run DeepMind. I don’t know why they give you these 500 different types of models; they are really complicated to search for, and you have to choose different distillations and precisions.

It’s all really confusing. Once you understand how it works—and that’s a whole separate video—you can load up a model like, "Here I loaded up a LLaMA 3 2 Instruct 1 billion," and you can just talk to it.

You can ask for Pelican jokes, and it will keep providing them. All of this happens locally on your computer, so we’re not actually sending data anywhere else; this is running on the GPU on a MacBook Pro.

That’s very nice, and you can eject the model when you’re done, freeing up the RAM. LM Studio is probably my favorite one, even though I think it has a lot of UI/UX issues and is geared towards professionals.

If you watch some videos on YouTube, I think you'll figure out how to use the interface. So those are a few words on where to find these models.

Now, let’s loop back around to the question we started with: When we go to chat.openai.com and enter some kind of a query and hit go, what exactly is happening? What are we seeing? What are we talking to? How does this work?

I hope this video gave you some appreciation for the under-the-hood details of how these models are trained and what this is that is coming back.

In particular, we now know that your query is taken and is first chopped up into tokens. We go to the tokenizer, and this is where the query is formatted in the user query. We basically put in our query right there.

So our query goes into the conversation protocol format, which is this method we maintain for conversation objects. This gets inserted there, and then this whole thing ends up being just a token sequence, a one-dimensional token sequence under the hood.

So ChatGPT saw this token sequence, and when we hit go, it continues appending tokens into this list. It continues the sequence; it acts like a token autocomplete.

In particular, it gave us this response, so we can basically just put it here and see the tokens it continued with.

Roughly now the question becomes, okay, why are these the tokens that the model responded with? What are these tokens, where are they coming from, what are we talking to, and how do we program this system?

That’s where we shifted gears, and we talked about the under-the-hood pieces of it. The first stage of this process, and there are three stages, is the pre-training stage. This fundamentally has to do with knowledge acquisition from the internet into the parameters of this neural network.

The neural network internalizes a lot of knowledge from the internet, but where the personality really comes in is in the process of supervised fine-tuning. What happens here is that a company like OpenAI will curate a large dataset of conversations—say, 1 million conversations across diverse topics.

There will be conversations between a human and an assistant. Even though there’s a lot of synthetic data generation used throughout this entire process and a lot of LLM help, fundamentally, this is a human data curation task with lots of humans involved.

These humans are data labelers hired by OpenAI, who are given labeling instructions for creating ideal assistant responses for any arbitrary prompts. They are teaching the neural network, by example, how to respond to prompts.

What is the way to think about what came back here? The right way to think about it is that this is the neural network simulation of a data labeler at OpenAI.

So, it’s as if I gave this query to a data labeler, and this data labeler first reads all the labeling instructions from OpenAI and then spends two hours writing up the ideal assistant response to this query and giving it to me.

We’re not actually doing that because we didn’t wait two hours. What we’re getting here is a neural network simulation of that process. We must keep in mind that these neural networks don’t function like human brains do. They are different; what’s easy or hard for them is different from what’s easy or hard for humans.

We are getting a simulation. So here, I’ve shown you this token stream, and this is fundamentally the neural network with a bunch of activations and neurons in between.

This is a fixed mathematical expression that mixes inputs from tokens with parameters of the model, and they get mixed up to get you the next token in a sequence.

This is a finite amount of compute that happens for every single token, and so this is some kind of a lossy simulation of a human that is restricted in this way. Whatever the humans write, the language model is kind of imitating at this token level, with this specific computation for every single token in the sequence.

We also saw that as a result of this, and the cognitive differences, the models will suffer in various ways. You have to be very careful with their use.

So, for example, we saw that they will still suffer from hallucinations. We also have the sense of a Swiss cheese model of LLM capabilities, where basically there are holes in the cheese. Sometimes the models will just arbitrarily do something dumb.

Even though they are doing lots of magical stuff, sometimes they just can’t. So maybe they weren't given enough tokens to think, and they might just make stuff up because their mental arithmetic breaks.

They might suddenly not be able to count the number of letters or suddenly unable to tell you that 9.11 is smaller than 9.9, which looks kind of dumb.

So it’s a Swiss cheese capability, and we must be careful with that. We saw the reasons for that, but fundamentally, this is how to think about what came back: it is a simulation of this neural network of a human data labeler following the labeling instructions at OpenAI.

That’s what we’re getting back. Now, I do think that things change a little bit when you actually reach for one of the thinking models, like GPT-3 Mini.

The reason for that is that GPT-4 doesn’t do reinforcement learning; it does do RLHF, but I’ve told you that RLHF is not RL. There’s no time for magic in there.

It’s just a little bit of fine-tuning—that’s the way to look at it. But these thinking models, they use RL, so they go through this third stage of perfecting their thinking process and discovering new strategies for thinking.

The solutions to problem-solving look a little bit like your internal monologue in your head, and they practice that on a large collection of practice problems that companies like OpenAI create and curate, and then make available to the LLMs.

So when I come here and I talk to a thinking model with this question, we’re not anymore just seeing the straightforward simulation of a human data labeler. This is actually something that is new, unique, and interesting.

OpenAI is not showing us the under-the-hood thinking and the chains of thought underlying the reasoning here, but we know that such a thing exists. What we're getting here is not just an imitation of a human data labeler; it’s actually something new, interesting, and exciting in the sense that it’s a function of thinking that has emerged in a simulation.

It’s not just imitating human data labelers; it comes from this reinforcement learning process. Here we’re not giving it a chance to shine because this is not a mathematical or reasoning problem; this is just some kind of creative writing problem, roughly speaking.

I think it’s an open question as to whether the thinking strategies developed inside verifiable domains transfer and are generalizable to unverifiable domains, such as creative writing. The extent to which that transfer happens is unknown in the field, I would say.

So we’re not sure if we can do RL on everything verifiable and see the benefits in things that are unverifiable, like this prompt. That's an open question.

Another interesting fact is that this reinforcement learning is still way too new, primordial, and nascent. So we’re just seeing the beginnings of the hints of greatness in reasoning problems.

We’re seeing something that is, in principle, capable of doing something like the equivalent of move 37, but not in the game of Go—in open domain thinking and problem-solving. In principle, this paradigm is capable of doing something really cool, new, and exciting—something that no human has thought of before.

In principle, these models are capable of producing analogies that no human has had. So I think it’s incredibly exciting that these models exist, but again, they’re early and these are primordial models for now.

They will mostly shine in domains that are verifiable, like math and code, etc. So it’s very interesting to play with, think about, and use.

That’s roughly it. I would say those are the broad strokes of what's available right now. Overall, it’s an extremely exciting time to be in the field. Personally, I use these models all the time daily—tens or hundreds of times—because they dramatically accelerate my work.

I think a lot of people see the same thing. We’re going to see a huge amount of wealth creation as a result of these models. Be aware of some of their shortcomings.

Even with RL models, they’re going to suffer from some of these issues. Use them as tools in a toolbox; don’t trust them fully because they will randomly do dumb things.

They will randomly hallucinate, skip over some mental arithmetic, and not get it right. They might randomly count incorrectly or something like that. Use them as tools in the toolbox; check their work, and own the product of your work.

I hope this video was useful and interesting to you. I hope you had fun, and I apologize for the length. But I hope it was informative.
12679.479 - 4.84: was useful and yeah

I will see you later.
