---
layout: post
title: "How to Build Your Own AI Data Center in 2025 Paul Gilbert, Arista Networks"
date: 2025-04-27 00:00:01
categories: podcast
tags: [podcast_script]
---


[How to Build Your Own AI Data Center in 2025 Paul Gilbert, Arista Networks](https://www.youtube.com/watch?v=3j1dHivahFQ)

[Music]

My name is Paul Gil. I'm a tech lead for Arista Networks. I have an accent, but I'm actually based here in New York City. I build, design, or help build and design enterprise networks. What we do is plumbing, so I'm not going to talk about agents, but more kind of how you train models, what the infrastructure looks like, and how you do inferencing on the infrastructure.

I normally teach people the very basic stuff, so you guys probably know this already, but these are new terms for us when we built computer networks. People will come to us and say job completion time barrier. I'm pretty sure you guys know that the INF. The question I get all the time is we can build a network to train a model. There's an algorithm maybe you can use to look at what you need, but then, you know, what's inference? It's changed a lot now because of chain of thought and reasoning models. The inference is a lot different. It used to be X, but now it's Y. I'm pretty sure you guys have seen this slide, but I use these just to talk to enterprises around kind of what they might be thinking in GPU size.

Dr. Wed Sosa came up with this. On the left, there is the training, and on the right, there is the inference. It's kind of, you know, on one you have times 18, times the other, times two. Again, I think that changes now with chain of thought and reasoning. Not too sure kind of which way it's going to go. At the bottom, there was a really interesting one again which I show customers because most of the enterprises I talk to don't understand models and how they work. I know a little but not a lot. The model they trained down here was 248 GPUs for one to two months, and then when you go to inference after fine-tuning in alignment, it's four H100s for inference. 

So we talk to people about building different types of networks, which I'll speak about, but I always start at the beginning. I got this slide, and I think it's really interesting. You know, LLMs were kind of just a tiny little bit of inference, but now with the next generation models, it's a lot. So this is what I build, and these are new terminologies for us from the networking world. The backend network is where you connect GPUs to when we build these networks. They're completely isolated because GPUs are really expensive. They take a lot of power, and they're really hard to get a hold of. 

So when people build AI networks in the enterprise, we don't connect anything else to these networks. The bottom part of that, the backend network, has eight GPUs per pool on those servers. They can be Nvidia, they can be Supermicro, they can be whatever. They will go into a high-speed switch. At the bottom, you have a leaf switch and a spine switch, and nothing else attaches to that network. On the frontend network is where you get storage from to train the model. Obviously, you know, the GPUs synchronize, they do something, they calculate, they produce an algorithm, and they call for more data. That's kind of the cycle.

The frontend network is not as intense as the backend network. Depending on the model that you train, the GPUs will actually work at 400 GB. For us in the enterprise, I've built some big data centers, but I've never seen anything like that. In the networking world, this is a completely new world to us, and we make the networks as simple as possible because, again, these are really expensive and people want to get their money's worth. They want these running 24/7. We do IB, IBGP, or E-BGP, just really simple protocols. 

I'm sure most of you have seen this, but again, I kind of teach this. This was an infrastructure presentation, but you know, that's kind of the back of a H100, probably the most popular AI server out there right now. You can see in the middle there are four ports, but those four ports are broken out into two, so there are eight ports. Those are the GPU ports, and then over to the left, there are the Ethernet ports that we connect to. We've never seen anything like this before. When you first speak to people about this, I've seen servers with 400 gig, and I do a lot of the big financial networks, but never before have we seen servers that can put this type of traffic onto a network.

Yeah, they always ask me about this, and I got this from an Nvidia slide. There's this thing called scale up and scale out. I'm not really sure about scale up. When my customers buy these servers, they always have eight GPUs in them. You can't add anything to an Nvidia server. If you go with the outsourced model, it's an HGX or a third party. You don't really add things to it. So I don't see scale up, but obviously, you can build a network so that you can add more GPUs. We can start very small and can go up to hundreds of thousands of GPUs, not in the enterprise, but the cloud scale guys do.

So what's different for us? Again, it's hardware and software. The hardware is those GPUs. We're not used to them. The first time I tried to configure one, it took me hours and hours because I'd never seen them before. Other stuff I've seen pretty quickly. You have software, so CUDA and Nickel are probably two of the biggest protocols, and you guys know more about that than me. But we had to understand not CUDA but Nickel because it has a collective. We had to understand how a collective works because that will put traffic onto the network in a certain way. The hardware was completely different again. We had the eight 400 Gbps and the four 400 Gbps facing the frontend network. 

The other thing was data center applications, kind of web app database. They're really easy; they go from one to the other in different parts of the network. If one fails, you have some kind of load balancer, and it fails over. This is AI networks, not like that. The GPUs all speak; they'll talk to each other, they'll get stuff, they'll send stuff, and if one fails, the job might fail. It might recover, but it's a different concept to us. It's hard to imagine. Traffic is bursty because all of these GPUs, if you have 1,000 GPUs of 400 gig, they will all burst at the same time. If they can, they will burst at 400 gig, so there's a lot of traffic on the network, and I've never seen anything like that. 

When we build these networks, we don't build them oversubscribed; we build them one to one. In the data center world, we used to do 1 to 10. It went down to probably 1.
to three but never one to one because it's just really expensive to build that kind of bandwidth. But with AI networks, we need to, so we have no oversubscription in the network. 

From our point of view, if you look at what one of these servers can put on the network, just an H100 is 8,400 gig GPUs and 4,400 gig is 4.8 terabytes, which is... and that's just one server. The storage size at the front end is probably nowhere near that, but the back end is always wire rate. And then 800 gig is probably... the bees are just around the corner. I think in March there'll be a release. I think there are some people that have them, and those are 800 gig. We support 800 gig today on the network, but each one of those servers has a possible 9.6 terabytes per server. 

Most people in my world, in the Enterprise world, come from servers at maybe 1, 2, 3, or 400 gig Ethernet, but nothing like 9.6 terabytes per server. So the other problem we have is the traffic patterns. When we load balance from kind of leaf to spine, we use a thing called entropy, which is the five tuple: IP address, port, MAC address. We do pretty good load balancing, but with GPUs it's just one IP address, and it can sometimes match to a single uplink and oversubscribe it, which would be really bad because you start dropping an awful lot of packets. 

So we have to take a lot of care on how we load balance within the AI network or how we build the back end and the front end. We have some pretty cool tools where we don't now look at the five tuples; we actually load balance on the percent of bandwidth that's being used on the uplink, and we can get up to about 93% utilization on all the uplinks to the downlinks, which is pretty good. 

Again, one thing that's really new to us is a single GPU can fail, or a set of GPUs. If they fail, sometimes the model will stop. I know checkpoints, but a single GPU failure is a problem for us. One of the big problems that we've always had is optics and transceivers and DOMs, which is the rates and the loss between them and the cables, etc. When you start building these networks with thousands of GPUs, you will have a lot of cable problems and you will have a lot of GPU problems. So it's really hard for us because, again, this world is new to us. 

Power... you know, you've read the newspapers. Everyone's trying to buy nuclear power stations to power these things. The average rack in the data center today is about 7 kW to 15 kW, and you can put like 10, one U racks into those, and you'll be fine. When customers come to me and say, "Yeah, we finally got GPUs," whatever, I ask them, "What kind of racks have you got?" They say, "We're going to put them in," and then you can only put one of these servers in one of those racks because they actually draw, with 8 GPUs, 10.2 kW. So you need new racks. 

Most enterprises are now waking up to this, and they're building racks between 100 to 200 kW, and they're water-cooled. There's no way you could air-cool them in a data center, so that's a whole new concept to people as well. Water-cooled racks... traffic is both ways, which again is new to us. So north-south, you know, in a regular data center, you have users coming in: database, app, web, whatever, and it comes in, it goes out. 

But in the AI world, when the GPUs speak, that traffic is east-west because it's speaking amongst each other. Then when they ask for more data from the storage network, it's north-south. So you have both traffic patterns. The east-west traffic is really bad. That's kind of where they run wire rate. The front end to the storage is much more calmer because most storage vendors can't put that kind of traffic on the network right now. 

I'm pretty sure they will one day, but they're more around 100 to 200 gig. In a network, there's a certain amount of buffering on these switches, and buffering is bad because it means it can't send traffic somewhere because something else is not receiving the traffic. So you need congestion control and feedback. Right now we use something called RoCE V2, which is two parts of RoCE V2. There's PFC and ECN. 

If you were building an AI network, your engineers, your network engineers, will definitely know about this. ECN is an end-to-end flow control. If there's congestion somewhere in the network, packets are marked. They go to the receiver, the receiver sends back to the sender, "You need to slow down because there's congestion." It goes through an algorithm; it pauses for a while, slows down, and if it doesn't get any more ECN packets, it speeds up again. PFC is basically stop. My buffers are full; I can't take any more. 

So you have kind of a slow feedback mechanism with ECN and kind of an emergency stop with PFC. The networks we build are really simple. We don't have things like in regular data centers. We have DMZ with firewalls, load balancers, etc. We have connections to the Internet; we have L4 through L7 service—a whole bunch of stuff. 

When we build these networks, they're totally isolated. The GPU back end is completely isolated. The front end possibly could have connections to something, but even then it's so expensive to build that you don't want to take the chance. 

On-demand applications that we're used to, if something fails, or if something fouls, something will recover. You may get a little skip or a jump, but if you've done the right thing, it's not going to be that bad. In this world, if something fouls, the model may foul, and the call that you get into the operation center is a different call than you get if you're at kind of restarted, and everything's good again. 

The other thing is collectives. Nickel will go out and work out kind of where the GPUs are and what to do with them, but there are kind of different designs. So I tell my customers to speak to your data scientist and your programmers, developers, and find out what they're doing and what kind of models they're building because it can affect the network and how you build it and how you design it. 

So networks are totally isolated. Things are moving fast. We're at 800 gig right now, which is... you know, we have been for probably a year. We will see 1.6 terabytes on the network probably by the end of this year or early 2027, and it will just keep grinding and grinding. These models will get bigger and bigger and consume more and more. 

I'm pretty sure visibility in telemetry... I know all my customers. The call that they get when a model fails because the network is a problem is a different call than they're used to. So we put different telemetry and visibility in there to make sure that if things are going wrong on the network, they know about it; hopefully before they get that call. 

So yeah, I work for Arista.
The operating system is called EOS and we have a whole bunch of features there. So if you were building an AI Network, I'm not sure that you guys speak to the engineers, but this is the type of things we talk about. Lossless ethernet; everyone's thinks that when you train a model, you can't drop packets. I've seen it and you can. I think dropping packets is okay, consistent latency is okay, but if you drop so many packets, obviously it's a problem. 

So flow control loss of EET is really key. ECN and PFC are part of that. As I said before, they're flow control mechanisms. One is a slow down please and the other one is a stop. As you know, because GPUs are synchronized, if something slows down, you slow down one pull one GPU, everything slows down. So you really got to be on top of kind of the over-subscription. 

If you are getting Qin, we have really good buffer. We can adjust buffers. We have different kinds of switches for different places in the network. But we found that models send and receive a particular size packet, and what we do is we adjust those buffers to accept those types of packets. Buffering is a really expensive commodity in switches in networking, and if you can find a way to allocate the buffer because exactly tuned to the packet sizes, it's a win-win. We've worked out how to do that, which is good. 

Monitoring is really key for us. I tell my customers there's probably five things you want to do. One of them is RDMA, these networks train using RDMA, which is memory to memory writes rather than going CPU to memory. RDMA is a complex protocol and it has 10 or 12 maybe more kinds of error codes. So if the network starts seeing problems and starts dropping packets, rather than just drop the packet on the floor, we can actually copy that packet to a buffer or send it somewhere or just the headers and why we dropped that packet. 

If you think about it, it's really cool. Most networks will in congestion, your buffer fills up. You're going to drop the packets. We'll drop the packet but we'll actually take a snapshot of the packet and the headers and any RME information in it, and we'll tell you why we dropped it. Another thing we have, which is really, we have an AI agent from the networking point of view. We can look at what's going on, but we don't really have any visibility into the GPU.

Now we have an agent which is an API and some code that we load on the GPUs in Nvidia, and they will speak to the switch. So that agent will say to the switch, how are you configured? PFC and those flow control mechanisms have to be configured correctly, 'cause if they're not, it will be a disaster. So the GPU will speak to the switch and say, this is how I'm configured. The switch will say, yeah, you're good, we understand each other. 

The second thing it does is gives you a whole bunch of statistics about packets received, packets sent, RDMA errors, RDMA issues in there so you can correlate now if the problem is a GPU or if it's a network, which is a huge step forward for us. Another really cool feature we have is smart system upgrade. If you've used the routers and switches, you know you have to upgrade the software sometimes to get new features or sometimes to fix security vulnerabilities on that switch. 

We've worked out a way now that you can upgrade code without actually taking the switch offline. So if you have 1,24 GPUs with 64 switches in your network, you can actually upgrade those and the GPUs can keep working. It's a real big step forward for us. 

For us again, I don't know if you can see, but no over-subscription on the back end. You can't because the GPUs use everything you give them. Address-wise is really important for us; it's a point-to-point connection. You could use IPv6 if you have IPv4 address space problems. All my customers, I tell BGP because it's the best protocol out there. It's really simple and it's really quick. 

If you have multi-tenancy, if you have a lot of different business units, lines of business using the network, you need things like advanced load balancing. We actually look at the collective that you're running load balance on that collective now, which we call cluster load balancing. You could deploy it, Rocky. I tell all my customers to do it because if you don't, your network's going to melt down and you're not going to know why. 

These things will give you an early warning system that you need to do something with your network. So they're really key to have, and visibility in telemetry is really good at all times because in the network operations center, you always want to be aware of the problem before you get the call from the developers and the people that have paid a lot of money for that network. 

I'm running out of time here, but this is kind of a 1,400 gig cluster, what it would look like spine and leaf. Again, no over-subscription, 800 gig links between the leaf and spine, 400 gig down to the GPUs. This is a 4,000 cluster. These are the bigger boxes, these are 16 slot. One of these boxes can take 576, 800 gig GPUs, so 1150 to 400 gig GPUs. If you're building clusters with thousands of GPUs, then this would be the box for you, the 7800 series. 

Putting it together, this is kind of what we would build. There are three networks here: there's a backend network where your GPUs live, there's a front-end network where the storage lives, and then there's the inference that you take the model and put it somewhere else. 

I'm out of time. The other thing is, you know, there's Ultra Ethernet Consortium. I don't know if it's of interest to you. Ethernet hasn't changed; it's built probably 30 years. There are some things it could do better around congestion control, around packet spraying, around the NICs talking to each other. 

There's this thing called Ultra EET Consortium. Version 10 will be ratified probably Q1 2025, and it's a kind of different way of building networks. You probably won't see them until Q3 or Q4, but most of the cloud scale guys are really keen on this because it puts a lot more into the NICs and takes a lot more out of the network. 

So we can do what we're good at, which is forwarding packets. In summary, for us, we have the front end which is storage, the back end which is the really important part for us. That part is really bursty; the GPUs are all synced, so they send and receive at the same time. If you have a slow GPU, that's a barrier because it stops everyone else. Job completion time is what matters to us. 

If we get the call that my job completion time was 1 hour yesterday, it's 4 days today, it's probably our problem. Models can checkpoint, but they're really expensive.
That and I'm done.  

[Music]

---

> This is an experimental rewrite

**Paul:** My name is Paul Gil, and I'm a tech lead for Arista Networks. I have an accent, but I’m based here in New York City. My work focuses on building, designing, and assisting in the creation of enterprise networks. We essentially handle the plumbing of networks, so I won’t delve into topics like agents but rather discuss how to train models, what the infrastructure looks like, and how you perform inferencing on that infrastructure.

**Paul:** Typically, I start by teaching the basics, so you might be familiar with some of this information. When we built computer networks, we often had clients come to us mentioning terms like "job completion time barrier." I'm sure you’re all aware of the term "inference." The frequent question I receive is about building a network for training models. There are algorithms that can help identify your needs, but inference has evolved significantly due to advancements in chain of thought and reasoning models. It has changed from what it used to be; it was once represented by X, but now it’s represented by Y. I’m sure many of you have seen the slide I use to illustrate GPU size considerations for enterprises.

**Paul:** Dr. Wed Sosa developed this visual aid. On the left side, you have training, while the right side represents inference. The relationship between the two varies—one is often multiplied by 18 while the other by 2. This relationship is still shifting, especially with emerging chain of thought and reasoning paradigms. A particularly captivating piece of data I share with customers involves model training that utilized 248 GPUs over one to two months. After fine-tuning and alignment, the inference phase requires just four H100s.

**Paul:** We engage with clients about building different types of networks, which I’ll discuss, but I always begin with foundational principles. I find this slide particularly interesting—the role of Large Language Models (LLMs) has significantly expanded from being a minor component of inference to now playing a major role with next-generation models. This is the new environment I am working to establish, along with the novel terminologies we’ve embraced from the networking realm. 

**Paul:** The backend network essentially serves as the connection for GPUs when we construct these networks. They must remain entirely isolated since GPUs are both costly and power-intensive, and securing them is challenging. Consequently, in enterprise AI network construction, we refrain from connecting anything unrelated to these networks. Each pool in the backend network features eight GPUs on those servers, be they Nvidia, Supermicro, or of another variety. These connect to high-speed switches featuring a leaf switch at the bottom and a spine switch—no additional attachments link to that network.

**Paul:** The frontend network is responsible for storing model training data. The GPUs synchronize their actions, process calculations, and produce algorithms while continuously requesting more data; that's the rhythm of operation. The frontend network’s intensity pales in comparison to the backend’s. The GPUs can operate at 400 GB depending on the model being trained, and I’ve created some large data centers, but I’ve never encountered anything like this before. 

**Paul:** In the networking realm, this represents a new frontier for us, and we strive to make these networks as efficient as possible, given the significant financial investment involved. Clients expect these systems to run 24/7. We utilize simple protocols like IB, IBGP, or E-BGP. 

**Paul:** I’m sure many of you are familiar with this infrastructure overview, but in case you’re not, what you’re looking at is the back of an H100 server, which is arguably the most popular AI server currently. In the center, there are four ports that break down into eight GPU ports. On the left, you’ll find Ethernet ports for connections. We’ve rarely encountered setups like this before. 

**Paul:** Many clients often inquire about scaling. I gleaned this from an Nvidia presentation that discussed concepts of scaling up and out. Personally, I’m uncertain about the scaling up concept. When clients purchase servers, they typically possess eight GPUs, with no option for additional units in an Nvidia server. In an outsourced model, such as HGX or a third party, the same limitations apply. 

**Paul:** What's distinct in our domain is that we deal primarily with hardware and software. GPUs are foreign to us; when I first attempted to configure one, I spent hours figuring it out because I lacked experience. Other technologies have been easier to adapt to. In terms of software, CUDA and Nickel are significant protocols that, while many of you may already know, we primarily focus on Nickel to comprehend how collectives operate, as it impacts network traffic in specific ways.

**Paul:** The applications used in data centers, such as web app databases, are relatively straightforward—they communicate across different network parts and typically employ load balancers to handle failures. AI networks differ from this structure; GPUs communicate with one another, sharing information and requesting resources. If one GPU fails, it can halt the job, complicating recovery efforts. 

**Paul:** This burstiness poses an additional challenge. For instance, if you have 1,000 GPUs, each capable of 400 GB, many will burst simultaneously, creating substantial network traffic—something I’ve never witnessed before. In network construction, we avoid oversubscription, opting instead for a one-to-one setup. Historically, in the data center industry, we’ve practiced oversubscription levels like 1 to10 or even down to 1 to 3, but a one-to-one ratio is an expensive endeavor.

**Paul:** To further illustrate, just one H100 server boasts the capability to transmit 8 GPUs at 400 GB, totaling 4.8 terabytes. In contrast, at the frontend, the storage size does not compare, while the backend consistently operates at wire rate. As we look ahead, I believe services relying on 800 GB are just around the corner, with expected releases in March. Presently, our networks can support 800 GB, with each server capable of reaching up to 9.6 terabytes.

**Paul:** In the enterprise field, most come from servers configured for 1, 2, 3, or 400 Git Ethernet, but nothing has prepared us for servers capable of 9.6 terabytes. Another challenge we face involves traffic patterns. For load balancing between the leaf and spine, we use a method called entropy, based on a five-tuple: IP address, port, MAC address. This method generally performs decently, but with GPUs, we often have a single IP address that can lead to congestion, which results in dropped packets—a significant concern.

**Paul:** Managing AI networks requires careful consideration of load balancing techniques, particularly in the backend and frontend configurations. Utilizing innovative tools, we now balance based on the percentage of bandwidth in use, allowing for approximately 93% utilization across all links to ensure efficiency.

**Paul:** A novel concept for us is dealing with GPU failures. When a GPU or a group fails, the entire model may suffer. Although we’re aware of checkpoints, a single GPU failure can be problematic. Historically, we've contended with issues related to optics, transceivers, and loss rates—building networks with thousands of GPUs can reveal many cable problems.

**Paul:** Regarding power consumption, the industry is abuzz with news about nuclear plants being sought to meet rising demands. Presently, average data center racks utilize between 7 to 15 kW of power, accommodating about ten one-U racks. Clients often come to me excited about acquiring GPUs, and when I ask about rack specifications, many quickly realize they can only fit one GPU server per rack due to the 10.2 kW consumption of an eight-GPU setup.

**Paul:** Enterprises are starting to take notice and are increasingly designing racks capable of handling between 100 to 200 kW, opting for water-cooling solutions, as air cooling is no longer viable. This transformation presents a significant paradigm shift for many. In the AI world, traffic flows in both directions. Unlike traditional setups where data flows north-south as users connect to databases and applications, GPU communications result in east-west traffic within the network.

**Paul:** This east-west traffic presents challenges, particularly since it often operates at wire rate. Comparatively, the traffic from the frontend to storage remains subdued, as most storage vendors are currently not capable of supporting the full velocity realized in AI networks—generally between 100 and 200 gigabit speeds at this stage. 

**Paul:** Networking switches include a level of buffering, which can hinder data transfer; poor buffering leads to packet loss during congestion. For now, we use RoCE V2 for congestion management, which comprises two elements: PFC and ECN. Any network engineer tasked with building an AI network will need to understand these protocols.

**Paul:** ECN provides end-to-end flow control, marking packets during congestion to alert the sender to reduce speeds. This process involves algorithms that regulate transmission rates. PFC acts more like a panic stop mechanism that halts traffic altogether if buffer thresholds are breached.

**Paul:** Our networks are intentionally kept simple. Unlike typical data center environments that include DMZ setups, firewalls, load balancers, and internet connections, our GPU backend operates in complete isolation. Although the frontend may connect with external systems, the extensive costs associated with construction discourage unnecessary risks.

**Paul:** We are all accustomed to on-demand applications where failures merely prompt temporary disruptions. In the AI realm, failures can lead to complete model breakdowns, creating distinct operational challenges. 

**Paul:** Another important aspect is collectives. The Nickel protocol gauges GPU locations and operational dynamics, thus influencing network configurations. I strongly advise my clients to communicate with their data scientists and developers about their modeling processes, as these choices directly affect network design.

**Paul:** As a side note, the network’s isolation is critical. Our capabilities have evolved rapidly; we’re currently at 800 gig but predict we’ll achieve 1.6 terabytes by late this year or early 2027. The trajectory of model development continues to expand exponentially.

**Paul:** I can assure you that visibility and telemetry are essential. Whenever a model fails due to a network issue, the repercussions differ from what my clients are accustomed to. Consequently, we incorporate various telemetry systems to ensure that they stay informed about network issues proactively—before those troublesome calls arrive.

**Paul:** I'm part of the team at Arista, where our operating system is EOS, accompanying a host of features. When contemplating the assembly of an AI network, I encourage discussions with engineers on elements such as lossless Ethernet. Many believe that packet loss is unavoidable during model training, but I can assure you it is indeed a possibility. 

**Paul:** While minimal packet drops might be acceptable, excessive losses clearly present issues. Thus, flow control mechanisms like EET are vital. As previously mentioned, ECN and PFC facilitate this process. Since GPUs operate in synchronization, if one GPU’s speed halts, it can stall the entire system.

**Paul:** If you’re sourcing equipment, we have impressive buffer capabilities and switch types tailored for various network sections. Understanding how models send and receive specific packet sizes enables us to optimize buffer allocations efficiently—a substantial win in networking.

**Paul:** Monitoring remains fundamental. I often tell my clients there are five primary objectives to pursue. One such goal pertains to RDMA networks, which utilize memory-to-memory writes rather than transitioning from CPU to memory. This complex protocol incorporates numerous error codes. Therefore, if network issues arise leading to packet drops, instead of discarding those packets, we're able to either buffer them temporarily or preserve critical headers to analyze the failure causes.

**Paul:** This innovation exemplifies how instead of merely discarding packets in cases of congestion, we can save snapshots of those packets alongside relevant header information. Additionally, we’ve developed an AI Agent from the networking perspective, enhancing insights into the GPU landscape.

**Paul:** This agent connects through an API and is installed on Nvidia GPUs, communicating essential configurations to our switches. For instance, it will ask the switch for current settings, and if they align correctly, both systems maintain operational harmony.

**Paul:** Moreover, the agent provides valuable statistics, tracking packets sent and received, as well as any RDMA errors. This newfound correlation helps identify whether issues stem from GPUs or network complications, marking significant progress for us in understanding system dynamics.

**Paul:** Another exciting feature we now offer is Smart System Upgrade. In traditional router and switch environments, software upgrades necessitate taking systems offline, a known inconvenience. With our latest advancements, upgrades can be executed while allowing GPUs to continue functioning—an impressive stride forward.

**Paul:** To emphasize again, there cannot be oversubscription at the backend because GPUs will utilize all available resources. Accurate addressing is crucial; we maintain point-to-point connections and are accommodating IPv6 solutions should IPv4 addresses present challenges. I consistently advocate for BGP as a straightforward, efficient protocol.

**Paul:** If you maintain multiple tenants or business units within the network, you may require advanced load balancing methods. We now base load balancing on the collective models in use—what we call cluster load balancing. I advise my clients to implement this measure since neglecting it can lead to significant outages with unclear causes.

**Paul:** These strategies afford early warnings on network status and mitigate issues before they escalate into crises, making visibility and telemetry paramount for network operations. 

**Paul:** As I near the end of my presentation, I want to illustrate what a 1,400 gig cluster looks like. It consists of spine and leaf architectures, once again adhering to the no oversubscription approach, with 800 gig links connecting the leaf to the spine and subsequently 400 gig leading to the GPUs. 

**Paul:** If you’re constructing substantial clusters, you’ll find a configuration like the 7800 series box invaluable—it can accommodate up to 576 800 gig GPUs or 1150 of the 400 gig GPUs to support extensive workloads.

**Paul:** To put it all together, the arrangement encompasses three networks: the backend housing your GPUs, the frontend allocated to storage, and the inference network for deploying finalized models.

**Paul:** Lastly, I want to mention the Ultra Ethernet Consortium. Ethernet standards have remained unchanged for nearly three decades. However, improvements surrounding congestion control and inter-NIC communications are forthcoming.

**Paul:** The Ultra ET Consortium is in line for ratification in Q1 2025, offering innovative approaches to network construction. You may not see immediate impacts until Q3 or Q4, but the cloud scale sector is enthusiastic about these developments, as they continue to evolve networking capabilities.

**Paul:** In conclusion, we approach the front-end for storage and focus on the backend, which is vital for maintaining functionality. The unpredictable, bursty nature of GPUs requires seamless synchronization, meaning that any slowdown—whether from job completion times increasing from one hour to four days—likely indicates a network-related issue. 

**Paul:** That wraps up my presentation! Thank you for your time.

[Music]

<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "My name is Paul Gil. I'm a tech lead for Arista Networks.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "I normally teach people the very basic stuff, so you guys probably know this already,",
      "section_level": 1,
      "section_title": "Basic Concepts and Enterprise Concerns"
    },
    {
      "index_sentences": "Dr. Wed Sosa came up with this. On the left, there is the training,",
      "section_level": 1,
      "section_title": "Training vs. Inference"
    },
    {
      "index_sentences": "So we talk to people about building different types of networks, which I'll speak about,",
      "section_level": 1,
      "section_title": "AI Network Architecture"
    },
    {
      "index_sentences": "So when people build AI networks in the enterprise, we don't connect anything else to these networks.",
      "section_level": 2,
      "section_title": "Backend Network (GPU Interconnect)"
    },
    {
      "index_sentences": "On the frontend network is where you get storage from to train the model.",
      "section_level": 2,
      "section_title": "Frontend Network (Storage Access)"
    },
    {
      "index_sentences": "I'm sure most of you have seen this, but again, I kind of teach this.",
      "section_level": 1,
      "section_title": "Hardware Considerations"
    },
    {
      "index_sentences": "Yeah, they always ask me about this, and I got this from an Nvidia slide.",
      "section_level": 1,
      "section_title": "Scaling AI Infrastructure"
    },
    {
      "index_sentences": "So what's different for us? Again, it's hardware and software.",
      "section_level": 1,
      "section_title": "Unique Challenges in AI Networking"
    },
    {
      "index_sentences": "The other thing was data center applications, kind of web app database.",
      "section_level": 2,
      "section_title": "Reliability"
    },
    {
      "index_sentences": "When we build these networks, we don't build them oversubscribed; we build them one to one.",
      "section_level": 2,
      "section_title": "Network Oversubscription"
    },
    {
      "index_sentences": "From our point of view, if you look at what one of these servers can put on the network,",
      "section_level": 2,
      "section_title": "Bandwidth Requirements"
    },
    {
      "index_sentences": "So the other problem we have is the traffic patterns.",
      "section_level": 2,
      "section_title": "Traffic Patterns and Load Balancing"
    },
    {
      "index_sentences": "Again, one thing that's really new to us is a single GPU can fail, or a set of GPUs.",
      "section_level": 2,
      "section_title": "Component Failure"
    },
    {
      "index_sentences": "Power... you know, you've read the newspapers.",
      "section_level": 2,
      "section_title": "Power and Cooling"
    },
    {
      "index_sentences": "In a network, there's a certain amount of buffering on these switches, and buffering is bad",
      "section_level": 2,
      "section_title": "Congestion Control"
    },
    {
      "index_sentences": "The networks we build are really simple.",
      "section_level": 2,
      "section_title": "Network Isolation and Security"
    },
    {
      "index_sentences": "On-demand applications that we're used to, if something fails, or if something fouls,",
      "section_level": 2,
      "section_title": "Application Fault Tolerance"
    },
    {
      "index_sentences": "The other thing is collectives. Nickel will go out and work out kind of where",
      "section_level": 2,
      "section_title": "Collectives"
    },
    {
      "index_sentences": "So networks are totally isolated. Things are moving fast.",
      "section_level": 1,
      "section_title": "The Future of AI Networking"
    },
    {
      "index_sentences": "I'm pretty sure visibility in telemetry... I know all my customers.",
      "section_level": 1,
      "section_title": "Monitoring and Telemetry"
    },
    {
      "index_sentences": "So yeah, I work for Arista.",
      "section_level": 1,
      "section_title": "Arista's Approach to AI Networking"
    },
    {
      "index_sentences": "So flow control loss of EET is really key.",
      "section_level": 2,
      "section_title": "Key Technologies"
    },
    {
      "index_sentences": "Monitoring is really key for us. I tell my customers there's probably five things",
      "section_level": 2,
      "section_title": "Monitoring and Management Tools"
    },
    {
      "index_sentences": "For us again, I don't know if you can see, but no over-subscription on the back end.",
      "section_level": 2,
      "section_title": "Best Practices"
    },
    {
      "index_sentences": "I'm running out of time here, but this is kind of a 1,400 gig cluster,",
      "section_level": 1,
      "section_title": "Example Architectures"
    },
    {
      "index_sentences": "Putting it together, this is kind of what we would build.",
      "section_level": 1,
      "section_title": "Network Separation: Backend, Frontend, and Inference"
    },
    {
      "index_sentences": "I'm out of time. The other thing is, you know, there's Ultra Ethernet Consortium.",
      "section_level": 1,
      "section_title": "Ultra Ethernet Consortium"
    },
    {
      "index_sentences": "In summary, for us, we have the front end which is storage, the back",
      "section_level": 1,
      "section_title": "Summary and Key Takeaways"
    }
  ]
}
</script>
