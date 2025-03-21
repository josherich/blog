---
layout: post
title: "Google's Pipe Syntax in SQL: SQL for the 21st Century (Jeff Shute)"
date: 2025-03-12 00:00:01
categories: podcast
tags: [podcast_script]
---

[Music]

Nationwide sequel or death, yo son, what are you going to choose? Yo, check it. This seminar is filmed at Carnegie Mellon University. Thanks a lot, Google. This is Jeff. He's been at Google for 20 years. He's touched every single database you know about at Google. He's phenomenal. He's super smart. It's the best school in Canada for computer science. Talk about Pipe SQL. Jeff, the floor is yours. Go for it. Thank you.

Yeah, thanks for the do-over on the intro. Happy to be here, happy to share some of what we've been doing at Google to try to make SQL better for everyone. So I'm going to start with this idea that SQL has some problems, and I don't think that this is a new idea or particularly controversial. I like this Stonebreaker quote from a couple of years ago. He’s talking about SQL and talking about it as a very old language, a lot of annoying things that nobody's ever gone back and cleaned up. We've kind of assumed that we can't.

Here's another one from this talk. Don Chamberlain, one of the original inventors of SQL, did a very interesting talk a couple of years ago on the whole history and evolution of SQL. Cherry picked a few things here that I found interesting. He sort of contrasts SQL’s English-style syntax with what you might expect more as a programmer. He describes it as a functional language, where you've got operators as functions that are orthogonal, that don't have side effects. Interestingly, SQL is not like that. One of the things he says is, had they known all those decades ago how things might have evolved and that we'd be using them for this long, maybe he would have made some different choices. 

So the problem from my perspective is just SQL is way too hard to use. This affects everyone. For beginners, SQL can be hard to learn, and even for expert users who know it really well, it's still much more awkward and difficult to use, both when you're writing it and when you're reading it. I think fundamentally this stems from the syntax, where if you write a query in SQL, you've got this list of clauses: SELECT, FROM, WHERE, etc. You can only write them in that order, and it's very rigid and arbitrary. Doing anything else or anything non-trivial requires you to use subqueries or some other workaround. This structure creates this strange inside-out data flow where the query starts in the middle with the FROM clause or with nested subqueries and flows out from there, logic both above and below the starting point. 

There's also a lot of recency and repetition where you end up listing the same columns over and over again in SELECT, GROUP BY, etc. Just the general complexity in the language, like the interaction of SELECT and GROUP BY, which are written far apart in the query. So after 50 years, I think it's time that we fix this in SQL, and I don't think the fix needs to be replacing SQL. We can actually fix it.

So there are a lot of things that are really good in SQL that we don't want to lose. The declarative semantics at a very fundamental level work really well. The relational operators are nice; it's sort of the right set of operators and the right set of operations. The table-level composability things with views and subqueries work really well. Maybe even more importantly is the ecosystem around SQL. There are so many databases, query engines, and other tools that all speak SQL. It's a very familiar language with a huge user base who knows it well. There's a ton of existing SQL code, and we don't want to give up any of that. Doing migrations is always really painful, both to learn and then to rewrite in new tools.

Meanwhile, we've seen this pattern in many other languages and in APIs that have been designed more recently. They use this piped data flow syntax and structure. It works very much like Unix pipes, where you have a collection of operators, and you chain them together with some kind of pipe connector. Output from one flows to the input of the next. We see this in many query languages that were designed more recently. You see it in APIs like DataFrames or Flume. Users working in these systems generally find these fairly easy to understand and easy to use. 

So our solution is that we can do the same thing in SQL. We take all of the operators that you can do in SQL and we make a pipe operator equivalent of them, using the same syntax as much as possible to allow chaining them together in any order arbitrarily any number of times. 

So you get query logic that flows from the top of the query to the bottom. It's very simple to understand what's going on. It's important to note here it's still declarative, so we still expect optimizers to go in and reorder it to an optimal execution path. There's this detail: we use this two-character pipe symbol. This is slightly unfortunate; it's a bit of a compromise because the single pipe character, which we would have liked to use, is used for bitwise OR in our dialect and many others. 

It's not so bad once you get used to it, and we've seen the same exact symbol actually showing up in many other languages for similar purposes. Sorry, maybe you'll get into this going back to the last slide. You have the two WHERE clauses; can you still put an AND clause to combine them in? Yeah, you can do that. This is just for illustration that you can do WHERE multiple times. 

Okay, awesome, thanks. So here's an example from one of the queries from the TPC-H benchmark. In this case, it's one that's doing an aggregation in two steps. If you look at that query on the left, it kind of shows this weird inside-out data flow pattern you get in standard SQL. You start in the very middle of that with the inner FROM clause, you've got logic above it and logic below it, and to trace through what's going on, you have to start in the middle, walk up, walk down, and match up a lot of things.

If you look at the pipe syntax on the right, it basically just expresses exactly what you want to do in the order you want to do it. Start scanning a table, do a join, aggregate it, aggregate it again, sort, and you're done. It ends up being very straightforward and easy to understand. 

Here's a list of most of the operators we've got. You can start a query with any normal FROM clause, including doing joins in the FROM clause if you want to. Many of the standard SQL clauses just get a pipe version of that clause with exactly the same syntax. It includes doing the SELECT list as an operator. You also have some shorthands for adding, updating, changing columns in the SELECT list without having to list out every other column you're keeping. 

We've made aggregation a separate operator, separating it from projection and making it a distinct thing in the flow, which we've found to be convenient for several reasons, including readability. A bunch of other operators, so you might have seen this picture. This comes from the paper from Cider last year and from the speakers from a couple of weeks ago. It's just a very clear illustration of the strangeness of standard SQL, where the order you write the operators in the syntax is very disconnected from the semantic order of what's happening when you run that query. 

If we compare that to how we write in pipe syntax, basically we go in and uncross all those lines. It's very clean and simple because the syntax exactly matches the semantics of what you're doing. There's a match between the relational algebra and the set of operators you're applying and the syntax. You go back and forth and translate in either direction. 

Yes, it's still important to note that both of these syntaxes are declarative, so they don't specify execution order; it's just semantics. You'd expect to get the same performance and the same results writing queries either way. So interoperability is an important point. One of the nice things about doing this inside SQL is we allow adding pipe syntax anywhere that a normal query would work. You can mix and match inside the same query across views, commutable expressions in a WITH clause. Any query, including a query in standard syntax, you can add pipe operators on the end to do additional computation, and you can do this using all the same tools. 

The example on the right is just showing mixing some operators in both syntaxes. Briefly about our implementation: we've implemented it in Google SQL, which is our shared component for SQL parsing and SQL analysis. It's used in all of our SQL-related tools inside Google, and in our Cloud products BigQuery, Banner, F1, and others. Doing it in that query front-end analyzer place, we are able to generate the same intermediate representation for a query written in pipe syntax as we would in standard syntax. For a query engine, they receive the same thing, feed it through their optimizer and execution, and are able to basically get support for pipe syntax for free just by enabling a flag without having to implement any new execution support. 

That’s great, and that’s enabled us to support this in several tools. We had this paper last year in BLB. It has a lot more details on the language and some of the choices we made, and some of the analysis. I'll talk a bit more here about what we've been seeing from actual usage.

Here’s a graph showing usage in F1. Users doing pipe queries. F1 is one of the main query engines users inside Google are using to query data. An important thing is to see the shape of the graph. It's just growing fairly quickly and accelerating. What we're seeing is that users see the syntax. Once they see it, they are able to learn it pretty quickly and want to use it. It tends to be pretty sticky and to spread virally, showing that the users are quite happy with it.

Do you have numbers that could maybe say whether the pipe syntax is being generated by a tool? I guess in the very beginning there were no tools; everything's handwritten. Yeah, so this would mostly be queries people have written. There are various tools that generate queries. I'm not aware of any that are yet generating a lot of queries in pipe syntax. I think that is one of the advantages: generating queries in code that generate them in this form is a lot easier or should be easier. So, yeah, I think this represents actual usage by people for the most part.

So we get the question of who this is for. Who uses it? My answer is really I think it's for everyone who's writing SQL, or at least everybody doing non-trivial queries in SQL. For the experts or people who know SQL well already, it's really easy to learn. It just takes a few minutes to show a few of the details of how it works and a few examples. It’s a big benefit that it's the same operators you can do with mostly the same syntax, and it's just a better and more flexible structure for applying them. 

Then these users find themselves immediately more productive writing and editing SQL. For more beginner users, the set of users who have been exposed to SQL and don’t like it—that this fixes many of the more difficult and more annoying parts that cause a lot of users to not want to use SQL.

So here are a few samples of the kind of feedback we're seeing from users. I won't go through all of it. This experience is overwhelmingly positive. I've seen comments like this multiple times, that this is maybe the most useful change they've ever seen in SQL, and that level of excitement is kind of amazing. You might look at that and think it seems a bit overblown. Is it really that big a difference? 

I can show you examples side by side, and, yeah, this looks like a nicer way to write that query. It doesn't really capture the full benefit here; it's more than just a nicer syntax to look at. Being able to work in this syntax actually changes the way you think and the way you can use SQL. It's very freeing that whatever you want to do in a query, pretty much you can just do it and not feel like you're fighting against the language.

Beyond hearing that it's faster, definitely easier even. I've seen users saying that it's been more fun working in SQL this way. When you go back to regular SQL after using this, you can really feel the awkwardness in standard SQL, where there are so many things that feel like workarounds or are more difficult than necessary. 

