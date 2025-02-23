---
layout: post
title: "Getting to know Temporal"
date: 2025-02-06 00:00:01
categories: podcast
tags: [podcast_script]
---

[Music] 

Hello and welcome to this session. We're really excited to have you here today. What we want to provide is really a basic foundational understanding of Temporal, the technology, and how it's used with bi-developers across lots of leading organizations all over the whole planet.

I'm joined today; my name is Jim Walker. I'm the VP of product marketing here at Temporal, and I'm joined today by two of my esteemed colleagues. I'm going to let them introduce themselves, so Max, let's start with you.

I'm Maxim; I'm a co-founder of the Temporal project and now I'm the CEO of the company. That's right, my ultimate boss. 

Uh, I'm Rylan Goldstein. I'm the head of product here at Temporal and I'm an early employee of the company. 

Yeah, I mean, how long have you been at Temporal, Ryland? 

Uh, like three and a half years—a lifetime, a lifetime in Temporal terms for sure. So between the two of you, I think we have more knowledge than almost anyone on the planet around Temporal. Well, there's a couple of other people that have a lot of really great knowledge. 

What we'd like to do is just run through a baseline understanding of kind of where it fits. We'll talk a little bit about the history of the project and how Max started doing all this work and then a little bit about some customers. 

Um, so just to get started, as application architects and as developers, we draw pictures, and often these pictures are very, very generic. On this slide, you'll see a very generic understanding of a system. This is just a simple order flow diagram. 

Um, and what happens is we design the system and then ultimately, developers, operators, and architects have to go out and implement these things. We’ll take this, cut it down into microservices, we'll use queues, we'll use timers and databases. What ultimately gets delivered in production is fairly complex. 

And it may seem simple at its surface layer, but ultimately inside what we're building, the complexities really start to compound. Honestly, as you add more features, they get exponentially more complex. Right? 

So while these new architectures, these modern architectures kind of promise efficiency and ease and a simple way forward to implement these applications, they often present a lot of different problems because what can go wrong will. A database can fail, a service can go down. I mean, I've spent years in the Kubernetes space, you know, with pods coming up and down all the time. Queues can back up, and ultimately, you know, APIs time out all the time. 

And how do you deal with these things as a developer? I think in a pure state where none of these things go wrong, things are pretty simple to deal with. But when things go wrong, we’re set dealing with rollback or retry policies and these sort of things. 

I think people struggle with this sort of stuff, and ultimately it detracts away from doing what we really want to do, which is basically deliver the business logic that we've been asked to deliver. Even when things go right, we still have problems in these complex architectures. How do you share state across various different things? 

Maybe not everybody thinks about state, but where am I? Do I have insight into this overall process for each person that's being executed across this complex flow? Can I perform transactions to a single database across multiple different services? Maybe you want to do that. 

Um, you know, how do you implement long-running timers? How do you wait a month for something to happen, let alone a month—maybe even three hours for that matter—or even 10 minutes, or even a minute? 

Um, are we just putting pauses in code? You can't really pause code, so these things get really complex even when everything is working well. 

I think ultimately, as you add more features, as you add complexity to the application, as the architecture expands, it gets even more difficult and even more complex. If you think about retries and rollbacks across three services, what happens when it's 15 or 20 or 30? The complexity just really compounds. 

As you scale and you get more customers, reliability can suffer as well because there are just more components that can go down. Ultimately, I think developers are left dealing with this; they get caught holding the bag because they're the ones who have to develop all this stuff, and they lose productivity. 

It gets more difficult to deliver features faster. The reliability of our systems, as we mentioned, kind of goes down, and again I’ll come back to this really important point: it's really, really difficult to get this kind of end-to-end insight across all the process flows that are going on in whatever the system is and the application that you're in. 

Sure, we may have some observability and some tracing across the services, but what's really going inside that service, and how do we know what's actually happening end to end? 

Ultimately, over the past couple of years, I've seen this happen. Anybody could go to microservices.io and look at some development patterns on how people are actually doing these things. 

Development patterns are interesting, and I think it's the natural inclination of developers to share and figure out how to do this over and over again. Some of these patterns, like a dead letter box and a saga pattern, they’re fantastic, but often they'll serve only one part of the problem. 

I think even further complicating the issue is that we leave it to humans and each developer to implement them in their own way, so they're also prone to errors or complexity. As we move on, I think ultimately there is a better way to do this beyond just kind of development patterns, beyond just kind of manually coding all these things. 

One of the reasons I joined Temporal was exactly this. I think this is a problem that I was aware of when I was a developer, but I never knew there was going to be a way to actually figure this out. In fact, I think I stopped being a developer because I hated doing all this chaos—the stuff that I didn't want to do. I wanted to focus on business logic. 

