---
layout: post
title: "14: Distributed Logging & Metrics Framework | Systems Design Interview Questions With Ex-Google SWE"
date: 2025-05-20 00:00:01
categories: podcast
tags: [podcast_script]
---


[14: Distributed Logging & Metrics Framework   Systems Design](https://www.youtube.com/watch?v=p_q-n09B8KA)

hello everyone welcome back to the channel. Today we'll be building out a distributed logging and metrics platform which is definitely something that you need when you have a massive application and constantly have to dump out a lot of data.

Now as a person who dumps out a lot of data myself very frequently multiple times a day in fact, I know a thing or two about building these types of platforms. So let's go ahead and get into it. Let's get started.

All right, so as I mentioned, today we're going to be talking about building out a platform to take a bunch of distributed metrics to capture a bunch of distributed logs and ultimately have them for future analysis and playback. So this is kind of an abstract question, but we'll get through it. For those of you who, like me, are very tired right now, all I have to say is keep pushing. I know a thing or two about taking dumps and keeping pushing is the way to do it.

So let's get into this thing. First off, we've got a few different types of data that we want to keep track of. We've just got logs from our servers. Here's an example of one coming up later. That happens sometimes. Number two is structured data. Imagine we have some object; let's say our server is in Java. We have some Java object and we manage to serialize it in a way that keeps the fields of the object around. Then we can go ahead and put that in some sort of database.

So we have, for example, a DM request from Megan the fox to Jordan. Again, these get published pretty frequently. The third thing is going to be some sort of metric. This could be time-windowed data. For example, today Jordan has had 22 DMs from girls. That's accurate. It's definitely not the other way around that Jordan has DM'd 22 different girls. Finally, we also have unstructured data in which we have some sort of payload where basically we might be getting this from another source that's not actually our application and we're just forwarding it to persist it for later.

So maybe we get an Instagram DM from Sydney Sweeney to Jordan. Yeah, that happens as well. Cool, so let's talk about some more formalized problem requirements. The general gist here is that we're going to have a ton of volume of data coming in from all of our different application servers. If this is a big server or a big service, we're probably going to be horizontally scaling out our service. As a result, we've got many different origins of data, and so you want to be able to store all of that and be able to analyze it later.

This could be for the purposes of debugging or just for our business analysts to get a better grip on who our customers are. Again, we might have some window data which could be formatted as time series. We might have just text logs from servers that are good for debugging and error handling. We can have some structured data, where structured data is like taking an object from your program and just throwing it into a database so you can eventually read it back in later, and also unstructured data, which ideally we would like to eventually turn into some form of structured data.

I did also put over here enrichable data in the sense that if you know the structure of your data, let's say that structure has a user ID involved, and now all of a sudden we want to make a join with some user ID from an existing database in order to enrich our data to make it easier to query in the future.

Cool, so the first thing that we're going to talk about is our generalizable data sync. Because this is going to be some massive application that we're getting metrics for, we're going to be publishing a lot of data. At the end of the day, if you're publishing that much data, publishing it directly to a server that's going to communicate with you and try to do things with that is not always the best idea. The reason being that you might end up taking it down perhaps for whatever reason you have a super high volume of logs for one second.

It's possible that a bunch of synchronous HTTP requests to that server where the server has to process them, do some computation, and then forward them elsewhere, is not going to happen fast enough. Ideally, you just want to dump them to one place, forget about them, and then everything else will happen down the line. So for our purposes, what we want to do is put them in some intermediary place like Kafka. The reason I say Kafka is that it is a log-based broker, meaning that these messages are actually durable and persistent.

We can replicate them, we can partition if need be, which is great. Of course, that also enables us to use something like a stateful consumer, like Flink or Spark Streaming, which not only ensures that every single one of our messages is going to be processed at least once but also allows us to cache data from other places if we want to do some sort of stream enrichment in the future.

Again, Flink or Spark Streaming is going to be very useful, but we'll talk about that more in a little bit. So the first thing that we're going to talk about, which we could potentially do in our Flink consumer, is data aggregation. I've touched upon this many different times on this channel, but for posterity, I will do it once more. The first type of data aggregation that we can do is a tumbling window. This would be like discrete intervals from, say, 12:00 to 12:10, where every 10 minutes we make a new tumbling window.

This is always going to be on that perfect interval starting at the zeroth second of the zeroth minute and then the zeroth second of the tenth minute and so on. So if we have a point like 12:15, we basically just cut off the five and say this buckets into the 12:10 bucket and then throw it over here. Hopefully, that's easy enough.

The next aspect of this is the hopping window, where the hopping window would really be like, okay, now we have 20-minute windows. The same thing as before, however, now they can overlap. Technically, this guy is overlapping with this guy, and the way that we would represent that is actually just by doing the same thing as before, where we aggregate our tumbling windows, and then we just combine the results together.

So this guy over here is really just the combination of two tumbling windows: one for the left half and one for the right half. Hopefully, that makes enough sense, and then you would do the same exact thing as before where you attribute one point to a bucket, and then ultimately when we want the results for a given hopping window, we just aggregate the two buckets that we care about.

Cool, the last aspect of this is going to be the sliding window. The sliding window is again another thing that I've touched upon plenty on this channel. In order to implement it, you basically just use a linked list where as events come in, you put them at the end of that linked list. That way, let's say we have a 20-minute sliding window. If my last event is at 12:19 and another event comes in at 12:23, we have to remove any events at the front of the linked list that are too old.

For instance, 12:00 is outside of our sliding window, so let's go ahead and get rid of that. This is going to be constantly changing; the point is there's no set start and end time of the sliding window. As time is going on, we just take the last 20 minutes, for example.

Cool, so the question is now: we've aggregated a bunch of metrics that are indexed by time, right? Because as I said, every 5 minutes now I have another data point that I have to put into some sort of database. I don't want to store it in my Flink consumer forever. Generally speaking, we want to keep that data in memory or maybe in a RocksDB index on Flink, but Flink is not meant to be a database. It is meant to allow you to do some computation and ultimately put that data in some database.

So here is our time series sync. The reason I suggest using a time series database is fourfold. First of all, the main thing to note that a time series database is useful for is this concept of hypertable and chunk table design. The reason that an index in a time series database is called a hypertable is because it's made out of these small little chunk tables. Chunk tables are basically just an abstraction for a bunch of mini indexes.

Every single index is actually just a combination of a date and a source or some time range and a source. For example, if we have a few different servers, one server would be a source and then the date that it's publishing that data would be the timestamp associated with that. Maybe I would say today for Server A is going to be one chunk table, yesterday for Server A is another chunk table.

By representing these things not as all just one table but as a bunch of little mini tables, we get a few different benefits. The first is that the whole table for that source and date range is easier to cache in memory. This is useful for us because typically we only want one source and date range combination at a time.

If we can just throw that whole little index in memory, we can read from it super quickly. The next thing is that this LSM tree per table is going to be smaller. This is good because again, typically we're only writing to one of them at a time. If we have a smaller LSM tree because there are literally fewer writes in there, that means that the logarithmic time complexity relative to the size of the LSM tree is going to be a little bit faster.

Another thing that we could even do is say to ourselves, we're going to be ordering this data by timestamp. We always know that the 12:01 data time is going to come in after the 12:00 data, so I don't necessarily need an LSM tree because it's there to actually order the incoming data. However, if I know my data is already coming in ordered, perhaps I don't even need an LSM tree. I could just use a linked list like before, and then I'm good to go. When the linked list gets big enough, then I go and flush it to an SSTable.

Hopefully, that makes sense. The next thing is that if something is in...
the same chunk table it should probably be on the same partition so it just makes it super easy to figure out what your partitioning schema is, which is nice.

Then the final thing is that deletes are also going to be a lot faster. Let's say it's been a while since this data has been published; I want to drop it. Keep in mind that in your typical LSM tree plus SS table based index, a delete is actually the same exact thing as a write. The reason being that you want to publish a tombstone because you don't actually know where the write lives. So you publish a tombstone first to your LSM table and then eventually you flush the tombstone to your SS table.

After that's flushed through the compaction phase, it'll eventually get merged in. If you see a tombstone in one SS table, you can delete the original value of the key in another SS table. But the idea is that's expensive. We know that all writes take a certain amount of time to happen. It would just be a lot better if we wanted to bulk delete data that we could actually just do so by getting rid of the chunk table if it's its own individual table. All we basically have to do is say, "Hey, drop the table; we don't care."

Whereas, if I wanted to delete a large amount of data on a normal SS table based database, then I would basically have to go contend with existing writes that are coming in at the same time, which would be not ideal.

The next aspect of this problem that I wanted to talk about a little bit was text logs. As I mentioned, we get a bunch of these text logs; it's literally just a bunch of strings, not too hard to deal with, but we do want to treat them in certain ways. There are a couple of use cases that are pretty typical when you're dealing with text logs.

The first is that you want to look at the whole log file. Right, so basically whatever the current run is of this server, you know it's started up. We want to see all of the logs for that run, and so in that case, we can again use a time series database. We can just model it as the time the log was published and then the actual string associated with that log.

Additionally, another thing that we can do, or that people like to commonly do when dealing with logs, is actually going to be searching for specific terms. Typically, there are a lot of logs; logs can get spammy, and so it's nice to have some search bar that you can just type into and quickly find all the lines that you need.

What we can actually do here if there are enough of these logs is store them in a distributed search index. The idea of a search index, as we've covered many times before, is to use something like an inverted index where you'll actually take the key term that someone might search for and then provide all of the line IDs in the log that are relevant.

Ideally, we would be able to put a few different logs in one partition of our inverted index. But the general idea is that we definitely want to make sure that within one server's logs and within the run of that server, that's going to be on the same partition. Today, my logs from server A are probably all going to be in the same partition of the inverted index, so that I can quickly search all of those.

The one downside of that is that, say we want to search historical logs for a server. Let's say I've seen some error, and I want to know what day that error started. Now, potentially I do have to search 10 different partitions if I want to search back for 10 days. Ideally, you can fit more than just one day into a single partition of the inverted search index. If you can't, then you are going to have to run a distributed query where you aggregate the results of multiple days.

The next thing to do is talk about structured data. Occasionally, we just have objects in our application that we want to be able to store and serialize and then potentially one day even read them back into our application and deserialize them. Ideally, we just have them there for analytical purposes and then query them using SQL or something like that.

Imagine we have Jordan's shopping cart; we want to put that in a database somewhere so I can analyze what my customers were actually looking to buy. That's just a list of some custom objects that I created called items. The idea is we do already know our schema, which is why it's structured data. As a result, we can perform a bunch of optimizations if we have our schema. We can actually list out that schema in a certain encoding framework like Protocol Buffers, Thrift, or Avro.

All of these things have a couple of pretty big advantages. Because the data is structured and because we know the structure of the data, we can basically avoid passing out all of the field names in advance. For example, if my data model is a cart with a list of items, I actually don't have to include the word "cart" in there for me to parse because whatever it is that's receiving this data also has access to the schema and can see the list of items.

Then they can say, "Oh wait, clearly that's what was in the cart." This is going to reduce the amount of data that we have to send both over the network and also store in Kafka.

Just to quickly draw that out to make sure that everyone's on the same page, let's imagine that I have some data that I want to call a person. A person has a name and a size in inches. I'll let you interpret what that field means on your own, but the gist is let's say I was sending this via Protocol Buffers.

The way the Protocol Buffers work would be that a name is field number one and size in inches is field number two. What I would actually send over Kafka is, "Field one is Jordan, and field two is 13." Interpret that how you will. The gist is that instead of having to write "name" here, which is a much bigger amount of data to send than just sending the number one, I only have to send an individual number so it becomes quite a bit more compact.

Then the same goes over here. I have to write only two instead of "size in inches," which is a big string. So again, now I send this data; I send my Proto, it goes over Kafka, and it hits Flink.

How does Flink actually know how to deserialize it? Right now, it just sees one and two. What does that mean? Ideally, we would have some way of actually sharing the schema between our publisher and our consumer. The way that we typically do that is via some schema registry where, in the schema registry, it is basically a centralized repository of our Proto schema or our Avro schema or our Thrift schema.

Then Flink can actually read that in, and if we wanted to get even more efficient than that, Flink could actually cache it because it is, of course, a stateful consumer. There's no reason that it can't have knowledge of those schemas locally.

Of course, in comparison, if we weren't to use one of these frameworks and we just instead decided to use JSON naively, we would have to include the word "name," we would have to include the word "size and inches," and that's a bunch of extra bytes that we don't necessarily need to send.

However, when it comes to something like unstructured data, you don't really have a choice. The issue is that let's say I'm running a server, and I'm reading from a bunch of different APIs from other companies. I don't know if their API is going to change; I don't have access to their Protocol Buffers, I don't have access to their Avro schema, or their Thrift schema, or whatever it is that they're using.

As a result, I'm kind of just flying in the dark, and I pretty much just have to materialize this data using JSON, and then down the line we can go ahead and normalize that to make it easier for us to query.

The idea here is we're going to need to do some sort of postprocessing. We've got some sort of publisher; that data is going to go over Kafka; it's completely unstructured, so it's probably going to be JSON. We get it in Flink over here. In Flink, we can take a few different messages and aggregate them to one file, some sort of text file if that's what it needs to be because JSON is in text.

We push that file over to Hadoop. The reason being that we now want to run some sort of Spark job. Our Spark job, our ETL job, is now going to take this file; it's going to convert it into actual understandable data that we can read – perhaps a Parquet file, perhaps something along those lines – and then sync it somewhere else.

It could sync it back to HDFS, it could sync it to S3, or it can sync it to a variety of data warehouses. The idea is we're going to have to do some sort of transformation. In order to do that, we probably need to run some arbitrary code via a Spark job.

The idea there is we want to take our unstructured data and make it structured. The question is now that we've actually kind of run this big batch job, or maybe we just had structured data in the first place, where do we actually want to put it?

If you recall from our systems design concepts videos, the idea is when we're doing analytical queries, generally speaking, we want to use something called a column-oriented data format. Column-oriented storage is basically the following: let’s say I have column A, column B, column C, and then you know Row 1, 2, 3, 4, 5, and 6.

Normally, most typical OLTP databases, which we would use in our application for user interactions, are going to store the data like so, where each row actually has better data locality because typically when we read a row we want the whole thing. If I'm reading someone's profile in Facebook, I want that whole profile; I don't want everyone's profile and everyone's username. I just want one person's profile.

However, when doing analytical queries, typically we're more interested in just a few fields of the table at once and all of the values of them or a large subset of the values. Let’s say this was all the emails, and I wanted to figure out how many new emails signed up on a given day. It would be a lot better to have better data locality on the column and not have to process rows of data that I don’t need.
read in all of these other columns because that's just going to slow me down. Now I have to read more data, but if these guys are literally stored next to one another on disk, it's faster and I only have to read a smaller subset of data.

Now in reality, most databases that are doing column-oriented storage will actually use something known as a Pax format which is really a hybrid where it's like you kind of do column-oriented storage here and then you do it again here, and then you do it again here, and then you do it again here. But again, I'm not going to go too into that. So again, this is great for good data locality for analytical databases.

Cool, and so what do we actually do in terms of implementing some column-oriented storage? Well, if we wanted to, we could just export our data to Parquet files. So Parquet is another topic that I've talked about plenty on this channel, but the idea is it's column-oriented and does a lot of encoding and compression in order to ensure that we're not storing too much data and that we can actually speed up our reads potentially as a result of said compression.

Also, what's another big thing to actually speed up our reads is by basically storing a bunch of metadata in the header of the file, which is called predicate pushdown, which basically tells us the range of the values in that column, perhaps something like the Min and the Max, which is the range, perhaps the average.

The gist is that's going to allow us to speed up our query because we can basically look at a massive chunk of values within a column and say actually don't go ahead and read this one, we don't even need to. So the question is now we have all these raw Parquet files, where should we actually put them to quickly do analytical queries?

These days, I would say there are two main methods for how you're going to read Parquet. The first one, which seems to be more popular at the moment, is just storing them all in Amazon S3 or some sort of cloud storage provider. The idea there is that S3 is super cheap because your disk space is not scaling linearly with your compute.

S3 is basically just a bunch of hard drives I would effectively think of it as, and so as a result, it's always going to be cheaper because you don't need to add a bunch of CPUs at the same time. The issue with S3 is now if we want to run a query over this data, we actually have to load those S3 files into a distributed processing center like Hadoop and then run some sort of Spark job in order to actually process the files.

Now, of course, this is going to take extra time because we have to load the files over the network. For what it's worth, in my independent research, it seems that modern technology makes it such that the network tends to not be the bottleneck for these things, and it's more so CPU.

Now you have all these cloud-native databases gaining a lot of popularity: Snowflake, Databricks, stuff like that. So again, that's option number one.

Option number two, which may be more expensive depending on your specific company or whatever application you're running, is to just store all those files into Hadoop. Now you get better data locality when actually trying to query them. Again, for whatever reason, you are already running a Hadoop cluster and you have a bunch of extra disk space; maybe this is going to be the better option for you.

Parquet files are nice in the sense that they're really good for generalizable queries. Keep in mind that the way that I've proposed making these Parquet files is that they're inherently partitioned by time, right? Because, say it's a bunch of structured data coming into Flink, and we're aggregating that into a bunch of Parquet files, or it's a bunch of unstructured data that goes into Hadoop, and then we turn it into Parquet files. Regardless, we're going to basically be doing that on some time interval.

The Parquet files that we create are going to be by time. I'm not going to have any data from one year ago in a Parquet file that I created today. But sometimes you may want to have that, right? Let's say there was some arbitrary field that 90% of your queries are going to be relying on to basically get their analytical results.

Maybe, for example, you're like an e-commerce site and you know that the majority of your queries are only going to be over one vendor ID at a time. It would be a lot better if you could partition your data in a little bit of a different way. So potentially then, rather than just syncing them to all of these kind of naive Parquet files, maybe what you would be better off doing is actually using a data warehouse.

There are a lot of common data warehouses these days, like I mentioned: Snowflake, Google BigQuery, Amazon Redshift, but the idea there is that a lot of these guys are going to support some sort of custom partitioning schema or custom indexing schema. By actually syncing the data to a system like that, they can be a little bit smarter about partitioning rather than just naively partitioning by time.

So again, if that is a use case that you need, this could be potentially more useful for you. To clarify, that's not to say necessarily that you couldn't make this happen yourself by just setting up an HBase instance on Hadoop and using the cluster key. But I don't know, it does seem that these cloud-native data warehouses are getting quite popular.

Cool, and so the last element of this problem that I wanted to talk about was going to be stream enrichment. So like I mentioned, sometimes you have some sort of database. Let's imagine this is like a user info table and now you have all these user clicks coming in with a user ID, and the user info table also has a user ID.

So every time that a user click comes into your Flink consumer, you would like to enrich it with some of the user data that is corresponding. Ideally, we want to be doing this in our stateful consumer. Is it possible that we actually just read directly from the database? Absolutely. However, that's kind of slow because now we have to make an additional network call every time a new user click comes in.

What would be a lot better is if we could actually just cache the database data in our Flink consumer, and that way we can do our joins even faster. Now, of course, this is very easy to do if our user info table is small. If it's not small, we're probably going to have to do some sort of partitioning of our Flink indexes; make another one here.

The way that we would want to partition them is probably going to be on that user ID field, so that now we only have to basically read in a chunk of our data as necessary. I'm going to use this opportunity to say that there is an ambulance in my background, and I'm looking at it try to get through, but it is just not happening.

So that was a good opportunity for me to stall and cough. Anyways, as this guy drives away, let's talk about the final aspect of this video, which is just going to be bringing it all together. Cool, so like I mentioned, we've got a server as our data source, and the first thing that we're going to be doing is publishing data.

The reason being, it's possible that we have some sort of bursty messages here and maybe our consumer server can't handle all of those at once. Regardless, we are going to be publishing lots of different things to Kafka. It could be some sort of structured message using Avro, Thrift, or Protobuf, or it could be unstructured and use something like JSON or XML.

The next thing that's going to happen is we are going to have our stateful consumer actually consume this data. Here, I did use Spark Streaming. The reason being that it actually mini-batches these messages, which I do feel is probably a little bit more efficient than trying to read them all as they come in like Flink would. But it doesn't really matter; I think either would be fine.

Again, that might perform windowing if it's time series data, it might perform enrichment if we want to enrich the data. So right over here, that could come from this database. It could go through Kafka via change data capture. Basically, as changes get made to the database, it sends them over to Kafka, and then Kafka can send them over back to our Flink or Spark Streaming node.

Then the last aspect of this that we might actually want to do is just create Parquet files. Typically, you don't want to create a file with just one row. You want to aggregate some data, sync it into a file, and then put that into either S3 or Hadoop or wherever you end up putting.

So let's look at all of our possible syncs. The first one we discussed is S3. Probably super cheap if we just have a bunch of files of data and still relatively fast these days, but maybe not as fast as HDFS where you can do the data computation locally. Otherwise, you'd have to read it in from S3 and then run a Spark job there.

Cool, the next aspect of things is going to be a data warehouse. Like I mentioned, this is going to be nice if you want to partition your data by anything other than just like the time that it came in. If you want to be doing some sort of less naive partitioning, the next aspect is something like an inverted search index, or if we're being realistic, probably Elastic Search, which is going to allow us to search our logs very quickly if we have a bunch of them.

It is possible that we may have to hit a few different partitions of Elastic Search, but ideally, it would still be relatively fast. The last aspect of this problem is going to be the time series database for all of those windowed metrics. Time series databases are going to allow us to take advantage of that hypertable and chunk table design so that we can both insert and drop data really, really quickly.

Well, guys, I hope you enjoyed this video. I know it's super abstract. Again, I feel like for a problem like this, you're not actually building out anything concrete, but you just want to know the trade-offs in the event that your interviewer does ask you something a little bit more concrete.

And then, you know, you've got these five different solutions at your will. Have a great night, and enjoy your weekend, everyone.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "hello everyone welcome back to the channel. Today we'll be building out a distributed logging and metrics platform which is definitely something that you need when you have a massive application and constantly have to dump out a lot of data.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "First off, we've got a few different types of data that we want to keep track of.",
      "section_level": 1,
      "section_title": "Types of Data"
    },
    {
      "index_sentences": "Cool, so let's talk about some more formalized problem requirements.",
      "section_level": 1,
      "section_title": "Problem Requirements"
    },
    {
      "index_sentences": "Cool, so the first thing that we're going to talk about is our generalizable data sync.",
      "section_level": 1,
      "section_title": "Generalizable Data Sync"
    },
    {
      "index_sentences": "So the first thing that we're going to talk about, which we could potentially do in our Flink consumer, is data aggregation.",
      "section_level": 1,
      "section_title": "Data Aggregation"
    },
    {
      "index_sentences": "The first type of data aggregation that we can do is a tumbling window.",
      "section_level": 2,
      "section_title": "Tumbling Window"
    },
    {
      "index_sentences": "The next aspect of this is the hopping window, where the hopping window would really be like, okay, now we have 20-minute windows.",
      "section_level": 2,
      "section_title": "Hopping Window"
    },
    {
      "index_sentences": "Cool, the last aspect of this is going to be the sliding window.",
      "section_level": 2,
      "section_title": "Sliding Window"
    },
    {
      "index_sentences": "So here is our time series sync.",
      "section_level": 1,
      "section_title": "Time Series Sync"
    },
    {
      "index_sentences": "The next aspect of this problem that I wanted to talk about a little bit was text logs.",
      "section_level": 1,
      "section_title": "Text Logs"
    },
    {
      "index_sentences": "The first is that you want to look at the whole log file.",
      "section_level": 2,
      "section_title": "Viewing Whole Log Files"
    },
    {
      "index_sentences": "Additionally, another thing that we can do, or that people like to commonly do when dealing with logs, is actually going to be searching for specific terms.",
      "section_level": 2,
      "section_title": "Searching Text Logs"
    },
    {
      "index_sentences": "The next thing to do is talk about structured data.",
      "section_level": 1,
      "section_title": "Structured Data"
    },
    {
      "index_sentences": "All of these things have a couple of pretty big advantages.",
      "section_level": 2,
      "section_title": "Schema Encoding Frameworks"
    },
    {
      "index_sentences": "However, when it comes to something like unstructured data, you don't really have a choice.",
      "section_level": 1,
      "section_title": "Unstructured Data"
    },
    {
      "index_sentences": "The idea here is we're going to need to do some sort of postprocessing.",
      "section_level": 2,
      "section_title": "Postprocessing Unstructured Data"
    },
    {
      "index_sentences": "The question is now that we've actually kind of run this big batch job, or maybe we just had structured data in the first place, where do we actually want to put it?",
      "section_level": 1,
      "section_title": "Column-Oriented Storage"
    },
    {
      "index_sentences": "Cool, and so what do we actually do in terms of implementing some column-oriented storage?",
      "section_level": 2,
      "section_title": "Parquet Files"
    },
    {
      "index_sentences": "These days, I would say there are two main methods for how you're going to read Parquet.",
      "section_level": 2,
      "section_title": "Storing Parquet Files"
    },
    {
      "index_sentences": "The first one, which seems to be more popular at the moment, is just storing them all in Amazon S3 or some sort of cloud storage provider.",
      "section_level": 3,
      "section_title": "Amazon S3/Cloud Storage"
    },
    {
      "index_sentences": "Option number two, which may be more expensive depending on your specific company or whatever application you're running, is to just store all those files into Hadoop.",
      "section_level": 3,
      "section_title": "Hadoop Storage"
    },
    {
      "index_sentences": "But sometimes you may want to have that, right?",
      "section_level": 1,
      "section_title": "Data Warehouses"
    },
    {
      "index_sentences": "Cool, and so the last element of this problem that I wanted to talk about was going to be stream enrichment.",
      "section_level": 1,
      "section_title": "Stream Enrichment"
    },
    {
      "index_sentences": "Anyways, as this guy drives away, let's talk about the final aspect of this video, which is just going to be bringing it all together.",
      "section_level": 1,
      "section_title": "Bringing It All Together"
    },
    {
      "index_sentences": "Well, guys, I hope you enjoyed this video.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "When you have a massive application and constantly have to dump out a lot of data, a distributed logging and metrics platform is necessary.",
      "index_of_source": "Today we'll be building out a distributed logging and metrics platform which is definitely something that you need when you have a massive application and constantly have to dump out a lot of data.",
      "question": "According to the text, why is a distributed logging and metrics platform needed?"
    },
    {
      "answer": "The text mentions four main types of data: logs from servers, structured data (like serialized objects), metrics (time-windowed data), and unstructured data (payloads from external sources).",
      "index_of_source": "First off, we've got a few different types of data that we want to keep track of.",
      "question": "What are the four main types of data discussed in the text?"
    },
    {
      "answer": "An intermediary like Kafka is used because publishing directly to a synchronous server that processes data and forwards it might not happen fast enough, especially with super high volume, potentially taking the server down. Dumping data to an intermediary allows the sender to forget about it quickly.",
      "index_of_source": "At the end of the day, if you're publishing that much data, publishing it directly to a server that's going to communicate with you and try to do things with that is not always the best idea.",
      "question": "Why is an intermediary like Kafka recommended for data sync rather than publishing directly to a processing server?"
    },
    {
      "answer": "The hypertable and chunk table design in time series databases improves performance by making it easier to cache data for a specific source and date range, resulting in smaller and faster LSM trees, simpler partitioning within a chunk table, and significantly faster bulk deletes by dropping entire chunk tables.",
      "index_of_source": "First of all, the main thing to note that a time series database is useful for is this concept of hypertable and chunk table design.",
      "question": "How does the hypertable and chunk table design of time series databases benefit performance?"
    },
    {
      "answer": "Using formats like Protocol Buffers, Thrift, or Avro for structured data is more compact than JSON because they use numerical field IDs instead of sending the full field names, significantly reducing the amount of data sent over the network and stored.",
      "index_of_source": "All of these things have a couple of pretty big advantages. Because the data is structured and because we know the structure of the data, we can basically avoid passing out all of the field names in advance.",
      "question": "What is the primary advantage of using structured data formats like Protobuf or Avro over JSON?"
    },
    {
      "answer": "Unstructured data, often received as JSON, is processed by sending it through Kafka to a stateful consumer like Flink or Spark Streaming. From there, it's aggregated into files and sent to a system like Hadoop for a Spark ETL job to transform it into an understandable structured format (e.g., Parquet) for storage and analysis.",
      "index_of_source": "The idea here is we're going to need to do some sort of postprocessing. We've got some sort of publisher; that data is going to go over Kafka; it's completely unstructured, so it's probably going to be JSON.",
      "question": "How is unstructured data, such as JSON from external APIs, typically processed to enable analysis?"
    },
    {
      "answer": "Column-oriented storage is preferred for analytical queries because they typically involve accessing values from only a few columns across many rows. Storing data by column provides better data locality for these queries, allowing systems to read only the necessary columns and avoid processing irrelevant data from other columns, thus speeding up reads.",
      "index_of_source": "The idea is when we're doing analytical queries, generally speaking, we want to use something called a column-oriented data format.",
      "question": "Why is column-oriented storage considered beneficial for analytical queries compared to traditional row-oriented databases?"
    },
    {
      "answer": "Stream enrichment is performed by joining incoming data (e.g., user clicks with a user ID) with cached data from a database (e.g., user info based on the same user ID) within the stateful consumer (Flink or Spark Streaming), avoiding slower network calls to the database for every event.",
      "index_of_source": "So the last element of this problem that I wanted to talk about was going to be stream enrichment.",
      "question": "How is stream enrichment typically implemented in this system architecture?"
    }
  ]
};
</script>
