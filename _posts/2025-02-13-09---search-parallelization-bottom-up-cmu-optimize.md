---
layout: post
title: "#09 - Search Parallelization: Bottom-up (CMU Optimize!)"
date: 2025-02-13 00:00:01
categories: short
tags: [podcast_script]
---

[Music] 

Optim a journey session this course is filmed on occasion at Car Melon University in front of a live studio audience. Now we're on going back and forth team Bottoms Up and top down and looking at the sort of core aspects of the search implementation, the implementation. So today will be a discussion on how to paralyze the search for a Bottoms Up and then on Monday's class, excuse me, next week that'll be looking at how to apply it for the top down approach which we already started seeing inklings of that in the last class when we talked about how the pruning method, whether it was accumulated or predicted, you know, the accumulated one required you to sort of go down and do something and that sort of blocked other threads from exploring other parts of the tree. 

The Bottom Up isn't going to have that problem. We’ll address that issue again next Monday for top down. All right, so as I said on Patza, I have no office hours today. Send me an email if you want to meet, and then I'll follow the people who already have emailed me. Probably be like for tomorrow. I may be on campus tomorrow depending on what the flu test says. Project one, again, is due Friday, February 28th for project two topics. For next class, we'll start going over some potential directions you may want to pursue. Again, you don't have to decide right away, not until I think after spring break, what you want your project two to be based on. 

But at least you can start talking amongst yourselves to figure out what groups you want to form, and then we'll post on the spreadsheet what groups you want to be in. If you're not in a group, we'll have a sort of side buffer that you can put yourself in as a free agent and then we'll figure out how to assign you to a group. Again, for project two, it's supposed to be open-ended. It's supposed to ideally touch on the things we talked about in this class, but there's other areas about database optimization that you're curious about, that you're doing in your own research for some other class or something else. 

I'm all for combining ideas, right? So don't assume just don't think, “Oh, whatever I talk about next week, those are the only ones you can pick,” right? If you have a good idea, then I'm all ears. Okay, all right. Any questions about project one? Okay, all right. So, all right, last class we, as I said, we started looking at how to do the top-down join enumeration. One of the techniques that we saw was this idea of partitioning the query graph into subgraphs or smaller, connected graphs. 

That was done in such a way to not necessarily paralyze the search, at least be more targeted in how we’re doing the search going down. But it doesn’t take much a stretch of imagination to say, well, if I’m already partitioning the graph, you know, if those partitions or the subgraphs are independent, I could start exploring them in parallel across threads. So even though last class we saw a partitioning technique and that was the idea of sort of zoning down on the parts of the graph you think are going to be providing those benefits, so try to optimize those first before you run out of time. 

We'll see basically the same technique today in the next class of doing the same thing to paralyze things, and as I said, the challenge is going to be that there's going to be dependencies between different parts of the solution space within the joint graph that we're trying to enumerate upon, where we're going to have to do some part first before we can start exploring other parts of the tree. Right? Meaning, like we have to know the answer for some things, for some part of the joint graph before we start saying, okay, let’s look further down the tree and start looking at other stuff. 

Again, we saw this in accumulated cost; there’s a predicted cost bounding. In top-down, this is more of an issue because if you're doing accumulated cost, you need a physical cost, you need a physical plan to at least get that first initial cost to figure out what your upper bound's going to be. So you kind of need to have one thread go down at least to the bottom, generate some physical plan. Even though it’s not ideal, just have something, and then once you have that, that can then unlock other stuff. 

We saw this in other cases too, where we talked about doing transformations from an outer join to an inner join. Well, you can't start doing joint enumeration on the inner join until you apply the outer join transformation, right? So, like, that’s another example where you have to do certain things before you're allowed to make a wider search into the different options you could have for a query plan. 

So, as I showed this before, what we're trying to figure out now is we know the general framework of how to design a query optimizer, whether it's top-down or bottom-up, and now we're trying to say, okay, what can we do to ensure that our query optimizer actually produces good query plans for whatever SQL query shows up? So we're at this point here, we're trying to understand how to make the search algorithm as efficient as possible, and obviously accurate as well. But you'll see in all the algorithms we'll talk about today, there's always these explicit checks to see if I, you know, if I try to partition the graph in a certain way that's going to make me disconnected. Therefore, that's going to introduce either correctness issues or Cartesian products, which is an efficiency issue. 

Like, there’s a bunch of checks we have to do to make sure that we’re producing accurate and correct results. But now we’re kind of also really focused on how can we make this run as fast as possible. So that's what this class is about, and then for next week we’ll start talking about the cost model, which is kind of this big Albatross that’s hanging on the side that we haven’t really addressed. 

Right, all right. So up until now, I also want to say for all the methods we’ve talked about with either the implementation of the framework or the algorithm to do join operations, they've all been assumed that you're running in a single-threaded environment. Right? And so the goal again, what this class and next class is about, is how can we make the query optimizer run the search in parallel. 

The challenge here is that most query optimizers are not going to be parallel, right? Even for most modern systems, they’re not going to be parallel. Right? So the optimizer itself is going to be a single-threaded component, of which the data system will allow multiple threads to run at the same time. So it could be optimizing multiple queries or independent queries at the same time, but they don't take, you know, for one single query, spawn a bunch of worker threads to then do that search at the same time. 

Right? And this is for two reasons, right? One is for historical reasons because, you know, most database systems up until, you know, really Snowflake made it big in 2013, or that sort of architecture came along, like most database systems were these single-node monolithic architectures where everything you needed to do to run your data system was on a single box or was in a single program, if you will. I don’t want to say process because it could be a multiprocess system, but it's assuming you're running everything on a single box. 

That means when a query shows up, it goes through this connection handler thing, and then that goes to the parser, then the binder, and then it goes to the optimizer. All that’s running on the same machine where you're actually running queries. Right? Like this is what MySQL does, what PostgreSQL does, SQL Lite, Oracle, SQL Server, right? This is how people built these systems for, you know, since the ‘70s. And so the challenge is going to be now if I want to have a parallel query optimizer, well now I'm taking threads away, workers away from other parts of the system just to do query planning. 

Right? And so again, if I'm running on a single box, I'm not elastic. I can't magically conjure up more threads; they got to come from somewhere. So I'm taking away threads that I could be using for background tasks or query execution and then using them for query planning. So that’s a hard thing to do in terms of how much better is my query plan actually be if I'm multi-threaded versus just throwing more hardware at the problem. Again, the multicore stuff, that’s really only early 2000s; from the ‘80s to the ‘90s, you know, most machines were like a single CPU with a single thread. 

I mean the Enterprise stuff was a little bit different, but like most of the time you didn't have all the threads or cores we have today. All right, so again, that’s a historical reason for monolithic database system architectures. But even now also in a cloud environment, something like Snowflake, they still going to have a single-threaded optimizer even though, you know, it’s running as a service. 

So again, multiple queries can get optimized at the same time, again within the context of a single query that’s going to be running as a single-threaded context. So the goal for doing paralyzation is that even though the search problem is NP hard, exponential, we want to have the search time for our trying to find optimal plans should improve linearly in regard to the number of cores we’re given it. So if I have, if I go from one core to two cores, then my time should be in theory cut in half. Right? 

Again, as we talked before, it depends on what the stopping mechanism is for the optimizer, right? If it’s a wall clock time, then you have to account for that in your implementation or in your setup. So even though you have more cores, you have a parallel optimizer, if you set it to run for, you know, 20 seconds, it'll still run for 20 seconds. Right? Maybe it exhaust finds, maybe it gets through all the possible choices and it just quits. 

But you'd have to account for that. But again, if you do like the Microsoft way where you say how many transformations you're allowed to do, then now that you would automatically scale that time out as well as you add more cores because things are just running faster. All right, so the challenge is going to be why this is going to be hard to do. Unlike other parts of a database system, right? Again, we think of like parallel execution database system; we know how to do that really, really well. We know how to do parallel scans. We know how to do parallel joins, parallel sorting—all those tricks we've been doing since, I mean really since the ‘80s, right? 

But this is a bit harder to do now. It is somewhat similar to query planning or query parallel query execution, right? You have these pipeline breakers you kind of need to wait to finish some pipeline before you allow another pipeline to start running because it depends on the output of this. So that’s sort of the challenge that we're trying to face here. It’s that sort of dependency. And so for joint ration, this sort of the class of algorithms that we’ve been looking at for dynamic programming are called non-serial poly. 

And so non-serial just means that the computation that we're going to do at one phase or one level—think of like the search tree—well, it’s going to depend on multiple levels of results from the search tree below me. A lot of times in dynamic programming it’s just like I care about what was the last one, was the last level. But in this world, we care about everything since the beginning of the query, right? Because in order for me to know how I want to join things maybe up above, I'm relying on some computation I did at a lower part of the tree, assuming I'm going bottom up to figure out the optimal join ordering for some tables down below. 

