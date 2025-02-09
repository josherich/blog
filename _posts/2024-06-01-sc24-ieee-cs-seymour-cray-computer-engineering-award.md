---
layout: post
title: "SC24 IEEE-CS Seymour Cray Computer Engineering Award"
date: 2024-06-01 00:00:01
categories: short
tags: [podcast_script]
---

0.919 - 7.241: our next speaker is Dr Norman JY Norman
5.16 - 4.76: jopy is a Google fellow he has been the
8.16 - 4.16: technical lead for Google's tensor
9.92 - 3.36: processing units since their Inception
12.32 - 3.76: in
13.28 - 5.079: 2013 Norm has a long and distinguished
16.08 - 4.84: record of innovation in high performance
18.359 - 5.401: processors memory hierarchies and
20.92 - 6.24: storage systems and he was the principal
23.76 - 8.2: architect and lead designer of several
27.16 - 4.8: microprocessors please welcome Dr Norman
32.5 - 5.35: [Applause]
41.2 - 5.44: tropy hi
43.879 - 6.68: thanks
46.64 - 3.919: thanks clicker
50.92 - 3.0: yes
56.84 - 7.2: okay so the title of my presentation is
60.039 - 6.801: is immense scale machine learning and uh
64.04 - 6.079: you may wonder why I chose the term
66.84 - 5.88: immense so there's a lot of extreme
70.119 - 6.841: stuff going around but I I think of a
72.72 - 7.16: immense as being relatively good where
76.96 - 6.72: extreme reminds me of for example
79.88 - 6.52: jumping off a cliff in a wing suit so uh
83.68 - 2.72: I went with IM
87.159 - 5.801: M okay we're covering the big the small
90.04 - 5.759: in the not right at all because I think
92.96 - 7.519: those are the three of the largest
95.799 - 7.721: issues um that we face with very large
100.479 - 3.041: uh ml
103.719 - 7.201: models so first of all I'm going to dive
107.24 - 6.4: down the key principles uh
110.92 - 4.6: foundationals in several different areas
113.64 - 4.64: to explain how we came to the design
115.52 - 5.8: decisions that that we
118.28 - 6.759: did so
121.32 - 5.919: uh this chart here
125.039 - 4.681: shows oops
127.239 - 5.64: sorry the energy
129.72 - 5.879: breakdown of uh typical instruction
132.879 - 6.44: execution in a
135.599 - 7.081: CPU and you can see that if we have a
139.319 - 8.601: 8bit ad it's 0.03
142.68 - 7.44: PS where the whole instruction is 70 PS
147.92 - 5.12: so that means that we're getting less
150.12 - 6.479: than 1% efficiency if we're executing
153.04 - 7.0: this 8bit ad on a
156.599 - 6.0: CPU now you can have things like AVX and
160.04 - 4.919: try to Group 8bit ads together and do
162.599 - 4.841: them in parallel but the the basic idea
164.959 - 5.041: is it's still going to be swamped by all
167.44 - 5.2: the other stuff going on in a
170.0 - 5.0: CPU and this was well known when we
172.64 - 4.0: started the project uh Mark horwood had
175.0 - 5.64: been giving talks about this had
176.64 - 7.36: research uh in this area uh professor at
180.64 - 6.239: Stanford and he gave the isscc 2014
184.0 - 5.12: keynote on this and this diagram here is
186.879 - 8.121: taken directly from
189.12 - 8.6: that so we decided in order to scale to
195.0 - 7.159: the size that we needed we needed to get
197.72 - 4.439: rid of basically all that overhead in
203.319 - 6.48: blue and uh the solution that we came up
206.239 - 8.161: with was to do Matrix operations on a 2
209.799 - 7.64: 56x 256 systolic array so that
214.4 - 4.08: eliminates uh all kinds of complex
217.439 - 4.201: control
218.48 - 6.36: logic uh and most importantly as you'll
221.64 - 5.959: see later it reuses fetched memory and
224.84 - 5.88: registered data a 100
227.599 - 5.161: times and if you remember from the last
230.72 - 3.84: slide that was that was a big part of
232.76 - 3.96: the blue
234.56 - 5.759: area and we
236.72 - 6.48: reduce the Energy overhead per uh
240.319 - 5.56: compute operation by 10x and you might
243.2 - 5.319: say why not 100x well there's a bunch of
245.879 - 5.881: other things that have to happen uh like
248.519 - 5.241: reading data from uh memory and stuff
251.76 - 4.399: like that so that's why it gets watered
253.76 - 2.399: down to
256.919 - 5.28: 10x this just goes into a little more
259.72 - 5.96: detail about systolic arrays systolic
262.199 - 7.521: arrays were first proposed in the
265.68 - 5.56: 1970s uh they were popularized for
269.72 - 3.759: signal processing
271.24 - 4.32: applications but they were largely
273.479 - 5.081: forgotten in mainstream computer
275.56 - 5.919: architecture uh by the bid
278.56 - 6.4: 1980s the systolic array only contains
281.479 - 6.761: multipliers adders and flops it does in
284.96 - 5.92: our case uh matrix
288.24 - 5.64: multiplication and so it's it's highly
290.88 - 5.2: efficient we've done an analysis and
293.88 - 5.319: determine that we're within a factor of
296.08 - 7.48: two of the theoretical maximum Energy
299.199 - 4.361: Efficiency see in our mxus
304.039 - 7.401: today uh the wiring is done by a
306.96 - 6.72: within the array so you um things are
311.44 - 3.479: just put next to each other there's no
313.68 - 4.4: wires
314.919 - 5.521: between uh different blocks in the
318.08 - 7.28: systolic array so you've eliminated
320.44 - 7.92: wiring which uh can uh use up a lot of
325.36 - 5.2: power it avoids memory accesses because
328.36 - 5.64: we re use uh
330.56 - 6.199: data that we've fetched 256
334.0 - 4.72: times and there's no control logic it's
336.759 - 3.801: just one big pipeline it goes kachunk
338.72 - 7.64: kachunk kachunk and there's
340.56 - 5.8: no no kind of conditional Branch or
347.039 - 5.88: anything so in late 2013 we started the
350.919 - 7.521: TPU V1
352.919 - 9.441: project and uh I named it because
358.44 - 8.08: uh the ml uh workloads were basically
362.36 - 7.959: tensor mathematics so and we had gpus
366.52 - 7.28: and CPUs and so it made sense to have a
370.319 - 6.841: TPU it's an example of a domain specific
373.8 - 5.88: architecture and John Hennessy and David
377.16 - 3.599: Patterson have written uh about domain
379.68 - 3.88: specific
380.759 - 5.44: architectures um its architectures are
383.56 - 6.28: specialized uh for a
386.199 - 7.241: specific domain of applications not one
389.84 - 6.199: particular application but uh basically
393.44 - 4.96: the entire space of a particular kind of
396.039 - 5.401: application in this case machine
398.4 - 5.72: learning and I I think we all know what
401.44 - 2.68: uh tensors
404.56 - 6.84: are by doing this we we able to provide
408.199 - 4.321: uh 10x better perf TCO than uh
411.4 - 3.519: contemporary
412.52 - 7.16: Alternatives uh that were around at the
414.919 - 9.12: time so this graph here from uh Isa 2017
419.68 - 9.44: paper shows that we're uh
424.039 - 9.041: from uh basically around 10x with high
429.12 - 7.72: variation compared to CPUs and
433.08 - 5.799: gpus uh our first design was a simple
436.84 - 7.079: chip because we had to design it in a
438.879 - 7.88: matter of months uh went on a pcie card
443.919 - 4.481: and it only accelerated inference
446.759 - 4.761: because uh that's what we thought the
448.4 - 3.12: bottleneck would be
452.639 - 6.641: however when that chip was being fabbed
456.4 - 4.88: we realized training capacity and
459.28 - 3.8: capability was a limiting factor to
461.28 - 5.879: producing
463.08 - 5.959: models and when we talked to the people
467.159 - 3.681: doing the training they thought doing a
469.039 - 6.0: training chip would be too complicated
470.84 - 6.6: to build because a training chip uh
475.039 - 6.0: would have to do all of inference and
477.44 - 4.719: then about 2/3 more work work uh for the
481.039 - 4.681: training
482.159 - 6.121: part uh for the back propagation and
485.72 - 4.12: that had some more complicated math and
488.28 - 4.72: other things going on gradient
489.84 - 5.919: optimizers and stuff so people thought
493.0 - 6.479: building a training chip would be too
495.759 - 6.4: complicated uh so we we like challenges
499.479 - 6.481: and we decided to build a training chip
502.159 - 3.801: and a supercomputer around
508.0 - 7.719: it so the basic plan for TPU V2 uh the
512.8 - 6.76: first chip that support
515.719 - 5.12: training uh was don't invent anything
519.56 - 4.359: more than
520.839 - 6.44: necessary so if you look at our tpv1
523.919 - 7.04: paper it had
527.279 - 6.041: 77 uh co-authors that includes the
530.959 - 4.88: people who did the
533.32 - 5.079: software uh the
535.839 - 6.801: compilers even the people who did
538.399 - 7.56: deployment in in the data centers and so
542.64 - 5.84: that's uh quite a bit more than seamor
545.959 - 5.521: craze I think roughly 20 people
548.48 - 7.68: including the janitor from the quote
551.48 - 7.32: from IBM but uh I mean things have
556.16 - 5.44: gotten more complicated since
558.8 - 4.52: then and we did it on a shorter time
561.6 - 5.16: frame as
563.32 - 6.12: well okay so the other key thing that we
566.76 - 5.84: we wanted to do was co-design from the
569.44 - 6.04: compiler down to chip
572.6 - 6.12: design some of us have been around for a
575.48 - 6.039: while and we've seen that setting hard
578.72 - 6.2: interfaces uh along the way really
581.519 - 5.56: limits the the ability of
584.92 - 5.72: optimization and
587.079 - 5.44: so we had our our own language
590.64 - 4.68: Intermediate Language which is also
592.519 - 9.88: available to program in
595.32 - 9.24: xla which is tensor uh oper uh basically
602.399 - 6.761: optimized
604.56 - 8.88: and uh the xla team was part of the
609.16 - 4.28: original design team for TPU
614.6 - 6.88: V2 so we wanted to start from a typical
618.04 - 6.28: Vector CPU architecture and add Matrix
621.48 - 6.799: operations and I'll explain why that is
624.32 - 3.959: in the next couple of slides
629.519 - 5.601: uh first it's similar to how the cray 1
632.76 - 5.6: extended previous scaler machines with
635.12 - 6.8: Vector operations in
638.36 - 5.039: 1975 and um you may notice that I put
641.92 - 4.84: certain things in
643.399 - 7.081: italics uh like the in
646.76 - 5.84: 1975 and also the systolic arrays from
650.48 - 6.24: the
652.6 - 7.359: 1970s one of the key principles in the
656.72 - 6.04: design was that we wanted to look across
659.959 - 6.761: the the entire history of computer
662.76 - 7.12: architecture and pick out there's been
666.72 - 6.16: so many things developed uh pick and
669.88 - 6.68: choose uh things that were most relevant
672.88 - 6.8: to us and improve on them and adapt them
676.56 - 7.8: for use in our system so I I think a lot
679.68 - 8.52: of common systems today are more based
684.36 - 6.76: on uh what the fads are uh in
688.2 - 5.68: architecture versus is uh kind of
691.12 - 6.839: foundational principles like
693.88 - 7.079: this so one advantage of starting with a
697.959 - 6.201: uh scale or machine with Vector
700.959 - 8.281: operations uh which is you might think
704.16 - 7.96: of uh Intel with AVX 512 in that
709.24 - 5.36: category is we start with an
712.12 - 4.76: architecture model with a compiler and
714.6 - 5.72: add stuff one of the key things When
716.88 - 7.399: developing a new machine is is uh time
720.32 - 8.079: to compiler so time to tape out is one
724.279 - 8.92: thing time to compiler is is worth the
728.399 - 6.12: real uh goal is and so by starting with
733.199 - 3.2: a well-known
734.519 - 4.56: architecture we could leverage
736.399 - 4.841: well-known compiler techniques for
739.079 - 6.12: matrices in
741.24 - 9.08: HPC and I'm glad that Professor pad's uh
745.199 - 7.481: talk uh was before mine so we took uh uh
750.32 - 6.6: uh great advantage of all those
752.68 - 4.24: optimizations uh that he listed on the
757.199 - 6.281: slides we used uh for scaler machine an
761.12 - 3.92: eight operation VW
763.48 - 5.56: architecture
765.04 - 6.12: and I've never been a big fan of of vliw
769.04 - 5.799: machines and I never expected to design
771.16 - 6.919: one but when you're doing 8way issue and
774.839 - 7.281: the compiler is under total control of
778.079 - 6.961: the code and we don't have any uh
782.12 - 5.079: Dynamic operations like cash misses
785.04 - 4.159: because we have scratch Pad memories and
787.199 - 5.161: stuff like that so everything is
789.199 - 4.161: deterministic pretty much uh vliw makes
792.36 - 3.8: the most
793.36 - 6.56: sense that's another key thing I think
796.16 - 7.28: is um being flexible to adopt things
799.92 - 5.599: that you know are are different than
803.44 - 4.959: your previous way of thinking because
805.519 - 5.081: this is a a a different application
808.399 - 4.961: space
810.6 - 5.76: and eight instructions per cycle is a
813.36 - 5.52: very beefy uh scaler core it's nothing
816.36 - 2.52: to sneeze
820.0 - 4.72: at so getting back to the ties into the
823.639 - 4.961: the cray
824.72 - 6.08: architecture uh let me just put in aside
828.6 - 5.28: here that the getting this award is
830.8 - 6.68: especially meaningful to me uh
833.88 - 7.04: because uh I I grew up in the Upper
837.48 - 7.56: Midwest uh where where see more cray was
840.92 - 6.96: and uh in in college for example uh my
845.04 - 6.0: best friend and I we made our own
847.88 - 6.639: seamour cray fan club with two members
851.04 - 4.88: so as an undergrad so I've been a fan of
854.519 - 4.32: his for a long
855.92 - 5.96: time uh so so if you look at this
858.839 - 6.321: diagram of the cray one on the
861.88 - 6.399: right uh the everything to the left of
865.16 - 6.119: that uh two-sided Arrow uh looks like
868.279 - 5.24: the previous 6600 and 7600
871.279 - 6.36: machines
873.519 - 8.201: so that basically enables scaler code to
877.639 - 6.401: run pretty easily right off the bat and
881.72 - 5.039: then you can just the compiler folks can
884.04 - 4.159: spend their effort on using the vector
886.759 - 5.801: machine but you can get the machine up
888.199 - 6.801: and running and Bug a lot of it uh very
892.56 - 6.079: quickly that way
895.0 - 4.759: so uh when it came time to add the
898.639 - 4.081: vector
899.759 - 6.601: uh it's the vector Hardware was added in
902.72 - 6.88: a consistent manner so we wanted to
906.36 - 3.24: follow that kind of a
912.36 - 6.08: model another key thing that that we had
915.6 - 5.799: there's there's been a lot of research
918.44 - 4.839: on shared mult memory multiprocessors in
921.399 - 6.041: the late 80s and early
923.279 - 6.24: 90s is we connect the TPU chips with a
927.44 - 5.24: shared memory art
929.519 - 7.12: chitecture that's distributed and uses a
932.68 - 7.399: high band with Taurus the Taurus is very
936.639 - 8.281: high band withd uh it's similar to the
940.079 - 8.76: cray t3s 3D Taurus but it's much
944.92 - 8.24: simpler and it leverages the Taurus is a
948.839 - 8.0: natural fit for tensor math
953.16 - 7.56: because you know uh you can map um
956.839 - 6.601: dimensions of the matrices to the uh
960.72 - 6.88: dimensions of the
963.44 - 6.959: tourus the ICI is 50x faster and 10x
967.6 - 5.12: cheaper than ethernet and how did we do
970.399 - 4.8: that well first it's it's really like a
972.72 - 5.52: memory interconnect on like a two soet
975.199 - 6.521: server board uh there's no layers of
978.24 - 5.719: protocol Stacks many connections are PCB
981.72 - 4.4: print circuit board traces or cheap
983.959 - 6.161: copper cables between
986.12 - 8.76: boards uh so ICI is is the second key
990.12 - 4.76: TPU feature after the systolic
996.279 - 6.201: arase when we did some scalability
999.199 - 7.401: studies uh using the ICI we got these
1002.48 - 7.839: results at the eight uh benchmarks on
1006.6 - 7.12: the side are or key applications serve
1010.319 - 5.601: to billions of daily users at Google so
1013.72 - 5.799: they're they're not toy
1015.92 - 7.12: benchmarks we got uh
1019.519 - 7.721: 99% scaling efficiency on 75% of the
1023.04 - 9.039: workloads to 3,000 TPU V4
1027.24 - 9.64: chips so that's uh pretty
1032.079 - 8.6: good uh the two applications that uh
1036.88 - 7.679: didn't scale so well uh the
1040.679 - 6.921: dlrm uh make extensive use of all to all
1044.559 - 5.561: communication and so our bsection
1047.6 - 5.0: bandwidth in the first uh couple
1050.12 - 5.28: machines wasn't high enough to support
1052.6 - 5.52: the scaling of those passed uh a
1055.4 - 2.72: thousand
1062.72 - 7.0: nodes another key feature of the TPU
1065.76 - 8.96: systems was that training was currently
1069.72 - 5.0: be done on CPUs and gpus using
1074.88 - 5.32: fp32
1077.28 - 6.68: uh Jeff Dean and the research group
1080.2 - 9.479: there were were using this and Google
1083.96 - 10.36: software stored the fp32 values the 16
1089.679 - 7.761: high order bits of those um a and to
1094.32 - 7.92: stay storage and what they did for the
1097.44 - 7.84: conversion to 16 bits uh brace yourself
1102.24 - 5.439: here uh was performed by simple
1105.28 - 4.6: truncation so I know any numerical
1107.679 - 6.721: analysts uh
1109.88 - 6.88: here to comfort them um this preserved
1114.4 - 4.84: the dynamic range while reducing
1116.76 - 5.52: precision and they called this dat type
1119.24 - 4.919: B float 16 in the software a and it
1122.28 - 5.36: worked so you can't really complain
1124.159 - 3.481: about the truncation that
1127.76 - 6.36: much the existing 16-bit formats like
1131.48 - 4.439: fp16 which were developed for graphics
1134.12 - 3.36: didn't have enough dynamic
1135.919 - 5.721: range
1137.48 - 7.92: and we realized looking at the software
1141.64 - 4.76: that we could Supply B float 16 inputs
1145.4 - 3.72: to
1146.4 - 6.48: multipliers keep all the product bits
1149.12 - 6.72: you know because n by n multiply of
1152.88 - 5.12: mantises gives you two n Bits so we kept
1155.84 - 5.8: all the bits we didn't do any rounding
1158.0 - 7.52: or throw anything away that's becomes
1161.64 - 7.44: fp24 and then perform fp32
1165.52 - 6.44: accumulations and get identical results
1169.08 - 4.56: as the current software was
1171.96 - 4.959: getting
1173.64 - 6.519: uh this had
1176.919 - 4.561: some uh economic advantages and it made
1180.159 - 4.601: the multiplier
1181.48 - 6.319: smaller and we decided to round a
1184.76 - 4.84: nearest even because we we we couldn't
1187.799 - 2.681: face ourselves if we didn't do that in
1189.6 - 3.88: the
1190.48 - 4.72: morning but most importantly it
1193.48 - 5.319: maintains software
1195.2 - 5.359: compatibility with CPUs and gpus and
1198.799 - 4.561: again this is going back to the the
1200.559 - 5.12: story the development story of being
1203.36 - 5.12: compatible with things to get things up
1205.679 - 6.521: and running fast and then adding
1208.48 - 6.96: additional stuff on top so models that
1212.2 - 4.359: trained on CPUs gpus and tpus could all
1215.44 - 3.04: get the
1216.559 - 5.24: same exact
1218.48 - 6.28: results now this is a bit of a fib here
1221.799 - 5.481: because we all know that uh floating
1224.76 - 5.44: Point addition isn't associative and
1227.28 - 6.48: sometimes different
1230.2 - 5.8: compilers would uh arrange the
1233.76 - 4.48: arithmetic in different orders and we'd
1236.0 - 6.32: get different results but it's it's only
1238.24 - 7.919: on the the small lower bits so hence
1242.32 - 6.96: bf16 was the key third key TPU feature
1246.159 - 3.121: to get it up and running
1253.159 - 8.601: fast so our first training oriented
1257.72 - 6.52: system was TPU uv2 it had 256 chips
1261.76 - 6.12: connected in a 2d
1264.24 - 6.48: Taurus uh the
1267.88 - 6.24: ICI only ran at
1270.72 - 6.68: 2.56 terabits per
1274.12 - 5.159: chip so compare that with like 100 Gig
1277.4 - 7.0: ethernet for
1279.279 - 10.481: example it was air cooled to lower power
1284.4 - 5.36: consumption and improve time to Market
1290.0 - 9.279: and uh people don't really like it when
1295.0 - 8.48: I say this but one of the key reasons uh
1299.279 - 7.0: for TPU V2 was to provide a working
1303.48 - 6.36: software development vehicle for future
1306.279 - 5.28: systems because it can take a year to
1309.84 - 3.719: develop a well-tuned
1311.559 - 5.24: compiler or
1313.559 - 6.961: more it's you can do that forever but
1316.799 - 3.721: most of the gains come in the first year
1320.84 - 5.8: so while we were bringing up the
1322.24 - 6.559: compiler on V2 we did a quick spin where
1326.64 - 3.919: we optimized the chip design layout
1328.799 - 3.521: instead of a sea of gates we turn it
1330.559 - 3.48: into a data path which we didn't have
1332.32 - 5.8: time to do in
1334.039 - 5.921: V2 uh we have a larger scale 4X of chips
1338.12 - 5.439: and 2x of
1339.96 - 6.68: racks uh we adopted water cooling so we
1343.559 - 5.761: could run the chip faster optical cables
1346.64 - 7.159: were available to do wraparound
1349.32 - 7.56: links and the hbms at the time had twice
1353.799 - 6.281: the capacity so it gave us overall 10x
1356.88 - 6.159: the TPU V2
1360.08 - 6.8: performance
1363.039 - 7.281: okay the next major step that we did was
1366.88 - 6.84: in TPU uh
1370.32 - 5.2: v4p uh that has 64 racks of water cooled
1373.72 - 5.24: compute and there's eight shown in the
1375.52 - 5.639: photo and so those 64 racks together
1378.96 - 5.48: provide an exf flop of
1381.159 - 5.0: compute and we have many such superpods
1384.44 - 3.28: connected via data center networking
1386.159 - 7.76: into bigger
1387.72 - 6.199: clusters uh that that's no uh secret
1394.52 - 8.6: um so what's a
1398.039 - 6.601: superod well one of the issues uh is
1403.12 - 2.96: reliability availability and
1404.64 - 3.96: serviceability and I'll be talking more
1406.08 - 6.12: about that later
1408.6 - 7.76: but we also get jobs of different sizes
1412.2 - 8.359: someone may want 8 by
1416.36 - 5.76: 8x4 uh arrangement of TPU chips to match
1420.559 - 5.72: their
1422.12 - 7.12: application others might want a 16x 8X
1426.279 - 7.921: 16 we actually have some models that
1429.24 - 7.2: prefer 32x 1X one uh believe it or not
1434.2 - 4.88: and and they form you know a pipeline
1436.44 - 8.08: along the 32 dimension
1439.08 - 7.839: of layers that are uh 4x4 tpus so that's
1444.52 - 4.32: one uh
1446.919 - 6.681: rack
1448.84 - 6.439: U so you can do that if you have Optical
1453.6 - 4.92: circuit switching which I'll talk about
1455.279 - 7.801: in a second and also you can see these
1458.52 - 9.48: uh skull and crossbones on uh the
1463.08 - 8.959: diagram and if a rack goes down for some
1468.0 - 7.36: reason we treat Ira as a unit so it has
1472.039 - 6.52: 64 TPU chips in it and some servers and
1475.36 - 5.319: networking so uh data center networking
1478.559 - 4.641: connection so if anything goes down in
1480.679 - 5.36: the rack we can just stop using it until
1483.2 - 5.32: it's repaired and then it can be used in
1486.039 - 2.481: production
1489.559 - 4.24: again so we connect
1494.159 - 11.161: the racks with Optical circuit switches
1499.679 - 5.641: and uh each rack is a 4x4x4
1506.08 - 7.079: Taurus uh sorry it is a 4x4x4 mesh and
1510.799 - 4.76: then we can make it into a Taurus if we
1513.159 - 6.0: do wraparound connections with Optical
1515.559 - 7.6: circuit swishers or we can combine them
1519.159 - 8.081: into uh larger size slices is what we
1523.159 - 7.561: call them and we use different ocss to
1527.24 - 9.799: connect different indices of the faces
1530.72 - 6.319: uh to corresponding indices of other uh
1539.279 - 8.361: blocks okay and uh we have a video here
1544.88 - 6.88: about uh the V5 generation where we
1547.64 - 5.2: increased it from 4,096 chips connected
1551.76 - 3.48: via
1552.84 - 5.959: ocsa uh close to
1555.24 - 7.88: 9,000 and uh this version is over for
1558.799 - 7.341: exop flops so um it's a short video
1563.12 - 6.219: please take it away
1566.14 - 3.199: [Music]
1627.4 - 3.459: [Music]
1643.84 - 5.48: okay great
1646.2 - 6.8: thanks um
1649.32 - 7.719: and uh just pointing out uh Sundar at
1653.0 - 5.44: the most recent Google IO uh showed a
1657.039 - 4.321: picture of one of our coolant
1658.44 - 7.92: distribution units uh which appeared in
1661.36 - 7.96: the video uh on the side and noted that
1666.36 - 6.24: we have around a gwatt of
1669.32 - 9.0: deployed uh liquid cooled
1672.6 - 7.559: capacity and uh he also mentioned that
1678.32 - 3.68: the tpus are the only thing that we have
1680.159 - 5.441: that are liquid cooled so that gives you
1682.0 - 3.6: an idea of our TPU
1687.2 - 6.959: capacity I uh realize I'm running out of
1690.44 - 4.719: time here so uh I'll try to go quickly
1694.159 - 3.64: over the next
1695.159 - 6.76: slide so I think we're familiar with the
1697.799 - 6.561: N of dard scaling uh what that means is
1701.919 - 4.961: that the power density of chips is going
1704.36 - 4.88: to go up every generation from now till
1706.88 - 3.919: the end of the lithographic scale SC in
1709.24 - 3.52: and so power and cooling is going to be
1710.799 - 5.081: a lot more important so I notice on the
1712.76 - 5.88: floor at the exhibition this year uh
1715.88 - 5.639: there's a lot of uh cooling companies as
1718.64 - 5.24: well as uh electric supply companies
1721.519 - 2.361: like
1725.44 - 8.44: Schneider and uh John Hennessy in a
1730.24 - 3.64: plary talk
1734.6 - 7.799: um showed this slide and uh
1739.039 - 5.64: a picture really hits at home as you're
1742.399 - 4.0: scaling the technology down in in the
1744.679 - 3.24: kind
1746.399 - 5.241: of
1747.919 - 5.921: the uh actual power per square
1751.64 - 5.039: millimeter goes up like very
1753.84 - 4.64: dramatically
1756.679 - 3.681: exponentially one of the things that
1758.48 - 4.679: consumes a lot of power is
1760.36 - 6.199: SRAM uh if you look at this chart here
1763.159 - 7.201: you can see that uh accessing a 1
1766.559 - 6.521: Megabyte SRAM is 100 PS but doing a
1770.36 - 6.799: floating Point multiplier that's 16 bits
1773.08 - 8.04: is only one pel so that that's why we're
1777.159 - 3.961: trying to reuse data a 100
1782.159 - 7.601: times and it's even worse since Mark's
1786.039 - 6.721: uh 2014 keynote uh computation has
1789.76 - 4.56: gotten 3x denser and lower power but SRM
1792.76 - 4.919: is about the
1794.32 - 4.32: same moreover the needs for memory
1797.679 - 3.84: capacity
1798.64 - 4.879: have been going up pratically there's uh
1801.519 - 4.0: the trillion parameter model that was
1803.519 - 5.321: mentioned earlier people are talking
1805.519 - 7.121: about numbers much larger than that so
1808.84 - 6.559: this is a plot of model size over time
1812.64 - 4.68: and it's a logarithmic scale as well so
1815.399 - 4.921: it's a exponential curve on a
1817.32 - 6.92: logarithmic scale pretty
1820.32 - 6.56: amazing and uh reduced Precision formats
1824.24 - 6.159: are important to further reduced uh
1826.88 - 6.279: energy costs and also the memory
1830.399 - 4.841: footprint but of of course we can't get
1833.159 - 5.64: an order of magnitude smaller than b
1835.24 - 5.84: float 16 which is only 16 bits but using
1838.799 - 5.561: smaller data types will
1841.08 - 6.479: require uh automation to be
1844.36 - 6.96: effective and one of the reasons uh for
1847.559 - 6.881: that at Google is uh we have to preserve
1851.32 - 5.12: accuracy compared to the larger formats
1854.44 - 5.32: because one mistake in a billion can
1856.44 - 3.32: make the news
1860.679 - 9.801: okay and then uh the not right at
1865.799 - 7.6: all so Raz uh it's it's the feature that
1870.48 - 5.24: Everyone likes to complain about but not
1873.399 - 7.16: too many people are working on it it
1875.72 - 7.36: seems uh in the previous generations
1880.559 - 6.48: received a lot of attention from finance
1883.08 - 7.079: and supercomputing which is great um now
1887.039 - 6.201: it's a significant issue issue in ml
1890.159 - 6.801: training and we don't need real time
1893.24 - 6.2: reliability like uh the banking industry
1896.96 - 5.24: or or stock exchanges like the tandem
1899.44 - 5.8: stuff but because recovery from
1902.2 - 5.56: checkpoints is okay but errors must be
1905.24 - 6.159: detected and overhead from restart can
1907.76 - 3.639: be burdensome if it happens too
1911.919 - 4.36: often so that brings us around to silent
1915.32 - 3.28: data
1916.279 - 4.681: corruption uh I I don't know about you
1918.6 - 5.16: but I'm a fan of the space program and
1920.96 - 6.0: there's Jean CR the head of Mission
1923.76 - 7.36: Control wrote failur is not an option
1926.96 - 6.76: and uh for us compared to silent data
1931.12 - 7.799: corruption failure is a good option
1933.72 - 8.439: because then you know it happened uh
1938.919 - 6.401: so uh but we need to detect
1942.159 - 5.921: them and I think further research is
1945.32 - 4.76: needed in this area like algorithm based
1948.08 - 5.199: tolerance there was some early work done
1950.08 - 5.76: at the University of Illinois in the
1953.279 - 5.561: late 70s early 80s on this but it kind
1955.84 - 5.799: of uh waned after
1958.84 - 7.52: that so just to
1961.639 - 6.64: conclude I think uh research in AI is
1966.36 - 6.279: advancing at a tremendous
1968.279 - 6.321: pace and I believe much good will result
1972.639 - 4.0: uh one of the things I'm most excited
1974.6 - 4.799: about is advances in
1976.639 - 6.721: science um
1979.399 - 7.12: um like Bill Tang's uh
1983.36 - 4.84: presentation and I think that ml may
1986.519 - 4.921: eventually become the fourth leg of
1988.2 - 6.92: science after experiment Theory and
1991.44 - 5.16: simulation also provides knowledge tools
1995.12 - 4.799: uh to Everyday
1996.6 - 6.799: People uh such as language
1999.919 - 5.88: based image-based language translation
2003.399 - 4.601: uh when I went on vacation to Japan with
2005.799 - 6.561: my family you could just hold a your
2008.0 - 7.12: phone and then uh read uh things in
2012.36 - 5.279: Japanese there's a lot of things and
2015.12 - 4.08: we're just getting started but we're
2017.639 - 4.201: limited by the amount of
2019.2 - 6.359: compute uh to run these tools that we
2021.84 - 6.719: need so there's a plenty of room for uh
2025.559 - 6.921: additional research we're besides X's
2028.559 - 6.84: scale we're looking at yat and ra scale
2032.48 - 6.159: which is uh pretty
2035.399 - 5.561: amazing okay uh
2038.639 - 2.321: thanks
2043.94 - 3.22: [Applause]
2047.96 - 6.679: everyone thank you very much uh Dr up
2050.879 - 5.48: for that uh insightful talk um we'd like
2054.639 - 4.401: to take a few questions from the
2056.359 - 6.121: audience uh for Dr
2059.04 - 7.559: JY maybe one question yeah okay there's
2062.48 - 6.639: I see one over here quickly um yeah so
2066.599 - 4.401: my name is Brad Beckman from AMD um so
2069.119 - 3.921: very interesting talk uh you know you
2071.0 - 5.04: mentioned the reliability challenge at
2073.04 - 5.639: the end um and also earlier you
2076.04 - 6.2: mentioned the fact that uh your bf16 you
2078.679 - 5.92: know um basically in general also these
2082.24 - 5.0: these smaller data types have roundoff
2084.599 - 6.24: air issues right and so doing something
2087.24 - 5.8: like algorithmic uh based check uh error
2090.839 - 4.32: Corrections you know have the challenge
2093.04 - 4.96: of of dealing with the roundoff air like
2095.159 - 6.68: if you're Computing a check sum you know
2098.0 - 6.8: simultaneous or or or uh you know uh
2101.839 - 5.24: with with your Matrix multiply um so I
2104.8 - 5.2: guess the the the with that all in mind
2107.079 - 9.601: the question is is are folks in the uh
2110.0 - 8.88: ml uh um uh uh you know design space
2116.68 - 4.439: willing to move to different formats
2118.88 - 6.32: that are maybe easier to do algorithmic
2121.119 - 7.48: based uh uh uh cor correction for rather
2125.2 - 6.12: than you know um the uh the the low
2128.599 - 6.961: Precision uh floating
2131.32 - 7.16: Point yeah so the the bf16 worked fine
2135.56 - 5.48: or works fine even if you truncate so
2138.48 - 5.24: it's not like we're short of precision
2141.04 - 6.0: and have to do something special to
2143.72 - 8.24: recover it uh there in fact
2147.04 - 7.84: uh fp8 currently looks uh
2151.96 - 6.56: promising and we've seen results even
2154.88 - 5.479: with int four now it it the Precision
2158.52 - 3.319: you use does VAR depending on what
2160.359 - 3.321: you're doing if you're doing second
2161.839 - 4.401: order Optimizer
2163.68 - 5.12: calculations uh because those basically
2166.24 - 3.599: effectively have the Precision when you
2168.8 - 3.0: do those
2169.839 - 4.881: calculations you have to start out with
2171.8 - 2.92: something bigger like
2174.8 - 6.96: fp32 but um it's you know machine
2178.119 - 6.121: learning doesn't need a lot of uh
2181.76 - 5.559: Precision okay
2184.24 - 3.95: thanks all right let's thank uh Dr jopy
2187.319 - 5.561: again
2188.19 - 6.25: [Applause]
2192.88 - 2.92: well that brings us to the end of this
2194.44 - 2.76: session we would like to thank you all
2195.8 - 5.72: for attending and listening to our
2197.2 - 4.32: speakers have a good day
