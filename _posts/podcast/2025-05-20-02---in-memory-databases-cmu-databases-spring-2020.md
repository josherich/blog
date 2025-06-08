---
layout: post
title: "02 - In-Memory Databases (CMU Databases / Spring 2020)"
date: 2025-05-20 00:00:01
categories: podcast
tags: [podcast_script]
---


[02 - In-Memory Databases (CMU Databases / Spring 2020)](https://www.youtube.com/watch?v=a70jRWLjQFk)

As I said, I can't be on campus this week. I'm still here in Europe right now. I am actually in Munich visiting Thomas Norman at T um, and that's where they invented Hyper and the new database.

Putting an umbrella so part of me going down to visit Thomas is sort of to get a better understanding of why the Germans are so good at databases. As part of this, they took me up here in the Alps, somewhere in the mountains. I don't know exactly where we are. It's freezing, and the idea is like this: you go in the woods, and you think about your thoughts for like an hour or something. Somehow, that's gonna magically make you better understand databases.

So whatever, I'm just sitting here now. It's freezing cold. There's some hunting dog running around fighting things; you may see that in the background. I thought it'd be a good time to get through and start discussing the next lecture, so let's see how far we can get before it gets too cold.

So the last class, we discussed sort of a high-level history of database systems, and primarily what I focused on was sort of thinking about the problem in terms of a high level, mostly based on data models, whether it was the CODASYL stuff, the hierarchical data model, or the relational data model. That was the sort of main discussion of the last class. Another way to sort of think about it was an overarching theme throughout the entire history of databases: this constant struggle of building database systems that have to deal with the limitations of the hardware at the time.

Right? It's the same in the 1970s and 1960s as it is now. We're always trying to run databases on new hardware and get the best performance we can out of it. Back in the 1970s, though, when they built the first relational database systems, the hardware was a lot different than what we have today. But at a high level, the basic idea is still the same.

The problem, though, is like when we start to talk about modern systems, although the basic idea is still the same, the limitations that hardware presents are not exactly the same. Back then, in the 1970s, you didn't have machines with a lot of sockets, a lot of cores. You had a single-core processor. You had a single-core CPU that could really only execute one thread at a time. The RAM was also severely limited; it was very expensive.

You were lucky to get a machine that had maybe like a megabyte. Now, we can go into the terabytes in a single box. Because RAM was limited, we had to store the entire database on disk. The whole architecture of the database system was predicated on retrieving data from disk, and of course, back then, this was way slower than it is now. Sequential access was much faster than random access, so you tried to design algorithms and data structures that could maximize sequential access.

Now, in the modern era, in the 2020s, we have machines that have enough DRAM such that most databases can probably fit entirely in main memory. There are always going to be the outliers; there are always going to be the Googles and the Facebooks and Amazons of the world, where their databases can be in the size of petabytes. But for probably 99% of the applications, their databases may be measured in gigabytes or a few terabytes.

With that size, you can certainly have a database fit entirely in main memory, whether it's a distributed system or a single-node system. To understand why databases aren't as large as you might think they actually are, you have to understand that there's a sort of difference between structured and unstructured data or semi-structured data.

Structured data sets, things that we mean, are normally talked about with databases. You have a well-defined schema; they have attributes, and every record has to have those attributes. In those data sets, they are usually again typically smaller. Unstructured data sets would be things like video files, sound files, or images. These are things where the contents of every single record in that data set are going to be different, or there's not even any structure at all.

You can't run queries directly on video data. Semi-structured would be things like log files that are generated in such a way that they're meant to be human-readable, but they're not going to have the exact same fields for every single log record. You can parse them and extract those fields, but some log records might have other fields; other ones might have others.

Again, unstructured and semi-structured data sets are typically larger. Think of YouTube, the MySQL database that they use in YouTube. That's going to be a fraction of the size of the total amount of video that they're storing. All the unstructured stuff, the MySQL Forties database, is the structured database. So for our purposes here in this class, we're primarily going to focus on structured data because that's really only the type of work that we're going to do here.

There's no magic way to vectorize query execution on video data. What you have to do is convert that video data into structured data, and then you can run your queries on it. So that's going to be the focus for ourselves here today.

The other thing we need to understand is how we're going to get the best performance in a database system to run on structured data. You may think, "All right, if my database can mostly fit in main memory, can I just take a traditional disk-based database system, as I described last semester in the introduction class?

Can we just run that on a machine with large enough RAM and set the buffer pool cache size to be big enough such that everything's going to fit in memory? Is that going to be enough for us to get the best performance?" And the spoiler is going to be no, right? We need to understand why. So for today's lecture, let's see how far we can get before we get too cold.

We're going to first discuss what a disk-oriented database system is, so we can understand when we start talking about in-memory systems how do they avoid all the bottlenecks of the slowdown issues of disk-oriented systems. Then we're going to talk about, from this, we can go a little deeper into the current role and see what the bottlenecks that we have to overcome to get these control protocols to run in in-memory systems.

The definition that I always like to use for a disk-oriented database system is one where the architecture of the system is predicated on the assumption that the primary search location of the database, all the contents of the database, records, indexes, and material that's used, everything stored, is going to be on some kind of non-volatile storage, whether that's a spinning disk hard drive or an SSD.

That means that the database is going to be designed based on this assumption, and therefore all the algorithms, the data structures, and everything inside of it has to be aware that at any time we could have to go get something from disk. Now the database itself will be organized into a set of fixed-length pages or sometimes blocks, and then we're going to use a memory buffering manager to store or cache the pages in memory as we receive them from disk.

Again, we're assuming a von Neumann architecture, and that means we can't operate directly on data as it exists on disk. That can change in some modern hardware, but for our purposes, here assume that's not the case. The preferable memory manager is really all about how to decide how to move this data back and forth between disk and memory as needed, and we want to do this in such a way that we minimize the amount of stalling or the times we have to go out to disk.

This buffer pool is sort of the key thing that differentiates a disk-oriented database system from a memory database system in terms of architecture. What's going to happen is we'll have a query that's going to execute in our system, and anytime it asks to access a tuple, we have to go find the page that our tuple is located in. The database says, "Go check to see whether that page that it needs for that query is already in memory." If it is, then we just hand back the pointer to where it is stored from our buffer pool, and the query can execute.

If it's not, then we need to do some extra stuff. The first thing we have to do is decide what frame we want to copy our page into our buffer pool. A frame is just a location in the allocated memory of our buffer manager, and we use this term to differentiate it between a page or a block because that same frame is going to be used over and over again for different pages.

If there's a free frame, then our job is easy. We just say, "This is the frame that we're going to put our page in." We go fetch it from disk and copy it in, and we're done. But if there are no free frames, then we need to find a page to evict from an existing frame, and that's when things get complicated.

If the page we want to evict is never modified by a transaction, I mean it's not dirty, then our job is easy; we just go write it out, drop it, and then reuse the frame. But if it is dirty, then we need to evict it, and we've got to write it back to disk and flush it. Once that's done, now we can use our frame.

Again, you can see why this is complicated. We're running essentially LRU or clock or whatever eviction policy you want to use to decide how to evict frames, and we have to balance that with what other queries or transactions are running at the same time, and what pages are dirty. This all gets very complicated.

Once the page is in memory, we can try to be smart and quickly translate any on-disk references to our page to now a memory address so we don't have to go through this whole process of checking the buffer pool manager every single time. But not every system actually does that.

At a high level, what I just talked about looks like this. For our purposes here, say we're doing a query that's going to look up an index; it wants to find a record. The record is inside a page, and we have to go fetch it from disk. To simplify our discussion, we'll say the index is not backed by buffer pool pages; it's just actually sitting in memory.

In most systems, that's actually not true; the index pages themselves would be backed by the buffer manager, so we have to go check to see whether those pages are in memory as well and do this entire process. But we'll just keep it simple and say it's entirely in memory.

So the first thing to do is look up our index to find our page ID and a slot number. Then we can use that page ID to do a look up in a page table and find the location of the page we're looking for. Let's say that we're looking for page 1, and then we would not find the entry in our page table, or we'd see an entry that says, "Oh, it's not in memory; it's on disk, and here's where to go find it on disk."

In order to bring it to memory, we have to go pick an existing page to evict. We have to latch this page table to make sure that nobody else is trying to bring it in at the same time we are. We then have to pick one of these pages to evict. So let's say we pick page 2, but page 2 is dirty, so now we've got to write it out to disk and flush it. Once that's done, we can then use the free frame to copy in page 1. Now we update our page table to say, "Hey, if you look for page 1, here's the frame in the buffer manager to go find it."

Once that's done, we can release our latches, and anybody can access it. This is a gross simplification of how this eviction process works. I'm not showing, well, if there was an entry for page 2, then you can update that now in the page table to say it is not in memory; now it's on disk.

At a high level, every single database system using a buffer pool is doing something similar. So what's the problem with this? Well, if we go back to our example and give our database system a lot of memory, and everything's going to fit in memory, we're still going through this entire process to look up the page table and try to do a translation of the record ID to its memory location every single time we access a tuple.

We have to take latches and protect things because we don't want to be accessing the page while another thread tries to evict that page. If we have enough memory, then we're never going to actually write anything out to disk, so pinning these pages and latching them is not necessary at all; it's just wasted work.

Running an eviction policy to update all internal metrics about how pages are being accessed is also a waste of work because, again, nothing's ever going to be a victim. This sort of answers my straw man question at the beginning, saying, "Can't we just give it a lot of memory?" Traditionally, disk-based systems require a lot of memory, and would that be enough for getting the same performance as we would get in an in-memory system? The answer is no because you're doing all this extra work just accessing a single page.

This is going to have cascading issues as well, particularly in concurrent transactions. Traditional disk-based systems design their database systems such that at any time, a transaction could touch memory that is not on disk, and therefore that transaction has to get stalled while the disk manager fetches it.

While it's stalled, other transactions will be able to run on other threads or the same thread, so the system can keep making forward progress. If we can only execute one transaction at a time and we stall anytime we have to get something from disk, then the system's going to look unresponsive because it's going to keep stalling every single time we have a page miss.

Because we're allowing other transactions to run at the same time, we have to use a concurrent protocol that could be setting locks in our records or objects in the database to make sure we provide the ACID guarantees desired for transactions. If now a transaction modifies a page and then that page gets written to disk before that transaction commits, it can commit because some other transaction evicted that page. We need to keep track of all transactional information, and if we crash and come back, the uncommitted transactions' changes don't persist.

In a disk-based system, if it's using locks, it maintains locking information in separate data structures—a memory hash table in the lock manager—to avoid locking information getting swapped out to disk. This way, I don't have to determine whether I can hold a lock on a tuple and go fetch that lock information. Everything is always going to be in memory.

Other problems in an in-memory system concern logging and recovery. Most database systems using a buffered file manager are going to be using the steal-no-force buffer manager policies. This basically means that all modifications a transaction makes have to get added to a write-ahead log, and those entries have to be flushed to disk before transactions are allowed to commit.

Any updates to a dirty page—the log of records corresponding to those updates—must be written to disk before the dirty page can be written to disk. These are things we covered in the introduction class last semester. In an in-memory system, we don't have dirty pages anymore, so maybe we don't need to use the exact same protocol, and perhaps our log entries don't need to store the exact same information as we had in a disk-oriented system.

If no dirty pages are ever flushed to disk, then it doesn't make sense to store the before image or the undo information of the transaction's modifications because that page will never be written. There's a lot of extra work we had to do in a disk-oriented system that doesn't make sense anymore in an in-memory system, like keeping track of the logs, sequence numbers, and maintaining the undo information.

Because again, dirty pages don't get written to disk as everything fits in memory. To get a better understanding of what this overhead is, there's a study that was done at MIT in 2008, over 10 years ago now, where they took an old TV database system and instrumented it so that they could measure the number of instructions that the data system was spending in different parts of the current query execution while running TPCC.

The idea here is to break down the system into different components and measure how much time we're spending in each of them. This is for a database where everything fits in memory. There's no reason to write in memory; nothing gets flushed to disk. The write-ahead log shows the cost of accessing data that's in memory using the disk-oriented architecture.

The first overhead is in the buffer manager; this is about 34% of the CPU instructions spent doing updates or lookups into the page table and keeping track of all the metadata for the eviction policies. Fourteen percent of the time is spent doing latching, which could be for the internal data structures such as the page table and the lock manager. Anytime low-level locks need to be protected, 16% of instructions are spent on locking.

This particular system, called Sure, uses two-phase locking, accounting for the overhead of updating lock information for transactions while running. Twelve percent of the instructions were spent in the log manager, which is not the cost of running out to disk but the cost of preparing the log records we're going to write out.

Then 16% of the time is spent doing comparisons of keys, traversals in the B+ tree. This is unavoidable; if I'm trying to find the record I want through the B+ tree, this is the cost of comparing keys. This now leaves us with a paltry 7% of the CPU instructions where we're actually doing what they would call real work, like executing the logic for transactions, getting back the data, and performing the commit operations.

This is showing you that if you take a disk-oriented system and give it all the memory that it wants so that everything fits in memory, you're not going to get potentially the best performance because you're still going to be paying the penalty for all this internal architecture that assumes data is not on disk, and all the protection mechanisms for that assumption are actually not necessary.

My battery on my tablet shut down earlier today when I was recording this outside; it got too cold, and the whole thing shut down. I was at about 20 degrees Fahrenheit, which is like negative 7 degrees Celsius, so that was kind of weird.

Back inside, in this weird German cold deprivation chamber, I come to think about deep thoughts about databases and somehow become a better programmer. I don't know if that's gonna work, so let's just continue with the lecture.

Where we left off just now was talking about how the disk-oriented systems make the assumption that the primary search location of the database could be on disk. There's all this architecture set up so that at any time, when you read something, you have to go check to see whether it's on disk. If not, you can stall that thread and do other stuff.

Now we're gonna switch over and talk about an in-memory database system. This is one where the system assumes that the primary search location for the database is always going to be permanently in memory. This means that anytime a transaction or a query goes and reads a tuple, it can assume that that tuple is going to be in memory and therefore it doesn't have to go through all that page table and buffer and check.

It can just read whatever it wants or write whatever it wants. It's not to say that everything we're going to talk about this semester is only targeting in-memory databases, but we'll see how there are specific design decisions we can make that will make our lives easier if we make this assumption.

The idea of in-memory databases is not new. The first proposed systems go back to the 1980s, but they weren't really viable options until maybe the last ten years because it's gotten to the point where DRAM prices and capacities are such that we can store really large databases in memory.

The initial ideas proposed in the 1980s will be mentioned a bit as we go. But the first commercial databases didn't come out until the 1990s. The most famous three are probably TimesTen, originally called SmallBase, and then they forked off from HP and became TimesTen. Oracle bought them around 2006 or so. DataBlitz was a system at Bell Labs in the 1990s, originally called Dali; it was sold for telecom switches and things like that. I do not think it's still around today, or if it is, it's in legacy mode.

The Alta base in South Korea is one of these early big data business systems that is still around today, and actually, within the last two or three years, they've open-sourced it. You can go check that out on GitHub. Even though the database is going to be entirely in memory, we're still going to organize the data into blocks and pages, not slots, as we don't have to worry about indirection within a page itself.

The system architecture would be slightly different now because instead of dealing with record IDs, we can deal with direct memory pointers. The way we're going to handle fixed-length versus variable-length data is slightly different than in a disk-based system because, again, we don't have slotted pages. Although not many systems have this, some do.

There is a concern that now everything's in memory; any thread can read or write anything in the address space of the process. To ensure that we don't have error-prone software corrupting our data and causing memory damage, we can use checksums throughout the system for these blocks to track the status of a page and detect errors with hardware problems.

Underneath, the operating system and hardware are also going to be organizing memory into pages. That's not really going to be our concern for most of this semester. We'll talk a little more about it in future lectures because we need to understand how to layout data. When we start placing that data, we can align it with what the underlying page representation in the operating system or the hardware is.

We can ignore that for now. Again, let's return to our high-level example where we had a query. One that accesses a tuple goes through an index to look...
It up so now in our index instead of returning back a record ID or page ID in an offset, we're now gonna get a block ID in an offset. This block ID could either be the direct memory address of a fixed-length block or there could be an additional mechanism that allows us to look it up and see you've converted that block ID to a memory location.

So the primary search location database again is in memory, where every tuple is in memory, but we're gonna organize them in these fixed-length records. For this, it doesn't matter what we're assuming, a row or a column store, but the basic idea is the same. That is, we're gonna have a set of blocks to store the fixed-length data for a tuple. Anything like an int, dates, floats, reals, things like that—all that can be stored is fixed length and it means the size of every tuple here is going to be the same.

So that says now if we have a block ID and we convert that back to a memory address when we want to do a lookup to find the tuple within the offset of that block, we just do some simple memory arithmetic to take the size of the tuple multiplied by our offset, and then it tells us where to jump in memory that block.

To handle variable-length data, this is gonna be much different than what we would do in a disk-based system. So for variable-length data, instead of actually storing the data inline with the fixed-length data, for the most part, the time it restores pointer to some other memory location in a variable-length data pool where that's a direct access to the data that corresponds to this attribute within this tuple.

Again, the idea here is that we can guarantee that all the tuples and the fixed-length data blocks are fixed length and then for anything that's variable length, we shove that into the variable-length data block. This is different than the slotted page design you would see in a disk coordinate system because in there we’re trying to reduce the number of disk reads. Therefore, we try to pack in all the variable-length data for a tuple along with the tuple itself.

All the fixed-length data—that doesn’t always happen, and if there's a spillover to another page, we can do that, but most of the time we try to make that happen. In this world of an in-memory system, we actually want to store the variable-length data separately so that way we can do those deterministic lookups to find memory addresses for tuples.

Some other things that better could be different than we kind of talked about quickly within memory databases. Right, and again, these are the things we’re talking about their entire semester. The first one is gonna be how we’re actually going to store indexes, sort of how with data structures we're gonna use for indexes.

So when this first in-memory database systems were proposed in the 1980s, the hardware was a lot different than the hardware we know about today or how the hardware is laid out today. So, in particular, back then the cache and memory access speeds were about the same, but now this is not the case at all. Right, CPU caches are way faster than main memory access.

So back then, people were designing data structures where reading from cache was the same as reading memory, to be so they would organize a certain way. But now, in the modern era, we don't want to do that. Therefore, we want to use indexes that know that they're dealing with memory and they have caches and try to minimize the cache misses when they access things.

So the spoiler is gonna be that a B+ tree is gonna turn out to be the best data structure to use for in-memory databases. Even though B+ trees were originally designed for disk-based databases, they're actually still really good for in-memory data as well.

So the other major difference between desk-based systems and in-memory indexes is that in a disk-based system, you would also write log records and write out pages for the index disk so that you can recover them after the system restarts. In an in-memory system, we're actually not going to record any log records to write indexes out to disk for most systems because the cost of rebuilding the index after restarting the system is gonna be super low.

Just think about this: when the system restarts, I gotta bring the database entirely back into main memory and so the cost of reading data from disk is super expensive, whereas the cost of building an index at once when the data is already in memory is cheap because it’s just CPU computations.

For this reason, and again avoiding the logging updates to records or the index updates at runtime, we just rebuild the index after we restart. Again, we’ll cover this in more detail when we talk about indexes for query processing.

Now, in the disk-based system, the disk I/O was always the most expensive thing. Who cares what kind of—for the most part—how you computed the data or organized the access of data once it was in memory?

So in a disk-based system versus an in-memory system, we are gonna care about now the overhead of doing function calls and branches and things like that. So we need to be more careful with how we organize the system and do query processing.

Sequential scans are also not significantly faster in an in-memory system, so maybe there are certain algorithms and join methods for doing joins and other things that we don’t have to worry about optimizing or maximizing access because random access will be good enough. Again, we’ll cover this in more detail as we go along.

For logging and recovery, I sort of mentioned this already before, but now that everything is in memory, there are no dirty pages to flush out to disk. We can be more conservative or we can end up recording less data than we usually would need in a disk or new system if we know that everything is in memory.

Standard techniques like root cause and batch logs amortize I/O. That’s applicable for a disk-based system too, but being able to use a more lightweight logging scheme is a definite advantage for an in-memory system, right?

Because again, there's no dirty pages; we don’t need to undo anything we write to disk as part of a checkpoint. It’s going to be a part of a committed transaction for the most part.

So now if the disk I/O is not the slowest resource, then we can change and adjust what sort of protocols, methods, and algorithms we are using to process queries and transactions in a database system.

Now we can be mindful of the other bottlenecks that are now going to come to the forefront because disk I/O is no longer in the critical path. This is essentially what the entire semester is about: how to deal with these other issues when we design database systems.

So locking, latching, and kernel methods, and the low-level primitives to protect those data structures are big deals. Cache line issues are significant because memory access versus cache access is much more expensive for chasing pointers, doing jumps to random locations in memory, and will cause more cache misses—that's problematic.

Evaluating predicates, you know, taking the WHERE clause for every billion tuples and evaluating it—that's gonna be expensive. Moving data or copying data, so data movement would be if I have to move data from one socket to another—that's expensive. Copying data would be materializing the intermediate results or copying data between sockets to pass things around.

Those are things we want to avoid and of course networking is always a big issue. Now, it’s primarily between the application and the database system and not between different nodes of the same database.

Matters were a discordant system, but again now that the disk is gone, this is even more problematic in an in-memory system. So for the rest of this lecture, I want to discuss locking and latching.

We’re gonna focus on the cartridge hole here and this is just mostly to set us up to understand going forward how to think about what makes a game system slow when we start scaling up more CPU cores.

What does it mean these other bottlenecks and problems that we're going to have? As we covered it in the introduction class, concurrency control is essentially the protocol that the databases have used that allows it to execute multiple transactions at the same time. Each of these transactions are going to sort of have this illusion that they're executing on the system by themselves.

So they don’t worry about reading or seeing the effects of other transactions from the same time. This is essentially what you want to achieve in your system because that’s the easiest way to program your application.

Of course, now this is not easy to do if you start interleaving operations between different transactions. You could violate this ordering. So the concurrency control protocol of any database system is going to provide atomicity and isolation guarantees within this ACID acronym.

For an in-memory database system, there's this key observation we have to make about how we're going to acquire locks to access tuples. The cost of a transaction acquiring a lock is essentially the same thing as just accessing the data.

What I mean by that is in a disk-bound system, we said that all the locks would be stored in memory in some kind of data structure and they would be separate from the actual tuples. But now, everything's in memory, then the cost of going and accessing the lock table is going to be the same as accessing the tuple.

So ideally, I want to be able to do those at the same time so that I'm not paying the penalty of doing two memory reads. This is the core idea that the concurrency control tries to install.

When we do it in an in-memory data system, concurrent control, the other important thing to understand is that in a disk-bound system, the stalls are due to transactions trying to access data that isn't in memory. You have to go get it from disk.

Now, we're not gonna have those kinds of stalls anymore. Yes, there will be memory stalls, but those are gonna be much, much less than the stalls we think we are gonna have.

The earlier systems don't have is a way to have more cores; so now the contention is going to be in the system of many transactions trying to read and write to the same objects at the same time. They're not stalling because there’s a disk; they’re stalling because they can’t acquire locks on certain things.

So do you understand again how we're actually going to be able to maintain locking information along with the tuples? We understand this sort of basic compare-and-swap primitive we're going to use to modify things.

We’re not going to use mutexes to protect tuples because that would be too slow. Instead, we’re gonna use these atomic operations called compare-and-swap. I think this is primarily covered in other classes, and so I just want to give you a quick overview of what it is because this is gonna come up multiple times throughout the semester.

It’s good to sort of see at once the basic details of how this is implemented at hardware; just know that this concept exists. Compare and swap is an atomic instruction that pretty much every modern CPU will provide. It’s not a new concept.

I think it goes back to the 1970s. Pretty much every x86, ARM architecture, or PowerPC will give this. Now, the idea is that it's a single instruction that's going to do a lookup in a memory location and it's gonna check to see if that memory location has a certain value that’s provided.

If that value is equal—so if the value in the memory location is equal to the value you’re checking with—then you’re allowed to install a new value to update it. Otherwise, the operation fails.

So in this example here, the underscore underscore sink pool compare-and-swap is a C++ or Linux library that can both provide operations or intrinsics. Different platforms have different ways to do this, and I think for the most part, in modern systems, there are either standardized or intrinsic functions that can do the same thing.

The idea here is that we're giving up a memory address, we’re giving it a compare value, and a new value. So the current memory address that M points to contains the value 20. In a single instruction, we’re gonna see whether 20 equals 20 in the memory location.

If yes, we want to install the new value 30. So in this case, in a single instruction, we look up to see that M equals 20, and it does, so then we can install 30. Otherwise, that would have failed. In this example here, the function returns true or false, indicating whether it succeeded or not.

There are different types of compare-and-swap instructions. Sometimes they'll return the new value that got installed or the old one if it didn't get updated. You can change the size of the memory address that you're looking at with 32 bits or 64 bits, but again, the basic idea is always the same thing.

Within a single instruction, we can do this check, and we incorporate that we’re going to use all throughout the semester to allow us to do these kinds of lock-free or latch-free operations very efficiently.

So we want to talk quickly about the tutor categories or classes of comparable protocols that we're gonna be working with this semester. This, again, serves as a refresher from what we covered in the introduction class lesson.

So the first one is two-phase locking. These are pessimistic schemes where the data system is going to assume that transactions are going to conflict, and therefore they have required locks on any objects before they are allowed to access them.

Timestamp ordering is an optimistic scheme where you assume conflicts are rare, so you don't require transactions to acquire locks on database objects. All you do is that when the transaction goes to commit, you see whether there was a conflict and then you correct them as needed.

Let's go through each of these one by one, showing really high-level examples, and then we'll get into the paper discussing how you actually implement this on modern systems.

So if there’s a simple example for two-phase locking, we have a transaction T1, and it wants to do a read on A followed by a write on B. So again, in two-phase locking, we have to acquire the locks for any object that we want to read and write.

In this case, here we’ve got to get the read lock on A, followed by a lock on B. This is a really simple or simplified example because, you know, there’s only this simple one type of lock on A and B, but in a real system, as we covered last semester, you know, you would have different lock modes.

You can have a shared mode where multiple transactions can read the same object and exclusive mode to say that only one transaction can lock it and can write it at a given time. So in this case here, because of two-phase locking, the first part of the transaction is called the growing phase, and this is where we’re acquiring locks that we need during the exertion of the transaction.

Soon as we release one lock, now we’re in the shrinking phase, and we're not allowed to acquire any new locks, but we can do operations on the only objects we still have locks for.

So in a real system, like in a disk-based SQL system, you wouldn’t actually have explicit lock and unlock commands. These are something we’ve created that happen automatically underneath the covers. So typically, you don’t release the locks until the transaction actually commits, which is called rigorous two-phase locking.

But for our purposes here in this example, we’re not doing that. We can unlock A and then follow up and then do the write on B, and that still follows the original two-phase locking protocol.

All right, so let’s say now we have another transaction T2 comes along, and it wants to do a write on A. So say these transactions are running at the same time on different threads, and therefore, they can do these things in parallel with each other.

So in T1, we first get the lock on A and T2 gets a lock on B. This is fine, assuming there’s no other transaction trying to write at the same time, so both these transactions can acquire those locks. In the next step, their transaction T1 does the read on A, which it is allowed to do because it holds the lock on A.

Transaction T2 does the write on B, which it is allowed to do because it holds the lock on B. But now we get into trouble here because T1 wants to do a lock on B, and T2 wants to lock on A, but each of these are held by the other transaction.

So they have to stall, right? They’ve been there essentially waiting for the other transaction to give up the lock. So they can’t go ahead and make forward progress, but of course, we have a deadlock here.

Now we have to do something to break this because otherwise, the system would be locked forever. There are two ways to handle deadlocks. In a locking system, the first is to do deadlock detection. This is where you have a separate background thread that’s just gonna occasionally or periodically wake up and check to see whether the transactions are running.

If it finds a deadlock, then it uses some kind of heuristics to decide how to kill them. It could say, you know, kill the transaction that has done the least amount of work, or is the oldest, or holds the most locks. Different systems do various things; different systems do have different types of deadlock detection algorithms.

Deadlock prevention, instead of having a separate thread, you just have a way to make sure that when a transaction tries to acquire a lock, it can’t hold it. Then it makes a decision about what it should do other than just waiting.

For example, if a transaction tries to acquire a lock, but that lock is being held by somebody else, it can either kill itself or kill the other transaction and steal its locks. Again, we do have to make sure we do the operations in the right order so that way there are no cycles of dependencies.

The other type of protocol is called timestamp ordering. Again, this is sort of category systems that are in use time stamps and a lock to figure out the right order that transactions should be allowed to complete.

The two basic protocols are basic timestamp ordering, which is sort of confusing because it’s usually referred to as the timestamp ordering protocol, but it's all called basic TIO dis to differentiate it. So the idea here is that we're gonna check for conflicts on every read and write, and we're just gonna use timestamps to determine whether there is a conflict.

Then we're gonna copy tuples into a private workspace for each transaction as they read them to ensure if they go back and read the same tuple, they get the same value because otherwise, you could be reading something that was written in the future, and that shouldn't have happened.

Optimistic concurrency control is where, in addition to copying the things you read into your private workspace, you’re also gonna make copies of any tuples you modify, and all your writes go into a private workspace as well. So now when a transaction commits, we get to verify that there are no conflicts. If not, then we can go ahead and install the changes to the global database.

So OCC is an old protocol. As you might conclude, most protocols, the basic ones are old. This one goes back to 1981 and actually was invented here at Carnegie Mellon by Professor HT Cohn. HT Cohn is no longer here; he's now at Harvard and is not even a database professor anymore. He didn't know networking, but this is sort of like his most famous work—it's actually a databases paper, so that's kind of cool.

This came out of the computer.
department here at CMU so here's the simple transaction was to read on a write on read on a write on a and write on B so in our database now we don't need the read time stamp field for records we only have to have the write time stamp field and so now when our transaction starts unlike in basic time stamp boarding protocol we're not gonna actually assign it a time stamp we're gonna do that later.

So any time we're gonna read and write stuff we're gonna make a copy of it into a private workspace and set it with the types of infinity. So OCC has three phases, so the first one unfortunately is called the read phase. So even though we're gonna do writes and for whatever reason they call this the read phase of a transaction, if I had my choice, I would call this like the run phase or in the execute phase. I think that makes more sense. For whatever reason, it's called the read phase.

So again we're gonna do a read on A here in the B phase, so we're gonna have to copy that record in the global database into our private workspace so that again we can always read this thing over and over again at the same value. So now when we do write on A, we're not gonna modify the global database; we're gonna modify the one in a private workspace. So we don't have a write time stamp yet because we haven't been assigned one, so we're just gonna set that to an infinity in our workspace and then update the value.

Same thing on B here, we're gonna first copy it from the global database into our private workspace and then update it with our infinity timestamp and our new value. So now when our transaction goes to commit, it's not actually gonna commit right away. There's not gonna be two additional phases: the validate phase and the write phase.

The validate phase is basically where we're gonna look at a private workspace and see what records we modified and go to see whether that would be by whether there's any transactions that are still running but have read this data and therefore they didn't see our updates because there was in a private workspace or there's transactions in the past that have already committed that have modified this and therefore we didn't actually see their changes and therefore we would have a conflict.

So that's either you're doing backwards validation or forward validation. Again, we covered that in the introduction class; it's not really important right now, but the basic idea is like making sure that transactions are always committing sort of in the right order. So if we pass the validate phase, there's no conflicts, then we now enter the write phase where we now are finally assigned a time stamp and then we update the global database with our changes that we've made from our private workspace with our new time stamp.

And then at this point that transaction is considered done and it goes and commits. So the one important thing to understand about this is that when there's not really any contention, then the optimistic schemes like OCC are actually performing better than two-phase locking because since we assume that the conflicts are rare, we're gonna spend less time checking for conflicts that don't actually exist. It’s sort of like in the discordian system where if everything fits in memory then we're gonna waste time looking to see whether we have to evict something to make space in our buffer pool manager.

All right, so it's better off just to optimistically assume everything fits in memory and jump right to get what we need. But the issues can be now with high contention. I mean we have a lot of transactions trying to read and write to the same records. Then all the protocols that I've just talked about are essentially going to degenerate down to just being the serial execution of transactions, meaning only one transaction can run at a time.

We're gonna waste all this extra time in our protocols doing work that's essentially useless because the transactions are never gonna be able to commit. So to better understand this issue, this is what the paper had you guys read is about. This is the start of the idea with a former student of mine who is now a data professor at the University of Wisconsin.

We did a few years ago where we implemented a testbed system that allows us to evaluate different concurrency protocols at rich green levels of parallelism. So it's kind of intriguing. Instead of taking like PostgreSQL or MySQL or whatever database you want and trying to do a bake-off between the two of them, we implemented a single system that had a pluggable API that allows a drop-in of different concurrency protocols without making major changes to the rest of the system.

And the idea here is that we want to strip it down to just being the bare minimum you need to execute transactions in a database system without all the additional bells and whistles and features that a full-featured system like MySQL would have. We just focus on what the overhead is of these concurrency protocols.

So the idea also was that we want to run these systems in a highly parallel environment so that it would sort of really expose what the main bottlenecks are in the implementations of the different protocols in the system in a way that you couldn't get maybe running on a machine like 32 cores or 64 cores, which is the most you can get around this time in 2014 when we wrote this paper.

So the system we're gonna use for this evaluation is called DBX 1000. So this was again the system that the student wrote for this paper and then it was written from scratch just to have this pluggable API that allows you to drop in different implementations of these concurrency protocols.

So it's a stripped-down system; there's no network access, there's no logging at least at the time we were at this paper, and it dated support concurrent indexes. It really was just focusing on how fast can you do concurrency protocols. All the transactions are going to execute with stored procedures, and so that means all the server-side logic in order to execute a transaction is contained on the data system itself, so you never talk about them over the network and ask the application of the client what should I do next.

And so we're gonna run this now also in a chip simulator developed by my team at MIT called Graphite. This was modeling a single socket tile-based CPU with a NUMA architecture. NUMA stands for non-uniform cache access and we contrast that with the von Neumann architecture, non-uniform memory access that we're mostly gonna be talking about during the semester, like Intel Xeon chips.

So NUMA basically means that the cost of one core accessing the cache of another core is not always going to be the same because it's gonna have this tile-based architecture where you have to communicate over this mesh network in order to do cache invalidation and reason writes between different cores. Some cores are closer to you on the network, and therefore, your reading and writing their memory locations or their caches is much faster than one that's a mile away on the other side of this network.

I'm not really an architecture person. The reason why we went with this tile-based approach is that when you talk to people that are architecture experts, they said that when you start getting to like a thousand core count, sort of the conventional wisdom is that you'd want to use a tile-based architecture like this.

Again, the main takeaways we're gonna get from the study are not gonna be dependent on using a tile-based architecture and they're still applicable to the Xeon type system, as we've talked about for the semester. It's just what the hardware was that we had at the time to model this.

So another important thing to understand too is that this CPU stimulator runs really slow. All right, it's ten thousand times slower than the wall clock time of a system running bare metal. So that means that there's a bunch of optimizations the student had to do in DBX 1000 to get it to run at a reasonable time in the simulator.

So if you go look at the code on GitHub, you'll find that there's a lot of assembly in the different parts of the system because he had to do that to get it to run fast and to get the experience to finish in time. All right, so the target workload we're gonna be using for this paper is going to be YCSB, Yahoo Cloud Serving Benchmark.

So the workload is basically a key-value store workload that's sort of meant to model the access patterns of web services or web-based applications. In the database, there'd be two million tuples and each tuple is one kilobyte. So every transaction that we're gonna model or run in our system is gonna execute queries that are gonna read and write sixteen different tuples at a time, and we're gonna vary their access patterns in the access pattern.

Sometimes they'll be hotspots and sometimes they'll be uniform access, and all the transactions are gonna run a stored procedure, running the serializable isolation level. So the six different schemes we're going to compare are based on the different types of protocols that I talked about before.

For two-phase locking, there's gonna be deadlock detection and then deadlock prevention with no wait and wait and die. This is emblematic of some of the biggest database systems that are out there today. Now, in the time stamp ordering side, there's a time stamp ordering and there's OCC and there's a multi-version protocol described in the 1979 paper that version described MVCC that uses time stamp ordering.

Next class, we'll see that you can have different variants of multi-versioning that use OCC or two-phase locking, but for this one, we just went with this sort of the original protocol proposed in the 1970s, and this is emblematic about most of the newer systems today as well as some sort of classic database systems that use multi-versioning.

All right, so for the first experiment here, this is sort of the baseline performance of these different protocols in a read-only workload. So what you're seeing is that along the x-axis as we scale the number of cores, we're adding work—the more concurrent transactions running at the same time.

So every single time we added a core, that's going to have an additional transaction running, which is an important executing part of the workload. So at 200 cores, there are 200 concurrent transactions at the same time. This is a read-only workload with uniform memory access or tuple access.

This is the best that these different protocols can do because there's zero contention. So the first thing we see is that the deadlock detection and the no wait protocols actually can almost scale linearly and perform the best because these protocols are so simple. There's no locks, and therefore the overhead of transactions and executing is minimal.

Next thing you see is that there's a dip here at eight hundred cores, where wait and die and MVCC start to drop down, and this is due to the overhead of allocating unique time stamps for transactions as they're running. Right when you're running with a million transactions at the same time or when you're running eight million transactions a second for this table-based architecture, the time stamp allocation and coordinating across all the different threads becomes a bottleneck.

And lastly, you see that OCC here actually does the worst. This is a combination of having to copy the private workspace for every single transaction and copy that back into the system, which actually comes a big bottleneck.

So next we see here is a write-intensive workload where we have transactions actually updating the database. This is on a medium contention workload where 60% of transactions are going to try to access a hot spot of 20% of the database.

So the first thing you need to see is that deadlock detection is actually now the worst protocol used for this environment. You know, in the last slide I showed you, it was actually the best, but now when you have high contention, there's more deadlocks in the system, and therefore it takes longer for the deadlock detection thread to come around and break these deadlocks.

So you have threads stalled and waiting for that deadlock detection thread to come through and clean things up, and that hurts performance. Next, you see that the no wait and wait protocols actually do the best. This is because these protocols are so simple.

What's happening is that, yes, there's anytime there's a conflict and there would be a deadlock, these protocols immediately just kill the transaction to restart them. So you don't spend any wasted time trying to figure out should I wait or hoping the other transaction could give up a slot; you take some action right away.

No wait is the simplest one. It basically says I try to acquire my transaction lock, I couldn't get it, immediately kill myself. And again, because we're using stored procedures, there's no overhead of restarting transactions, and in a memory environment, it's super fast.

In the middle here, you see the three timestamp ordering protocols—basic TIO, MVCC, and OCC. They're roughly all doing about the same, and OCC is doing slower again because there's extra overhead of copying things into the workspace over and over again. But you know, they're all roughly about the same.

So now we get to this final graph here, which is the most important one of the paper, and this is where we're running a writing system workload where 90% of the transactions are updating 10% of the database. So now you see that all the protocols basically crash down to zero when we get up to a thousand cores.

None of these protocols were actually scaling. The reason is that it's all this overhead of transactions having to check for conflicts or copy things around, and there are so many conflicts that you just can't make any progress and get things completed.

One interesting thing is that you see no wait is kind of going along doing okay relative to the other protocols until eight hundred threads, and then it crashes down to zero. So it's not doing that great compared to the previous life— I think it's only executing 200,000 transactions a second whereas the other slice I was showing you can do millions of transactions a second.

But again, it’s doing okay because its protocol is so simple that, yes, there’s no way when the system identifies that there's going to be a deadlock, it kills the transaction immediately and restarts it, whereas the other ones and the cost of doing that is super cheap relative to the other ones.

Of course, now at a thousand cores, doing that just causes so much contention that you can't get any work done. The other interesting thing to point out is that OCC is actually the worst over here when you have a small number of cores, but on the other side, it’s actually doing the best again.

This is because it's essentially degenerating down to the serial execution of transactions. So the way the protocol works is that when you enter the validation phase, you can guarantee that one transaction is in that validation phase, and therefore one will always be allowed to actually commit.

So when you're essentially running here at thousand threads, or a thousand cores, you're running the same thing. At least one transaction is gonna always be guaranteed to commit, and that's why it gets roughly the same performance it gets on the other side of the graph.

But the main takeaway again is that over here at a thousand cores, everything is doing bad. It got a little bit better since 2014 when we wrote this paper, but this is roughly where we are actually today in modern systems in terms of running in a single box with 32 or 64 cores.

So we really haven't hit the danger zone in a modern system of having high contention without really large core counts on a single box, and we're just sort of not there yet. But this graph basically shows you that the existing methods that we use out today aren't gonna be scalable.

So real quickly, where are we actually spending our time? This is a breakdown of the different protocols while executing transactions, and you see that in the case of no wait, it's spending a large percent of its time aborting transactions because as soon as it finds a conflict, it says this is bad and just restarts it, whereas the other protocols are spending time waiting to try to acquire locks or try to acquire time stamps or waiting on a detection thread. Again, that's all just sort of wasted work.

All right, so let's quickly talk about some of the bottlenecks we identified in this paper and sort of some potential solutions we can use to get around them. The idea here is to understand these issues at a high level so that again when we start talking about MVCC in more detail in the next class, in the back of your mind, you should be thinking about oh well this is how they would handle this. This is how this could be a problem when we faced larger core counts than what we actually have today.

So lock thrashing, time stamp allocation, and memory allocation will cause each of these one by one. Lock thrashing is a phenomenon that you would have in a two-phase locking system where if a transaction ends up waiting longer to acquire locks, then this causes other transactions waiting behind it to end up waiting longer to acquire the locks the first transaction is holding.

Therefore, that causes others in the second path of transactions to wait even longer. This convoy effect causes one transaction that waits longer to cause everybody else to wait longer, and then that gets exacerbated as you add more transactions.

One way we can actually measure this in our system is by removing all the overhead of doing any deadlock prevention or deadlock detection and just having transactions do nothing but acquire locks and just wait. In this case, the way we can do this is that we're gonna force transactions to acquire locks always in some kind of primary key order.

Think of it like holding locks one, two, three, four, five, six and we have to acquire them in that sort of lexicographical order. In this environment, deadlocks are possible, so we'll never have any stalls due to deadlocks. It's just stalls waiting to acquire these locks.

If you run that experiment on the system, you get a graph like this. The fader variable here is representing the amount of skew in the workload, or more transactions trying to access a small number of tuples, so the most extreme case is when theta is 0.8 and theta is zero, meaning there's no contention.

What you see are these nice curves, these knee bends where lock thrashing comes into play, and now transactions end up waiting longer and longer to acquire locks when there's more contention. At some point, this graph just keeps going down, and you don’t recover from this thrashing effect.

What I really like about this experiment is that it shows this graph looks exactly like any sort of textbook that shows you or describes lock thrashing. This is one example of a textbook, but they always had this sort of theoretical diagram, like here’s the effect of lock thrashing.

In this case, our graph matches exactly what you would expect to see according to the theorem, which is nice. Time stamp allocation is not necessarily gonna be a big issue for us in our system. We're gonna get by with doing either batch addition or atomic addition, which is another variant.

But it's basically saying that in really large core counts, having a transaction to opt to acquire unique timestamps can actually be a big bottleneck. The mutex is always going to be bad; we don’t want to rely on that.

Impossible atomic add-batch are just compare and swap methods, and then for these particular CPUs, some CPUs like Intel can have a hardware clock or you can get through some instructions. But this is not clear whether Intel's going to keep this around, and that's not something we potentially would want to rely on.

A Harvard calendar approach was something that the student came up with and added to the Graphite simulation system. This is not something we would have it, you know, that exists today. This graph is just showing you that one of these bottlenecks comes into play when running these different time stamp allocation schemes, and again the batch atomic one is probably gonna be good enough for what we need.

Right? We're talking about trying to allocate a hundred million timestamps for a second, which is more than we'll ever need. The main issue here is that since we have to copy things into private workspaces for some protocols, or copy tuples and make sure penal reads in public spaces, that copying can be expensive.

If we use the default Libc malloc, that's gonna always be super slow, and we never want to use it. So we're not gonna discuss different memory allocators too much this semester other than to say we don’t want to use the default malloc.

When we end up using Jemalloc or TCmalloc or these other malloc protocols or libraries that are out there, all right. So again, I realize it's kind of weird for having me give the rest of this lecture in this gold-plated chamber thing, but I just want to get this out there so that we can start talking about MVCC in more detail on Wednesday.

I want to come back to campus. So the main takeaway you give in this lecture is that the design of an in-memory data system has to be much different than a disk writing system. Conceptually it's the same, right? You do queries, their indexes will not transactions. But the implementation of the protocols of these systems are gonna be much different.

The good news also is that in-memory databases are not considered to be super bizarre anymore. When I first started grad school maybe over ten years ago now, but like 2007 or 2006, they were considered sort of an exotic system. Nowadays, especially with systems like Redis, they become more common, and people become more comfortable with the idea of having in-memory systems.

The one thing that I will say is that in recent years it seems like the DRAM prices and capacities have stalled compared to the gains we've seen in SSDs. So whereas before, I was pretty bullish about oh, well in-memory databases are gonna take over the world of databases. Why would you ever want to use disk-based systems? I don't think that's actually true, and I think that it's worth looking to see what we can do to bring back SSDs in a database system without actually having to slow it down and bringing all the overhead of a disk-oriented architecture.

So we'll talk about that a little bit at the end of the semester, but that's something in the back of my mind, and I think it'll come up a couple of times during the semester.

All right, so just to finish up, this is it for today. I'll be flying back this Friday, and I'll be on campus on Tuesday next week, and we'll have the recitation for discussing the architecture of the system. Then on Wednesday's class next week, we will start discussing multi-version concurrency control because again, this is the dominant method or protocol that everyone uses.

But it’s more than just compared to the protocol; it's going to sort of encompass all different aspects of the data system. So we'll start understanding that in a bit more detail. Okay, so that's it for today. I'm gonna go hang out with the Germans a bit more and then I'll see everyone next week in class. All right, take care. See ya!
Take a say I pray.

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "As I said, I can't be on campus this week.",
      "section_level": 1,
      "section_title": "Introduction / Setting the Scene"
    },
    {
      "index_sentences": "So the last class, we discussed sort of a high-level history of database systems, and primarily what I focused on was sort of thinking about the problem in terms of a high level, mostly based on data models, whether it was the CODASYL stuff, the hierarchical data model, or the relational data model.",
      "section_level": 1,
      "section_title": "Recap of Previous Lecture: History and Hardware Limitations"
    },
    {
      "index_sentences": "The problem, though, is like when we start to talk about modern systems, although the basic idea is still the same, the limitations that hardware presents are not exactly the same.",
      "section_level": 2,
      "section_title": "Hardware Differences: 1970s vs. Modern Era"
    },
    {
      "index_sentences": "To understand why databases aren't as large as you might think they actually are, you have to understand that there's a sort of difference between structured and unstructured data or semi-structured data.",
      "section_level": 2,
      "section_title": "Structured vs. Unstructured Data"
    },
    {
      "index_sentences": "You may think, \"All right, if my database can mostly fit in main memory, can I just take a traditional disk-based database system, as I described last semester in the introduction class?\"",
      "section_level": 1,
      "section_title": "Limitations of Disk-Oriented Systems on Modern Hardware"
    },
    {
      "index_sentences": "The definition that I always like to use for a disk-oriented database system is one where the architecture of the system is predicated on the assumption that the primary search location of the database, all the contents of the database, records, indexes, and material that's used, everything stored, is going to be on some kind of non-volatile storage, whether that's a spinning disk hard drive or an SSD.",
      "section_level": 2,
      "section_title": "Disk-Oriented Database System Architecture"
    },
    {
      "index_sentences": "So what's the problem with this?",
      "section_level": 2,
      "section_title": "Overhead of Disk-Oriented Systems with Large RAM"
    },
    {
      "index_sentences": "This is going to have cascading issues as well, particularly in concurrent transactions.",
      "section_level": 3,
      "section_title": "Concurrency Control and Recovery Implications"
    },
    {
      "index_sentences": "To get a better understanding of what this overhead is, there's a study that was done at MIT in 2008, over 10 years ago now, where they took an old TV database system and instrumented it so that they could measure the number of instructions that the data system was spending in different parts of the current query execution while running TPCC.",
      "section_level": 2,
      "section_title": "Overhead Measurement Study (MIT 2008)"
    },
    {
      "index_sentences": "Now we're gonna switch over and talk about an in-memory database system.",
      "section_level": 1,
      "section_title": "In-Memory Database Systems"
    },
    {
      "index_sentences": "This is one where the system assumes that the primary search location for the database is always going to be permanently in memory.",
      "section_level": 2,
      "section_title": "Definition, History, and Core Assumption"
    },
    {
      "index_sentences": "Even though the database is going to be entirely in memory, we're still going to organize the data into blocks and pages, not slots, as we don't have to worry about indirection within a page itself.",
      "section_level": 2,
      "section_title": "Architecture Details (Memory Pointers, Data Layout)"
    },
    {
      "index_sentences": "Again, let's return to our high-level example where we had a query.",
      "section_level": 3,
      "section_title": "Accessing Data (Block IDs, Variable-Length)"
    },
    {
      "index_sentences": "So when this first in-memory database systems were proposed in the 1980s, the hardware was a lot different than the hardware we know about today or how the hardware is laid out today.",
      "section_level": 2,
      "section_title": "Indexing Strategies"
    },
    {
      "index_sentences": "Now, in the disk-based system, the disk I/O was always the most expensive thing.",
      "section_level": 2,
      "section_title": "Query Processing Differences"
    },
    {
      "index_sentences": "For logging and recovery, I sort of mentioned this already before, but now that everything is in memory, there are no dirty pages to flush out to disk.",
      "section_level": 2,
      "section_title": "Logging and Recovery Adaptations"
    },
    {
      "index_sentences": "So now if the disk I/O is not the slowest resource, then we can change and adjust what sort of protocols, methods, and algorithms we are using to process queries and transactions in a database system.",
      "section_level": 1,
      "section_title": "Identifying and Evaluating Bottlenecks in High Parallelism"
    },
    {
      "index_sentences": "This is essentially what the entire semester is about: how to deal with these other issues when we design database systems.",
      "section_level": 2,
      "section_title": "Primary Bottlenecks: Locking, Latching, Cache"
    },
    {
      "index_sentences": "As we covered it in the introduction class, concurrency control is essentially the protocol that the databases have used that allows it to execute multiple transactions at the same time.",
      "section_level": 3,
      "section_title": "Concurrency Control Protocol Overview"
    },
    {
      "index_sentences": "So do you understand again how we're actually going to be able to maintain locking information along with the tuples?",
      "section_level": 4,
      "section_title": "Atomic Operations: Compare-and-Swap (CAS)"
    },
    {
      "index_sentences": "So we want to talk quickly about the tutor categories or classes of comparable protocols that we're gonna be working with this semester.",
      "section_level": 4,
      "section_title": "Protocol Categories: 2PL, T/O, OCC"
    },
    {
      "index_sentences": "So if there’s a simple example for two-phase locking, we have a transaction T1, and it wants to do a read on A followed by a write on B.",
      "section_level": 5,
      "section_title": "Two-Phase Locking (2PL)"
    },
    {
      "index_sentences": "The other type of protocol is called timestamp ordering.",
      "section_level": 5,
      "section_title": "Timestamp Ordering (T/O) and Optimistic Concurrency Control (OCC)"
    },
    {
      "index_sentences": "So the one important thing to understand about this is that when there's not really any contention, then the optimistic schemes like OCC are actually performing better than two-phase locking because since we assume that the conflicts are rare, we're gonna spend less time checking for conflicts that don't actually exist.",
      "section_level": 5,
      "section_title": "Protocol Performance under Contention"
    },
    {
      "index_sentences": "So to better understand this issue, this is what the paper had you guys read is about.",
      "section_level": 3,
      "section_title": "Evaluation Testbed: DBX1000"
    },
    {
      "index_sentences": "So we're gonna run this now also in a chip simulator developed by my team at MIT called Graphite.",
      "section_level": 4,
      "section_title": "Chip Simulator (Graphite) and NUMA"
    },
    {
      "index_sentences": "All right, so the target workload we're gonna be using for this paper is going to be YCSB, Yahoo Cloud Serving Benchmark.",
      "section_level": 4,
      "section_title": "Evaluation Workload: YCSB"
    },
    {
      "index_sentences": "So the six different schemes we're going to compare are based on the different types of protocols that I talked about before.",
      "section_level": 4,
      "section_title": "Protocols Evaluated in the Study"
    },
    {
      "index_sentences": "All right, so for the first experiment here, this is sort of the baseline performance of these different protocols in a read-only workload.",
      "section_level": 3,
      "section_title": "Experiment Results: Read-Only Workload"
    },
    {
      "index_sentences": "Next we see here is a write-intensive workload where we have transactions actually updating the database.",
      "section_level": 3,
      "section_title": "Experiment Results: Write-Intensive (Medium Contention)"
    },
    {
      "index_sentences": "So now we get to this final graph here, which is the most important one of the paper, and this is where we're running a writing system workload where 90% of the transactions are updating 10% of the database.",
      "section_level": 3,
      "section_title": "Experiment Results: Write-Intensive (High Contention)"
    },
    {
      "index_sentences": "So real quickly, where are we actually spending our time?",
      "section_level": 3,
      "section_title": "Analysis: Where CPU Time is Spent"
    },
    {
      "index_sentences": "All right, so let's quickly talk about some of the bottlenecks we identified in this paper and sort of some potential solutions we can use to get around them.",
      "section_level": 2,
      "section_title": "Specific Bottlenecks Identified in High Parallelism"
    },
    {
      "index_sentences": "Lock thrashing is a phenomenon that you would have in a two-phase locking system where if a transaction ends up waiting longer to acquire locks, then this causes other transactions waiting behind it to end up waiting longer to acquire the locks the first transaction is holding.",
      "section_level": 3,
      "section_title": "Lock Thrashing"
    },
    {
      "index_sentences": "But it's basically saying that in really large core counts, having a transaction to opt to acquire unique timestamps can actually be a big bottleneck.",
      "section_level": 3,
      "section_title": "Timestamp Allocation"
    },
    {
      "index_sentences": "The main issue here is that since we have to copy things into private workspaces for some protocols, or copy tuples and make sure penal reads in public spaces, that copying can be expensive.",
      "section_level": 3,
      "section_title": "Memory Allocation and Copying"
    },
    {
      "index_sentences": "The main takeaway you give in this lecture is that the design of an in-memory data system has to be much different than a disk writing system.",
      "section_level": 1,
      "section_title": "Conclusion and Future Outlook"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "An overarching theme throughout the history of databases is the constant struggle to build systems that can deal with the limitations of the hardware available at the time. Databases are always trying to run on new hardware to get the best possible performance.",
      "index_of_source": "The other way to sort of think about it was an overarching theme throughout the entire history",
      "question": "According to the speaker, what is a constant struggle in the history of building database systems?"
    },
    {
      "answer": "In the 1970s, machines had single-core processors, severely limited and expensive RAM (maybe a megabyte), and had to store the entire database on disk. The architecture was predicated on retrieving data from disk, and algorithms and data structures were designed to maximize sequential access because it was much faster than random access.",
      "index_of_source": "Back then, in the 1970s, you didn't have machines with a lot of sockets, a lot of cores.",
      "question": "How did hardware limitations in the 1970s influence the design of the first relational database systems?"
    },
    {
      "answer": "Most modern databases for probably 99% of applications are measured in gigabytes or a few terabytes, a size that can fit entirely in main memory (DRAM) on modern machines. Outliers like Google or Facebook might have petabytes, but this is not typical.",
      "index_of_source": "Now, in the modern era, in the 2020s, we have machines that have enough DRAM such that most databases",
      "question": "Why does the speaker believe most modern databases can fit entirely in main memory?"
    },
    {
      "answer": "Simply giving a traditional disk-based system a lot of RAM and setting a large buffer pool cache is not enough for best performance because the system still incurs overhead designed for disk interaction. This includes looking up the page table for translations, taking latches to protect pages, running eviction policies, and managing logging protocols designed for potential disk writes, even if nothing is actually written to disk.",
      "index_of_source": "Running an eviction policy to update all internal metrics about how pages are being accessed",
      "question": "Why is just increasing the buffer pool size in a traditional disk-oriented database not sufficient to achieve the performance of an in-memory database?"
    },
    {
      "answer": "A disk-oriented database system's architecture is predicated on the assumption that the primary storage location of the database (records, indexes, etc.) is non-volatile storage like a hard drive or SSD. All algorithms and data structures are designed around the need to fetch data from disk.",
      "index_of_source": "The definition that I always like to use for a disk-oriented database system is one where the architecture of the system is predicated on the assumption that",
      "question": "What is the defining characteristic of a disk-oriented database system?"
    },
    {
      "answer": "When a requested page is not in memory (a page miss), the system must: 1) Decide which memory frame in the buffer pool to use for the new page. 2) If there are no free frames, select an existing page to evict using an eviction policy. 3) If the page to evict is 'dirty' (modified), write it back to disk before reusing the frame. 4) Fetch the requested page from disk and copy it into the chosen frame. 5) Update internal structures like the page table to reflect the page's new location in memory.",
      "index_of_source": "If it's not, then we need to do some extra stuff.",
      "question": "Outline the steps a disk-oriented database takes when a requested page is not found in the buffer pool memory."
    },
    {
      "answer": "In an in-memory system, variable-length data is typically stored separately from the fixed-length data for a tuple. The fixed-length part of the tuple in the main data blocks will store a pointer to the location of the variable-length data in a separate variable-length data pool. This differs from disk-based slotted pages which try to pack variable-length data inline with the tuple to reduce disk reads, even if it causes indirection within the page.",
      "index_of_source": "To handle variable-length data, this is gonna be much different than what we would do in a disk-based system.",
      "question": "How is variable-length data typically handled in an in-memory database compared to a disk-based system, and what is the reason for this difference?"
    },
    {
      "answer": "Most in-memory systems do not log index updates to disk because the cost of rebuilding the index after a system restart is considered low compared to the cost of reading data from disk. Since all data must be loaded into memory anyway after a restart, building the index is a relatively cheap CPU computation once the data is available in memory.",
      "index_of_source": "In an in-memory system, we're actually not going to record any log records to write indexes out to disk",
      "question": "Why is logging index modifications to disk often avoided in in-memory database systems?"
    }
  ]
};
</script>