Think about how exactly it helps to have queries written in this structure when you're building and editing queries. It's very nice that you can build them incrementally. You generally start with a FROM clause and just add more operators on the end as you're building queries. At any point, the query is executable, and you can run it and see what you've got so far. Just add another operator on the end, and generally, you're adding operators that are independent of most of what's going on in the query. 

You don't have to do these kinds of global edits about keeping SELECTs and GROUP BYs and subqueries all in sync with each other. Things like autocomplete and suggestion generally work better because the context comes from above where you're writing, which you don't really have that property in standard SQL. 

I think it's a good area for future exploration. The AI co-pilots for SQL, I think you could really take advantage of this and do something really smart and helpful when you're reading and debugging queries, trying to understand performance. 

There are also a lot of benefits. These queries have this really nice prefix property where the query up to a pipe operator is also a valid query. You can grab that prefix of a query and run it to see the intermediate results or see the results before and after applying some operator, like aggregation. At any point in one of those intermediate queries, you can stick in another operator, like an aggregation, to see the count or the breakdown of values in a query, which tends to be quite helpful when trying to debug.

I haven't done it yet, but I think there's an opportunity here to build an amazing IDE for working with SQL, where you could think of doing things like a debugger that single steps through a query. You can’t even really think about doing that in standard SQL because the syntax doesn't make sense to step through. 

We’ve also seen a lot of advantages by doing this in a query engine, in SQL language and in a query engine that people are already using because it's not like some new product or language people have to learn or make a big decision to start using. It's a feature that’s just there, and it's really easy to try it with no commitment and no setup. 

It also lets one user just go try it first, maybe just through their ad hoc queries, and then as they see value, they can spread it across the rest of their team. It enables this viral spread where you can get somebody to try it and like it, and it goes from there, versus other approaches that might require bigger decisions or some kind of migration. 

There's a lot of risk if your existing queries don't work in a new syntax, or it's kind of all or nothing. Here, it's much more incremental. You continue doing what you were doing before and use the new syntax only where it helps, while keeping full interoperability with everything you had before. 

You also avoid some of the downsides that would come with extra systems and proxies or translation layers, which add some challenges with debugging, where you can't tell what's really running when your query is in a translated other language. You don't have to worry about any issues of cost or latency when going through an extra proxy layer.

Now I'm going to focus a bit on extensibility, which I think is a very interesting area. I break this talk here into three categories of extensibility: when you're doing it in the query engines, or when users are doing it, or doing it in language design.

Let’s start with talking about table-valued functions. If you think of a table-valued function, it’s basically a generic relational operator that takes one or more tables as input and produces. 

Hey, Jeff, do you mind if I ask you a question real quick before we get into this? I was just curious: have you seen more use in sort of OLAP-style read-on queries? Like, you know, in BigQuery, for example, or are you also seeing the same viral growth in OLTP-style sort of read-write operations in Spanner? 

Yeah, it’s definitely much more interesting in the read-on cases. When it comes to doing updates, there's not nearly as much value in the syntax. It's more about the read side of it. We don't really have an update or delete syntax to do this; we could do an insert where you can produce rows this way and pipe them into an aggregate.
Insert operator but okay not really. Using it for transaction processing and it's also a kind of style read-modify-write transactions. There's not as much value there; it's more sure when you're exploring or analyzing. 

TVFs are basically generic relational operators and you can add TVFs in a query engine; you can call them in standard syntax. The problem is that the syntax is really bad, really painful to use because it sort of forces you into this nested subquery pattern of beating the input into the TVF as an argument. It's especially bad if you're trying to chain multiple TVFs together. 

We've made a pipe operator form of calling a TVF where it's just a top-level pipe operator to do this transformation, which is like this argument in an object-oriented call. The input table gets passed as the first argument to the TVF and then that allows calling them in a natural way, very much like a built-in pipe operator. 

Here's an example. Big query has a bunch of functions for machine learning operations; several of them are implemented as TVFs. The example on the left comes from their documentation, showing an example of calling two ML model lookups, like calling an embedding model and then a classifier model sequentially. This really shows this Inside-Out pattern or bottom-to-top thing that you get particularly with TVFs and standard SQL. 

You look at the pipe syntax on the right; it's obviously much more straightforward where you actually just call those operators, call those TVFs basically with close to first-class syntax, except we didn't have to add any language or support in the grammar. We allowed the engine to plug in more things just as functions. 

I'll talk about extensibility by users with SQL. Here's an example; there's been discussion going on about adding streaming operators in SQL—a paper from a couple of years ago. There has been discussion on this; it's kind of stalled a bit in terms of figuring out. I haven't reached an agreement on how to do streaming, how to do these operations in SQL. 

These three fundamental operators here are sliding windows, hopping windows, and sessionization. This paper was talking about how to do them as TVFs, which is a really nice approach semantically because it makes them work like a relational operator you can plug in. But the call syntax using them as TVFs is quite awkward. The pipe call syntax would be nice for that. Other ways of doing it have been pretty messy, but this hasn't been added in SQL yet. 

So what if you want to do it in SQL? Here's an example trying to compute sliding windows in SQL. You see a query computing active users over a 7-day sliding window, so it takes records with dates and spreads them across seven consecutive days. This block of logic in the middle here is the part that smears, like duplicates rows across seven days with seven consecutive dates, and then you can aggregate and get that sort of sliding window behavior. 

I won't walk through the query; I think if you read it, it's fairly easy in this form in pipe syntax to figure out what it does. The point here though is that if I end up doing this a bunch of times in a bunch of queries, this block in the middle or something similar might be repeated. You could copy-paste that in every query, but it's actually much better to make it a reusable function. 

So I'll just grab that block of sequence of operators out of a query and I'll make a table-valued function out of it; it's taking basically the same set of operators, just encapsulating it into a function. Then when I go to call it, it's like an inline call to do the logic that was inlined in the query previously. Effectively, it's a user-built extension to do sliding windows that then becomes very easy to plug into many queries in a way that looks basically like a first-class operator. 

This kind of encapsulation makes it possible to build libraries of extensions and write them in SQL but make reusable operators. Now technically, you could do this in standard syntax with TVF too, but the syntax is so bad to call them that users don't really do it. Also, in standard syntax, you wouldn't really even have this property of like okay, here's a thing in the middle of the query that I could just snip out and run as a self-contained thing. 

But in this example, you have an implicit schema inside the extended dates function. I wrote it this way, like assuming that there's a column called Date, which is why I renamed a column to be called date when I called it. There are a few unrelated features, but there are some reflection features where you could pass in a column name and resolve it; it would be really nice. A little bit more powerful templating functionality would make this even more powerful. 

Can I ask about join on nested? That's our join to an array. This is generating an array of zero through six, and then the unnest join is basically a cross product with that array that makes seven rows. My question is, can you do that in a nested way? Like if you're in the "from" world with joins in SQL land, can you also where you have maybe an array of objects or records with arrays inside of that, and you want to join across the hierarchy? Can you do that in the pipeline world or do you have to go back to SQL? 

I think I might miss that you could write this join in the "from" clause too, so that you could do this query in standard syntax. It'd be a little bit different, but it's not doing anything new that's not possible. Actually, I'm asking about the other way; I could let this go, but if you could scope inside of the join unnest to deal with nested hierarchies inside of the pipe context rather than the SQL from world, rather than flattening it out. 

Yeah, just if you had that complex example—array object array kind of thing—you definitely could build the array. There are lots of other things you could do; I'm not even saying that this is the optimal way to compute that operation. You could figure out a way to do it with window functions. 

It's a way that I used when making the dashboards for the graph I showed earlier, so it's an easy enough way to understand. The example is more like, once I do something, I can snip it out as a TVF. Okay, cool! 

Thanks. So now getting into the language design aspect of extensibility. If we talk about extending the SQL language, it's actually really difficult to add new operators to standard SQL, which is maybe why it doesn't happen very quickly. 

There are a lot of syntax challenges. Firstly, where do you even put something into that select where are from structure? It's often difficult to even figure out where you would put something to make sense. Once you figure out what you're going to do to fit something into a query, you have to figure out how to get it to work in the parser. Parsing standard SQL is very dependent on reserved keywords, which makes everything really difficult because adding new reserved keywords is always a breaking change on some query. 

There are often a lot of compromises trying to figure out some way to reuse something that you already have as a reserved keyword to avoid having to add new ones. There are also challenges in the semantics about how a new operator would interact with everything else that might be happening in the flow of a query, like whether there's aggregation or window functions or correlated subqueries. Everything adds complexity and sort of creates this quadratic complexity of all the interactions of other features of the language. 

Then, because of the syntax compromises, you often end up with something with poor usability. Often the new extensions require using even more subqueries to get something to work. If we contrast adding something in pipe syntax, the operators are independent and orthogonal to each other. Parsing is generally really easy; one of the advantages of having the pipe symbol is that it makes a natural separator between operations so that they can all parse independently. 

Generally, they don't need reserved keywords, or at least they don't interact with each other or cause conflicts. The semantics are also simple and local to each individual operator. There's no global interaction or state across operators other than an input table and an output table. 

It's much more like linear complexity when you're adding features. You don't have to think about interactions and for users, features added this way are great because you can just use the new operator anywhere, and it's fully flexible. 

Here's an example of a feature that has been added to standard SQL a long time ago: the idea of recursive queries. When you've got a tree-structured data and want to do a tree traversal or graph traversal, it's really nice to be able to do recursive queries. The way they work in standard SQL is fairly bizarre. 

