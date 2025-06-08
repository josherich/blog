---
layout: post
title: "03 - Multi-Version Concurrency Control [Design Decisions] (CMU Databases / Spring 2020)"
date: 2025-05-25 00:00:01
categories: podcast
tags: [podcast_script]
---


[03 - Multi-Version Concurrency Control [Design Decisions] (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=1Od_SuOQshM)



Right, yes, all right. So today we're talking about MVCC, multi-version control. This is actually the first part of a three-part lecture or three-part series where we're gonna go into really much greater detail than we did in the interruption class and actually talk about how do you implement MVC on a modern system.

We're just against everyone's on the same page. At a high level, what multi-version control is, is not so much a specific incur to a protocol but a way of designing a database system where you're gonna maintain multiple physical versions of a single logical object in the database. By object, I'm being vague here; it could be anything. It could be a table, it could be a block of tuples, a single tuple, it even could be a single attribute within a tuple. In practice, most people just do it on a per-table basis, but again the idea is that for a single logical object that we see from the applications perspective, we're going to have multiple physical versions underneath the covers.

So what's gonna happen is when a transaction writes to an object or does an update to an object, instead of overriding the original value of the existing values, it's going to create a new version. That new version is going to have the change that we just made. Again, the idea is that we have to keep track of these versions.

All right, we'll fix that later. What we'll fix that next time. All right, to the end, the idea is that when we do an insert, it's obviously just the version that doesn't exist. We're just putting it in the database. When we do a delete or an update, we need to keep track of that we had previous versions, and we're creating a new version. Then when we try to go read that object again at the logical level, underneath the covers, the database system has to figure out what is the correct version that we need to read. It's going to be the one that existed when the transaction started.

So MVCC is not a new idea. It goes back to the late 1970s. It was first proposed in this dissertation by this guy Reed at MIT. This is sort of the first description of how MVCC would work. The first real implementation, as far as we know, was in this system called InnoDB. InnoDB is actually still around today. It sort of changed hands a couple of times; it got bought by Borland, with the old compiler company, and now it's bought by some mobile phone company. It's now been rebranded as the global database.

When Borland had it, they did actually fork the source code and open sourced it as Firebird. I said that that actually exists today. I don't know; I've never really come across anybody using it, but they're still maintaining it, still working on it. If you ever wondered why Firefox is called Firefox because when Mozilla went under and they took the Netscape browser, they were originally gonna call it Firebird, but that conflicted with this system. So then they had to rename it to Firefox.

It's interesting that MVCC is in pretty much almost every single database system that's been developed or released in the last ten years, including the two we've been working on here at CMU. They've all been using MVCC. It's super common, so it's kind of important for us to figure out how we actually want to build this resistant.

Okay, let's keep it like a jar as possible. Yeah, sorry, I'll figure out how we get a key to this. All right, so the main idea of MVCC, the benefit we're gonna get, is that the writers aren't going to block the readers and the readers aren't going to block the writers. That means that when we go and update a tuple, the writing transaction and writing thread is gonna update the tuple. Unlike in two-phase locking, where you'd have to take an exclusive lock on the tuple and block anybody from doing anything, even from reading it, under MVCC we don't have that problem.

We can create a new version, and other transactions can read the older versions without any conflicts. Now for write conflicts, we'll have a simple rule that says the first writer always wins. That's the simplest way to do this. Right? You obviously don't want that, or you can't have write-write conflicts, but this is gonna allow us to do some things that we couldn't normally do on a single version system, like have a long-running analytical query run in the background while newer transactions are updating the database.

So for read-only transactions, what we're gonna get is that it's gonna also be able to read a consistent snapshot of the database. Everybody's gonna have a consistent snapshot, and I'll define what that is in the next slide. The big advantage of this is that if we declare our transaction as being read-only at the very beginning, then we don't actually have to acquire any locks to read anything. We know we can always read a consistent snapshot.

In some systems like MySQL, you don't even acquire a transaction ID because that's centralized bottleneck handing out those transaction IDs. So you just skip that entirely. The way we're gonna use to determine what is visible to us is through timestamps. Again, we'll go over this more in detail the rest of the class. We're also now gonna be able to support MVCC or to call it time travel queries.

In a single version system, what happens when I update a tuple? The old version is gone, right? The old field values are in the log in case I need to undo it, but when queries run, they're not looking at the log; they're looking at the tuple. But with MVCC, if we don't do any garbage collection and keep all the old versions around, then some systems will lie to you, allowing time travel queries to say run this query on the snapshot of the database that existed two years ago or three years ago. A bunch of systems claim they support this; that's not a new idea either.

Postgres had this in the 1980s. You basically just don't do garbage collection and you do a little extra work to allow queries to specify what snapshot they're looking at. Postgres inferred or proposed this. It wasn't actually started getting used outside of academia in the late 1990s until they realized that this is the feature nobody wants, and you run out of disk space for it quickly. This is one of the first things they did when they made Postgres usable outside of Berkeley: get rid of this support.

A bunch of newer systems claim they support time travel queries. I have yet to see any real use case for this. All right, so we need to define what snapshot isolation or snapshots mean. In the intro course, we talked about isolation levels. We actually never really talked about this because this is something that's not exactly defined in the SQL standard, but this is something you get in some systems when you use MVCC.

The way it's going to work is that when a transaction starts, it's gonna see a consistent snapshot of the database that existed at the time when that transaction started. What that means is that you only see versions of tuples that existed that were created by transactions that committed before you started. If my transaction starts and there's another transaction that started before me but hasn't committed yet, and say they updated ten tuples or they updated five before I started and five after I started, I won't see any of their changes because none of those versions actually got committed before my first transaction started.

All right, so that's what I mean: you're not gonna see any torn read. So in actual transactions, you only see things that have committed before you started. If we have two transactions running at the same time and they tried to update from the same object, then we'll just use a simple rule that says the first writer wins. Under two-phase locking, when you do deadlock prevention or deadlock detection, there are all these different rules to say who's older, when should I wait, should I abort, who holds the most locks. Maybe I let them go before the other guy goes. We don't do any of that; that's too complex for us just to kind of run in a marine environment.

We just say whoever wrote it first, they win. If the second guy tries to write the same object, then we just kill ourselves and abort. You may be thinking, "All right, well this seems like awesome snapshot isolation gives us exactly what you want." Yes, absolutely a question.

So this question is, what I mean by the first writer wins: is it based on the time that they started or is it based on the time that they wrote? It's based on the time they wrote, so you can actually start before I do. But if I write to this tuple and then you try to write to the tuple like you have but you have to go abort, didn't think of it like it's the simplest thing you do because as I look at the tuple while trying to write it, I would see, "Oh, someone got to me before I did." You just go ahead and kill yourself; I don't know whether you're gonna write to the same thing, so how would I abort before you wrote to it?

That's an important question. So snapshot isolation is not serializable, right? I'll show you why, because it's susceptible to what's called the write skew anomaly. It has different anomalies than repeatable reads and read committed.

What's also sort of confusing about this is like if you take Oracle, for example, with Oracle, if you declare that you want your isolation level to be serializable, what you're really getting underneath the covers is snapshot isolation, but they don't tell you that unless you read the documentation. It's sort of important to understand what the distinction is, and you'll see why this is not going to be serializable. In the next class, we'll see methods actually to add additional things to make snapshot isolation serializable.

Yes, questions are faint as possible. Under this... yes, but particularly it's susceptible to this right skew anomaly, which repeatable reads doesn't have. So the easiest way to understand the right skew anomaly again, remember from the interruption class, we talked about dirty reads, unrepeatable reads, and other conflicts you can have. Right skew is actually something that's very specific to snapshot isolation that you get in a multi-version system.

The easiest way to understand this is through this simple visualization that supposedly was created by Jim Gray, the guy with two-phase locking. So let's say I have a database of marbles, and marbles can have two colors: they can either be black or white. I have two transactions that want to change all the white marbles to black and all the black marbles to white.

So, let's say these two transactions start at the exact same time. Again, under MVCC, they'll have a consistent snapshot of the database that existed when they started. Each of them has two black marbles and two white marbles. The first guy here is going to switch all the white marbles to black, and the bottom guy here wants to switch all the black marbles to white.

They go ahead and do that; there's no right-right conflicts because they updated different things, and then now they commit. But what happens now? We have two white marbles and two black marbles; they essentially just got reversed. Is that serializable? You're shaking your head no.

Why? What, you're just drinking your drink. Okay, so he said if it was truly serializable, then it would have to be equivalent to a serial ordering of the transactions, so they would either be all black or all white. In my example here, we ended up with two white and two black, so under serializable isolation, this could not occur.

So your question, your question is, sorry, you're saying that like I'm working on the assumption that I only need to update, but like these two here? Well, yes, the query is to update everything: find everything that's white, change everything that's black and make it white.

Find everything that's white and make it black. So when I looked at this, when this guy ran it, when he looks at a snapshot, he sees that these guys are white, so he knows he doesn't need to update them. When I commit them, then I end up with that anomaly: essentially reading all of the tuples for the marbles.

Yes, and only writing into the ones that are black or white. Yes, effectively wins. This issue could be fixed if they just blindly wrote into every tuple and then under snapshot isolation, you get an equivalent to the serializable since David is saying. In this case, we would read everything, find the ones we do need to update, and that's our write set.

Then we write that out. You're saying what if we just blindly wrote everything, so this guy was already white? I'll make it white. This guy was already black; I'll make it black, and then try to read that as our write set. In that case, one of them would abort, retry.

So yes, this is a thing. The issue here is this is written in English: change black marbles to white. That could mean you can infer that find the black marbles and make them white. You could, in theory, also say, "I just make everything white because that's what I want." Assuming I only have two colors, it doesn't matter what's white.

"Now make it white; make sure that it's white." Davidson would actually do that because there might be higher-level semantics about what this query is trying to do. My case is super simple, so like you can say, "Of course, if it's white, make it white, that's fine," but for in a real database, that's probably too difficult to do.

Furthermore, you also have to keep always extremes. If my database has a billion marbles, I don't want to have to write out things that I don't need to write out because otherwise, I'm better off just executing this as one thread after another.

All right, the main takeaway is that, again, I want to point out here that under snapshot isolation, this anomaly can occur. The end result is from a higher-level perspective, how we understand what the data should look like is wrong, and it's not equivalent to executing them in serial order.

Yes, so serializable means that, again, this was covered in the interruption class. Serializable means that the final state of the database is equivalent to any serial ordering of transactions. In this case, I had t1 go first, followed by t2, but I could reverse that: t2 can go first, followed by t1, and both will be considered correct.

Yes, questions? This anomaly can also occur in read committed, yes, but I don't think repeatable reads have this issue. Yes, so it's this picture here. Under the textbook definition of isolation levels and the ANSI standard, at least set, I think you still have this one path up to serializable: read uncommitted, committed, repeatable reads to serializable. But snapshot isolation is this other thing here with its write skew anomaly that cannot occur for this.

This is what repeatable reads are susceptible to, I mean dirty reads. I forget. Yes, therefore that can't happen here. You can't have a dirty read under snapshot isolation because you only see things that committed before you start. You only see versions of tuples that were created by transactions that committed before you started. You can't have a dirty read, but again, the main point of this is showing this: snapshot isolation is not something you get by default with MVCC.

Right, so like Postgres uses MVCC, but by default, you get, I think, read committed. I think the same thing for MySQL, but like if you follow the strict definition of how we're gonna do concurrency control and determine which versions are visible to us when our transaction is run.

As far as I know, you end up with snapshot isolation. In our next class on Monday, we'll see a bunch of extra stuff you can do in the database system to make this actually be serializable sometime.

All right, so the paper I had you guys read is a sort overview of the different design decisions you have to make when you build a modern MVCC system. Despite having the name "cartridge hole," you know, the words can hurt. It's all in the name of MVCC; it's more than just concurrent control.

The idea of multi-versioning actually permeates through the entire architecture of the system, so it's not a matter of saying I'm gonna pick two-phase locking, and then you're done. There are all these other things you have to be worried about, and the implications of these design decisions can be quite significant based on what your application is and what your workload is that you're trying to support.

The paper I had you guys read actually came out of this class. When I first taught this class in 2016, I wanted to cover MVCC, or modern MVCC, and actually we were building our own database system that was gonna be multi-version, and a bunch of questions came up about how should we do version storage, hash, and garbage collection.

When you read the literature and the documentation for all these other systems that are doing MVCC, they usually just say this is what we do. They don't justify why they would do certain things, and all these different systems were doing something slightly different. The idea of this paper was to go through and understand all the different trade-offs for these different design decisions, and eventually do a bake-off. Whatever turned out to be the best one was what we wanted to put in our system, Peloton.

The original name of the paper that I had you guys read was actually "This is the Best Paper Ever on In-memory Multiversion Kernel." Papers are sort of like your children; you're not supposed to pick your favorites. This one is actually one of my favorites. I had a lot of fun writing it, and I think the results are very interesting.

We literally submitted the paper with this title. The reviews were very positive, but the very first thing they said was "remove this: the best paper ever." They were quite adamant about that, so I'm like, "All right, well, I understand the point." We didn't want to be sort of flip or subjective in our paper. I still think it's the best paper, but it would always be.

So then we changed the title to "If You Only Read One Empirical Evaluation Paper on a Memodiversion Kernel, Make It This One!" That one, they didn't like. They came back again and said "this is subjective; this is your opinion. You have to make the title be more scientific or more precise."

So the third name of the paper was "We Think You'll Really Enjoy This," and it's true because I did think they would enjoy it; that's a factual statement. At this point, the paper got accepted, but they were starting to get pissed off. They were like, "If you don't change the title, we're gonna flat out reject it."

I didn't have tenure; I still don't, but I didn't have tenure. The students needed the paper to graduate and get jobs, so we capitulated. That's why the title of the paper is what you guys read; it was why we had to make it real dry and boring.

I feel like I could have fought a bit more and gotten this one, but I caved, and it is what it is. All right, forget the four design stages. We're gonna discuss are concurrency control, version storage, garbage collection, and index management.

Let's go through each of these one by one. For a concurrency control protocol, it's all the same methods you guys read about last class or we talked about in the last lecture. There is not anything special that you do differently because you're using a multi-version system.

But these are just adaptations on how you use those classic protocols to make them work in a multi-version system. In particular, we're gonna discuss how do you actually want to do this in an in-memory database system.

Again, remember for the Discordian system, we would separate the locks and the locking information from the actual tuples themselves. The extra stores, because we wanted to keep the lock information in memory, so that if the two blocks get swapped out to disk, we can still know who holds locks on what.

But now everything is in memory, so we don't want separate data structures. We're gonna try to be clever and actually store all the information we need about what's going on in a protocol, in addition to everything we need to know about the versioning of our tuples.

So we want to store anything separate so time stamp ordering, OCC, and 2PL. We're going to discuss the first and the last one. OCC, as I said, is just a variant of timestamp ordering where you just put everything in, and all your writes end up going into this private workspace that's not immediately visible.

Whereas in timestamp ordering, it will be immediately visible, but we use some extra metadata to make sure that people don't read things they shouldn't be reading.

I also think the paper from last class, we wrote that before we wrote this one. In that paper about the thousand cores, we described MVCC as sort of being a single commercial protocol that was using timestamp ordering because that's what it was defined in the original MIT dissertation. But in actuality, again under MVCC, you can use all these different approaches.

So timestamp ordering, MVTO is what we used in the thousand-core paper, but you can still use GVOL. All right, so the first thing we need to discuss is what kind of reaction we're actually going to maintain information about what we're storing in our tuples.

Every tuple is gonna have a header where you store additional metadata. For simplicity, assume it's a row store, but if it's a column store, you just have a separate column with this metadata. The way that works is there's some offset into the fixed-length data pool, and the first couple of bytes will be this metadata.

The first thing we're gonna do is have a unique transaction identifier. This is just what is the ID of the transaction that either created this version or is currently operating on a host to lock on it. Then we'll have the begin and end timestamps, and these can be used to determine the lifetime of the visibility of this particular version.

These timestamps could be logical counters, like a single counter, or they could be really high precision, like a hardware clock, typically in nanoseconds. Typically, people use a counter because it needs to sort of be in the same domain as transaction IDs.

Then we're also going to have a pointer to either the next or previous version in the version chain for our tuples. When we do a lookup to find a tuple, like say through an index, we're gonna land at the head of this version chain of linked lists that we can then traverse to either go back or forward in time to find the right version of the tuple that's visible to us.

So we need to maintain a 64-bit pointer in our header to say, "Here, here's the next tuple or here's the previous tuple." It was the next thing to look at in the version chain. Some other concurrency protocols might have some additional metadata here, followed by the actual tuple datum.

The first thing I'd point out is that these are all going to be 64-bit integers. Right, so eight bytes. In this example here, if you just ignore the additional metadata, I have storing 460 64-bit values. So I have four eight-byte integers, so that's 32 bytes I'm storing for every single tuple.

It doesn't seem like a lot, but if I have a lot of tuples, this can start to add up. If I have a billion tuples, then these four fields are gonna store underneath 32 gigabytes. That's a lot, but it's unavoidable because it's just this trade-off between compute and storage.

It's a classic problem in computer science; we've already hit a lot this semester. I could store these begin and end timestamps at a block level, right? So I have a batch of tuples can have begin and end timestamps, but now that means that when I start doing lookups, I'm spending more CPU power to go find the actual version that I'm looking for.

For this reason, pretty much everyone always stores this for every single tuple, and that's good enough because it gives you the fine granularity you need to achieve high concurrency or high parallelism.

All right, sorry, that was weird. Oh, all right, sorry. We'll cut this out. Sorry this is gonna take forever.

Sorry, all right. Yup, you have a great paper with two bowls.

Okay, Tyson, for him. All right, so the first thing to point out is that we're gonna store this in our table. The first thing to point out is that I have this sort of column here of like the version IDs. This is just for illustration purposes; we're not actually going to store this in our real system because we use the begin and end timestamps to figure out what the actual version is. This is just for us to understand this visually.

All right, yeah, there's that. So the transaction ID again is gonna be a 64-bit integer, and we're going to use that to keep track of does anybody hold the lock on this tuple. At the very beginning, it's going to be 0, then we have our beginning and end timestamps.

So this, again, is gonna determine the visibility of our version. In this case, there are some transactions that created this version at timestamp 1, and because this is the latest version of our tuple, we set the end timestamp to infinity because it's visible to anybody that comes after timestamp 1.

All right, we also need to include the read timestamp, which is the timestamp that will keep track of the last transaction that read this version. We have to use this to figure out if we try to write a new version for this tuple, if the read timestamp is greater than our write timestamp, then we know that somebody in the future read this tuple and would have missed our newer version, so therefore we have to abort.

This is a good example of another overarching theme we have throughout the entire semester: we want to minimize the amount of global state, and we want to minimize the synchronization.
Data structures we have to coordinate between our different transactions. So by recording the V time stamp within the tuple itself, I don't have to do a lookup at some specific point to see what occurred. I look at the tuple, and I merely know exactly what happened.

Alright, so now we have a transaction that comes along and says it's out its given time stamp 10. Let's do a read on A, followed by a write on B. So the reads are pretty easy, right? You check to see whether the transaction ID is zero, meaning nobody is actually writing to this transaction or to this tuple. Then, you check to see whether the visibility is within the range of your time stamp.

So our time stamp is 10, and 10 is between 1 and infinity. We know that this version is invisible to us. All we need to do now is compare and swap on the read time stamp to update it with our time stamp. Right? And the compare and swap fails. Who cares? That just means that somebody in the future or in the past has also read this. So we just check it again and try to update it. If it's less than awesome, it's okay. If we try to read it and say someone comes along with a time stamp of 11, and we do a compare and swap and it fails, we come back and see that time stamp 10 is less than 11. That's fine; we don't have to update it.

If another thread read the same thing we read, alright? So now we're going to do the write. For the write, we're going to do it right on B. Again, the first thing we need to do is do a compare and swap in the transaction ID so that we can take the lock on it. Preventing anybody from creating the new version while we are.

We do a compare and swap, set it to our time stamp. Now that simplicity means that we hold the lock on this tuple, and then we can go ahead and create a new version. Implicitly, this also means we hold a lock on it as well because assume there's a pointer from this to this, and no one can get to B2 without going through B1, but I hold the lock on B1. So no one can follow along. I can do whatever update I need here, and then now I just flip this end time stamp to be 10, and that sets the visibility of this transaction, right?

When I'm done, I do a compare and swap. Well, this doesn't need a compare and swap, but this one does. I should not need to do that; you just set it to 0 and you’re done. Now this new version is installed. If anybody comes along with a time stamp greater than 10, they will be able to see this version. Is that clear? Yes.

With what ARB? Okay, yes. Now, the read time stamp is always going forward in time. So that's the time since you're back here. The read time stamp is one. Say I do a compare and swap. The compare and swap says you have to read the value first, then you do compare and swap and say I think the value should be one. If it's one, set it to ten.

So if I do that and it fails because fifteen came along, then I would loop back around and see that now the value is fifteen. Right? Then that fifteen is greater than ten, so I don't try to update it. If it was eight, ten is greater than eight. So yes, the new value of the entire row.

Back in, I guess I'm just kind of confused. It's like, you actually go through this link. Imagine a case where, if you're reading through these memory locations, then somehow some other thread comes along and jumps around you in exactly the right order, so you read the right thing. Okay, so the question is how am I actually doing this atomically, right?

It really starts off with this transaction ID. So if I do compare and swap on this, I set my transaction ID. Then nobody else can come along and do the write at the same time I do. Right? I hold the lock on the whole thing. This is 64-bit, so I compare and swap on 64 bits.

What you were proposing is taking a lock on the entire piece of memory for this tuple, and that's essentially what this is doing, right? You can't do a compare and swap of more than 128 bits on Intel, so this thing is way larger. You can't do atomic stuff at that granularity.

By setting this, this will prevent anybody else from writing a new version before I'm done. So now you say, "Well, what if someone comes along and tries to read this?" Well, the first thing the reader would do is see that this thing is not zero and back away because it's being written to now, and I don't know what the end time stamp is going to be yet.

I don't know whether I should be reading this version or the next version they're about to create. So now you say, "Alright, well, what if the reader comes along, sees zero, and then starts doing the read?" Then this thing does ten, and while the other guy is still reading, what happens? Well, who cares, right? Because this version, this person, is not going away.

That reader who got in before I did can still read this, right? We're fine because this is not going to corrupt that data or do anything weird. It could potentially miss this new version, but then my next question is how do we actually know this, how I'm actually keeping track of this thing actually committed, right? Because all I should know was that when I updated the versions, I flipped the transaction ID to zero. That means I released the lock.

But now, how do I know whether I should, if this transaction is actually going to commit, and therefore I should actually read this version, right? So what's missing here is an auxiliary data structure that basically has to keep track of the status of transactions. So that when I go to do a read, and I say I read, in this case here, I would keep track of it. I read this version, and here you need a way to know later on, "Oh, the transaction that created that version, did they actually commit?"

Right? Because the begin timestamp was the same transaction ID that I set up here. So I'd know that transaction at time stamp 10 created this version. When I go to commit, I need to know whether they committed as well because if they don't, they haven't committed, and I read something I shouldn't have read. I need to abort.

So what's missing here, and what we'll see in the hackathon on Monday next week for Microsoft in their version of MVCC, is that there's a separate data structure that you have on the side. Think of it as a giant hash table. We just keep track of what are the different transactions that are running and whether they've committed or not.

This question is, if I did this, if I just left this as ten, wouldn't that result in somebody holding the lock on this version forever until I commit by releasing it? Now anybody can come along and read stuff because you're assuming transactions aren't going to conflict or are not going to abort, and therefore you want to use speculative reads.

Yes, so this question is: why not embed another commit ID? That's what Microsoft's going to do. There are two ways to do that. So one, you just have another commit ID, but that's another 64-bit field, and now you're adding way more space.

What Microsoft is going to do, and we'll see in the next class, is that they'll piggyback off of the end time stamp and actually use one bit in the time stamp to say this transaction actually has committed or not. And that's how they avoid having to go back and update things but that avoids having a separate column.

Alright, so I want to jump ahead to two-phase locking. There's still a lot to cover. With MP2PL, we get rid of three timestamps, but now we're going to add this recount, and the recount essentially is going to act as the shared lock on the tuple.

Right? So my transaction comes along and it wants to read. I'll do a compare and swap on these two fields at the same time. Alright, so these are both going to be 64-bit fields. x86 allows you to do 128-bit compare and swap.

So I'll check to see that the transaction ID is 0, and then I'll also atomically update this to be 1. The way you do that is you set this also to be 0, and then you increment this by 1 as the result. So if I do that, then that means I have a shared lock on this tuple, and I can read it along with other readers running at the same time.

But now, when I do the write, the same thing: I'll do an atomic 120-bit compare and swap to set the transaction ID and the recount to one. I actually don't think you need to set the recount, but you definitely ought to set the transaction ID. So now I have the exclusive lock on this tuple. I can go ahead and create a new version, update the end timestamp with my time stamp, and then a new compare and swap to revert it back to zero, and that unlocks it.

Yes, I think the starting... What are you saying? Sorry, no, no, no. Today’s lock acquires locks as needed. You acquire them in the growing phase, but it doesn't necessarily mean you're going to acquire them exactly when the transaction starts. The last writer wins; the first writer wins.

It's always first writer wins, yeah. How would it win? This guy got to this; he wrote to it. Anybody else that would come along in this case would see that this version's visibility is one to ten. Five is in between one and ten, so it knows that there's another version that came after time stamp ten that physically got created before I did.

Although logically, logically it's in the future, but in actuality, it's in the past in physical time. So I might intersect with this range; therefore, there's another writer who got here before I did, and I have to abort. First writer wins. These timestamps tell us everything.

Okay, so in the paper ahead, you guys read that when we wrote it originally, the transaction ID and the recount were set to be 32-bit integers, right? Because at the time when we wrote it, I don't list x86 because they didn't support 128-bit compare and swap.

So we put these two together, right? If you think about it, there's probably not going to be two to the 32 minus one threads reading the same to abort at the exact same time. Setting this to be 32 bits is kind of overkill, but we still want this thing to be as large as possible.

So we have to make this thing be at least 32 bits, maybe 48. But even then, although it's a large number, if your system is running for a long time, you can burn through these transaction IDs pretty quickly.

Alright, and what's going to happen if you get to the end of transaction IDs? You wrap around, right? Then you start to have problems. Alright, so let's say that we have a simple table with one tuple, and we have this one version here. We have some transaction ID that's going to get transactions of insurance actually be two to the 31 minus 1.

So it does it right on a break and does all the lock stuff that we just talked about, and then it creates a new version here, right? That sets the range now to be two to the 31 minus 1, except it's the 0. But now another transaction comes along and now it has time stamp 1 because it wrapped around, and now it creates a new version.

But now the ranges that are all messed up because this is between 1 and infinity, and physically that's in the future, but based on these timestamps, it's illogically in the past. Someone could come along and want to look for this version, and it could end up going nowhere.

Right? Because this thing is in a disjoint range. Right? So this is problematic. If you have a 32-bit integer for your transaction ID, which Postgres does, you can wrap through this pretty quickly. Even if it's a 64-bit integer, at some point, you'll run out, and you need to wrap around and handle that.

So there are a couple different ways to do this. I like describing what Postgres does because it's so simple and easy to understand, and it's a way that makes it sort of elegant. So what they're going to do is add an additional bit in the header of every single tuple.

Right? Usually, four-tuple headers are always padded out as symmetric bit space. So in the future, if you decide, "Oh, we need to keep track of some additional information about each tuple," we just add an extra bit in there; we have space for it.

So they're going to add an extra bit that says that a particular version or pickle tuple is frozen. Any version that's considered frozen means that it's always going to be deemed as in the past, no matter what transaction ID you have or timestamp you compare it with.

So even in this case here, even though this one could have a timestamp that's greater, your two to the 31 minus 1 is greater than 1. If I set the frozen bit, then this will always be deemed older than this. So the way they do this is that they, if the system recognizes that you're about to wrap around, they'll run the vacuum, their garbage collector, scan through, and find old versions and set this bit flag.

So there are a couple of posts on the internet you can look around for like the Postgres transaction ID wrap-around problem. There are cases where people will actually turn off the garbage collector on Postgres during the day because it adds some overhead.

So you try to get the system running as fast as possible during the day because that's when you have most of your customers using your website. And then all of a sudden, you start hitting this wrap-around problem, and the system freaks out because it has to stop accepting new connections, inspecting new transactions because it has to wrap around.

But the vacuum you can't run because you've turned it off, and then you basically have to run the vacuum manually. That can do a full compaction or full vacuum pass, and that can take hours and hours, or even days.

Right? So the Postgres way is pretty simple; the vacuum will do what you wanted to do unless you turn it off.

So when you read the academic literature about concurrency or transactional database systems, the emphasis really is always on these concurrent protocols. Right? Is two-phase locking better than OCC II or timestamp ordering? But what we actually found out in this paper was that it’s actually the other things that matter a lot more.

In particular, what mattered a lot was the version storage mechanism or the architecture, the virtual storage component of the system. So again, as he said, we have for every single physical version. We're going to search every single logical object that will have multiple physical versions.

So there are different ways we actually store these versions, but at a high level, they're going to be organized as a latch-free, linked-list, single-direction. The head of the linked list is always going to be what the indexes point to, or sort of what, if I'm doing a lookup on a tuple, I'm always going to land at the head and then I can traverse along the version chain to try and find the right version that's visible to me.

So again, the index always points to the head, but the head could either be the oldest or the newest depending on what approach you're using. The different schemes we'll talk about here will determine where we're going to actually store and what records you're going to store for each version that we create.

Alright, sometimes we'll store deltas; sometimes we'll store the actual entire tuple. The three approaches are append-only time travel storage and delta storage. The spoiler would be that the delta storage is the best way to go, but there are still a lot of systems, like Postgres in particular, that do append-only.

So what's going to happen here? Because we're in an in-memory system again, we want to avoid having global data structures. So we want to avoid having to allocate space for new versions in a global memory chunk.

Instead, what we'll do is, as threads create new versions, they'll create the versions inside of thread-local storage or memory that's allocated for just that thread. You know that means the version chain could traverse the storage across multiple threads, but that's okay, right? Because everything is always just in memory.

The other thing we also need to think about too, as we describe these different approaches, is not just how fast they are, but also how much storage space they're going to require to store these versions.

And what's the engineering effort to actually implement it? Because some are obviously easier than others. We need to think about it in terms of what is the overhead of finding the right version that we need for our query, but also the overhead of cleaning up older versions over time as they accumulate in the garbage collector.

Alright, so let's go through each one by one. So append-only storage. The idea is that we have a single table, like a single physical space where we're storing tuples. Any time a transaction updates a tuple, it creates a new physical tuple in that same tablespace.

Right? So say our transaction can update A1. We just make a copy of A1, append it into some new space or a free slot in the table, and then we just update the pointer to our version chain to say, "Here's the new version."

Right? So it's pretty simple to do, and this is how Postgres was originally designed in the 1980s. I think Interbase did the same thing. The downside, obviously, is that I'm making a lot of copies. Right? You know I’m copying the entire tuple even though it may only update a single field.

So another important thing that was pointed out too is the order in which we're traversing the version chain for our tuples. So in this example here, I’m going oldest to newest. I started off like this: I have a 0, a 1, and then a 0 was the head of the chain, and it pointed at a 1.

When I created a 2, a 1 now pointed at that, but I still have my indexes point at 0. So to find a 2, I have to jump to a 0, check that there's a begin time stamp to see whether it's visible to me; if not, then I jump to a 1 and do the same thing to jump to a 2.

That may not be the best approach depending on your application. Again, that was oldest to newest. You always have to traverse the chain to find the newest version. You could also go newest to oldest, where the head of the version chain is always the latest version that just got created.

So you don’t need to update any previous versions; you just add your new version and then have its pointer point to the old version, the head of the version chain.

What's one obvious problem with that? It’s faster doing lookups, obviously, right? Because you want the newest version at the head of the version chain, and you're done. Yes, no? Yes. I’ll bear the indexes, correct?

Yes, so again we’ll talk about it in more slides, but all the indexes point to the head of the version chain. If for every single update the head of the version chain changes because it's from newest to oldest, then I have to update all the indexes now to point to the new version chain, right?

Actually, that's what purpose does. Compared to my Siegel, that's problematic. So again, I'm not saying one is better than another. In most cases, newest to oldest probably is the better way to go because most of the time, most transactions, most queries want the newest version.

If you care about doing, depending on how you do garbage collection or if you have queries that look at old data, this actually may be better. Yes, so it's a way to avoid this overhead of having to update every single index every single time.

But lately, doing no—because that could give you false negatives. The other picture is what if you have an indirection layer? We’ll see in a second that will avoid that problem. But you have to maintain that. That’s the additional storage overhead to have that indirection.

Okay, again, so in practice, I think this is the better way to go if you're doing append-only. But this does have some benefits that you don’t have to update the indexes. Alright, so the next approach is to do time travel storage. The idea here is that as we create new versions, instead of appending the new versions into our main tablespace, we will have this other table that looks exactly the same as the first one, but it has the same scheme and the same allocation of columns and rows.

That's where we're going to put versions as we create them. In this case here, we're doing newest to oldest, so A2 is in the main table space and it has a pointer to A1 in the time travel space. So now, if I'm going to update this guy, I first copy it into the time travel space, have the pointer point back to A1, and now overwrite the master version with the new version that I want to create.

Again, first writer wins. I don't worry about two transactions trying to update the same master version at the same time. I do the write here, and then I update the version pointer to now point to A2. This is actually what Hana does, and this is actually what SQL Server does well.

We'll see SQL Server and how they do logging with MPC in a few weeks. I think they do it this way because it’s a byproduct of the system that was not originally designed to be multi-versioned. Adding this requires the least amount of changes in the overall architecture.

The other thing you can do is that you could have the main table actually use a different storage model than the time travel table, right? Because you're doing a lot of updates into this, you could have this be like a row store or a delta store, and then the time travel table could be a column store.

Because these are older versions, you can maybe over time convert them to a column store. That way if you need to read old data, you can access it through a columnar layout, which is faster. Alright, and again, so the last one is going to be what I think is the better approach: delta storage.

The idea here is that instead of having to copy the original version every single time and then make our changes to it, we only need to record what change we made to store that information. Right? So if I'm going to update A1 and set a copy in it, I'll just have a delta record in some space in memory that says, "Here's the change that I made."

Here's the old value for this table and update that. And now the pointer points to that. Again, for this delta information, I'm going to maintain the same begin time stamp just as I would before in a regular tuple. But the only thing I'm storing is this delta information. Think of it like a DIF.

So now, if I want to do a lookup and say, "Find an older version," I just follow the version chain and replay all the log entries or the delta records to put me back into the state that I should have been for that version.

Again, if I have a thousand columns in my table and I only update one of them, instead of having to copy all thousand columns every single time, I can just store the one attribute, the one column that got changed.

So this is what Oracle does; this is what SQL Server does. I think this is what we now do in our system. This is the better approach. Right? These, again, computationally, it's more expensive because I essentially have to replay the log or the deltas to put me back in the correct state I should be for my tuple when I want to do a lookup.

Most of the time, though, you only need to read the latest version, and all the data is just there; you're done. But you end up also storing less space, which can improve your cache locality or have less pressure on the cache to keep as much data in memory as possible.

So there's a big benefit to that. Yes, the question is: what if a lot of my transactions are doing scans and some of them are updating? Why would it be very slow? So again, in a real database system, most of the time, you're not updating every single tuple.

So say I'm doing a special scan across the entire table. Most of the time, I'm just going to rip through the main tablespace, and I don't have to follow the version chain. In the event I do have to follow the version chain, yes, I'm probably going to pay a little computational penalty to follow this pointer and replay the deltas to put me back in the correct state.

Most of the time, I don't do that. I would say also, too, depending on the architecture of the system, when you do an update anyway, you're already generating this delta. This is what you're going to log out to disk anyway, so you might as well just record that in memory as a delta record.

So there's this trade-off, absolutely right, about like resources and which ones you want to favor. I think the science turns out that this approach actually makes the writes go faster, and the penalty you're paying for reads is not significant. Then it's not worth it to get the right benefit. Plus, you have less storage space.

Garbage collection is also easier in this world too because I only need to go through this thing and clean this up. I never touched the main table because that's always the latest version. Yes, so it makes a good point.

So if I have a thousand tuples and I have a bunch of deltas that each update a separate attribute, do I need to go back in time super far to find the correct version? The way you handle that is through garbage collection. You try to track down or compact even the delta and the version chain as quickly as possible.

We'll cover that next week. Yes, the question is if you're tracking multiple attributes, is there just one delta? Yes, so there’s only one actual delta record, but yes, for every single attribute I modify, there will be within one delta record.

This could be uncommitted, right? And this also could be written in the future; that's not that I haven’t, but I shouldn’t see it because it's not my snapshot. Therefore, I have to go back in time if I'm interested in what is actually visible to me.

Alright, cool. So one additional problem, though, if you’re doing append-only—and this is why I think delta storage is better—is that if now you have string values that are stored in variable-length data pools, every single time I create a new version, I have to make a copy of this tuple or that sort of the very length data so that my next version can have its own pointer.

Because if I start doing garbage collection and I clean up A1 because A2 is now the latest version, if this thing is still pointing to this and I go clean that up, now my pointer points to nothing, and that’s bad. Right?

So that sucks. That means for every single time—even if I don’t update this string at all, I’m still making a copy of all the string values. So one way to handle this, obviously, is just to add a reference.
Counter in the verbal link data so that when I know how many pointers, how many versions are actually pointing to this.

So if I go clean up this, the first version and I decrement the counter and still greater than zero, then I know that someone out there is pointing to this string in my very unlike data pool and I shouldn't go ahead and clean it up.

The downside, though, is and this is actually what we tried in our old Peloton system. The downside is that because now I keep track of the multiple versions pointing to this, I actually don't know where they are.

So if I ever need to move this piece of data around in memory, like I started compacting my favorable length data pool, then I have to do a sequential scan and try to find the one version of the tuple or the both versions that are actually pointing to this.

So this actually turns out to be a bad idea; it's something we abandoned pretty quickly. This is a synergy sort of what dictionary compression does as well because instead of storing the pointer to something in the very like data pool, I would have a dictionary code that I could then do another lookup and find what the actual value was.

But at least in that case, if you're compressing the data, then it's usually cold data, and therefore you're not going to have to clean things out very often.

Yes, so again, remember last class I talked about how there's the fixed length data pool and the verbally dated pools. So all our tuples, alright, I'm going to try to reside in the fixed length data pools. That's like the location of them.

But because we want all the sizes of every single tuple to be fixed length, anything that could be variable length has to be stored in a separate data pool. So inside my fixed length data, instead of actually storing the string, I store a pointer to the string, right?

And that's another piece of memory that's managed separately. The point I'm trying to make here is that on one hand, we could just duplicate the string over and over again; every single note version because each of these guys need to have a unique pointer.

But that's obviously going to be wasteful because if I don't update the string that I'm copying for no reason and if my string is huge, then that's going to get expensive very quickly.

So you could try to share pointers by adding a reference counter into that to the reference to the variable length data pool for every single thing you're storing. But now the problem is if I ever try to move this data around, I don't know what else is pointing to it and I could have broken pointers.

Yes, especially couldn't use a logic warrant; that's what dictionary compression essentially does. We'll cover that in a few weeks. It's hard for me to balance when you guys need to know now what's going to come in the future.

So the dictionary compression solves this. Okay, probably need to get to garbage collection. So the idea of garbage collection is again, just like GCE under the JVM, we need to find physical versions that are reclaimable.

A bold and physical version is one where we know there's no active transactions running that can see that version, right? Because it's in the past. All new transactions have a timestamp in the future and they can't get to it, or the version was created by a transaction that later got aborted.

And we know no one's going to read it; we have to go ahead and clean it up. So there are much different design stages we need to be mindful of how to find the expired versions, what to do, how to determine whether it's safe to reclaim a piece of memory, and where to actually look for them.

So we're going to focus on this, how to look for them. We'll cover this a little bit, but we'll do next Wednesday.

Next Wednesday, we'll spend the entire lecture discussing how we actually do garbage collection in MVCC and go into more details about this.

Right, so the two ways to do this are at the tuple level or the transaction level. So at the tuple level, the idea is that there's not going to be any central location that says, "Here's all the versions of the tuples that we can go clean up."

The idea is instead we're going to have threads run and do scans, and when they come across data or come across versions that are reclaimable, they go ahead and clean them up.

We can either do this with separate threads or cooperative threads as they're running queries. At the transaction level, the idea is that each transaction is going to keep track of every single version that they invalidate and therefore could be reclaimed.

Then when they go to commit, they hand off this set of pointers to this garbage bucket that says, "By the way, here are some things I invalidated; you should go ahead and clean them up."

And that's avoid having to do that with a sequential scan. So let's go through the tuple level first.

So with vacuuming, again, the idea is that there are separate threads that are going to run, that are going to do special scans and try to find old versions. So when the vacuum starts, we have to look and say, "Well, what are the actual transactions? What are their timestamps?"

And then now when we scan, we’re going to compare the beginning and timestamps for all the versions that we see and see whether those ranges we specified do not intersect with any active transactions.

In this case here, we have transactions with timestamps 12 and 25. So we know that for the range 1 to 9, these two transactions can't see this, and therefore no one can see this.

And therefore it's safe for us to go ahead and reclaim this memory.

Right, so this can be expensive to do, like sequential scans across the entire system, especially if you want this thing to run all the time. So a simple trick is just to keep track of a bitmap that says, "Here's all the blocks that got modified logically since the last time I ran."

So therefore when I just need to scan through that, I can skip anything that wasn't modified. So I mean by logically is that depending on what I'm doing, oldest to newest, renews to oldest, I may update.

Say I have two versions in two separate blocks and it's almost the newest and I add a new version that's in the second block, but now I could reclaim that old version that's in the first block.

So I need to know logically that going back in the version change, here's the block that has the thing I should examine. Alright, whereas newest to oldest, you would know I add my new version.

I know but I need to point to as the previous head so I know where that thing is located and I can update that bit easily.

So, cooperative cleaning, the idea is that we're not going to have any separate threads. Potentially, if we're vacuuming, it's just now as our transactions or queries start running, if they come across old versions, we go ahead and clean them up.

Alright, so say this guy runs, he's going to do a lookup in the index to find key A, and we're going to get to the head of the version chain.

So then now, as I'm scanning along to find the right version that I want, I check the timestamp, which I'm doing anyway to see whether it's visible to me.

But I also know what is the sort of the high-water mark or the low-water mark for the oldest timestamp of any active transaction.

And if I know that thing is not visible, this tuple is not visible to that oldest transaction, I can go ahead and garbage collect it right there.

And I keep scanning along and can print out anything, and I also then have to update the index now point to my new version chain.

So the benefit of this approach is that you don't have to maintain these separate background threads, but now your queries could potentially run slower because they may come across a long version chain, and you had to clean things up before you can actually finish running your action or your query.

What's another problem with the cooperative cleaning? Yes, correct. Well, one, it says that there are only stores near us. But even then there could be another problem.

Bingo, yes. So let's say I create a new version and then no one ever goes back and reads that logical tuple again. But now I have that over and sitting around that no one's ever going to get.

So Microsoft calls these "dusty corners," and basically the way to handle that is you peer out. If you also had stuff to run, the background thread could just go find things that could be still sitting around.

Yes?

Yes, so is there a notion of cleanliness in our system? Could we quantify that? So the example I was saying before, like the garbage collection takes time, right?

So Microsoft roughly estimates in their paper that garbage collection adds about a fifteen percent overhead. If during the day I want my transactions to actually run as fast as possible, I could maybe potentially disable garbage collection.

The system becomes more dirty, and then when I want, you know, maybe in the day then I run the garbage collection, burning more cycles, but I have spare ones that I can use to clean things up.

It's usually the storage overhead people care about. You run out of space pretty quickly if you have a lot of versions and you're turning through them.

I always say that the notion of cleanliness would be something better to have to be human to find.

Like I usually use fewer threads for garbage collection because I want queries to run faster, but then there's sort of a push back to say, "Well, I'm running out of space," especially if I ran memory.

So I want to be more aggressive in cleaning things up.

So with the overhead like that, fifteen percent, is that like, what about, yeah? Because think about it like my queries are running slower now because this guy could have just said, "Well, I don't care."

That these versions aren't reclaimed; let me just go get what I want. But it's implemented such that you clean things up as you find them.

Okay, the other one is the transaction level. Again, we'll discuss this more on Wednesday next week.

Again, the idea is that my transaction runs, I'm creating the versions because I think the tuples; so I know what was the old version before.

And so I just record to say, "Hey, by the way, here's this transaction, or here's this version, here's the beginning and end timestamp, which I know because I had to read it."

If I commit, go ahead and reclaim this. And then we put this in a queue, and then the garbage collector will go at some kickoff and some background threads to clean this up over time.

So for this one, the garbage collection is no longer on the critical path of queries, like it is in cooperative cleaning. So that means that our queries are going to run faster.

It could end up creating order versions more quickly than before, so we actually may need to use multiple threads and make sure we clean things up in a timely fashion.

So in our current system today, we do this, but we only can do a single thread garbage collection. And in some of the experiments that have been done, we can burn through transactions pretty quickly, and we start running out of space.

And the single thread actually can't keep up, so we'll discuss more about this next week.

Alright, the last one is super important, is index management, and we've sort of talked to us a little bit, but basically how do we find the right version?

This depends on what the version scheme is and how much work we have to do to replay deltas or what the ordering of the version chain is.

So the primary key index is always going to point to the head of the version chain. It doesn't matter whether it's oldest to newest or newest to oldest or time travel or delta storage; it's always the head, right?

And so that just means that, depending on what you know, we end up on exactly the right way. The first version that we want is the head, or we may have to traverse the whole thing.

So now if any transaction tries to update an attribute in the tuple that's in the primary key, rather than trying to get clever and trying to maintain different versions or different version chains for the same logical entry in the index, we're just going to treat this followed by as a delete followed by an insert.

So even though, sort of conceptually, the same tuple, it's from the database systems perspective it's now two discrete logical tuples.

The secondary index is more complicated because, as I sort of already said before, depending on whether we're reporting the version chain or not, every single time we create a new version that could get really expensive.

And so there's this great blog article that came out actually exactly when we were writing this paper from Uber, and it talked about their journey from going from Postgres to MySQL.

The true story was they originally started with MySQL; they hired some guy that really loved Postgres, so he switched to Postgres, then they realized it was a mistake and had switched back to MySQL.

So that was super expensive. They just took this course; they were saved a lot of money.

Right, so they talked about a bunch of different things about how Postgres does things differently than MySQL.

But one of the main things they stress is how they actually manage secondary indexes in a multi-version system because Postgres would actually point to the head of the version chain, whereas MySQL uses a logical pointer, right?

So that's the two differences.

So a logical pointer would be some kind of identifier that's fixed for the tuple that we can then not have to update in our secondary indexes anytime the physical location of the version chain changes.

And you can either be a primary key or some kind of synthetic tuple ID, like in case up, so primary key is what MySQL does. But if you don't declare a primary key in MySQL, they will actually generate one for you called the row ID, or we just have some kind of global counter that says, "You know this tuple one, two, three, four, five, six," and then have an indirection layer to do lookup to get the physical address.

Right, the physical pointer is what I said is always pointed at the head of the version chain.

So let's look at this visually. So assume we have a we're using a penalty store.

Oldest, we don't look up on key A and the primary index. Again, the primary index always points to the physical version. No problem; just jump here and then scan along to try to find the version we're looking for.

The secondary index if it's using a physical pointer, right? Same thing; you land here and scan along.

If I only have one index, then it's no big deal. Every single time this thing changes because I just go update that one index.

But if I have a lot of indexes, and they're all pointing to the physical address, any time I create a new version and go from newest to oldest, I have to update all of these.

And this is what Postgres does in the case of that. The example with Uber, their application had a lot of secondary indexes, and it got really expensive to update the version chain every single time you created a new version of a tuple.

So how can you handle this? Well, if you have an indirection layer, either by drawing the primary key and then now just do a second lookup in the primary key index that gets the physical address.

Now if I update the physical address, I only have to update this index and nothing else.

So if your primary key is not that big, if it's like a 64-bit integer, no big deal. But if it's a large text field you're storing that as the value in your index over and over again, that can be expensive.

The alternative again is to use a synthetic tuple ID. But now you need some kind of hash table or another kind of lookup table to map that tuple ID to a physical address.

So now anytime the physical address changes, you just update this map, and you know you don't update the symbols themselves.

This question is for doing time travel storage. Let's say the next few slides actually into a question like, is there a way to avoid having to update this?

Is there anything what you're asking right? Well, short of time, we'll take it outwards.

Alright, so another new nasty thing, this actually wasn't in the paper that you read, but this is something we've encountered actually building our own system, is that the database it'll support duplicate keys that could exist in just disjoint snapshots.

So the issue is gonna be in our indexes we're not actually restoring the version information about our tuples, right?

So for our B+ tree, we don't want to store like, "Here's the key for version one; here's the key for version two," because that would be super expensive to maintain every single time I update the version.

I've got to go update the index, and I have to manage metadata.

So most systems don't actually do this. If you're using an index-organized table like MySQL or an ODB, where they store the tuples in the leaf nodes of the index themselves, then you kind of get this for free.

But most systems don't do this, so the issue is going to be now I could have the same key could exist in different snapshots.

And therefore, in my index, I need to store that same key multiple times and have pointers to different version chains.

So the middle certain example, so I say every simple tuple would have a single version. My first transaction comes along and does a read on A.

We'll cover what beginning and end timestamps mean in a sec next class. But just assume this is the timestamp, say it's given to one to transaction.

So this guy does a read on A. No big deal; I follow the pointer in my index and I land here. This guy does an update on A. Same thing; I follow the pointer, I create a new version and update the version chain, right?

So that's fine. But now I do a delete on A. And so what needs to happen?

Well, I'm going to mark this thing as deleted. There's a little bit you can set in the header as well, and it's fine.

This guy who goes ahead and commits, we update our timestamps to say that, "Here's when this thing actually finished."

So this is setting the begin and end timestamps to 25, and they're the same. So this is saying this thing's been deleted.

Right, so now this other transaction comes along and he does an insert on A at timestamp 30.

So now I have to create a new entry in my index, and now it points to this other new version chain here because I can't give it to the old one because this guy is still running at timestamp 10.

So now when I do a read on A on the index, I've got to make sure that I get this one and not this one, even though the value of the end of the key is exactly the same.

And this is allowed to happen because this guy committed, so he's gone. So he starts after this guy committed; so he can, he's allowed to do a write on A.

Conceptually, it's not a conflict because A is gone at this point for this snapshot.

So I'm creating two entries for A in the same index. So that's kind of weird, right? That's the idea that the same key can exist multiple times even though it's with your unique index because it is the primary key index, but at different snapshots.

So one way to handle this is you just maintain. You could maintain some logic that how do we do this but how do we have two entries for the same key?

I don't think so. Anyway, but it has two different version chains. I think we store some extra metadata in the key, right, to say that this is unique.

We don't? Okay, yeah. What do we do?

This is a problem, then they come back to discuss this next time or maybe we don't.

He knows we’re broken. We had this different hit department Peloton in the old system. I think the way we got around it was we would store.

We were oldest to newest, so we could store the... you'd have to store. I know, I know how we did this.

So the same key could produce, even though it's a unique index.

So a unique index, you would think, alright for a single key has one value, you would get back a list of values, and there's a list of values with different pointers to different version chains.

And then you have to traverse every single version chain to find the version that is actually visible to you.

Alright, that's how we do this. So they shouldn't be on top of each other.

So if we’re single key, you get back a list of pointers, and you have to traverse each of those pointers to find the invisible version chain, that's invisible to you.

Yes, even though this guy got deleted, why not just have this thing pointed to this thing and I can traverse that?

Because you need a sentinel value, right, that says don't. Like you need a way to say there’s nothing else that comes after this version chain.

You don't need to scan anything more, but I guess if this is not no, you’d still do that.

Yeah, that you might work. I’d have to think about that.

Though this is what you actually, maybe, yeah, he's right. You may actually either think with a certain mayor should be need to do this.

I think what we do is we give you back multiple pointers. We don't wonder at all.

But you're not updating the attributes; you deleted the entry. Like, we didn’t update the key; we didn’t update the tuple somewhere.

And then you delete it; it gets marked as deleted, and then this guy inserts.

I thought we added a new entry. The details are not important; you just understand that this issue can occur, right?

Because this guy wants to do a redo and make sure we get the right version.

Alright, wherever.

I'm going to skip all this. Just come to the evaluation quickly.

So again, this came out of this paper. Peloton is dead because it had a bunch of other problems which were covered many times this semester.

But the main experiments basically just trying to bake off the different implementations, and then the goal was whatever one was the best one; we would keep that in Peloton.

This pissed me off because we did not do that right. If you look at this graph here, I'll come back to this.

Right, this is the main graph that don’t understand. So this is scaling up the number of threads running TPCC.

And what we did, we implemented based on this previous table here for all these different systems for u21. We configured the system to match what real systems actually do.

And so Oracle, NeoDB, and Hyper actually do it the best way. Postgres actually does it the worst way, and it's not just, you know, Postgres and NeoDB are doing the same transaction protocol.

The version of storage, garbage collection, and index management are different, and the other things actually matter more.

So I was like, fantastic, Oracle, NeoDB, and Hyper are the best; let's do it the way they did it.

The student that was writing the paper just left us with this, and he went back to Singapore and didn't actually finish it.

So he ended up, after all this work, we ended up in Peloton, which was the worst way of doing it, not the best way.

The new system is the best way, right?

So let's go back to this real quick. Again, this is in the paper. This is just showing you that all these different systems are doing all these things differently.

And at the day, I think the main takeaway was the version storage and indexes turned out to matter the most, and current retention, not so much.

Okay, so not saying, because of our paper, I think Postgres recognized that they had some issues.

But there's a blog article that came out in 2018 that I think this link is our paper. But they basically said that, "Oh, the way we're doing a PenNolan kind of sucks," because you have this vacuum and it's a lot of overhead.

And this guy is one of the main developers opposed to us now, so they talked about how they heard they're going to switch to delta storage in the newer versions.

I don't know whether it's coming out in version 13 or 14; they call it Z-heap. This is something that they want to get to.

Alright, we're well over time. I can briefly talk about Project 1 before you guys run.

I'll just do it now, and then we'll release this later today.

Okay, Project 1, the idea is here to get you comfortable with the system. So we're asking you to work on one very specific part, and that's to do sequential scans or parallel or concurrent sequential scans.

So the task itself is not overly difficult. We'll have sort of different levels of complexity that you can try to achieve.

It's mostly to teach you how to actually work in the system and actually do profiling and performance measurements in the system.

Okay, so Matt covered this yesterday. Here's what our system does.

So we’re going to bind you with a bunch of super-close benchmarks written in G benchmark from Google, but there's one in particular called concurrent slot iterator micro benchmark that this is the bottleneck or the thing that you're going to investigate.

Basically, when you deal with a scan in the system, you get this iterator, and it has a latch on it.

And so if you start scaling up and adding more threads and they all try to acquire the same latch, this becomes a bottleneck.

So the idea is that we will learn how to use perf and call grind to understand what are the main conflict points in the system.

And then you try to fix it. So this is a single project system, but it exposes you to, you know, gives you the full system.

You want to try out different workloads and threads and access patterns beyond just what the micro benchmark that we're providing you.

Okay, so the way we're going to do grading is that your grade will be based on how much faster you are than our implementation.

So we will have a basic implementation that tries to improve this.

Alright, we'll have the before and after. Your score will be based on how much faster you can get than what Matt writes.

Okay.

Matt talked about yesterday.

- We either own clang format, clang tidy; you make sure that your code is all clean.

You want to use Google sanitizer stuff as much as you'll get this automatically and make sure you don't have any memory leaks. We talked about this before.

It runs on anything greater than 18.04 for Ubuntu, and on OSX, you can also do a VM on Docker; this is CMU.

I assume that everyone wants to have access to a machine to do development locally. If not, email me, and we can fix this.

The main important thing, though, is the way our new grading is not going to be like your suite upgrade scope, and that'll do it like a smoke test to see whether your thing actually compiles.

But you're not going to identify this bottleneck if you try to run it on a machine with less than eight cores. Most laptops have, you know, four cores or eight cores or less.

So what we're going to give you is 50 bucks on Amazon that you can go get one of the C5.9x large. It has, I think, 32 cores or 36 cores, and you can do your analysis on that machine because that's how you'll be able to identify the bottleneck.

Okay, so everyone gets 50 bucks if you go get this on-demand one; it's usually $50 an hour.

If you get the spot instance, which means that you're saying, "Hey, these machines are idle, I'll use them," they could take them away from you at any time, but you pay a fraction of the price.

So I encourage you to use this because if you blow through your 50 bucks, I can't reimburse you.

Okay, so I'll send an email out to everyone who's enrolled in the class, like, "Here's your code for Amazon."

You need to have a credit card to sign up for Amazon EC2 or AWS. If that's a problem, let me know; we'll figure out how to fake one or something like that, right?

But anyway, alright, so this we’ll do on the 16th. We'll post this later today, and then next class, we'll discuss more and easy implementation.

Okay, bye guys. See you.

Wank it in the sidewalk.

What is this?
And my hood won't be to say I think it's a prey.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Right, yes, all right. So today we're talking about MVCC, multi-version control.",
      "section_level": 1,
      "section_title": "Introduction to MVCC"
    },
    {
      "index_sentences": "We're just against everyone's on the same page.",
      "section_level": 2,
      "section_title": "MVCC High-Level Definition"
    },
    {
      "index_sentences": "So what's gonna happen is when a transaction writes to an object or does an update to an object, instead of overriding the original value of the existing values, it's going to create a new version.",
      "section_level": 2,
      "section_title": "How MVCC Works"
    },
    {
      "index_sentences": "So MVCC is not a new idea.",
      "section_level": 1,
      "section_title": "History of MVCC"
    },
    {
      "index_sentences": "Alright, so the main idea of MVCC, the benefit we're gonna get, is that the writers aren't going to block the readers and the readers aren't going to block the writers.",
      "section_level": 1,
      "section_title": "Benefits of MVCC"
    },
    {
      "index_sentences": "All right, so we need to define what snapshot isolation or snapshots mean.",
      "section_level": 2,
      "section_title": "Snapshot Isolation"
    },
    {
      "index_sentences": "So snapshot isolation is not serializable, right?",
      "section_level": 3,
      "section_title": "Write Skew Anomaly"
    },
    {
      "index_sentences": "Alright, so the paper I had you guys read is a sort overview of the different design decisions you have to make when you build a modern MVCC system.",
      "section_level": 1,
      "section_title": "The Paper: Design Decisions"
    },
    {
      "index_sentences": "The original name of the paper that I had you guys read was actually 'This is the Best Paper Ever on In-memory Multiversion Kernel.'",
      "section_level": 2,
      "section_title": "Paper Title Story"
    },
    {
      "index_sentences": "Alright, forget the four design stages.",
      "section_level": 2,
      "section_title": "Four Design Stages"
    },
    {
      "index_sentences": "For a concurrency control protocol, it's all the same methods you guys read about last class or we talked about in the last lecture.",
      "section_level": 3,
      "section_title": "Concurrency Control"
    },
    {
      "index_sentences": "So the first thing we need to discuss is what kind of reaction we're actually going to maintain information about what we're storing in our tuples.",
      "section_level": 4,
      "section_title": "Tuple Header Metadata"
    },
    {
      "index_sentences": "Even if it's a 64-bit integer, at some point, you'll run out, and you need to wrap around and handle that.",
      "section_level": 4,
      "section_title": "Transaction ID Wrap-around"
    },
    {
      "index_sentences": "So when you read the academic literature about concurrency or transactional database systems, the emphasis really is always on these concurrent protocols.",
      "section_level": 3,
      "section_title": "Version Storage"
    },
    {
      "index_sentences": "So what's going to happen here? Because we're in an in-memory system again, we want to avoid having global data structures.",
      "section_level": 4,
      "section_title": "Append-Only Storage"
    },
    {
      "index_sentences": "So another important thing that was pointed out too is the order in which we're traversing the version chain for our tuples.",
      "section_level": 5,
      "section_title": "Append-Only Traversal Order"
    },
    {
      "index_sentences": "So the next approach is to do time travel storage.",
      "section_level": 4,
      "section_title": "Time Travel Storage"
    },
    {
      "index_sentences": "Alright, and again, so the last one is going to be what I think is the better approach: delta storage.",
      "section_level": 4,
      "section_title": "Delta Storage"
    },
    {
      "index_sentences": "So one additional problem, though, if you’re doing append-only—and this is why I think delta storage is better—is that if now you have string values that are stored in variable-length data pools, every single time I create a new version, I have to make a copy of this tuple or that sort of the very length data so that my next version can have its own pointer.",
      "section_level": 4,
      "section_title": "Handling Variable-Length Data Storage"
    },
    {
      "index_sentences": "Garbage collection is also easier in this world too because I only need to go through this thing and clean this up.",
      "section_level": 3,
      "section_title": "Garbage Collection"
    },
    {
      "index_sentences": "Right, so the two ways to do this are at the tuple level or the transaction level.",
      "section_level": 4,
      "section_title": "GC Approaches Overview"
    },
    {
      "index_sentences": "So with vacuuming, again, the idea is that there are separate threads that are going to run, that are going to do special scans and try to find old versions.",
      "section_level": 5,
      "section_title": "Tuple Level GC: Vacuuming"
    },
    {
      "index_sentences": "So, cooperative cleaning, the idea is that we're not going to have any separate threads.",
      "section_level": 5,
      "section_title": "Tuple Level GC: Cooperative Cleaning"
    },
    {
      "index_sentences": "Okay, the other one is the transaction level.",
      "section_level": 4,
      "section_title": "Transaction Level GC"
    },
    {
      "index_sentences": "Alright, the last one is super important, is index management, and we've sort of talked to us a little bit, but basically how do we find the right version?",
      "section_level": 3,
      "section_title": "Index Management"
    },
    {
      "index_sentences": "So the secondary index is more complicated because, as I sort of already said before, depending on whether we're reporting the version chain or not, every single time we create a new version that could get really expensive.",
      "section_level": 4,
      "section_title": "Logical vs Physical Index Pointers"
    },
    {
      "index_sentences": "So another new nasty thing, this actually wasn't in the paper that you read, but this is something we've encountered actually building our own system, is that the database it'll support duplicate keys that could exist in just disjoint snapshots.",
      "section_level": 4,
      "section_title": "Handling Duplicate Keys in Indexes"
    },
    {
      "index_sentences": "I'm going to skip all this. Just come to the evaluation quickly.",
      "section_level": 2,
      "section_title": "Evaluation Results"
    },
    {
      "index_sentences": "Okay, so not saying, because of our paper, I think Postgres recognized that they had some issues.",
      "section_level": 2,
      "section_title": "Postgres Plans for Delta Storage"
    },
    {
      "index_sentences": "Alright, we're well over time. I can briefly talk about Project 1 before you guys run.",
      "section_level": 1,
      "section_title": "Project 1 Introduction"
    }
  ]
};
window.faq = {"qas": [{"answer": "At a high level, multi-version control is a design approach where a database system maintains multiple physical versions of a single logical object, such as a table, tuple block, single tuple, or even a single attribute.", "index_of_source": "At a high level, what multi-version control is, is not so much a specific incur to a protocol but a way of designing a database system where you're gonna maintain multiple physical versions of a single logical object in the database.", "question": "What is the core concept of Multi-Version Control (MVCC)?"}, {"answer": "When a transaction updates an object under MVCC, instead of overwriting the existing data, it creates a new physical version of the object that incorporates the changes.", "index_of_source": "So what's gonna happen is when a transaction writes to an object or does an update to an object, instead of overriding the original value of the existing values, it's going to create a new version.", "question": "How do updates work in an MVCC system?"}, {"answer": "The primary benefit of MVCC is that it prevents writers from blocking readers and readers from blocking writers, significantly improving concurrency compared to systems like two-phase locking where even reads might be blocked by exclusive locks.", "index_of_source": "the main idea of MVCC, the benefit we're gonna get, is that the writers aren't going to block the readers and the readers aren't going to block the writers.", "question": "What is the main advantage of MVCC over traditional concurrency control methods like two-phase locking?"}, {"answer": "Snapshot Isolation guarantees that when a transaction begins, it views a consistent snapshot of the database reflecting all changes committed by transactions that finished before its own start time, seeing no uncommitted changes.", "index_of_source": "The way it's going to work is that when a transaction starts, it's gonna see a consistent snapshot of the database that existed at the time when that transaction started.", "question": "Explain what Snapshot Isolation provides in an MVCC database."}, {"answer": "Snapshot Isolation is not serializable because it is vulnerable to the write skew anomaly, a specific type of conflict that can result in a database state not achievable by executing the transactions serially.", "index_of_source": "So snapshot isolation is not serializable, right? I'll show you why, because it's susceptible to what's called the write skew anomaly.", "question": "Why is Snapshot Isolation considered non-serializable?"}, {"answer": "A tuple's header in an MVCC system typically stores a unique transaction identifier, begin and end timestamps (to define the version's visibility), and a pointer to the next or previous version in the version chain.", "index_of_source": "The first thing we're gonna do is have a unique transaction identifier. This is just what is the ID of the transaction that either created this version or is currently operating on a host to lock on it. Then we'll have the begin and end timestamps,", "question": "What essential metadata is stored in a tuple's header under MVCC?"}, {"answer": "In append-only storage, a new version is created by copying the entire tuple to a new location. A major drawback is the significant storage overhead due to copying the full tuple every time, even for small changes.", "index_of_source": "So append-only storage. The idea is that we have a single table, like a single physical space where we're storing tuples. Any time a transaction updates a tuple, it creates a new physical tuple in that same tablespace.", "question": "What is the Append-Only version storage strategy, and what is its main drawback?"}, {"answer": "Delta storage records only the differences (deltas) between versions rather than copying the full tuple. The main advantage is reduced storage space, as only the changes are stored, which is particularly beneficial for tuples with many attributes or small updates.", "index_of_source": "The idea here is that instead of having to copy the original version every single time and then make our changes to it, we only need to record what change we made to store that information.", "question": "What is Delta Storage, and what is its primary benefit?"}, {"answer": "Timestamp wrap-around occurs when transaction IDs or timestamps, often using 32-bit integers, exceed their maximum value and reset to the beginning. This can lead to confusion about version ordering, as logically newer versions might have physically older timestamps.", "index_of_source": "So I mean by logically is that depending on what I'm doing, oldest to newest, renews to oldest, I may update. Say I have two versions in two separate blocks and it's almost the newest and I add a new version that's in the second block, but now I could reclaim that old version that's in the first block.", "question": "What is the 'timestamp wrap-around' problem in MVCC, and why is it an issue?"}, {"answer": "If secondary indexes use physical pointers to the head of a tuple's version chain, and that head changes frequently (e.g., on every update with newest-to-oldest chains), all relevant secondary index entries must be updated, which is very expensive, especially with many indexes.", "index_of_source": "The secondary index is more complicated because, as I sort of already said before, depending on whether we're reporting the version chain or not, every single time we create a new version that could get really expensive.", "question": "What challenge do physical pointers in secondary indexes pose in MVCC systems when version chains change?"}]};
</script>