Right? Then the poly just means think of like the recursive calls we're making for our search; we're passing into two parameters. Like we’ll see this in some of the examples we receive; you’ve got to know the left side of the tree and the right side of the tree, right? And that complicates how you're allowed to paralyze things. So, it’s a more restrained environment; it’s just like, you know, it’s not like we’re magically going to be able to throw more cores at a problem. It’s not all going to just get magically faster. There is some intelligence we have to put in our decisions of how we're going to split things up. 

So the basic idea how we're going to do this though at a high level is going to be the same thing we do when we want to paralyze query execution. Right? We’re going to partition the search space in such a way that we can divide the work evenly among the workers so that at any time during execution, every worker always has something to do. 

There’s not like a bunch of threads sitting idle pulling for work, right? That’s hard to always achieve. But in general, we should be okay with this. And then the other challenge is going to be, the other technique we use, well once we split things up into partitions, it'd be really nice if we could then have other tasks be able to execute without being dependent on what other workers are actually doing. 

So the idea is that you want to sort of localize, almost like a pipeline, a bunch of work we want to do in our search so that one worker can kind of do a bunch of things and just roll through the computation without waiting for other workers to produce a result. 

This should not be if you, like we talked about in previous classes, all this should not be new. We discussed this in SE21 last year. 

All right, so I’m going to briefly talk about three algorithms today. The first would be sort of the straw man that came in the paper you guys read about this dynamic programming for subsets, which is basically the same thing as System R, with slight differences in the method in which they're going about and generating the subsets. Then, we'll talk about the massively parallel DP algorithm from the paper you guys read. 

What I like about it is that it covers the background of like here’s what this algorithm is based upon. I also like it because it’s one of the only ones that runs on a GPU. There's another paper from other people that runs on a GPU that predates this one, but this one covers everything and also they're doing that at a tiny piece or that technique from the hyper guys as well. 

So a lot of ideas sort of thrown into one which I like. You know, the writing’s okay. We take that offline. Then I'm going to finish up talking about another approach called multi-plan join DP, and this is from one of the guys at IBM, but it was done by IBM research. This was not part of Starburst or DB2; it was sort of a side project. 

All right, so the DP sub-algorithm is going to serve as the basis for what the MDPD algorithms will do. The basic idea, again, as I said, this is just be more or less the same thing as System R except how they’re going to structure the subsets and do that exploration is going to be slightly different. The basic idea is that we are going to split the joint graph based on vertices into subset sizes based on the number of vertices, and that’s going to slowly get bigger and bigger, meaning we'll start looking at larger and larger subsets. 

For each of the different subsets we have, we're allowed to split them up as long as there is a way to connect sort of the left side and the right side, the two subsets that we’re looking at. Then we just do what’s standard: "Okay, what's the best way to evaluate the joins on these two subsets? Is it better than the best plan we've seen so far? If yes, then it becomes the new best plan; otherwise, we throw it away." 

Again, they're just like before need to do a bunch of steps and make sure that if we start splitting up the query graph into subgraphs to avoid Cartesian products we’ve got to make sure that we don’t have any disconnected nodes. So, again, I don’t normally like to show code, but I just want to visualize what’s going on here, and the algorithm is pretty basic. You start at the beginning here and say, "Okay, I'm going to start looking at subsets of size two," right? 

So you just generate all possible numerations for all possible subsets. Again, in this one here, when they generate the subsets, they’re not actually checking to see whether they’re connected or not; they’re going to do that later. Remember we talked about how, in the case of the hyper guys—the hypergraph one—where they would make sure they only generated subsets that were valid rather than checking after they'd generated them to see whether they were valid or not. This one just generates all of them. 

All right, so then we get down here and now we're going to go through all the different subsets, again starting with size two. For this one, again, you just start picking each one and you take whatever is on the left side here. In this part of the loop here, it can now be done in parallel. So within one sort of subset—in this case here, it's only size two—right? For each of these, I could have a different thread now evaluate the best join order for that part of the subset in parallel, and they don't need to coordinate with each other because there's no information I need to know about what’s the best join plan for the subset that I’m looking at. 

There’s nothing I need to know about your subset, right? So again, now they’re just going to do that System R approach where you just go through and expand out. So this one here, do I look at a hash join or a merge join? The same thing, I keep fanning out, right? And relying on what came down below me to tell me the path I’m going to generate. I’m not showing this because it’s PowerPoint, but think of all possible combinations for the subset size two and all the possible combinations of additional subsets. 

This keeps going over and over again. But again, here the point here is that they’re going to check to see whether if they split a subgraph off of the sort of the main graph that they’re looking at, is it going to be disconnected? If yes, then they discard it; if no, they're allowed to proceed and do it. Right? And this is just the System R stuff that we said before, but it’s—
1107.08 - 6.36: Slightly uh composed differently. 

1108.88 - 6.56: Yes, why is there a third the is size? 

1113.44 - 5.56: Is this? 

1115.44 - 5.88: One I L back around I didn't show that. 

1119.0 - 4.4: Yeah, instead of like instead I could 

1121.32 - 3.52: expand it this way I went yeah another 

1123.4 - 4.72: loop. Now I'm looking at sub set at side 

1124.84 - 4.319: to and now I don't care about like it's 

1128.12 - 3.16: it's again it looks a lot similar to the 

1129.159 - 3.601: top down. I don't care about how I'm 

1131.28 - 4.04: joining A and B because down below me is 

1132.76 - 3.279: told me that how to do that right this 

1135.32 - 4.719: is when, yeah. 

1141.799 - 7.281: Okay, so the MP MPDP algorithm is it 

1147.08 - 4.12: going to expand upon this and it's 

1149.08 - 4.76: basically the same thing. Well, at least 

1151.2 - 4.68: it's sort of confusing. There’s 

1153.84 - 3.839: MPDP algorithm, the sort of technique 

1155.88 - 3.88: they talk about and then of 

1157.679 - 4.601: which of that there is the MPDP 

1159.76 - 3.919: algorithm that's based on the DP sub one 

1162.28 - 3.72: but then collectively they're also 

1163.679 - 5.161: saying that if you tack on this 

1166.0 - 6.28: adaptivity piece where they use this uh 

1168.84 - 6.36: um this Union DP one or the IDP stuff 

1172.28 - 5.24: then that's also sort of part of what 

1175.2 - 4.359: they're calling MPDP. But for simplicity 

1177.52 - 3.68: we're say the MPDP is just going to be 

1179.559 - 2.841: the extension of the parallel version of 

1181.2 - 3.28: the DP. 

1182.4 - 6.8: Sub, right? So again, they're going to have 

1184.48 - 5.92: that same uh check that uh hyper or umra 

1189.2 - 2.68: is doing about the complexity of the 

1190.4 - 3.72: query, decide which algor they want to 

1191.88 - 4.64: use for. So for simple ones, they'll use 

1194.12 - 3.4: TP sub to do the search exhaustively, but 

1196.52 - 3.279: for larger queries, they use a 

1197.52 - 3.72: combination of the heris, their own heris 

1199.799 - 3.281: technique and and 

1201.24 - 3.96: DP. But the difference of that they're 

1203.08 - 4.079: going to do here is now uh instead of 

1205.2 - 4.0: just picking vertices and deciding how 

1207.159 - 4.161: to split based on that they're going to 

1209.2 - 4.719: do a combination of vertex and Edge 

1211.32 - 5.76: based numeration. And the goal here is 

1213.919 - 5.201: that it's like, again, pre-computing 

1217.08 - 5.24: what are the valid Cuts you can make in 

1219.12 - 5.039: the query graph uh to avoid having 

1222.32 - 4.4: disconnection and then having additional 

1224.159 - 4.161: checks uh later on within that for Loop 

1226.72 - 3.36: to see whether something is connected or 

1228.32 - 3.52: not. And that's going to matter later on 

1230.08 - 4.2: when they put this on the GPU because in 

1231.84 - 3.8: GPUs you don't want branching because 

1234.28 - 3.639: you don't want your different cores or 

1235.64 - 3.399: threads down within a, it's a 

1237.919 - 3.441: grouping or 

1239.039 - 4.841: warp, Nidia calls it. You don't want them 

1241.36 - 4.24: to start going down different paths. 

1243.88 - 3.44: We'll see that in a 

1245.6 - 3.8: second. 

All so what's the difference 

1247.32 - 5.04: between vertex numeration and Edge-based 

1249.4 - 4.44: numeration? So again, vertex is you just 

1252.36 - 4.52: exploring the search Base by deciding 

1253.84 - 6.48: how to pull off subgraphs of the joint 

1256.88 - 6.48: graph you're examining based on vertices, 

1260.32 - 4.68: right? And then you then build 

1263.36 - 2.88: back up the the relation as you add back 

1265.0 - 2.919: in the vertices. So you sort of split 

1266.24 - 5.039: things up and then you add things back 

1267.919 - 4.721: going up and then you have to again uh 

1271.279 - 4.321: you have to again take, make sure that 

1272.64 - 4.519: you're not generating invalid uh, you 

1275.6 - 3.319: know subgraphs because if you're trying 

1277.159 - 5.161: to avoid cartesian 