When I think about Temporal, I think about it as a way for developers to build for the single positive state that they want. What is the way I want people to actually flow through my application and not worry about the retries, the rollbacks, the queues, the timers? 

Temporal really abstracts away all of that. Um, we allow developers to code in whatever language—well, not whatever language, but we have SDKs across Go, PHP, TypeScript, Java, Python. Guys, correct me if I miss one in the end there, but .NET, that's coming soon. That's right.

Um, you know, we allow you to code in your language, define this workflow, which is this end-to-end kind of positive state that you want in your language, and then instrument your code using an SDK to interact with Temporal. 

So it’s really about abstracting away this complexity so you can focus on what matters, and it has a fundamental impact on the way that we think about applications. I like to think of it as almost a paradigm shift because I think, you know, the developers I know that have used Temporal, it’s like once they see it, they can't unsee it. 

It is really a different way of thinking about your application. I think it's an incredibly interesting way to approach software development. 

Um, but I'm joined by—you know that's my own understanding of it. I've been at the company and introduced to Temporal about eight months ago, but I'm sitting with the person who actually created the project. 

Max, this is not your first incarnation of this approach, is it? I mean, there's a history here of you doing this for quite some time, right? 

Uh, yes. It took us probably 15 years to get where we are. It's a long time. So where did it start? I mean, how long ago was it 15 years, as you told me? But where did it start for you? 

I started probably—I joined Amazon in 2002. Yeah, and back then Amazon was I think one of the first companies which decided to kind of break the big monolith into smaller pieces, which they called services. Now we call them microservices. Back then it was all services.

The reason they did it was not because of some kind of abstract desires or architectural principles; it just was taking 45 minutes just to re-link the binary of the Amazon website back then. So imagine the developer experience. 

And I think the clean build of that binary was 18 hours. Wow! So the reasonable solution was to break it into pieces, and then these pieces had to talk to each other. I was part of the infra team, which was responsible for all the messaging between those microservices on the back end. 

At the end, I was checked out for the service—the storage for queues—and later it was adopted, actually, as a simple queue service. AWS SQS uses that as a back end. As somebody who was responsible for practically talking to every team that was adopting our technology, I ended up getting exposure to a lot of use cases. 

It became pretty clear that queues are actually not a good way to link services together if you have complex transactions. Amazon Fulfillment flow is non-trivial. Even back then it was non-trivial. I cannot imagine what it is right now. 

So we actually kind of started to think about how to solve that, and orchestration became a pretty clear answer to that. Amazon had multiple iterations on that, which resulted in Amazon Simple Workflow Service (SWF), which is still publicly the best service. 

But we had two internal versions of that before, and then later, I co-founded Temporal with Samer, who worked with me on a simple workflow at Microsoft. Long story short, Microsoft has Azure Durable Functions which are based on the same idea, and later we came to Uber. 

One of the projects we started was Cadence, which grew from zero to 100 use cases within three years. It was open source from the beginning, and it started to get popular—like adoption outside of Uber. We started a company three and a half years ago, and we created the Temporal team as a continuation of a fork of Cadence. 

We added a lot of new features, and now we have... Sorry, but I lost track there. How many different incarnations were there? 

There were five different incarnations. There were some others in between, and also, it's not only about back-end services, it was also about client-side experiences. 

Yeah, and we built at least probably four different frameworks for client-side. The first ones were kind of more traditional, like creating this DSL and instantiating objects with a syntax tree of things. You have a sequence; you have split and join; you have all kinds of... There are like a million incarnations of those. 

It worked, but I quickly realized it was not a very good developer experience because it was much harder to understand and troubleshoot and so on. So we ended up implementing what we call the AWS Flow Framework, which was the first idea, kind of similar to what Temporal does. You just specify your logic and code directly without any intermediate representation. It didn’t... We didn’t nail the developer experience.
707.7 - 4.4: experience probably not many people know about simple workflow but later Microsoft Samara did I think an awesome job with dotnet I think framework like a weight I think and a tuber we did go SDK which was actually synchronous and I think we kind of nailed the developer experience while doing that well.

It's interesting I think it's the kind of the core principles that when it is Step functions as well and I think there's this you know it's by my experience as far as I talked to you know people users of this and I think there's been more than just the five or six that you and Samara have done I think everybody's trying to solve this problem in some form or fashion I think you know once you see what the problem is it's like oh gosh how do I how do I deal with this you know I think what you all did at Uber was amazing and you know creating the Cadence project and open source m T license and then starting a company.

