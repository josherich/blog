---
layout: post
title: "20: Distributed Job Scheduler | Systems Design Interview Questions With Ex-Google SWE"
date: 2025-05-25 00:00:01
categories: podcast
tags: [podcast_script]
---


[20: Distributed Job Scheduler   Systems Design Interview Questions With Ex-Google SWE](https://www.youtube.com/watch?v=pzDwYHRzEnk)

Hey everyone, welcome back to the channel. 

Today we're going to be building out a distributed job scheduler. Now about three days ago, I put a lot of thought into this video, but since then I decided to procrastinate and record on Saturday morning, meaning that I went 0 of 3 at the bar last night, and I'm now brutally hung over. So I'm going to free ball this thing, and we're just going to see how it goes. 

All right, I've procrastinated enough. Let's do this. So what is a job scheduler at its core? Well, really all it's doing is basically you taking some piece of binary or some EXE to execute on some sort of computer, putting them up somewhere, and then basically allowing us to run them on some other node. 

So for example, let's imagine that we actually have one that is a DAG or a directed acyclic graph. What that might look like is this lovely oblong structure right here, where you have a 3 PM Cron job, another 5 PM Cron job, and then once those both run successfully, you can actually run this node over here because it actually depends on the execution of both of them. 

So the whole point of the DAG is that it is acyclic, meaning once one node finishes and another node finishes, eventually we can complete the whole thing. You're not running in an infinite loop; there is actually a completion process here. 

Cool, so let's talk about some quick problem requirements to formalize this thing out. The first is that basically we want to be able to run uploaded binaries upon a user request, right? So the binaries will probably go in an object store like S3. I'm now realizing that I didn't draw this in my final diagram, but I'm going to say it explicitly now so that everyone remembers: the binaries go in S3; you access them from S3 on some sort of executor, and then you run them there. 

The next thing is that ideally, every job just runs once. In practice, we're going to find that this is very hard to do without a series of two-phase commits, which would make this whole thing very slow and perhaps infeasible. So we're going to talk about ways that we can ideally mitigate the effects of running jobs perhaps more than once while basically acting as if they had only run once. 

Okay, number three is that users should be able to see the status of their jobs. If I'm running a binary or I want to run it on some sort of CRON schedule, I need to be able to know whether it failed, whether it succeeded, what the error messages were, things like that. 

And then so besides just running things on a cron, we also want to be able to run DAGs. So that's, like I mentioned, a directed acyclic graph of task schedules. So we've got one dependency here, another dependency here, and then that's going to lead us to be able to run some other task. 

I'm not going to go too much into capacity estimates because at the end of the day, if you're making a job scheduler, it's going to be different for every company that you're doing it for. But we are going to be running millions of jobs a day, and so as a result of that, this thing needs to be fast. Because if it's not fast and it's not highly available, many developers in our company are going to have problems with their jobs, and then we're going to be in a lot of trouble. 

Cool, so let's first do a high-level overview because someone in my comment section told me that everything I say is incomprehensible unless I present this way. So we're going to go ahead and do that. 

So we've got some sort of recurring task scheduler, right? So that's going to be useful for our Cron jobs, which are basically saying run once a week at 3 PM on a Monday. Our DAGs, which are the graphs, and then that is basically going to take tasks and put them in our scheduler node. 

So we've got some sort of scheduler table which is getting pulled, let's say, once a minute or once every 30 seconds or something like that. And then all of the tasks in that 30-second batch that we decide, "Hey, we actually want to run these," we're going to go ahead and send them to an executor, which is basically going to read from S3 that binary and then put the job somewhere in some sort of status table, which we'll call our job history, our status table that eventually, if I'm a user, I can go ahead and read from. 

Cool, okay, so the first couple of things that I'm going to talk about in this video are actually going to be task scheduling, right? So that's going to be the process of, well, if I've outlined that I want a certain task to run on every interval or within a part of a directed acyclic graph, how am I actually going to get them from there into the scheduler node? 

Cool, so oops, I scroll a little bit too far. The first thing that I will talk about is the actual cron task scheduling. Right, so the idea here is that let's say I want to run this job every Monday at noon. We can have two tables, right? We've got one that actually just outlines the settings of the Cron job, the metadata of it, when we actually want it to run, maybe the ID of the overarching parent job, and then we've got a second one that actually includes the scheduled tasks that's a result of it. 

So when I first create a task, my proposal here is to basically at first put one event in the cron jobs table saying we're going to run this thing every Monday at noon. And then we're also going to put another event in the scheduled tasks table saying, "Hey, this upcoming Monday at noon we have to run this task." Right? So just the soonest, next upcoming Monday at noon we're going to put in the task table, and we're both going to do this on first upload. 

Now note here that I'm kind of making this look like I'm using two-phase commit. Eventually in my final diagram, I will reveal that I'm going to bait and switch you guys and use change data capture to do this type of thing, where we'll basically have this guy doing some change data which goes into this guy. But the gist is eventually what's going to happen is our executor is first going to pull from our actual scheduled task table. 

Right, this is step one right here. It's going to see that we're running this thing at noon today, and so step two is that it's going to now go over to the cron jobs table. After it's run the job, it's going to basically say, "Okay, this current version or this current iteration of the job has been successfully completed." Now go back and put the next iteration of that Cron job in our scheduled task table, so that would be noon for next Monday as opposed to this Monday. 

So yeah, basically the idea here is that the executor is going to schedule the next Cron instance. Shouldn't be too hard. The thing that's a little bit more complex is actually going to be scheduling DAG jobs. So the way that I'm going to propose doing this after doing a little bit of research is basically that we want to have some dedicated database table devoted to DAGs. 

Now I suppose you could do all of this in the scheduling table, but I don't think that would make our lives very easy, and I think it would lead to a lot of clutter in that table, which we want to be relatively fast because we're going to be polling it all the time. 

So let's imagine we've got the following setup for a DAG. We've got jobs 1, 2, 3, 4, and 5. One and two are going to be the root nodes over here, and they're triggered at 3 PM and 5 PM, respectively. Job three depends on the completion of 1 and 2. Job four depends on the completion of job three, and five also depends on the completion of job three. 

So the way that I'm going to outline this in some sort of database table is as follows. So I'm going to have my job ID, I'm going to have the cron schedule if it exists. There should only be a cron schedule for those kind of root nodes at the top of our DAG. We should have some concept of who the children are. The reason I say this is because when I finish job one, I need to now know, "Okay, I'm going to job three," and I'm updating that one of our dependencies is finished. 

Right? So when I finish job one, I now need to go to the ID three, which is over here, and I need to say, "Ooh, you know what? My dependency for job one is finished." So now instead of epoch zero for job one that I've seen, I can actually cross that out and put in an epoch one. 

And so by doing this, let's imagine now that job two finally finishes as well. It's 5:00 PM, and we schedule it. We see, "Oh, we've got a child node of three," so I've got to find job ID three in the table, and I can see that job two is the one that just finished. Maybe this particular epoch was epoch one, and now what I can add is some additional database logic within my transaction to basically say, "Okay, well, if all of the dependencies are now once again on the same epoch, I now have to schedule this job." 

So because job three has all of its dependencies on epoch one, now I can say, "Ooh, it's time to run epoch one for job three." So when job three gets run, I'm now going to see its children, job four and job five, and I'm going to go over here respectfully and say, "Ooh, three was just run with epoch one." Now I can see that all of the dependencies for job number four have been run. I can schedule it. Same thing applies for number five; we just ran with epoch one, so now I can go ahead and schedule it. 

So the one other trick that I'm adding here is that, again, we do need to eventually schedule jobs one and two again because these guys are on a cron job schedule. The way that I said that works with all the cron stuff was that you basically have to have the executor reschedule again. So what I've done is I've added like a little mini trick here where I'm basically considering jobs one and two as root tasks as actual children of jobs four and five. 

And so by doing that, we can actually say that jobs one and two have dependencies of jobs four and five. So that way I will only schedule jobs one and two over again once four and five have run successfully. So that way we’re not running multiple iterations of the DAG at the same exact time. 

Cool, so hopefully that generally makes sense here. Okay, if I'm going to actually outline this as a formalized process, the main idea is that, again, all of these things are going in the DAG table. The roots of the DAG are going to first be scheduled when I first upload the DAG to the table with epoch one, and that's just going to go right in the scheduling table. 

As far as figuring out what the actual roots of the DAG are, depending on how you accept the input from the user, you may need to do something known as a topological sort, which is basically taking your DAG and figuring out which nodes have dependencies on other nodes and then figuring out which can be run right off the bat and which need to wait for other nodes to run. 

Cool, and then as we complete those tasks, basically what we want to do, like I mentioned, is just mark that their epoch is completed in all of their children nodes. So that's going to be some sort of atomic transaction right there because we have to modify multiple rows at the same time. 

And then finally, when all of those dependency tasks have an equal epoch for a given row, right? So if I'm node three over here, when I see that both node one and node two are on epoch one, that means I can run the job three for epoch one. So I can go ahead and schedule that task. 

And then finally, once we complete all of those leaf node tasks, we can re-trigger our roots again. But the way we model that is by basically acting as if this guy is a child of both four and five, and that this guy is a child of both four and five. 

Cool, so there are going to be a couple of edge cases here, right? So let's say job three were to error out. Now all of a sudden, I have to actually propagate through job three and still act like job four and job five were completed.
albeit with errors so that one and two get rescheduled again for their Chron schedules. Cool. So as far as the table choice for the dag table, because we have started to speak about this a little bit, I do end up saying that we use MySQL here. However, I'm eventually going to go back on this, which I'm now realizing because I made this video over the course of two days.

But the gist is we do need atomicity because we're updating multiple rows at the same time, so we are going to want to be able to use transactions. Ideally, we don't want to be doing distributed transactions; right? We want to shard our graph or rather shard our data such that one graph is completely encompassed on a single node. Otherwise, we're going to have to be doing a bunch of two-phase commits to modify most of these rows at the same time, like I mentioned as well in the case of an error. We basically have to propagate down all of the children of that particular error node to mark them as completed, albeit with an error because they can't run. As a result of that, that's another example where we're just going to have to update many, many rows at the same time.

Number two is that we want to do all of these updates on a single node. Like I mentioned, that's just going to be how we shard. We want a table that supports transactions. We're just going to shard on our dag ID. I say MySQL here, but I think ultimately that I've chosen that we should go back on this for a couple of reasons. I think it's going to be the better choice because it's going to enable us more data flexibility in terms of how we actually want to represent our dag.

This is obviously going to be a document-based database where you can use JSON. So, in MySQL, depending on how I want to represent these dependencies and these children over here, I think I would lose a little bit of flexibility compared to Mongo. So that's ultimately what I end up using at the very end. Cool. As far as the scheduler table goes, this is kind of going to be the main part of the job scheduler. This is what I want to focus on the most.

So we've got our job IDs. That's going to be our primary key. We've got our S3 URL, which is where the binary is going to be located in S3. Right? I have to basically put a binary to S3 to say the executive can go download this and run it. And then also we need some sort of run timestamp. So the interesting thing with this run timestamp—and I'm going to add one more column obligatory called status, which we'll talk about a little bit later—is that basically it's going to tell me when to run my job.

So let's say it's 2011 for my run timestamp, and now I happen to notice when I'm pulling the database that it's 202. I'm going to say, "Oh shoot, you know what? It's time to run the job." However, there are a few things that are nuanced with this run timestamp. At every step of me handling the job, I actually want to increase the run timestamp by a little bit. So let's say I finally get this job on an executive. I might say, "Okay, I'm going to increase my run timestamp by 5 minutes," because if for some reason that executive fails, we actually want this run timestamp to indicate a timeout time.

If we just keep 2011 the entire time, we're going to keep retrying this job, although it may be running successfully. What we want to do is add a few minutes to it so that, you know, if our job times out for some reason, we'll retry it, but we aren't just retrying it at every single iteration. So the main idea here is we index everything by a run timestamp so that we have a relatively quick query on this database to quickly find all of the jobs that we need to run.

So, you know, let's say the current time is 206. I know that both of these guys should be run because the run timestamp is less than that. That being said, you know, if maybe an executive handles this guy and it switches it to 215, and it's currently 206, I know I'm not actually executing this job right here. Cool. And then, again, like I mentioned, every step of actually running our job, we want to update that run timestamp to reflect how much time we should wait before timing out and basically retrying the job in its entirety.

Cool. So another thing that I want to quickly talk about is actually ensuring the performance of our scheduling because at the end of the day we're reading this table a lot. There are going to be a lot of things in this table, and we want to be sure that it's relatively fast. So there are a few things that I've thought of doing in order to make sure that all of these reads are going to be as fast as possible. The first is going to be that we could keep our data in memory. That might not be the best idea just because there are going to be a lot of tasks to schedule, like I mentioned, billions. 

So as a result, it could get a little bit expensive to do that. But additionally, keep in mind that besides actually just reading all of these tasks, we're actually constantly rewriting these tasks too. As a result, we're reordering our index because of the fact that we're rewriting all these timestamps. We're basically reordering a sorted list all the time, which can get a little bit expensive, right? Because these are all going to be basically writes where we have to resort our list based on the updated timestamp that we just put on this job. Then we're also simultaneously reading from this table, and we're reading the whole thing more or less to get a sense of which jobs we want to run.

In order to read that table, we have to grab a bunch of locks, and in order to write, we have to grab a lock on that row to write. So we're going to have a lot of contention there; so we want to be pretty smart about this. Realistically, the two most likely options here are going to be one: we can have many different partitions of the scheduler table because why not? There's no reason that we can't just have, you know, 10 different scheduling databases and have them all have something pulling them and then executing things as we need. 

Another possible option is that if we really want to avoid grabbing any locks to read from the node that we're sending all these writes to, we can actually read from a read-only replica of the scheduling node. That being said, in my opinion, this can get a little dodgy just because, you know, what if our leader goes down and then we don't see an update in the replica because we're not using strong consistency or something like that? That being said, we do have a retry timestamp, so the main consequence of this would actually be that we probably end up just retrying more jobs.

Yeah, it's not the worst idea either. I think this is something that's feasible too. Cool. As far as load balancing goes, this is another key aspect of the problem. So the question is we've got all of these executors right here, all three of these random nodes. We can run the task on pretty much any of them. How do we ensure that we're getting the most usage out of our executors as possible and that one of them's not just sitting idle? 

So option one—and this may be a little bit naive—would be to use something like a load balancer. In my opinion, this isn't going to be too ideal. The reason for this is, let's say we did some sort of consistent hashing so that based on a job ID, we assign a task to a specific executive node. Well, it is possible that one of those nodes could just get a super long-running job, and then all of a sudden now we're trying to push more jobs to it, but we can't. You know, we have to wait for that first job to finish.

So, you might now say to yourself, "Okay, well, consistent hashing obviously isn't good here." The load balancer should have a sense of basically whether every single executive is running or whether it's not. In my opinion, that's also a little complicated because now we've got every single executive having to send a bunch of pings to just one place to basically update its status. That is going to be not ideal because that's a lot of load for one node to handle, the node being the load balancer. So it kind of becomes a point of failure. 

Option two is to use some sort of message broker, and this is a little bit easier because now all of a sudden the messages get routed right to that executive. So, out of our message brokers, we have two different implementations of them, and I'm going to go through them quickly. The first is going to be a log-based message broker like Kafka. Typically, what we would do there is we would do one consumer per partition.

However, even this is not going to be great because let's say, you know, we've got A, B, and C in our Kafka queue. A takes super long to run. Now, all of a sudden our executive is stuck running A, and B and C are stuck in this partition, right? They've already been put here, and no one else can read them because we have one consumer for that partition. We might have a second executive sitting here that could have gone through its entire Kafka queue, and it can't run. It can't read B and C.

So actually, in the case of something like a job scheduler, what we would be better off doing is using something like an in-memory message broker. Now you may be thinking to yourself, "This actually looks like a very similar design pattern to what we did on YouTube," right, where we do all this pre-processing of the videos and encode them in a bunch of different formats. In order to do that, because we don't really care what are doing the encoding, it's kind of the same idea: we're using this in-memory message broker to actually do our load balancing for us.

So basically, the idea here is we've got a bunch of different consumers reading from this message broker, and basically when they're idle, that is when they're going to take a task off of the queue. So this is going to make our life a lot easier. Ideally as well, you know, because it's in memory, it is going to be relatively low latency and just quickly return tasks over to those executors to be executed.

Cool. So another thing to note is that at first, I've been acting like all executives are equal, and the reality of the world is that they are not. Certain times, you might have more expensive hardware on certain executors; others might have more inexpensive hardware. It is possible that in some cases, we might want to route certain jobs to certain executors. So, in this case, we could actually use multiple levels of these queues, right? So all of these would be different ActiveMQ instances or RabbitMQ or some other JMS implementation.

The idea here is that we're actually going to be scheduling tasks just like an operating system does. In operating systems, you have something called the multi-level priority queue, where basically you try and run a task on some sort of resource, and if you're unable to do so within a certain time limit, you actually just, you know, say, "Screw it, I don't really care what this is going to return me," and then re-queue it onto a higher priority level queue, which is going to be more likely to be run. 

In our case, we could actually have the more powerful executors reading from those higher priority level queues. So, let's say you know our lowest level executive is going to have a 10-second timeout. So that if we have some sort of really expensive job that can't finish in those 10 seconds, we say, "You know what? Screw this. We're just going to retry it." Then we're going to retry it on level two with a one-minute timeout. Still can't finish? Screw that. We're going to retry it on level three with a one-hour timeout. 

And so level three, you know, these...
Executors over here maybe have more expensive hardware. Additionally, note that those guys should also be reading from the level two and the level one cues. 

Because at the end of the day, if there's nothing in level three, they should be able to take on more work; they shouldn't just be idle. So ideally, they should prioritize running the jobs from the level 3 queue, but if there's stuff available in level two and level one, they can go ahead and do that too. 

The point of the scheduler here is when we're actually retrying a job, we can keep a count of how many times we've retried it and use that count to determine the priority level of the message queue that we're going to send our job to. 

Cool, so as far as job completion goes, what do we want to do about this? Well, if we have a scheduled job, a user needs to be able to query its status, right? We need to know whether it completed, failed, or whether we need to retry it. The reason for this is so that we don't retry it further. Right? If I never mark my job in the scheduling table as completed or failed or I never remove it from the scheduling table, we're just going to retry it an infinite amount of times, and that would be bad. 

What we can do, like I mentioned, is to add some sort of status column to our scheduling table. Basically, the gist is, like I mentioned, we're going to retry jobs based on their timestamp, but also if a certain job has a status of completed or failed, it implies that we've run it as much as possible and that we shouldn't retry it. 

So, basically, the gist is here now, as opposed to just indexing on our timestamp of the job, we should index both on the status and the timestamp of the job. That way, we just want to ensure that we're only running jobs where the status is not equal to completed or failed, and the status is just equal to either null or in progress or something like that. 

Then the idea is that users should be able to query this table to see the actual job status. Now, keep in mind that this table is also going to be the same as the table that's actually doing the job scheduling, and we want to minimize the load on there. 

So at least in my opinion, I think we should probably have some read-on replicas that the user should be able to read from, as opposed to having to read from that main leader scheduling table, because otherwise, we can really slow down our performance. It doesn't really matter if it takes a user an extra 30 seconds to see the status of their job; they just want to be able to see it eventually, and so eventual consistency should be fine here. 

As far as partitioning goes, I think some combination of time range for this scheduling table, as well as just some random number based on the job ID, you can hash it, would be good to distribute out the load across all of these scheduling tables. 

Cool, so the last aspect of this video that I'm going to talk about is how we run our jobs and ensure that we do so just once. The main point here is that we have all of this retry logic built in, right? From our scheduling node, we've got these timestamps, and as a result of that, not only are we prone to retrying jobs multiple times when we don't need to, but it's also possible due to network partitions or network failures that we are just going to end up running things in multiple places. 

So what would be example number one? Let's say this is an executor, and the executor dequeues from our ActiveMQ or RabbitMQ. Then the acknowledgment going back to the queue to say, “Hey, take this thing out of the queue,” never reaches it, right? It breaks down. Well, the queue is now going to deliver that over here as well to another executor. Now we're running it with two executors at the same time. 

Option two is we've got ourselves a scheduling node. The scheduling node just knows the job is taking too long to run. It retries it because the timestamp has run out or rather the retry time has now been reached. 

Option three is ActiveMQ or RabbitMQ just goes down, and so again we retry as a result of that. Option four is that one of the executors goes down, and we retry as a result of that. So again, we have a lot of different places where, because of our fault tolerance, we are prone to running jobs more than once. 

Cool. So what our retries are going to ensure is that everything runs at least once, but what we want to ensure is that it runs only once. Well, can we do that? Well, the big thing that we actually want to avoid, in my opinion here, is running the same job at the same time on multiple places because then you can start overwriting state. 

Let's say the job has some sort of side effect where you write to a database, or you're reading from a database and writing to some rows. If two things are running at the same time, then they can start conflicting with one another, and it might corrupt the state of the job. So we definitely don't want that to happen. 

How can we stop it? The answer would be a distributed lock. We would have something like Zookeeper over here, which, as we know, is basically a mini-database or a mini-distributed log that you use consensus between the nodes to achieve it. That way, we can be sure that if we're reading from the same leader, we're achieving strong consistency if we're reading from the Zookeeper leader. 

So what we can do is our executors can go ahead and just grab a lock for the job ID that they care about, and then that way, only one of them is going to be able to run it at the same time. Now, it is unfortunately the case that Zookeeper is not going to be perfect here either. 

The reason being that we probably do need a TTL on these locks because let's say I grab this lock for 22 and then my executor goes down. I do want to be able to rerun this job, right? I don't want to have that lock grabbed forever, and then 22 is never going to get run. But by virtue of having a TTL, it does mean that if this thing is taking too long and it loses its lock, now all of a sudden this guy can come up, grab the lock, and then if this guy comes back, now they're both running jobs at the same time. 

So again, nothing is perfect in this situation. It is always going to be the case when dealing with distributed systems that you're prone to just some sort of ridiculous failures. Nothing can be super robust unless you're using something like strong consistency, and then our performance would be really bad. 

Now, it is the case that, you know, it's not the end of the world if two jobs do happen to run at the same time, right? We're not talking about human lives here. But, you know, your developers are going to look at that and be like, “What the hell happened to my job? I can't tell why this thing failed.” They'll rerun it, and then hopefully everything goes better that time. 

So another question is, well, if we can stop jobs from running at the same time, can we make sure that we're only running jobs exactly once? Jobs are getting triggered pretty frequently based on those timeouts and that kind of retry timestamp. So the question is, what can we do to actually stop that from running more than once in the erroneous situation where we actually retry a job that we shouldn't be? 

Well, option one is that we always run jobs on the same executor. Note that I write “dumb” right here because the whole point of the job scheduling service is that you don't care what hardware it runs on, or rather, that you run on any hardware that's available. So to have to basically limit yourself to running on one specific computer kind of defeats the purpose of the job scheduler. You could just run it on your own computer at that point. 

Number two is that basically somehow all the nodes would have to check our scheduling table when they get a job to see if it's been completed. Note that that is basically prone to all sorts of race conditions. That's not perfect by any means. Another node could just upload to the status table saying the job is finished right after a second node starts running it. 

Then the third option is that we could make our jobs idempotent or deal with the consequences of not making them idempotent. Is it the end of the world if I send two emails to my user? Probably not. For things that actually have important state, we should probably make them idempotent. If we're syncing to some database, it should probably be that our jobs are deterministic for the time that we're running them. This is just generally good practice when running batch jobs, so this is probably how I'm going to cope with the situation and just say, you know, make deterministic jobs or deal with the fact that your jobs are not deterministic. 

Cool. The final thing that we're going to go through is my diagram. This is the one that I made this morning, so if it is incomprehensible due to my hangover, I apologize. In the service like this, there are basically two main things that we can do. The first is that we can enqueue jobs, and the second is that we can get the status of the jobs that we've enqueued. 

Like I've mentioned, we've got one table to handle all of our DAG metadata, another table to handle all of our cron metadata, and I mentioned that when we upload a DAG—nice voice crack, Jordan—when we upload a DAG or when we upload a cron, what we want to do is also schedule the first instance of that DAG run and the first instance of that cron run into our actual scheduling table over here. 

Now, we could do this with a two-phase commit, and that definitely wouldn't be the end of the world because at the end of the day, it's just one upload on the part of the user. But to over-optimize things, I've decided to just use change data capture. The reason being that now we don't have to do a two-phase commit, and I do know that eventually this thing is going to flow through Kafka, flow into basically our consumer of that change data, and then into our scheduling table. 

Great. So from the scheduling table, once we have all of those tasks queued, we know that we're running them on some sort of interval by having some scheduling node polling the table, running that query, and then putting them in our ActiveMQ priority queues for executors to actually run those jobs. 

Additionally, we've also got some read-on scheduling replicas that we're going to be using for our job status for users. Right? Because I mentioned if the user is actually reading from our main table over here, now we're adding a bunch of additional load, and that's not necessarily a good thing. We want that polling process to be as fast as possible so that we can enqueue as many jobs as possible in a short interval. 

Another thing to note is that when executors do finish tasks, they have to update their actual status, so they can do that in the status table. Additionally, for DAGs, we basically need to figure out, well, besides actually updating the status of my current job, does the triggering, or rather does the completion of this job actually trigger other tasks in the DAG? 

So in order to figure that out, you actually have to go all the way up here over to your DAG table. You would go ahead and update the epoch numbers accordingly, as we've mentioned, and then that again can then flow through our change data capture, through Kafka, through our DAG task queuing node, and then back into the scheduling node. 

So hopefully, this mostly makes sense. I feel like I've explained it in the previous slides as well. Yeah, my head is killing me a little bit, so I'm going to jump off.
But have yourselves a great week, guys. 

And I will see you in the next one.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hey everyone, welcome back to the channel.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "So what is a job scheduler at its core?",
      "section_level": 1,
      "section_title": "What is a Job Scheduler?"
    },
    {
      "index_sentences": "So for example, let's imagine that we actually have one that is a DAG or a directed acyclic graph.",
      "section_level": 2,
      "section_title": "Directed Acyclic Graph (DAG) Example"
    },
    {
      "index_sentences": "Cool, so let's talk about some quick problem requirements to formalize this thing out.",
      "section_level": 1,
      "section_title": "Problem Requirements"
    },
    {
      "index_sentences": "The first is that basically we want to be able to run uploaded binaries upon a user request, right?",
      "section_level": 2,
      "section_title": "Requirement 1: Run Uploaded Binaries"
    },
    {
      "index_sentences": "The next thing is that ideally, every job just runs once.",
      "section_level": 2,
      "section_title": "Requirement 2: Exactly Once Execution (Challenges)"
    },
    {
      "index_sentences": "Okay, number three is that users should be able to see the status of their jobs.",
      "section_level": 2,
      "section_title": "Requirement 3: User Job Status"
    },
    {
      "index_sentences": "And then so besides just running things on a cron, we also want to be able to run DAGs.",
      "section_level": 2,
      "section_title": "Requirement 4: Run DAGs"
    },
    {
      "index_sentences": "I'm not going to go too much into capacity estimates because at the end of the day, if you're making a job scheduler, it's going to be different for every company that you're doing it for.",
      "section_level": 2,
      "section_title": "Capacity Estimates (Brief Mention)"
    },
    {
      "index_sentences": "Cool, so let's first do a high-level overview because someone in my comment section told me that everything I say is incomprehensible unless I present this way.",
      "section_level": 1,
      "section_title": "High-Level Overview"
    },
    {
      "index_sentences": "Cool, okay, so the first couple of things that I'm going to talk about in this video are actually going to be task scheduling, right?",
      "section_level": 1,
      "section_title": "Task Scheduling"
    },
    {
      "index_sentences": "The first thing that I will talk about is the actual cron task scheduling.",
      "section_level": 2,
      "section_title": "Cron Task Scheduling"
    },
    {
      "index_sentences": "So yeah, basically the idea here is that the executor is going to schedule the next Cron instance.",
      "section_level": 3,
      "section_title": "Executor Reschedules Next Cron"
    },
    {
      "index_sentences": "The thing that's a little bit more complex is actually going to be scheduling DAG jobs.",
      "section_level": 2,
      "section_title": "DAG Job Scheduling"
    },
    {
      "index_sentences": "So let's imagine we've got the following setup for a DAG.",
      "section_level": 3,
      "section_title": "DAG Table Structure and Logic"
    },
    {
      "index_sentences": "Cool, so hopefully that generally makes sense here.",
      "section_level": 3,
      "section_title": "Re-triggering Root Nodes"
    },
    {
      "index_sentences": "Okay, if I'm going to actually outline this as a formalized process, the main idea is that, again, all of these things are going in the DAG table.",
      "section_level": 3,
      "section_title": "Formalized DAG Scheduling Process"
    },
    {
      "index_sentences": "As far as figuring out what the actual roots of the DAG are, depending on how you accept the input from the user, you may need to do something known as a topological sort, which is basically taking your DAG and figuring out which nodes have dependencies on other nodes and then figuring out which can be run right off the bat and which need to wait for other nodes to run.",
      "section_level": 4,
      "section_title": "Identifying DAG Roots (Topological Sort)"
    },
    {
      "index_sentences": "And then as we complete those tasks, basically what we want to do, like I mentioned, is just mark that their epoch is completed in all of their children nodes.",
      "section_level": 4,
      "section_title": "Marking Dependency Completion"
    },
    {
      "index_sentences": "And then finally, when all of those dependency tasks have an equal epoch for a given row, right?",
      "section_level": 4,
      "section_title": "Scheduling Dependent Tasks"
    },
    {
      "index_sentences": "And then finally, once we complete all of those leaf node tasks, we can re-trigger our roots again.",
      "section_level": 4,
      "section_title": "Re-triggering Roots"
    },
    {
      "index_sentences": "Cool, so there are going to be a couple of edge cases here, right?",
      "section_level": 3,
      "section_title": "DAG Scheduling Edge Cases"
    },
    {
      "index_sentences": "So as far as the table choice for the dag table, because we have started to speak about this a little bit, I do end up saying that we use MySQL here.",
      "section_level": 2,
      "section_title": "Database Choice for DAG Table"
    },
    {
      "index_sentences": "Cool. As far as the scheduler table goes, this is kind of going to be the main part of the job scheduler.",
      "section_level": 1,
      "section_title": "Scheduler Table Design"
    },
    {
      "index_sentences": "So we've got our job IDs.",
      "section_level": 2,
      "section_title": "Scheduler Table Columns (JobID, S3 URL, Run Timestamp, Status)"
    },
    {
      "index_sentences": "So the main idea here is we index everything by a run timestamp so that we have a relatively quick query on this database to quickly find all of the jobs that we need to run.",
      "section_level": 2,
      "section_title": "Indexing by Run Timestamp"
    },
    {
      "index_sentences": "Cool. So another thing that I want to quickly talk about is actually ensuring the performance of our scheduling because at the end of the day we're reading this table a lot.",
      "section_level": 1,
      "section_title": "Ensuring Scheduler Performance"
    },
    {
      "index_sentences": "Realistically, the two most likely options here are going to be one: we can have many different partitions of the scheduler table because why not?",
      "section_level": 2,
      "section_title": "Performance Strategy 1: Partitioning"
    },
    {
      "index_sentences": "Another possible option is that if we really want to avoid grabbing any locks to read from the node that we're sending all these writes to, we can actually read from a read-only replica of the scheduling node.",
      "section_level": 2,
      "section_title": "Performance Strategy 2: Read Replicas"
    },
    {
      "index_sentences": "Cool. As far as load balancing goes, this is another key aspect of the problem.",
      "section_level": 1,
      "section_title": "Load Balancing Executors"
    },
    {
      "index_sentences": "So option one—and this may be a little bit naive—would be to use something like a load balancer.",
      "section_level": 2,
      "section_title": "Load Balancing Option 1: Traditional Load Balancer (Naive)"
    },
    {
      "index_sentences": "Option two is to use some sort of message broker, and this is a little bit easier because now all of a sudden the messages get routed right to that executive.",
      "section_level": 2,
      "section_title": "Load Balancing Option 2: Message Broker"
    },
    {
      "index_sentences": "Out of our message brokers, we have two different implementations of them, and I'm going to go through them quickly.",
      "section_level": 3,
      "section_title": "Message Broker Implementations"
    },
    {
      "index_sentences": "The first is going to be a log-based message broker like Kafka.",
      "section_level": 4,
      "section_title": "Log-based Message Broker (Kafka) - Less Ideal"
    },
    {
      "index_sentences": "So actually, in the case of something like a job scheduler, what we would be better off doing is using something like an in-memory message broker.",
      "section_level": 4,
      "section_title": "In-Memory Message Broker (ActiveMQ/RabbitMQ) - Preferred"
    },
    {
      "index_sentences": "So basically, the idea here is we've got a bunch of different consumers reading from this message broker, and basically when they're idle, that is when they're going to take a task off of the queue.",
      "section_level": 5,
      "section_title": "Idle Executors Pull from Queue"
    },
    {
      "index_sentences": "Cool. So another thing to note is that at first, I've been acting like all executives are equal, and the reality of the world is that they are not.",
      "section_level": 3,
      "section_title": "Handling Unequal Executors"
    },
    {
      "index_sentences": "In our case, we could actually have the more powerful executors reading from those higher priority level queues.",
      "section_level": 4,
      "section_title": "Multi-Level Priority Queues"
    },
    {
      "index_sentences": "The point of the scheduler here is when we're actually retrying a job, we can keep a count of how many times we've retried it and use that count to determine the priority level of the message queue that we're going to send our job to.",
      "section_level": 5,
      "section_title": "Retry Count Determines Priority"
    },
    {
      "index_sentences": "Cool, so as far as job completion goes, what do we want to do about this?",
      "section_level": 1,
      "section_title": "Job Completion and Status Updates"
    },
    {
      "index_sentences": "What we can do, like I mentioned, is to add some sort of status column to our scheduling table.",
      "section_level": 2,
      "section_title": "Using Status Column in Scheduler Table"
    },
    {
      "index_sentences": "Then the idea is that users should be able to query this table to see the actual job status.",
      "section_level": 2,
      "section_title": "User Querying Job Status (Read Replicas)"
    },
    {
      "index_sentences": "As far as partitioning goes, I think some combination of time range for this scheduling table, as well as just some random number based on the job ID, you can hash it, would be good to distribute out the load across all of these scheduling tables.",
      "section_level": 2,
      "section_title": "Partitioning the Scheduler Table"
    },
    {
      "index_sentences": "Cool, so the last aspect of this video that I'm going to talk about is how we run our jobs and ensure that we do so just once.",
      "section_level": 1,
      "section_title": "Ensuring Jobs Run Exactly Once (Challenges and Solutions)"
    },
    {
      "index_sentences": "So what would be example number one?",
      "section_level": 2,
      "section_title": "Scenarios Leading to Multiple Runs"
    },
    {
      "index_sentences": "Cool. So what our retries are going to ensure is that everything runs at least once, but what we want to ensure is that it runs only once.",
      "section_level": 2,
      "section_title": "Ensuring Only Once Execution"
    },
    {
      "index_sentences": "How can we stop it?",
      "section_level": 3,
      "section_title": "Using Distributed Locks (Zookeeper)"
    },
    {
      "index_sentences": "The reason being that we probably do need a TTL on these locks because let's say I grab this lock for 22 and then my executor goes down.",
      "section_level": 4,
      "section_title": "Challenges with Distributed Locks (TTL)"
    },
    {
      "index_sentences": "So another question is, well, if we can stop jobs from running at the same time, can we make sure that we're only running jobs exactly once?",
      "section_level": 3,
      "section_title": "Strategies for Exactly Once Execution"
    },
    {
      "index_sentences": "Well, option one is that we always run jobs on the same executor.",
      "section_level": 4,
      "section_title": "Strategy 1: Run on Same Executor (Undesirable)"
    },
    {
      "index_sentences": "Number two is that basically somehow all the nodes would have to check our scheduling table when they get a job to see if it's been completed.",
      "section_level": 4,
      "section_title": "Strategy 2: Check Status Table (Race Conditions)"
    },
    {
      "index_sentences": "Then the third option is that we could make our jobs idempotent or deal with the consequences of not making them idempotent.",
      "section_level": 4,
      "section_title": "Strategy 3: Make Jobs Idempotent (Recommended)"
    },
    {
      "index_sentences": "Cool. The final thing that we're going to go through is my diagram.",
      "section_level": 1,
      "section_title": "Final Architecture Diagram Overview"
    },
    {
      "index_sentences": "Like I've mentioned, we've got one table to handle all of our DAG metadata, another table to handle all of our cron metadata, and I mentioned that when we upload a DAG—nice voice crack, Jordan—when we upload a DAG or when we upload a cron, what we want to do is also schedule the first instance of that DAG run and the first instance of that cron run into our actual scheduling table over here.",
      "section_level": 2,
      "section_title": "Uploading Jobs and Initial Scheduling (CDC)"
    },
    {
      "index_sentences": "Great. So from the scheduling table, once we have all of those tasks queued, we know that we're running them on some sort of interval by having some scheduling node polling the table, running that query, and then putting them in our ActiveMQ priority queues for executors to actually run those jobs.",
      "section_level": 2,
      "section_title": "Scheduling and Queuing Tasks"
    },
    {
      "index_sentences": "Additionally, we've also got some read-on scheduling replicas that we're going to be using for our job status for users.",
      "section_level": 2,
      "section_title": "User Job Status (Read Replicas)"
    },
    {
      "index_sentences": "Another thing to note is that when executors do finish tasks, they have to update their actual status, so they can do that in the status table.",
      "section_level": 2,
      "section_title": "Task Completion and Status Update (DAG Re-triggering)"
    },
    {
      "index_sentences": "Additionally, for DAGs, we basically need to figure out, well, besides actually updating the status of my current job, does the triggering, or rather does the completion of this job actually trigger other tasks in the DAG?",
      "section_level": 3,
      "section_title": "DAG Task Completion and Re-triggering Flow"
    },
    {
      "index_sentences": "So in order to figure that out, you actually have to go all the way up here over to your DAG table.",
      "section_level": 4,
      "section_title": "DAG Table Update via CDC"
    },
    {
      "index_sentences": "So hopefully, this mostly makes sense.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "At its core, a job scheduler basically involves taking a piece of binary or EXE to execute on some computer, putting it up somewhere, and then allowing it to run on another node.",
      "index_of_source": "So what is a job scheduler at its core? Well, really all it's doing is basically you taking some piece of binary or some EXE to execute on some sort of computer, putting them up somewhere,",
      "question": "What are the core functions of a job scheduler as described?"
    },
    {
      "answer": "In the scheduler table, the run timestamp is increased slightly at every step of handling the job. This indicates a timeout time, which helps prevent constant retries if the job might still be running but appears delayed.",
      "index_of_source": "At every step of me handling the job, I actually want to increase the run timestamp by a little bit.",
      "question": "How is the run timestamp in the scheduler table used beyond indicating when to run a job?"
    },
    {
      "answer": "Using a standard load balancer or a log-based message broker like Kafka with one consumer per partition is suboptimal. Standard load balancers struggle with dynamic executor availability. Log-based brokers can block if a job in a partition is long-running, preventing other jobs in that partition from being processed by available executors. An in-memory message broker allows any idle executor to take the next task, improving utilization.",
      "index_of_source": "So option one—and this may be a little bit naive—would be to use something like a load balancer. In my opinion, this isn't going to be too ideal.",
      "question": "Why is using a standard load balancer or a log-based message broker like Kafka considered suboptimal for load balancing executors compared to an in-memory message broker?"
    },
    {
      "answer": "A distributed lock, potentially using a service like Zookeeper, is the proposed mechanism. Executors would acquire a lock for a specific job ID before running the job, ensuring only one instance runs at a time.",
      "index_of_source": "How can we stop it? The answer would be a distributed lock. We would have something like Zookeeper over here, which, as we know, is basically a mini-database",
      "question": "What mechanism is proposed to prevent multiple executors from running the same job concurrently?"
    },
    {
      "answer": "The primary strategy suggested for dealing with potential duplicate job executions is to make the jobs idempotent, meaning running them multiple times has the same effect as running them once. Alternatively, one must deal with the consequences if jobs are not idempotent.",
      "index_of_source": "Then the third option is that we could make our jobs idempotent or deal with the consequences of not making them idempotent.",
      "question": "What is the primary strategy suggested for dealing with potential duplicate job executions caused by retries or network failures?"
    },
    {
      "answer": "The speaker decides against MySQL for the DAG table and opts for Mongo because Mongo, a document-based database using JSON, is believed to offer greater data flexibility in representing complex dependencies and children relationships within the DAG structure compared to relational databases like MySQL.",
      "index_of_source": "I say MySQL here, but I think ultimately that I've chosen that we should go back on this for a couple of reasons.",
      "question": "Why does the speaker decide against using MySQL for the DAG table and instead opts for Mongo?"
    },
    {
      "answer": "The DAG scheduling mechanism uses an 'epoch' system. When a job completes, its epoch is marked in its children nodes' dependency tracking. A child node's job for a specific epoch is scheduled only when all of its dependencies have completed with the same epoch.",
      "index_of_source": "And then finally, when all of those dependency tasks have an equal epoch for a given row, right?",
      "question": "How does the DAG scheduling mechanism handle dependencies and trigger subsequent tasks using the concept of \"epoch\"?"
    },
    {
      "answer": "Recurring DAG root nodes (Jobs 1 and 2) are rescheduled by modeling them as children of the DAG's leaf nodes (Jobs 4 and 5). They are only scheduled again once Jobs 4 and 5 have run successfully, which prevents multiple iterations of the same DAG from running simultaneously.",
      "index_of_source": "So the one other trick that I'm adding here is that, again, we do need to eventually schedule jobs one and two again because these guys are on a cron job schedule.",
      "question": "How are recurring DAG root nodes rescheduled after the entire DAG chain completes, and what is the purpose of this method?"
    },
    {
      "answer": "Change Data Capture (CDC) is chosen over a two-phase commit for scheduling the initial instance of a DAG or Cron job upon upload to avoid the complexity of a two-phase commit. The CDC process involves capturing changes, flowing them through Kafka, and then a consumer ultimately schedules the task in the scheduling table.",
      "index_of_source": "Now, we could do this with a two-phase commit, and that definitely wouldn't be the end of the world because at the end of the day, it's just one upload on the part of the user.",
      "question": "Why is Change Data Capture (CDC) chosen over a two-phase commit for scheduling the initial instance of a DAG or Cron job upon upload?"
    },
    {
      "answer": "User requests for job status are handled by directing them to read-only replicas of the scheduling table. This prevents user queries from adding load to the main scheduling table, which needs to remain fast for the polling process that enqueues jobs.",
      "index_of_source": "Additionally, we've also got some read-on scheduling replicas that we're going to be using for our job status for users.",
      "question": "How are user requests for job status handled to avoid impacting the performance of the main scheduling table?"
    }
  ]
};
</script>
