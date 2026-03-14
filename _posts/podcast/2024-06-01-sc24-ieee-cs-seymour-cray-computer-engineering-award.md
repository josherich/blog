---
layout: post
title: "SC24 IEEE-CS Seymour Cray Computer Engineering Award"
date: 2024-06-01 00:00:01
categories: podcast
tags: [podcast_script]
---

[SC24 IEEE-CS Seymour Cray Computer Engineering Award](https://www.youtube.com/watch?v=a-1xJmfYxyU)

Our next speaker is Dr. Norman J. Y. Norman. He is a Google Fellow and has been the technical lead for Google's tensor processing units since their inception in 2013. Norm has a long and distinguished record of innovation in high-performance processors, memory hierarchies, and storage systems. He was the principal architect and lead designer of several microprocessors. Please welcome Dr. Norman.

Thank you, everyone. The title of my presentation is "Immense Scale Machine Learning." You may wonder why I chose the term "immense." There’s a lot of extreme stuff going around, but I think of "immense" as being relatively good, while "extreme" reminds me of, for example, jumping off a cliff in a wingsuit. So, I went with "immense."

We're covering the big, the small, and the not right at all because I think those are three of the largest issues that we face with very large machine learning models. First of all, I'm going to dive down into the key principles and foundational aspects in several different areas to explain how we came to the design decisions that were made.

This chart shows the energy breakdown of typical instruction execution in a CPU. You can see that if we have an 8-bit addition, it consumes 0.03 picoseconds, while the entire instruction takes 70 picoseconds. This means we’re getting less than 1% efficiency when executing this 8-bit addition on a CPU. While we can use instructions like AVX to group 8-bit additions together and perform them in parallel, the basic idea is that we will still be swamped by all the other processing happening in the CPU. This was well known when we started the project. Mark Horowitz had been giving talks and conducting research in this area, and he delivered the ISSCC 2014 keynote on this topic. The diagram I’m referencing is taken directly from that presentation.

To scale to the size we needed, we realized we had to eliminate virtually all that overhead, which is depicted in blue on the chart. The solution we came up with was to perform matrix operations on a 256x256 systolic array. This approach eliminates all kinds of complex control logic, and most importantly, as you will see later, it reuses fetched memory and registered data 100 times. This was a big factor in reducing the energy overhead per compute operation by tenfold. You might ask why not 100 times, and that’s because several operations, such as reading data from memory, still need to take place.

Let’s delve into more detail about systolic arrays. These were first proposed in the 1970s and were initially popularized for signal processing applications. However, they were largely forgotten in mainstream computer architecture by the mid-1980s. The systolic array contains only multipliers, adders, and flip-flops and operates on matrix multiplication, which makes it highly efficient. Our analysis shows that we are within a factor of two of the theoretical maximum energy efficiency seen in our MXUs today.

The wiring is done within the array, meaning that components are placed next to each other with minimal wiring needed between different blocks. This design eliminates a significant amount of power consumption associated with wiring. Additionally, it avoids memory accesses because we are reusing data that we’ve already fetched an impressive 256 times. With no complex control logic, there's just one big pipeline operating linearly without any conditional branching, leading to efficient computation.

In late 2013, we started the TPU V1 project, which I named since the workloads involved were primarily tensor mathematics. Given that we already had GPUs and CPUs, it made sense to introduce a TPU as an example of a domain-specific architecture. John Hennessy and David Patterson have written extensively about domain-specific architectures, which are specialized for a specific domain of applications rather than a single application.

By employing such an architecture, we were able to achieve 10 times better performance-to-cost ratio than contemporary alternatives at the time. This graph from the ISCA 2017 paper illustrates our performance advantage, showing that we were approximately 10 times more effective compared to CPUs and GPUs.

Our first design was a simple chip, crafted swiftly within a matter of months. It was built on a PCIe card and initially accelerated only inference, as we thought that would be the primary bottleneck. However, as the chip was in production, we noticed training capacity and capability were actually the limiting factors in producing models. When we consulted with the teams responsible for training, they expressed that designing a training chip would be too complex, primarily due to the additional workloads needed for backpropagation and other gradient optimizers. Many believed the intricacies of building a training chip made it an unfeasible task.

However, we welcomed the challenge and decided to build a training chip and a supercomputer around it. Our basic plan for TPU V2 was straightforward: don’t invent anything more than necessary. For context, our TPU V1 paper had 77 co-authors, including individuals from software, compilers, and data center deployments. In comparison, Seamos Cray's projects previously involved around 20 people, including janitorial staff.

Another crucial characteristic that we wanted to implement was co-designing from the compiler down to chip design. Some of us recognized that establishing rigid interfaces along the way limits optimization capabilities. To enhance our flexibility, we developed our own Intermediate Language, which is also accessible for programming in XLA, the specialized processor designed for tensor operations optimized for our architecture.

We began our design with a typical vector CPU architecture and aimed to augment it with matrix operations. This approach is akin to how the Cray 1 extended previous scalar machines in 1975. Within our design framework, we were looking to leverage historical computer architecture learnings, rather than merely following trendy architectures.

One of the advantages of commencing with a scalar architecture that includes vector operations, similar to Intel’s AVX 512, is that it provides a model to build on. The time it takes to compile is an important factor in success. By starting with a well-known architecture, we could utilize established compiler techniques familiar in high-performance computing (HPC).

We utilized an eight-operation Very Long Instruction Word (VLIW) architecture. Initially, I wasn't a fan of VLIW machines and had no intention of designing one, but in contexts where we are doing 8-way instruction issuing with the compiler fully controlling the code, deterministic operations present a strong case for this approach.

Getting back to the architecture, I'd like to add that receiving recognition for this work is particularly meaningful to me, given my roots in the Upper Midwest, where Seymour Cray originated. In college, my best friend and I even established our own Seymour Cray fan club with just two members.

If we look at the diagram of the Cray 1, everything to the left of a two-sided arrow resembles the previous 6600 and 7600 machines. This design effectively allows scalar code to function seamlessly while enabling the compiler to focus on utilizing the vector component optimally.

As we began adding vector hardware, we adopted a consistent methodology, ensuring that modifications aligned with the established architecture. Another significant aspect of our design was connecting TPU chips using a shared memory architecture that is distributed and utilizes high-bandwidth toroidal networks. This 3D toroidal network was a natural fit for tensor math since the matrix dimensions can map directly.

The ICI interconnect is 50x faster and 10x cheaper than Ethernet. We accomplished this by ensuring the interconnect resembles a memory interconnect, eliminating unnecessary protocol stacks.

In our scalability studies, we achieved remarkable results using the ICI, with 99% scaling efficiency across 75% of workloads when scaled to 3,000 TPU V4 chips. The applications benchmarked are significant, handling billions of daily users at Google, indicating they are far from trivial.

In some cases, we identified that certain applications did not scale as effectively, such as the Deep Learning Recommendation Model (DLRM), which relies on extensive communication. Initially, our bandwidth limitations hindered these applications from scaling beyond a thousand nodes.

During the early phases, training was conducted using CPUs and GPUs operating on floating point (FP) 32. Jeff Dean and his research team were using this format extensively, with the Google software storing these values. The conversion to 16 bits, known as B float 16, was executed via a simple truncation method. While some might raise concerns about numerical precision, this approach ultimately worked well, maintaining dynamic range.

We recognized that B float 16 inputs could be sent to multipliers, allowing us to retain computing bits since an n by n multiplication of mantissas yields 2n bits. Consequently, we calculate accumulations in FP 32 format to achieve consistency with existing software processes, reaping economic advantages while ensuring compatibility.

In essence, we tokenize insignificant floating point operations, acknowledging that they may incur variability based on computational arrangements leading to minute differences in results. Nevertheless, we maintain that B float 16 has proven instrumental for our TPU architecture.

The TPU V2 emerged as our first training-oriented system, featuring 256 chips arranged in a 2D mesh. The ICI ran at 2.56 terabits per chip, significantly outpacing the capabilities of typical Ethernet setups. Our design utilized air-cooling strategies to enhance power consumption efficiency while expediting our time-to-market.

One primary intent behind TPU V2 was to develop a functioning software vehicle in preparation for future systems, recognizing the lengthy durations involved in optimizing compilers. During our progress, we restructured the chip layout from a sea of gates to a streamlined data path, yielding improved efficiency. The TPU V3 surpassed its predecessor with 4x the chip count and embraced water cooling features to enable higher speeds.

As we transitioned to TPU V4, we achieved remarkable advancements, integrating 64 racks of water-cooled compute power, totaling an exaflop of compute capability. These systems are interconnected via data center networking to facilitate large clusters.

We also considered aspects of reliability, availability, and serviceability. Flexibility in rack configurations allows for different application requirements, accommodating varying TPU chip arrangements based on specific needs. If any rack goes down, we can treat it as a unit to minimize downtime and repair issues in a streamlined manner.

The racks are connected using optical circuit switches, organized in a structured mesh that can transition to a toroidal topology with wraparound connections. We have recorded growth in chip counts, most recently moving from 4,096 to nearly 9,000, generating over 4 exaflops of performance.

To wrap up, I want to emphasize the monumental progress AI research is making at present. Advances in science, exemplified by presentations like Bill Tang's, signal that machine learning may become the fourth pillar of scientific inquiry alongside experimentation, theory, and simulation. Furthermore, machine learning provides accessible knowledge tools for everyday individuals, making technology integration more pervasive in daily life.

We foresee ample opportunities for additional research, notably in developing scalable applications while ensuring that we remain aligned with precision and robustness in our machine learning frameworks.

Thank you all for your attention, and I welcome any questions.

[Applause]

Thank you very much, Dr. Norman, for that insightful talk. We would like to take a few questions from the audience for Dr. Norman.

One question there? Yes, I see one over here.

My name is Brad Beckman from AMD. Very interesting talk, Dr. Norman. You mentioned the reliability challenge toward the end, and early on you noted the B float 16 representation. As you know, these smaller data types often have roundoff error issues. Considering this, how are teams designing machine learning algorithms addressing concerns around algorithmic-based error corrections within these constraints?

The B float 16 works well, even following truncation, so precision is not significantly compromised. Moreover, we find that even FP8 appears promising, and we've observed positive results with INT4. However, the precision ultimately depends on the tasks being performed. While certain operations may necessitate larger formats for accuracy, machine learning processes tend to function effectively with reduced precision.

Thank you for your response.

Let's thank Dr. Norman once more for his insights.

[Applause]

That brings us to the end of this session. We appreciate everyone for attending and listening to our speakers. Have a great day!