What makes it right this time? Um you know like this incarnation of temporal by the way I'm an absolute believer as well right so what why is it right this time around can I try to answer it for you first that'd be great it's right this time because it wasn't right all the other times interesting that's good I like the one most constant message that I've heard from him is that like when people are asking you know like why should we just assume you know all this stuff and you made all these right decisions he's like well I didn't initially that's right first time I made the wrong decision and now I have this long list of decisions that I should make correctly the next time I have to make them.

Yeah so that's at least what it seems like for me. Yeah I think the idea is that it's not like we dreamed this overnight it was just a lot of iterations and a lot of different mistakes and certain things we took us for up to five or six years just to come up with the right abstraction and I think just as a project why I think we've got to try it is that first we've got developer experience I think correctly and it was a big deal at the same time we built a lot of projects like that they focus on developer experience and forget about the back end right but because we built simple workflow service before as AWS service so we built this as open source project as a highly scalable practically cloud-based architecture from the beginning and it was practically so far we couldn't find the point when it breaks.

Yeah it can saturate almost any store practically any storage we oriented with 300 Cassandra clusters we have our custom storage which is even more performant and we always able to create a new database to 100 and then and the third thing was because we built a tuber as an open source project and uh initially we didn't get like huge adoption but we were running hundreds of use cases high frequency is a tuber uh so practically we kind of nailed the operational uh excellence yeah because we had to run it for Mission critical use cases and so it means that we kind of got developer experience we got it as open source and we run it at scale at the large company and then uh we've got adoption from external companies which was amazing because like one of the first users were companies like Coinbase, Airbnb, Box, uh like DoorDash and uh these companies uh certain HashiCorp and these are not like companies which would take these things lightly but they trusted us because again because all of these reasons.

Yeah I think it's really interesting and I you know I I concur on the developer experience for this is just fantastic you know being able to do this across multiple different languages you know polyglot applications that we have it's right and I think if you're going to change the model you kind of have to do it across all you couldn't do this in a single language you know what I mean and I think the operational kind of getting it to a point where it's great.

Um this is all amazing uh do you want to show us the technology Max? I mean you want to give a quick demo okay yeah let's do it. I I've been in very few companies where I just asked the CEO to do a demo uh but that's our best demo person right there because he built it uh so first we run the temporal Service uh which kind of beckoned and usually it's a large-scale distributed system but you can run it as a single binary with an in-memory database for developing purposes.

How can someone get that binary if they wanted it? Yeah you just to do Brew install temporal and if you're on Mac and in automatic there's a release on the GitHub and you can curl it and install it like a normal Linux package. So I want to demo a very simple uh money transfer use case so practically we have two operations we want to withdraw and we want to deposit money back and if you want to write that like the business logic of that is just two lines of code right so we call this draw and we call deposit.

Uh obviously nobody writes code like this uh in normal life like at least in production because obviously if something fails in the middle here uh your process crashes and you lose money which is actually not a good idea probably if you're a bank. So the interesting thing that you actually can write like production code like this with Steam portal so the whole idea is that temporal guarantee is completion of this code we call it durable execution uh of workflow kind of interchangeably just for kind of Legacy reasons but any workflow code is guaranteed to complete and keep running in presence of any failure.

So it means that for example if a failure happens a process crashes after line 35 here that uh temporal will automatically move this state of this particular manual transfer to a different machine and recover that and it will keep running so as engineer you don't even notice uh in like as a programmer that there was a failure so it's very powerful because you practically do need a huge class of issues that disappears you don't even need to think about process crashes.

Other things if you call this draw service and this service is not reliable uh temporal will automatically retry that as long as necessary so there is no limitation of duration of retries unless you specify it explicitly in the configuration options and all this retries are fully configurable it's exponential retries and so on and there are a lot of features like rate limiting flow control and so on which I don't have time to spend on. 

So uh if you want to do this money transfer how would you initiate that? So this is actually workflow code and it implements an interface in this case transfer interface you see I'm in Java uh as we said we have uh SDKs and a bunch of other languages but for Java you would not take a workflow is this workflow interface and Main Muffler method with workflow method otherwise it's just normal Java code. 

So do we implement this in a way that was meant to be very adhering to temporal or did we try to marry this to the actual idiomatic way that like a Java developer would implement something in a framework themselves? No this is just normal Java right but it's nothing magical but you can use all the Java constructs. 

So for example if you want to say okay what happens if withdrawal succeeds and deposit fails and in them I didn't do that but then it will just use normal uh exception handling from Java right and you would run compensation here like let's say put in money back on the original account or you can implement Saga full Saga pattern here if you want to. 