It's quite difficult to explain or understand how that query works; it uses this "WITH RECURSIVE" syntax. It's not really recursion in a normal sense; it's written as a union, but it's not really a union. There are a lot of complicated requirements on the exact query shape that's supported and execution rules, like grabbing one half of the union, running it, and grabbing the other half of the union and running it multiple times. 

To actually use it, you have to structure your query around this "WITH RECURSIVE" clause, which means once you want to put something recursive into a query, you often have to rewrite it. 

Here's our take on how to do recursive queries in a pipe operator. This is new; we haven't put it out to users yet, but we've got an implementation. It starts just with a base query producing your input data and then recursive union as an operator takes the input query and runs the subquery repeatedly, adding more rows into the union until it doesn't get any more rows. It just returns the output of that union and then the rest of the query continues. 

So you get both a nicer syntax that clearly separates the base query from the recursive query. It's easy to explain the behavior with simple pseudocode. You get something that's composable; you can use it anywhere in the query, like in a sequence of joins. If you want your third join to be a recursive traversal down a tree, you can just mix that into the middle of a query without having to restructure the whole query around the "WITH RECURSIVE" clause. 

I think it's an example of how, with more flexibility in what we can do in the language, we can provide much nicer syntax for users. 

So why does language extensibility like this matter? Many people have probably seen this paper; it describes this recurring pattern of new things being created, often new languages or new data processing systems to solve problems in a new domain. The argument is that eventually, we always find that we want to add those things back into SQL and into their relational model. 

In the end, we didn't need other systems, but it takes a long time; we end up creating those other things first. I think the way that this pattern shows up when there are these new ideas being developed in new systems and in new languages is that if they're proven useful over time, then much later, they get folded back into SQL. It's a very indirect path. 

I think a big part of the reason this happens is that standard SQL is such a bad platform for innovation. It's very hard to experiment or add things into SQL, largely for these quadratic complexity issues I described earlier. Pipe syntax, I think, can change this because it becomes easy to add a new operator, and you can do it independently of everything else without breaking anything about existing queries. 

I think this is a potential way to unlock a lot of innovation. We can look at what are the good ideas that have come up in other places, in other systems, and we can add those operators into SQL, and we can do it fairly easily. The more forward-looking piece, like innovations for the future, is what's the next big thing we should be able to do? 

I don't think we need to invent languages for it and have people use a new language. We can just add operators and features in SQL. I've got a case study here or an example of I think this happening and showing it working well. 

The problem area I'm talking about here, I'm calling it operational analytics, sort of production monitoring and production alerting, where production services are generating a lot of metrics. Systems are collecting those metrics time series. There are a lot of streaming systems that are capturing those metrics from production services. 

Engineering management services do alerting and etc. Generally, SQL isn't used in this space. I just assessed the current state-of-the-art in this space. There are a bunch of languages and tools out there but compared to SQL, they're fairly primitive when it comes to querying and understanding data. 

This is a problem we've got at Google too. We've got a lot of cloud services, production services, a lot of monitoring and reliability issues, and we've got a lot of tools that have been built up over the whole history of Google. Generally, our SREs or engineers aren't very happy with the state of those tools, and I've been studying our options in the space for what we should do. 

The first option is to try to invent another language for this. I strongly argue against that for lots of reasons; inventing new languages isn't a great idea. There's not really a lot of reason to think that our third try at this will be better than previous attempts. 

The next branch is: is there anything out there in industry or open source that we like and would want to use? We haven't found anything that seems compelling. So what about SQL? 

There’s actually something quite interesting because this has been a recurring discussion I've had with teams in the space every couple of years over the last 10 years. It's always seemed like, yeah, we could do this with SQL, but would it really work? Would anybody really want to use it? 

With pipe syntax now, you see something has flipped. Now it makes sense; now it seems like something people would actually want to use. It seems appealing. So what we need to do is just add a few more time series operators for the kinds of things people do with this style of data, like aligning and interpolating time series. 

Then we can make this whole space fold together into the same ecosystem as SQL analysis, and we gain a lot of benefits from that. That's a fairly early but active area of work that we're trying to do next. 

I think there are a whole lot of other areas where the same thing applies. I'm not going to go through the list here; there are some areas that I'm aware of and have thought some about, like things I'd like to add to SQL. 

Sure, everyone else probably has their own list of things they'd like to be able to do in SQL or some other system. I think there's a lot of opportunity for the future. So I'll start wrapping this up here a little bit. 

This is something I saw recently in some headlines. It's talking about C++ and asking the same kind of question. C++ is another language that's been around for almost 50 years and asking if it's going to stay relevant in the future. Is it going to be displaced by languages like Rust? 

I think C++ is a more challenging and difficult starting point because the problems it needs to solve are about safety and security issues, which require much more fundamental changes to the language. If we ask the same question about SQL: what does SQL need for the future? Our starting point is actually great. 

The first 50 years have been a great success, and there's not a lot in SQL we actually need to remove or change. There’s not a lot that's broken. Most users aren't going anywhere else so far. Maybe the most competitive thing would be people using Python, but it's not really quite the same thing. 

I'd say SQL is holding us back. Its syntax is a burden for users and an obstruction to future growth and innovation. So my take on SQL for the next century, the next 50 years, is that we need to fix the syntax and pipe syntax is a really helpful way to do that. 

We don't need to replace SQL; we don't need to give up all the good things or give up the ecosystem. If we just fix the syntax like this for users, we can greatly enhance the user experience and the overall capability of SQL.
everything is still SQL. It's just a better version of SQL with the syntax change alone. It's already a great win for users; they love using it, and it's a great change for the future evolution of the language. I'm quite optimistic here about the set of things that we could do. There's a lot of promise for the future of SQL if we take some of these steps.

So that's sort of the end here. We've got, yeah, I think the best way to really get a feel for this is to read our paper; it's got a lot more details. The best way to get a feel for this is actually to try it. As of February, it's open to everybody to use in BigQuery. It's been implemented in Databricks and Spark. The first release of this has just come out recently, so there are places you can try it on real data with real workloads. We've got some of our code available as open source; people can play with that. Really, I think the thing that's interesting for the community is how do we go forward? Do we support SQL pipe syntax in more systems or eventually as a standard thing? I would hope so.

That's what I got. Thanks for listening, and do you have some questions? I will clap on behalf of everyone, Jeff. That was fantastic. We have time for questions, so if you have any questions for Jeff, just unmute yourself and fire away. 

Hey Jeff, this is Jish. Good to see you after a long time. This is fantastic; the pipe is awesome. One of the things that you often see with U-SQL in practice is that some of the SQL queries are 500 thousands of lines long. Besides the syntactical ease of use you get from what you described, the other complementary component is this cognitive overload. There might be 50 CTEs defined before you get to the main query you're trying to figure out, like which CTE this subquery is referring to. Do you see problems like that which are complementary to the pipe syntax? Are you thinking about how you might be able to solve that cognitive overload component?

Yeah, there's a bunch of things connected there. Obviously, at some point when you get to thousands of lines of logic, it gets overwhelming. People can break something up with CTE; that helps a little bit. There are some things that you can remove subqueries by using CTE, but I still consider a CTE to be a subquery. You still have to chase the names and follow the links, and you get out of line logic. Being able to write the logic linearly is helpful. At some point, it's still useful to break things up into multiple statements. You can still use CTEs; give things names. I think the example I showed with TVFs of pulling things out as encapsulated blocks of logic can be really helpful. I think that's something we can do more of.

Another parallel direction we're working on is more modularization of SQL, so you have more reusable building blocks, like more code sharing, more code reuse. I call this making SQL more like a real programming language where you can actually have libraries and share them. A variety of techniques start with fixing the syntax, but then you do more about managing the complexity of some of the logic that people do. 

One follow-up question: Do you think SQL gets easier if you had, of course, enough training data? If that was in pipe SQL as opposed to the ugly SQL syntax that we have right now? 

Yeah, I think generating SQL from any representation in this form is easier. If you're doing it in code, you generally have some data structure that expresses what you want to do. That's basically a sequence of operators, and here you can translate your operators one-to-one into syntax, which is much easier than having to figure out how to wrap things into subqueries or CTEs or what can be combined into one query versus being a subquery. A lot of that goes away, and you can directly translate into operators. You don't have to have cross-referencing nearly as much.

I think this applies both to humans generating queries and also if at some point AI is generating queries. The same benefits apply. I think a particular benefit beyond that with AI generating queries is depending on how much you trust what would come out of an AI model. I think human validation of the query is still really important. If you've looked at generated code that comes out of other systems, it's usually a nightmare. The fact that you can generate something that is much more concise and much more readable in this form is really nice to have it in a nice readable syntax if you're generating something that you expect a human to validate.

Great, thank you. Other questions from the audience? 

Yeah, you mentioned standardization. How do you see that unfolding? Is this ANSI or an industry standard? 

I think ultimately doing this in the SQL standard would be great, and that would be the best way to get this into as many engines as possible. If we start soon, it might be the time to start that discussion. If we're going to have this picked up in more engines, the more consistently we could do it, the better. I mean, the standards committee is going to take at least five years, right? 

Yeah, that's probably true. We could have tried to start that way. I don't think it would have worked to start that way because just writing this idea on paper without having tried it or demonstrated it sounds a bit too much and might make us seem crazy. Also, by actually doing it, we learned a lot. What we have now is informed a lot by trying to build it, trying to use it, and figuring out how it works. It's somewhat speculative that, yeah, it seems like it would work, but actually trying it and finding out how compelling it is once it exists has been useful.

