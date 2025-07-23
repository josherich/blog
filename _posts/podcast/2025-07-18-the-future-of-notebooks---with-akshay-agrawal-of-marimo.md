---
layout: post
title: "The Future of Notebooks - with Akshay Agrawal of Marimo"
date: 2025-07-18 00:00:01
categories: podcast untitled
tags: [podcast_script]
---


[The Future of Notebooks - with Akshay Agrawal of Marimo](https://assets.flightcast.com/track-v2/01JY2H3FPZ42T19G3HZFHK1NWB.mp3)

Hey everyone, welcome back to another **Latent Space Lightning** pod. This is **Alessio**, partner and **CTO at Decibel**. And today I have **Akshay Argarwal from Marimal** on the studio. Welcome.

Thanks Alessio, really happy to be here.  
Yeah, thanks to **Samuel Colvin from Pydantic** for the introduction. You know, we saw him at the **AI Engineer Summit in New York** and he was like,  
> "you should have these guys on the pod."

So, and we've had previously, you know, **Brian Bishop from Hacks**, who's now at **TRVC**. So we covered notebooks in the past and I think there's now a resurgence of **AI plus previous data you access**. We have a quadratic episode on the spreadsheet side.

So welcome to the show and maybe give people an introduction on **Marimal** and what you guys do.

Yeah, definitely. So **Marimal** is an **open source notebook for Python** that's built entirely from scratch. So it has no dependencies on **Jupyter** and it's designed specifically for **AI and data work**.

Some of the main things that are different from traditional notebooks is Marimal has **reactive execution**. So you run a cell, Marimal knows what other cells need to run and also has built-in **UI elements**.

Like the upshot of these things is that it lets you work with data and AI models in **entirely new ways**. It really puts your data front and center in a way that sort of you don't see in traditional notebooks. And these things are a lot easier to demo. So we'll jump into a few demos in a bit.

But I guess a couple other things I'll say about Marimal and sort of the things that are fueling the strong traction that we're seeing is that not only are they really good for **rapid prototyping**, they also let you go from **prototype to production**.

So they're stored as **pure Python**.  
You can:

- version them with Git  
- share them as data apps  
- execute them as scripts or pipeline  

They have **SQL built in** and you can connect to your own databases or data lakes. So you can think of it as a modern replacement for not only **Jupyter**, but also:

- **Streamlit**  
- **Gradio**  
- **Papermill**

And yeah, we are seeing pretty strong traction this year. I think last I checked over **300,000 monthly downloads on PyPI**, more **GitHub stars than Jupyter Notebook** for whatever that's worth. And we're used at companies like:

- **OpenAI**  
- **Hugging Face**  
- **Cloudflare**  
- **BlackRock**  

Universities like **Stanford** and **Berkeley**.

That's the high-level overview.

Yeah. How did you decide on the **notebook shape**? I think there's many critiques of **Jupyter Notebooks** from the kernel and like the way it interacts with AI models and IDEs. What was kind of like the initial idea maze that got you here?

Yeah. So I started working on Marimal after, so I was at **Google Brain**. It was a while ago, but I was an engineer on **TensorFlow**. And then after that, I did a **PhD at Stanford in machine learning research**.

And one thing I noticed, even for myself too, is that like people have a lot of complaints about **Jupyter Notebooks**. And I did too, which is sort of why I'm working on Marimal today.

But at the same time, they provided something that was really invaluable for people who work with data and AI, which is the ability to write code and interact with the output of the code, interact with your data in an **iterative way**.

And I think one thing that's constant, back then it was machine learning, now it's more **generative AI**. The thing that has been true is that you got to look at your data and notebooks are really good for that, even though they have traditionally had other problems like:

- hidden state  
- reproducibility issues  
- the file format, making it unable to version with Git  

So after finishing my PhD, I noticed that, look, not only does a lot of data work start in notebooks, but with the rise of AI—at that time, that was end of 2021, so **ChatGPT** was just bursting onto the scene—it became clear to me that people were going to spend even more time working with data, evaluating model outputs, and stuff.

So I thought I wanted to design something that kept the **interactivity** that notebooks are really great for, but that had sort of the **guardrails** that regular software has, like:

- reproducibility  
- no hidden state  

You can actually reuse your notebooks as apps, as scripts.

And yeah, so that was the genesis of the idea.

Cool. Yeah. Let's jump into a demo. I think that most of the audience is technical, so feel free to keep it engineering and focused.

Awesome. So let me share my screen.

Cool. So I can share a few demos. This is an example of a **Marimal notebook**. You have cells of Python code, you have some markdown, and then you have some visual outputs.

So this is, we're going to start with classical machine learning with **MNIST data set**, and then we'll go to some **generative AI applications**.

So over here, we're looking at...
A scatter plot of a **2D embedding of MNIST**, which is a dataset of numerical digits. And so each different color in the scatter plot corresponds to a different digit.

One thing that is immediately different between how a **Jupyter notebook** works and a **Marimo notebook** works is that this notebook is going to react to my UI interactions and also my code interactions. 

So what I'm going to do here is I’m going to hide the code. I’m going to click this button, and then I get an **app view** sort of of my notebook. One thing that I can do is that I can actually make a selection in the scatter plot. And as I make this, you can see down below, I'm getting a **live preview of the underlying images** that have been embedded into 2D. 

Workflows like this are like, one, I think, really important whenever you work with data, like you actually really need to see your data. And two, very painful to get working in traditional notebooks that are sort of based on **Jupyter**.

In contrast, if you look at the code for this notebook, it's really quite simple. Just a few lines of code, you create an **Altair chart**, and then you just wrap it in one special Marimo function. That makes this thing totally interactive. 

And then what's happening behind the scenes is that I have this **chart object**, it has a **value property**, and that value is just the data that's been selected. So if I select here, you'll see that a **data frame gets sent back to Python**, and you can see a visualization of it. Then you have downstream code that can manipulate that data in any way.

And so that's what I mean by **reactive**. I interact with a notebook, and then Marimo knows how to automatically update outputs.

This is a one-to-one compatible with notebooks. So if I already have a notebook, can I just kind of copy-paste the cells over? Or what's the process?

> Almost. So our file format is different. But yeah, you can copy-paste the cells over, or we have a command line utility:  
> 
> ```bash
> marimo convert my_notebook.ipymb my_notebook.py
> ```
> 
> and it'll do the conversion.

There are some restrictions on the kind of code that Marimo lets you write. Because Marimo does have a **dependency graph basically on your cells**, that's how it knows what cells to run. You can't redefine variables across multiple cells. But our conversion tool will fix that up for you. And we have things like local variables and other things that sort of make that work.

Yeah. Wow. Awesome.

And so I have these other little UI **widgets** here. I can click this widget, for example, and it changes the embedding. Again, if you were doing this in a Jupyter notebook, you would probably have copy-pasted that all like six cells, multiple times. And then you wouldn't even have this sort of **drill-down interactivity**. 

So that's one way that Marimo brings data to life in a more classical machine learning context.

Can look at another demo. This one is pretty fun.

It was made by **Vincent Wormerdam**, who is Marimo’s resident **creative genius**.

So this one—OK, if you’re looking at this, first thing you might notice is,

> Notebooks are traditionally linear. You're looking at some columns here on the screen. We have three columns of code and outputs.

**Marimo** is actually pretty flexible in the way you can arrange your code. And we recognize that monitors are wide and you might want to use that screen real estate. So you can configure it to show things in columns and the way that the order of execution works is just based on **variable declarations and references**, kind of like **Excel** in some sense.

Right, so you can have columns. Things just kind of execute in the right way.

So this notebook is kind of fun. We have a few cells. We have a little custom widget that **Vincent Vibe** coded. It's **Microsoft Paint** in a Marimo notebook.

What I'm going to do here is I'm going to draw in this widget. The first thing you see is, as I’m drawing, my image is being rendered here on the right. And that's based on that **reactivity**.

I'm going to draw a little graph.

This graph is going to be used as part of the input to a **query** that I'm going to make to a **multimodal model**. I'll ask Jim and I to give me a representation as a **mermaid**.

OK, there we go. So I have the **markdown code for the mermaid graph**.

This is the kind of thing you really don't think—if you think Jupyter Notebook—you don't envision yourself being able to make workflows like this for yourself.

But I hope this demo shows how Marimo really makes you rethink what a **notebook can do** and really brings your data to life in new ways.

Do you have any kind of **AI native utilities** to call these models or are people just writing all the API calling code? Or do you think that's kind of an interesting direction?
Yeah. So we do have some **AI native capabilities** to write these, call these models.

So I guess it's in a couple of modalities. So right now, this notebook is just calling the **client API**. If you want to, you can just generate code.

Speaking of a recent podcast that you all did for **Quadratic, the AI spreadsheet**, there we saw a lot that you could use **natural language to generate code**. And actually, **Marimo** lets you do similar things.

So like I could—there's a **generate with AI button** here at the bottom, right? So I could write some code. I can tag data frames and other things that I have. And I'm actually not sure what I want to ask it to show you, but I could say,

> _"create matplotlib plot of a sine curve."_

And I can just do that. I'm missing some packages here that I'll need to install. And then we can try again.

Yeah. How do you do all the packaging? Is there like a **requirements.txt** file, just like you would in a...

Actually, yeah, it's a little cooler, actually, than that. So let's see this time.

One thing that you'll notice: when I tried to run the **generate with AI code button** and I didn't have a package installed, there was like a little toast that said,

> _"hey, we can install this package for you."_

And it just kind of did it. So we actually have a tight integration with the **UV package manager from Astral**.

We can actually store dependencies inline in the notebook file itself in the **notebook header**. And this is something that UV supports.

So then you can just actually ship a notebook file around and it contains all its dependencies. That's like kind of opt-in, but that's one way thing that really makes notebooks a lot more reproducible.

And so we'll see again, we don't have the packages, but I can install them. And then there we go. They're installed. The cell re-ran and I have sort of my output.

Yeah. So when you're asking AI to generate any AI generated cell, the AI doesn't have to think about the broader requirements of the project.

Yeah. That's right. And the AI has context to sort of like all the data frames, all the variables that you already have imported into your notebook as well.

But yeah, it can readily use other modules and we'll just sort of do the right thing.

I have another fun demo also made by the one and only **Vincent Warmerdom** that I kind of want to show.

This is a demo sort of in the vein of bringing sort of **data to life** and really working with your data. This is like a **data annotation demo**.

And one thing that you'll notice, actually, so in my hands here, I've got a **PS5 controller**.

Yeah.

And you'll see this little thing here, **Mopad widget**, and it says **gamepad connected**. I'm moving around my mouse and you see some inputs changing here.

So like to really drive home how interactive **Marimo** is and how many different ways we can use to interact:

- Not only can you use your mouse to change UI interactions,
- You can build **custom extensions** to control the applications you make in a Marimo notebook,
- With anything—including a **PS5 controller**.

So this demo here, we have like a bunch of papers from **archive**, and we've indexed them using **Chroma DB** into like a basic vector database.

Now what we're going to do is we're going to make a query to get a bunch of papers related to **data quality**.

There are two embedding models, and the goal is to compare which embedding model we prefer.

So the embedding model embeds the query and then uses vector search to pull related papers.

If I submit this, I get a summary of the paper.

In this case, it says we provide an overview of the **standard data resources for training multilingual reasoning and language models**.

That seems sort of related to data quality, so I'm going to accept this.

And I could accept by clicking this button, but I can also accept it by pushing **X on the gamepad**.

So I push X. Oh, way more fun.

Yeah.

You see that goes through, and I have this editable data frame thing here that shows me the annotation result. And I can just keep going.

I don't know. This one also seems sort of related to data quality. So maybe I'll say accept.

This doesn't seem as related. So I'll say reject.

And what's happening over here is that I'm plotting the **beta distribution of the two models** to sort of get a belief of which model is better.

I can just kind of jam this quite quickly in a way that would be really annoying if I were using my mouse and would just quickly give me carpal tunnel syndrome.

So another way that like Marimo really brings your data to life and really makes your work a lot more interactive than it might be otherwise.

That's great. Can we maybe talk about the **blank canvas AI use cases**?

So, you know, I want to do some data analysis. Yeah, I like the **notebook-like UI**. How do I start from scratch?
Yeah, that that's actually perfectly teed up. That was the next demo.  

So this is how you start from scratch. This is an **empty Marimo notebook**. I can assume it a bit. And so there is a code cell and there's this **generate with AI** button.  

So to get started, I will just populate this with some data. And I'm going to use **Vega data sets**, import a data frame about cars. Okay, so I have a data frame.  

And I'm saying kind of new to **Polars**; I don't really know the syntax, but I kind of know what I want to do. So you can click this **generate with AI** button and you can just start typing.  

So maybe the first thing I want to do is get a **histogram**, maybe of one of these columns, just so I can see it sort of in more detail.  

So I can say something like  
> "generate a histogram of miles per gallon"  

Maybe. From and then I can give the data frame as context to whatever model I have connected. So I can just tag it with `@`.  

You'll see here that if I write tag `@df`, it actually is going to pass in all these columns and their data types as context to the language model.  

If I do that, I hit enter. It's going to turn a little bit, generate some code. I can edit it a little bit to sort of clean it up. Don't need to convert it to pandas. Then I can accept and just run it. And then boom. So you have your code.  

And so that kind of really accelerates **rapid prototyping**. And you don't really have to leave your tab and go to ChatGPT. You can just do it entirely in here. You can just sort of vibe code your way through your entire analysis in this way.  

And I guess one thing that's kind of interesting to talk about, maybe it's kind of subtle, is: if you think about doing something like this, I don't know, in **Cursor** or ChatGPT or something like this,  

**What's unique about doing it in Marimo** is the fact that not only does Marimo see your code, but it sees all the variables in memory, and it can also see your database connections, etc. So it can really provide **rich completions**.  

So like it knows the names of the columns, for example.  

> **How are you doing the context formatting?** Like when you do add the `df`, are you showing that to the model when you send it over?  

We basically do something like `df.head()` to just get a preview of the columns, the data types, and then a few sample rows—and just kind of shove that into the context window.  

Yeah. So let's see. I can ask another query. Maybe I can say something like:  

This data set has cars by a bunch of different countries as well. And maybe I want to understand sort of average statistics by country of cars.  

Like,  
- Are **U.S. cars more efficient or less efficient than cars from Japan**, etc.?  

So I can say something like  

> "let me understand average statistics for df across origin column,"  

which is the country. And then boom, it starts writing. Again, what's kind of cool is that you'll see it knows all the column names here.  

And again, I can fix up the code a little, accept, try it out, and there it is—much faster than going to the API docs.  

We have other workflows too for working with AI. So you can also  
- Use a chat bar here where if you want to sort of a **multi-turn conversation**, you can execute it here as well.  
- Use a **bring your own keys model**. Right now I'm using an OpenAI key, but you can also use local models with **Olama** or anything that you like, really.  

---

**Sorry for jumping in late here.** I think you probably guys discussed this earlier, but this is all running a **WebAssembly**, right?  

Actually no, not entirely. Marimo is actually running just on my **laptop**, but we can run a WebAssembly. So I guess similar to a Jupyter Notebook, Marimo is an open source package that you can just install and run wherever you like.  

```bash
pip install marimo
```

Run it on your laptop or on a cloud server, wherever you like. But to make Marimo really easy to share, we've also made it possible to run it entirely in WebAssembly. So actually, if you go to **marimo.new**, this opens a little notebook playground in your browser, and this is running entirely in WebAssembly. So you can just...  

Yeah, I was just kind of curious if there's any part of the Python ecosystem that is not compatible with this. I'm not aware of what the restrictions are.  

Yeah. No, that's a great question. So if you're using Marimo just as the local library on your laptop or cloud server, you can use **any Python package you want**.  

If you're using it in WebAssembly—so for example, in this playground—there are restrictions. So if you try to import **Torch**, it's not going to work. It's not going to be able to install it. But there are certain packages that just don't work.  

And actually for that reason... so whereas I think the WebAssembly really like...
**Democratizes interactive computing to a large extent, it doesn't totally.** So for that reason, our team has actually been really hard at work building a **cloud-hosted colab-like notebook** that we're going to give away to our community for free. And we're calling it **Molab**. This is like a preview of the page. 

Great name. Yeah. It's a funny story. So **Mo from Marimo**. It's at **molab.marimo.it**. It's a pretty simple service. You can: 

- Create a new notebook
- Import a notebook locally or from GitHub  

And these run in **cloud instances**. Currently, they're running on **modal**. And so here you can use **any package you like**. But you can have configurable **CPU and RAM**. You can also upload your own data and we store them in **Cloudflare R2 buckets**.  

You know, the name, I mean, one thing that's actually kind of funny for the origin story of this is that a lot of our users were asking us for something like Colab based on Marimo. Actually, if you go to Google Colab's GitHub issues page, they have one and sort by thumbs up. We are like, I guess, the sixth or seventh most upvoted issue:  
> **"Support Marimo in Google Colab."**

And I don't think Google was ever going to do that anytime soon. So we decided to kind of just do something like that on our own. So that's sort of the origin part where Molab came from.

Yeah, it's a fun, the issue was open in June of last year. It was one of our users who we've communicated with over our GitHub for some time.

What's kind of like missing here in your mind as you think about other things that you want to add to it, like features or maybe trying to break out of all habits? I think you've done a great job of keeping the familiarity of like self-based execution, but adding things like column and things like that. Yeah. What do you think is next?  

Yeah. So a bunch of there could be a bunch of things. So in terms of like breaking out of old habits.

You know, we talked a little bit about how **Marimo has some restrictions** on the kind of codes you write. And actually that ends up leading to much better code because: 

- You can't reuse, you can't redefine variables  
- You kind of have to write things in a **functional way**

So, in that sense, it does sort of break some old, maybe bad habits. One of our users called this **gentle parenting**.

And another way of breaking out of the notebook that we actually do have. So I mentioned notebooks are stored as **pure Python**. So if I go, I can open a notebook file and we can take a look at what it actually looks like. Oops.

You'll see it has a **.PY extension**. I'm going to zoom in and you'll see it's just pure Python. And this is generated for the user, but you can also **edit it yourself**.

Every cell is decorated in that **cell decorator**. And there is an app that runs sort of at the bottom, which suggests you can run this as a script and like indeed you can. So if I go to my terminal and I can just use:  

```bash
uvicorn run embedding_m_this_stuff.py
```

It just starts executing as a script. It loaded a cache data, so it did some other stuff that didn't print it to the terminal. So that's one way that we help folks break out of a notebooking workflow.  

The other way is you can actually **run any Marimo notebook as a data app**, similar to Streamlit. So I can say:  
```bash
marimo run embedding_m_this_stuff
```  
And then it'll run it as a **read-only web app** in my browser that you can also deploy and share with other users or maybe non-technical folks.

Do you see a world in which you made this right too?  

So when I meant read-only, it just means that the consumer of the app can't change the code, but yeah, you can have like you can write to databases from the application and things like that. So definitely you can have write back.

Yeah. Other things that we're working on besides Molab, we do talk about improving, like going further with the **AI assistance** that we have. You know, **agents** are obviously sort of a natural thing to think about.

There's actually a really cool project by a PhD student at **Stanford** where they work in **genomics** and they actually **forked Marimo**. They have a project called **Marimo Agents** and they added a new type of cell, an **agent cell**, where you can type English and then it kicks off an agent that generates your Python code and then adds it to your notebook. And then you have a record of the prompt. So things like that we're looking into exploring too.

Nice. Awesome. I thought this was great.

Any call to action for folks? Are you hiring? Are you looking for obviously more users? Anything?

Yeah. We're always looking for more users. So if you want to try Marimo, the easiest way to get started on your own machine is to:  

```bash
pip install marimo
marimo tutorial intro
```

`pip install marimo`, `marimo tutorial intro` will get you going.

Try out **Molab** if you want a **cloud-hosted experience** of being able to use any package.
Sharing notebooks with links, just like you would with **Colab**, will be available at **molab.marimo.com**.

Otherwise, we love contributors. We have over **a hundred open source contributors**.

Come follow us on socials. We're **marimo_io** on **Twitter**.

I think this mission is great. And no, I think **notebooks are still underrated** by a lot of people and require a dedicated team with a strong vision. You have to reinvent one of the core workflows of most research scientists and engineers.

> Thanks. Appreciate it. Awesome, actually.

Thank you so much. Thank you, guys.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey everyone, welcome back to another Latent Space Lightning pod.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Yeah, definitely. So Marimal is an open source notebook for Python that's built entirely from scratch.",
      "section_level": 1,
      "section_title": "What is Marimo?"
    },
    {
      "index_sentences": "Yeah. How did you decide on the notebook shape? I think there's many critiques of Jupyter Notebooks from the kernel and like the way it interacts with AI models and IDEs.",
      "section_level": 1,
      "section_title": "Genesis and Design Philosophy"
    },
    {
      "index_sentences": "Cool. Yeah. Let's jump into a demo. I think that most of the audience is technical, so feel free to keep it engineering and focused.",
      "section_level": 1,
      "section_title": "Marimo Demos: Capabilities and Use Cases"
    },
    {
      "index_sentences": "This is a one-to-one compatible with notebooks. So if I already have a notebook, can I just kind of copy-paste the cells over?",
      "section_level": 2,
      "section_title": "Jupyter Notebook Compatibility and Conversion"
    },
    {
      "index_sentences": "Can look at another demo. This one is pretty fun. It was made by Vincent Wormerdam, who is Marimo’s resident creative genius.",
      "section_level": 2,
      "section_title": "Multimodal AI Demo: Mermaid Graph Generation"
    },
    {
      "index_sentences": "Do you have any kind of AI native utilities to call these models or are people just writing all the API calling code?",
      "section_level": 2,
      "section_title": "AI Native Utilities and Code Generation"
    },
    {
      "index_sentences": "Yeah. How do you do all the packaging? Is there like a requirements.txt file, just like you would in a...",
      "section_level": 2,
      "section_title": "Packaging and Dependency Management with UV"
    },
    {
      "index_sentences": "I have another fun demo also made by the one and only Vincent Warmerdom that I kind of want to show.",
      "section_level": 2,
      "section_title": "Interactive Data Annotation with Gamepad"
    },
    {
      "index_sentences": "That's great. Can we maybe talk about the blank canvas AI use cases?",
      "section_level": 2,
      "section_title": "Starting from Scratch with AI Assistance"
    },
    {
      "index_sentences": "Sorry for jumping in late here. I think you probably guys discussed this earlier, but this is all running a WebAssembly, right?",
      "section_level": 1,
      "section_title": "Deployment Options: WebAssembly and Molab"
    },
    {
      "index_sentences": "What's kind of like missing here in your mind as you think about other things that you want to add to it, like features or maybe trying to break out of all habits?",
      "section_level": 1,
      "section_title": "Future Directions and Vision"
    },
    {
      "index_sentences": "Nice. Awesome. I thought this was great. Any call to action for folks? Are you hiring?",
      "section_level": 2,
      "section_title": "Call to Action and Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Marimo is an open source notebook for Python, built entirely from scratch without Jupyter dependencies, and specifically designed for AI and data work.",
      "index_of_source": "Yeah, definitely. So Marimal is an open source notebook for Python that's built entirely from scratch.",
      "question": "What is Marimo and its primary purpose?"
    },
    {
      "answer": "Marimo's reactive execution means that when a cell is run or a UI interaction occurs, Marimo automatically knows what other cells need to run and updates outputs. This allows for live previews of data, automatic updates based on UI selections (like in scatter plots), and simplifies interactive workflows that are difficult in traditional notebooks.",
      "index_of_source": "Some of the main things that are different from traditional notebooks is Marimal has reactive execution.",
      "question": "How does Marimo's reactive execution differ from traditional notebooks, and what benefits does it offer?"
    },
    {
      "answer": "The creator noticed that despite complaints about Jupyter notebooks (hidden state, reproducibility issues, poor file format for Git), they provided invaluable iterative interaction with code output and data. Marimo was designed to retain this interactivity while adding guardrails like reproducibility and no hidden state, making notebooks reusable as apps or scripts, especially with the rise of AI.",
      "index_of_source": "But at the same time, they provided something that was really invaluable for people who work with data and AI, which is the ability to write code and interact with the output of the code, interact with your data in an iterative way.",
      "question": "What motivated the creation of Marimo as a notebook-like environment, given common critiques of Jupyter?"
    },
    {
      "answer": "Marimo notebooks are stored as pure Python files, allowing them to be versioned with Git. They also have a tight integration with the UV package manager, which can store dependencies inline in the notebook header, making the entire notebook self-contained and more reproducible.",
      "index_of_source": "So they're stored as pure Python.",
      "question": "How does Marimo ensure reproducibility and version control, addressing common Jupyter issues?"
    },
    {
      "answer": "Marimo offers a \"generate with AI\" button that allows users to use natural language to generate Python code, with the AI having context of existing dataframes and variables. It also includes a chat bar for multi-turn conversations and supports \"bring your own keys\" for models like OpenAI or local models via Olama.",
      "index_of_source": "Yeah. So we do have some AI native capabilities to write these, call these models.",
      "question": "What AI-native capabilities does Marimo offer for generating code or interacting with models?"
    },
    {
      "answer": "Marimo notebooks are stored as .PY files, making them pure Python and editable directly. The order of execution is based on variable declarations and references, similar to Excel, allowing for flexible layouts like multiple columns. This is a departure from the traditional linear Jupyter flow.",
      "index_of_source": "Notebooks are traditionally linear. You're looking at some columns here on the screen.",
      "question": "How does Marimo handle its file format and cell execution order, especially with features like multiple columns, given that notebooks are \"traditionally linear\"?"
    },
    {
      "answer": "Marimo developed Molab because many users requested a Colab-like experience for Marimo, and Google Colab was unlikely to support Marimo. Molab runs notebooks in cloud instances (currently on Modal), allowing users to utilize any Python package without WebAssembly restrictions, configure CPU/RAM, and store data in cloud buckets, thereby democratizing interactive computing further.",
      "index_of_source": "So for that reason, our team has actually been really hard at work building a cloud-hosted colab-like notebook that we're going to give away to our community for free.",
      "question": "Why did Marimo develop its own cloud-hosted service, Molab, and what does it offer compared to local Marimo or Google Colab?"
    },
    {
      "answer": "Marimo notebooks, being pure Python, can be versioned with Git and run directly as Python scripts. Additionally, they can be deployed and shared as read-only web applications similar to Streamlit, allowing non-technical users to interact with the outputs without seeing the underlying code.",
      "index_of_source": "The other way is you can actually run any Marimo notebook as a data app, similar to Streamlit.",
      "question": "Beyond typical notebook use, how does Marimo enable users to break out of traditional notebook workflows?"
    }
  ]
};
</script>