So uh but this is like just normal Java code if you want to have a loop if you want to have if like it just you can use all object and design you can move with another method to even class so just there is no limitation what you can do here there are some rules but like you have the full power of Java when implementing this code.

So let's just try to run it and so uh the idea is that there is this backend service which I just started before uh kind of we have it running in this window but and also uh when you start the workflow you actually call into that service uh so the only requirement is that temporal services run when you're starting that the way you would start it you'll connect to this service all this kind of code is just to connect to the service and then you will uh just call uh start on that transfer method which we just described here.

And when it will start is accepted uh this process will exit and transfer will continue so let's request the transfer. It will take some time mostly because it will try to recompile also grade always not the fastest thing in the world. 

Okay we request a transfer we can see that it printed uh okay we don't even want to see what printed imagine it's a distributed system with thousands of processes running uh temporal provides UI so we can uh this is again uh this local binary which I was running or includes UI it just hit it on the localhost and we can see that there is an instance of this workflow running by the way this workflow ID is assigned by you so it's usually a business level identifier and you can use NV granting uniqueness it's a fully consistent system so you'll be guaranteed uniqueness of workflows by ID so things like idempotency and uniqueness it's easy to guarantee because you don't want to transfer with the same ID going at the same time right.

And do users have any control over that behavior in terms of the ID usage and reusage policy? So you cannot have two workflows open at the same time to save ID ever it's guaranteed but after it's closed you can choose they want to run workflow again with the same ID or they want to run only if it failed or never run it so you can say never allow running again if it completed or failed for example.

So here we will see that workflow we have some workflow with this ID which we started and we can see input arguments of that so these are arguments I passed as parameters uh there is no result because it's not completed yet and it will say there is no walk around why because in temporal temporal doesn't run your code even workflow code it's a citizen external process and you deploy this process anyway you want to just part of your service it's like the way you would for example have your process talks to a database and this is your process talked with temporal backend and workflow code is not running this way this workflow is not making progress more like queued up in the system.

So let's run the walker. So I have kind of uh and also in temporal we have a separation between workflows and activities so workflow would be the code which is uh as I said durable execution is fault tolerant survives failures and activities just code which talks to external services and it can fail anytime and we just usually retry it the work focus is doing the orchestrating whereas the activities are the tasks yes it's a workflow it's orchestrator right it orchestrates those.

So we started to run a walker so we can refresh and also just wanted to clarify it makes it sound like what you're saying is that temporal server itself is never running your actual code this is always taking place on the worker and just events are transparently communicated back and forth on your backend. Yes it's a temporal services more like middleware right it's kind of it's kind of encompasses queues and databases and all of that so from your point of view your application runs both workflow and activity code and connects to the backend server for State Management and queuing and also durable times and so on.

So now we see what happened is that we have a deposit pending activity and it means like how this draw activity probably completed and we see that it's already executed five times and there is a failure going on so we can go and check on that failure and help an account implementation line 36 and let's find account implementation line 36 and yes and there is an exception here actually put this exception just for the demo purposes but we can see that this activity has been retried and
1432.38 - 4.14: deposit so let's fix this in real life. 

1434.96 - 3.9: you would just probably fix the bug in your code and always fix this service because 

1436.52 - 4.56: maybe there is some other issue is that and redeploy. In this case, we just 

1441.08 - 7.74: restart the, uh, uh where is it 

1443.059 - 8.221: account activity worker. Yeah, here it is. 

1451.28 - 3.3: let's just restart this process. I use a 

1453.5 - 3.659: new code and let's go back to our UI and see what 

1457.159 - 4.26: happens. So, at this point, 

1459.32 - 4.8: temporal server has statefully and 

1461.419 - 4.981: durably tracked the position where my 

1464.12 - 4.32: code is executing in the workflow and 

1466.4 - 4.139: essentially it's just trying to execute 

1468.44 - 3.96: this activity right now, and the activity is 

1470.539 - 3.421: obviously failing. So, what you're 

1472.4 - 3.48: trying to do right now is just fix that 

1473.96 - 3.839: activity implementation, so the next time 

1475.88 - 4.32: it retries, it'll complete. Yeah, and 

1477.799 - 4.921: also, obviously I can also kill the 

1480.2 - 6.479: workflow worker, which holds the workflow 

1482.72 - 6.0: code, so we can restart that and we will 

1486.679 - 5.221: see that it will recover to exactly the 

1488.72 - 5.64: same state it was, so it will adjust. It 

1491.9 - 5.639: will, like both local doesn't even need 

1494.36 - 5.819: to know it was restarted. Right? So we 

1497.539 - 5.941: were at the workflow with the line 

1500.179 - 5.521: uh, uh, 38, and right now probably it will 