Figuring out the next step of getting interest across the industry and with standard boards and figuring out that process is somewhere in the future. If you can get it into the SEL pars libraries in Rust, Python, I don't know what the equivalent of C++ is, but basically every new system built in Rust is using SQL parts. If you can get it in that, that's at least in the newer generation. Oracle's not going to put this in. 

I've seen this in some other systems like SQLite or Postgres or some others that have said this looks cool, but are we willing to be that aggressive on strange innovative new features? If it's in the standard or used more widely, then it gets more permission for more places to do it. 

We, like Red, did it in our implementation directly in our tools, which I think is the ideal way to get it as a user. The proxy approach of something that you can put in front that would receive a query in this way, translate it into something that you could run on multiple engines, still makes sense as an approach to get it working and usable in a much broader context across other existing systems. 

But do you even want to try to get into a standard? This is a layer above SQL. We don't have standards for Assembly Language, so does SQL become like an assembly language and this just sits above it? Or do you think that's not a good way to think about it? 

If you think of it as this rewrites into SQL, then you take that view of it's another language in front. I think of it much more as a feature of SQL, much better integrated into the language. It should share syntax with something you can do in standard syntax; you can do it in this syntax in exactly the same syntax. 

I think the interoperability, or if you make a view in one syntax, you can use it in the other, or you can incrementally add things into queries this way, is really useful to support that incremental adoption and interoperability. It works best if it's a feature of the language rather than another language in front.

Nick from the chat asks: Can you talk more about what's coming next for pipe SQL? Maybe by showing the slide again? What do you see as the priorities? Domain-specific time series streaming, code fragment reuse, semantic model, pre-join measures, fan-out work? 

The answer is all of the above. Some of these have more complexity than other things, and some of them are somewhat parallel tracks that happen at different speeds. The time series and streaming are very connected to the sort of monitoring use case, which we definitely are early in figuring out the operators we need. But that's one we're definitely working on.

Graph query is more to me like hypothetical, as we've been working on GQL and SQL PGQ, the embedded graph language inside SQL. Some thoughts of if you could just do graph matching operators—it's a shorthand for recursive queries inside SQL—like that would be neat. That's more exploratory. 

Semantic data modeling and OLAP query areas are the areas of a lot of active work. We're trying to figure out what a SQL integrated solution looks like, where you can just do SQL queries over things that are semantic data models. It's more like a research project figuring this out, but I think that will be really neat if we get it working. 

Working with structured data: There's a talk a couple of weeks ago about Malloy. One of the things that's really nice that Malloy does is how it works with structured data and returns structured output. We've had in Google SQL working with structured data and protocol buffers forever, but all the SQL operators basically take a structured thing and flatten it out as a relational table. 

SQL Plus+ works primarily on JSON; it's kind of the same approach. It's very similar to how protocol buffers or JSON work in Google SQL. Most of these SQL approaches basically turn things into flat tables as you query them. I would like to be able to do more queries that build structure and preserve the structure as you query. That might be one we do more work on soon.

SQL has a real programming language modularity: code reviews, testability. That's another track we’re doing a lot of work on at Google. We probably should at some point publish some of what we've got. We have several pieces that are quite interesting. Maybe in another six months or a year or something, we'll have enough of a complete picture that's worth doing an overall paper on what we've got in that area. 

But yeah, it was my question to the audience: What are the next ten things you'd like to fold into SQL? There’s a lot to do. 

Other questions from the audience? 

Yeah, I have a follow-up to the standardization stuff. Let me lay out this vision. No offense to people who like old SQL, but if your vision of this is like the new way for the next 50 years pans out and you really nail the clean semantics of the pipe syntax, is there a way to prevent the backward compatibility of some of the CFT SQL stuff seeping into the pipe SQL land? Or could you keep those worlds very deliberately? Maybe you have some backward compatibility, but there's the canonical way you should write your pipe queries. One example is JSON arrays in many SQLs are zero-based, and SQL arrays are one-based. The same index operator works two ways. Is there a way to head toward the right outcome by writing your vision of this pipe syntax?

I think there's a bunch of things there, like a few more exotic operators that we've experimented with a bit. Some of them probably come out as operators that only work in pipe syntax just because they don't fit anywhere into a standard SQL query without a lot of difficulty and compromise. 

We’re getting to the point that there are certain things that require pipe syntax to get some of the newer features. We want this to be the future and would consider old syntax deprecated in some way. That could be an option to put a warning or just at parsing time whenever to make it an error to do something in the old syntax. 

Actually, there's a particular tool inside Google that was going to start using SQL, and they asked for the feature of could we put an option in so that only pipe syntax is allowed? We hadn’t thought of doing that so far, but that's the kind of thing we could do. 

I guess another area of work I didn’t mention is we're working on a translation tool to take queries in the existing syntax and convert them to pipe syntax, not just as something that can convert for consumption of query engines. We want something to convert in a way that produces idiomatic output that is similar to what a human would have done as translation and produces something that is actually nice to look at, preserves comments, and preserves all the aliases. 

If you wanted to migrate your code to the new syntax, I think we can make tools that will do that translation for you. It’s something we’re working on; it’s basically a series of refactoring steps that are fairly algorithmic. We just have to implement some basic steps, like take a subquery and pull it out and put it in front of a pipe. Essentially, just explode the standard query into pipe operators and then start simplifying it based on a set of rules. 

Thanks. Quick question: Jeff, does BigQuery use Zeta SQL, or does it have its own parallel implementation?

It's the same implementation. We have Google SQL as a component underneath all of our systems, and Zeta SQL is the same code as that. 

Thank you. All right, any last questions? 

Um, my last question would be, what was the lineage or the progression of building this out? Did you just sit down at once and say, "Hey, let’s try this," and you generated the pipe SQL sort of thing as the first go? Or was there sort of an earlier prototype you tried some things out that didn’t quite work or make sense, or didn’t map to exactly maybe the semantics you wanted to achieve? Was anything a predecessor to pipe SQL? 

Yeah, it’s interesting because it was kind of—like the idea originally came about, I think like five years ago. There were some docs sitting around that I wrote that long ago. It was kind of like brainstorming exercise at that point, and we were talking about some of these other languages like KQL and Splunk that people use that have these sort of pipe behavior or pipe structure, and the users really like them in certain domains. 

It’s just kind of this thought exercise of what would it look like in SQL to do that. At that point, I thought, "Yeah, this seems kind of cool. It's kind of radical." Do we want to do that much? Would we really want to launch it if we built this? We kind of just sat on it for several years, and it's more like a year or two ago we came back to it again. 

Part of it was talking about this monitoring use case that I mentioned, and trying to figure out the future of monitoring. That was one of the motivations to really do pipe syntax because we could see that there are people who do those kinds of things in Kusto or Splunk and really like it, and would like to do the same. 

There are a lot of things in that space. Once you get past the first few time series operators, basically, you do aggregation queries to make your dashboards. Being able to query that data, do the time series stuff, and then do regular SQL after joining to all the other data you've got would be really interesting. 

So that was one of the motivations to say, "Okay, yeah, let’s actually try this." Then it was like we started implementing it, adding more operators, and the further we got into it, the more compelling it seemed. I think I say it exceeded our expectations and realized more benefits than we even thought of ahead of time. 

We also realized some of the tweaks or things to figure out, like what operators we needed or wanted to have in a query, so that evolved a bit more as we were trying it out, trying to use it, and seeing others try to use it.
[Music] 

he

---

[Music]

**Speaker:** Jeff  
Nationwide sequel or death, yo son, what are you going to choose? Yo, check it. This seminar is filmed at Carnegie Mellon University. Thanks a lot, Google. This is Jeff. He's been at Google for 20 years. He's touched every single database you know about at Google. He's phenomenal. He's super smart. It's the best school in Canada for computer science. Talk about Pipe SQL. Jeff, the floor is yours. Go for it. Thank you.

**Jeff:**  
Yeah, thanks for the do-over on the intro. Happy to be here and share some of what we've been doing at Google to make SQL better for everyone. I'll start with the idea that SQL has some problems, and I don't think that's particularly new or controversial. I like this Stonebreaker quote from a couple of years ago. He discusses SQL as a very old language, noting that there are many annoying aspects that have never been cleaned up. We've kind of just assumed that we can't improve it.

There's also this quote from Don Chamberlain, one of the original inventors of SQL. He gave an interesting talk a few years ago about its history and evolution. I found some points particularly intriguing. He contrasts SQL’s English-style syntax with what you might expect as a programmer. He describes SQL as a functional language with operators as functions that are orthogonal, meaning they don't have side effects. Interestingly, SQL doesn't adhere to that design. He reflects that had they known how things would evolve, they might have made different choices.

**Jeff:**  
From my perspective, the problem is that SQL is way too hard to use. This affects everyone. For beginners, SQL can be tough to learn, and even expert users find it awkward and difficult to use, both when writing and reading it. I think this stems from the syntax. In SQL, you write a query in a specific order with clauses like SELECT, FROM, WHERE, etc. It's rigid and arbitrary. Anything beyond simple queries typically requires subqueries or other workarounds. This structure results in a strange inside-out data flow where the query starts in the middle with the FROM clause or nested subqueries, and then flows outward, creating confusing logic both above and below the starting point.

Additionally, there's a lot of redundancy, where you end up listing the same columns repeatedly in SELECT, GROUP BY, etc. The general complexity arises from how SELECT and GROUP BY interact, despite being far apart in the query. After 50 years, I believe it's time to fix SQL, and I don't think we need to replace it; improvements can actually be made.

