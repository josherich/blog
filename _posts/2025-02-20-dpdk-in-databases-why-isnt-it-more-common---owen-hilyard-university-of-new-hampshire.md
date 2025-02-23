---
layout: post
title: "DPDK in Databases: Why Isn’t It More Common? - Owen Hilyard, University of New Hampshire"
date: 2025-02-20 00:00:01
categories: short
tags: [podcast_script]
---

So one question that kind of came up in my mind repeatedly while I was learning is why don't we see more DPDK in databases? If you look at industrial databases, there isn't actually a lot that use DPDK, and that you'll see a little later why that is such an odd thing. 

But I would like to, in the venerable tradition, start with a quote that kind of sums up the feelings of the database community around networking right now. So, TCP/IP is a pig; it should be sent to the home for tired software. We need something lighter weight, better, easier to use. Kernel bypass networking would be nice. 

Michael Stonebreaker at HPTS 24—so you may know Michael Stonebreaker from Postgres, or the 2005 John von Neumann Medal, or his 2014 Turing Award—and the idea of kernel bypass being too hard to be used widely was echoed at that workshop a lot. That is, most of the largest names in databases—RDMA is simply not an option; we can't do RDMA from Virginia to Ireland, and we need geo-distribution. 

Database specialists, they want to use DPDK because it is really the only viable option for something that will run pretty much everywhere and give good performance. But the barriers to entry are too high. This comment in particular was referencing the kernel TCP stack, but there are frustrations of the kernel TCP stack, and then there's a lot of frustrations that are directly tied to TCP, the protocol. 

So where is this coming from? If you look here, you'll see a modern distributed database. This is Amazon's DynamoDB. Every single arrow is a network connection, and this is the minimal deployment. So when you are targeting single-digit millisecond response times with multi-data center replication, like Amazon does, every single microsecond starts to really count. 

TCP is not good for databases when that happens because head-of-line blocking starts to become a major issue. In addition, the fundamental algorithms of distributed systems are specified in terms of message passing—logical clocks, Paxos, Raft, etc. So when you have a consensus algorithm which already provides a significantly stronger ordering than TCP provides, TCP becomes kind of unnecessary, nearly overhead. 

Additionally, it should be remembered that TCP's original goal as a protocol was to get the data while sending as few bytes as possible. That is not what databases mostly want to do; they want to give me the lowest latency possible and the highest throughput possible. As a result, they will try to do message passing over TCP, and they face a massive API mismatch. 

So the logical solution would be, okay, let's use DPDK—we can fix the throughput or the latency issue depending on what your database wants. But it's hard to use, and importantly, it sounds too good to be true. This is kind of an important dual-part issue. 

A modern programmer is expecting to send this blob of bytes to that other server via an encrypted tunnel API, and that is one function without a whole lot of setup. They are not expecting to send these bytes onto the wire or, at a bare minimum, they want an abstraction wrapper—something like Boost Asio. 

And second, DPDK is so much faster than normal networking that it sets off too-good-to-be-true alarms in everyone's heads because they see numbers close to RDMA and they assume, oh, it's some exotic hardware. So database people are typically storage specialists or distributed system specialists, not network specialists, and that means they're not sort of in the right frame of mind for looking at DPDK as I think everyone in this room looks at it. 

This gets compounded when most network stacks for DPDK implement TCP, which is not great for databases, and the ones that implement message passing are often academic and not really production-grade. So a pitch for DPDK very quickly turns into a pitch to write an entire network stack, and that requires more knowledge than a company is willing to invest because they already think, oh, this is too good to be true; there's no way it can actually do that. 

So some of you are thinking DPDK is too fast. So let's look at Micah. It is, as far as I'm aware, the first datastore ever built with DPDK back in 2014 using DPDK 1.4.1. At the time, MCD was already a production-grade cache, and MC3, RamCloud, and Mastery were all the top-performing things across academia and industry to compare it to. So this is a massive mismatch—this is an 80 times performance increase versus MCD for functionally the same task. 

It's also important to note Micah is not a distributed database. A distributed database would have a bigger difference here, and much of these performance gains are just from being more efficient at talking to the single client that it's speaking to. So if you are looking at something which, on a dual 8-core Xeon from more than a decade ago, which is outperforming MCD, you say, okay, let's step ahead 10 years—still not a great graph for the kernel. 

So this is an AMD Epic 9684X. We have 6X our core count; our memory has gone up by almost two orders of magnitude, and Micah is still 10 times faster after 10 years of hardware development if you compare M on original hardware to MCD on modern hardware. 

This is something that happens over and over again. DPDK isn't competitive with a normal Ethernet stack; it's competitive with RDMA and FPGAs in a lot of cases. Managing to be similar to an equal core count CPU a decade later is a big performance win. Managing to match the cores without a socket interconnect a decade later is in "Are we sure that benchmark is accurate?" territory—10X the throughput of more cores later without a socket.
467.56 - 5.479: Interconnect a decade later is frankly unbelievable, and I would be checking the Benchmark. 