1503.48 - 4.559: just come already completed because, uh, 

1505.7 - 4.68: it retried the activity. Yeah, so yeah, 

1508.039 - 4.38: the workflow is completed and we can go back 

1510.38 - 3.539: and check. Okay, we executed this, uh, 

1512.419 - 3.901: activity. 

1513.919 - 4.74: Uh, first activity withdrawal. It was 

1516.32 - 4.859: scheduled, uh, at this time. These 

1518.659 - 7.26: arguments of this activity it was 

1521.179 - 7.261: started by this process. So you see every 

1525.919 - 5.401: everything which happens with what 

1528.44 - 6.839: happened. Then we've got activity 

1531.32 - 7.2: uh, deposit scheduled, and this activity 

1535.279 - 5.821: was executed eight times. It failed seven 

1538.52 - 4.68: times. This is stack trace and exception 

1541.1 - 6.059: why it was failing, and then it completed 

1543.2 - 6.18: at some time, right? And then the workflow 

1547.159 - 3.421: completed. So, think about it. I do need to 

1549.38 - 3.72: restart workflow. I didn't have to do anything. 

1550.58 - 6.3: I just fixed my bug and the system just 

1553.1 - 5.04: recovered itself and he just won. But if 

1556.88 - 3.299: you have like a million of those running 

1558.14 - 3.24: at the same time, it's pretty cool that 

1560.179 - 3.36: you don't need to do anything. It just 

1561.38 - 4.08: code recovers automatically in the presence 

1563.539 - 4.201: of process crashes and so on. You don't 

1565.46 - 5.28: need to do anything. As we saw, that quote 

1567.74 - 5.6: doesn't contain any, it doesn't need 

1570.74 - 5.4: to contain any error logic related to 

1573.34 - 5.56: intermittent failures or outages. This 

1576.14 - 4.139: area located here only happens if you 

1578.9 - 3.54: have business level failure. Right? For 

1580.279 - 4.5: example, deposit is not possible because 

1582.44 - 4.14: the account doesn't exist. But at the same 

1584.779 - 3.601: time you don't need to handle a 

1586.58 - 3.02: situation when process crashed because 

1588.38 - 3.659: it just 

1589.6 - 3.579: handled automatically. I don't want to 

1592.039 - 2.52: spend too much time on that. But for 

1593.179 - 3.421: example, we also have a unit testing 

1594.559 - 3.48: framework, and it means that you can test 

1596.6 - 3.78: these workflows even if you have long 

1598.039 - 3.961: grinding. For example, you can 

1600.38 - 4.26: absolutely write production code, which 

1602.0 - 4.4: is workflow.sleep and say something like 

1604.64 - 5.88: duration 

1606.4 - 6.22: of this, right? And sleep like for three 

1610.52 - 4.38: days here, and it's a blocking call. So, 

1612.62 - 4.039: it's okay for the process to, for example, 

1614.9 - 3.96: sleep for three days and then continue. 

1616.659 - 3.701: And then you can unit test it in 

1618.86 - 4.559: milliseconds because we automatically 

1620.36 - 5.58: skip time. For example, okay, uh, so just to 

1623.419 - 5.341: review that you can write normal code, 

1625.94 - 4.859: and you have full visibility into this 

1628.76 - 4.56: code processing, and everything is 

1630.799 - 4.081: recorded, and you see all input 

1633.32 - 4.32: and arguments, and this code recovers 

1634.88 - 6.14: automatically after any intermittent and 

1637.64 - 5.7: deployment or failure. 

1641.02 - 3.519: Very, very short introduction. It's a 

1643.34 - 2.699: short introduction, but it's very 

1644.539 - 2.88: powerful as well. Max, and I think you 

1646.039 - 3.901: know some of the things. It's like, yeah, 

1647.419 - 3.901: there's retries, rollbacks, we've saw a 

1649.94 - 4.14: bunch of stuff. I mean even timers were 

1651.32 - 4.62: in there at the end, right? I mean, I think 

1654.08 - 4.26: schedules are interesting. Why are people 

1655.94 - 4.14: dealing with cron today? Like, you use 

1658.34 - 3.36: temporal to run things like that, and 

1660.08 - 4.32: this was just money movement. Right? This 

1661.7 - 3.959: was like a bank transfer, which you know 

1664.4 - 3.06: I think is one of those ways in which 

1665.659 - 3.961: people use temporal today. You know, 

1667.46 - 4.26: high-end transactions where like a bank, 

1669.62 - 4.38: like you said, like that can't fail. Man, 

1671.72 - 3.6: it's money, right? Like you, it's got 

