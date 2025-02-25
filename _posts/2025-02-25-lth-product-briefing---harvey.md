---
layout: post
title: "LTH Product Briefing - Harvey"
date: 2025-02-25 00:00:01
categories: podcast
tags: [podcast_script]
---

[Music]

Hello everyone and welcome to the LTH product briefing. I'm delighted today to be joined by Jake Weiner, who is the head of strategic business development at Harvey. Jake, welcome.

Thanks, Nikki. Yeah, great to be speaking with you and excited to show the Harvey platform a little bit. I think everyone is excited to see this Harvey. Hard to believe given people still feel that Chat GPT and Geni and Legal is recent, but in fact, Harvey's now been around for about two years. How has it evolved? Where is Harvey now?

Yeah, probably the best way to answer that is just to jump into the demo. So I want to show Harvey's fault feature. This is Harvey's sort of data room tool. This allows you to upload data sets of thousands of documents, and the documents are then stored within Harvey. You're able to then query across them both in natural language as well as with dedicated purpose-built workflows. 

It's a tremendous tool for due diligence, transactional due diligence, for litigation discovery and litigation review tasks, as well as for tracking sort of precedents and deal points for in-house teams. It's particularly useful for tracking agreements, whether those are commercial agreements or just agreements with various counterparties. So there is a hugely valuable tool for working with large legal data sets.

To use this, you create a project, and you can see examples of some different projects here. Then you can jump into any one of these and perform a query. So let's start by just showing an example of one of these. Here we have a data set of a number of commercial contracts, and the query that I previously ran here is a very simple query. I just said, for all these commercial contracts, tell me about the parties, any change of control provisions, termination, and red flags generally. 

So not particularly on this red flags point, a lot of specificity there, so like leveraging the model's knowledge to be able to produce this. Here we prompted Harvey to produce this answer in a table format, and so you can see Harvey's gone through every one of the agreements in this data set. It's produced this answer in this table format, specifying each of those terms that we asked about. 

We can then open up any of these agreements and we can jump directly to the terms that we've asked about and see them highlighted in the documents, as well as sort of Harvey's own kind of analysis of the terms that we asked about. Oh, I see there's red flags there. That's interesting. Are you able to customize the data that is extracted from a batch of documents? So if you wanted, say, 25 very specific data points extracted, you can specify that?

Absolutely, and I can show you exactly what that looks like. Here's where you would run an open-ended query like this. You can have Harvey give you an answer either in a table format, like we just showed, or in more of a memo format. So here, if we want to get a table, you start by prompting in entirely natural language, and again, you can ask about anything you like. I can say something like, tell me about the control provisions, any supply chain risks, assignment, and anything that would implicate Georgia law, right? Any sort of term that you might happen to care about. 

And when we hit "Ask Harvey," you'll see that what it's actually going to first do is take a pass at producing the columns that you're likely to care about. So you'll see here it's added a number of columns related to two columns around change of control. You have the ability to edit those, so you can choose exactly what each of these columns should say. 

But again, are there any provisions or clauses that implicate Georgia law? What are the details of those? So Harvey gives you a sense of exactly what's going to be in that table, and it's entirely flexible, entirely open-ended. And of course, this is powered by our large language models, so this is not using conventional machine learning or pattern matching. It's not looking for section headings; it's not even looking for specific words. It's actually reading the context of the entire document to produce these outputs. 

And even once Harvey's produced an answer like this, you also have the ability to add columns. Right-click this button here, we can add columns and add files. And then, of course, you have sophisticated filtering tools, so we can filter these down. It's a great way to rapidly work through large data sets of documents and perform these sorts of diligence tasks.

Okay, the example of prompting that I just showed you is the way that you can use this through open-ended natural language prompting. But as I mentioned, we are also building and releasing on an ongoing basis sort of purpose-built end-to-end agentic workflows within Vault and also throughout the Harvey platform generally. Many of these are under development right now, but within the assistant tool, within the various research tools, there are more and more sort of end-to-end workflows that don't require prompting.
in the same way so you can see some examples of these here. 

Here, for instance, we have workflows provided around analysis of Court opinions producing email chronologies, in, for instance, a litigation context reviewing lease agreements, reviewing share purchase agreements. 

If we select one of these, create a do an LPA review or fund review, we click this. Harvey specifies, okay, these are the terms that you're likely to care about. You also have the ability, of course, to edit any of these particular concepts. 

But it's setting it all up for you. You choose the documents within the dataset that you want to run this across, and then you essentially hit go. We won't wait here while this runs, but this sort of gives you a sense of where the Vault platform is going and also where the Harvey platform more generally is going. 

It's actually running here, but where the Harvey platform is going more generally, which is more and more of these agentic workflows that sort of remove the prompting burden from the user and that are purpose-built for specific legal tasks. 

Um, conduct those tasks at really high levels of fidelity. Large numbers of these workflows are being loaded into the Harvey platform and are just there when you log in. We also build these on a custom basis for customers, and as our models and LLS generally have gotten more and more sophisticated, we're able to produce these workflows with really pretty light engineering lift. 

We're able to plug these in for customers on a bespoke basis without a lot of obstacles to doing so. For those watching who are not sure what the distinction might be between prompting the assistant tool or clicking a button on an agentic workflow, would it be correct to say you're seeking a specific output? You click the button for that output, and then what Harvey does is take the necessary tasks in order to achieve that output or that outcome. 

Yeah, that's right. That's right. And I think the other way to think about it is many of the tasks that the workflows that we're building accomplish are tasks that are already possible in the Harvey platform right now via open-ended prompting. 