**Jeff:**  
There are many valuable elements in SQL that we don't want to lose. The declarative semantics function very well at a fundamental level, and the relational operators are appropriate. The table-level composability through views and subqueries also works effectively. Perhaps more importantly is SQL's surrounding ecosystem. Many databases, query engines, and tools utilize SQL, making it a familiar language with a vast user base. There's a wealth of existing SQL code that we don't want to lose, as migrations can be painful for both learning and rewriting in new tools.

Meanwhile, we've noticed a trend in many newer languages and APIs that utilize a piped data flow syntax. This works similarly to Unix pipes, with a collection of operators linked together using pipe connectors. The output from one flows into the input of the next, as seen in many modern query languages and in APIs like DataFrames or Flume. Users generally find these systems straightforward to understand and easy to use.

**Jeff:**  
Our solution is to adopt a similar approach in SQL. We take all the operators you can use in SQL and create a pipe operator equivalent for them, maintaining as much of the original syntax as possible to allow arbitrary chaining in any order and as many times as desired. 

This generates query logic that flows from the top of the query to the bottom, making it simple to understand. It's crucial to note that it remains declarative, so we still expect optimizers to reorder for optimal execution paths. We use a two-character pipe symbol; while it's a bit of a compromise since the single pipe character is utilized for bitwise OR in our dialect and many others, it’s manageable once you become accustomed to it. Interestingly, we've observed this symbol appearing in many other languages for similar purposes.

**Audience:**  
Sorry, maybe you'll get into this going back to the last slide. You have the two WHERE clauses; can you still combine them with an AND clause? 

**Jeff:**  
Yeah, you can definitely do that. This serves just as an illustration that you can use WHERE multiple times.

**Jeff:**  
Okay, awesome, thanks. Here’s an example from one of the queries in the TPC-H benchmark. In this case, it performs an aggregation in two steps. If you look at the query on the left, it shows a strange inside-out data flow pattern typical in standard SQL. You start in the middle with the inner FROM clause, with logic above and below it. To trace through what's happening, you have to navigate both up and down, matching a lot of components.

In contrast, if you observe the pipe syntax on the right, it simply articulates what you want to do in the order you want to do it: start scanning a table, perform a join, aggregate it, sort, and then finish. It’s straightforward and easy to comprehend.

Here's a list of most of the operators we've included. You can initiate a query with any regular FROM clause, including joins if you'd like. Many standard SQL clauses now have a pipe version, utilizing the same syntax. This also includes a shorthand for adding or updating columns in the SELECT list, eliminating the need to repeat every column you want to keep.

We've made aggregation a separate operator, distinct from projection, which improves readability and convenience for several reasons. There are a variety of other operators, and you might have seen this picture from a recent paper by Cider, showcasing the oddities of standard SQL. The order in which you write operators doesn't correlate with the semantic flow of the query execution.

**Jeff:**  
Comparing it to how we write in pipe syntax, we systematically uncross those lines. The result is clean and simple because the syntax aligns perfectly with the semantics of what you're executing. This alignment creates a match between relational algebra and the operators you're using, facilitating seamless translations in either direction.

It remains important to emphasize that both syntaxes are declarative. They don’t dictate the execution order; they simply convey semantics. You should expect the same performance and results whether writing queries in one way or the other. Interoperability is a significant consideration. One advantage of this approach is that we can add pipe syntax anywhere a normal query works, mixing and matching within the same query across views or using commutable expressions in a WITH clause. Any query written in standard syntax can also incorporate pipe operators for additional computations, all while utilizing the same tools.

The example on the right demonstrates the combination of operators across both syntaxes. Briefly about our implementation: we've integrated it into Google SQL, our shared component for SQL parsing and analysis. This tool is utilized across all our SQL-related tools within Google, including our Cloud products like BigQuery, Banner, F1, and others. By implementing it in the query front-end analyzer, we generate the same intermediate representation for a query written in pipe syntax as we would for a standard syntax query. Query engines then receive the same output and can perform optimization and execution, effectively supporting pipe syntax without requiring new execution capabilities.

**Jeff:**  
That's great, and it has enabled us to support this across several tools. We published a paper last year in BLB detailing the language, our choices, and some analyses. I’ll provide some insight into our actual usage based on what we've been observing.

Here’s a graph displaying the usage of pipe queries in F1. F1 is one of the primary query engines used within Google for querying data. An essential takeaway is the shape of the graph, which is growing rapidly and accelerating. Users quickly grasp the syntax once they see it and express a desire to use it. It tends to be sticky and spreads virally, indicating user satisfaction.

**Audience:**  
Do you have numbers indicating whether the pipe syntax is generated by a tool? In the beginning, were there no tools, and were these queries all handwritten?

**Jeff:**  
Yes, these mainly represent queries written by users. While there are various tools that generate queries, I’m unaware of any that significantly produce pipe syntax queries yet. One of the advantages here is generating queries in this form should be easier and more advantageous. So, yes, this data primarily reflects actual usage by people.

**Jeff:**  
Now we encounter the question of who benefits from this. Who uses it? I believe it’s for everyone writing SQL, particularly those performing non-trivial queries. For experts familiar with SQL, it’s easy to learn; it just takes a few minutes to cover the details and examples. A significant advantage is that it utilizes the same operators and mostly the same syntax, providing a better and more flexible structure for their application.

Users find that they become immediately more productive while writing and editing SQL. For beginner users, this addresses many of the difficult and frustrating aspects of SQL that often deter users from wanting to engage with it.

**Jeff:**  
Here are some examples of feedback we’re receiving. I won’t go through all of it, but the overall experience is overwhelmingly positive. I’ve seen multiple comments asserting that this may be the most useful change they’ve experienced in SQL. That level of excitement is genuinely astonishing. 

You might consider this slightly exaggerated; is the difference really that significant? I can show you examples side by side, and, yes, it does seem like a more pleasant way to construct queries. However, it’s more than just cosmetic; working in this syntax fundamentally changes how you think about and use SQL. It’s liberating because you can essentially do what you want within a query without feeling constrained by the language.

Users have reported that it's noticeably quicker and undoubtedly more enjoyable to work in SQL this way. When transitioning back to standard SQL after using this new syntax, they express discomfort with the awkwardness of conventional SQL, where many tasks feel like tedious workarounds or unnecessarily complex.

**Jeff:**  
It’s worth thinking about how having queries formulated in this structure assists in building and editing them. It’s quite advantageous to incrementally construct queries. Usually, you begin with a FROM clause and simply add more operators as needed, allowing the query to be executable at any stage. You can run it to view what you have at any point by appending additional operators, typically adding components independent of the overall query content.

In this approach, you avoid extensive global edits required to keep SELECTs, GROUP BYs, and subqueries aligned. Features like autocomplete and suggestions function better because the context is derived from above where you're working—something standard SQL lacks.

I see potential in this area for future exploration. We could develop intelligent AI co-pilots for SQL that capitalize on this structure to assist with reading, debugging queries, and analyzing performance.

Many benefits emerge from this design. These queries possess an appealing prefix property where the segment of the query leading up to a pipe operator is also a valid query. You can run that prefix to view intermediate results or observe outcomes before and after applying specific operations, like aggregation. This offers tremendous help while debugging.

While I haven't explored this yet, there’s an opportunity to create an impressive IDE for SQL, where features like debuggers can step through a query. In standard SQL, this is challenging because the syntax does not lend itself to this kind of navigation.

We've also observed significant advantages from implementing this within a query engine, using a SQL language and engine familiar to users. This avoids the need for a completely new product or language that requires learning or major decisions to utilize. Instead, it's simply a feature that exists, making it easy to try without commitment or setup.

This approach allows users to experiment first through ad hoc queries, and as they recognize its value, they can disseminate it to their teams. This viral spread enables someone to start using it and appreciate it, and it cascades from there, as opposed to other methods that involve larger decisions or migrations.

The incremental nature is beneficial as well. Users can continue their previous workflows while incorporating the new syntax only where it is advantageous, maintaining full interoperability with all their original queries.

Furthermore, this method helps avoid common pitfalls associated with additional systems, proxies, or translation layers, which introduce challenges with debugging difficulties and obscure what's truly operating when queries are transformed into alternative languages. You also don't have concerns regarding costs or latency that can arise from additional proxy layers.

**Jeff:**  
Now, I’ll shift focus to extensibility, which is a fascinating topic. I categorize this discussion into three areas of extensibility: in query engines, user applications, and language design.

Let's start with table-valued functions. Think of a table-valued function (TVF) as a generic relational operator that takes one or more tables as input and produces...

**Audience:**  
Hey, Jeff, do you mind if I ask you a question real quick before we get into this? I was curious: have you noticed more usage in OLAP-style read-only queries, like in BigQuery, or do you also see similar viral growth in OLTP-style read-write operations in Spanner?

**Jeff:**  
Yes, it’s definitely more exciting in the read-only cases. When it comes to updates, the syntax doesn’t provide as much advantage. It's primarily focused on the read aspect. We don’t really have syntax for updates or deletes; we could utilize an insert that outputs rows, piping them into an aggregate. So there's limited value for transaction processing—it's primarily beneficial for exploration or analysis.

TVFs offer generic relational operations, and you can incorporate them into query engines, invoking them using standard syntax. Unfortunately, their syntax can be cumbersome and painful to use, as it often forces a nested subquery pattern to match inputs into the TVF as arguments. This becomes even more cumbersome when trying to chain multiple TVFs together.