1674.0 - 3.059: to work right. It's got to be reliable. 

1675.32 - 3.359: It's got to be durable, I think, is the 

1677.059 - 3.421: word that we like to use around temporal 

1678.679 - 3.6: a fair amount. Um, you know, but like this 

1680.48 - 3.66: kind of durable transactions is kind of 

1682.279 - 4.14: one thing I think people use it for. Like, 

1684.14 - 4.139: say, you know, business processes. I don't 

1686.419 - 3.36: know. I'll ask you. I know Rylan's one of 

1688.279 - 3.541: his favorite use cases is more of a 

1689.779 - 4.921: business process. You know, people use it 

1691.82 - 4.62: for like inventory management or, uh, you 

1694.7 - 3.42: know, you just, just understanding things 

1696.44 - 3.479: and having insight into things. I've 

1698.12 - 2.88: even seen, you know, I think one of the 

1699.919 - 3.0: common use cases is like 

1701.0 - 3.299: infrastructure deployment. 

1702.919 - 4.14: Um, you know, I've seen people end to end, 

1704.299 - 4.86: you know, bring software or, you know, 

1707.059 - 4.5: bring hardware up, run software, bring the 

1709.159 - 3.541: hardware down. Like it's incredible, like 

1711.559 - 3.961: some of the things that people are doing 

1712.7 - 5.4: with temporal. Um, Rylan, you've been on 

1715.52 - 5.159: the front edge of a lot of, uh, people 

1718.1 - 4.079: using temporal, and you've collected a 

1720.679 - 4.021: fair amount of user stories. What's 

1722.179 - 4.561: your favorite user story? I think it's 

1724.7 - 3.3: impossible to probably just choose one. I 

1726.74 - 3.299: will say that one thing I want to just 

1728.0 - 3.419: make sure I don't, uh, forget for, you know, 

1730.039 - 3.421: what Max is kind of showing there is 

1731.419 - 4.561: that like temporal itself almost does a 

1733.46 - 5.219: disservice to its own technology by 

1735.98 - 4.26: making things look so easy and so much 

1738.679 - 3.721: more simple than they actually are. And 

1740.24 - 4.319: so even just something basic like, like 

1742.4 - 3.899: implementing, you know, retry statefully, 

1744.559 - 3.301: that's an immense amount of code. Like 

1746.299 - 2.941: any developer has had to do that, no, that's 

1747.86 - 3.059: daunting. And like that's just something 

1749.24 - 2.819: that's implicit in the demo that you 

1750.919 - 3.481: just saw. And so I just wanted to make 

1752.059 - 4.201: sure that that was highlighted there in 

1754.4 - 4.139: terms of the users. I'll choose like a 

1756.26 - 3.659: couple. Um, I think, you know, some of them 

1758.539 - 2.88: are very exciting because they're 

1759.919 - 3.12: products that I use, and the fact that 

1761.419 - 3.601: they're a user of ours is just cool in 

1763.039 - 5.581: itself. And so like, um, one example in 

1765.02 - 5.279: that, uh, area is Yum Brands. They're the 

1768.62 - 4.2: company behind, you know, a lot of major 

1770.299 - 4.081: fast food establishments that probably 

1772.82 - 3.06: almost everyone has eaten at once or 

1774.38 - 3.84: twice in their life. And I'm someone who 

1775.88 - 5.46: eats like, hey man, tacos, pizza, and 

1781.34 - 3.3: chicken. I'm in, exactly right? And so it's 

1783.26 - 2.82: uh, it's hard not to say that they're, you 

1784.64 - 3.6: know, an amazing customer just on that 

1786.08 - 3.9: basis as someone who spends a lot of 

1788.24 - 3.419: money at their establishments. Um, so I 

1791.659 - 3.481: think, you know, the other part I love 

1793.399 - 4.38: about that is kind of going back to this 

1795.14 - 4.019: idea that things can look very simple or 

1797.779 - 3.0: sound very simple, but in reality, not be 

1799.159 - 3.061: that way. You might think that a process 

1800.779 - 2.941: like ordering food or having it 

1802.22 - 3.9: delivered isn't that much stuff. There isn't that much work there, but 

1803.72 - 4.98: it's clear from, you know, the 

1806.12 - 4.14: presentations that people have given, 

1808.7 - 3.0: like Matt from brands, that there's an 

1810.26 - 3.0: immense amount of complexity there. You 

1811.7 - 3.18: could spend days just talking about the 

1813.26 - 3.779: complexity of delivering someone's food 

1814.88 - 3.6: that orders, you know, a Taco Bell. 

1817.039 - 2.88: And so I think that, you know, the fact 

1818.48 - 3.059: that we took something that's so 