473.039 - 5.481: So even if we drop performance by 10x to account for good design in Mah, that's still a hum performance increase. 

481.68 - 4.28: You can see how someone coming into DPDK or coming into an organization pitching DPDK, and they say, "Yeah, we can probably do 10x 20x what you're doing right now." 

492.72 - 7.879: You have no credibility, and people think, "No, that's snake oil." 

500.599 - 7.401: My solution to this is to provide a highly easy-to-use interface where DPDK developers can make sort of generically good decisions for users. 

512.64 - 4.759: Many modern applications are built around message passing, not just databases, and most developers don't want to write a network stack. 

519.719 - 8.841: Implementing a DPDK easy mode allows someone to kind of take it and plug it into their code base, whereas a production version of DPDK is sort of the thing that we all build where you have full control of the networks. 

540.56 - 4.2: That's really difficult to integrate into an existing code base that wasn't built with DPDK in mind, and that amount of effort is hard to justify almost no matter how much performance you gain. 

556.56 - 6.04: I think that this will help adoption, and it will help produce more examples of DPDK being fast to help fight against that incredulity problem. 

570.0 - 5.04: As a design sketch, optionally in order message passing with multiplexed logical sequences of messages over a connection, give it the option for "Yes, I would like compression," and "Yes, I would like encryption." 

583.279 - 5.68: We can have a discussion about specific protocols later. 

588.959 - 4.201: Um, reuse send message and receive message; we can change basically everything else but keep the verbs the same so people have something to latch onto. 

597.16 - 5.64: Then a listen API for new connection handling offers an embedded mode via a library that operates very similar to traditional VPDK. 

608.399 - 5.641: You take control of all the NICs on the system and a service mode, which acts as almost a microkernel component. 

616.839 - 3.641: This means that people don't have to deal with multiprocess, and their application doesn't have to actually include DPDK. 

623.72 - 3.559: It has to include a shim that knows how to talk to the service. 

627.279 - 6.881: Uh, multicast is nice to have, and the goal of this is to build something where someone can take DPDK and build a small toy application in a couple of days, run it on their own hardware, and see, "Yes, this is really, really fast." 

650.68 - 5.04: So for prior art for this, um, there's a lot of TCP stacks out there, but eRPC from data center RPCs can be general and fast; not NXP's similarly named solution. 

661.48 - 5.52: It's embedded in an application, and it's competitive in terms of functionality and latency with Zeper atomic broadcast implemented on FPGAs. 

675.56 - 4.959: So that is another example; DPDK isn't competitive with normal Ethernet; it's competitive with FPGA, and that is 7,000 lines of C++ and has gained a fair amount of popularity inside of academia because it's easy to use and it's fast. 

693.6 - 5.4: McKnet is designed as DPDK as a service, so you deploy it as a container alongside all of your other services, and it co-ops the verbs from POSIX sockets, changes the API, and then you can easily have a half dozen microservices all sharing one NIC and being otherwise mostly independent programs—11,000 lines of C++. 

721.24 - 7.2: So they're still smaller than Lient, and both they're easy to use if you are not a DPDK developer. 

731.56 - 4.279: They're close to RDMA and ROC, and latency is close to the ASAN throughput. 

733.16 - 6.0: They are based on older versions of DPDK, so I updated McKnet to 2311; it was 2111. 

744.519 - 4.241: Um, these external solutions, they have difficulties evolving alongside DPDK. 

748.76 - 4.96: There's a big group of people here, and without a fairly substantial investment, it is difficult to keep up with DPDK, which is why there is a veritable graveyard of network stacks for DPDK. 

763.56 - 5.48: They also make the mistake of saying DPDK is the NIC accelerator and not actually picking up any of the other useful things that are exposed by DPDK. 

770.88 - 4.24: For instance, they don't do encryption by calling into OpenSSL normally instead of using crypto. 

783.24 - 6.039: So I think that we as the DPDK community can do better than that. 

790.959 - 5.081: We're not the network interface card development kit; we are the data plane development kit. 

796.04 - 5.72: So take advantage of the high-level API; plug in Crypto Dev, plug in Compress Dev, plug in DMA Dev, add software fallbacks where necessary to ensure portability. 

813.88 - 5.72: Um, for instance, rename and document DMA SL skeleton, etc. 

817.0 - 5.279: So this makes it easier to use DPDK, bringing in new users, and for the users who take a look at that easy mode API and say, "Actually, we'd like a little more performance." 

824.8 - 6.279: Okay, we're DPDK; we have all the performance that you want, but for most people they're going to look at that and say, "Wow, this is really, really, really fast." 

841.12 - 4.719: Um, also importantly versus other protocols, let's actually start from the hardware and work up instead of something like QUIC, which fairly evidently started from HTTP and worked downwards. 

860.04 - 4.64: This means we go figure out what can hardware reasonably do for us and design around that for partial or full offload. 

864.68 - 5.279: This also helps vendors because it means that use of new devices that exist under this API are just an update to DPDK. 