We’ve formulated a pipe operator version for invoking a TVF where the first argument is the input table, allowing for a more natural call. It's similar to an object-oriented call, aligning smoothly with built-in pipe operators.

Here’s an example: BigQuery features many functions for machine learning operations, several of which are implemented as TVFs. The left side displays a standard documentation example invoking two ML model lookups—for instance, calling an embedding model, followed by a classifier model sequentially. This demonstrates that inside-out pattern typical in standard SQL. 

Now, if we look at the pipe syntax on the right, it’s clearly more straightforward, allowing you to call those operators and TVFs with nearly first-class syntax—without needing to augment the language or support in the grammar, just letting the engine plug in additional functions.
**Jeff:**  
Let's dive into the topic of extensibility from the user's perspective regarding SQL. There's been some ongoing discussion about adding streaming operators to SQL, a topic explored in a paper a couple of years ago. However, progress on this has stalled, and there hasn't been a consensus on how to implement streaming operations in SQL.

The three main operators being discussed are **sliding windows**, **hopping windows**, and **sessionization**. The paper suggested using table-valued functions (TVFs) for these operations, which is a promising approach semantically because it allows them to function as relational operators that can be plugged in. However, using them as TVFs can be quite awkward, making the introduction of a pipe call syntax much more appealing. Unfortunately, these operators haven't yet been integrated into SQL.

**Jeff:**  
Now, consider a practical example: executing a sliding window operation in SQL. The query calculates active users over a 7-day sliding window by spreading records with dates across seven consecutive days. In the middle of the query, there's a block of logic that essentially duplicates rows for those seven days, allowing for aggregation and the desired sliding window behavior.

While I won't detail the entire query, if you look at it in pipe syntax, you can easily grasp its purpose. The key point is that if I frequently run this logic across various queries, I either have to copy and paste that block each time or, ideally, encapsulate it into a reusable function.

**Jeff:**  
So, I would extract that sequence of operators from the query and create a TVF that encapsulates it. When I call it, the logic previously inlined in the query is neatly packaged as an inline call. This effectively provides a user-built extension for sliding windows that can easily integrate into numerous queries, functioning just like a first-class operator.

This encapsulation allows for building libraries of extensions that can be written in SQL but offer reusable operators. Technically, it's possible to achieve this using standard syntax with TVFs as well, but the cumbersome syntax often deters users. Additionally, in standard SQL, you wouldn't have the property of easily removing and running a self-contained section of the query.

**Audience:**  
Can you elaborate on joining with nested arrays? I see you're generating an array of numbers from zero to six, and then the unnest join creates a cross product that results in seven rows. My query is whether you could write that join in a nested manner within the pipeline context, especially if the data involves arrays of objects or records.

**Jeff:**  
You can indeed build this array within a nested context, allowing for the operations you described. However, I’m not claiming this is the most efficient method for that operation. There's more than one approach, and you could find ways to leverage window functions as well. The technique I used for the dashboards in the graph I previously showed illustrates a straightforward way to implement this. The main idea is that once I create a function, I can seamlessly extract and use it as a TVF.

**Jeff:**  
Now, let’s shift to the topic of language design in terms of extensibility. Extending the SQL language is quite challenging; adding new operators to standard SQL tends to be a slow process. 

There are several syntax-related obstacles to overcome. For instance, determining where to place new elements within the `SELECT WHERE FROM` structure can be perplexing. Once that's established, figuring out how to make it work with the parser becomes another hurdle. Parsing standard SQL is heavily reliant on reserved keywords, which complicates matters, as introducing new reserved keywords can result in breaking changes for existing queries.

It's common to find compromises in this process, where existing reserved keywords are repurposed to avoid introducing new ones. In terms of semantics, the interaction of a new operator with all other features in a query, such as aggregations or correlated subqueries, adds further complexity, resulting in a web of interactions of other features in the language.

**Jeff:**  
Due to these syntax compromises, new extensions often require additional subqueries to function correctly, which diminishes usability. Conversely, in a pipe syntax, the operators are independent and orthogonal, making parsing much simpler. One advantage of the pipe operator is that it naturally separates operations, allowing them to parse independently without interactions or conflicts. The semantics are straightforward and localized for each operator, resulting in a linear complexity when adding new features, enhancing user experience.

As an illustration, consider recursive queries in standard SQL. While incredibly useful for tree or graph traversals, the implementation can be puzzling due to the "WITH RECURSIVE" syntax, which demands complex structure and execution rules. 

**Jeff:**  
Here's how we envision recursive queries within a pipe operator: You start with a base query that produces input data, followed by a recursive union operator. This takes the input query and runs a subquery repeatedly, gradually building the output until there are no more rows to add. This approach yields a cleaner syntax, clearly distinguishing the base query from the recursive logic, while remaining flexible for use anywhere in the SQL structure.

By granting this sort of flexibility within the language, we can provide users with a more intuitive syntax and experience.

**Jeff:**  
So, why does language extensibility matter? Many have likely seen discussions around new languages or systems emerging to address domain-specific problems. Ultimately, we often realize we want to integrate these innovations back into SQL because it remains a powerful platform for querying and understanding data.

However, the traditional SQL model poses barriers for innovation, primarily due to its intricacies and the complexity of introducing new features. Pipe syntax offers a potential solution, allowing for easy addition of operators without disrupting existing queries. This eases experimentation and integration of useful ideas from other systems into SQL, paving the way for future developments.

I've identified a specific case study demonstrating this potential—operational analytics, where services generate numerous metrics. Currently, SQL is underutilized in this domain. 

At Google, we face similar challenges with our cloud services, where the tools available to engineers for monitoring and reliability often fall short of expectations. The first instinct might be to create an entirely new language, but I strongly advocate against that. 

**Jeff:**  
We have explored existing industry solutions but found little compelling. Now, with pipe syntax, the perception is shifting; it appears people would genuinely want to engage with SQL rather than looking elsewhere. By equipping SQL with more time series operators tailored for this type of data—such as aligning and interpolating time series—we can integrate this space into the broader SQL ecosystem, unlocking numerous benefits.

I also recognize various other areas where similar improvements could be made. While I won't enumerate them all, I believe many have their wish lists of enhancements for SQL or alternative systems. 

To wrap things up, I recently encountered some discussions regarding C++ and its relevance going forward, pondering if languages like Rust might take its place. Unlike C++, SQL has had a successful 50-year journey, and there's no significant need to remove or overhaul existing features. Instead, the issue lies primarily in SQL's cumbersome syntax, which hampers user experience and potential growth.

My viewpoint for the next fifty years is that we need to refine SQL's syntax. Pipe syntax can facilitate this transformation. We don't need to abandon the essence of SQL or its ecosystem; rather, by improving the syntax, we enhance user experience and the language’s overall capabilities significantly. Thus, it’s encouraging to see a promising future for SQL with these steps.
**Jeff:**  
So that’s sort of the conclusion here. I think the best way to really understand this is to read our paper; it includes a lot more details. However, the most effective method to grasp it is actually to try it out. As of February, it’s been made open for everyone to use in BigQuery. It has also been implemented in Databricks and Spark. The initial release of this has just come out recently, providing options to experiment with real data and workloads. Additionally, we have some of our code available as open-source for people to explore. The key question for the community now is: how do we move forward? Should we aim to support SQL pipe syntax in more systems, or eventually establish it as a standard? I certainly hope so. 

That's what I've got. Thanks for listening! Do you have any questions? 

**Audience Member:**  
I will clap on behalf of everyone, Jeff. That was fantastic. We have time for questions, so if anyone has queries for Jeff, please unmute yourself and go ahead. 

**Jish:**  
Hey Jeff, this is Jish. It's great to see you after a long time! This is fantastic; the pipe is awesome. One thing I often see with U-SQL in practice is that some SQL queries can balloon to be 500,000 lines long. Beyond the syntactical ease you’ve described, cognitive overload is another challenge. For instance, there might be 50 CTEs defined before you even reach the main query. It can be difficult to determine which CTE a subquery refers to. Do you see similar problems that are connected to the pipe syntax? Are you considering ways to solve that cognitive overload? 

**Jeff:**  
Yeah, there are many interrelated issues there. Obviously, once you get to thousands of lines of logic, it becomes overwhelming. People can somewhat mitigate this with CTEs, which helps a little. Some subqueries can indeed be removed by using CTEs, but I still consider a CTE a subquery. You still have to follow the names and track the links which can lead to disorganized logic. Being able to write the logic linearly is beneficial. However, it can still be useful to break things into multiple statements. You can keep using CTEs and assign them names. The example I showed with TVFs, where we pull out specific blocks of logic, can be particularly effective. That’s definitely something we can explore further.

An additional direction we’re pursuing is more modularization of SQL, enabling reusable building blocks and promoting code sharing and reuse. I refer to this as making SQL more like a traditional programming language, where libraries can be shared. This ties into fixing the syntax and managing the complexity of some of the logic users encounter. 

**Audience Member:**  
One follow-up question: do you believe SQL becomes easier with enough training data? If that were in pipe SQL, as opposed to the cumbersome SQL syntax we currently have? 

**Jeff:**  
Absolutely! Generating SQL from any representation in this format is notably easier. When working in code, you generally have a data structure that reflects your intentions. Ultimately, this manifests as a sequence of operators, which translates directly into syntax. This is much simpler than wrapping everything into subqueries or CTEs and trying to determine what can combine into one query versus what must remain a subquery. A lot of that complexity dissipates, allowing for more straightforward translation into operators. The same principles apply to both humans generating queries and AI doing so. 

