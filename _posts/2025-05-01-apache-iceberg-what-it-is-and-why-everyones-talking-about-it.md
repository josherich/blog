---
layout: post
title: "Apache Iceberg: What It Is and Why Everyone’s Talking About It"
date: 2025-05-01 00:00:01
categories: podcast
tags: [podcast_script]
---


[Apache Iceberg: What It Is and Why Everyone’s Talking About It](https://www.youtube.com/watch?v=TsmhRZElPvM)

Hi, I'm Tim Berglund with Confluent. Today, I'd like to talk to you about Apache Iceberg. Iceberg is an open table format. 

What is an open table format? Why did they exist? How does Iceberg work? I'd like to start as always with a little bit of history. Let's go back about 35, maybe 40 years to the data warehouse. Data warehouse was a big database that contained the data from a bunch of smaller databases, right? These were the operational, usually relational databases out in the enterprise. And we'd collect their data overnight through a process called ETL, extract, transform, and load, and load it into the data warehouse, which was then available for reports, analysis, querying the next day. This was a batch process. There's a whole overnight kind of thing. It might seem old-fashioned these days, but this was great technology in its day. It lasted until it didn't, eventually started to give way for reasons of scale and other things to another thing, maybe about 15 or so years ago, called the data lake. 

Now, it wasn't called the data lake right away. It was called Hadoop at first, really. But this was, we'll say, a big distributed file system where we would still have these operational databases out in the world. Those have never gone anywhere, right? They still have all these data sources and maybe now mobile devices and sort of early streaming data sources and all these things coming into this data lake. And instead of all of this attention to the schema of the inputs and the specially designed schema in the data warehouse and this extract, transform, load, we just kind of extract the data, load it into the data lake, and transform it later. 

So there was this extract, load, transform. And this was supposed to be a revolutionary change to get all the data into this data lake. Again, initially, this took the form of Hadoop. These days, the data lake, as a going concern now, is often cloud blob stores, say S3. So this is a little bit anachronistic for the beginning. But these days, these are just S3 buckets. All the data from out there, bringing it into here, and one of the main transitions, apart from scale, trying to make a system that can scale to larger volumes of data, is less attention to schema. 

So there was this idea that maybe somehow schema was a bad idea. We didn't want to spend so much effort on that, which is completely understandable for the thinkers and builders of the time, because schema's a tremendous pain, right? So we can kind of understand how they got there. However, over time, schema does kind of matter. You still do want to know the format of the data in here. We still want to think of data as tabular. We want to run SQL queries over data. So we kind of do need some kind of system that gives us access to schema. 

Iceberg, in particular, an open source project that emerged from Netflix, also had a concern with consistency. So this being essentially a large distributed file system, I could have little bits of tables and different files all over. If I'm going to modify something, it's difficult without some kind of layer to wrap it to have a consistent view of the data in there. And we would also love transactionality. That would be nice too. There are other benefits, but kind of broadly speaking, in this data warehouse to data lake transition, some of these things got lost and that was difficult. And so Iceberg and others like it emerged. 

That's the history. I want to give you an idea of how it works. And I'm going to kind of start bottom up and build things a piece at a time into sort of a logical architecture of Iceberg and give you an example of how this gets applied in the modern streaming world. 

So let's just say we're going to start with some data files and these data files here, I'll just go down here, make this little document here, right? There's a file. Here's another file, got some stuff on it. We'll say these are parquet files. That is certainly standard. That's a non-controversial choice. Typically, the file format you're going to find in any kind of data lake. So let's just start with that.
We've got parquet files. Let's just say I've got some, we'll make it easy batch ingest process. I got a bunch of stuff. I need to get it into my data lake. I could just split that up into parquet files, put them in some directory and say, okay, there's my table. And that is kind of like the early version of what a data lake was. I'm not going to have any schema management. I'm not going to be able to do consistent updates. Certainly, I don't have transactionality. So that's not quite enough. Let's build some layers on top of this, all right? 

Now I'm going to draw a dividing line here. So this is my data layer. And up here, this is going to be my metadata layer. To begin with, I just like to have some record of which files I've got here. All right, so I'm going to make a manifest file. And that manifest file is just going to say, hey, look, these two parquet files, that's your table. If I'm smart and I want to be able to optimize queries, there's other things I might be able to add into that manifest file. Not just a list of paths of parquet files, but these parquet files, that's a column there data file. 

There is sort of typing and metadata built in there. I've got columns. Those columns have data types. If they're numbers, I might be able to track things like the max or the min value and other interesting things about this data that might help me process queries later on. So this isn't just a list of files. There's a little bit more smarts to it than that here. But now that I've got some collection of files, I say, well, I would like a manifest file to describe this ingest that I've done in this current version of this table. 

Life goes on though, and I do some more ingesting, right? So let's say, I write a few more parquet files down here. And that's also, I really would like them to be considered to be a part of the same table. So I'm going to have to make another manifest to indicate that those are there. But now that I've added the ability to ingest more than once, which is pretty important, particularly in case of streaming systems that involve Kafka, I might be doing ingest kind of constantly, right? 

So I need to be able to ingest often. I've got multiple manifest files. So I'm going to need another layer on top of this. We'll call this the manifest list. So now I've got a way to collect multiple ingest events or multiple manifest files into one collection. And now I can say, all right, I got this manifest list. Now this represents the table. If I want a description of what the table is, go to this thing. And that tells me where all my data is, tells me a little bit about it. Maybe something about the schema. I can kind of pack all that stuff in here. And this is pretty cool so far. This is like a sane way to manage tables. 

But what about consistency? What about transactionality? What about when I say I want to change the schema? Now, as I like to say, there's nothing that makes schema migration really pleasant, but we would like tooling that makes it at least possible. And so far here, if I was going to change schema, I would be modifying manifest files, maybe building out new parquet, new data files, something. There'd be a lot of things going on. And this table would be in an inconsistent state for potentially a long time before that change were complete. I wouldn't like that. 

So maybe let's come up with a way of snapshotting. And this will be our actual metadata file. This will eventually point to the manifest list, but I'm going to skip a little bit. I'm going to say, this is going to have a notion of a snapshot. So this is snap zero right here. And that snapshot points to an actual manifest list, which points to actual manifest files, which points to actual parquet files. 

And now, by the way, as I've built pieces here, I said before, this was what our table is. Now I'm saying, okay, the metadata file, this is what really describes a table. It points to a manifest list, which points to manifest files, which point to data files, and it contains these snapshots. So I can make snapshot one, I can make snapshot two. It can contain multiple snapshots, which, let's see, this might point to another manifest list, which might have another manifest file, which might point to this parquet file.
and potentially even a new one down here, and maybe even parts of this new snapshot are old data that was already in that table, since we're adding on to, potentially adding on to this table or keeping old parts of the table as we move forward in snapshots.

So with this metadata file component, now, finally, I've got some way of seeing consistent views of the data, even as the data is changing and as the schema is changing. And that's pretty cool. And that's all built essentially with parquet files and little pieces of JSON scattered in a bucket in S3.

Just this structure, you've got a lot of this functionality. One more component we'll put on top of that, we'll just call this the catalog, which in summary is gonna tell me my table, say the table is named thermostats or something like that. Well, okay, that thermostat table name, that's this metadata file, and that tells us where to go from there. So it's my way of looking things up in my Iceberg data.

So that's the basics in terms of logical architecture of Apache Iceberg. And in terms of physical infrastructure, when I'm trying to learn a new system, I always like to know, okay, what is it? What are the pieces it's made out of? The logical structure matters, but these are files. I mentioned S3 or Blobstore like it. This seems to be a database of some kind, but is that what Iceberg is? Is Iceberg like a server process? Do I go run it somewhere? Can I go buy it at iceberg.tech or wherever it is? The answer is no; it really is a specification. And all of these things are very pluggable.

Like this catalog can be the Hive Metastore. It could be a JDBC database. It could be SQLite running on Raspberry Pi if you're into that kind of thing. So it's just a database that is keeping track of the rest of where the metadata files exist. 

In the world of streaming, Iceberg now lets us store our data in a data lake, have very much relational database-like semantics around that data, even though it is really Parquet files in a database, and gives us flexibility into how we're gonna query that now. There isn't a server. There isn't some main way in. There's a set of libraries that you can use. You can write Java code, Python code, Flink code, Spark, whatever, and there's other tools like Presto that'll even let you do sophisticated joins across tables in here. There's all kinds of tools on top of Iceberg that obey this open standard that let you do the kinds of querying that you want.

And it opens things up in the world of streaming that are really exciting. And so a thing that we at Confluent do with this is we realized that most of the time, what feeds the data lake? Oh, it might be a batch process, right? But these days, I think we know it's probably a Kafka topic or more than one Kafka topic that's feeding that data lake or writing to those Parquet files.

And why have this before and after thing where I've got this streaming world over here, and I'm gonna do some minimal stream processing, dump it into the data lake, and then Iceberg is happening over here? Why not just, with an option, enable Iceberg semantics on top of that data? And that is what Confluent calls table flow, which is a way of making the data in a topic accessible as an Iceberg table. So changes to that topic, changes to the schema through the schema registry and the governance features of Confluent Cloud keep all of the appropriate manifest files, lists and metadata files updated. 

So however it is you are accessing Iceberg, you point it at your Kafka topic, and that works without the old copy from there to here kind of thing, which is kind of cool. A lot of neat things are happening. Obviously, there's so much more to say about Iceberg, how it deals with updates and upserts and deletes and how it pulls off transactions in terms of the steps it goes through. So much to say, so much more to learn. I hope this gives you a good overview of the reasons, the logical architecture and the modern implications of an important technology.
818.76: Iceberg. 

819.76: Thanks.

---

> This is an experimental rewrite

**Tim Berglund**: Hi, I'm Tim Berglund with Confluent. Today, I'd like to talk to you about Apache Iceberg. Iceberg is an open table format. 

What exactly is an open table format? Why do they exist? How does Iceberg work? I’d like to start, as always, with a bit of history. Let’s go back around 35 to 40 years to when data warehouses became prominent. A data warehouse is essentially a large database that aggregates data from various smaller databases, typically operational relational databases found within enterprises. We gathered their data overnight through a process called ETL: extract, transform, and load. This data would be loaded into the data warehouse, making it available for reporting, analysis, and querying the next day. It was a batch process, happening overnight. This may seem old-fashioned today, but at that time, it was cutting-edge technology. Ultimately, it began to falter, giving way to something more scalable roughly 15 years ago: the data lake.

Initially, it wasn’t referred to as a data lake; it was known as Hadoop. Still, this represented a significant evolution into a large distributed file system where we continued to have operational databases. Those databases weren't going anywhere; they remained as critical data sources. Additionally, mobile devices and early streaming data sources began contributing to this data lake. Instead of meticulously focusing on input schema and the specially designed schema of a data warehouse, we adopted a simpler approach: just extract the data, load it into the data lake, and transform it later.

This new approach was termed **Extract, Load, Transform**. It was touted as a revolutionary way to funnel all data into a data lake. Initially, Hadoop epitomized this method, but today, what we refer to as a data lake typically uses cloud-based blob storage systems like Amazon S3. While this might sound a bit outdated, it has essentially transformed into just S3 buckets. As a significant shift, it not only prioritized scale—adapting to larger data volumes—but also reduced the emphasis on schema.

There arose the perspective that schema might be a limitation worth avoiding. This understanding was quite reasonable, given how painful schema management can be. However, as time passed, the importance of schema became apparent once again. We still need to comprehend the data format within our systems. Data should be viewed as tabular, enabling us to run SQL queries over it. Therefore, we require a system that provides access to schema.

Iceberg, particularly as an open-source project developed at Netflix, also addresses the need for consistency. In a large distributed file system, you might have segments of tables scattered across different files. Modifying something without a layer that ensures a consistent view of the data can be quite challenging. Additionally, having transactional support would be advantageous. During the transition from data warehouses to data lakes, some crucial aspects were overlooked, leading to difficulties. That’s why Iceberg and similar projects emerged.

Now, let's explore how Iceberg actually works. I’ll start from the bottom up, constructing a logical architecture piece by piece and providing an example of how this is applied in the modern streaming world.

Let’s begin with some **data files**. Below, I’ll outline a few files—let’s classify them as Parquet files, which is a widely accepted standard format in any data lake. We can start with that. Assume I have a straightforward batch ingestion process where I need to load a set of data into my data lake. I could easily split that into Parquet files, place them in a directory, and say, "There’s my table." However, this resembles the early iterations of a data lake. Without any schema management or the ability for consistent updates and transactionality, this setup falls short.

To enhance this, I propose adding some layers. First, I’ll draw a dividing line: this will be my **data layer**. Above it, we’ll have the **metadata layer**. Initially, I simply want to keep a record of which files I have. I'll create a manifest file, which will note, "Hey, look, these two Parquet files constitute your table." If I’m smart, I’d also optimize queries by including more information in that manifest file. Rather than being just a list of file paths, it can also incorporate details regarding the columns and their data types. For numeric columns, I might track values like the maximum, minimum, and other interesting metadata that could support query processing later on. So, this is more than merely a file list; it’s a more nuanced representation of the data.

Once I have a collection of files, it makes sense to create a supplementary manifest file that describes the data I’ve ingested for the current version of this table. Life doesn’t stop, though; I could easily ingest more files later, so I want these new files to be recognized as part of the same table. That means I’ll need to create another manifest to account for these additions. The capability of continuous ingestion becomes vital, especially in streaming systems involving Kafka, making frequent ingestion necessary.

To accommodate this, I'll introduce another layer: the **manifest list**. This allows me to compile multiple ingestion events or multiple manifest files into one cohesive collection. Now, I have a manifest list that accurately represents the table. If I want a description, I can refer to this manifest list, which tells me where all my data is located and can also provide insights about its schema. So far, this framework offers a sound way to manage tables.

However, we shouldn't overlook concerns regarding consistency and transactionality. What if I need to change the schema? As I often say, there's nothing enjoyable about schema migration, but we’d like tools that facilitate it. In the current setup, if I were to modify the schema, I’d be juggling manifest files and potentially developing new Parquet data files. Consequently, the table could remain in an inconsistent state for some time before the modification is complete, which is far from ideal.

To solve this, let’s think about a way to enable **snapshotting**. This will be our actual metadata file, which will eventually reference the manifest list. At this point, let’s introduce the concept of a snapshot. This is our **snapshot zero**, which points to the manifest list, that in turn points to the actual manifest files and ultimately to the Parquet files.

By assembling these pieces, I can clarify what our table truly consists of. The metadata file now correctly describes the table, as it points to the manifest list, which identifies the manifest files, directing us to the underlying data files and encompassing these snapshots. I can create snapshot one, snapshot two, and so forth, housing multiple snapshots. Additionally, this setup might point to another manifest list, which could reference another manifest file and possibly a new Parquet file, with some parts of the new snapshot containing old data that was already included in preceding versions of the table.

With the addition of the metadata file, I finally have a mechanism that enables a consistent view of the data, even as both the data and the schema evolve. That’s quite impressive, and all of this structure is fundamentally built upon Parquet files and small JSON segments distributed throughout an S3 bucket.

This framework provides a wealth of functionality. One more layer we can introduce is the **catalog**, which essentially consolidates information about my table. For instance, if my table is named "thermostats," this catalog links back to the metadata file, allowing me to navigate my Iceberg data effectively.

So, that encapsulates the basic logical architecture of Apache Iceberg. When exploring a new system, I prefer understanding what it consists of and how it operates physically. While the logical structure is significant, these elements are ultimately just files. Are we dealing with a database, or does Iceberg function as a server process? Can I simply go purchase it from iceberg.tech or something similar? The answer is no; it functions as a specification, and the components are highly pluggable. 

For instance, the catalog could be a Hive Metastore, a JDBC database, or even SQLite running on a Raspberry Pi, depending on your preferences. Essentially, it's a database that keeps track of where the metadata files are located.

In the streaming domain, Iceberg allows us to store our data in a data lake while maintaining relational database-like semantics around that data, despite it predominantly being Parquet files. It also gives us flexibility in terms of how we query that data. There isn't a centralized server or a singular entry point; instead, a variety of libraries are accessible for use. You may write code in Java, Python, Flink, Spark, or other compatible tools like Presto, which enables sophisticated joins across tables. An entire ecosystem exists atop Iceberg, adhering to an open standard, allowing you to query as needed.

Moreover, Iceberg opens exciting possibilities in the streaming landscape. At Confluent, we've realized that what primarily feeds a data lake is often not just a batch process. Nowadays, it’s likely one or more Kafka topics that are populating that data lake or writing to those Parquet files.

This brings us to a significant question: why maintain a distinction between the streaming environment and Iceberg? Why not enable Iceberg semantics directly on top of the streamed data? Confluent’s solution for this is known as **Table Flow**. This integrates the changes within a Kafka topic, including schema changes through the schema registry and governance features of Confluent Cloud, ensuring that all relevant manifest files, lists, and metadata files are kept up-to-date.

Thus, when you access Iceberg, you can direct it at your Kafka topic. This approach eliminates the traditional copying from one environment to another, which is quite innovative. Clearly, there’s much more to explore regarding Iceberg—its mechanisms for handling updates, upserts, deletes, and transaction management involve many intricate steps. There’s so much to discuss and learn, and I hope this overview has provided a solid foundation regarding the rationale, logical architecture, and modern implications of this vital technology.

---

**Tim Berglund**: Thanks!

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Hi, I'm Tim Berglund with Confluent. Today, I'd like to talk to you about Apache Iceberg.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "What is an open table format? Why did they exist? How does Iceberg work?",
      "section_level": 1,
      "section_title": "History"
    },
    {
      "index_sentences": "Data warehouse was a big database that contained the data from a bunch of smaller databases, right?",
      "section_level": 2,
      "section_title": "Data Warehouse"
    },
    {
      "index_sentences": "Now, it wasn't called the data lake right away. It was called Hadoop at first, really.",
      "section_level": 2,
      "section_title": "Data Lake"
    },
    {
      "index_sentences": "Iceberg, in particular, an open source project that emerged from Netflix, also had a concern with consistency.",
      "section_level": 2,
      "section_title": "Iceberg and Consistency"
    },
    {
      "index_sentences": "That's the history. I want to give you an idea of how it works.",
      "section_level": 1,
      "section_title": "How Iceberg Works - Logical Architecture"
    },
    {
      "index_sentences": "So let's just say we're going to start with some data files and these data files",
      "section_level": 2,
      "section_title": "Data Files"
    },
    {
      "index_sentences": "Now I'm going to draw a dividing line here. So this is my data layer.",
      "section_level": 2,
      "section_title": "Metadata Layer and Manifest Files"
    },
    {
      "index_sentences": "Life goes on though, and I do some more ingesting, right? So let's say,",
      "section_level": 2,
      "section_title": "Manifest Lists"
    },
    {
      "index_sentences": "So maybe let's come up with a way of snapshotting. And this will be our actual metadata file.",
      "section_level": 2,
      "section_title": "Snapshots and Metadata File"
    },
    {
      "index_sentences": "Just this structure, you've got a lot of this functionality. One more component we'll",
      "section_level": 2,
      "section_title": "Catalog"
    },
    {
      "index_sentences": "So that's the basics in terms of logical architecture of Apache Iceberg. And in terms",
      "section_level": 2,
      "section_title": "Physical Infrastructure"
    },
    {
      "index_sentences": "In the world of streaming, Iceberg now lets us store our data in a",
      "section_level": 1,
      "section_title": "Iceberg and Streaming"
    },
    {
      "index_sentences": "And why have this before and after thing where I've got this streaming",
      "section_level": 2,
      "section_title": "Table Flow in Confluent Cloud"
    },
    {
      "index_sentences": "So however it is you are accessing Iceberg, you point it at your",
      "section_level": 2,
      "section_title": "Accessing Kafka Topics as Iceberg Tables"
    },
    {
      "index_sentences": "So much to say, so much more to learn. I hope this gives",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
}
</script>