1278.919 - 6.601: products. In the case of uh Edge-based 

1282.32 - 5.56: iteration, you're going to look at the joint 

1285.52 - 3.72: pairs, the edges 

1287.88 - 2.679: themselves. And that's how you're going 

1289.24 - 5.2: to decide what you actually want to cut 

1290.559 - 6.36: or not, right? So this is going to be 

1294.44 - 4.4: better in terms of reducing amount of 

1296.919 - 4.24: waste to work because you're not having 

1298.84 - 4.48: to uh, you know validate a bunch of joint 

1301.159 - 4.52: pairs that, that you know you're 

1303.32 - 3.44: throw away anyway. But now it's more 

1305.679 - 4.0: difficult to paralyze because now again 

1306.76 - 5.36: you're sort of blocking the the 

1309.679 - 3.6: generation of these of these different 

1312.12 - 3.4: partitions you could be exploring the 

1313.279 - 4.921: subass you be exploring until you finish 

1315.52 - 5.96: the slicing up of the of the uh of the 

1318.2 - 3.28: joint or sorry of the 

1321.679 - 5.681: subgraph. 

All right, so I don't have 

1324.48 - 4.679: example of MPDP but again it’s basically 

1327.36 - 5.36: the DP something, which is how they're 

1329.159 - 5.841: slicing up the edges is slightly 

1332.72 - 4.68: different. But then again they have this 

1335.0 - 5.08: now this heris that that kicks in when 

1337.4 - 3.759: they recognize that the uh, the query 

1340.08 - 3.4: becomes too complex. 

1341.159 - 3.721: They have something that 

1343.48 - 2.72: looks very similar to the Goo thing we 

1344.88 - 3.279: talked about either last class or two 

1346.2 - 5.479: classes ago where they're going to look 

1348.159 - 7.921: at the uh, you know, look at the join 

1351.679 - 7.12: graph and calculate some cost of of each 

1356.08 - 4.36: join, you know, using heuristics, and then 

1358.799 - 3.401: just decide which one they want to 

1360.44 - 2.92: combine together. 

1362.2 - 3.479: Assume that's the order you're going to 

1363.36 - 3.24: apply the joints, right? 

So it's basically 

1365.679 - 3.321: the same thing we saw before with the 

1366.6 - 3.52: goo, right? You have all these edges, uh, 

1369.0 - 2.36: they don't talk about how they're 

1370.12 - 2.439: calculating selectivity intermediate 

1371.36 - 3.12: results. They just say there's just a 

1372.559 - 4.281: size of the result that's the 

1374.48 - 3.76: cardinality you would get from the size 

1376.84 - 2.28: of relation and the selectivity of a 

1378.24 - 2.319: predicate. 

1379.12 - 3.4: So now you have a way to say, okay here's 

1380.559 - 3.801: how much data is going to come out of a particular join, 

1384.36 - 4.4: and then they're going to end up picking 

1385.84 - 5.8: the largest one and have that be 

1388.76 - 4.76: merged together. And then that's that’s 

1391.64 - 3.84: saying that I want to apply this join 

1393.52 - 5.24: first, as early as 

1395.48 - 4.88: possible, right? And again they do 

1398.76 - 4.039: this. 

1400.36 - 4.52: Uh, they keep, they sort of split that up 

1402.799 - 4.401: into this, the small size you have uh 

1404.88 - 4.12: within some size K. And then they keep 

1407.2 - 3.52: adding up the 

1409.0 - 3.0: the larger pieces until you 

1410.72 - 3.88: have the full complete joint graph all 

1412.0 - 5.64: over again. 

And basically in the case of 

1414.6 - 4.6: Goo we saw them merging it into you know 

1417.64 - 3.159: combining the two relations together. 

1419.2 - 3.56: Say they're being joined, they call it a 

1420.799 - 3.12: composite node, a composite vertex. 

1422.76 - 2.84: But it's basically the same thing. It's 

1423.919 - 3.0: telling me I want to join BD 

1425.6 - 5.079: first, and this is going to give me the 

1426.919 - 6.281: ordering that I want to apply this. 

1430.679 - 6.12: So this will work really well for 

1433.2 - 7.24: snowflake star, but I was just wondering 

1436.799 - 3.641: will it work well for 

1440.559 - 5.72: like cliques or trees which 

1443.64 - 5.399: which 

1446.279 - 4.601: um, yeah, so I 

1449.039 - 5.721: mean his statement is this would be 

1450.88 - 7.32: terrible for CS, so my understanding 

1454.76 - 6.36: is that they do this. 

1458.2 - 5.4: Um, sorry, look at the K, so the K matters 

1461.12 - 5.96: here. So you're going to keep building this 

1463.6 - 6.079: up until you have the subass of size K. 

1467.08 - 6.24: Right? And then take those subass of size 

1469.679 - 6.681: K, and then you run the MPDP AL on 

1473.32 - 5.04: that in the paper. Yes, and this is what 

1476.36 - 3.28: I’m doing. I don’t know, it's a small 

1478.36 - 4.0: graph, but you could do like four or 

1479.64 - 4.2: something like that, right? Uh, so I would 

1482.36 - 4.48: do this heuristics. I would end up 

1483.84 - 5.719: these composite vertices now with four 

1486.84 - 5.839: relation tables in them. Then run MPDP on that. 

1489.559 - 4.6: So the reason why they’re ordering it based on 

1492.679 - 4.081: the size, so the larger ones go first. 

1496.76 - 4.56: Because they want to make, 

1498.559 - 5.641: that they optimize those clusters 

1501.32 - 5.68: first, and those would naturally be like 

1504.2 - 4.8: those will naturally be very uh obvious 

1507.0 - 4.24: and important parts to optimize. If you 

1509.0 - 5.039: have a snowflake or a star schema, but if 

1511.24 - 5.12: you don’t have that, please, then it 

1514.039 - 5.0: won’t. The statement is that it 

1516.36 - 4.84: doesn’t make sense. If you have CS, 

1519.039 - 3.481: that you’re saying because a snowflake 

1521.2 - 4.079: star scheme it would be obviously 

1522.52 - 5.039: optimized first, but obvious optim first. 

1525.279 - 4.52: But in CS you wouldn’t have that, right? 

1527.559 - 3.801: But still based on their algorithm 

1529.799 - 4.6: somebody's going to have the 

1531.36 - 4.48: biggest cost; just go optimize that first. 

1534.399 - 3.321: Yeah, but then they didn’t show it in the 

1535.84 - 4.52: paper. There’s a lot, there’s a lot of 

1537.72 - 2.64: things that didn’t show. 

1542.6 - 5.199: Yes. 

1545.32 - 6.04: Yep, uh, there’s a tech report, it wasn’t 

1547.799 - 3.561: in there either. Okay, and I 

1552.88 - 10.919: I’ve small do for large they give the 

1560.44 - 3.359: results, but 

1565.039 - 7.76: they, yes again, I mean so how I say this. 

1570.679 - 4.12: In addition to learning a bunch of 

1572.799 - 3.041: like here’s what how to build an Aizer, 

1574.799 - 3.6: which you all should be getting from 

1575.84 - 4.319: reading the papers is just one how to 

1578.399 - 3.801: read a scientific paper, but also healthy 

1580.159 - 3.361: to do the skepticism about like, yeah, 

1582.2 - 3.04: they’re saying this, it doesn’t really 

1583.52 - 2.84: make sense, right? And it’s hard because 

1585.24 - 1.919: you gotta go back to the paper multiple 

1586.36 - 2.439: times like what the hell they actually 

1587.159 - 4.801: talking about, right? 

1588.799 - 3.161: Um, 

1592.399 - 4.121: and so you, the German papers are great, but 

1594.799 - 3.081: like, they’re also very 

1596.52 - 2.32: understand this one is missing a bunch 

1597.88 - 3.64: of things and they have a bunch of stuff 

1598.84 - 4.68: that doesn’t really matter. 

1601.52 - 4.159: And then they cite to the longer 

1603.52 - 3.279: tech report that’s on the archive but 

1605.679 - 6.081: that do have the things we were missing 

1606.799 - 7.201: as well. 

So is you, is it, there’s not 

1611.76 - 3.519: a lot of papers on query parallelization. 

1614.0 - 4.679: This is like one of the newest ones. 

1615.279 - 7.041: That’s a great paper. It’s a good paper. 

1618.679 - 7.6: Easy to, yeah, sure. 

1622.32 - 6.56: Yes, okay. So again, the main thing 

1626.279 - 3.64: I want to point out is like, so there are 

1628.88 - 2.96: it’s hard to show this with a small 

1629.919 - 4.561: graph, but like think of like a really 

1631.84 - 4.12: big graph, a joint graph, and you’re 

1634.48 - 3.6: trying to figure out again which of 

1635.96 - 3.28: these, which of these, which ones going to 

1638.08 - 3.199: have the most, the largest intermediate 

1639.24 - 3.12: results. You start putting them, I don’t 

1641.279 - 3.721: use the term cluster, but you’re putting 

