---
layout: post
title: "Google's Pipe Syntax in SQL: SQL for the 21st Century (Jeff Shute)"
date: 2025-03-12 00:00:01
categories: podcast
tags: [podcast_script]
---

[Google's Pipe Syntax in SQL: SQL for the 21st Century (Jeff Shute)](https://www.youtube.com/watch?v=ZIkjAQ7AwSM)

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