1819.919 - 3.301: meaningful to a lot of people's lives 

1821.539 - 3.181: and we were able to, you know, make it 

1823.22 - 3.12: deliverable at such a high scale and 

1824.72 - 3.78: with such a great developer experience, 

1826.34 - 4.079: that's super great and exciting for me to 

1828.5 - 3.299: see. I think another type of customer 

1830.419 - 2.88: that's so, so exciting is one where I'm 

1831.799 - 3.901: like a very strong user of their 

1833.299 - 4.081: products or, you know, I really like the 

1835.7 - 3.479: brand they've created, like Datadog. 

1837.38 - 4.44: Um, who for like a lot of developers is 

1839.179 - 5.1: like a really representative company of 

1841.82 - 4.26: modern cloud development, modern cloud 

1844.279 - 3.541: trends. Uh, and so, you know, Datadog is 

1846.08 - 3.42: unique because they're not just going in 

1847.82 - 3.959: on temporal for one use case. At this 

1849.5 - 4.08: point, they are probably one of the most 

1851.779 - 3.661: aggressive users of temporal. Um, even 

1853.58 - 4.38: beating us out in a lot of ways in terms 

1855.44 - 3.9: of how they adopt and use the technology. 

1857.96 - 2.88: And so, you know, it's amazing when you 

1859.34 - 3.059: have users that actually are teaching 

1860.84 - 3.18: you about your own product on like a 

1862.399 - 3.421: regular basis, and you know, not just 

1864.02 - 4.019: teaching us, but contributing and you 

1865.82 - 4.5: know, helping us deliver things like the 

1868.039 - 3.841: temporal CLI experience and all of that. 

1870.32 - 3.599: And so I think Datadog has been like a 

1871.88 - 3.779: wonderful partner, but also like one of 

1873.919 - 4.201: the most exemplary users and contributors 

1875.659 - 3.9: to everything we're doing here at Temporal. 

1878.12 - 3.179: Yeah, and the taco, I'm sorry, but I 

1881.299 - 3.0: got to go back to Yum Brands. The taco 

1882.919 - 3.36: one is the one that actually sold me on 

1884.299 - 4.201: temporal in the very beginning. It's very 

1886.279 - 3.841: simple to understand because I think 

1888.5 - 4.08: everybody's gone through that experience. 

1890.12 - 3.6: You walk into a store, you go to a kiosk, 

1892.58 - 2.52: you hit the thing, you order something, 

1893.72 - 3.0: the funds get held for a second. Your 

1895.1 - 3.72: credit card doesn't get charged until 

1896.72 - 3.839: you get that product, right? So that 

1898.82 - 3.66: happens. It goes to the cloud, somewhere 

1900.559 - 3.36: a central server, it goes back to the store. 

1903.919 - 3.601: A chef picks it up, pushes a button, makes 

1905.36 - 3.3: the taco, pushes a button when they're 

1906.02 - 4.08: done, puts it on a window. The guy up 

1907.52 - 4.92: front grabs it, puts it to the front, they 

1909.47 - 3.72: push a button, and then your number comes 

1910.1 - 4.799: up, and Ryan goes and grabs his taco. And 

1912.44 - 5.58: then you get charged. The amount of 

1914.899 - 4.741: complexity in that small little—what was 

1916.22 - 2.18: that, ten seconds—is intense. And all 

1918.02 - 3.899: of the things that can go wrong in that 

1919.64 - 3.659: equation is incredible. You know, that's just 

1921.919 - 2.821: one time. Do it a million times. Do it a 

1923.299 - 2.701: million times. And like if you think about 

1924.74 - 2.819: like the Taco Bells, like they're in all in 

1926.0 - 3.72: cities with amazing Wi-Fi. Like a store 

1927.559 - 4.5: can be completely offline. And when we 

1930.059 - 3.72: talk about durable execution, right, this 

1932.059 - 3.72: ability to kind of withstand pressure or 

1935.779 - 4.38: damage and whatever that is, and your 

1938.0 - 4.44: system continues no matter what. 

1940.159 - 3.9: It's incredible, an incredible use case 

1941.14 - 3.6: for them because I mean, okay, maybe 

1944.059 - 3.421: they're making 

1945.14 - 4.08: 50 cents a taco. I don't know what it is, 

1947.48 - 4.02: but like that's money in the end, right? 

1949.22 - 3.839: And so that's the one use case, by the 

1951.5 - 3.179: way, that sold me on temporal. I think 

1953.059 - 3.84: that that talk from our conference 

1954.679 - 4.321: last year, our replay conference, was 

1956.899 - 3.601: really, really just amazing. 