Moreover, one particular advantage when AI is generating queries is that human validation remains crucial. If you've observed generated code from other systems, it typically turns out messy. The ability to produce concise, readable output in this format is invaluable, especially if it's something that will undergo human review.

**Jeff:**  
Great! Thank you. Are there other questions from the audience? 

**Audience Member:**  
Yes, you mentioned standardization. How do you see that unfolding? Is it through ANSI or an industry standard? 

**Jeff:**  
Ultimately, achieving this within the SQL standard would be fantastic, as it would facilitate the integration into numerous engines. If we start soon, it might be the right time to have that discussion. It would be advantageous to establish consistency for broader adoption across more engines. However, we must consider that the standards committee typically takes at least five years, right? 

**Audience Member:**  
Yeah, that seems accurate. 

**Jeff:**  
We could have attempted to start that way, but I doubt it would have succeeded right from the beginning. Simply documenting the concept without having tested or demonstrated it might have come off as unrealistic. Moreover, through actual implementation, we gained insights. What we have now has been greatly shaped by building it, using it, and witnessing how it operates. It’s somewhat speculative, but trying it out truly illuminated how compelling it is once in practice. 

Figuring out the next steps to garner interest from the industry and standard boards is something we’ll tackle in the future. Getting it integrated into SQL parsers in languages like Rust, Python, etc., is crucial. There’s likely an equivalent for C++, but basically, any new system built on Rust is utilizing SQL components. If we can achieve this, it would significantly benefit the newer generation. 

**Audience Member:**  
I’ve also spotted similar features in other systems like SQLite or Postgres. They’ve shown interest, but are they willing to embrace unconventional innovative features? If it gets standardized or adopted widely, it would likely receive more acceptance across various platforms. 

**Jeff:**  
Exactly! We did implement it directly into our tools in Red, which I believe is the best way to get user engagement. The idea of having a proxy that receives a query in this format, then translates it into something executable on multiple engines, still makes sense for broader utility across existing systems. 

However, is there a desire to aim for a standard? This operates as a layer above SQL. We lack standards for assembly language—does SQL become like an assembly language while this sits above it? Or do you believe that’s not the right mindset? 

**Jeff:**  
If you think of it as rewriting into SQL, it’s another language in front. I see it much more as a feature of SQL, one that integrates seamlessly into the language. It should share syntax with what can already be done in standard SQL, allowing you to operate identically in both syntaxes. 

The interoperability of using a view in one syntax and allowing it in the other, or incrementally adding elements into queries, greatly supports that gradual adoption and compatibility. It works best if it’s viewed as a language feature rather than a separate language. 

**Nick (from the chat):**  
Can you elaborate on what comes next for pipe SQL? Would it be possible to show the slide again? What do you see as priorities? Areas such as domain-specific time series streaming, code fragment reuse, semantic models, pre-join measures, or fan-out work?

**Jeff:**  
The answer is all of the above! Some have more complexity than others, and various tracks may progress at different paces. Time series and streaming are closely related to the monitoring use case, where we are still early in identifying needed operators. That’s definitely a focus area for us. 

As for graph queries, to me, that’s more hypothetical—having worked on GQL and SQL PGQ, the embedded graph language within SQL. The notion of allowing graph matching operators—essentially a shorthand for recursive queries in SQL—would be intriguing, though it remains exploratory.

Areas like semantic data modeling and OLAP query domains are active fronts as well. We’re working to develop a SQL-integrated solution that can handle queries over semantic data models. It’s more akin to a research project right now, but if we succeed, it could be quite exciting. 

We’re also looking into structured data management. There was a talk a couple of weeks ago about Malloy, and one of its strengths lies in how it handles structured data while returning structured output. We’ve worked with structured data and protocol buffers in Google SQL for a long time, but traditionally, SQL operators flatten structured inputs into relational tables. 

SQL Plus+ mainly deals with JSON, adopting a similar methodology. However, I'd like to progress towards executing queries that build and preserve structure as we query; that's something we might focus on soon. 

We’re also putting a lot of work into making SQL more modular, ensuring features such as code reviews and testability are stronger. We’ll probably publish some of our findings on that front at some point. In about six months to a year, we might have a complete picture worth documenting in a comprehensive paper. 

Ultimately, I pose this question to the audience: what are the next ten features you’d like to see integrated into SQL? There’s a lot to be done! 

**Audience Member:**  
Are there more questions from the audience? 

**Audience Member:**  
Yes, I have a follow-up regarding the standardization topic. I’d like to share my vision. With no offense to those who enjoy old SQL, if the new vision for the next 50 years effectively implements the clean semantics of pipe syntax, how do you prevent backward compatibility issues with older SQL features? Could you maintain a distinction while allowing some forms of backward compatibility, ensuring there's a best practice for writing pipe queries? For instance, many SQL implementations use zero-based indexing for JSON arrays, while SQL arrays are typically one-based. Is it possible to steer towards a more ideal outcome in light of your vision for pipe syntax?

**Jeff:**  
There are numerous aspects to consider here. We’ve experimented with a few unique operators, some of which might only work in the pipe syntax, primarily due to the complexities involved in standard SQL queries without significant compromise. 

We’re approaching a point where certain operations will necessitate using pipe syntax for newer features. We ideally want this to be the future, to deem the old syntax deprecated in some manner. One option could include issuing warnings or generating errors during parsing if someone attempts to execute old syntax.

In fact, there’s a specific tool within Google that intended to start using SQL and requested the capability to restrict it so only pipe syntax is permitted. We hadn’t previously considered that, but it’s certainly something we could implement. 

Additionally, we’re developing a translation tool designed to convert existing SQL queries into pipe syntax—not just as a means of making them consumable by query engines, but also to produce idiomatic output similar to what a human might produce. This tool will retain comments, aliases, and overall clarity. 

If users wish to migrate their code to the new syntax, we aim to create tools that facilitate that translation process. This involves carrying out algorithmic refactoring steps where, for instance, we take a subquery, pull it out, and position it before a pipe. Essentially, we’ll take the standard query and deconstruct it into pipe operators, then simplify it based on an established set of rules. 

**Audience Member:**  
Thanks! Quick inquiry: Does BigQuery use Zeta SQL, or does it operate with its own parallel implementation?

**Jeff:**  
It’s the same implementation. We utilize Google SQL as a component underlying all our systems, and Zeta SQL is essentially that same code. 

**Audience Member:**  
Thank you! Any final questions? 

**Audience Member:**  
My last question is about the lineage or progression of developing this pipe syntax. Did you simply sit down one day and decide to implement it, or was there an earlier prototype that didn't quite pan out? Were there any preceding iterations before arriving at pipe SQL? 

**Jeff:**  
That’s an interesting question because the original idea emerged about five years ago. I have documentation from that time. It began as a brainstorming exercise, where we discussed some other languages like KQL and Splunk that implement this sort of pipe behavior, which users in certain domains find appealing. 

It became a thought experiment to envision how SQL could adopt something similar. At that time, I thought, "This seems cool, even radical." But we were hesitant—did we really want to pursue something so transformative? For several years, we let the idea sit. It wasn’t until a year or two ago that we revisited it.

Part of that was prompted by discussions around the monitoring use case I previously mentioned. We recognized that people engaged with tools like Kusto or Splunk would appreciate similar functionality in SQL. 

There’s a lot to explore in that area. Beyond the initial time series operators, you’ll often be aggregating data to create dashboards. Being able to query that data, utilize time series elements, and then blend it with other data using standard SQL would be intriguing. 

This motivated us to take action. Once we began implementing and adding operators, the more we progressed, the more compelling it seemed. It ultimately exceeded our expectations, revealing benefits we had not anticipated. 

We also discovered adjustments needed to be made concerning which operators were critical for inclusion in queries, and that understanding developed further as we applied the syntax and observed others engage with it. 
[Music]
**Jeff:**  
So that’s sort of the conclusion here. I think the best way to really understand this is to read our paper; it includes a lot more details. However, the most effective method to grasp it is actually to try it out. As of February, it’s been made open for everyone to use in BigQuery. It has also been implemented in Databricks and Spark. The initial release has just come out recently, providing options to experiment with real data and workloads. Additionally, we have some of our code available as open-source for people to explore. The key question for the community now is: how do we move forward? Should we aim to support SQL pipe syntax in more systems, or eventually establish it as a standard? I certainly hope so.

---

**Audience Member:**  
I will clap on behalf of everyone, Jeff. That was fantastic. We have time for questions, so if anyone has queries for Jeff, please unmute yourself and go ahead.

---

**Jish:**  
Hey Jeff, this is Jish. It's great to see you after a long time! This is fantastic; the pipe is awesome. One thing I often see with U-SQL in practice is that some SQL queries can balloon to be 500,000 lines long. Beyond the syntactical ease you’ve described, cognitive overload is another challenge. For instance, there might be 50 CTEs defined before you even reach the main query. It can be difficult to determine which CTE a subquery refers to. Do you see similar problems that are connected to the pipe syntax? Are you considering ways to solve that cognitive overload?

---

**Jeff:**  
Yeah, there are many interrelated issues there. Obviously, once you get to thousands of lines of logic, it becomes overwhelming. People can somewhat mitigate this with CTEs, which helps a little. Some subqueries can indeed be removed by using CTEs, but I still consider a CTE a subquery. You still have to follow the names and track the links, which can lead to disorganized logic. Being able to write the logic linearly is beneficial. However, it can still be useful to break things into multiple statements. You can keep using CTEs and assign them names. The example I showed with TVFs, where we pull out specific blocks of logic, can be particularly effective. That’s definitely something we can explore further.