1642.36 - 4.679: them in composite group and you 

1645.0 - 3.919: keep going until you have a group of 

1647.039 - 3.561: size K. 

1648.919 - 4.801: And then once you have that, then you go 

1650.6 - 4.4: run the MPDP algor on that that cluster 

1653.72 - 3.16: and figure out how to do that optimal 

1655.0 - 4.2: join for that one, and then you find the 

1656.88 - 3.6: next cluster and do the same thing. 

1659.2 - 2.64: So again, it’s like you can’t do the 

1660.48 - 2.6: exhaustive search across the entire 

1661.84 - 3.64: joint graph; would be too difficult and 

1663.08 - 5.16: run forever. So instead, you’re kind of 

1665.48 - 5.84: like zoning in on portions of it, 

1668.24 - 4.36: optimizing that piece and then, and then 

1671.32 - 3.199: you know, hopefully that at least puts 

1672.6 - 4.36: you in a good 

1674.519 - 5.52: direction. The view is actually choosing 

1676.96 - 5.24: the small one. 

1680.039 - 4.281: Yeah, so same is he’s correct: the goo, 

1682.2 - 5.599: which I can bring that slide back up. Uh, 

1684.32 - 6.719: the goo is choosing the 

1687.799 - 4.801: smallest one that’s linearizing. 

1691.039 - 4.681: Yeah, so that was a way to simplify the 

1692.6 - 4.64: problem to generate with the adjoint 

1695.72 - 5.12: ordering. So let me bring 

1702.559 - 7.081: up. Yeah, I should include 

1707.12 - 4.439: SL. But then the objective is slightly 

1709.64 - 5.0: different. 

Yeah, so again, go back, put this back in more 

1711.559 - 6.041: context. So again, this is for large 

1714.64 - 6.32: queries in the German approach. 

1717.6 - 6.559: And so the idea here is that 

1720.96 - 5.24: the high-level goal is the same. You 

1724.159 - 4.281: want to simplify the search problem 

1726.2 - 3.319: because you can’t do an exhaustive 

1728.44 - 3.28: search. So in the case of goo, what they 

1731.72 - 8.28: want to do is linearize the sort 

1737.679 - 5.641: of C space so that you at least have 

1740.0 - 5.36: start with left deep tree and then do 

1743.32 - 3.4: the more expensive search, then look at 

1745.36 - 3.52: bushy plans and other things. 

1748.88 - 7.799: Right. So, like they say, 

1753.2 - 5.0: um, how big of a sub problem you want to look at? 

1756.679 - 4.36: They’re doing K100 here. All right, so 

1761.039 - 4.921: again, you have this cost, the number 

1763.44 - 3.68: of tuples that come out of a relation. 

1765.96 - 2.88: You have the selectivity, so the same 

1767.12 - 4.039: thing you have; like, you do the simple 

1768.84 - 3.6: math, you the cardinality. So the idea 

1771.159 - 3.721: here now is they want to choose the 

1772.44 - 5.76: smallest one and you want to merge them 

1774.88 - 5.639: into an update graph. And so 

1778.2 - 3.959: by choosing the smallest, you’re 

1780.519 - 4.4: basically saying 

1782.159 - 5.281: that this thing doesn’t really matter in 

1784.919 - 3.921: terms of the entire query plan 

1787.44 - 3.959: because they’re not joining that 

1788.84 - 4.28: much data. This is not my big problem, so 

1791.399 - 4.4: you just sort of combine them 

1793.12 - 5.279: together so that you don’t have to have 

1795.799 - 6.36: in your exhaustive search, you know, 

1798.399 - 4.841: considering B and C explicitly in the 

1802.159 - 2.52: search process. You’re just kind of 

1803.24 - 3.52: have, again, using this to the placeholder 

1804.679 - 3.401: and say, yeah, you know there’s, there’s 

1806.76 - 2.84: two—there’s some, there’s a join 

1808.08 - 4.16: happening here, but it doesn’t really 

1809.6 - 4.6: matter in the grand scheme of things. So 

1812.24 - 4.88: that’s what goo is doing here. It’s a way 

1814.2 - 5.16: to hide things that you don’t think 

1817.12 - 4.439: actually are going to 

1819.36 - 4.159: matter, right? To simplify the search 

1821.559 - 4.921: process. You keep doing this recursively. 

1823.519 - 5.76: So then now going back to what the 

1826.48 - 4.12: Unid DP is doing, 

1829.279 - 2.721: this is doing the opposite. This is 

1830.6 - 3.28: trying to find the things you think are 

1832.0 - 4.679: going to matter by taking one with the 

1833.88 - 4.84: highest cost and again combining them 

1836.679 - 4.441: into a bunch of nodes. And so I 

1838.72 - 5.839: could use heuristics to decide how I want 

1841.12 - 5.12: to join A with B, D, and C with B, D, but I 

1844.559 - 5.36: really want to know what is the optimal 

1846.24 - 6.84: best choice for me to join B, D because 

1849.919 - 3.161: the dataset size is so 

1853.2 - 4.319: huge. Is that clear? 

1858.72 - 3.72: Again, it’s a different 

1861.2 - 4.319: approach 

1862.44 - 4.8: to trying to solve again this 

1865.519 - 4.481: really hard problem of like how do you pick the 

1867.24 - 5.52: joint order? The idea of the from the German paper 

1870.0 - 5.6: was like, okay, simplify it through goo, 

1872.76 - 4.32: and then use that as the starting point, 

1875.6 - 3.76: at least my initialization, so I’m not 

1879.36 - 5.72: spending time just trying to find a quick 

1882.279 - 5.36: upper bound. In the case of Union 

1885.08 - 3.839: DP, it’s a way to sort of highlight 

1887.639 - 2.121: the part of the query plan you know 

1888.919 - 4.921: you want to spend most of your time 

1889.76 - 4.08: computing on, trying to find the best join 

1894.399 - 6.041: order. 

Okay, so I am not a GPU expert, and 

1898.639 - 4.361: so what they’re saying seems reasonable. 

1900.44 - 6.88: Um, but the basic idea is that they claim that 

1903.0 - 6.48: because you can rewrite 

1907.32 - 3.599: uh, because you can get rid of those if 

1909.48 - 4.159: clauses where you’re checking to see 

1910.919 - 4.321: whether the graph is connected. If you, if 

1913.639 - 4.88: you start when you start building up the 

1915.24 - 4.88: subgraphs, if you can remove all that 

1918.519 - 2.76: and just have the computation of 

1920.12 - 3.399: deciding here are the numerations I want 

1921.279 - 4.76: to look at by doing it based on edges so 

1923.519 - 5.481: that you don’t have to generate 

1926.039 - 6.24: invalid joint graphs, then now you 

1929.0 - 5.76: basically have this sequential code that 

1932.279 - 4.161: you can run down the GPU and you don’t 

1934.76 - 3.96: worry about what is called branch 

1936.44 - 4.04: divergence, where like the one different 

1938.72 - 3.679: threads are going different threads with 

1940.48 - 4.079: in the same warp, a grouping of threads are 

1942.399 - 5.24: going down different code paths or pass in 

1944.559 - 5.521: the same code, and then that requires the GPU 

1947.639 - 3.681: I think to, to my understanding is to execute them in 

1950.08 - 3.88: serial order. So you kind of lose all the 

1953.96 - 2.839: benefit of having a GPU with, you know, 

1955.279 - 4.441: thousands and thousands of cores because 

1956.799 - 4.201: now you just end up getting executed in 

1959.72 - 3.4: single 

1961.0 - 3.76: file. 

So they're going to do the same trick 

1963.12 - 5.039: we talked about last class, where 

1964.76 - 5.84: you represent the join graph as just an 

1968.159 - 4.081: array of fixed-width bitmaps. 

1970.6 - 4.16: That’s great because again, GPUs don’t 

1972.24 - 4.279: like variable length things. 

1974.76 - 4.24: If you know exactly the offset of stuff, you can 

1976.519 - 5.28: jump to that very quickly. 

Um, and again, they remove all the branches to 

1979.0 - 3.76: uh, remove the conditionals and get rid of the 

1981.799 - 3.6: branch divergence. 

Right? Another thing they don’t talk about but is in 

1986.88 - 5.6: the paper that they cite is you can’t have 

1990.559 - 2.921: the GPU threads as you’re doing this 

1992.48 - 3.72: joint numeration call back to the CPU for any 

1996.2 - 4.319: additional information. 

So what’s, yeah, that’s one of the concerns I 

2000.519 - 6.801: have. Like you have to make the 

2011.08 - 3.0: yes 

2016.279 - 3.0: performance. 

2022.76 - 8.36: Yes, you have to dynamically evaluate something 

2026.88 - 6.919: that’s making such very, yes. 

So to repeat what he’s saying: 

2031.12 - 6.279: Um, we talk about how you know that these 

2033.799 - 4.921: costs model things we keep pointing to on the side that it’s going 

2037.399 - 3.28: to magically tell us the selectivity of 

