---
layout: post
title: "Predictive Scaling in MongoDB Atlas, an experiment by A. Jesse Jiryu Davis and Matthieu Humeau"
date: 2025-04-29 00:00:01
categories: podcast
tags: [podcast_script]
---


[Predictive Scaling in MongoDB Atlas, an experiment by A. Jesse Jiryu Davis and Matthieu Humeau](https://www.youtube.com/watch?v=VLi9MHnBJzQ)

Thank you. 

Okay, so hi, I'm Jesse. I'm going to be co-presenting with my colleague Matt. We both work at MongoDB in New York City, and over the last year, we did an experiment to see whether predictive autoscaling was going to work in MongoDB Atlas or not. 

So MongoDB, as I hope you know, we make a NoSQL document database. We store data in this binary format that's sort of JSON-like, and you can query it with the MongoDB query language, which is an increasingly rich and expressive JSON-like query language. We've got these days strong consistency, ACID transactions, and high availability. 

As we were talking about earlier, Phil, if you remember MongoDB from 10 or 12 years ago, we've come a long way. People know what I'm talking about. So MongoDB is usually deployed as a three-node replica set, so you've got your data on three database servers. One of those servers is the primary, and you've got at least two secondaries. 

Clients send all of their reads and writes to the primary, and the secondaries replicate those writes usually within a few milliseconds. Then clients can read from the primary or from the secondaries, so the secondaries provide query scaling, but the main purpose of the secondaries is just hot standby. If the primary fails, then one of the secondaries takes over within a few seconds. You can also deploy it as a sharded cluster, which is a bunch of replica sets where each replica set owns a portion of the data. 

Then we've got this layer of routing servers in front called shard servers. Clients talk to shard servers that figure out where the data is for their queries and then forwards requests to the proper replica sets. MongoDB is free and open source, so you can definitely download it yourself and run it on your own servers, and lots of people do. But these days, most people use MongoDB Atlas. This was originally MongoDB's database as a service, and these days we call it a developer data platform because we've added a lot of other stuff to it. 

So you can now use triggers, streaming, streaming analytics, and vector search. But this talk is going to focus on the OG, the database as a service. The database as a service is multi-region, so you can spread your data around or move your data close to your customers. It's also multi-cloud, so we run on Azure, GCP, and AWS, and you can even have a replica set or a sharded cluster that includes servers on multiple clouds talking to each other and spreading your data across multiple clouds. 

That means, and this is important for this talk, that MongoDB Atlas, MongoDB's cloud, is actually Microsoft's, Amazon's, and Google's clouds. So I'm going to show you our business model slide. Please don't share this outside of this room. Customers give us $3, and then we give two of them to the hyperscalers, so we keep one for ourselves. But this diagram is not to scale. 

Atlas customers decide the size of the server that they want, like the number of CPUs and the amount of RAM, and they configure that in Atlas. Then we go rent a server of the appropriate size from the cloud provider that the customers told us they want us to run their database on. We charge customers according to the size of the server they chose and how many hours it's running, and then we turn around and pay most of that to the cloud providers.

What Mattia and I wanted to figure out was can we save money by predicting customers' workload fluctuations, choose the smallest server that will serve them for each quarter hour or so, save money, and keep some of that money from MongoDB, sharing most of that savings with the customers. So that's the experiment. 

When we sell MongoDB to customers, we choose these Atlas tiers like M10, M20, M30, and for MongoDB, each cloud corresponds to a particular instance size on that cloud. For example, an M10 is some specific AWS server with a certain number of CPUs and RAM, and we charge a certain amount per hour on AWS. On the other clouds, these might be slightly different, but not much. 

Vertical scaling works like this: a customer goes into the Atlas website and says, "I'm running on M20, but I want to run on M30, so upgrade me." Atlas takes over and then automatically goes through these steps: it chooses the secondary, takes it offline, detaches its network storage, restarts it with a different server size, and reattaches the existing storage so it doesn't have to fetch the entire dataset from somewhere else. Then it waits for the secondary on the new server size to catch up to replay all of the writes that it missed while it was down. Once it's caught up, Atlas does the same thing with the other secondary, then it steps down the primary and scales it similarly. 

When you step down a MongoDB primary, there's actually a sort of coordinated handoff where it chooses a secondary and starts it up so that there's even less downtime than normally. The whole process takes about 15 minutes to scale an entire three-node set. Customer applications usually don't even notice that this is happening because there's no data loss. A majority of the set is up and caught up the entire time. Except that at the end of it, the set is either more or less powerful, and it costs more or less, so that's kind of customer choice scaling. They go onto the website, and they click, "I want to upgrade or downgrade." 

They can also opt into autoscaling, but that's really pretty primitive today. This is what motivated us to try to do something better. If a customer opts into autoscaling, then Atlas has these kind of primitive rules that scale infrequently and reactively. One of the rules is scale up by one tier after an hour of overload, so that's like going from M20 to M30 if your CPU has been 75% or worse on average for an hour. 

You're looking at me like disbelief; I'm sorry. Or scale down by one tier after 24 hours of underload. We want to be very conservative and not hurt people's performance. Underload is 50% CPU or less, and again, this is one tier. So even if you really should go from M60 all the way to M10, we don't do that. We just go down by one tier a day, so you could be paying too much for a long time, or worse, you could be overloaded for a long time. Clusters can be overloaded or underloaded for a long period, and this is particularly bad because they are already overloaded when they start to scale up, which is bad for performance and might even be so bad that it interferes with the scaling operation itself. 

So that's the disappointing present, and Mattia and I envisioned this glorious future where we would predict workload fluctuations. We would know how the demand rises and falls, and so we could scale up just before the extra capacity is needed and then scale down as soon as it isn't anymore. 

So we would forecast each cluster's needs; hopefully, this would be possible based on past patterns, scale the cluster up before it's overloaded, scale it down as soon as it's underloaded, and we would also scale directly to the correct size, skipping intermediate tiers, so go straight from M20 to M60. The experiment was possible because MongoDB has a data warehouse where we keep each server's history. We've got a couple of years now of per minute workload and CPU and memory statistics for each of the servers in the fleet. There's like 160,000 clusters, each of them has at least three servers, so we've got like half a million servers or more. It's a fair amount of data. 

So we chose 10,000 of these clusters. These are customers who have opted into autoscaling, and we analyzed their history from the previous year. We divided up the history into training and test portions, as usual with machine learning, and we trained some models to forecast each cluster's individual future based on their recent past. 

Then we built a sort of a prototype predictive autoscaler and tested whether it would have performed better than the actual reactive autoscaler had in the past. The prototype of this autoscaler has three components. It's got a forecaster that looks at the recent past and predicts the near future. We've got a thing called an estimator, which could work for any cluster, and it just, given some inputs like you're running on an M20 on AWS and you're serving 40,000 queries per second, how much CPU do I think that will require? 

This is a hard problem because we cannot see customers' data, and we cannot see customers' queries, and so this is hard, but we did our best. Finally, we've got a planner, which simply says, given these forecasts, what's the cheapest instance size that won't be overloaded? So one of our inputs is this.
cluster history each cluster has its own history. We get that from the data warehouse, and that feeds into both a short-term and a long-term forecaster. Mato will explain why we have two.

The other input we have is just random global samples from all customers, and each sample is just a moment in time. One cluster is serving some number of operations per second, which includes queries, inserts, updates, whatever, and has an instance size. Then, what was the CPU utilization? We were focusing on CPU for the experiment, but there are a few other metrics. CPU is the most important. We used 10 million of these to train an estimator, and the estimator is pretty long-lived because it doesn't depend on an individual cluster's day-to-day fluctuations. So we only need to retrain it if there’s a more efficient new version of MongoDB software or a new instance type.

Whereas the forecaster needs to be updated continuously, every minute or every few minutes. Stick those two together, and you've got a forecasted CPU load for each cluster for each minute in the near future for each instance size that it could possibly run on—not just the one that's actually on, but each one that you could run it on. Then, given that, stick that into the planner, and the planner just chooses what instance size to migrate to next.

For example, here is a forecasted workload. It’s forecasted to go up and then down, and the estimator has guessed that if you’re on the cheap M40, your CPU will go above the 75% threshold. But if you’re on an expensive M50, it won't. So it comes up with a plan like this: sometimes start on the cheap M40 before you will be overloaded, then start the migration so that you've completed it in time. If you're on the expensive M50, you're not forecast to be overloaded during the peak on the M50. Then, as soon as possible, downgrade to the cheaper M40 once it's safe to do so. 

Pretty straightforward. Now I will hand it over to Mata for the not so straightforward section of the talk. Thank you.

So now I'm going to go into more details on how we obtain those curves of future CPU. How do we go from forecaster to the estimator down to those estimates of future CPU? Initially, we thought, okay, maybe we can just forecast CPU. But that would be silly because if I forecast my CPU and then I use that CPU to make scaling decisions, that will in turn affect my CPU. I'm in a circular dependency for that. If there’s going to be a spike tomorrow and I scale accordingly to absorb that spike, then there's no more spike, so then I'm not going to be able to forecast it. 

So we needed to forecast metrics that will not be affected by our scaling decisions. That's where we chose what we call customer-driven metrics. You can think of like the number of queries being run per second, the number of connections on the cluster, even some notion of complexity with the number of objects being scanned by the query engine, or just like the data size. All of these metrics can be considered pretty much independent from the instance size that we pick or all the scaling decisions. 

There's a little risk with the idea of independence because it's not exactly true. If your cluster is heavily overloaded, you might not be able to serve as many queries as you want. So there’s some impact, but like within the normal range of usage, it's a fair assumption. This is what such a metric could look like. So this is the number of queries per second at minute granularity for roughly three weeks, I think. What you see is it's not randomly distributed. You get some sort of daily pattern—night and day could be some daily fluctuation on some retail website, for instance. 

You also see some weekly patterns where you have five clear weekdays with some daily spikes, and you get pretty much no traffic on the weekends. This is what we call seasonal components, seasonal variations. They're very interesting for us because they tend to be very predictable, and they tend to really repeat in the future. So if we're able to model them, it’s very easy to then scale accordingly. We actually found that this is quite prevalent for our clusters and our customers. More than half of them have those daily seasonal patterns, and a quarter of them have the weekly ones too.

So how do we forecast them? The way we forecast is by using a model called MSTL, which stands for multi-seasonal trend decomposition using least squares. What it does is take the whole time series—this is the same example as earlier—and tries to extract the individual components in that time series. Then we address them separately. Here, we could extract first the trend, which is basically just that slow trend over time. You can think that a cluster over time gets more and more traffic as the website, for instance, has more customers coming in. 

Then we extract the seasonal components—the ones that we're interested in, the daily and weekly components that we can just replicate into the future. What you’re left with are residuals that are more closely randomly distributed, and those we just use a simple autoregressive model, the AR family. So then when we put that together and forecast those seasonal components along with the trend and the residuals, we get a forecast for each of those metrics that I talked about. 

We call this forecaster the long-term forecaster—not really because it forecasts far into the future, but it's very cheap to run, so we can run it often. It’s more because it needs a long history to be trained. It needs several weeks of data to be able to learn that weekly seasonality. How I created it? Well, we looked at the map, so the mean absolute percentage error for each of the metrics for each of the clusters. Here are some results for some of the metrics. 

What you’re seeing is it's actually fairly accurate for the clusters that have those seasonal components. We are seeing very good accuracy for metrics that are very stable, like connections and query rate. It’s a bit harder for metrics that are more volatile, like the number of objects being scanned, but overall accurate enough that we can predict a spike and scale accordingly. However, for the clusters that are not seasonal, it’s not good. It’s not accurate at all. We cannot use it for predictive scaling, and we don’t want to maintain a system that knows which clusters are seasonal or not.

So when the model runs, it also produces a score for confidence—its self-confidence. If that confidence is too low, we basically censor it; we don’t use it for predictive scaling. That was for the long-term forecaster, but what happens if you have a cluster that does not have the seasonal components, or if it has seasonal components but that seasonality changes? Do we have to default to the reactive scaler with all of its problems? We think we can do better, and that’s where we introduced the second forecaster that we call the short-term one. 

This time it’s short-term because it's using only the very recent history—only the last hour or two of data to try to infer what’s going to happen in the near future. The way it works is we're basically just trying to anticipate the direction of the data currently. So we just do a simple trend interpolation, a local trend, to see if it’s increasing. It’s most likely that it will keep increasing. If it’s decreasing or stabilizing, it’s most likely going to keep doing that as well. The idea is not to be very accurate; it's just to save those precious few minutes so we can scale early and avoid scaling an overloaded cluster.

I’m going to show the same example, and I’m zooming in. You can see in red that’s our trend interpolation that is trying to estimate what’s happening just next. Every time we get new data, we update that trend, and we just try to guess what is happening next. It's not very accurate—it’s better than a naive guess, a naive baseline—but it's good enough to allow us to save those few minutes in most situations. 

Okay, so that was for the forecast, but I told you we don’t forecast CPU; we just forecast those customer-driven metrics. So we need to turn them into CPU estimates, and that’s where we have the estimator. The estimator is actually quite simple in machine learning terms. It's taking the demand—so all of those customer-driven metrics—which is the demand to the cluster.
instance size that we characterize by an amount of CPU, amount of memory, and this returning what is going to be the CPU utilization for that instance size with that demand. As Jesse said, we only focus on CPU, but you could imagine building the same estimator for memory and IOPS. That is something that we're looking into.

So here's an example in practice. What you can see on the left-hand side are those customer-driven metrics over time at the minute or 5-minute granularity. On the right-hand side is the reconstruction of the CPU by the estimator. In blue, you have the actual CPU, and in orange is the estimate. This is also a machine learning model. In machine learning terms, this is a regression model. We're trying to predict a numerical variable between zero and 100, and the model that we use is boosted trees. It's basically a collection of simple learners, simple decision trees that we train successively by basically always training on the errors of the previous ones. We train it on millions, 25 million samples, which, as Jesse mentioned, is basically a collection of the demand, the metric, the instance size at a point in time for any random cluster, and the utilization, which is the target. 

We were maybe a bit surprised, but it was actually fairly accurate. For about 45% of our customer clusters, the error is under 7%. For those clusters, we think that this is actually accurate enough to make very fine scaling decisions. This is good; then we have about half of the clusters for which the error is under 15%. It's not accurate enough to make very good scaling decisions, but it may be enough to scale when we're in the extremes of overloading and underloading. Then you have the remaining 15% of clusters for which the accuracy is above, the error is above 15%. For those, we're not accurate enough, so we would not want to use predictive scaling.

Okay, so we have our forecast. We forecast our customer metrics, turn them into CPU estimates using the estimator, and then we use the planner to decide which instance we should use at every point in time. When we put it all together, that's our prototype that we run on historical data. We compared it to what was running at the time, which was the reactive scaler. The way we did the comparison is we looked at the average distance to the CPU target of 75%. We looked at the percentage of time that the cluster was overloaded and the percentage of time that the cluster was underloaded. What we found is with our predictive scaler, we were able to be closer to the 75% target, having a cluster with less overload, underutilized, or over-utilized, which resulted in savings of about 9 cents per cluster per hour, which is pretty big when you see the scale of clusters that we have. 

Now, for the experiment, what are we considering to do next? We mostly want to address the estimator shortcomings, the little portion of customers that we are not being able to serve right now. The things that we're trying to explore are more data about the hardware because right now, the way we characterize instances is very rudimentary; it's just CPU and RAM. But we could consider the cloud provider, the generation of the instance, a bunch of things. So we're trying to add more hardware data into the model. 

We're also trying to co-model memory because some clusters are not CPU-bound; they might be memory-bound. That might affect how the CPU is reacting to a certain amount of demand. So we think that if we are able to model them both at once, we might get higher accuracy. We're also trying to get more granular data about query patterns. As Jesse said, we don't have access to the actual queries run by customers for obvious reasons, but we have some ideas of how complex they might be, and we think that we might be able to use that to get better estimates of the load from the number of queries that are being run. 

We're also running some live experiments on hardware to validate how the estimator scaling estimates are accurate. Eventually, the idea is to release this into our customer cluster and to work alongside the reactive scaler. The predictive scaler would run when it feels confident in its forecast, when it feels like it's accurate enough on historical data, and when something goes wrong, the reactive scaler would take over. We don't have a release date yet, but it should be coming in the nearest future. 

That's it for the experiment. We're ready for questions.

When you talk about modeling memory pressure, what is the unit? Is it like cache hit rates? How can you be memory-bound in a database? 

It's actually quite complex. We have, I think, 15 or 20 different memory metrics. We haven't really explored that part yet, but yes, it's about the cache size, and we have the amount of RAM being consumed at any point in time. 

Okay. Does that prevent queries from running if there's not enough memory? 

No, it doesn't, but obviously, the difference between accessing data on disk versus in RAM is enormous. MongoDB caches as much as possible, and then certain workloads are cache killers and certain workloads are cache friendly. If the database is spending all its time waiting for disk, then the CPU will seem to be idle. You'll be like, "Oh, it's not a bad workload," whereas in fact, it's an awful workload. Maybe if we can model the whole system as one thing, machine learning can start to get some insight into those interactions. 

Yeah. Do you ever run into issues where instances are just not available when you have to scale? I guess when you're getting closer to a predicted scale, is there ever a problem? 

The question was whether when we want to scale, instances are not available from the cloud provider. I don't know. I haven't heard of that. I think we use common enough instances that the market is bigger than our demand. 

How quickly are you making the decision to scale up or scale down? As we saw in the short-term predictor, the example we saw is that the trend goes up and then it goes down, but it might just keep going up and down. So does it scale down the first time and then wait to scale down next, assuming that? 

The question is how quickly we make the decision to scale up or down, given that fluctuations could be at a higher frequency than the actual duration of the scaling operation itself. We keep that in mind, and the planner tries to find the cheapest size of server that will satisfy the demand for as long as would be required before it would have to scale again. Since scaling takes about 15 minutes, we make up a plan that doesn't require us to scale more often than every 15 minutes. 

So if I'm understanding correctly, there's benefit from making a decision more quickly on the up and down, and there's also benefit from jumping more naively on the up and down. I'm wondering what percentage of the benefit or the overall improvement you think comes from each. How would you go about figuring out if it's one or the other, or equally? 

The question is, compared to the reactive scaler, which only scales by one instance size at a time, how much does the predictive scaler benefit from prediction versus from scaling by multiple tiers at a time? 

I actually don’t think I really looked in detail into that answer, but from looking at the data, it's rare that we have a cluster that needs to scale by more than one instance size. So most of the time, I think the gains come from scaling at the right time rather than having to scale multiple times. 

How do you determine the confidence when you're deciding? 

The question is how do we determine the confidence in the model? We use how good of a fit the machine learning model is—how well fitted it is to the historical data, the near history. We train it on the long history, but then we look at the fitted value on the recent history. 

All right. Okay, thank you. 

Thank you, folks, again for coming. Actually, I'm not sure; there might be more food, and if there is, you should eat it. You're welcome to hang out for a while. A bunch of us normally head over to a strong brewery, so if anyone feels like grabbing a drink, then feel free to head over there, but thank you all so much.
Much for coming.


<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Okay, so hi, I'm Jesse. I'm going to be co-presenting with my colleague Matt.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "So MongoDB, as I hope you know, we make a NoSQL document database.",
      "section_level": 1,
      "section_title": "MongoDB Overview"
    },
    {
      "index_sentences": "Clients send all of their reads and writes to the primary, and the secondaries replicate those writes usually within a few milliseconds.",
      "section_level": 2,
      "section_title": "Replica Sets"
    },
    {
      "index_sentences": "Clients talk to shard servers that figure out where the data is for their queries and then forwards requests to the proper replica sets.",
      "section_level": 2,
      "section_title": "Sharded Clusters"
    },
    {
      "index_sentences": "This was originally MongoDB's database as a service, and these days we call it a developer data platform because we've added a lot of other stuff to it.",
      "section_level": 2,
      "section_title": "MongoDB Atlas"
    },
    {
      "index_sentences": "That means, and this is important for this talk, that MongoDB Atlas, MongoDB's cloud, is actually Microsoft's, Amazon's, and Google's clouds.",
      "section_level": 1,
      "section_title": "Business Model"
    },
    {
      "index_sentences": "What Mattia and I wanted to figure out was can we save money by predicting customers' workload fluctuations, choose the smallest server that will serve them for each quarter hour or so, save money, and keep some of that money from MongoDB, sharing most of that savings with the customers.",
      "section_level": 1,
      "section_title": "The Experiment: Predictive Autoscaling"
    },
    {
      "index_sentences": "When we sell MongoDB to customers, we choose these Atlas tiers like M10, M20, M30, and for MongoDB, each cloud corresponds to a particular instance size on that cloud.",
      "section_level": 2,
      "section_title": "Atlas Tiers and Instance Sizes"
    },
    {
      "index_sentences": "Vertical scaling works like this: a customer goes into the Atlas website and says, \"I'm running on M20, but I want to run on M30, so upgrade me.\"",
      "section_level": 2,
      "section_title": "Vertical Scaling Process"
    },
    {
      "index_sentences": "They can also opt into autoscaling, but that's really pretty primitive today. This is what motivated us to try to do something better.",
      "section_level": 2,
      "section_title": "Current Autoscaling Limitations"
    },
    {
      "index_sentences": "We would know how the demand rises and falls, and so we could scale up just before the extra capacity is needed and then scale down as soon as it isn't anymore.",
      "section_level": 2,
      "section_title": "Envisioned Future: Predictive Autoscaling Goals"
    },
    {
      "index_sentences": "The experiment was possible because MongoDB has a data warehouse where we keep each server's history.",
      "section_level": 2,
      "section_title": "Data and Methodology"
    },
    {
      "index_sentences": "It's got a forecaster that looks at the recent past and predicts the near future.",
      "section_level": 2,
      "section_title": "Predictive Autoscaler Components"
    },
    {
      "index_sentences": "We get that from the data warehouse, and that feeds into both a short-term and a long-term forecaster.",
      "section_level": 3,
      "section_title": "Forecaster Input"
    },
    {
      "index_sentences": "One cluster is serving some number of operations per second, which includes queries, inserts, updates, whatever, and has an instance size.",
      "section_level": 3,
      "section_title": "Estimator Input"
    },
    {
      "index_sentences": "Then, given that, stick that into the planner, and the planner just chooses what instance size to migrate to next.",
      "section_level": 3,
      "section_title": "Planner Input"
    },
    {
      "index_sentences": "So it comes up with a plan like this: sometimes start on the cheap M40 before you will be overloaded, then start the migration so that you've completed it in time.",
      "section_level": 2,
      "section_title": "Example Forecasted Workload and Plan"
    },
    {
      "index_sentences": "So now I'm going to go into more details on how we obtain those curves of future CPU.",
      "section_level": 1,
      "section_title": "Forecasting Details"
    },
    {
      "index_sentences": "But that would be silly because if I forecast my CPU and then I use that CPU to make scaling decisions, that will in turn affect my CPU.",
      "section_level": 2,
      "section_title": "Customer-Driven Metrics: Queries, Connections, and Complexity"
    },
    {
      "index_sentences": "If your cluster is heavily overloaded, you might not be able to serve as many queries as you want.",
      "section_level": 3,
      "section_title": "Independence Risk"
    },
    {
      "index_sentences": "What you see is it's not randomly distributed. You get some sort of daily pattern—night and day could be some daily fluctuation on some retail website, for instance.",
      "section_level": 2,
      "section_title": "Seasonal Components"
    },
    {
      "index_sentences": "The way we forecast is by using a model called MSTL, which stands for multi-seasonal trend decomposition using least squares.",
      "section_level": 2,
      "section_title": "MSTL Forecasting"
    },
    {
      "index_sentences": "What you’re seeing is it's actually fairly accurate for the clusters that have those seasonal components.",
      "section_level": 2,
      "section_title": "Long-Term Forecaster Accuracy"
    },
    {
      "index_sentences": "If that confidence is too low, we basically censor it; we don’t use it for predictive scaling.",
      "section_level": 2,
      "section_title": "Confidence Score and Censoring"
    },
    {
      "index_sentences": "This time it’s short-term because it's using only the very recent history—only the last hour or two of data to try to infer what’s going to happen in the near future.",
      "section_level": 2,
      "section_title": "Short-Term Forecaster"
    },
    {
      "index_sentences": "The way it works is we're basically just trying to anticipate the direction of the data currently.",
      "section_level": 2,
      "section_title": "Trend Interpolation"
    },
    {
      "index_sentences": "So we need to turn them into CPU estimates, and that’s where we have the estimator.",
      "section_level": 2,
      "section_title": "Estimator"
    },
    {
      "index_sentences": "The estimator is actually quite simple in machine learning terms. It's taking the demand—so all of those customer-driven metrics—which is the demand to the cluster.",
      "section_level": 2,
      "section_title": "Estimator in Practice"
    },
    {
      "index_sentences": "In machine learning terms, this is a regression model. We're trying to predict a numerical variable between zero and 100, and the model that we use is boosted trees.",
      "section_level": 2,
      "section_title": "Regression Model"
    },
    {
      "index_sentences": "What you can see on the left-hand side are those customer-driven metrics over time at the minute or 5-minute granularity.",
      "section_level": 2,
      "section_title": "CPU Reconstruction"
    },
    {
      "index_sentences": "For about 45% of our customer clusters, the error is under 7%. For those clusters, we think that this is actually accurate enough to make very fine scaling decisions.",
      "section_level": 2,
      "section_title": "Cluster Accuracy"
    },
    {
      "index_sentences": "When we put it all together, that's our prototype that we run on historical data.",
      "section_level": 1,
      "section_title": "Prototype Results"
    },
    {
      "index_sentences": "What we found is with our predictive scaler, we were able to be closer to the 75% target, having a cluster with less overload, underutilized, or over-utilized, which resulted in savings of about 9 cents per cluster per hour, which is pretty big when you see the scale of clusters that we have.",
      "section_level": 2,
      "section_title": "Savings"
    },
    {
      "index_sentences": "Now, for the experiment, what are we considering to do next? We mostly want to address the estimator shortcomings, the little portion of customers that we are not being able to serve right now.",
      "section_level": 1,
      "section_title": "Future Improvements"
    },
    {
      "index_sentences": "We're also running some live experiments on hardware to validate how the estimator scaling estimates are accurate.",
      "section_level": 2,
      "section_title": "Hardware Experiments"
    },
    {
      "index_sentences": "Eventually, the idea is to release this into our customer cluster and to work alongside the reactive scaler.",
      "section_level": 2,
      "section_title": "Releasing the Autoscaler"
    },
    {
      "index_sentences": "When you talk about modeling memory pressure, what is the unit? Is it like cache hit rates?",
      "section_level": 1,
      "section_title": "Q&A"
    },
    {
      "index_sentences": "The question was whether when we want to scale, instances are not available from the cloud provider.",
      "section_level": 1,
      "section_title": "Instance Availability"
    },
    {
      "index_sentences": "The question is how quickly we make the decision to scale up or down, given that fluctuations could be at a higher frequency than the actual duration of the scaling operation itself.",
      "section_level": 1,
      "section_title": "Scaling Decisions"
    },
    {
      "index_sentences": "The question is, compared to the reactive scaler, which only scales by one instance size at a time, how much does the predictive scaler benefit from prediction versus from scaling by multiple tiers at a time?",
      "section_level": 1,
      "section_title": "Reactive Scaler Comparison"
    },
    {
      "index_sentences": "The question is how do we determine the confidence in the model?",
      "section_level": 1,
      "section_title": "Model Confidence"
    },
    {
      "index_sentences": "Thank you, folks, again for coming. Actually, I'm not sure; there might be more food, and if there is, you should eat it.",
      "section_level": 1,
      "section_title": "Conclusion"
    }
  ]
}
</script>
