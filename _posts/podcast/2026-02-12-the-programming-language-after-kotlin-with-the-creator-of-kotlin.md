---
layout: post
title: "The programming language after Kotlin – with the creator of Kotlin"
date: 2026-02-12 00:00:01
categories: podcast
tags: [podcast_script]
---


[The programming language after Kotlin – with the creator of Kotlin](https://api.substack.com/feed/podcast/187478763/3c1dde09a2e4479488bbd3ff21b5ee2f.mp3)

**Why would anyone create a new programming language today if AI can already write most of your code?**
**Andrey Breslav** has an interesting answer.

Andrey Breslav is the creator of **Kotlin**, a language that runs on billions of Android devices and is one of the fastest growing languages in the world. Today we cover how Andrey designed Kotlin by deliberately borrowing ideas from **Scala, C Sharp, and Groovy**, and why he considers leaving out the ternary operator one of his biggest regrets.

We also discuss why making Kotlin interoperate seamlessly with **Java** was a gigantic undertaking, and what it took to get it done. Kotlin adoption went through the roof after **Google announced it as the official language for Android**, in a move that even took Andrey and the Kotlin team by surprise.

Andrey's new project, **CodeSpeak**, is a new programming language built on English, designed for an era where AI writes most of the code. If you're interested in the future of programming languages from someone who built one of the most loved languages of today, then this episode is for you.

This episode is presented by **Statsig**, the unified platform for flags, analytics, experiments, and more. Check out the show notes to learn more about them and our other season sponsors, **Sonar** and **WorkOS**.

---

**Andrey, welcome to the podcast.**
Hello.
Thank you for having me.

It is not often that I meet someone who designed such an influential language across mobile and backend. So let's start with: **how did it all start?**

---

Okay, so that was a little messy because I went to school back in **St. Petersburg**, studied computer science, and I didn't really know exactly what kind of programmer I wanted to become. I knew I wanted to be a programmer. At some point, while I was still at the university, I started teaching programming in school. It was a big, passionate hobby of mine.

At some point, I got a job with **Borland** and worked in some developer tools. That was awesome. Borland was a very big name, though they went under pretty soon after I joined. I hope it wasn't because of me.

I worked at the tail end of the **UML** era, doing developer tools in the UML space. That was very interesting. I learned a lot. But then Borland went under, and I went back to teaching full-time. Then I started PhD school. All that was kind of not really planned out.

In my PhD, I was working on **domain-specific languages (DSLs)**, and generally, I was interested in languages. I was curious about typed languages specifically. I was always curious about how these things worked, but never really serious. When I started looking into DSLs, it was slightly more serious. Although my PhD was a mess and I never defended because of that.

At some point, someone reached out — he was actually a person who was in charge of Borland's office in St. Petersburg. By that time, he was already at **JetBrains**. He reached out to me while I was in **Tartu, Estonia**, where I was a visiting PhD student for a year. It was a lovely time.

He invited me, during my next visit to St. Petersburg, to visit the JetBrains office and talk about something related to languages.

---

What I thought was that it was about this project called **MPS (Metaprogramming System)** that JetBrains had. I knew about it. It’s about DSLs. I worked on DSLs; it was plausible they wanted to talk about something like that.

But I was completely wrong.

What they wanted was to start a **new programming language**.

I was completely unprepared for that. I had never thought about doing something like this. My first reaction was:
> "You don't do new language. You don't need it."

The basic pitch was that the **Java ecosystem needs a new language**. Java is outdated, so on and so forth. We can talk more about this.

It was 2010, I think. I said, "but there are other languages. Everybody’s doing fine. Why do you need to do that?"

---

Then this conversation was actually very insightful because the guys at JetBrains explained how things actually were. It was a big problem by that time.

So Java didn't really evolve and hadn't been for a long time.

**What was the reason behind this? Can you take us back for those of us who are not in the ins and outs?**

Yeah. So the last major version of Java by 2010 was **Java 5**, released in 2004 — a six-year-old language. Since then, there were updates. Java 6 made no changes to the language at all. Java 7 made minor changes. In parallel, other languages — especially **C Sharp** — were progressing very well.
And by **2010**, **C#** had all the nice things. There already were **lambdas**, like header functions and all that nice stuff. There were getters and setters and many other things that made the language much nicer. And **Java** was felt like it was standing still. There was a project to work on lambdas for Java, but that was in the works and had been in the works for a long time and only came out in **2014**. So that was the situation.

And, you know, the ecosystem didn't stand still in the sense that other people were building languages. And there was **Scala**, there was **Groovy**. And, of course, people at **JetBrains** knew both Scala and Groovy. They built tools for them.

It's traditional to build your tools in the language you're building the tools for. So the **Scala plugin** was built in Scala. And there was a lot of Groovy used in JetBrains as well. So they knew what the issues were with the language. And both languages are very interesting and very good in their own ways.

But they saw an opportunity in the market because basically Groovy was too dynamic and too far from, you know, hardcore, mainstream, large-scale production. Because dynamic languages are not for that, basically.

What are dynamic languages for? What are their strengths and best use cases? The trade-off, I guess, if you look at a statically-typed language like **Java**, **Kotlin**, and **Scala**, for example, versus dynamic languages like **Python**, **Ruby**, **JavaScript**, and Groovy:

- In dynamic languages, it's very easy to start and build something working very quickly because basically the language is not in your way as much.
- There's a saying that **"nothing limits the imagination of a programmer like a compiler."**

And this may be changing nowadays a little bit. And this is in part what I'm working on now. But back in the day, it was completely true. The whole art of making a good language was to restrict the user in a good way.

Yeah, but in any case, the situation with dynamic languages is that they are much more user-friendly in the beginning. But then when the project scales, you'll have trouble making large refactorings. You have trouble making sure that everything works together. You need to do a lot more testing and rely on other things like that.

As opposed to static languages where you have precise refactoring tools and other things that can make sure that at least a certain class of problems just doesn't happen. And, you know, this is why, at least in our mind back then, it was absolutely clear that if we're building a language for large projects, big teams, so on and so forth, it has to be a **static** one.

So with Groovy, that was a big issue of **performance** as well, because Groovy was building a dynamic language on top of a very static runtime. So there was quite a bit of tension there.

That wasn't the Groovy side and the Scala side. Scala is a wonderful static language and incredibly powerful and with tons and tons of good ideas. But it had its own problems. It relied very heavily on **implicits**, for example. And I have a history of debugging one line of Scala for an hour to try and figure out what it does. Just because it was pretty complicated.

Also, the compiler was very slow and there were issues of **stability**, and many, many things were just not accessible enough for a lot of engineers. So from the experience of using Scala, JetBrains, my colleagues basically understood that it's not what's going to change the industry. Although Scala got a lot of adoption.

And again, like **Martin Odersky**, he is a great language designer. And I think one of the biggest use cases was old **Twitter**. A lot of it was built on Scala and they scaled to massive scale, etc. And I think **LinkedIn** as well.

So in any case, these were, you know, it's always very nice when other languages kind of pioneer things. And then you can build on top of their successes and failures. And we were in that position, basically.

So the argument that people at JetBrains were making was basically that there is a **window of opportunity**. People need this language. We, JetBrains, are the company who can actually put out a language and make it successful because:

```markdown
- We have access to the users.
- We have their trust.
- We can make good tools.
```

And it was another issue with Scala, for example. It was very difficult to build tools for Scala back then. Now Scala 3 is more tooling-friendly, but back then it was a nightmare.

Like, I said that, you know, if you have a static language, you can't have precise refactorings if the language is too complex. And some languages are particularly challenging. So Scala back then and C++ were incredibly challenging to make precise tools for.

So, and that was the basic pitch. And I quickly understood that, yeah, they were right.
And this was something that was worth a shot in the sense that it was **not completely hopeless, not completely dead in the water**. I had no idea if we could pull it off.

It's, it was then when we actually sketched some initial features on the **whiteboard**.

Just because **JetBrains is genuinely run by engineers?** Hold that thought from Android on how JetBrains is genuinely run by engineers. This is because I happen to know another company also run by engineers: **Sonar**, our seasoned sponsor.

If there's a time when we need true engineers, it's now. As **AI coding assistants** change how we build software, code is generated faster than before. But **engineering basics remain important**. We still need to verify all this new AI-generated code for **quality, security, reliability, and maintainability**.

A question that is tricky to answer:
**How do we get the speed of AI without inheriting a mountain of risk?**

Sonar, the makers of **SonarQube,** has a really clear way of framing this:

```
Vibe, then verify.
```

The **vibe** part is about giving your teams the freedom to use these AI tools to innovate and build quickly. The **verify** part is the essential automated guardrail. It's the independent verification that checks all code, human- and AI-generated, against your **quality and security standards**.

Helping developers and organizational leaders get the most out of AI, while still keeping **quality, security, and maintainability high,** is one of the main themes of the upcoming **Sonar Summit**.

It's not just a user conference. It's where **devs, platform engineers, and engineering leaders** are coming together to share practical strategies for this new era. I'm excited to share that I'll be speaking there as well.

If you're trying to figure out how to adopt AI without sacrificing code quality, join us at the **Sonar Summit**. To see the agenda and register for the event on March the 3rd, head to:

**sonarsource.com/pragmatic/sonarsummit**

---

So everybody I talked with was deeply in the weeds with **IDEs and everything in new programming languages** very well. We had a very technical discussion.

I don't remember exactly all of the features we were talking about, but the current syntax for **extensions in Kotlin** was already there. I don't remember why exactly we focused on extensions, but it was there.

So, from day one, we're basically building on top of ideas from other languages, like extensions obviously came from **C#**.

Yeah, so it was a very exciting conversation, but I didn't make a decision then because I was in **Tartu** and I needed to finish there. It took me a few months to finish.

Then I came to **St. Petersburg** for one month because after that I had an internship scheduled with **Microsoft Research in Redmond**. I was going to **Seattle** to stay there for about three and a half months.

I said, "Okay, guys, I have this month. I can work in the office and we can try to sketch things, but then I'll go into Microsoft and then I will decide whether I commit or not." Which in hindsight, I made the right decision in the end.

I had a great time for this month or so. I worked with the guys in the office — it was mostly **Max Shafirov** we were working with and it was incredible. We had such great discussions and I actually saw Max this morning and it was like, it was great time.

So then I went to Seattle, did something completely different. There are Microsoft researchers, some really great researchers working there, actually was exposed to the **top notch level of academia** for the first time — was very insightful.

But after that, I kind of realized what the question was: whether I want to try to pursue an academic career, which I didn't feel like I was really built for and was not sure whether I can be a good researcher on my own or I'll have to follow in somebody else's footsteps.

---

So for those of us engineers, which will be the majority who have not built a language from scratch, how do you start with it? Like, speaking for myself, I know how to:

- write code
- open editor
- write Hello World
- write a more complex app
- even write a more complex one

How does a language start?

In our case, we basically talked a lot for a few months. I think not everyone is like that, but I think the best when I'm talking to people.

This was the ideal environment because we were basically **discussing things with the Macs constantly for many months**. There were a few internal presentations that I made at JetBrains and some of the slides survived.

I can see, including my spelling mistakes in the slides — my English wasn't as good then — and you can see some of the evolution through those slides. I think there's a recording of one of those presentations.

So we were basically doing **whiteboard design for some time.**
And the great thing about doing this at **JetBrains** was that there were a lot of people with opinions about not so much how to make a language, but **what problems do programmers face and what they like and don't like in other languages**. So I had tons and tons of input from other people and very good people. So that helped. And I really, I don't think I realized how special that environment was back then. Like I was 26, to be clear. And I had no idea how things were done in general. But somehow these people just trusted me. I'm not sure it was very rational on their part. It worked out. But I'm not sure I would recommend anyone to do this.

And so in the first few months, I understand that you kind of **whiteboarded and wrote down how you want this language to evolve**. You kind of, you know, like wrote out like,

> "We're going to have these features. Or how can we imagine?"

So I guess the easiest way to explain this would be like this. It basically went off what the pains were with **Java**. And there were quite a few. And there was a lot of experience of using Java across the community and inside JetBrains. And we kept making lists of things we wanted to fix.

I came up with some ideas and some other people suggested other ideas about how things can be fixed, what is an actual problem, and what we don't care about, and so on and so forth. For some time, I was just, you know, pieces of the puzzle basically laid out on a table without fitting together. And then at some point, we started fitting them together. I was just doing a lot of that in my head, which is not the best way. But this is how I knew how to do it.

There were also some crazy ideas that we thought were important back then. For example, I wanted to implement **multiple inheritance, fully-fledged multiple inheritance**, which was a dumb idea. And multiple inheritance meaning that a class can inherit from like several classes, and you have to take care of like conflict resolution and all sorts of edge cases. Right? Yeah.

The actual challenge is not so much conflict resolution in terms of methods, but **initialization of state. Constructors are really hard**. And it was actually someone outside of Gibbons who explained to me that was a very bad idea. And I'm very grateful to them. Yeah. So, you know, there were crazy ideas as well. And some of them just fall off over time as we were discussing or prototyping.

I think I started writing code maybe six months in or something like that. Maybe a little earlier than that. I started with a **parser**. And it was actually a very unique way to start a language because the idea was to start not with a compiler, but with an **IDE plugin**. I have it in the editor first, which is, you know, an IDE plugin shares a lot with the front end of the compiler, so it's not absolutely crazy. But I was just relying a lot on the infrastructure that was available in **IntelliJ IDEA**.

All the parsing infrastructure, and it was awesome. Like, the parsing infrastructure in IntelliJ IDEA is better than anything else in the world because it's the heart of the IDE. It has to be incredibly fast and very robust and so on and so forth. But then later, someone who knew the infrastructure a lot better than I do had to factor that bit out to make the **Kotlin compiler autonomous**. And it was **Dmitry Zemirov** who did that. And he's an awesome engineer. Like, he's probably one of the best people to refactor a large code base and, like, take this one bit out of something that was already 10 plus years old back then.

So we started with this IDE plugin. I think **Max** wrote the scaffolds and I actually plugged in the parser and everything. And that was an interesting start because it was very interactive. So I could show off the language as if it existed because it had some tooling. But I couldn't compile anything in the very beginning. And that was actually a very good way to experiment with the syntax.

But then soon after, I started working on a **full-fledged front-end** and on some translation. And **Dmitry** and **Alex Kachman** were working on the back-end. Everybody was part-time.

When you say you work on front-end, and they work on back-end, in a language context, what does that mean?

It's slightly different in different languages.

Basically, the **front-end** is what deals with the:

- syntax
- checking
- understanding what the program means

And the **back-end** is what translates to the executable code.

In our case:

```markdown
Front-end:
- reading the text
- parsing
- doing types
- all that

Back-end:
- generates Java bytecode
```

And **Kotlin** has multiple back-ends for different target languages:

- Java back-end
- native back-end for iOS and other native platforms
- JavaScript back-end
- WASM back-end

At that time, nobody was full-time working on this project.
Even I was part-time, a **PhD student**, part-time **Kotlin developer**. And it was the very early days.

Then, at some point, I gave up my PhD and focused 100%. Which was also, like, isn't it a weird decision to start a new language part-time? Yeah. Looking back, I was young and stupid.

There's a saying that **we didn't do it because it was easy. We did it because we thought it was easy.** Absolutely that. I didn't realize how hard the problem was. I also had an unreasonable amount of hubris. I just thought I knew how to do everything. I didn't. But it worked out in the end.

---

So, when the language started, what did you call it internally? There's always internal code names, right? Right, yeah.

So, I don't think there was a discussion of this first name at all. It was generally understood that the language will be named **Jet**. And it was logical. We had all the code base using the name Jet. We had:

- JetParser
- JetEditor
- JetHighlighter, something like that.

Then someone realized that the name was trademarked by someone else. It was actually people we know there in **Novosibirsk in Russia** doing something. It's not a language, but it was a compiler, and we couldn't use it.

This is when we started looking for another name. It was very painful — looking for names. Guys, this is so bad. It's one of the worst things because you never know what name will work unless you want to do an extensive study.

And then all the good names are taken, of course. Then some of the names that are not taken are not taken because they're not really **Google-able**.

Some people are just very brave. People who named their language **Go**. This is why people now call it **Golang** because otherwise you can't identify it. It's a verb in English, a very common word.

Yeah, so we had weird options. In one of my old presentations, I found a list of early names:

- Robusta (a flavor of coffee)
- Up
- G
- Something else like that

And those weren't great.

---

By that time, other languages were popping up. One of the alternative languages was called **Ceylon**. The logic was: Java was the island of coffee. And Ceylon was an island of tea.

**Dmitry Jemerov** basically looked out of the window and said,

> "OK, we have an island here in St. Petersburg. In the Gulf of Finland, there's a big island called Kotlin."

And it's a good name in the sense that it's very Google-able. Nobody uses it for anything. It's very recognizable. It's not super smooth for many languages, but it's kind of OK.

Nobody was in love with that name and we were kind of hesitant.

You know, "Kot" means a bad thing in German. Also, there is like some negative connotation in Mandarin, I was told, or something like that. You know, it's always some language has some nasty association with any word.

We basically were super hesitant. So when we announced, and we had this deadline, that we were basically putting this off, when we announced, we were still not sure.

So we called it, we decided it would be a **code name**. We called it **Project Kotlin** to have wiggle room to later replace the name — but it stuck.

---

The first thing we did was put out basically a **Confluence page** with a description of the language. It was just a bunch of wiki pages and there was no compiler available then, I think.

There, the word Kotlin appeared many, many times. I was like,

> "My God, this thing doesn't, like, I can't do search and replace and then change the name everywhere."

So the workaround that I came up with was to create an empty page called **Kotlin**. And so it had a name. And then everywhere else, you mention it as a page. When you rename a page, it gets renamed everywhere.

This is why there was an empty page called Kotlin in that documentation. But yeah, the name stuck and it turns out to be not a bad name.

---

So, when it started, what were the main differences with Kotlin compared to Java? Because Java was, what was the big one? How did you explain to developers who initially started onboard or wanted to give it a go?

Yeah, I guess there were a few major selling points. Then there were other things on top of that. When we started, like in the very beginning, we didn't have **null safety** in mind. Null safety came a little later.

After one of the internal presentations, it was **Max Shafirov** who invited **Roman Elizarov**, who later was the project lead for Kotlin. Roman came and listened to the presentation, gave some feedback, and said something like,

> "Guys, if you want to do something really big for enterprise developers, figure out null safety."

And we did. It took a while.

So in the very beginning, it was the general idea of what makes **Java feel so outdated**. There were a bunch of things. Lambdas were very big.
The general, like, the general feeling from **Java** back then was it was very verbose. It was called the **ceremony language**. A lot of people were grumpy about too many keywords, like **public static void main** is something everybody was really grumpy about.

But also, there were getters and setters for every property. There were constructors and overloads and all that stuff that looks like boilerplate because it is. Yeah. It's super annoying to type out.

The problem with **boilerplate** is, on the one hand, it's annoying to type out. But tools can generate it for you and fold it and so on and so forth. But the bigger problem is always **readability**. So reading is more important. Reading code is more important than writing code. We do a lot more of that.

And with boilerplate, it's terrible because if some tiny thing is different in the middle of completely standard boilerplate code, you'll miss it. You'll become blind to it and you can debug for days not seeing that. So, you know, that was the point of sort of modernizing Java, making Java programs be more about what they do and less about the ceremony of making the compiler happy, basically.

And, you know, **type inference** was also a big thing because Java was repeating types a lot and many other things like that were, like, semicolons. The modern languages of the time already got rid of semicolons. And so in **Kotlin** you also got rid of it?

> Yeah. So we got rid, basically, in terms of syntax, we got rid of semicolons and duplicated types. And that was a lot of noise across the code.

**What does it mean that Java had duplicated types?**

> So in that version of Java, when you declare, say, a local variable, you say it's a list of string called strings equals new array list of string.

> Oh, yes. I remember this one.

> Yes, yes. You need to type it out twice. And if you get one of them wrong, compiler, et cetera.

Right. So, and at best, you could omit the second mention of string by using a **diamond operator**, but that only came later, you know. Basically, it was very verbose, especially if your types are long.

- Like, if it's just a **list of string**, it's sort of not so bad,
- But if it's a **map from something to a list of string**, for example, that's already really long and you don't want to read that.

So, and a bunch of things like that were really annoying to a lot of people, especially compared to **C#** or **Scala**.

So, we did all of that. And then, on top of that, there were other value-add features and **null safety** was a big thing that we spent multiple years actually on implementing. And I think it's one of the main differentiating factors now for Kotlin alongside of with extensions and other things. But null safety is one of the core features.

**And can we just spell out why null safety is so big?**

> I mean, I just today I came across a bug on the, I couldn't send a package because in JavaScript on the Dutch post website, there's a null issue happening in production.

But, you know, before Kotlin and a lot of languages, why is it such a big problem?

> It is.

Yeah. So, dealing with **null references** is a big hassle in most languages. And I think it was **Tony Hoare** who called it the "**billion-dollar mistake**" at some point because, like, introducing, I think it was about introducing null pointers to C or something.

So, basically, when we look at all the runtime errors that we have in Java code, I think **null pointer exceptions** will be at the top. So, you know, the **type system** of the language is supposed to protect you from those unexpected errors.

So, there are errors you're designed for and maybe errors that are not even your fault, like a file system error or something like that. But there are also errors that should be prevented by the compiler. So, for example, **class cast exception** or **missing method error** are things that the compiler is trying to protect you for. It's trying to make sure that this never happens in your program unless you switch off the check by making an enforced cast or something.

And with nulls, it's not a thing in Java. Like, anything can be null, and if it's null, it will just fail. Yeah. It throws an exception and the program dies. So, it's a very common thing.

So, a lot of people are kind of used to it, and there are different ways of being disciplined about it and so on and so forth. But, basically, this is a plague across any code. You know, there are different approaches to this.

And in Kotlin, we took the approach of:

```markdown
- A: enforcing it in the type system,
- but also making it free at runtime.
```

**What does that mean, that you made it free?**

> So, one very common way of dealing with nulls is to use something like an option type, where you have a box, which might be empty, or might have an object in it.

No. And that box is not free. Like, you have to allocate it, you have to carry it around everywhere.
And, **this easily creates a lot of objects in the old generation for the garbage collector**, so it can be challenging. What we did was just have a **direct reference at runtime**; our nullable or not null reference is the same as Java's reference.

All we do is **compile-time checking and some runtime checking when we cross the boundary**. But that's a lot cheaper than allocating objects. Although the runtime is getting better, and they can optimize some of those objects away, it's still an overhead.

---

**What are features that you took in from Kotlin that were inspired by other languages that you admired?**

A lot of them. I have an entire talk about this. It's called **Shoulders of Giants**. We really learned from lots and lots of languages. And it was always the point. Andre just mentioned how Kotlin was built on top of the shoulders of giants, **taking good ideas that existed, not reinventing them**. This was one of the reasons Kotlin succeeded as much as it did.

But jumping forward from 2010 to 2026, one thing that is totally different today is the **speed of things**. AI is allowing nimble teams to build faster than ever before. Companies that used to take years to move into the enterprise are doing it in months.

This speed creates a new problem:

- Enterprise requirements
- Authentication
- Security
- Access controls

These show up almost immediately. This is where **WorkOS, our seasoned sponsor, comes in**.

WorkOS is the infrastructure layer that helps AI companies handle that complexity without slowing down.

Features include:

```markdown
- SSO for enterprise buyers
- MCP offer agenda workflows
- Protection against free trial abuse with Radar
```

Teams like **OpenAI, Cursor, Perplexity, and Vercel** rely on WorkOS to power identity and security as they scale. If you're building AI software and want to move fast and meet enterprise expectations, check out **WorkOS.com**.

---

With this, let's get back to Andre and how Kotlin was standing on the shoulders of giants.

So the slogan for Kotlin was **"pragmatic language for industry."** The pragmatic bit, which is a nice rhyme with your podcast, was kind of coming from the experience with **Scala being called an academic language**. A lot of people had trouble getting their heads around many of the very smart tricks in the design.

And so our idea was:

> "We're not doing academic research here. We're not trying to invent anything. If we don't get to invent anything, it's a good thing, not a bad thing."

From the engineering perspective, it's generally a good idea to do this. Usually, you end up making something new, but most of what you're doing shouldn't be very new because you want familiarity. You want people to easily grasp what you're doing. This has to be familiar from other languages.

Also, if you're building on top of the ideas of other languages, you benefit from them having tried it already. You can look at their designs, their community's reactions, and the implications all over the place. That gives you a huge benefit.

So we did a lot of that.

---

I think the language that influenced Kotlin the most is, of course, **Java**. Because the entire runtime of Kotlin is the JVM, and we depend on that.

Apart from that, **Scala had a huge influence**. We used many ideas from Scala, including:

- Primary constructors
- Data classes
- `val`s and `var`s
- Interesting tricks about how generics work, for example, variance declarations — a great idea of Martin Odersky.

It's a huge pity that this didn't make it into Java design. It was flipped at the very end of the design process to what Java has now. The Martin Odersky idea was much better.

We had to fix this problem on the Java boundary and figure that out.

There were many ideas we took from Scala, and that was very helpful. We usually transformed those ideas a little bit to adapt to our setting and to build on the knowledge of how it actually works in practice. We left some things out. We simplified some things.

For example, Scala had **traits**. Traits are a very powerful construct, like an interface where:

- You can have method implementations
- Also, in Scala traits, you could have fields or properties

What you couldn't have were constructor arguments. You always have a default constructor and can initialize all your fields.

It's not as bad as multiple inheritance in C++, but it's still a little complicated when it comes to the order of calling constructors. We decided we don't want to deal with that. It's a complex algorithm and hard to explain. Let's just get rid of the state in interfaces and only have method bodies.
And I think it was a **good compromise**. Especially given that **Java ended up in the same place**. It was easier to integrate.

Yeah, so **Scala was a big influence**. **C Sharp was a very big influence**. Extensions, of course. And we learned quite a lot from how **C Sharp compilers** do things.

There, there was also one particular trick that makes **Kotlin syntax a lot nicer, nicer than Java's and nicer than Scala's**, that we'll learn from **C Sharp**. And it was actually my colleague who worked on the **C Sharp IDE** who told me about this, which is basically a **super pragmatic thing** they do in C Sharp.

There is like, when you call generic functions, you use **angle brackets inside an expression**. But the thing is that there is no such thing as angle brackets. There is less and greater. Right? And the parser can easily get confused and think that this expression, since we're not in a type context, it's an expression context. This expression is a comparison. It's not an inequality, right? It's not a call. And this is **mathematically unresolvable**. It's an ambiguous grammar.

Yeah, look, you can do anything about it. And the way other languages handle this is:

- **Java**, for example, when you're passing type arguments to a call, it has to be after a dot. So you say `collections.<Type>functionName()`.
  Really awkward. Which is kind of weird.
- And the way **Scala** deals with that, they use **square brackets for types**. And then arrays can't use square brackets, so they use round brackets. Which is unfamiliar, like, it's not the end of the world. Scala is doing fine, but still.
- And **C Sharp** uses **angle brackets** because there's a **hack in the parser** that basically disambiguates ad hoc.

And we did the same or something very similar, and it just works. And the syntax is very familiar and very intuitive, and we're very happy about that.

Yeah, because when you read it, as a person, I never get confused. Like, this is not a smaller sign. Like, I know it's a generic. Yeah. Yeah.

Okay. Wow. Most of the time, it's not a practical problem. And there is a way to disambiguate, if you like. So **C Sharp was a big influence**.

**Groovy was a big influence as well**. JetBrains used Groovy for build scripts. And there were incredibly useful patterns in the Groovy syntax that they call **builders**, which is not about building programs, but, you know, building objects.

And this is what inspired something fairly novel that we did in Kotlin, which was **typed builders**, where we had the same syntactic flexibility, or almost the same syntactic flexibility, as Groovy, but it was all typed. And we could make sure that all the arguments matched and so on and so forth.

So all that side basically was inspired by how Groovy people did this and reworked into a typed setting. And this is why we have, for example, **extension function types**. And this is why we have **dangling lambdas** and other things that are actually very nice syntactic constructs.

So, yeah, many, many things came from different languages.

A less known language called **Gosu**, I think it was what inspired us to do **smart casts**.

What are smart casts? Oh, yeah. So, I think smart casts are **one of the nicest things a compiler can do to a developer**. Because it's a very common situation when you say:

> If x is a string (so you do an instanceof check), then do something with x.

The annoying thing is that in a lot of languages, you have to **cast x to string again**. Like, you've done the check. After you've done the if, you know it's a string, but then you need to write it out again.

Yeah, so you've just done the check, but you have to say string again to make the compiler happy.

So, **smart casts basically get rid of that**. So, that cast gets figured out automatically. So, if that's a string and then inside the bracket, you can now use it because it's a string. Yeah, you can use it as a string.

And isn't it an easy thing, right? So nice. Yeah, it's a very nice thing.

Yeah, it's a pretty complicated algorithm. Because, you know, variables can change values and the check that you've just made can go stale. And, you know, there's a bunch of algorithmic trickery around this.

And you can't do a smart cast on any expression. It has to be a certain type of expression that can be stable enough and so on and so forth. But, you know, it's a very nice thing. And you can get rid of so much noise in the code because, like, all the code in the world is riddled with this instanceof cast. instanceof cast.

So, we wanted to get rid of that. And it worked. And it was fun to implement.

What were things that you looked at other languages, you considered, maybe we should bring it in. But you, after debate, you're like:

> "No, let's just leave this out."

Like, not all of them, obviously, but some of the big ones that kind of came close.
We had a design for **pattern matching** in **Kotlin** that was inspired by functional languages like **Scala** and **Haskell** and others. But at some point, early on when I was still working on the parser, I just realized that this is a **huge feature**.

So, when I was sketching it out on a piece of paper, it looked like a very useful thing, just another feature in the language. But then when I started working on the parser, I realized it's an **entire language in size**. Like, you have to create a parallel universe in syntax for pattern matching. And I was like, okay, this will be a lot of work. Let's postpone it.

Later on, when we were doing review for **1.0** or maybe a little earlier than that, I just realized that **smart casts** plus we have something called **destructuring** together give us like **80%** of all the good things pattern matching can do to normal developers. Then there is another group of developers that can be very vocal, mostly **compiler developers** and people super into **functional programming**. They have a point, but that point is only relevant to them, and there are not very many, so we decided to not have pattern matching back then.

And, you know, maybe there comes a day that **pattern matching** gets added to **Kotlin**. And pattern matching is, is it in the case? Yeah, it's the... So you can have, like, a lot nicer case statements, a lot more expressive ones, right? Yeah.

Generally, Kotlin has this compromise where you have our version of **switch case**, which is called **when**, and you can have **smart casts** there. So you can say:

- when my expression is a **string**, then use it as a string,
- or it is a **pair**, and then you can use it as a pair.

That kind of gives you a lot of the niceties of pattern matching, but some things you can't express like that. And that was, I think, a **good compromise** because it's a really big feature. It's hard to design well. There would be a lot of work on the tooling side. But maybe it gets in the roadmap one day. I'm not sure.

**Java** is trying to get towards pattern matching, so we'll see. Maybe they kind of make it more mainstream.

---

Why did you omit the infamous **ternary operator**, which is when you write out something with the question mark and the colon, and it confuses new developers every single time if you've not seen it before? Yeah. Was it for readable reasons?

This is the **saddest story** I think in the design of Kotlin. I didn't realize how much people liked it. The reason was, Kotlin used this principle from functional languages that **everything we can make an expression is an expression**. So **if** is not a statement, and the ternary operator is sort of a patch on the design of C and other C-like languages that makes an if expression, basically.

The logic was:

```
okay, we have if as an expression already,
can we just get rid of this extra syntax construct,
especially given that it's using very precious characters?
```

Like, there is a question mark and a colon, and we might find some other use for that. So we decided to not have it. We used question marks for **nullable things** and the colons for **types** and so on.

But it turned out that **if as an expression** is pretty verbose; people don't like it. I resisted for some time, and then by the time I agreed, it was too late because you can't retrofit the ternary operator into the current syntax in Kotlin—it just doesn't agree with how other operators have been designed.

So you're actually sad about it not being there a little bit? Yeah, I think in retrospect, it was a mistake because pragmatically, it's more use than harm to have it. But we just can't retrofit it.

---

What are some other interesting features that you like about the language that you added that we could explain for those who are not familiar?

Okay, so the good ones, there's quite a lot of them. One feature that is not a traditional kind of language feature is **Java interoperability**. That's probably the single thing we spent the most time on. And I always say that if someone offers you a job to create a system that interoperates transparently with another huge system you don't control, **ask for a lot of money**. It's a very tricky deal to figure this out.

Interoperability means that from Kotlin, you can invoke **Java**, and from Java, you can invoke **Kotlin**. You do a bunch of work there, but it just works in the end as a developer. You don't need to think about it.

The idea is whenever you have a Java library somewhere in the world, you can always use it from Kotlin. It was a big selling point because if you start as just a language in a vacuum and you don't have any libraries, that's not a good start.

In this direction, definitely, it was an **absolute requirement** for Kotlin. But also, we had the requirement to go the other direction.
In an existing project, you could just rewrite parts of your code from **Java to Kotlin**, and everything keeps working. And some libraries actually did that. Many projects started using **Kotlin bit by bit**.

A lot of people started with just writing tests. But then, you start adding things in **Kotlin**, new things, for example. And all the **Java code** around that has to transparently use the Kotlin code. So we put a lot of effort into that. And that was fun.

Can you explain to us as engineers, like, it sounds like it was a **friggin' big project**. What is the work, right? Because from the outside, again, I'm just being your average developer, where I'm invoking a **Java class**.

And things I can think of are:

- Maybe Kotlin or Java doesn't support things in a certain way.
- Maybe it's not that hard.

What is hard? Tell me, tell me. I'm dying to know.

So one thing to note here is that we **don't control the Java compiler**. We somehow need to make it work so that in your Java code, you make a call into something that only exists in the **Kotlin source**. And the Java compiler somehow agrees to call it to begin with. It's not a Java file. It doesn't know it exists.

So the way it actually works is: when we build a mixed project, what we do is we first **compile all the Kotlin code**. That can depend on the **Java sources** in the project. So we have a Java frontend baked into the Kotlin compiler so we can resolve everything in the Java code. Then we produce **class files**, binaries for the JVM that the Java compiler can read. So when Java compiles, it takes Kotlin sources as binaries. And this is how it works.

We would have to implement a Java compiler otherwise. Fortunately, **Java has separate compilation**, so this works.

This trick means that whenever you have tooling, like in your IDE, for example, when you navigate from Java sources to Kotlin sources, it has to be a **special trick**. Someone needs to go and teach the **Java world** to know about the **Kotlin world**.

Of course, the IDE doesn't do the compilation to navigate. But at compilation time, we don't control the compiler. So we did our own IDE. This way, we could do something about the **Java tooling**, but we couldn't do anything about the **Java compiler**. So that's trick number one.

Then, when it comes to **incremental compilation**, it becomes even funnier because Java incremental compilation is a complex algorithm on its own. Now we are incrementally compiling **two languages at once**. And that's fun.

Incremental compilation algorithms are generally a very messy, very complicated heuristic with tons of corner cases. So, that's like one example.

But then you start making interesting new things in **Kotlin**. You need to expose them to **Java**. You need to make sure that whatever fancy thing you have, Java can actually interoperate with that.

One example would be Kotlin's approach to making **Java collections nicer in Kotlin without rewriting the collections using the same library**. Java collections are what's called **invariant** because they're all read-write. So if you have a list, it always has a set method.

That's a little bit of a problem because whenever you have a list of objects, you cannot assign a list of strings to that. That's annoying because you want to be able to represent a list of anything, and for that, you need to play with question marks, wildcards, and stuff like that.

It would be very nice if we had a **read-only list interface that doesn't have a set method**. Then there is no problem in assigning a list of subclasses to a list of superclasses. But this interface doesn't exist at runtime, right? We can't just invent it. Or can we?

So we actually can. No.

In the Kotlin compiler, we have this layer of trickery specifically for **Java collections** where Kotlin always sees Java collections. If they come from the Java world, they are **read-write, mutable collections**, we call them. But mutable, right? Yeah.

So the **Java collections** are always mutable or platform mutable. I'll talk about that later. But when you do it in Kotlin, you can actually distinguish between **read-only** and **mutable collections**, and it's all very nice on the Kotlin side.

But then when Java sees the Kotlin collections, they are normal again. When we expose them through binaries, the Java world always sees them as normal collections; they're mutable for Java, and it's all right.

Okay, I'm starting to see why you said you need a lot of money for this because this is just one of many things. But this itself sounds like, I don't know how you solve that.

Yeah, so just to add a little bit of detail to this.
So the nice thing about those **read-only collections** is that you can pass a list of string for a list of object, right?

Wouldn't it be nice if a **Kotlin method** that takes a list of any could accept a list of string in Java? But aren't we erasing all the Kotlin nice stuff? We are, but we know that this list is actually what's called **covariant**. So we can expose it to Java as a list of **question mark extends** and not just list of objects. So, you know, it becomes covariant for the Java world as well. And that's like one hack that makes it a little more transparent.

And there's a bunch of that. So, you know, so that's another thing that we had to play with. But the biggest thing is, of course, **nullable types**. And actually, we handle nullable types and these things with collections kind of similarly, which makes the whole typing layer of the interop quite interesting.

But basically, so **Java doesn't know anything about nulls**, right? Well, it knows about nulls, but not about **nullable types**. It does not exist. Yeah, Java doesn't know about nulls at compile time. So in terms of types, it's just not represented. So technically, every Java type is a nullable type.

And this is where we started. We said, okay, so Kotlin types can be **not null** and it's very convenient. And when you have a not null type, you can just call a method on it normally, right? But if something is nullable, you can't just dereference it. You have to first check for null and then use it, right? Or if there is a **safe call operator**, well, just propagate null is on the left-hand side.

So we started with saying,

> "Okay, all Java types are nullable, which is a conservative, like very mathematical way of treating it."

This is correct, right? Yeah, you're not going to be wrong with that. Yeah. And we implemented that and we started using it inside JetBrains. And the feedback was horrible. Like your code is plagued with those null checks and you know that they shouldn't be there because you can't express anything on the Java side the right way.

And there were like, we had some **annotations** for the Java side. It was also brittle and not always worked because, you know, there can be long chains and stuff. And some libraries just don't have the annotations. And we struggled with that for a long time.

And basically we realized that this assumption that everything in Java has to be treated as nullable just doesn't work. This was a turning point where we sat down and reimagined the whole thing.

And we worked with a great **type theory** type practice, I would say, guy from, I think it was back then he was in **Cornell**, **Ross Tate**. So Ross helped me figure out the sort of mathematical side of how you can represent those types that come from Java and should be, like we should be aware of that they are from Java and can possibly be nullable.

But we shouldn't treat them as nullable because it was very inconvenient. And Ross put together a very nice sort of **calculus** about those.

And when we started implementing it, all the nice things are gone. The mathematical beauty is completely gone from all that. And I think we took the general idea of sort of splitting a type in two and everything else is just very messy industrial kind of thing. That's not sound, but it works well.

Okay. And interoperatively sounds like it was a journey, but a necessary one.

How long did it take? Can you give me just a sense of like how many people working on it? How much, because I think in traditional projects we can get a sense, but I have no idea with the language. How does this work? And how long did you think it would take versus how much it took?

Yeah. So let's start with that.

- Every time I was asked when we were going to release **Kotlin**, I would say **one year from now**.
- And, you know, this is, this is not a plan. I had no idea. I had no idea.
- I also had the illusion that the initial version I was building was a **prototype** and we would write everything.
- And I'm sure a lot of people out there have been there.
- I think that prototype has been written more or less completely now, but it took six years, something like that. Yeah. So maybe longer, actually.

Yeah. So, so I had no idea. And I always said like, okay, a year from now feels far enough. We'll probably be done by then.

In practice, we started in **2010**, yeah, autumn of 2010, basically. And we released in **February 2016**. So, you know, it was a long time, five-ish years. And that, you know, in part was just because I didn't know how to manage projects.

And my initial team, the people who worked full-time on the project, I looked up on **GitHub** to verify that. Everybody who, almost everybody, who joined JetBrains to work on **Kotlin** was a **fresh graduate**. Because I used to teach and I had some good students and I knew how to work with students.
And so basically **everybody on the team was a student**, apart from a few veterans from **JetBrains** who were helping, not all of them even full-time.

So we started getting experienced engineers on the team a bit later. And, you know, to be fair, a lot of those people, people who are following **Kotlin** know those names. People who are **core contributors**, who built out, like, absolutely foundational parts of Kotlin, joined as fresh graduates. And they became great engineers.

But I think I overdid it a little bit. So it's great to have, you know, younger people have no fear. And that's wonderful. But, you know, the balance was not right.

**And how big was the team initially and then towards the release?**

So we started out basically with **four people part-time**. And, yeah, we went like that for maybe a year or something. So the initial prototype was built like that. And then people started joining in. By the time we released, I think it was around **25 people** or something.

And the team grew quite a bit. So by the time I left in 2020, it was about **100 people on the team, 70 of them engineers**. So it became a pretty big undertaking.

**Can you tell us about the development process inside language?**

I think a lot of us are used to building, you know, like services, backend services or products or mobile apps, etc. They typically have a release process. How does this work inside a language? Like, what is your release process and what is the, I guess, best practices?

Like, do you even do code reviews or, you know, like how can we imagine? Because, again, it feels such a rare project. There are people building languages, but not many of them.

Yeah, so one peculiar thing about building languages is what's called **bootstrapping** when you write your compiler in your language.

> Oh, nice.

Which means that, you know, to compile your code, you need a previous version of your compiler. And you better agree with your colleagues which version it is. It can be really tricky, especially when you do things about the binary format. And there is, like, quite a lot of **bootstrapping magic** going on.

And I don't think you can reproduce the **Kotlin builds from scratch**. Because, you know, if you just take a snapshot of the Kotlin repo, you can only build that with a Kotlin compiler. And I don't think we kept all the bootstrapped versions. So it might not be really possible without a lot of manual intervention to rebuild all the sources from the very beginning and reproduce all the versions.

Because sometimes, you know, we had to, like, commit a hack into a branch and use that branch as a **bootstrap compiler** for the next build and then throw the branch away. So that was, like, a one-off compiler used to facilitate some change in the binary format or syntax or something. So that's a separate kind of fun.

But generally, I mean, many practices are very similar. Like, we had **code reviews pretty early on**. It's my personal quirk, again, that I like to talk to people. So in code reviews, I often just sat together with someone and either they reviewed my code or I reviewed theirs. But this is, you know, I can't argue that it's much better or worse. It's just how I prefer it because I like talking to people.

So code reviews, yes. And, of course, we had an **issue tracker like everybody else**. Ours was always open. So everybody can submit bugs to the Kotlin bug tracker, which was very helpful. It's hard to manage because there will be, like, with usage, there will be a lot of bugs and a lot of feature requests and all kinds of stuff. But it's worth it. You have a communication channel.

Release cadence is a very difficult thing to figure out for such projects. Because one big consideration you have for languages is **backwards compatibility**.

In part, this is what delayed 1.0 because we wanted to be reasonably sure we can maintain compatibility as soon as we call it 1.0. In part, because it was the expectation, especially Java is incredibly stable and very good with that until **Java 9** came about. And also, **Scala had a lot of trouble because they were breaking compatibility a lot**. And the community was struggling, really. So we really didn't want to repeat that.

But, you know, it turns out you can even break compatibility **Python 2 to Python 3 and survive**.

> Barely. Barely survive.

They're doing very well. Now they're doing well, yes.

Yeah.

So we were really serious about that. But basically what it means is you start doing interesting things like **deprecation cycles**. So we actually invented an entire tool set for compatibility management.

So before 1.0, we tried to help people migrate. So we had those **milestone builds**. Embarrassingly, we had **13 of those**.

And, you know, when we broke the language in major ways, we tried to provide **tools for automatic migration**.

> That's nice of you.

Which was, I don't think, a standard practice in the industry back then.
Now people are doing it more. So I'm **very happy to have sort of popularized this idea**. And then when we were preparing for **1.0**, we did a major review of everything and took a year to sort of review all the design.

What we're doing is basically trying to anticipate what changes we might want to make or what new features will require. And to basically prohibit things that might block that. So we tried to make sure that the changes we were planning were guarded well by **compiler errors** to make sure that users don't accidentally write anything that looks like a new feature. And that was fine.

We had design meetings, I think, every day at some point—basically working on that, like, **"okay, let's outlaw this. Let's prohibit that."** And we prohibited a lot of stuff correctly and some stuff incorrectly. But, you know, generally worked out. So this compatibility thing was a big deal.

But there's also a lot of stuff that we didn't anticipate. So we had to figure out ways to manage this. And there is something in **Kotlin compiler called "message from the future,"** which is basically when in a newer version of a compiler, you introduce something that the old compiler doesn't understand.

We have different options. And one option a lot of languages go for is:

- The new kind of binary is completely unreadable for the old compiler.
- So the version is higher.
- I don't read it.
- That's it. I bail.

But it's a little hard for people then to manage their versions because new libraries, new versions of libraries come with new compiler expectations and you have to migrate your entire project to do that. It's a little annoying. And if what you're adding is like one method that basically invalidates the whole library for an old compiler, that's not great.

So what we're doing is a newer compiler can write something into the binary that tells the old compiler, **"okay, this method is what you can't understand, but everything else is fine."**

> Wow, that's smart.
> Yeah.

So we call this a **message from the future** and like it can provide some details. So there's that.

And there's also the discipline of **experimental features**, which is incredibly helpful. And I am very happy to see other languages doing it now. And even Java does experimental features now, which is wonderful.

**Andrei just talked about experimental features in programming languages** and how that used to be rare back in the 2010s. What this reminded me is that running experiments in production used to also be rare. Not because teams did not want to do it, but because doing it meant building a lot of internal tooling around it:

```
Assignment, rollouts, measurements, dashboard, debugging, the whole thing.
```

For a long time, only a handful of companies really pulled this off at scale. Companies like **Meta** and **Uber**.

Which brings me to **Statsig**.

Statsig is our presenting partner for the season. Statsig gives engineering teams the tooling for **experimentation and feature flagging** that used to require years of internal work to build.

Here's what it looks like in practice:

- You ship a change behind a feature gate and roll it out gradually, say to 1% or 10% of users at first.
- You watch what happens. Not just did it crash, but what did it do to the metrics you care about?
  - Conversion
  - Retention
  - Error rates
  - Latency.
- If something looks off, you turn it off quickly.
- If it's trending the right way, you keep rolling it forward.

And the key is that the measurement is part of the workflow. You're not switching between three different tools and trying to match up segments and dashboards after the fact. Feature flags, experiments, and analytics are in one place, using the same underlying user assignments and data.

This is why teams and companies like **Notion, Brex, and Atlassian** use Statsig. Statsig has a generous free tier to get started, and pro pricing for teams starts at $150 per month.

To learn more and get a 30-day enterprise trial, go to **Statsig.com/pragmatic**.

And with this, let's get back to Andre and experimental features in Kotlin.

So we did quite a lot of work when you're doing something experimental. This is something that's supposed to break, and you want to emphasize this to make sure that the user is aware that:

> "this is something we are not promising to keep compatible. This is something we're going to break."

We used to put the word **experimental** in package names for people to understand that this is going to be renamed. And warnings when you use language features, and we require compiler keys to enable language features and stuff like that. It kind of helps. So we did quite a lot of that.

All this is an extra layer. And unlike a SaaS system, for example, a compiler leaves behind, but not behind, creates a lot of artifacts that pin down its history in the world.
There is **source out there** and there are **binaries out there**, and you're guaranteed to encounter them every time anyone hopes that

> "this is an obscure case. Nobody will ever hit that."

With enough users, you hit every freaking case. And this is so surprising.

I discovered this fairly early on. I think before 1.0, when we had a few thousand users, I realized that

> "if something's possible, some person out there will actually do it."

So you got 1.0 out. Can you tell me how **Kotlin grew in popularity**? When you released it, what was your target audience? And then how did **Android happen**?

Okay, so that's a complicated story. Let's try to not get off track, because this has a lot of sidetracks to it.

When we started **Kotlin**, we were not really very aware of **Android**. And I mean, we knew that that was a thing called Android.

Kind of ironic.

Yeah.

From now, message from the future.

Right.

Yeah.

So basically in **2010**, we were focused on the majority of **Java developers** that was all about the **server side**.

- The majority of Java developers were server side.

Clear.

Yeah.

So the most money IntelliJ was making was on **Spring users**. And, you know, everybody knew that this was what the Java platform was about by then. So we were targeting **server side developers**, basically.

And also **desktop developers**, because **JetBrains** had the, probably the last desktop application written in Java, or at least in **Swing**.

So that was the target. It was initially not even a plan to do Android.

Kotlin got some usage for the server side. And, you know, it's still there and it's growing there, not as fast as on Android, but still has quite some representation on the server side.

But then a few years in, some person on the Internet asked us whether Kotlin works on Android. And I was like, I heard Android uses Java, so Kotlin should work. We'll never try. Go and try.

I think it was either the same user or a different user who came back and said

> "the toolchain crashes."

And it wasn't even Kotlin toolchain. It was the Android toolchain that crashed. And, you know, we looked into it and it turns out that some tool in the Android toolchain that's written in C just fails with a core dump. And it's not very clear what's going on.

We later figured it out. It turned out that the **Android developers** and the people who built the Android platform actually read the **spec of the JVM**, unlike the people who implemented the **Hotspot VM**. Because the Hotspot VM, I suspect, came before the spec. So it was the reference implementation, but it was actually specified after it was built.

The Hotspot VM was super lenient to weird things. Like, there would be, if we put a flag on a class file that was not allowed for classes, Hotspot wouldn't care. And we ran everything on Hotspot. So we thought everything was fine.

But then on the Android side, those were the people who actually read the spec and implemented it. Yeah, they would complain about everything.

This is why we used the **Android toolchain** as a testing environment basically, because

> "this is how we could get rid of stupid things in our bytecode."

They helped us a lot with validating everything. But, you know, there were some gotchas there. Some legacy stuff nobody cares about in mainstream Java just were faithfully implemented on the Android platform.

That was fun.

So, you know, at some point, pretty early on, I had this realization that Android was a growing platform. Which, to me then, I didn't have much understanding of the dynamics of markets, but it meant that there would be a lot of new applications.

And it's much easier to start completely anew with a new language.

So, I made sure, at some point, that we worked well on Android. It was already after the lawsuit.

So, the big context to all this was that when Oracle acquired **Sun Microsystems**, they sued Google for billions of dollars for using Java.

And I think that is settled.

It was settled in some way, yeah.

And then everyone could go on their own way.

Right.

But yeah, it took years and years to settle.

Back then, it was very much a thing. And, you know, that dispute was somewhere in the background.

But yeah, so basically, we saw that a lot of people on Android really liked Kotlin. They loved it.

Yeah.

As soon as it was stable, pretty much. I mean, I think for all the things that you mentioned: it was just so much nicer than Java. Easier to write, easier to read, lots of nice features.

So, you know, you use Android as a way to actually make sure that Kotlin compiled correctly.

And then, why did it take off on Android?

Yeah, so the situation in Android was pretty interesting because unlike Java server side that is kind of under control of the teams that develop on it.
In the case of **Android**, there are devices in the pockets of people, right? And when you have **billions of those devices**, and those devices don't always update the **virtual machine**.

So, people on Android were basically stuck with **old Java**. And even when Java started progressing, and, for example, **Java 8 came out in 2014**, it was very difficult to roll out this new version of Java across the entire Android ecosystem because it required updates to the virtual machine.

There were workarounds, and **Retro Lambda** really helped, and so on and so forth. But there was still a lot of people stuck with really old Java. So, Java wasn't on par with **Kotlin** or **C Sharp** in 2014. But it still was much better, and solved the major problem. But it was not available to the Android people.

So, there was a lot more frustration with Java in the **Android community**.

And also, there was **Swift on iOS**. Where it was a real example of a big ecosystem transitioning from a really dated language to something really nice.

I think compounding these two things were the major factors. Also, we made sure that Kotlin worked well on Android.

Very fortunately, at some point, **Google switched the developer tooling** from the **Eclipse platform** to the **IntelliJ platform** when IntelliJ was open-sourced back in, I don't remember, 2013, I think.

So, we had a nice plug-in because everything worked on the IntelliJ platform, and the same plug-in worked for Android. Many other things were just **very smooth**. Well, very smooth—there were a lot of bugs, but reasonably smooth.

So, it felt like a very good match, and a lot of people appreciated that.

We really wanted to somehow draw the attention of the team at Google to maybe talk about it or something, but it just didn't happen.

We released in 2016, and there was some communication with Google in general, but there was **no interest** on that side. They were like, _okay, we, I guess we'll just keep going as we do_.

Some people were already building **Android applications**, and some people were building production applications in Kotlin before we released 1.0.

Kudos to the brave people because they gave us **indelible feedback**. But you guys are too brave.

So, it just grew organically.

When we started, in the very beginning, I set this internal goal to myself, that if we get to **100,000 users**, it's a success.

I’ve done well enough if it gets to 100,000. Of course, it's hard to tell how many users the language has, but you can kind of estimate that.

I think we were on track to get to 100,000 users during 2016 because it was growing, it was in the tens of thousands, it looked good.

Then, some people from Google reached out and said they wanted to chat.

It turned out they wanted to chat about announcing **official support for Kotlin at Google I/O 2017**, that would be in like three months from the time of that conversation.

They said, _"yeah, sure, let's do it. What do we need to do?"_

It turned out we had to figure out quite a few things, but we managed.

I think it was a **heroic effort** on the side of the Google team. They did amazing, impossible things.

I have good friends among them now.

It was really, really close. Like, we could have missed the deadline, but we figured it out.

On our side, we had to make many things work and figure out how we interoperate with Android Studio better, and how to set up processes and everything.

But there was a big legal thing around it. This is when the **Kotlin Foundation** was invented. We had to design the protocols for decision-making in the Kotlin Foundation.

Google owned the **trademark for Kotlin for one year** because of legal things. It was basically a guarantee from the JetBrains side until the foundation was set up.

You can look up the public record:

```text
Google was in possession of the Kotlin trademark for a year.
```

But then the foundation was set up and the trademark was transferred to the foundation.

It was fun. It was a pretty crazy time.

But it was amazing to see how happy people were at **Google I/O** when the announcement happened.

Then usage must have skyrocketed. You probably blew past 100,000 pretty quickly.

Yes, I think we went into millions that year.

So this was basically the moment happening.

I knew many years before that the easiest way for a language to succeed is to be part of a **platform**.

For example:
- C was part of **Unix**
- C Sharp was part of **Windows**
- JavaScript was part of the **web platform**

And I knew that **Kotlin had no platform**.
So it was supposed to be a much tougher time for **Kotlin** than for some other languages. But, yeah, the platform came along somehow.

Jumping forward to a lot more closer today, you left **Kotlin** in 2020. Later, you left **JetBrains**. What are you doing right now?

Yeah, so I'm also working on a language right now. But it's sort of a different kind of language because the times have changed. And, you know, you can look at it from a similar perspective. Like, in **Kotlin**, we wanted to get rid of boilerplate. We wanted to make programs more to the point. And less of a ceremony.

And I think this is where we, today, we have a great opportunity to do the same thing at a different level. Because of **AI**, right? Because of AI. It's all because of AI.

Yes. **AI is great because many things that are obvious to humans are obvious to LLMs as well, which closes this gap between what the machine can understand and what a human can understand quite a lot.** Which means we might not need to write dumb code anymore. That would be very nice.

So, on the one hand, you know, the entire history of programming languages is going from lower to higher levels of abstraction. We started with machine code. And then assembly was a step up, actually.

- Assembly language is a higher level language.
- And then machine code.
- And then C was a high-level language back in the day.
- Managed languages like **Java** were a great step up and made programming a lot more accessible.

Teams could grow and you didn't have to be a super competent programmer to build working software. And then, you know, things like **Kotlin** built on top of that success. And we raised level instructions some more, but now we can do even better in the same domain.

So, you can imagine a normal program, some application code. A lot of the things in this code are obvious to you and to me. So, if you ask me to write this code, you don't spell everything out. You explain what the program needs to do and I can implement it. And it will work the way you want.

There are, you know, it depends on how detailed the specification is. But you can tell me a lot less than you would have to tell a compiler.

And so, this is the point with **Codespeak**. We want to basically shrink the amount of information a programmer needs to tell the computer to make the program work. From my current anecdotal experience, you can shrink a lot of the code about **10x**.

Which means that a lot of projects out there can be a lot smaller. And it will be a lot easier for humans to deal with that and a lot easier to read — and reading is the most important bit — and a lot easier to navigate.

It becomes, you know, the essence of software engineering. When you are not dealing with a stupid compiler, you're not restricted by that anymore. What you're expressing is what only you know about what needs to happen because everything else, the machine knows as well.

So, can you tell me a bit more on what **Codespeak** is or what this language is? Is it designing an actual, like, in a formal language, just simpler? Is it using, of course, we know that AI and LLMs and agents can do all the funky stuff. Where is this? What is this?

Okay, yeah, so I'll try to explain this.

So, I think the best way of thinking about **Codespeak** is it's a programming language that's based on **English**. It's not a formal language or not an entirely formal language. But it's a programming language. It's a language that's supposed to be used by engineers. But it uses **LLMs heavily**.

And this is like the way new languages will be. Because, you know, you can think about the ultimate language of today as a normal programming language that uses an LLM as a library.

You know, there was a time where NPM was wonderful because, you know, it's a huge repository of all kinds of JavaScript libraries. It's the node packet manager, one of the biggest package managers in the world, right?

Right, yeah.

So, you have:

```markdown
- a huge library out there that you can call,
- but now you have an even better NPM,
- The LLM that has seen all the code in the world,
- and if you're inventive enough, you can fish this code out of the LLM.
```

Yeah. You need to know how to prompt.

Right.

And the trick is, like, it would be really nice to have a programming language that has the entire LLM as a library or as a bag of libraries, right?

The trick is to take anything out of an LLM, you have to use natural language. So, the query language to this incredible database of all the knowledge is informal. And there is no way, at least known today, that you can make it formal.

So, inherently, this ultimate language of today has to be, at least in part, informal. And this is what we're working on.

So, it's still in the air, like, how formal can we make it? And, you know, it's not the goal to make it super restricted. But the goal is to leverage all the power and support the user.
You know, we need to **rule out stupid mistakes** and things like that. And we're still working on that. But the basic idea is, if you, instead of spelling out every line of code and every bit of your algorithm, you can basically communicate **intent** the same way I can communicate it to you, you will just get there much faster.

So, one question that I asked **Chris Lattner**, which I'm going to ask you as well, you're talking about designing a **language for software engineers** to build software more efficiently, maybe more concise, in a new way, and it sounds super exciting. But going to the other side, we have **LLMs**. Do you think there is a need to design a new type of programming language for LLMs to use more efficiently?

That's a very interesting question. And I had a few discussions about this. My position is it's probably misguided because of a number of things.

So, one, to get an LLM to understand some language well, you need a **huge training set**. And with the new language, that training set is not there. You can try to synthesize it and so on and so forth, but it's not going to be as good as other languages. Like, for example, right now, the newer languages are just harder for LLMs than the more established ones.

- Any LLM writes **Python** better than it writes **Rust** or even **Kotlin**.
- Even the LLMs that write **Java** very well won't write **Kotlin** as well because it's not as present in the training set, because it's younger.

And, you know, there are ways around it. I think the later models added some more Kotlin into the RL sets and it's getting better. But still, it's pretty hard. And so that's challenge number one.

Also, challenge number two, I don't think there necessarily has to exist a language that makes it better because LLMs are trained on **human language**. Their knowledge of programming languages is part of that. Their power is in having been exposed to **all the code in the world** and its existing code. And inventing a new language for that, I don't know how promising that can be.

You can do another thing, which is an interesting research project. You can sort of **extract a language from an LLM** because, internally, it has some intermediate representations of what's going on during inference. And maybe you can sort of extract the **optimal prompting language**.

> It's not guaranteed to be intelligible to humans. And there are some experiments that show that you can create completely unintelligible prompts that give the same results as normal human prompts, but they will be shorter.

You maybe can do something like this. I don't know if it will help a lot. But what we're doing in **code speak** as part of working in this language, we need to really nail down this **query language capacity**.

What we're doing now is we are looking at existing code, and we're trying to find the **shortest English descriptions** for this code that can generate equivalent implementations—not necessarily character to character, but they have to work the same way.

That's an interesting exercise because you need to figure out how to represent the ideas in the code in a way that:

- You can generate the same kind of code.
- The ideas are represented much more compactly.

But also, this code you represent evolves over time, right? So you have a **commit history** on top of this version. Going forward in time, you need to be able to represent all the changes in your **code speak version**.

You need to make sure that when it's a small change in the original code, the change in the spec is smaller. That's an interesting challenge. So in this way, we're sort of **discovering code speak as a language**, or at least parts of it, and not really designing that bit of it.

You know, it's a very new world in the sense that, nowadays, if you work with AI, **everything is a machine learning problem**. That means, back in the day, if you had a very smart algorithm on paper, you could just implement it and make sure it works. Nowadays, whatever algorithms you have in mind, you need the dataset.

First of all, like if you don't know how to collect a dataset, don't even start. And, yeah, this is what we're doing.

So just taking a look at, you are using these tools day in, day out. I mean, you're building with them. How do you think programming as a whole, or I'll say **software engineering**, is being changed by AI? And how do you think the future is starting to look? Especially thinking about software engineers. You're a **software engineer** yourself. You've written so much code in your life. And are you still writing code?

Yeah, I'm writing some code, yeah.

> Sorry, typing or prompting?

I'm doing both. Sometimes I'm just typing. More often, I'm typing with **cursor tab completion**. I'm doing quite a lot of prompting as well. And that's a combination of all this. But **cursor's completion** is really a step up from traditional IDEs.
And I think the **IntelliJ side** has something similar now. So it's like a lot of coding, but in a very different kind of mindset and a different tool set.

Yeah, so in terms of what's happening to programming, I think we are in the **early days of the new era**. So, you know, it's only last year that we figured out that **coding agents are good**. No. Cloud code and cursor agent and so on and so forth. And I think this is a very early step.

Right now we are in this phase where a lot of people are in love with agents and it can be very useful and I use them every day. But I think there are inherent problems with the model, with how you interact with a coding agent because it's a **one-on-one chat**. And as a human, I talk to the agent in human language. So I'm communicating my **intent on a high level**.

And that intent gets translated into code and it's the code that I commit to the repo and it's the code that my teammates will see. So my chat history is lost. **Big problem.**

Yeah, so it turns out I'm talking to a machine in human language. But the way I communicate with my team is the machine language. That's kind of backwards.

So, yeah, so what we're trying to do in the **Codespeak** is to **elevate everything to the human language level**. So this is where we start. We say, okay, we have this incredible tool. We can prompt agents to implement code for us. And we are just picking it up. So I think a lot of teams haven't yet realized how difficult it is to review the code.

And I've talked to people who are like,
> "Maybe we can just not review this code."

I'm like, yeah, I mean, you can for a couple of days and then it just collapses. And I think another big theme of today is that we'll be doing a lot of **testing**.

And like, you may not need to review the code if your tests are really good. You need to **verify it**, right? Yeah. That's what you're saying is verifying might not mean reviewing. Right. Or it could not mean. Yeah, depending on the domain. Of course, of course.

You might get by without reviewing the code as much, but being sure somehow either reviewing the tests or somehow else, making sure that your tests are good. That's a trend. And we are putting a lot of effort at **Codespeak into automated testing** and making sure the tests actually check the right things and that they check all the code and all that stuff.

It's very interesting computer science. And also, it's now a question of, especially in the case of **Codespeak**, and I think for other agents as well, like, yeah, reviewing code can be too much, but can we present the tests we generated to the user in a way that actually verifies that we did what was to be done?

It's tricky. Some tests will be just very long and tedious to read and, you know, but we're working on that. And that's where we are.

And I think we'll see a lot of development in terms of **power of the models** and we'll get some quote unquote obvious things implemented in agents. For example, the agents are just starting to use like **language servers** and basically all the stuff that we've always had for code is not very utilized.

And, you know, if you compare like IDE-integrated agents like **Cursor** or **Juni at JetBrains**, you have a lot of like code navigation capability and, you know, databases of code is indexed and you can navigate it very quickly. You can find things very quickly.

When you run cloud code, for example, it might not have that and use grep and it will be as successful, but take a lot longer and burn a lot more tokens.

So, you know, I'm sure this year all these tools come to most agents and we'll have a lot more sophisticated scaffolding around the models.

So that's one thing. But then, you know, my question is always what's going to happen in the **endgame or in further future**. And there it's very hard to predict. And we can assume that models will become much smarter. But an important thing is that **humans will not**.

So one thing I know about the future and it's hard to know the future, but this thing I do know about the future, humans will be as smart or as dumb as they are today. And if we have incredibly smart models, what we will be doing is constrained by how humans are and this is one of the reasons why I'm working on **Codespeak** because Codespeak is a tool for humans, not for models.

Yeah. And humans, I know I can build a tool for them.

I guess an important footnote is that many people will say things like,
> "If we have smart enough models, they can review the code themselves and they can test the code themselves."

But then my question would be like, **who's making the decisions here?**

You know, if all the software engineering work is done by models, it means humans don't have any say in that. And this has a name. It's called **technological singularity**.

Yeah. When humans are not making decisions, it means we're not in charge.

Yep. So this is not the future I'm building Codespeak for.
Nobody should build any projects for that future. **In that future, we're gone. Your projects don't matter.**

But so my assumption when I'm talking about the future is that the **technological singularity is not happening.** And so the basic assumption is **humans are in charge.**

And if humans are in charge, it's their job to communicate intent. So we have to say what kind of software we need to build. And when we're talking about serious software, it's always complex. There's no way there's some very simple thing that will make a difference.

And when we talk about this complexity, this is what our jobs will be, like dealing, managing this complexity, figuring out what we actually need to do. And this is absolutely engineering. There is no way someone can tackle huge amounts of complexity without an **engineering mindset.** It can be called software engineering, can be called something else, but you will have to do it. You will have to navigate this complexity, organize this complexity, figure it out.

And I'm not talking about the complexity of many, many layers of implementation. Maybe not. Maybe that is what's called **accidental complexity,** something that happens or arises from how we implement systems. But there is also **essential complexity.** How we want it to behave is complex enough that we need to figure it out.

And this is why I believe there will be teams of engineers working on systems like today. Maybe they will be a lot more powerful teams. Maybe fewer people can deliver a lot more software. Yes, but still teams of people working on organizing complexity.

And this is what **Codespeak** is for.

---

Going back to where we are today with what the models can do today, what do you see with developer tools? It feels a little bit of a **wild, wild west right now, very much so.** I mean, there's a lot of, obviously with Cloud Code, with Curse or with others.

But what are areas that you think we will see, we will have to see new, different, better tools to actually just catch up with how we can generate? And what parts feel the most messy and the most interesting? Especially because at **Kotlin, you have, and the team has built so many tools for developers.**

Right. So I think, as I already mentioned, this year will be the year of making developer tools available to **agents.**

There are some technical challenges, but you can't figure it out. The people will be doing that.

There's also a surprising advantage to using a good UI for your agent. It's very nice to have everything in your terminal, in one sense. But then you can have a lot better user experience if it's a dedicated environment.

The terminal tools, especially **Cloud Code,** are amazing. And it's a complete breakthrough of what you can do in a terminal. But generally, you can do better in a specialized environment.

So I think we'll see more of this integration into development environments or just new development environments built from the ground up to work with agents primarily. So that is an important thing.

Since we are putting a lot more emphasis on review, there should be new tools for review. And I think we can do better than what we're doing now in many respects.

I don't expect many breakthroughs in testing this year because it's hard. I'm doing it right now. It's hard. It's not going to happen this year. But maybe some advances will arrive this year.

But generally, I think the big lesson of the last couple of years is that all the things that were, quote unquote, obviously needed and, you know, the idea of connecting agents to developer tools was absolutely the trivial thing to think of two years ago. But they take a long time to happen because it's hard.

And, you know, nobody in this industry is lazy. Like everybody's working their asses off. But it just takes time. You need to figure out the basics before you can do advanced things. So, you know, all the straightforward ideas will get implemented at some point.

---

I think there's been this massive jump with AI, especially over the winter break, where the coding agents, the CLIs, have become a lot more capable.

And I know so many developers who are actually just prompting **most of their code, if not all of it.** It's just a massive, massive jump. I don't think we've seen anything this fast.

I see a lot of engineers scared because it can shake you to the bone. You know, it took 10 years to get really good at coding. And the writing the code part feels that it's kind of going out, you know, the trash can.

You yourself have coded for a longer time. What would your advice be for developers who are feeling like this, that they're feeling, you know, it is scary.

I think we, and I talk with some folks, a lot of people message me as well. How are you thinking about this specifically these last few months? It's really hard to give advice.

There are a few ideas I can share.
So one thing is there's a lot of **hype** and a lot of it gets to the **management** and a lot of people make **suboptimal decisions**. But that will go away.

So, you know, there's more and more news about people not hiring **junior developers**, for example.
- This is dumb.
- It's stupid.
- This is dumb.
This is not going to stay for long. I mean, it's hard to tell how long this can go on. But people will figure out that they need **new people in the industry**.

And a lot of other things can be really stressful in the moment, but some of them will be rolled back. So that's one thing.

Another thing, it's absolutely worth it to invest your time into learning these **tools** and getting good at it. There's a lot of skepticism around in the developer community about how useful it actually is. And, you know, I tried it on my project and it's no good.

There is quite a bit of **skill** to using these tools. Unfortunately, it's not super formalizable. At least so far, nobody figured out a really good, clear way of communicating how to do it well. But there are people who can do it much better than others. They not always can't articulate why their prompts work better. But, you know, you can learn it. You can get a lot better at it.

And, you know, not necessarily believing everyone on Twitter. Some people claim crazy things, but you can be very productive with these things when you use them well. And it's absolutely worth investing into that.

And yeah, so as I mentioned before, in the future, it will still be **engineers building complex systems**. So keep that in mind. It's not like we all go to nothing.

And for new grads, people coming out of university, what would your advice be for them who are like determined, like, "all right, I actually want to be a standout engineer. Maybe with these tools, I can do it faster." What would you advise them to focus on either skills or experiences to get?

I guess it's a matter of what your inclinations are.

- If you can just become incredibly productive and put out a lot of working code that is really robust and you can evolve it for a long time, get good at that. And, like, there is a lot to be done there.
- If you can or like to do harder things, go into the most **hardcore things** you can and get good at that because it will be your rare expertise. It will be marketable. Even if that very thing goes away, you will just become a lot smarter through that.

So, you know, generally, if you have any inclination in looking under the hood and figuring out how things work, go as deep as you can. As a younger person, you have a lot of mental capacity for that. And this helps a lot. You become a very good expert in very wide fields, just through drilling down on many things.

That's closing. I just wanted to do some rapid questions. I just ask and you shoot what comes next.

**What is a favorite tool that you have? It can be digital. It doesn't have to be digital.**

> Well, I love my **AirPods**. They're incredibly convenient. They fit under my earmuffs.

Well, another tool would be **earmuffs**.

> Earmuffs. Incredibly good.

Yeah, I saw you wearing it. I'll take that one, Earmuff.

**And what's a book recommendation that you recommend and why?**

There is this classic that's been recommended across the tech community for many years. It's called ***Zen and the Art of Motorcycle Maintenance.***

> I heard that recommended.

Yeah, it's a very good book. I mean, there is a part of it that's about technology and how to deal with the real systems and others, but it's also a very good novel. I really like it.

Well, **Andrew**, thank you so much. This was very interesting and I think inspiring as well.

Thank you very much. It was great to chat.

It was great. Thank you.

The thing that struck me most from this conversation with **Andrey** was his observation about how we work with **AI coding agents today**. You talk to an agent and play in English. It generates code. You commit the code. But that conversation, your actual intent, it disappears. You communicate with the machine in human language, but with your teammates in code, in machine language.

Whether or not **CodeSpeak** becomes the answer, what is sure is that we're missing an **intent layer**. And someone is going to figure out how to preserve it.

If you enjoyed this episode, please do share it with a colleague who's been thinking about where programming is headed. And if you're not subscribed yet, now's a good time. We have more conversations like this one coming.

Thank you and see you in the next one.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Why would anyone create a new programming language today if AI can already write most of your code?",
      "section_title": "Why a New Programming Language Today?",
      "section_level": 1
    },
    {
      "index_sentences": "It is not often that I meet someone who designed such an influential language across mobile and backend.",
      "section_title": "Andrey's Early Career and Introduction",
      "section_level": 1
    },
    {
      "index_sentences": "Okay, so that was a little messy because I went to school back in St. Petersburg, studied computer science, and I didn't really know exactly what kind of programmer I wanted to become.",
      "section_title": "School and First Jobs",
      "section_level": 2
    },
    {
      "index_sentences": "In my PhD, I was working on domain-specific languages (DSLs), and generally, I was interested in languages.",
      "section_title": "PhD and JetBrains Invitation",
      "section_level": 2
    },
    {
      "index_sentences": "What I thought was that it was about this project called MPS (Metaprogramming System) that JetBrains had.",
      "section_title": "The Genesis of Kotlin",
      "section_level": 1
    },
    {
      "index_sentences": "Then this conversation was actually very insightful because the guys at JetBrains explained how things actually were.",
      "section_title": "Why a New Language for the Java Ecosystem?",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah. So the last major version of Java by 2010 was Java 5, released in 2004 — a six-year-old language.",
      "section_title": "Java's Stagnation and C#'s Progress",
      "section_level": 3
    },
    {
      "index_sentences": "And, you know, the ecosystem didn't stand still in the sense that other people were building languages.",
      "section_title": "Rise of Scala and Groovy",
      "section_level": 3
    },
    {
      "index_sentences": "What are dynamic languages for? What are their strengths and best use cases?",
      "section_title": "Dynamic vs. Static Languages",
      "section_level": 4
    },
    {
      "index_sentences": "So with Groovy, that was a big issue of performance as well, because Groovy was building a dynamic language on top of a very static runtime.",
      "section_title": "Issues with Groovy and Scala",
      "section_level": 4
    },
    {
      "index_sentences": "So the argument that people at JetBrains were making was basically that there is a window of opportunity.",
      "section_title": "JetBrains' Opportunity and Tooling Advantage",
      "section_level": 3
    },
    {
      "index_sentences": "So everybody I talked with was deeply in the weeds with IDEs and everything in new programming languages very well.",
      "section_title": "Initial Design and Prototyping",
      "section_level": 2
    },
    {
      "index_sentences": "So in the first few months, I understand that you kind of whiteboarded and wrote down how you want this language to evolve.",
      "section_title": "Whiteboarding and Core Ideas",
      "section_level": 3
    },
    {
      "index_sentences": "I think I started writing code maybe six months in or something like that.",
      "section_title": "Starting with an IDE Plugin",
      "section_level": 3
    },
    {
      "index_sentences": "When you say you work on front-end, and they work on back-end, in a language context, what does that mean?",
      "section_title": "Front-end and Back-end in Language Development",
      "section_level": 3
    },
    {
      "index_sentences": "So, when the language started, what did you call it internally?",
      "section_title": "Naming the Language",
      "section_level": 1
    },
    {
      "index_sentences": "So, I don't think there was a discussion of this first name at all.",
      "section_title": "From Jet to Kotlin",
      "section_level": 2
    },
    {
      "index_sentences": "The first thing we did was put out basically a Confluence page with a description of the language.",
      "section_title": "Project Kotlin and the Empty Page Trick",
      "section_level": 2
    },
    {
      "index_sentences": "So, when it started, what were the main differences with Kotlin compared to Java?",
      "section_title": "Kotlin's Core Innovations and Influences",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, I guess there were a few major selling points.",
      "section_title": "Initial Selling Points and Verbosity Reduction",
      "section_level": 2
    },
    {
      "index_sentences": "And can we just spell out why null safety is so big?",
      "section_title": "Null Safety",
      "section_level": 3
    },
    {
      "index_sentences": "A lot of them. I have an entire talk about this.",
      "section_title": "Shoulders of Giants: Influences from Other Languages",
      "section_level": 2
    },
    {
      "index_sentences": "I think the language that influenced Kotlin the most is, of course, Java.",
      "section_title": "Java's Influence",
      "section_level": 3
    },
    {
      "index_sentences": "Apart from that, Scala had a huge influence. We used many ideas from Scala, including: Primary constructors, Data classes, vals and vars, Interesting tricks about how generics work, for example, variance declarations — a great idea of Martin Odersky.",
      "section_title": "Scala's Influence",
      "section_level": 3
    },
    {
      "index_sentences": "Yeah, so Scala was a big influence. C Sharp was a very big influence.",
      "section_title": "C# and Syntactic Tricks",
      "section_level": 3
    },
    {
      "index_sentences": "Groovy was a big influence as well. JetBrains used Groovy for build scripts.",
      "section_title": "Groovy and Typed Builders",
      "section_level": 3
    },
    {
      "index_sentences": "A less known language called Gosu, I think it was what inspired us to do smart casts.",
      "section_title": "Gosu and Smart Casts",
      "section_level": 3
    },
    {
      "index_sentences": "What were things that you looked at other languages, you considered, maybe we should bring it in.",
      "section_title": "Features Deliberately Excluded",
      "section_level": 2
    },
    {
      "index_sentences": "We had a design for pattern matching in Kotlin that was inspired by functional languages like Scala and Haskell and others.",
      "section_title": "Pattern Matching",
      "section_level": 3
    },
    {
      "index_sentences": "Why did you omit the infamous ternary operator, which is when you write out something with the question mark and the colon, and it confuses new developers every single time if you've not seen it before?",
      "section_title": "Ternary Operator",
      "section_level": 3
    },
    {
      "index_sentences": "What are some other interesting features that you like about the language that you added that we could explain for those who are not familiar?",
      "section_title": "Key Features and Java Interoperability",
      "section_level": 2
    },
    {
      "index_sentences": "Can you explain to us as engineers, like, it sounds like it was a friggin' big project.",
      "section_title": "The Challenge of Java Interoperability",
      "section_level": 3
    },
    {
      "index_sentences": "So one thing to note here is that we don't control the Java compiler.",
      "section_title": "Handling Java Collections and Nullable Types",
      "section_level": 3
    },
    {
      "index_sentences": "How long did it take? Can you give me just a sense of like how many people working on it?",
      "section_title": "Kotlin Development Process and Growth",
      "section_level": 1
    },
    {
      "index_sentences": "Every time I was asked when we were going to release Kotlin, I would say one year from now.",
      "section_title": "Timeline and Team Growth",
      "section_level": 2
    },
    {
      "index_sentences": "Can you tell us about the development process inside language?",
      "section_title": "Development Practices and Bootstrapping",
      "section_level": 2
    },
    {
      "index_sentences": "Release cadence is a very difficult thing to figure out for such projects.",
      "section_title": "Backwards Compatibility and Experimental Features",
      "section_level": 2
    },
    {
      "index_sentences": "So you got 1.0 out. Can you tell me how Kotlin grew in popularity?",
      "section_title": "Android Adoption and Google's Announcement",
      "section_level": 1
    },
    {
      "index_sentences": "Okay, so that's a complicated story. Let's try to not get off track, because this has a lot of sidetracks to it.",
      "section_title": "Initial Android Apathy and Toolchain Issues",
      "section_level": 2
    },
    {
      "index_sentences": "Yeah, so the situation in Android was pretty interesting because unlike Java server side that is kind of under control of the teams that develop on it.",
      "section_title": "Why Kotlin Succeeded on Android",
      "section_level": 2
    },
    {
      "index_sentences": "We really wanted to somehow draw the attention of the team at Google to maybe talk about it or something, but it just didn't happen.",
      "section_title": "Google's Official Support",
      "section_level": 2
    },
    {
      "index_sentences": "Jumping forward to a lot more closer today, you left Kotlin in 2020.",
      "section_title": "Andrey's New Project: CodeSpeak",
      "section_level": 1
    },
    {
      "index_sentences": "Yeah, so I'm also working on a language right now.",
      "section_title": "Why CodeSpeak? AI and Abstraction",
      "section_level": 2
    },
    {
      "index_sentences": "So, can you tell me a bit more on what Codespeak is or what this language is?",
      "section_title": "What is CodeSpeak? English-based Programming",
      "section_level": 2
    },
    {
      "index_sentences": "So one question that I asked Chris Lattner, which I'm going to ask you as well, you're talking about designing a language for software engineers to build software more efficiently, maybe more concise, in a new way, and it sounds super exciting.",
      "section_title": "Programming Languages for LLMs?",
      "section_level": 2
    },
    {
      "index_sentences": "So just taking a look at, you are using these tools day in, day out.",
      "section_title": "The Future of Software Engineering with AI",
      "section_level": 2
    },
    {
      "index_sentences": "Going back to where we are today with what the models can do today, what do you see with developer tools?",
      "section_title": "New Developer Tools and Hype Cycle",
      "section_level": 2
    },
    {
      "index_sentences": "I think there's been this massive jump with AI, especially over the winter break, where the coding agents, the CLIs, have become a lot more capable.",
      "section_title": "Advice for Developers and New Grads",
      "section_level": 2
    },
    {
      "index_sentences": "That's closing. I just wanted to do some rapid questions.",
      "section_title": "Rapid Fire Questions and Conclusion",
      "section_level": 1
    }
  ]
};
window.faq = {
  "qas": [
    {
      "question": "Who is Andrey Breslav and what is Kotlin?",
      "answer": "Andrey Breslav is the creator of Kotlin, a language that runs on billions of Android devices and is one of the fastest growing languages in the world.",
      "index_of_source": "Andrey is the creator of Kotlin, a language that runs on billions of Android devices and is one of the fastest growing languages in the world."
    },
    {
      "question": "Why did the Java ecosystem need a new language around 2010?",
      "answer": "The Java ecosystem needed a new language because Java hadn't evolved significantly for a long time; the last major version by 2010 was Java 5, released in 2004, while other languages like C# were progressing well.",
      "index_of_source": "So Java didn't really evolve and hadn't been for a long time."
    },
    {
      "question": "What were the main issues with Scala that Kotlin aimed to address?",
      "answer": "Scala had problems like heavy reliance on implicits which made code complicated, a very slow compiler, stability issues, and general inaccessibility for many engineers, which Kotlin aimed to simplify.",
      "index_of_source": "But it had its own problems. It relied very heavily on implicits, for example."
    },
    {
      "question": "Why is null safety considered a significant feature in Kotlin?",
      "answer": "Null safety is significant because dealing with null references is a major hassle in most languages, frequently leading to runtime null pointer exceptions, which Kotlin's type system is designed to prevent.",
      "index_of_source": "Yeah. So, dealing with null references is a big hassle in most languages."
    },
    {
      "question": "What made achieving seamless Java interoperability a 'gigantic undertaking' for Kotlin?",
      "answer": "Seamless Java interoperability was difficult because Kotlin doesn't control the Java compiler, requiring tricks like compiling Kotlin code to binaries first, handling incremental compilation across two languages, and exposing Kotlin's unique features like null safety and specific collection behaviors to Java.",
      "index_of_source": "So one thing to note here is that we don't control the Java compiler."
    },
    {
      "question": "Why was the ternary operator omitted from Kotlin's design, and was this decision regretted?",
      "answer": "The ternary operator was omitted because Kotlin treats 'if' as an expression, making it seem redundant, but Andrey later regretted this decision as 'if' as an expression proved to be too verbose in practice and the operator couldn't be easily retrofitted.",
      "index_of_source": "The reason was, Kotlin used this principle from functional languages that everything we can make an expression is an expression."
    },
    {
      "question": "What is 'message from the future' in the Kotlin compiler, and why is it important for compatibility?",
      "answer": "'Message from the future' is a mechanism where a newer Kotlin compiler writes metadata into the binary that tells an older compiler which specific parts it cannot understand, allowing for partial compatibility and preventing older compilers from completely invalidating entire libraries.",
      "index_of_source": "So what we're doing is a newer compiler can write something into the binary that tells the old compiler, \"okay, this method is what you can't understand, but everything else is fine.\""
    },
    {
      "question": "How did Kotlin grow in popularity, especially on Android?",
      "answer": "Kotlin grew in popularity organically, initially targeting server-side developers, but found significant traction on Android due to Android developers being stuck with older Java versions, the appeal of a 'nicer' language, and Google switching developer tooling to the IntelliJ platform.",
      "index_of_source": "When we started Kotlin, we were not really very aware of Android."
    },
    {
      "question": "What is Andrey Breslav's new project, CodeSpeak, and how does it relate to AI?",
      "answer": "CodeSpeak is Andrey Breslav's new programming language built on English, designed for an era dominated by AI. It leverages LLMs to significantly reduce the amount of information programmers need to explicitly tell computers, focusing on communicating intent rather than writing verbose code.",
      "index_of_source": "Andrey's new project, CodeSpeak, is a new programming language built on English, designed for an era where AI writes most of the code."
    },
    {
      "question": "Why does Andrey Breslav believe it might be misguided to design a new programming language specifically for LLMs?",
      "answer": "Andrey believes it's misguided because LLMs require huge training sets, which new languages lack, and their power comes from exposure to existing human language and code. Inventing a new, formal language for them might not be as promising as leveraging their natural language understanding.",
      "index_of_source": "So, one, to get an LLM to understand some language well, you need a huge training set."
    }
  ]
};
</script>
