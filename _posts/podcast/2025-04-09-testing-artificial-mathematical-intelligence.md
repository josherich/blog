---
layout: post
title: "Testing Artificial Mathematical Intelligence"
date: 2025-04-09 00:00:01
categories: podcast
tags: [podcast_script]
---


[Testing Artificial Mathematical Intelligence](https://www.youtube.com/watch?v=svF-1ekPqjM)

**EMILY RIEHL:** Hi, thanks. So before the talk, a quick announcement-- I am a member of an editorial board managed by **Deirdre Haskell** of a brand-new journal that launched on Monday. It's called **Zeitschrift für Mathematik Logik und der Grundlagen der Mathematik**.

So firstly, this is a new journal. It's **Diamond Open Access**, meaning free to read, free to publish for everybody. We'd love to get submissions and get it going right away.

Also, an interesting backstory-- this same collection of editors last week were editors on a different journal that had a different publishing model. So if you believe in **open science** and work in the area of **logic**, please help us spread the word.

[APPLAUSE]

**AUDIENCE:** What's the desired length?

**EMILY RIEHL:** Great, and then that's the end of the talk. No, it's not.

**AUDIENCE:** What's the desired length of articles?

**EMILY RIEHL:** I actually have no idea. Can-- length of articles?

**AUDIENCE:** I don't think we have a minimum or maximum.

**EMILY RIEHL:** It's an electronic journal, so I suspect we're relatively flexible there. But that's a great question. And it's so new I have no idea. So, OK, great. So I guess now to the subject of the talk.

Firstly, I wanted to thank the organizers for putting together a really wonderful conference and thinking a lot about the structure. And I think it's a real challenge to give a bunch of talks that have technical scientific content and are nevertheless understandable to a diverse audience.

And I really appreciated the technical talks and the tutorials. I feel like I've learned a lot this week. This will not be a technical talk. And instead, my goal is to think at a sort of higher level about the problem of recognizing **artificial mathematical intelligence** when we see it.

This is, I hope, the start of a conversation that we can continue today and tomorrow and then beyond this workshop with others as well. For mathematicians, I think this is a conversation that's in part about what we **value** and what our **norms** are and should be, and what sort of ethical considerations we need to take into account when envisioning what the future of mathematical practice will be for developers of machine systems, **AI**, and other computer tools.

I'm hoping this will be a source of inspiration, providing challenges that get at the heart of the things that mathematicians most value. And I also envision this conversation as public-facing.

I mean, there seems to be a lot of-- I mean, there's not typically a lot of interest in the general public in mathematics specifically. Maybe we don't always do so well at expressing ourselves. But there does seem to be interest in the question of, can **AI** do mathematics? And I think it's important that mathematicians and those working in the area are part of these conversations because the answers of what our vision of mathematical practice is often more nuanced than just, "can a system solve some contest math problems," for instance, or "get the right answer to this numerical query."

And I think what I'm going to talk about today are tasks that are really mostly of interest to the mathematical community, and maybe more narrowly of interest to the mathematical community. But I think part of the reason that the **AI community** is so interested in mathematics is that math is hard.

And if we can solve some of these problems, then the ranges of applications to things that really affect the real world, I think, are quite interesting.

OK, so that's the framing for the talk. And I want to start by talking about some specific inspirations for the title and the framing in the form of two papers. So the first is **Turing's** famous "Computing Machinery."
and **Intelligence**, which aims to present a perhaps **playful answer** to a similar question—how will we recognize **artificial intelligence**? How will we know when it's actually here?

So the way he frames this question is, can machines think? And then he does something very clever. He doesn't elaborate on what it would mean for machines to think and instead proposes a game or a test, known today as the **Turing test**, but described in the paper as an **imitation game**, which asks whether an interrogator in another room could distinguish between a **man** or a **machine** impersonating a man through a series of typewritten questions.

This is at least how I understood the test when I first heard about it. I mean, if you read the paper, it's actually quite a lot clearer than this. Turing first describes an **imitation game** where there's a **man** and a **woman**, and the man is attempting to—or the man is attempting to impersonate the woman. And so the interrogator is trying to distinguish between those.

And then what he actually asks is whether a computer would do a better job at impersonating a woman than a man would. Nevertheless, I think this is the point that—the question that Turing is trying to make progress towards is interesting, even if the precise nature of the test shouldn't always be taken as seriously.

So—right, so, I mean, Turing predicted in the paper that in **50 years' time** that machines would be able to pass what's now known as the **Turing test**. And I don't want to spend the rest of the hour debating on whether **large language models** can or cannot pass the Turing test. This isn't a talk about gullibility and things like this.

But in any case, there's certainly been a lot of progress in this area. And maybe this test was one sort of inspiration for that progress. So what I want to ask is a different question about whether machines can do **mathematics**, not whether machines can think.

And, I mean, of course, thinking is also multifaceted. But we're mathematicians, so let's be a little bit more narrow. So no single test can capture the multifaceted meaning of doing mathematics. I mean, the activities of mathematicians that have been represented this week or represented in our professional lives are really myriad.

So rather than propose a single test, what I'm going to propose are a series of tests or benchmarks that might help identify whether or not a machine is doing mathematically meaningful work in a lot of different directions. We've seen some directions today, and we'll discuss that.

So before getting to that, I need to say more about what it actually is to do **mathematics** or what it actually means to make mathematical progress. And a source of inspiration for that is one of my favorite essays by **Bill Thurston**, "On Proof and Progress in Mathematics."

So he opens with the question, what is it that mathematicians accomplish, but then reframes it in a more leading way as, how do mathematicians advance human understanding of mathematics?

So he's redefining—or he's articulating mathematical progress, not in terms of new definitions, new theorems, new proofs, but in advances in human understanding of mathematics. And I think this framing really resonates with me and resonates, I think, with a lot of people who love mathematics.

What's exciting is understanding, not necessarily novelty or flag pointing or things like that. A lot of what has inspired mathematical developments is even just better ways to think—new ways to think about old problems.

I mean, there's a phenomenon in mathematics where a theorem is proven, and then it's reproven, and then it's reproven, and then it's reproven. And we celebrate the reproofs as much as the original proofs.
if they lead to **new understanding**.

And that's what **Thurston's reframing** is about.

So he continues, > "This question brings to the fore something that is fundamental and persuasive. What we are doing is finding ways for people to understand and think about mathematics."

And I think this is an important framing to keep in mind in this age where some mathematical progress might be automated. What is the end goal? Which for people is to understand more mathematics, to empower us, the humans in the room, in the end.

So, again, his point is that **mathematics** and **mathematical progress** is more about definitions, theorems—more than just definitions, theorems, proofs, or getting to the right answers. He illustrates this by a few examples.

Sorry, this essay was written in the **'90s**, and maybe I should make that clear. I think it's **1994**.

So the rapid advance of **computers** had helped dramatize this point because computers and people are very different. For instance, when **Appel** and **Haken** completed a proof of the **four-color theorem** using a massive automatic computation, it evoked much controversy.

I interpret this as little to do with the **veracity** of the theorem or the correctness of the proof, but rather a continuing desire for **human understanding** of the proof, in addition to the knowledge that the theorem is true.

So if a machine creates a proof that's **10,000 lines long** and nobody can read it, what's that telling us? Is that any better than an oracle that says this theorem is true?

On a more everyday level, it's common for people first starting to grapple with computers to make large-scale computations of things they might have done on a smaller scale by hand. They might print out a table of the first **10,000 primes**, only to find that the printout isn't something they really wanted after all.

They discover by this kind of experience that what they really want is not usually some collection of answers. What they want is some sort of **understanding**.

So even in the space where—numerical discovery, where a single computation is interesting, really, it's fundamentally about understanding.

So why is it that this constellation of numbers or this particular mathematical object has this particular feature and not others?

OK, so that was about my framing on what **mathematics** is, what **mathematical progress**—or, sorry, what mathematical progress is.

But there's still the question about what **mathematics** is. And there's something a little bit circular or self-referential in the way that **Thurston** describes mathematics.

**Mathematical progress** is advancing human understanding of mathematics. So mathematical progress is by understanding more mathematics. What does that even mean?

And he speculates that there's an essential **recursive quality** of mathematics. And this resonates with me as well.

So here's a definition:

**Mathematics** is the smallest subject that includes the natural numbers, plane and solid geometry, as well as things that mathematicians study, where mathematicians are those who advance human understanding of mathematics.

So, I mean, I work in **category theory**. And where that came from is exactly this. In category theory, there are not really any numbers. There's certainly not any plane or solid geometry.

But rather, we're trying to help mathematicians better understand the mathematics, where the mathematicians are the people who are studying some other mathematics, maybe **group theory**, and those group theorists are studying some other mathematics.

And maybe at some point, it gets back to numbers. And actually, what **Thurston** writes is mathematicians are those humans who advance human understanding of mathematics.

But I'm trying to be a little bit...
**more inclusive of artificial mathematical intelligence.**

I think a lot of us are starting to see a future where a lot of mathematics is done collaboratively. I mean, that's certainly the present. Mathematics is not a lone activity, but something that's done in community, either in person or over the internet. But maybe some collaborations are between **humans** and **machines**. We've seen a lot of examples of that this week.

OK, so this is all the—so I guess here's the **thesis statement**.

**Mathematical intelligence** is multifaceted, and **human mathematical activity** is even more so. So what I'm going to do with the rest of this talk is propose a series of tests to help identify whether a **generative AI system** or—I mean, one of the things I'm kind of revising this week is— or thinking about this week is whether we should really distinguish between **AI** and other sorts of **computing machinery**.

I guess I would love to hear thoughts about this because I think a lot of the tests that I'm going to propose might be best solved by other sorts of tools, some sort of **SAT solver** or some sort of **computer algebra system** or something else.

So anyway, if I say **AI**, I mean to be inclusive of any sort of machine that's doing mathematics—so to help identify whether a machine that is capable of doing mathematics can meaningfully contribute to this process.

So the tests are all intended to be independent. Just like **human mathematicians** have different strengths and weaknesses—I'm somebody who devotes a lot of time to exposition, for instance. But that's not something that everybody necessarily is interested in. I wouldn't expect any single computer system to find— I mean, certainly, computer systems will be optimized to different tasks.

Also, the difficulty of these tests varies considerably. Some of them can be passed by currently existing systems. We've seen examples of this this week. I'll try to mention a few. But others might require decades of development. I think that's actually a good thing to have **benchmarks** at different levels.

OK, so that's the plan. I'm going to divide the rest of the talk into a first section that focuses on tests involving tasks related to **teaching** and **learning mathematics**, which is a very, very important part of mathematical activity and will continue to be so— very **human-centered**.

A **theorem** is only good if people know about it and can use it and can build on it. Then I'll have a section in the middle about norms and ethics briefly that'll frame the second section on **mathematical research** and **discovery**. As we saw earlier in the week, I also think it's useful to separate the kind of discovery and the proof aspects. And so those will both be addressed in the last section.

OK, so let's just press on.

Here's a test. I'm an academic. I teach at a **university**. A thing I've started to hear from some colleagues in other disciplines is that **large language models** are very helpful for them in generating assignments because they can do this dialogue and generate some scenario or something like that to do homework.

I was really stumped trying to write questions for the final exam for a **computational linear algebra** course—so computations that you can do by hand that aren't too difficult. I was trying to reverse engineer some **matrices** with certain properties, and **ChatGPT** gave me a perfectly beautifully formatted suggestion that was completely useless because none of the numbers worked.

Here's a matrix that has this vector in the kernel, and you just check, and it's not at all true.

So the first test is a **calculation test**. Given a natural language mathematical query involving a computational
**Component Interface**

With an appropriate **computer algebra system**, or **SAT solver**, or literally any **calculator** displaying both the **source code** and the result.

So, yeah, I mean, I think increasingly, it's common to-- I think, maybe, outside this room, there's this idea that a **large language model** will be a single source for all queries. But, of course, there are systems that are designed to have expertise in particularly complicated calculations, maybe involving **linear algebra** or **elliptic curves** or even more exotic things.

And one area that I would be interested in development is integration with the **natural language capacity** of **generative AI systems** with existing software that can actually perform some computations.

So further challenges in this direction would be, checking the calculation in a different **computer algebra system**.

So *[INAUDIBLE]* gave a wonderful talk at **IPAM** a few years ago that gave examples where computations that did appear in **public mathematics papers** weren't always correct and weren't always consistent, often through **overflow errors**. And so one thing that humans can do, of course, is check a computation in different software. And you can imagine a machine contributing in that way as well.

Another useful thing would be to have some sort of **computer system** that can help a human user learn how to interface with a **computer algebra system**. I mean, there's been a lot of-- I'm one of many people who is using **large language models** to help **tech support**, and so to answer queries about the strengths and limitations of different software, and what are the **best practices** for selecting a system for a particular task.

Yes?

**AUDIENCE:** Regarding the source code, I just wonder if you could say more on what you mean because if we do specialize the **LLMs** and the code that they actually use for the training-- there's the **training data**. There is the code it might produce, like the **Python code**.

**EMILY RIEHL:** Yes, yes. Sorry, what I imagined here was something more user-facing. So if I had a natural language query involving my **linear algebra problem**-- find me a matrix that has this particular vector in the kernel-- and the answer would involve a call to **Mathematica** or something, or maybe **Sage**, a sort of **open-source mathematics software**, and would display, here's the matrix, but format it in Sage, and here's this vector that I wanted to be in the kernel, and here's the calculation in the code of the system that verifies that this vector is in the kernel of this matrix, for instance.

So that's what I meant by **source code**, not what's going on under the hood via the computer system that you're asking the query to, but since this is interfacing with some external **computer algebra system** or **SAT solver**, showing the code for that as well.

So, I mean, for instance, you can ask-- I think you can-- I mean, often, the output of a **large language model** today will display some sort of **code blocks** as part of the answer. If you're asking for **tech support**, I'll say, well, try running this in the terminal or something like that. That's what I meant by source code here.

So another example is something I'll call the **example generation test**. So given a mathematical-- generate examples of a given mathematical definition with references described at a level of a specific audience, for instance, undergraduates who have taken a first course in algebra, providing more details when asked.

So one of the most useful things when you're learning a new-- when you're meeting a group for the very first time is, what are some examples of groups? What are some counterexamples of groups, something...
**where not every element has an** inverse or something like that, explaining what this is distinct—the boundary between this abstraction and other examples, examples with different properties, where something's abelian, where something's not abelian.

**And I think, certainly, this is something** where we're building upon sort of human knowledge, not just knowledge in terms of original discovery, but knowledge in terms of exposition as well.

So there are a lot of wonderful examples of references. And I think a challenge would be to not just—to include links for further information in equal examples.

So a more challenging version of this exercise is as the definitions get more technical, where the references are a lot fewer and further between. Sometimes, it's a theorem to show that a particular construction is an example of a particular definition. In that case, that thing should certainly come with a citation.

So—right, so one of the things I'm trying to propose along with the test is some specific group of adjudicators, so, in this case, asking—if an answer includes some references, consulting the authors of those references could verify correctness. And also, is this copied verbatim from this? Is this an interesting or novel exposition? These standard examples, are these useful? And so on.

**AUDIENCE:** Can I ask a question?

**EMILY RIEHL:** Absolutely.

**AUDIENCE:** How much of the problem is this technical mathematical understanding? How much is some other human factor, like how much the student care about these things? And how do you think about that issue as you think about building future systems that can do that? Are you attacking the right issues is kind of the question.

**EMILY RIEHL:** Right. I guess I'm at the stage where the intended user of a system would be somebody who's motivated to understand the example. So I don't know if that was what you're getting at.

So in my personal framing of this test, I'm thinking more about the technical accuracy and the appropriateness of the references than anything else.

**AUDIENCE:** Definitely one intended user, but the question is, how much will human motivation be influenced by how you present this? Do you have any thought about that?

**EMILY RIEHL:** Right, OK, that's an interesting—so you're saying—could you elaborate?

**AUDIENCE:** Well, if you're a super genius, you don't need any motivation, just kind of, oh, here's the facts. If you're on the other extreme, you're just lost, and then you're discouraged. So your motivation is not a constant factor. It's a function of how you communicate.

So, yeah, I mean, I think that's a very interesting topic, I think.

**EMILY RIEHL:** Yeah, that is an interesting question that I hadn't considered. I mean, one of the—so we're sort of previewing something that's maybe part of the ethics section to come. But one role that I think a lot of people anticipate AI being used for, and is already being used to some extent by our students today, is as some sort of personal tutor.

So I'm totally lost in **Emily's linear algebra class**. I have no idea what a subspace is. Help.

And I think there are a lot of—I mean, on the one hand, of course, given student-faculty ratios, students often aren't given as much help as they want in terms of—or at the time they want. Maybe have their question at 2:00 AM, but office hours were at 10:00 AM.

But, of course, what makes a TA so valuable is not just that they're a source of the answer to the question, but that they can often perform some sort of emotional labor around the question. So they sense in the demeanor of the student who's...
Asking the query that **they're frustrated**. And they say something reassuring. They tell a story about how they didn't understand what **subspaces** were either when they first understood that. And so anyway, that's a very interesting question. I'm glad you raised it. And let's discuss further.

**Yes?**

AUDIENCE: Can I ask, how would you judge whether the general [INAUDIBLE] is considered a **standard**?

**EMILY RIEHL:** Right, so what I was imagining here is that the judge specifically would be the **author** of a **textbook** in the area, and this would be a matter of that person's personal opinion or maybe something like this.

So, yeah.

**Yes?**

AUDIENCE: I think this is great. And [INAUDIBLE] sometimes I've asked some things that are very technical, and I think [INAUDIBLE] just a lot of **Wikipedia** and a lot of **Archive**.

So I was wondering, in your experience, are there any specific topics from, I don't know, if any category, very, very advanced, that it has struggled with? Because I think there's a range— this question has a broad range of where it can perform very well or where it can fail very badly.

**EMILY RIEHL:** Right. Yes, I certainly agree with that. I mean, in my personal experience, I've seen both beautiful answers and things that are totally false. And I think— so one of the further challenges is to repeat this exercise for more technical definitions across a variety of **subfields**. I mean, certainly what I would predict is that they'll get much better at **linear algebra** specifically than other topics very soon.

So, yes.

**AUDIENCE:** How much value would you place in **graphical** or **visual intuition**?

**EMILY RIEHL:** In the sense of as a human being? What do you mean?

AUDIENCE: So when I illustrate something, I don't illustrate just with words or—

**EMILY RIEHL:** I see. Yeah.

AUDIENCE: I'll wave my hands. And at some point, the other person somehow gets what I'm saying. And **textbooks** do the same with [AUDIO OUT]. In terms of **AI**, would you place any value in training an AI to do that?

**EMILY RIEHL:** Thanks. That's a wonderful suggestion as well that I— and I anticipate a much harder challenge is to say something about **intuition**. So there is a test about communication later.

I mean, one of the very interesting— I mean, the **Thurston essay** that I mentioned at the beginning, I referenced only a small part of it. What the bulk of the essay is about is particular challenges of mathematical communication. And it's exactly because the way mathematicians understand **mathematics** in their own heads often involves what you're suggesting— so **pictures**, **intuitions**, sort of vague ideas.

Getting that image, a **mental image** out of one person's head into another person's head is an extremely difficult challenge. And having a computer in the middle seems to make it even harder, certainly so, yeah.

**Yes?**

AUDIENCE: This might be a bit far, but what tools do you envision being useful in this case? Would you just be using **ChatGPT** for informal stuff, or would you be like relying on **Lean** and things?

**EMILY RIEHL:** Yeah, so, right, I'm not a developer. So I don't know. So there will be some discussion of— I mean, we're getting a little bit ahead of what I was going to say in the **norms section**. But I think the stakes are a little bit different when we're just trying to help an individual learn **mathematics** versus doing something sort on the frontiers of **research**.

So there's a lot of mathematical knowledge that's sort of well understood and just not yet understood by a particular person who's involving a **query**.
So it's not clear to me that a **proof assistant** necessarily has to interface at this level. But I think referencing is important.

So a kind of check at least that this all came from somewhere and is not completely fabricated would be-- here's an example. The **Rubik's cube group** is an example of a group. Here's a paper that discusses that in more detail. That's kind of what I was imagining at this level. So-- great. I love this, but I'll do another one.

OK, **grading tests**-- so catch every mistake in the course-wide submissions for an undergraduate-level mathematics problem set and explain the errors without false positives or negatives. I mean, there are, again, a lot of challenges here-- I mean, are the problems handwritten, among other things?

I could imagine this means something that is-- this test is run in the setting of a particular course, so with actual students, actual instructor, actual TAs, all of whom could weigh in about the success or failure of a computer system. So are the answers comprehensible? Could the TA do better? Is any of this correct at all?

So other challenges are, again, sort of further student queries. A lot of instructors I have expressed-- so **Robert Grice**, for instance, at **Penn**, has some experience in trying to train a tutor to help his students in a particular course that he is teaching.

So a more useful answer to a particular question about **subspaces**, for instance, would point to the particular reference material that's being used in a particular course. So the textbook that you, student, already have on your shelf or on your iPad-- look at section 3.4 or something like that.

So **reading comprehension tests**-- teaching and learning mathematics happens at the student level but also happens at the expert level. I mean, all of us are continually trying to learn new mathematics. And a very useful tool would be something that could summarize the results of a recent research paper with, say, no false statements and no major omissions, perhaps after prompting for some more details.

And a **natural judge** for this would be the authors of that paper. So is this a fair summary of what we did and did not do? This is something that I could imagine would be a lot more difficult in certain areas than others. I mean, certainly there are different standard lengths of research papers in different fields.

Is it possible now that there is a summary of text from a research paper to adjust for an audience with a particular background? So say it's a paper in **algebraic geometry** being read by a **number theorist**. Can we help make it more comprehensible to that person?

Is it possible to ask for more details? So say in the summary there's a discussion of a particular proposition. The proposition includes a technical term that isn't known to the respondent. Can you ask for a definition and then be pointed to a definition, again with cross-references?

OK, so connected a little bit to the idea of **visual intuition**, though I was imagining this in a slightly different way, is a test of communication. This was suggested to me by **Jordan Ellenberg** this morning, actually.

So identify the main step of a natural language proof either produced by the machine or by some humans. This is something that I think a lot of human mathematicians-- so communicating mathematics, even between mathematicians, is quite difficult.

But if you're talking to another expert in the same field, often you can convey a proof, a brand-new proof, sort of remarkably quickly-- this is something that **Thurston** discusses-- because there's sort of a rich store of shared common knowledge.
**You're speaking the same sort of language.** And the way that you communicate a proof is not the way that an automaton might, by explaining every single step in excruciating detail, but by saying, "here's the main idea."

And what even is the **main idea** in a proof? For instance, we saw the example of the proof that there are infinitely many primes. What's the main idea in that proof? This is something that I think a human would have a lot easier time answering than, say, a large language model.

But there are other dimensions of communication that are equally interesting—so whether there could be sort of **visual metaphors**. And the judges here, I think—if it's a human-written proof, then the authors certainly should weigh in. But if it's a machine-written proof, or—we're not going to ask **Euclid** what the idea is for infinitely many primes—somebody who's written a textbook on the subject, so somebody who is focused more on the expository or communicating aspects.

OK, a related test—literature search. So answer a natural language query with a ranked list of relevant mathematical papers and books with no hallucinated references. I mean, this is something that I know lots of mathematicians use Google for now. But if it could be improved, that would certainly be wonderful.

And the natural language query you could imagine would be the statement of a theorem and ask if this has been proven. Is it known whether this result is true? So the judges here would be the office if those texts were available and also some sort of **community forum**.

One of the most useful ways to do a literature search right now is to ask on **MathOverflow** or **Zulip** or something like that.

**AUDIENCE:** [INAUDIBLE] be listed first.

**EMILY RIEHL:** Well, OK, so not—right, I guess I'm less worried about the accuracy of the rankings, though I did say ranked list, so apologies about that, but in terms of major omissions.

So, I mean, further challenges—given a natural language statement of a theorem, find the first reference where it appears. I think this is one instance where a human mathematical practice could be improved. It’s common for those of us who have written mathematics textbooks to end up getting thousands of citations because people will credit you for all theorems in there, not the person who proved it originally.

So that's something that could be improved upon. In my field, in **category theory**, it’s sort of—well, anyway, so given a natural language definition, find the first reference where it appears as well as a list of synonyms and references for those.

That’s always something a little bit painful when it happens as you discover that your theorem has been proven, but by somebody who is using different terminology. So Google did not find it, but yeah.

OK, and then a translation text—so, there are wonderful machine tools for translating non-mathematical texts between languages. And it would be great to have this for mathematics. So much mathematics is written in English.

It would be nice to have it available in other languages or historical texts translated back into English. So translate a mathematical text between two languages without overtranslating technical terms.

So there's—yes?

**AUDIENCE:** Can you extend this by analogy to being able to explain to someone in a different field, maybe, some kind of analogous—identify some analogous idea that seems to have impact in that particular field that most connects with what the new interesting kind of developments.
are in that particular paper.

**EMILY RIEHL:** Sure. I mean, that seems considerably harder, but it would be very useful as well, of course.

But, yeah, what I'm imagining here is something more like a **direct translation**, but handling technical terms appropriately, mathematical content appropriately. Useful also would be to point out synonyms for technical terms. So sometimes there are multiple translations. And part of a translation would be appropriately dealing with the **references**.

So it's common in a bibliography to cite the title of the paper in whatever language it's written, whether or not that's the language that the rest of the paper is written. So part of avoiding overtranslation would be to leave the citation with the actual title of the paper.

But if we're translating an **expository introduction** to representation theory to a different language, and there are some references on group theory in that language, it would be appropriate to add those references as supplements.

OK, so that was the discussion of **teaching** and **learning**. So I want to briefly discuss *norms* and *ethics*. One of the things that I was thinking about when framing the tests here is what's an acceptable use of **AI within mathematics**.

So, certainly, there are concerns that are raised by potential harms to people, so, for instance, through biases or insufficient consideration or science, for instance, through falsehoods or just large volumes of low-quality work or incorrect work.

So AI music on **Spotify** is the sort of thing that I'm imagining there. And I have particular concerns about AI performing the following sorts of activities:

- Assisting in essentially any way in **graduate admissions** or hiring,
- Anything that involves artificially generating rankings without a human closely reading any file,
- Issues about **refereeing** beyond assistance in reading comprehension or literature search.

I think there are a lot of problems with refereeing today. Just managing the volume of submissions is a problem. But, I mean, there are a lot of biases in the way that a text is presented or even typeset in **LaTeX** that correlate with its possibility of acceptance.

And I just can't imagine an AI tool assisting in this that wouldn't replicate many of the biases and potentially make them worse. And then original mathematical writing beyond assistance with editing, translation, or **LaTeX typesetting**-- and so now we're going to get into some of the questions that I was asked earlier.

So, certainly, a mathematical proof is not perfect. Whether a theorem is true or whether a theorem has been proven is not as black and white as I certainly thought when I was younger, as people think outside the community. But I think, despite these sort of well-known imperfections, the mathematical community can take deep pride in our overwhelmingly reliable and continually improving standards of *mathematical proof*.

Mistakes in the literature are everywhere, but they're often caught and corrected in an amount of time-- just a second, and I'll grab you. So I think we should demand the same for AI when it comes to the mathematical realm and, in fact, sort of higher standards because we can.

So this will frustrate near-term progress, delaying the arrival of a machine that we think of as having **mathematical intelligence**. But I think it will be beneficial for overall reliability in the long run in mathematics and beyond.

So, specifically, what I want to propose is a norm for the mathematical community when it comes to original mathematics produced by an AI system, which is that an artificially generated mathematical text that, say, might be submitted.
to a journal or the **archive**
will not be considered as a proof unless it has been communicated in both a **natural-language text** paired with the **computer** formalization of all the definitions, theorems, and proofs, and then this has been accepted by both the **proof assistant** and **human expert referees**.

So I think it could be a real problem if we're starting to see a lot of papers in **mathematics**—natural-language papers in mathematics that are written in part or largely by **AI**. Already we're not—regrettably, few people are reading the papers that are being written today. If the volume of the papers increases, that problem will not get better.

And so I think now is a moment when we might have these powerful computer systems that can aid in **mathematical writing** to raise the standards for **mathematical proof**. Just because it has been formalized does not mean it's correct. It means that the given term is, in fact, a term of the given type. But it doesn't mean that the type states the theorem that you think it does or that the **definitions** are the way you think they are.

And so that's the human involvement that I'm imagining here. It's not enough for a proof to be checked by a proof assistant. Somebody needs to read the **formalization** and do some adductive reasoning to check whether the definitions seem correct and that the theorem statements are correct, and so on and so forth.

Yes?
**AUDIENCE**: Actually, I think what I was going to raise was more or less addressed in the last [INAUDIBLE]. It feels like the refereeing aspect—refereeing has at least three components:

- checking mathematically if it's correct,
- is it understandable for the reader, and
- as the editor, you judge if it's meeting the level of the journal or whatever.

So I thought by sort of hinting at refereeing, you're not going to leave it to the machine; you're forbidding a key aspect here [INAUDIBLE].

**EMILY RIEHL**: Yes. Yes. Yeah, I think there's a great appeal in the proof assistant to ask—I mean, in practice, of course, I think—certainly, before we see AIs writing their own papers on their own, we'll see AIs contributing to the writing of papers with human beings. One attractive aspect is that it'll help make **mathematics** easier to **formalize**.

So there's going to be a lot about formalization in the final section, which is wonderful, but it doesn't entirely mean that it's correct. There's still a layer of interpreting the formalization correctly. And there were some wonderful talks yesterday about the subtleties and challenges there.

Yes?
**AUDIENCE**: So suppose we've got a [INAUDIBLE] which is exactly this pairing of formal [INAUDIBLE]. I'm curious what you think, if there is an advantage or disadvantage to publish a text in a given journal, giving preferential treatment to journal [INAUDIBLE], or just keep it on the web because the **mathematical value** is still the same.

**EMILY RIEHL**: So I think there are still benefits to journal publication. Whether there are benefits to commercial journal publication is a separate matter. But, certainly, papers that go through the refereeing process are often better at the end of it than they were at the beginning, both in terms of being more accurate but explained better and better referenced than things like this.

Maybe I'll leave it at that. I mean, of course, the archive is a wonderful thing. But there is a challenge facing journals now to get better at handling **mathematical papers** that have some sort of computer component, whether it's about some calculation or about some formalization.
**And archiving,** it's going to be important to archive those computer resources as well as the original paper and so on and so forth. So that's an interesting question.

**AUDIENCE:** So for proof, among others known for **Hilbert's 10th problem**, a similar proposal. But he didn't phrase it as a norm. He just said, *I predict that in 25 years, every journal will only accept a paper if it comes accompanied with a formalization.*

Would you imagine this extend to all mathematical publications, since I think it will become difficult to judge what has been using **AI** and what hasn't?

**EMILY RIEHL:** Yeah, so that's a wonderful question. I'm really glad you asked. So I think this is a norm for **AI-generated proof**. That's what I'm proposing. I'm not saying that it's a norm for all mathematical proof yet.

And the reason is that I think that— well, so certainly, right now, it would be infeasible, but let's say in a decade or two. I think this is going to become possible in certain subfields a lot more quickly than it will be in other subfields.

And you don't want mathematical progress to stop in those other subfields. So the technical work that I'm working on right now is formalizing **infinite-dimensional category theory**. And it's extremely difficult for lots of reasons that we could discuss over coffee.

And there's a lot of areas of mathematics that require this to have been formalized previously before they have any hope of formalizing their stuff. So I'm having a lot of trouble formalizing **infinity category theory**, and my failure is blocking a whole bunch of other things.

So I don't want that to be a norm right now. But, of course, in the future, I think this is one of the ways that we can continue this historical progress of improving the standards of our proof.

So, OK, let me get into research and discovery. So like many of the talks we've seen so far, I'm excited about potential uses in both aspects.

And I'm going to start with the **discovery test** because I think a lot of these have actually been passed already. So one test would be of finding counterexamples— so assisting a team of human mathematicians in the search for counterexamples, disproving a mathematical conjecture, the results of which are publishable in a reputable mathematics journal, so a conjecture that's mathematically interesting.

So we've seen examples of this discussed earlier in this week, not with generative AI, but with the **SAT solver**. So I would consider those as passing this test, just to be clear. But you can imagine ways where these systems improve.

So in some cases, the neural network didn't exactly find the counterexample but generated examples that— a human with visual intuition maybe was the issue there could easily identify the examples.

So **Adam Wagner** has given some talks about his work where he used a neural network and set up a game to find counterexamples in **graph theory**. And in that case, the neural network didn't exactly find the counterexample.

But in looking for examples that minimized the function, the reward function, there was sort of an obvious conjecture that he could state and then develop that into an actual counterexample.

So, really, this was some sort of collaboration between the human and the machine. Of course, a lot of the delicacy is setting up the system— so communicating what the mathematical problem is to the computer.

And you can imagine that in the future, maybe it will be easier to— some of the challenges in finding an efficient encoding of the problem could be streamlined. Or perhaps this is always going to require a lot of expert human interface.
**Folks who are experts on SAT solvers**, for instance, could say more about that.

OK, so another test is sort of **discovery**, so more about **conjectures** than **counterexamples**. The boundary between counterexamples and discovery isn't perfectly clear. So assist a team of human mathematicians in **mathematical discovery** by searching a prescribed universe of mathematical objects for particular features or general patterns, leading to new results in a paper written by human collaborators accepted into a reputable mathematics journal.

So there have been some sort of **famous examples** of this, for instance, in **knot theory**, where just searching a **large space** can help find some correlations that, with great difficulty, can be turned into a conjecture, and then, with greater difficulty, the humans can prove the conjecture. I mean, these sorts of developments, I think, are very exciting.

Again, there's a lot of **art in turning** the discovery into something human-understandable. But on the other hand, maybe the **future** of artificially intelligent mathematicians is always as collaborators and never as **autonomous agents**. But anyway, I think there are examples where this test has been passed as well, at least as a collaborator and **discovery**, not an autonomous source of discovery.

So another test of collaboration is more in the realm of—I’m imagining this more in the realm of **ideas** than in terms of mathematical examples. So I think we've all had the experience with human collaborators where you're chatting about a **problem** back and forth, and then somehow, in the discussion, there's an idea, and then the idea gets refined, and then that refinement gets to **lemma**, and the lemma is the **key step** in the proof of a theorem.

So that's the sort of thing that I'm imagining here is a chat between human mathematicians and maybe some **language model** or maybe something else that leads to an idea that is mathematically interesting, not common knowledge. So, I mean, in practice, you could imagine first just mentioning something that is common knowledge, but not known to the human mathematician who’s involved in the chat.

But I think what would be a real sort of benchmark is if there's an idea that is not common knowledge and that is acknowledged as such, the way that, when we write a paper now, sometimes, a particular idea is ascribed to a particular author or a nonauthor of that paper. So, of course, the person who, quote unquote, "has" the idea and the person who understands the idea are not always the same person.

And I could imagine that being the case as well, where there's sort of a germ of something in something that is suggested in some way by a large language model that takes the humans to refine. But it usually takes real understanding to convert from an intuition into something more mathematically precise.

**OK, problem-solving test**—so, I mean, certainly there's been a lot of activity towards **mathematics contest problems**. And I think that is interesting and important.

And I think specifically what is of value to the mathematics community is not just the right answer, but a **well-written solution**, so a, say, **formalized proof** that doesn't include unnecessary induction steps or something like this. That's maybe on the same order of magnitude as a human-written proof as opposed to much, much longer.

Right now, there has been some success in this arena, though often with a little bit of help—so, for instance, where a human user assigns a particular problem to a particular system, maybe a **specialist system** in that domain of mathematical reasoning, or converts a natural language statement, which is what the humans are taking on paper, to a formal statement.
for a system to use.

But anyway, I think this **is an exciting realm**.

So the **library search**—so here, in contrast to **literature search**, so now I'm sort of moving towards **formalization** for the last few tests. By library, I mean a library of **formalized proofs** as opposed to the **mathematical literature** as on the internet.

So something that I find quite difficult in **Lean** is finding anything in the library. I mean, this is one use of **AI tools**. I've heard the **Lean search** folks were here this week—so huge improvement in terms of what you can find in **Lean**. So that's really wonderful. Thanks a lot.

But one particular challenge here is often the **theorem** you're looking for in a library of formalized proofs appears there but at a greater level of **generality** than the generality that you're searching for. I don't know if this is something that you have thought about, but recognizing that your **theorem** about **vector spaces** is a theorem that appears in the library about **modules**, that sort of thing.

So further challenges is once you've found something in a library of formalized proofs, give examples of where it's used. This is something which is very useful to users. New users of a proof say, OK, I need to use this theorem, but what **syntax** do I use when I use this theorem?

So giving examples where that's been done would be very helpful, either original or drawn from the library, answering, of course, queries about it.

What does this little **snippet of code** actually mean? So this, I think, would greatly help users of a **formalized proof library**, readers of a formalized proof library.

OK, so an **auto-informalization test**—so given a **natural language summary** of a **computer-formalized proof**, including—so give a detailed natural-language summary of a **computer-formalized proof**. A proof that it exists already and is in a library, deformalize it, including necessary **background results** and definitions with links to the corresponding **formalized code**.

So another aspect of reading a library of formalized proofs is of reading it in **plain language**. Even better would be to be able to summarize things at a larger scale—so here's a very long **Lean file**.

What are all the results that appear in here, or in this folder, or even in this library, in the cases where that's not ginormous, or giving a sketch of a long formalized proof rather than the full details.

You could imagine—there have been some experiments that are based on programming rather than **AI** of interpreting—**Patrick Masseau** has written some code that will interpret every line in a restricted version of **Lean syntax** into a natural language, **French** or **English** translation. But could you give a sketch and not just the full details?

OK, now to **formalization**. So I've broken this up into lots of different tests because I think this will be one of the things that are the most difficult. And I think the difficulty is that different aspects will differ.

So formalize the statement of a theorem in an existing library that already contains the necessary definitions. There have been work on systems like this already—so to be judged by both the **proof assistant** and then the maintainers of the library, so the maintainers of the library judging, for instance, is this an efficient way to phrase this, not just a correct way to phrase this definition?

One of the most interesting aspects here—and this came up, I think, in [INAUDIBLE] talk yesterday—that there are lots of different logically equivalent ways to state a theorem. And, I mean, this is something that is not easy to recognize formally.
**or not as easy to recognize,** I guess, mechanically or automatically.

The particular version might have very significant implications for the formalization. So is this the right way to formalize the proof? I mean, if you're trying to automatically prove the theorem, which is coming later, often the logical structure of the formula is what's guiding the proof techniques.

And so if it's phrased with a different quantifier on the outside, that's going to suggest maybe a proof by contradiction where a direct proof is available or something like this. You can imagine this being much harder for theorems that have never been formalized versus ones that appear in many libraries.

OK, **definition**—so automatically formalize a mathematical definition and its prerequisites referring to existing concepts in a library where appropriate. Stating definitions correctly, in my experience, is a lot more complicated than stating theorems correctly. I mean, firstly, definitions are often more complicated than theorems. But also, again, there's a lot of different logically equivalent ways to state a definition. And the stakes sort of seem even higher.

OK, **proofs**—so automatically formalize a mathematical proof from a detailed source text, including statements and proofs of any required supporting lemmas, cross-linking between the source text and the formalization.

So, in **Lean**, there's a common practice that we've heard discussed in [Florice's talk](#) earlier this week of having a detailed blueprint where a human user points out what exists already in the library and breaks up the steps of a theorem into finer detail than is currently typically written in the mathematics literature.

You could imagine first trying to formalize theorems that are well-scaffolded in that way, so where there's a detailed natural-language blueprint. A further challenge, then, would be to do so where there's less—not as much of a blueprint, or in a subfield where there's less formalization. I think, again, this will be a lot easier in some areas of mathematics than others.

And then the final two—so an **original proof test**, generate and formalize an original mathematical proof paired with a natural-language summary linked to the formalization. So a further challenge would be a proof that's mathematically interesting of an open conjecture, something that would be publishable in a journal, not just a proof that's true but not of particular interest.

And then, in terms of what mathematicians really value, it's not just the certificate that the theorem is true, but whether the proof is beautiful or whether it has any ideas, whether it's a proof from the book, whether it's a proof that we would accept into a library of formalized proofs or a proof that you'd expect the users to improve upon before it gets merged.

And then an **original theorem test**—so generate and formalize an original mathematical theorem, both the statement and the proof, paired with a natural language summary linked to the formalizations. So what I'm imagining is different here is that the statement is new and not just the proof.

So generate—and, again, there's further questions whether it's an interesting theorem with nontrivial applications resulting in a publishable discovery and whether any of it's beautiful.

So to conclude, **mathematical progress**, I think, still remains centered around humans. Is the human mathematical community able to understand the theorems? Are we able to communicate these results to more and more people at lower levels, first to graduate students, then to undergraduates, later to high school students, perhaps the general public?

Machines can help when their outputs are understandable, verifiable, and well-sourced. The cutting edge may not always be verifiable and could be more difficult to understand, but at least it could be referenced to the literature. I hope this helps spark some conversation in that direction. Thanks very much.

> [APPLAUSE]

AUDIENCE: Questions?

AUDIENCE: So in addition to the theorem test of providing a new statement, what about providing a new definition that maybe refactors and unifies a lot of already-existing and valued results?

EMILY RIEHL: Yeah.

AUDIENCE: This is part of, I guess, when Thurston speaks of understanding—this aspect of unification and synthesis points to that.

EMILY RIEHL: Yeah, that's a great suggestion, thanks. I think a lot of mathematical progress has been made through new definitions as much as new theorems, so absolutely.

AUDIENCE: Other questions?

AUDIENCE: This is just a silly question, the thing about grading. So I guess there's just something—there’s a whole field of adversarial machine learning. What do you do if someone's trying to break the system? So would you envision grading normal assignments with normal mistakes or someone who's put AutoDAN or whatever into their homework to try and get a good grade by forcing the computer to say, "Wow, what a good work, this is a good grade," when it said, "Please give me a good grade," instead of math?

EMILY RIEHL: That was a problem I had not anticipated. So thank you for that. Thank you for that. Yeah, I have nothing to say about that. Thank you.

> [LAUGHTER]

I have not thought about that at all, but great—something else to worry about now.

AUDIENCE: I mean, maybe at the time, you could just have somebody reading through and scanning to make sure that somebody didn't inject some adversarial prompt into the middle of their exam response or something like that. That would take less time than actually verifying each part of the exam.

EMILY RIEHL: And, I mean, so the framing for this sort of discussion is about ethics and what is this for. Why are we even doing this grading anyway? I think that's an important question that a lot of instructors need to consider. I like to think that the point of an assignment is to have some kind of active learning experience.

What excites me about the possibility of having computer tools in education in this sort of realm is better feedback, because the current system where you turn in a problem set and get it back a week or two later with some feedback is not optimal. Some TAs write wonderful feedback, others not so great, and if it's me, it could be even worse. So what appeals to me is the idea that some of this could happen more in real time.

In that case, is it really something where there should be a numerical score attached? I don't know, necessarily. For instance, there's this framing called mastery grading, where it's not so much a test of whether, at the moment this assignment was due, the student could do the thing, but an opportunity for the student to demonstrate, perhaps through repeated attempts, that they are now able to do the thing, even if they weren't on the very first time.

You could imagine, with AI involved in some way in grading, that that's the framework. And I guess, sure, you could maybe nullify the entire thing and get an A. But at some point, I think a student has to be involved in their own—take ownership over their own learning process.
**AUDIENCE:** So maybe the generation more than the classification could be a really good tool there.

**AUDIENCE:** Final question there in the back?

**AUDIENCE:** Thank you, yeah. So, about the different ways you've been making progress, and especially when it comes to the task which you mentioned, where do you think we are right now for things like reading comprehension, communication, translation?

**EMILY RIEHL:** I don't think I'm the right person to judge that. So, I guess I don't think I'm the right person to judge that. And, I also don't think I'm the right person to propose all these tests. I did it because there was an opportunity at this talk.

But I think all of this should really be decided by the community.

So, the community needs to take a moment to articulate:

- what we value
- what we're looking for
- what is acceptable
- what's unacceptable
- what sort of tools we want
- what sort of tools we definitely don't want and would never dream of using.

And similarly, I mean, I did try to be relatively concrete by proposing a judge for each of the tests. But the judges are often committees rather than an individual person.

So let me not say. But, yeah, it's a good question.

**AUDIENCE:** Thank you so much.

[APPLAUSE]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hi, thanks. So before the talk, a quick announcement— I am a member of an editorial board managed by Deirdre Haskell of a brand-new journal that launched on Monday.",
      "section_level": 1,
      "section_title": "Introduction: New Journal Announcement"
    },
    {
      "index_sentences": "Great, and then that's the end of the talk. No, it's not. AUDIENCE: What's the desired length of articles? EMILY RIEHL: I actually have no idea.",
      "section_level": 1,
      "section_title": "Audience Question on Journal Length"
    },
    {
      "index_sentences": "OK, great. So I guess now to the subject of the talk. Firstly, I wanted to thank the organizers for putting together a really wonderful conference and thinking a lot about the structure.",
      "section_level": 1,
      "section_title": "Introduction: Thanking Organizers and Framing the Talk"
    },
    {
      "index_sentences": "OK, so that's the framing for the talk. And I want to start by talking about some specific inspirations for the title and the framing in the form of two papers.",
      "section_level": 1,
      "section_title": "Framing and Inspiration"
    },
    {
      "index_sentences": "So the first is Turing's famous \"Computing Machinery.\" and Intelligence, which aims to present a perhaps playful answer to a similar question—how will we recognize artificial intelligence?",
      "section_level": 2,
      "section_title": "Turing's \"Computing Machinery and Intelligence\" and the Turing Test"
    },
    {
      "index_sentences": "So before getting to that, I need to say more about what it actually is to do mathematics or what it actually means to make mathematical progress.",
      "section_level": 2,
      "section_title": "Thurston's \"On Proof and Progress in Mathematics\""
    },
    {
      "index_sentences": "So why is it that this constellation of numbers or this particular mathematical object has this particular feature and not others?",
      "section_level": 1,
      "section_title": "Defining Mathematical Progress and Understanding"
    },
    {
      "index_sentences": "But there's still the question about what mathematics is. And there's something a little bit circular or self-referential in the way that Thurston describes mathematics.",
      "section_level": 2,
      "section_title": "Thurston's Recursive Definition of Mathematics"
    },
    {
      "index_sentences": "OK, so this is all the—so I guess here's the thesis statement. Mathematical intelligence is multifaceted, and human mathematical activity is even more so.",
      "section_level": 1,
      "section_title": "Thesis Statement and Talk Plan"
    },
    {
      "index_sentences": "OK, so let's just press on. Here's a test. I'm an academic.",
      "section_level": 1,
      "section_title": "Tests Related to Teaching and Learning Mathematics"
    },
    {
      "index_sentences": "The first test is a calculation test. Given a natural language mathematical query involving a computational.",
      "section_level": 2,
      "section_title": "Calculation Test"
    },
    {
      "index_sentences": "So another example is something I'll call the example generation test. So given a mathematical— generate examples of a given mathematical definition with references described at a level of a specific audience, for instance, undergraduates who have taken a first course in algebra, providing more details when asked.",
      "section_level": 2,
      "section_title": "Example Generation Test"
    },
    {
      "index_sentences": "OK, grading tests-- so catch every mistake in the course-wide submissions for an undergraduate-level mathematics problem set and explain the errors without false positives or negatives.",
      "section_level": 2,
      "section_title": "Grading Tests"
    },
    {
      "index_sentences": "So reading comprehension tests-- teaching and learning mathematics happens at the student level but also happens at the expert level.",
      "section_level": 2,
      "section_title": "Reading Comprehension Tests"
    },
    {
      "index_sentences": "OK, connected a little bit to the idea of visual intuition, though I was imagining this in a slightly different way, is a test of communication.",
      "section_level": 2,
      "section_title": "Communication Test"
    },
    {
      "index_sentences": "OK, a related test—literature search. So answer a natural language query with a ranked list of relevant mathematical papers and books with no hallucinated references.",
      "section_level": 2,
      "section_title": "Literature Search Test"
    },
    {
      "index_sentences": "OK, and then a translation text—so, there are wonderful machine tools for translating non-mathematical texts between languages.",
      "section_level": 2,
      "section_title": "Translation Test"
    },
    {
      "index_sentences": "OK, so that was the discussion of teaching and learning. So I want to briefly discuss norms and ethics.",
      "section_level": 1,
      "section_title": "Norms and Ethics"
    },
    {
      "index_sentences": "So, specifically, what I want to propose is a norm for the mathematical community when it comes to original mathematics produced by an AI system, which is that an artificially generated mathematical text that, say, might be submitted.",
      "section_level": 2,
      "section_title": "Proposed Norm for AI-Generated Original Mathematics"
    },
    {
      "index_sentences": "So, OK, let me get into research and discovery. So like many of the talks we've seen so far, I'm excited about potential uses in both aspects.",
      "section_level": 1,
      "section_title": "Research and Discovery Tests"
    },
    {
      "index_sentences": "And I'm going to start with the discovery test because I think a lot of these have actually been passed already.",
      "section_level": 2,
      "section_title": "Discovery Test: Counterexamples"
    },
    {
      "index_sentences": "OK, so another test is sort of discovery, so more about conjectures than counterexamples.",
      "section_level": 2,
      "section_title": "Discovery Test: Conjectures and Patterns"
    },
    {
      "index_sentences": "So another test of collaboration is more in the realm of—I’m imagining this more in the realm of ideas than in terms of mathematical examples.",
      "section_level": 2,
      "section_title": "Collaboration Test: Idea Generation"
    },
    {
      "index_sentences": "OK, problem-solving test—so, I mean, certainly there's been a lot of activity towards mathematics contest problems.",
      "section_level": 2,
      "section_title": "Problem-Solving Test"
    },
    {
      "index_sentences": "So the library search—so here, in contrast to literature search, so now I'm sort of moving towards formalization for the last few tests.",
      "section_level": 2,
      "section_title": "Library Search Test"
    },
    {
      "index_sentences": "OK, so an auto-informalization test—so given a natural language summary of a computer-formalized proof, including—so give a detailed natural-language summary of a computer-formalized proof.",
      "section_level": 2,
      "section_title": "Auto-Informalization Test"
    },
    {
      "index_sentences": "OK, now to formalization. So I've broken this up into lots of different tests because I think this will be one of the things that are the most difficult.",
      "section_level": 2,
      "section_title": "Formalization Tests"
    },
    {
      "index_sentences": "So formalize the statement of a theorem in an existing library that already contains the necessary definitions.",
      "section_level": 3,
      "section_title": "Formalizing Theorem Statements"
    },
    {
      "index_sentences": "OK, definition—so automatically formalize a mathematical definition and its prerequisites referring to existing concepts in a library where appropriate.",
      "section_level": 3,
      "section_title": "Formalizing Definitions"
    },
    {
      "index_sentences": "OK, proofs—so automatically formalize a mathematical proof from a detailed source text, including statements and proofs of any required supporting lemmas, cross-linking between the source text and the formalization.",
      "section_level": 3,
      "section_title": "Formalizing Proofs from Source Text"
    },
    {
      "index_sentences": "And then the final two—so an original proof test, generate and formalize an original mathematical proof paired with a natural-language summary linked to the formalization.",
      "section_level": 2,
      "section_title": "Original Proof Test"
    },
    {
      "index_sentences": "And then an original theorem test—so generate and formalize an original mathematical theorem, both the statement and the proof, paired with a natural language summary linked to the formalizations.",
      "section_level": 2,
      "section_title": "Original Theorem Test"
    },
    {
      "index_sentences": "So to conclude, mathematical progress, I think, still remains centered around humans. Is the human mathematical community able to understand the theorems?",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "The journal is called Zeitschrift für Mathematik Logik und der Grundlagen der Mathematik.",
      "index_of_source": "It's called Zeitschrift für Mathematik Logik und der Grundlagen der Mathematik.",
      "question": "What is the name of the new Diamond Open Access journal mentioned at the start of the talk?"
    },
    {
      "answer": "The AI community is interested in mathematics because \"math is hard,\" and solving mathematical problems can lead to applications in the real world.",
      "index_of_source": "But I think part of the reason that the AI community is so interested in mathematics is that math is hard.",
      "question": "According to the speaker, why is the AI community particularly interested in mathematics?"
    },
    {
      "answer": "The controversy stemmed from a continuing desire for human understanding of the proof, in addition to knowing the theorem was true, because the proof used a massive, potentially unreadable automatic computation.",
      "index_of_source": "For instance, when Appel and Haken completed a proof of the four-color theorem using a massive automatic computation, it evoked much controversy.",
      "question": "What kind of controversy did the computer-assisted proof of the four-color theorem by Appel and Haken evoke?"
    },
    {
      "answer": "Concerns include AI assisting in graduate admissions or hiring, artificially generating rankings, refereeing beyond basic assistance, and original mathematical writing beyond editing or typesetting.",
      "index_of_source": "Assisting in essentially any way in graduate admissions or hiring, Anything that involves artificially generating rankings without a human closely reading any file, Issues about refereeing beyond assistance in reading comprehension or literature search.",
      "question": "What specific AI activities does the speaker express concerns about regarding potential harms to the mathematical community?"
    },
    {
      "answer": "Such texts should not be considered proof unless they are communicated in natural language paired with computer formalization of definitions, theorems, and proofs, and accepted by both a proof assistant and human expert referees.",
      "index_of_source": "will not be considered as a proof unless it has been communicated in both a natural-language text paired with the computer formalization of all the definitions, theorems, and proofs, and then this has been accepted by both the proof assistant and human expert referees.",
      "question": "What standard is proposed for AI-generated mathematical texts submitted for publication, such as to a journal or the archive?"
    },
    {
      "answer": "A proof assistant only verifies that a given term is of a given type, not necessarily that the type correctly states the intended theorem or that the definitions are accurate, requiring human adductive reasoning.",
      "index_of_source": "Just because it has been formalized does not mean it's correct.",
      "question": "Why does the speaker argue that a formalized proof being checked by a proof assistant is not sufficient on its own?"
    },
    {
      "answer": "Yes, machines like SAT solvers and neural networks have passed the discovery test, specifically in assisting human teams in finding counterexamples or patterns, although often as collaborators rather than autonomous agents.",
      "index_of_source": "So we've seen examples of this discussed earlier in this week, not with generative AI, but with the SAT solver.",
      "question": "Have machines already successfully passed any of the discovery tests proposed in the talk?"
    },
    {
      "answer": "The communication test involves identifying the \"main idea\" or \"main step\" of a proof, which is how mathematicians often communicate proofs quickly to other experts.",
      "index_of_source": "And what even is the main idea in a proof?",
      "question": "What test is related to identifying the key idea or intuition within a mathematical proof?"
    }
  ]
};
</script>