2040.679 - 4.48: an operator or predicate, or the 

2044.84 - 4.44: cardinality of an operator, right? 

So when we look at the algorithm for, there’s 

2048.04 - 2.72: always like, oh, compute this cost 

2050.76 - 4.0: function within these sort of these 

2052.599 - 4.201: algorithm in the paper and that’s making 

2054.76 - 4.24: a call to some cost model to figure out 

2056.8 - 4.839: again, some to estimate what what the 

2059.0 - 4.159: cost of your operator is. 

So where does that exist? Well that’s in the catalog, 

2063.159 - 2.52: right? There’s some, some other piece of 

2064.2 - 4.52: code that’s going to generate those 

2065.679 - 4.561: estimates for you. 

So, but now if you’re running your joint 

2068.72 - 3.359: enumeration where it’s trying to look at the cost of 

2070.24 - 3.76: query plans to decide which one’s better, right, 

2072.079 - 3.361: it’s basically looking at like, is this 

2075.44 - 2.639: thing better than this, but it’s the 

2076.48 - 3.119: algorithm structure in way to sort of 

2078.079 - 3.681: rip through the possible orderings 

2079.599 - 4.121: you could have very quickly. 

If all of a sudden you got to say, okay, well 

2083.72 - 4.959: here’s a valid query plan I could consider 

2086.079 - 3.641: computing the cost for it, so because you 

2088.679 - 2.44: want to check to see whether that’s better than the 

2091.119 - 5.76: best cost you’ve seen so far, you can’t make a call 

2093.919 - 4.401: of the catalog in the GPU because now 

2096.879 - 3.401: you’re going back up to the CPU and 

2098.32 - 3.48: you’re blocking your threads in the GPU 

2100.28 - 4.72: and just you’re losing all the benefits of 

2101.8 - 4.4: the parallelism. 

Right? So they don’t, the paper doesn’t talk about 

2105.0 - 2.92: it but the other one does, where you basically 

2106.2 - 4.2: have to package up all the estimates that 

2110.4 - 3.28: you’re going to have for any possible joiner 

2112.44 - 3.52: you’re going to consider down below that 

2113.68 - 4.6: has to get sent down to the GPU with 

2115.96 - 5.44: you. 

And that way all the computation and 

2121.4 - 4.92: analysis is localized in the GPU and 

2124.079 - 4.28: you never have to go back to the CPU until you say, 

2126.32 - 3.96: you know, here’s our computational result or give 

2130.28 - 2.76: me more work to do. 

I didn’t find anything yet, right? 

So GPUs are great; like, like you know, they’re 

2136.76 - 3.68: really good at doing parallel computations, which 

2138.96 - 3.56: what they’re trying to do here, but you got to 

2140.44 - 5.36: have everything be local on the 

2145.8 - 3.36: GPU. 

Because soon as you go talk to 

2147.64 - 3.64: somebody else, you’re blocking and then 

2149.16 - 5.0: you’re, you’re 

2151.28 - 6.48: screwed. 

Is that clear? 

Okay, so this paper’s got results, which is another 

2154.16 - 5.439: reason I like it, right? 

2157.76 - 5.0: So I’m going to cherry-pick three 

2162.76 - 5.2: graphs. So the first one is going to be 

2164.88 - 6.479: what is the search time for these 

2167.96 - 5.48: different methods? 

The DPCP CCP that's the sort of graph-based one, 

2171.359 - 5.561: precursor to the hyper one. 

I forget what DPE is, 

2176.92 - 4.84: but DP sub DP size is System R. 

2180.4 - 2.719: DP sub is the one we talk about 

2181.76 - 3.12: before, but again they have a bunch of 

2183.119 - 3.2: these running on the CPU. They have a 

2184.88 - 3.16: bunch of these running on the GPU as 

2186.319 - 3.601: well. It’s actually quite impressive. 

2188.04 - 4.68: Right? And so the two workloads they’re 

2189.92 - 4.199: considering are the joint out 

2192.72 - 2.68: benchmark which is based on the IMDb 

2194.119 - 3.161: database that we’re going to see a 

2195.4 - 3.4: lot through the newer papers. 

2197.28 - 3.68: We look at this as the common work that 

2198.8 - 5.68: everyone does. 

2200.96 - 4.84: Music Brainz was the, it’s an online 

2204.48 - 2.599: music database, and I think they generate 

2205.8 - 5.12: synthetic queries for this. 

2207.079 - 5.04: Right? So if you look at the music 

2210.92 - 2.24: Brainz ones, and again they’re scaling up 

2212.119 - 5.641: the number of relations that are being joined, 

2213.16 - 6.64: this seems like, um, you know, the GPU is 

2217.76 - 3.64: the clear winner here because you know 

2219.8 - 3.72: everything else is falling off, falling off 

2223.52 - 4.559: the cliff, whereas this one 

2225.24 - 5.359: is doing okay, up to like 2025. 

Again, it’s log scale, so it’s not great anyway, 

2230.599 - 4.48: but it’s doing quite well here. 

2232.839 - 4.681: Right? 

But then when you look at the 

2235.079 - 5.0: Joint owner benchmark one, 

2237.52 - 5.599: um, it’s surprising that you know, the GPU 

2240.079 - 6.401: is basically flatlined for both the 

2243.119 - 6.0: DP size one and the red one, 

2246.48 - 4.92: here is the GPU one. 

2249.119 - 4.0: Uh, and now you see that the performance 

2251.4 - 5.0: gap between what the CPU can do and what 

2253.119 - 5.161: the GPU can do is not as great. 

2256.4 - 5.52: And I think if I remember 

2258.28 - 5.2: correctly, it was just because of the complexity 

2261.92 - 4.439: of the joint order benchmark queries. 

2263.48 - 6.2: Um, the predicates were more 

2269.68 - 2.96: restrictive, and there were fewer options they could 

2271.24 - 4.56: consider in a parallel search. 

So even 

2275.8 - 3.96: though the GPU has, you know, has all 

2277.8 - 4.559: hundreds of thousands of cores, 

2279.76 - 3.92: they’re running on like a 2016 GPU. 

I forget it’s like eight gigs of RAM, but I forget 

2282.359 - 3.601: how many cores they have. 

But still, 

2285.96 - 4.68: like all the, there isn’t as much 

2288.48 - 4.24: opportunities for parallel search as 

2290.64 - 3.719: there was in this one over here, so 

2292.72 - 3.48: they’re not getting as a big, big of a win. 

And this sort of, the reason why it’s 

2298.04 - 4.72: sort of flatlined is the cost of like 

2300.56 - 4.36: packaging up the request or the 

2302.76 - 4.44: search for you in such a way 

2304.92 - 4.6: that you know the GPU wasn’t really sending that 

2307.2 - 4.2: down to the GPU, letting the GPU crunch 

2309.52 - 3.079: on it and then come back up to you. 

That’s why there’s sort of like a fixed 

2312.599 - 4.881: cost no matter what the size of the 

2313.72 - 6.76: query is. You’re always paying that 

2317.48 - 3.0: penalty.
2323.839 - 5.161: yes  
2326.16 - 5.4: yes so his point  
2329.0 - 4.96: is his point is like if you ignore  
2331.56 - 6.12: everything on this side after 18 and it  
2333.96 - 5.8: kind of looks very similar um so it's so  
2337.68 - 5.48: is the the benefit you would get  
2339.76 - 6.44: from uh you know from using a GPU or the  
2343.16 - 5.8: parallel search.  

2346.2 - 7.2: like so again the hyper paper didn't  
2348.96 - 7.879: show uh crazy number of of  
2353.4 - 5.4: um of tables in a joint they mentioned  
2356.839 - 3.841: there's the 5,000 one from sap but I  
2358.8 - 4.0: forget what they what's the highest one  
2360.68 - 3.24: they went up to in their experiments uh  
2362.8 - 3.6: but it was definitely I think a little  
2363.92 - 5.159: bit higher than this like 30 seems like  
2366.4 - 6.36: I mean the next line they go up to 100.  
2369.079 - 5.681: so I think there's only 30 tables in  
2372.76 - 4.28: music brains so that's why they couldn't  
2374.76 - 5.04: scale beyond that and then join our  
2377.04 - 6.079: Benchmark it's just 18 tables or 17  
2379.8 - 4.84: tables mean the bottom ofman that one  
2383.119 - 4.96: was like  
2384.64 - 5.56: 100 uh yeah yeah so they're gonna  
2388.079 - 3.52: they're GNA go to a thousand in this one  
2390.2 - 3.639: but  

2391.599 - 5.281: like so for these are these are real  
2393.839 - 5.121: data sets synthetic workloads synthetic  
2396.88 - 3.28: queries and so they're maxing out the  
2398.96 - 3.119: number of queries that they have the  
2400.16 - 3.6: number of tables that they have in their  
2402.079 - 4.641: database and that determ how many you do  
2403.76 - 7.079: want to join um.  