872.88 - 4.28: There's no need to rewrite your application and replace all of the instances of memcpy with DMA Dev calls. 

879.68 - 4.279: It also makes it easier for vendors to show the value of their hardware once we have a couple applications built on top of this. 

889.959 - 6.841: Because you can toggle on and off your hardware and say, "Okay, let's run Redis with and without this," "Let's run MD within without this," "Let's run an HTTP server or some other proxy or a VPN." 

908.079 - 4.44: So I think that as a community, DPDK is full of networking experts and people looking towards the future of the field. 

914.12 - 4.639: So let's build something that is designed for the hardware of two or five years in the future so that by the time...
we're done building it the hardware is here instead of continuing to make use of protocols that were designed for the hardware of the 1980s. 

so thank you so yes please come come for questions I I am ready for quite a bit of discussion on this. this is working yeah Martin um have you looked at seaa yes I I have looked at sear fairly extensively. so sear Architects their Network St in such a way that if you do if your database or application is not structured like cadb you start having a lot of API mismatches and they have kind of bent the entire networking framework towards what is good for their database in particular. 

yeah it's being used by other things as well and com the other thing is you mentioned erpc erpc is actually used in kubernetes pretty heavily. it's um a lot more efficient than grpc and so like between kuet and the runtime for example and a lot of the plugins the interface is erpc. so yes I I was not aware that erpc was being used in that area but that 

okay any other questions comments? 

yeah so uh when you say that uh you want uh some database to work with uh dpdk right um typically like does that mean a uh you know getting an existing database and uh like having a dpdk layer uh with a shim that like the same same as what the previous uh presenter uh uh kind of presented right is it the same thing or something so different in order to Port something to this you would still need to go kind of rip out the existing Network stack and replace it with message passing but most databases that I have looked into and indeed a lot of normal applications communicate over discrete RPCs where they send they communicate via message passing so that is a much easier API to Port around because even if you take say Json RPC over HTTP okay so send the Json blob over this dpdk message passing and then you don't need to change a lot and you get giant performance uplifts because you're now you now have say full hardware acceleration of your encryption and if it's gzipped your compression as well compared to what most https Json RPC looks like. 

so this means cutting out some layers of the stack that I think some people don't realize aren't actually necessary. 

okay so that means uh you're going to strip the uh certain layers in the uh conventional database deployments and then yes so you this would involve source code modifications yeah and some some work by both the mcknet team and by the RPC team acknowledges that if as long as you make it not that hard most people will be willing to Port their to a different network stack provided there isn't a big API mismatch and one one of the things I wanted to make as a point is that TCP as say posix sockets is a massive API mismatch for the way a lot of applications are written now because they they actually communicate via message passing and then the fact that it's message passing over TCP is a detail they don't even think about. 

okay thanks I'm glad to see that somebody's actually getting some traction on this um and a couple quick notes is one thing that I would also think that's a problem is the dpdk architecture threading model may be intrusive onto these kind of applications as in they really don't want a thread pulling there and by the way if the thread that created the request becomes something that goes into a database request and is going to storage you're going to get head of line blocking on the things waiting on the next thing on the receive queue. so you might want to kind of develop some kind of split brain thing where there's workers to pull things off and you know schedule at the back end to send to other things if you have to go to anything slow. 

yes so a lot of more modern databases are architected in layers so you will have sort of network workers right and then you will have things that do they do query processing and query optimization and then you will have things that only talk to the disk so dpdk application pdk we can work on spdk later and the other question was um if you can send message and receive message are on the way out to be replaced by IO ring um and you know Linux did a bad job relative to you know VMS even Windows NT in terms of being synchronous and then finally trying to be asynchronous um if you've got a chance to do new APIs you're better off to start out doing a ring based asynchronous. 

yeah so when I say send message and receive message I mean take the function name okay leave everything else where yeah cuz like I ring has like send messages an OP you put in I ring and you tell it to do something and then it it just guarantees it'll do it until when it's done it doesn't have to block on send message. 

yes so for for a dpdk send message it could be that it will go and put it in buffer and if the Buffer's full andq that batch so the semantics of the API as long as it is vaguely this is bytes I want to eventually end up on another server and I would like some bytes from another server. 

yeah yeah it goes all the way back to your slide one the mechanics of complaints about TCP are as much a complaint about the mechanics of posix sockets yeah um yes I I'm saying give people sort of a handle of familiarity like someone look look for how do I send a message we'll see send NSG and think okay that's probably where I should start looking. 

okay even if everything else ends up getting changed and it has a different return value and it takes 20 parameters they'll at least know this is where I start. 

okay so thank you very much um I would love to come and collaborate with people I'm not a hardware person so I would like to have I would like to work with some Hardware people to design something that is actually going to be feasible for vendors to implement as partial or full offloads because I really think building from the hardware on up in a way that the dpdk community is uniquely suited to.
1395.96 - 6.839: do will produce something that is better than what we currently have. 

1398.6 - 4.199: than what we currently have.