---

**Jeff:**  
An additional direction we’re pursuing is more modularization of SQL, enabling reusable building blocks and promoting code sharing and reuse. I refer to this as making SQL more like a traditional programming language, where libraries can be shared. This ties into fixing the syntax and managing the complexity of some of the logic users encounter.

---

**Audience Member:**  
One follow-up question: do you believe SQL becomes easier with enough training data? If that were in pipe SQL, as opposed to the cumbersome SQL syntax we currently have?

---

**Jeff:**  
Absolutely! Generating SQL from any representation in this format is notably easier. When working in code, you generally have a data structure that reflects your intentions. Ultimately, this manifests as a sequence of operators, which translates directly into syntax. This is much simpler than wrapping everything into subqueries or CTEs and trying to determine what can combine into one query versus what must remain a subquery. A lot of that complexity dissipates, allowing for more straightforward translation into operators. The same principles apply to both humans generating queries and AI doing so.

---

**Jeff:**  
Moreover, one particular advantage when AI is generating queries is that human validation remains crucial. If you've observed generated code from other systems, it typically turns out messy. The ability to produce concise, readable output in this format is invaluable, especially if it's something that will undergo human review.

---

**Jeff:**  
Great! Thank you. Are there other questions from the audience?

---

**Audience Member:**  
Yes, you mentioned standardization. How do you see that unfolding? Is it through ANSI or an industry standard?

---

**Jeff:**  
Ultimately, achieving this within the SQL standard would be fantastic, as it would facilitate the integration into numerous engines. If we start soon, it might be the right time to have that discussion. It would be advantageous to establish consistency for broader adoption across more engines. However, we must consider that the standards committee typically takes at least five years, right?

---

**Audience Member:**  
Yeah, that seems accurate.

---

**Jeff:**  
We could have attempted to start that way, but I doubt it would have succeeded right from the beginning. Simply documenting the concept without having tested or demonstrated it might have come off as unrealistic. Moreover, through actual implementation, we gained insights. What we have now has been greatly shaped by building it, using it, and witnessing how it operates. It’s somewhat speculative, but trying it out truly illuminated how compelling it is once in practice.

---

**Jeff:**  
Figuring out the next steps to garner interest from the industry and standard boards is something we’ll tackle in the future. Getting it integrated into SQL parsers in languages like Rust, Python, etc., is crucial. There’s likely an equivalent for C++, but basically, any new system built on Rust is utilizing SQL components. If we can achieve this, it would significantly benefit the newer generation.

---

**Audience Member:**  
I’ve also spotted similar features in other systems like SQLite or Postgres. They’ve shown interest, but are they willing to embrace unconventional innovative features? If it gets standardized or adopted widely, it would likely receive more acceptance across various platforms.

---

**Jeff:**  
Exactly! We did implement it directly into our tools in Red, which I believe is the best way to get user engagement. The idea of having a proxy that receives a query in this format, then translates it into something executable on multiple engines, still makes sense for broader utility across existing systems.

---

**Jeff:**  
However, is there a desire to aim for a standard? This operates as a layer above SQL. We lack standards for assembly language—does SQL become like an assembly language while this sits above it? Or do you believe that’s not the right mindset?

--- 

**Jeff:**  
If you think of it as rewriting into SQL, it’s another language in front. I see it much more as a feature of SQL, one that integrates seamlessly into the language. It should share syntax with what can already be done in standard SQL, allowing you to operate identically in both syntaxes.

---

**Jeff:**  
The interoperability of using a view in one syntax and allowing it in the other, or incrementally adding elements into queries, greatly supports that gradual adoption and compatibility. It works best if it’s viewed as a language feature rather than a separate language. 

---

**Nick (from the chat):**  
Can you elaborate on what comes next for pipe SQL? Would it be possible to show the slide again? What do you see as priorities? Areas such as domain-specific time series streaming, code fragment reuse, semantic models, pre-join measures, or fan-out work?

---

**Jeff:**  
The answer is all of the above! Some have more complexity than others, and various tracks may progress at different paces. Time series and streaming are closely related to the monitoring use case, where we are still early in identifying needed operators. That’s definitely a focus area for us.

---

**Jeff:**  
As for graph queries, to me, that’s more hypothetical—having worked on GQL and SQL PGQ, the embedded graph language within SQL. The notion of allowing graph matching operators—essentially a shorthand for recursive queries in SQL—would be intriguing, though it remains exploratory.

---

**Jeff:**  
Areas like semantic data modeling and OLAP query domains are active fronts as well. We’re working to develop a SQL-integrated solution that can handle queries over semantic data models. It’s more akin to a research project right now, but if we succeed, it could be quite exciting.

---

**Jeff:**  
We’re also looking into structured data management. There was a talk a couple of weeks ago about Malloy, and one of its strengths lies in how it handles structured data while returning structured output. We’ve worked with structured data and protocol buffers in Google SQL for a long time, but traditionally, SQL operators flatten structured inputs into relational tables.

---

**Jeff:**  
SQL Plus+ mainly deals with JSON, adopting a similar methodology. However, I'd like to progress towards executing queries that build and preserve structure as we query; that's something we might focus on soon.

---

**Jeff:**  
We’re also putting a lot of work into making SQL more modular, ensuring features such as code reviews and testability are stronger. We’ll probably publish some of our findings on that front at some point. In about six months to a year, we might have a complete picture worth documenting in a comprehensive paper.

---

**Jeff:**  
Ultimately, I pose this question to the audience: what are the next ten features you’d like to see integrated into SQL? There’s a lot to be done! 

---

**Audience Member:**  
Are there more questions from the audience?

---

**Audience Member:**  
Yes, I have a follow-up regarding the standardization topic. I’d like to share my vision. With no offense to those who enjoy old SQL, if the new vision for the next 50 years effectively implements the clean semantics of pipe syntax, how do you prevent backward compatibility issues with older SQL features? Could you maintain a distinction while allowing some forms of backward compatibility, ensuring there's a best practice for writing pipe queries? For instance, many SQL implementations use zero-based indexing for JSON arrays, while SQL arrays are typically one-based. Is it possible to steer towards a more ideal outcome in light of your vision for pipe syntax?

---

**Jeff:**  
There are numerous aspects to consider here. We’ve experimented with a few unique operators, some of which might only work in the pipe syntax, primarily due to the complexities involved in standard SQL queries without significant compromise.

---

**Jeff:**  
We’re approaching a point where certain operations will necessitate using pipe syntax for newer features. We ideally want this to be the future, to deem the old syntax deprecated in some manner. One option could include issuing warnings or generating errors during parsing if someone attempts to execute old syntax.

---

**Jeff:**  
In fact, there’s a specific tool within Google that intended to start using SQL and requested the capability to restrict it so only pipe syntax is permitted. We hadn’t previously considered that, but it’s certainly something we could implement.

---

**Jeff:**  
Additionally, we’re developing a translation tool designed to convert existing SQL queries into pipe syntax—not just as a means of making them consumable by query engines, but also to produce idiomatic output similar to what a human might produce. This tool will retain comments, aliases, and overall clarity.

---

**Jeff:**  
If users wish to migrate their code to the new syntax, we aim to create tools that facilitate that translation process. This involves carrying out algorithmic refactoring steps where, for instance, we take a subquery, pull it out, and position it before a pipe. Essentially, we’ll take the standard query and deconstruct it into pipe operators, then simplify it based on an established set of rules. 

---

**Audience Member:**  
Thanks! Quick inquiry: Does BigQuery use Zeta SQL, or does it operate with its own parallel implementation?

---

**Jeff:**  
It’s the same implementation. We utilize Google SQL as a component underlying all our systems, and Zeta SQL is essentially that same code.

---

**Audience Member:**  
Thank you! Any final questions?

---

**Audience Member:**  
My last question is about the lineage or progression of developing this pipe syntax. Did you simply sit down one day and decide to implement it, or was there an earlier prototype that didn't quite pan out? Were there any preceding iterations before arriving at pipe SQL? 

---

**Jeff:**  
That’s an interesting question because the original idea emerged about five years ago. I have documentation from that time. It began as a brainstorming exercise, where we discussed some other languages like KQL and Splunk that implement this sort of pipe behavior, which users in certain domains find appealing.

---

**Jeff:**  
It became a thought experiment to envision how SQL could adopt something similar. At that time, I thought, "This seems cool, even radical." But we were hesitant—did we really want to pursue something so transformative? For several years, we let the idea sit. It wasn’t until a year or two ago that we revisited it.

---

**Jeff:**  
Part of that was prompted by discussions around the monitoring use case I previously mentioned. We recognized that people engaged with tools like Kusto or Splunk would appreciate similar functionality in SQL.

---

**Jeff:**  
There’s a lot to explore in that area. Beyond the initial time series operators, you’ll often be aggregating data to create dashboards. Being able to query that data, utilize time series elements, and then blend it with other data using standard SQL would be intriguing.

---

**Jeff:**  
This motivated us to take action. Once we began implementing and adding operators, the more we progressed, the more compelling it seemed. It ultimately exceeded our expectations, revealing benefits we had not anticipated.

---

**Jeff:**  
We also discovered adjustments needed to be made concerning which operators were critical for inclusion in queries, and that understanding developed further as we applied the syntax and observed others engage with it.