2406.72 - 5.879: the how say this um they didn't they  
2410.839 - 4.041: didn't do the same sort of scalability  
2412.599 - 3.601: experiment I guess actually the next  
2414.88 - 4.28: slide but they don't show the search  
2416.2 - 6.8: time I don't think uh for going up to a  
2419.16 - 6.28: thousand queries yeah they show what the  
2423.0 - 4.839: plan cost is and we we'll discuss that  
2425.44 - 5.52: next slide um.  

2427.839 - 6.321: which is also sketchy but well  
2430.96 - 4.84: okay all right let's get to that okay so  
2434.16 - 3.76: so again so this is search time so this  
2435.8 - 6.6: is like for these given queries with  
2437.92 - 5.88: different number relations um how uh how  
2442.4 - 3.24: well you know does the the search  
2443.8 - 4.799: algorithm scale.  

2445.64 - 6.0: right the the next one they did is they  
2448.599 - 5.561: measured what is the quality of the  
2451.64 - 5.24: plan for these different methods  
2454.16 - 5.04: relative to each other so they didn't  
2456.88 - 4.04: actually run the queries right they're  
2459.2 - 4.919: just saying here's what the cost model  
2460.92 - 5.88: in the query Optimizer thinks is the the  
2464.119 - 5.2: quality of this query plan and I don't  
2466.8 - 4.48: think they even try to like prove like  
2469.319 - 4.561: you know run run some random ordering to  
2471.28 - 4.319: see whether uh the relative ordering is  
2473.88 - 5.479: actually correct or  

2475.599 - 5.601: not is it because the is that big no so  
2479.359 - 4.201: I  
2481.2 - 4.84: mean  
2483.56 - 3.32: uh so that's I'm saying I don't think  
2486.04 - 2.16: you I don't think you want to do an  
2486.88 - 2.28: exhaust search of like try to run  
2488.2 - 3.84: everything prove that the ranking is  
2489.16 - 6.159: correct I mean you could uh on a reason  
2492.04 - 5.12: side data set you maybe could but the I  
2495.319 - 4.401: think if you did a bunch of you know the  
2497.16 - 5.64: statistical method you randomly sample  
2499.72 - 5.44: and then show that for any random sample  
2502.8 - 3.559: uh the ordering is correct and therefore  
2505.16 - 2.679: with some kind of guarantee or  
2506.359 - 4.561: confidence I can say that the global  
2507.839 - 6.24: ordering is correct they didn't do that.  

2510.92 - 7.199: right this paper is what  
2514.079 - 6.601: 2022 so that means they wrote it in 2021  
2518.119 - 8.761: so data Fusion wasn't a thing back then  
2520.68 - 6.2: duct B was still pretty early right.  
2527.56 - 4.44: um yeah but that that would take forever  
2530.4 - 4.12: right to run this on  
2532.0 - 4.76: postest uh because it's a road store  
2534.52 - 4.16: right all right so for this one they're  
2536.76 - 4.24: kind of they're throwing everything in  
2538.68 - 5.32: which is kind of nice so gqo that's the  
2541.0 - 4.64: gentic algorithm from postgress Lindy P  
2544.0 - 5.319: that's the the Adaptive One from the  
2545.64 - 6.04: Germans goo we've covered ik kkbz is the  
2549.319 - 4.561: approximation they used to generate uh  
2551.68 - 4.48: optimal left deep trees we saw this in  
2553.88 - 5.199: the hyper the umbre paper and then I I  
2556.16 - 6.959: didn't talk about the um the iterative  
2559.079 - 6.24: dp1 um it's mentioned in the hyper paper.  

2563.119 - 4.881: uh it's just it's a different form  
2565.319 - 4.481: formulation right it's a way again for a  
2568.0 - 3.72: really large uh number of joins it's a  
2569.8 - 4.16: way to sort of approximate things and be  
2571.72 - 7.56: be easier so they talk about how they  
2573.96 - 7.399: run it um the the mdp mpdp algorithm uh  
2579.28 - 4.64: on different sizes of K and then I'm  
2581.359 - 4.281: only show they they only rep put 15  
2583.92 - 3.56: that's like I think the median but they  
2585.64 - 3.479: do scale up the size of K to show that  
2587.48 - 3.68: different cluster sizes are going to be  
2589.119 - 4.161: different so this graph here it's all be  
2591.16 - 5.52: relative to what their best  
2593.28 - 5.48: implementation can do the UN DP the npdp  
2596.68 - 5.2: k equals 15 so all these numbers here  
2598.76 - 5.12: are just relative to this right and  
2601.88 - 3.36: again it's based on the plan cost  
2603.88 - 4.08: estimate from the query from the query  
2605.24 - 4.44: Optimizer itself so the query is saying  
2607.96 - 4.04: I think this query plan is going to be  
2609.68 - 4.159: cost five and this other query plan is  
2612.0 - 4.599: going to cost six that's what they're  
2613.839 - 5.081: reporting here it's not wall clock time.  

2616.599 - 2.321: making more  
2619.359 - 6.121: phases what do they say  
2622.079 - 6.681: LGE summize the results interest to  
2625.48 - 5.56: space and they say it times out  
2628.76 - 6.72: after.  

2631.04 - 6.079: okay whereas the Germans don't right um  
2635.48 - 4.599: and then the again the X's here just  
2637.119 - 4.321: saying that this is when the the the the  
2640.079 - 3.081: optimizing or the algorithm failed to  
2641.44 - 3.72: finish and then for these here is when  
2643.16 - 6.439: you go these are up in like the the 40  
2645.16 - 7.76: to 50 uh relative difference to um the  
2649.599 - 6.881: interesting that they say is that after  
2652.92 - 3.56: in general for c  
2657.92 - 5.8: id2 for what for click gra got it is  
2661.119 - 3.96: this a snowflake graph the star graph  
2663.72 - 3.839: the star schema one looks basically the  
2665.079 - 3.361: same as well um.  

2667.559 - 2.441: they don't rep they don't have numbers  
2668.44 - 5.0: on  
2670.0 - 5.76: that yeah it might be in the tech report  
2673.44 - 4.52: I again I don't remember seeing it.  
2675.76 - 4.24: though okay so this again this is the  
2677.96 - 4.2: one from epfl.  

2680.0 - 5.599: um I want to briefly talk about another  
2682.16 - 6.56: approach from the from IBM uh that  
2685.599 - 5.801: predates that since came out 2008 and  
2688.72 - 5.68: the basic idea here is that we're going  
2691.4 - 3.0: to  
2694.68 - 5.679: um you're going to represent the  
2697.64 - 6.04: possible joint orderings you can have in  
2700.359 - 4.321: a relational database and then now when  
2703.68 - 2.76: you want to figure out what kind of  
2704.68 - 3.919: enumeration you want to do now you're  
2706.44 - 5.0: just doing self-joins on that same table  
2708.599 - 4.52: within your database to then do the  
2711.44 - 3.24: enumeration and then there's a little  
2713.119 - 2.641: bit trick they're going to do to decide  
2714.68 - 3.76: how they want to  
2715.76 - 6.88: allocate uh the task to do the  
2718.44 - 5.48: exploration on the uh to to your workers  
2722.64 - 3.679: and they're going to do this in such a  
2723.92 - 3.8: way that you want to to maximize the  
2726.319 - 4.641: amount of work  
2727.72 - 5.639: uh sorry maximize the or minimize the  
2730.96 - 4.0: amount of wasted time workers are have  
2733.359 - 3.441: because they don't have any work to do.  

2734.96 - 3.639: so the blindly handing out like you do  
2736.8 - 4.519: this you do that is not always going to  
2738.599 - 4.801: work out because it may be the case that  
2741.319 - 3.481: because they're not going to figure out  
2743.4 - 3.0: what are valid joint orders before you  
2744.8 - 3.6: actually start doing the the evaluation  
2746.4 - 3.199: of it you could end up with a thread  
2748.4 - 2.679: with a bunch of stuff they don't need to  
2749.599 - 3.281: do and everything gets thrown away and  
2751.079 - 5.561: then they become  

2752.88 - 5.52: Idol right so in the paper they talk  
2756.64 - 3.12: about they're GNA this they're going to  
2758.4 - 4.52: split things up based on what our  
2759.76 - 5.599: quantifier says I remember what that was  
2762.92 - 5.679: when we talked about relational  
2765.359 - 5.161: calculus nobody good.  

2768.599 - 3.0: excent again Beyond this class you you  
2770.52 - 3.079: don't really know this but the  
2771.599 - 4.0: quantifiers again are just going to be  
2773.599 - 3.441: the think of like the the things that  
2775.599 - 4.641: are producing tuples that are being fed  
2777.04 - 5.039: into other other uh you know other other  
2780.24 - 4.56: sort of blocks right this is from the I  
2782.079 - 4.721: think lecture three or four about in  
2784.8 - 2.72: Starburst right so the quantifiers are  
2786.8 - 3.4: getting  
2787.52 - 3.599: things that are producing table right  
2790.2 - 2.159: they don't want to call it that they  
2791.119 - 2.921: don't want to call it like tables  
2792.359 - 3.601: because it could be again Nest ques and  
2794.04 - 4.36: other things all right so sa a simple  
2795.96 - 4.84: query here joining ABC and D and a query  
2798.4 - 3.8: graph looks like this so in the first  
2800.8 - 3.319: step they're going to generate the set  
2802.2 - 3.28: of all the plan T you'd have in this  
2804.119 - 3.521: memo table but again the memo table is  
2805.48 - 3.92: just going to be a table in your  
2807.64 - 4.919: database.  