But they might require very sophisticated prompting, or they might require multi-steps of prompting—so running one prompt, taking that output, then running another prompt on top of it, and then doing that several times. So what these workflows are doing is essentially putting together very sophisticated prompts in addition to a software layer, um, but very sophisticated prompts and then chains of prompts so that as a user, you don't have to go through that process to get these sorts of outputs. 

Got it. Thank you, that's super helpful. Great, okay, so next, I want to just mention a few of these Harvey workflow tools. These are slightly different, so these are tools that again are like purpose-built for specific functions. 

Certainly, I won't dive into all of these, but tools for review of litigation transcripts—so trial transcripts or deposition transcripts, document comparison, substantive comparison of documents, whole document translation, and then certainly want to highlight this Redline analysis tool. 

So I'll jump into this here. This allows you to upload Redline documents, either PDF redlines or Word track changes, and have our Harvey either produce an issues list for you in the pre-specified format, again with really no prompting, or you can query this generally. 

Here, um, some amended set of corporate bylaws, and then for the prompt just said you represent a prospective investor. Analyze these changes, flag any that might be of concern from an investor standpoint, and you'll see that Harvey has done that here. 

It's extracted the changes that are likely to be of concern for an investor, and then it's going to cite back directly to the language within the document here. Good example of sort of the legal specificity of the Harvey platform in terms of the ability to read and analyze red lines. 

Okay great, the kind of last point that I do want to mention here just within the Harvey platform before we jump to the Microsoft Word ad in is the library feature. 

So we've talked quite a bit about prompting and workflows and things like that. We are again building more and more of these agentic workflows, but prompting and the flexibility and the power that prompting offers with Harvey's models is, we think, really important and is always going to be a part of the platform. 

A lot of folks are interested in understanding how they can get better at prompting and learn how to prompt and that sort of thing. We provide an examples Library here. We're constantly updating this, and you can filter this across practice areas. 

It's a great way to get a sense of how to use the Harvey platform. You can open up any of these examples. They include sample documents and give you a great...
sense of how you can be using the platform may not have thought about using Harvey to produce cross-examination questions in an expert report but Harvey will do that for you. So great way to get a sense of how to use the platform and then we also do this at the level of the actual interface. 

You can load prompts and templates and you can do this both using sort of Harvey's own specified prompts and templates or you can create prompts and templates that are specific to your organization or your practice area. Also, I think the Harvey prompts, the pre-loaded prompts, are such a great training tool actually for people in how to actually prompt properly and what good prompts might look like. 

I think that's right, yeah. You can see even the way that we lay some of these out. They're bracketed for the user to be able to go in and edit them a little bit. So yeah, you can think of them as helping you get to that first step, right? They're like precedent. 

Yeah, so it does help you track usage and so on in the platform from an administrative perspective. But let's jump in and look at the word add-in. Yeah, definitely, yeah of course you have the ability to track your history. I'll just mention to you like very sophisticated controls from an admin perspective in terms of data retention. 

Ability of admins to sort of review usage statistics and data across the organization. We offer a client matter number tracking and sort of administrative tools for folks who need to manage the use of AI tools for specific client matters. Lots to be said on the administrative front, but we can save that for a deeper dive. 

Okay, let me change my window here and we will show the Microsoft Word add-in. So the add-in, which you can see here on the right-hand pane, allows you to language directly in a Microsoft Word document. 

So the way that this works is by letting you select the language that you're interested in editing and then you can edit it in two different ways. You can either provide instructions to the models or you can provide precedence. We think about this the same way that you might give instructions to one of your colleagues. You might just tell them, like, hey, add a particular term or make this particular term more favorable to one party or the other. 

Or you might actually just give them a precedent and say, hey, so you can see this kind of an action here. So I'm working in a credit agreement. I've selected the ma definition. Starting with the instruction-based editing, I can just say something like make this more, and you'll see that Harvey's going to make suggestions on the ways to revise this language. 

You can review these different suggestions and see which ones you'd like to apply. Let's see, include an adverse effect resulting from under any other material agreement. Great, we hit apply and Harvey's going to go ahead and then make those changes and track directly in the document again. 

This is powered by Harvey's legal specific models, so you'll notice that these suggestions are really quite sophisticated and carefully tailored to the content of what you're trying to edit here. So that's the way that the instruction-based editing works. I'm going to go ahead and just reject those changes just so we have a blank slate here and then I'll show the precedent-based editing. 

So we just click over to precedent-based here. I've uploaded another credit agreement as a precedent, and we've just highlighted this Mee definition which we want to edit. Just hit make suggestions, and you'll see that what Harvey's doing here is it's reading this precedent document. 

It's identifying the relevant language in that precedent, and then it's going to make suggestions here based on the precedent to bring this into conformity. For instance, specify that the financial condition refers to financial condition determined in accordance with GAAP. Great, we hit apply and Harvey will make those edits in track changes here. 

And again, as always, you have the ability to view references, so you can go back and check within the press of where these suggestions are coming from. That's great, Jake. Thank you so much for showing us all of this. This is fantastic. I think for a lot of people, it would be really eye-opening just to see the breadth of Harvey and the various problems that it really can solve or the ways that it can help lawyers. 

I know that's really the focus, is on helping lawyers. It really feels like that, so thank you so much for sharing with us today. It's great to hear. I'm an attorney myself; we have many attorneys here at Harvey, as we've talked about, and so we're very passionate about anything that we can do to help improve the profession and improve the value that the work that attorneys are doing. 

Glad to hear that. Great! We will put a link at the bottom so anyone watching can reach out to Jake and his team at Harvey if you want to learn more. Jake, thank you again, and to everyone watching, thanks so much for coming along to be...
LT product briefing and we'll see you next time.