1959.0 - 3.24: Um, when I really think about temporal, I 

1960.5 - 4.44: think about kind of like what we can do. 

1962.24 - 4.559: That word durable becomes really, really 

1964.94 - 3.42: important. And you know, at temporal we 

1966.799 - 3.661: define this as durable 

1968.36 - 3.9: execution because of exactly that. It can 

1970.46 - 3.12: withstand pressure. 

1972.26 - 2.88: Um, you know, this is a framework that allows you to survive 

1974.16 - 3.6: damage of these complex systems that 

1977.059 - 2.941: you're building. But ultimately when we 

1978.74 - 4.14: look at that, you know, it really helps 

1980.0 - 4.62: you kind of deliver more features faster. 

1982.88 - 4.08: Um, I always like to use words. It 

1984.62 - 4.08: allows you to kind of more elegantly fail. 

1986.96 - 3.839: You know, you might still fail, but it's 

1988.7 - 3.599: going to be very elegant. And you don't 

1990.799 - 3.6: have the code for all those kind of 

1992.299 - 3.661: situations. And then, you know, maintaining 

1994.399 - 3.66: the integrity of your data and having 

1995.96 - 3.78: insight end to end to all your processes. 

1998.059 - 3.48: I think is just, you know, truly 

1999.74 - 3.24: incredible. And I think don't any 

2001.539 - 2.64: fails when you want it to fail. That's 

2002.98 - 2.939: right, because it fails on business 

2004.179 - 3.181: problem failures but not on the 

2005.919 - 3.24: infrastructure errors, intermittent 

2007.36 - 3.84: failures, deployments, and all these other 

2009.159 - 4.321: things. That's right. It's truly amazing. 

2011.2 - 3.359: And Max, kudos, like I'm honored—I 

2013.48 - 3.6: really think it's 

2014.559 - 4.381: changing the way that developers think. 

2017.08 - 3.959: And really changing the way that 

2018.94 - 4.079: people kind of approach problems. I've 

2021.039 - 3.421: seen it happen time and time again. I 

2023.019 - 3.301: don't know, Rylan, what is the best way to 

2024.46 - 4.079: get started with temporal? So I think 

2026.32 - 3.959: some of the, some of them you saw demoed. 

2028.539 - 4.02: You know, even with what Max did, I think 

2030.279 - 3.78: you know, starting with our temporal CLI 

2032.559 - 3.24: and just having a very good local 

2034.059 - 3.36: development experience. 

2035.799 - 3.901: Um, I think like, you know, philosophically, 

2037.419 - 3.961: I would say go and watch the 

2039.7 - 3.06: presentations from, you know, amazing 

2041.38 - 4.2: people like Matt McDole from Yum 

2042.76 - 5.579: Brands, uh, and you know, uh, Drew Hoskins 

2045.58 - 4.799: from Stripe and Jacob up from Datadog. 

2048.339 - 3.721: These are all people who are really, 

2050.379 - 3.0: really amazing at representing the 

2052.06 - 2.819: problems that they solved with the 

2053.379 - 3.421: technology and how it transformed not 

2054.879 - 3.421: just their lives but all the developers 

2056.8 - 3.059: lives that they work with. And so that's 

2058.3 - 3.48: at least for me what kind of has the 

2059.859 - 3.78: biggest impact. And quite honestly, all 

2061.78 - 3.66: it's open source, so you can go and start to 

2063.639 - 3.301: use temporal today. We talked a little bit 

2065.44 - 3.659: about Datadog, their 

2066.94 - 3.84: temporal CLI. 

2069.099 - 3.601: Um, you know, and if you want to 

2070.78 - 3.3: deploy on the cloud, we make it real easy 

2072.7 - 3.719: for you to run it as a managed service 

2074.08 - 6.42: as well. Uh, but you know, join the 

2076.419 - 7.141: conversation. Our team is, uh, ever present 

2080.5 - 4.74: including Max in Slack and support and 

2083.56 - 3.119: all the various different places. So you 

2085.24 - 3.359: can interact with us. We're more than 

2086.679 - 3.301: happy to work with you to get you 

2088.599 - 3.24: started if you have any questions. But 

2089.98 - 3.3: Max, Rylan, thank you for doing this 

2091.839 - 4.02: today. I hope you enjoyed it. Did you 

2093.28 - 4.079: enjoy this, Max? Absolutely awesome. 

2095.859 - 3.48: Blast. Awesome, buddy. I appreciate it. I like 

2097.359 - 3.721: talking to you guys anyway. So, yeah, 

2099.339 - 3.861: um, ah, thanks, buddy. Thank you.
2101.08 - 2.12: everybody