2809.4 - 4.52: right and then now they're going to uh  
2812.559 - 4.961: do logical  
2813.92 - 6.919: partitioning uh to divide up this work  
2817.52 - 6.839: uh into uh into groupings where the the  
2820.839 - 4.681: size of the of the the the subgraph the  
2824.359 - 3.601: number of quantifiers you're having in  
2825.52 - 4.88: your subgraph are all going to be the  
2827.96 - 4.28: same so what I mean by that so the so  
2830.4 - 4.08: the first p in P1 these are going to be  
2832.24 - 4.24: where the subgraphs are size one P2 is  
2834.48 - 4.68: all the subgraph of size two three four  
2836.48 - 4.68: and so forth right and again it's it's  
2839.16 - 4.399: not the ordering the ordering doesn't  
2841.16 - 3.36: matter logically what's what's in them  
2843.559 - 2.241: and again I'm saying logically  
2844.52 - 3.28: partitioning just because it just you're  
2845.8 - 4.039: just saying there's some other mapping  
2847.8 - 4.36: to say you know this these rows here  
2849.839 - 4.601: belong to this  

2852.16 - 3.72: partition so then now you're going to  
2854.44 - 2.84: then explore each partition starting  
2855.88 - 2.84: from from the bottom because we're doing  
2857.28 - 4.0: bottoms up so we have first got to  
2858.72 - 5.68: figure out how we're going to do uh what  
2861.28 - 5.36: kind what are the the subquery plans for  
2864.4 - 4.24: uh for this first partition here and  
2866.64 - 5.24: again that's just running the you know  
2868.64 - 4.64: the the the DP algorithm and figure  
2871.88 - 3.56: out here's here's the best you know  
2873.28 - 4.799: joint ordering for or the best access  
2875.44 - 5.04: method I want to use for  
2878.079 - 5.48: uh for for you know for for this  
2880.48 - 4.32: subgraph I'm examining here right and  
2883.559 - 4.241: the reason why there could be multiple  
2884.8 - 4.759: query plans is because again it's uh  
2887.8 - 3.84: it's not just accessing Tables by  
2889.559 - 5.121: quantifiers it could be like a  
2891.64 - 5.16: subquery we can ignore that and then I  
2894.68 - 5.2: go to the next one and so now if I want  
2896.8 - 5.68: to evaluate the  

2899.88 - 4.439: uh if I want to evaluate the different  
2902.48 - 5.28: combinations I could have in here well  
2904.319 - 5.0: that's just doing a join of all the uh  
2907.76 - 4.799: things I've generated in the first  
2909.319 - 5.721: partition P1 with itself because now I'm  
2912.559 - 7.201: gonna get up with all combinations  
2915.04 - 6.36: within uh of subset size size two so I  
2919.76 - 4.76: do that do the same calculation again  
2921.4 - 7.0: yada yada right and general query plans  
2924.52 - 5.559: expand upon Q3 again sorry partition  
2928.4 - 3.919: three and again now I can either I can  
2930.079 - 4.561: only have uh it's a combination of  
2932.319 - 4.921: partition size one or and partition size  
2934.64 - 4.4: two and now I just join the the top one  
2937.24 - 3.16: and the bottom one so the top one and  
2939.04 - 2.519: the second one together and that gives  
2940.4 - 2.84: me all possible  
2941.559 - 4.04: permutations again you're just doing  
2943.24 - 4.96: this within the database itself and then  
2945.599 - 4.921: now I get down to this one here and for  
2948.2 - 5.32: P4 now I have two choices right it could  
2950.52 - 5.4: be a combination of uh subgraphs of size  
2953.52 - 6.48: one with a subgraph size three or  
2955.92 - 8.0: subgraphs size two joined with  
2960.0 - 5.92: itself right but again like in this is  
2963.92 - 4.32: basically like DP sub where they're not  
2965.92 - 4.159: checking as they're generating this  
2968.24 - 3.559: these enumerations whether the joints  
2970.079 - 3.52: are actually valid so you're just  
2971.799 - 4.04: basically coming up like through this  
2973.599 - 4.321: this these self joints here's all the  
2975.839 - 4.28: possible tasks or joint ERS I could  
2977.92 - 4.36: consider and so if you do the naive  
2980.119 - 3.881: thing and say okay well I have two  
2982.28 - 2.88: worker threads so I'll give this one to  
2984.0 - 2.88: the first worker thread and this one to  
2985.16 - 3.04: the second worker thread the problem is  
2986.88 - 2.64: when we look down here we know a bunch  
2988.2 - 3.2: of these are actually useless and  
2989.52 - 4.599: invalid because we just kind of took a  
2991.4 - 6.56: cartisian product of P2 with itself  
2994.119 - 5.601: right so a join of of AB with AB is  
2997.96 - 3.96: useless because it doesn't actually  
2999.72 - 6.0: contain uh you know C and D which I need  
3001.92 - 5.159: to have right so all of this work would  
3005.72 - 3.56: get thrown away and the only thing we're  
3007.079 - 4.961: actually really end up Computing is what  
3009.28 - 4.16: what's in this sort of task list here so  
3012.04 - 3.4: now we need to be a bit smarter in how  
3013.44 - 4.56: we're going to decide which workers are  
3015.44 - 4.879: going to do this this eneration  
3018.0 - 3.64: because we don't want to assign this one  
3020.319 - 3.121: thread it throws everything away and  
3021.64 - 4.28: then it's then it's  
3023.44 - 4.32: Idol so the paper really this paper is  
3025.92 - 5.159: really focused on how do you do that  
3027.76 - 5.12: allocation of the the work I have to do  
3031.079 - 3.76: to the workers that the that are  
3032.88 - 4.88: available to me and doing it in such a  
3034.839 - 4.24: way where you're mindful of what the the  
3037.76 - 3.799: the join graph is actually trying you  
3039.079 - 5.361: know looks like to make sure that you  
3041.559 - 6.04: are evenly Distributing the work amongst  
3044.44 - 5.48: the different threads in the case of the  
3047.599 - 4.161: the mpdv paper for the gpus they kind of  
3049.92 - 4.6: throwing everything in there and then  
3051.76 - 5.12: you have so many so many cores who cares  
3054.52 - 6.839: right 2008 you know there was basically  
3056.88 - 5.88: like four core six core machines um you  
3061.359 - 3.44: not not the sort of behem we have now  
3062.76 - 3.76: but still all right so the first thing  
3064.799 - 4.121: to do the easy thing to do is just like  
3066.52 - 4.279: take uh do what I said in the beginning  
3068.92 - 4.32: is you just take all the possible plan  
3070.799 - 3.481: joints I have divided by the number of  
3073.24 - 2.28: workers I have and just hand them all  
3074.28 - 4.12: off it's easiest thing to do but again  
3075.52 - 4.96: it's going to be uh you have imbalance  
3078.4 - 3.08: in the workload because one worker could  
3080.48 - 3.119: have a bunch of stuff it throws away  
3081.48 - 4.079: there's nothing to do so instead what  
3083.599 - 5.801: you do what they call stratified  
3085.559 - 6.04: allocation where you want to divide the  
3089.4 - 3.48: the the work I have to do into sort of  
3091.599 - 4.24: multiple  
3092.88 - 5.04: subsets um and then hand them out in an  
3095.839 - 3.52: intelligent way to kind of try to can  
3097.92 - 4.84: easily distribute the work I want to  
3099.359 - 5.841: give out to my workers so the three  
3102.76 - 5.28: ways to do this is again if you  
3105.2 - 5.399: just think about the the the joint  
3108.04 - 4.759: elimination as a as a self join like a nest  
3110.599 - 3.48: of loop join then now I can think about  
3112.799 - 2.56: in terms of like what's what's the outer  
3114.079 - 3.641: table and the inner table the outer loop  
3115.359 - 4.801: and the inner loop right so in this case  
3117.72 - 6.28: here I have my my ader Loop would be  
3120.16 - 6.24: this line here for for I in one to uh  
3124.0 - 3.4: the size this floor the size I two right  
3126.4 - 3.28: that's an outer loop that's going to be  
3127.4 - 4.04: grabbing sort of one half of a of a join  
3129.68 - 3.08: graph and then now you have an inner  
3131.44 - 3.359: loop that's G to say okay look at all  
3132.76 - 4.72: the possible uh combinations I could  
3134.799 - 3.881: have uh or the different joint ERS I  
3137.48 - 3.52: could have for the the rest of the  
3138.68 - 4.76: subgraph the question is do you how do  
3141.0 - 5.04: you want to assign those that valuation  
3143.44 - 6.08: out so aquad says you just take I know  
3146.04 - 6.279: my looks like and divided uh into ranges  
3149.52 - 6.24: amongst the um amongst the threads that  
3152.319 - 5.441: I have so like within one iteration of  
3155.76 - 4.88: this outer loop here one thread would  
3157.76 - 4.16: would take take all of that like all all  
3160.64 - 4.32: the things you would to do in the Inner  
3161.92 - 4.48: Loop another one would be you just every  
3164.96 - 3.44: time you iterate through the outer loop  
3166.4 - 3.8: you just hand that work off to one  
3168.4 - 3.56: worker in a round robin fashion and  
3170.2 - 4.119: again then they take all the work that's  
3171.96 - 4.56: within the inner loop the alternative is  
3174.319 - 3.76: that you you do the round robin Within  
3176.52 - 4.76: the inner loop  
3178.079 - 5.081: itself right so Distributing the outer  
3181.28 - 3.92: one actually turns out to be the best  
3183.16 - 5.959: because you end up uh it works really  
3185.2 - 5.68: well for star schemas and and uh and  
3189.119 - 4.44: other queries that have skewed skewed  
3190.88 - 5.12: joins because you're kind of handing out  
3193.559 - 4.481: the easy problems evenly amongst  
3196.0 - 3.52: everyone else amongst all the different  
3198.04 - 3.72: workers.  

3199.52 - 5.079: right this one works well too but it's a  
3201.76 - 5.319: more complicated to to figure out uh in  
3204.599 - 4.641: in the calculation but this handle again  
3207.079 - 4.801: the skewed workloads star schemas and S  
3209.24 - 3.72: schemas as well right it's really great  
3211.88 - 3.28: when you have a central table that's  
3212.96 - 3.599: really large because now you don't have  
3215.16 - 3.919: one thread trying to figure out all the  
3216.559 - 5.04: joints for that really large fact table  
3219.079 - 4.24: right because it's iterating all through  
3221.599 - 3.841: the dimension tables on the on the inner  
3223.319 - 4.441: Loop here that work is spread across  
3225.44 - 2.32: multiple  
3229.88 - 5.56: workers okay so let's finish.  

3232.96 - 5.56: up so hopefully the main take away from  
3235.44 - 6.84: this is that the the idea of how to  
3238.52 - 6.839: divide up a the the the the join search  
3242.28 - 5.4: or the The Joint ordering search is  
3245.359 - 4.24: complicated uh to paralyze because again  
3247.68 - 3.36: there's there's so many things you got  
3249.599 - 4.72: to worry about not just like how do you  
3251.04 - 4.96: divide work up so that uh everyone is is  
3254.319 - 4.24: all the workers are are active and have  
3256.0 - 4.079: stuff to do but also how can you do such  
3258.559 - 3.401: you know do the enumeration ahead of time  
3260.079 - 4.361: so that you don't generate much of work  
3261.96 - 5.24: that's actually useless so that part is  
3264.44 - 4.72: super tricky in terms of whether or not  
3267.2 - 3.159: it makes sense to do the op run the  
3269.16 - 4.48: optimizer on a  
3270.359 - 5.081: GPU uh I would say the way Nidia keeps  
3273.64 - 4.36: jacking up the prices and the scarcity  
3275.44 - 5.84: of discret gpus like again they were  
3278.0 - 6.72: running on a a GTX 1080 which is in was  
3281.28 - 5.0: high-end but highend six years ago um  
3284.72 - 3.04: you nobody would want to say like I'm  
3286.28 - 4.76: gonna run my database system but I also  
3287.76 - 5.44: have to have you know a a $110,000 GPU  
3291.04 - 4.6: on it right just just to do joint  
3293.2 - 6.599: optimization right I don't think that's  
3295.64 - 5.679: feasible practical um but there are CPUs  
3299.799 - 3.601: now that come with what they call these  
3301.319 - 4.961: AMD calls them apus they're basically  
3303.4 - 4.84: integrated Graphics chips right and so  
3306.28 - 4.6: like you can now get like ryzen this is  
3308.24 - 5.879: from two years ago but uh you can get  
3310.88 - 5.719: ryzen CPUs that'll have like some kind  
3314.119 - 4.401: of Ron thing in there is it going to be  
3316.599 - 4.841: super powerful like a like a five you  
3318.52 - 4.0: know 5090 no but is it going to be  
3321.44 - 3.919: better you know it's going to be a lot  
3322.52 - 4.24: of cores yeah and that might be  
3325.359 - 4.521: something to be interesting now when  
3326.76 - 4.839: you're you know since they since it  
3329.88 - 5.199: looks like there sort of limits on Cor  
3331.599 - 7.161: they can cram into a general purpose CPU  
3335.079 - 6.0: that seems to be uh not increasing as  
3338.76 - 3.44: much as it used to like that's another  
3341.079 - 3.161: opportunity where like this is something  
3342.2 - 4.0: that the D could take advantage of if  
3344.24 - 4.92: you know if there's a cheap C GPU right  
3346.2 - 4.44: there it's not cash coherent which I but  
3349.16 - 3.72: that's not a problem right for joint  
3350.64 - 4.399: surge like that might be something the D  
3352.88 - 5.0: system could take advantage of to do the  
3355.039 - 5.0: mpdp algorithm we talked  
3357.88 - 4.56: today but I don't think Amazon I think  
3360.039 - 8.76: Amazon you can't get easy2 you can't get  
3362.44 - 6.359: an AMD processor with with a an APU.  

3374.599 - 8.121: butf.  
3377.599 - 5.121: number not sure thisp.  

3387.0 - 5.68: all right so his statement is um the the  
3390.319 - 3.72: paper shows that the GPU really only  
3392.68 - 5.08: makes sense when you get to a large  
3394.039 - 5.8: number of uh relations right and it's  
3397.76 - 3.279: not clear whether you actually for those  
3399.839 - 3.52: large number of relations you have to  
3401.039 - 4.441: have a discret GPU or what an integrated  
3403.359 - 5.121: one be sufficient.  

3405.48 - 3.0: um  
3412.039 - 7.28: it depend one is again if the thing  
3416.039 - 4.52: if every CPU is coming with this now uh  
3419.319 - 3.76: and it's just  
3420.559 - 3.961: there you know you could take advantage  
3423.079 - 5.561: of it the other thing you could also  
3424.52 - 8.24: think about is like well for the if I  
3428.64 - 6.28: already have to to bundle up the the the  
3432.76 - 4.4: the join enumeration to put it down to  
3434.92 - 3.84: the GPU so it doesn't talk to my CPU  
3437.16 - 4.159: there's no reason that has to then run  
3438.76 - 4.24: on the same box that I'm at so if I'm if  
3441.319 - 4.361: I'm like a snowflake or running you know  
3443.0 - 4.44: David says a service as a business I  
3445.68 - 4.399: could have bunch of GPU machines sitting  
3447.44 - 4.52: on the side that I could then send these  
3450.079 - 3.96: discret requests to to do joint  
3451.96 - 3.359: information on that and then that way  
3454.039 - 3.601: it's a shared resource across multiple  
3455.319 - 6.8: things and then it advertises the cost  
3457.64 - 6.679: across multiple um you know of multiple  
3462.119 - 3.24: customers yes that could be part of it.  

3464.319 - 3.601: but I  
3465.359 - 3.76: think I think that for for better worse  
3467.92 - 2.52: from a business perspective it'd be very  
3469.119 - 3.44: hard to justify hey we got a bunch of  
3470.44 - 4.84: buy you know h100s so we can do join  
3472.559 - 6.361: enumeration versus like trading in llm to  
3475.28 - 5.48: you know do some chat thing right uh do  
3478.92 - 4.199: I think join ersion is is is a more  
3480.76 - 4.839: important thing yes but like that's a  
3483.119 - 3.841: sort of not what the it's not the hot  
3485.599 - 2.76: thing it's not gonna get people oh man  
3486.96 - 3.04: you know I can't I'm gonna buy you know  
3488.359 - 3.76: I'm not gonna give Nidia $100,000 to  
3490.0 - 5.16: make my join optimization look a little bit  
3492.119 - 4.44: faster so again these things might be a  
3495.16 - 3.52: cheap way to achieve some of those  
3496.559 - 3.76: benefits but to your point yes it's not  
3498.68 - 2.879: clear whether the the integrated on  
3500.319 - 3.401: because don't handle  
3501.559 - 4.081: it you'd have to look at where the har  
3503.72 - 4.16: specs for what this is now versus what  
3505.64 - 4.199: they're was 6 years  
3507.88 - 4.88: ago.  

3509.839 - 5.48: okay all right so that's it for today uh  
3512.76 - 4.44: we'll pick up again on Monday next week  
3515.319 - 3.881: I start doing parallel search now for  
3517.2 - 4.2: for the top down stuff okay and then  
3519.2 - 4.919: we'll also present some of the potential  
3521.4 - 2.719: topics for project.  
3569.57 - 3.059: [Music]
