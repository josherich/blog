---
layout: post
title: "Terence Tao - Machine-Assisted Proofs (February 19, 2025)"
date: 2025-02-23 00:00:01
categories: podcast
tags: [podcast_script]
---

yeah so I'll be speaking um about how machines are transforming the way we do mathematics. So you know this this is time of great change I think well in general for not for everything really, but also mathematics. Mathematics, we're very traditionalist um uh discipline. I I think you know like we still use blackboards um you I I four blackboards in my own office um you know um other Sciences they've embraced sort of big science where they have you know 50, 500, 5,000 collaborators. I think mathematicians have somewhat reluctantly moved from like one to three or five in collaborations um you know so we still do things in many ways like we've done for centuries um you know working on individual problems, uh advising individual students uh and um but it's it's changing uh yeah so the um we are using machines now in particular in many interesting ways um not yet at the point where there's sort of a revolution. There's not yet a killer app. It's kind of like uh if the internet had been invented but not yet email. Email was the first killer app for the internet that really triggered mass adoption uh and we're not quite there but we it's you can sort of see it coming.

Um right so um we talking about how machines have been influencing mathematics. I know many of you are not mathematicians, are we talking about some examples of research mathematics but at a very high level you know there be no actual equations or anything uh for in well actually you'll see some but but not that won't be the main focus it's the kind of artistic background in some sense um so uh in some sense we've been using machines longer than anyone else. Okay so we've been using machines to assist mathematics for millennia. Right here is a machine assisting a mathematician from the first Cy um you know so uh but what's the difference? It's the scale of just how much machines can help us but also the nature uh come how machines are helping us.

Um so um right so what are we what have we been using um uh machines for uh so historically um we for centuries okay so the abacus is already an example of computation but besides computation just building tables um you know so you know in the early Middle Ages people started building trigonometric tables and logarithm tables and this has made certain computations much much uh much much easier to do. Um and of course these tables are are completely obsolete now because we have calculators and then computers and and and so forth uh but we still um uh use we still rely very much on lots of tables we just call them databases now. 

Um but um there has long been um a tradition of experimental mathematics. It's very much smaller and honestly not as well respected as it should be compared to theoretical mathematics uh which is like 99% of mathematics, so it's very imbalanced. Um I do feel like in the future we're going to have a much more um balance between theory and experiment um closer to how it is in the other sciences um but it has a history uh so for example in the 18th century uh Lande and Gauss famously investigated uh prime numbers uh using by so Gauss in particular who was himself a kind of human computer in many ways um that built tables of like the first 100,000 prime numbers um and they conjectured uh the prime number theorem which was then proven a couple centuries later um but uh but it was but the experiments came first. 

Um and in a very similar vein um one of the um major open questions in number theory nowadays is something called the Poincaré and Deconjecture. It's a conjecture about elliptic curves and I'm not going to talk about what it is but again it was first discovered by uh compiling lots and lots of tables of elliptic curves Computing various statistics of interest and noticing um experimentally uh a very strong relationship between two otherwise unrelated objects. We still don't know why they're related but we strongly believe they are um and this led to this conjecture um perhaps the biggest and most successful mathematical database. It's called the Online Encyclopedia of Integer Sequences. 

Uh this is something that many mathematicians use in some fields almost on a daily basis um so um many um I mean um the thing is that the literature of mathematics is huge and if you discover that you're working with a mathematical object, if you're lucky you know the name of it and you can look it up on Wikipedia or maybe you know an expert in the right area and you can ask them what's known about this um this object and so forth uh but often there are um two mathematicians across the world who have worked on the same object um but they don't they don't realize it because they call it different names. Uh they have no uh no way of comparing or searching even has anyone else dealt with this funny thing um but many objects in the world in mathematics come with um integer sequences. 

So um like if you're studying I don't know um Platonic solids for example there were five Platonic solids and you know there's a tetrahedron with four vertices, there's a cube with um with eight vertices and so forth. And so um there's a certain sequence of numbers that you can attach to many mathematical objects and New Sloan had this genius idea that why don't we just actually make a database of all the integer sequences that have ever come up in mathematical problems somewhere or at least as complete a database as you can hope for um and so this has now become the online encyclopedia in sequences hundreds and thousands of um sequences. 

And every day you know a mathematician who's trying to understand an object you know you can you can uh try to generate an integer sequence from this object, look it up in the database and very often um it or something very similar has already shown up um in the database and you can make connections that would otherwise not have been discovered. Okay so uh that's one classical use of uh of machines okay or data tables. Um The other major use is uh what we call scientific computation or um more colloquially number crunching. 

Uh and so this this is sort of the uh this is what you would think of when you say we use computers to do mathematics. You're just doing some massive simulation or just solving a whole massive amount of equations. You know so you want to model a dynamical system or uh or find roots of a polynomial and so forth you know I mean you know this is scientific computation. Um and you know so it's been around for over 100 years. It predates electronic computers. 

Uh so um I mean um arguably the first major scientific computation was was done by Hendrick Laurence in the 1920s using a team of human computers to model um fluid flow for a dam that was being constructed in the Netherlands. Um had to invent floating point arithmetic actually uh to to to uh to run run the simulation okay and the dam was successfully built and predictions held up. Okay so those are the traditional um oh at um so it and these number crunch things you know um so of course they do lots of arithmetic you know lots of floating point um operations and so forth um but they can also do certain sort of logic um uh logical tasks. 

Um so like if if you have a whole bunch of statements and and some of are true and false either true or false and you know some relationships between them you can try to work out you know kind of like solving Sudoku or logic puzzles which ones are true which are false. Uh there's a class of problems called satisfiability problems for which we have um um automated tools to solve these things so um certain math problems can be kind of uh reduced to what's called satisfiability where there's just a certain number of logic puzzles where there's a certain number of statements that are true or false and a certain number of hypotheses and you can get conclusions about hypotheses uh and some of that you can automate um as long as it's not too large. 

Um now a lot of mathematics you can't um solve by this method because it only works if you have a finite number of hypotheses and finite conclusions but sometimes it works. Uh let me just give you one example of uh a massive um satisfiability problem okay so uh there's this long-standing conjecture called the Boolean Pythagorean triples problem which was only solved by a massive computer search. Um so um the question is that um so these Pythagorean triples like three, four and five which are the sides of a right-angle triangle um and uh but they're fairly sparse, there's not that many of them. Five, three, four, and then there's five, twelve, thirteen and so they're they're fairly rare uh but it was believed uh and it's now been proven that if you take the natural numbers and you divide them into two pieces, these patterns are common enough that one of these uh no matter how you divide uh the natural numbers into two classes, one of them is guaranteed to contain one of these triples. 

Um and in fact you don't even need to partition all the natural numbers uh you just need to partition uh 7,825 of them. Okay so um um I can't this pointer does not okay um you know so um no matter how you decompose um you break up this this set into two pieces one of them contains a Pythagorean triple. Um On the other hand, if you do it with only 7,824 um you uh uh there's there's a way to do it uh for which neither class can contain a triple um so that part is fairly easy. 

You just need to exhibit one partition that doesn't do that and you can check that with a very simple computer program but the hard part is is the second part because uh the number of ways in which you can break up um this set into two is 2 to the 7825 uh which is a humongous number you cannot check all of these by hand. So this is basically like a vast Sudoku with 7,825 boxes um but you can show that there's no solution to this Sudoku. Um At the time it achieved the record for the world's longest proof um the proof generated a certificate uh which required four CPU years of um I need a megahertz. Okay uh that's not a valid unit but okay four years of a certain CPU but okay. 

But um um okay but uh yeah the proof was originally 200 terabytes which uh uh okay you know maybe the Asai is a bigger sets but to us that was a large large number um uh okay they managed to compress it down to a mere 8,668 gigabytes but at one point it was the world's longest proof. Okay so this is this is sort of an example of traditional uh ways of using computers in um in um in mathematics. Okay but uh what is exciting is that there's there are several new ways of using computers um which uh individually people are finding niche ways to incorporate them into doing um um into into their workflow. 

Okay so of course there's mundane ways okay so we all use email we all use computers to write out papers and search for papers and download things from the internet and so forth but I'm not interested in these mundane things um but uh the three new ways that are um beginning to become transformative but not yet at the killer app stage. So one is machine learning uh so using things like neural networks to find patterns and relationships that from large data sets that you just could not see uh from uh by from humans or possibly you could you could discern them from a more traditional statistical analysis but um the thing is most methods don't have this training to uh to to work these data sets and these machine learning algorithms could like automate this at a scale that we just cannot we don't have the training to do. 

Um then of course there's the uh uh the high-profile large language models chat GPT, Claude, and Gemini, and so forth uh where they they're um well first of all they're making other tools easier to use um you know so it's easier to run machine learning or to code up one of these things if you start asking to do it for you um but they are beginning to solve some simple problems in mathematics and and or to assist with sort of uh secondary tasks in a mathematical activity. Um So far they are not good at directly solving hard math problems but that may not be the best way to deploy them. 

Um Then these formal proof assistants uh which are very complementary to all uh these are like very very fussy proof checkers. Uh they um if you write a proof in a very specific language uh this these proof assistants will will go through every line and it will either say tick uh this is a correct proof or um you know or compilation error this is a correct proof up to line 567 and now this is a syntax error. Um Much like you would compile um computer code except that computer code generates executable um programs. 

And uh formal proof assistants, they are also computer languages they can technically also do that but but they can also generate proof certificates um uh and that is uh well I mean that's nice by itself but it's also enabling other things like for example allowing finally mathematicians to collaborate in large groups which we've basically not been able to do before except with like a lot of painful uh effort. Um Individually these are becoming useful but actually what's really promising is that by combining them together uh we uh I mean that's where the gap is going to come up some sort of synthesis of all these. Right now these tools don't talk to each other very well uh but they should in the future. 

Okay so let's talk about uh I think I'll talk proof assistance first. Um So computer-assisted proofs have been around for about since the 70s um the most um the most famous early example of a computer-assisted proof was the Four Color Theorem um which um required checking a lot of cases um so I didn't talk about uh I didn't the slides don't show the proof but um it involves generating a list of about 5,000 special graphs um and verifying these graphs have various properties um and at the time um some of these properties could be verified by computer and by computer I mean a 1970s punch card type computer. 

Um Some of them could be uh um proven in a very mechanical way but not not proven by a full computer. In fact um I think um um Appenheim wrote down for each of these 5,000 graphs some um a few lines of no actually they got H's daughter actually to write down um like a like a five or six line justification of a certain property for each graph and like they had to do it um 5,000 times. Um It was very error-prone um they had to revise it several times because um um it was a long time. 

It took like 20 years before um a modern computer-assisted proof which was acceptable by modern standards was produced um so the proof um um there was a new proof which was a bit simpler. It uses only like 500 graphs but um more importantly the um the the computational part of the proof was was a statement that you could state what you wanted to be true and then anybody could spend an hour or two writing a computer program to verify this specific computational task and um and this is something that you can run in seconds on one computer and and verify it and and they supplied the code um but you still have to trust the code. You know maybe um the person who coded had a bug. 

Um If you really want a formal proof certificate that that that there's a rigorous guarantee that the statement can be proven all the way from the axioms of mathematics, that was only done in 2005 where they they used the proof assistant to give a complete proof um so you see it takes decades to um um traditionally to get to the point where you can actually formalize. 

Um Another famous example is the Kepler Conjecture. So this is a conjecture from the 17th century that uh if you want to pack oranges or cannonballs or whatever in space um there's a sort of obvious way to do it which is the way that you see oranges stacked in supermarkets. It's called the cubical central hexagonal close packing um and that has um so there's some empty space between these spheres um and the proportional space occupied by the spheres is about 74% this number here pi over 32. 

Um And it was conjectured by Kepler that this is the best way to do it that there's no other better way to pack these spheres than the sort of the obvious uh algorithm but this turned out to be remarkably difficult to prove. Um Two dimensions is not too hard but the three-dimensional version is really really hard um there was a strategy. By the 1950s there was a strategy um so whenever you have a packing it creates a way to decompose space. 

Okay so so every um uh sphere here comes with what's called a Voronoi cell so all the points that are closer to this sphere than they are to any other sphere. There's a certain polytope uh there's a certain polyhedron around that sphere and and so um you can every time you have a packing you get all these um polyhedra and they have various faces, they have various areas and volumes, um and there's various relationships between. 

You can relate like if you can relate the volume of of of of these touching polytopes with the volume of there's various inequalities that that you can do and they're also related to the density of of the whole um um system. So uh if you in theory if you could collect enough inequalities between all these different um um polyhedra uh and then you run some sort of linear program you might be able to just deduce um um um the bound on the density. 

Um And so this was a promising strategy um uh in principle you only need a finite number of these things so something that a computer could potentially um do um you know as opposed to the whole packing problem where there's an infinite number of of these boards. So people tried this, there were many false attempts uh Bru proposed um so this was finally done um in the '90s by um by Hales and Ferguson. 

Um So the thing is the strategy as stated doesn't quite work um you have to replace these polyhedra by more complicated polyhedra which don't have an obvious description. He kept tweaking the definition of these Voronoi cells, and also things like volume instead of taking obvious measures, he kept introducing a score, a numerical score for each and the score kept changing as the proof advanced because they tried one thing and it didn't work and they added one more bell and whistle and it didn't work um and finally they got it but it was um a very controversial proof. 

Um So I just quote so Hales wrote that every time we encounter difficulties in solving this problem we could adjust the scoring function to scope the difficulty. This function became more complicated but each change uh we could cut months or years of my work this incessant fiddling was unpopular with my colleagues every time I presented my work in a conference I was minimizing a different function. Even worse the function was mildly incompatible with earlier papers and this required going back and patching the earlier papers. 

Um So they finally did it um and yeah so they they they chose a very carefully controlled scoring function and there's 150 variables and they did a linear program and and and they verified it. They didn't start off with computer assistance, they were hoping to do a pen and paper proof but they were forced into computer-assisted proof. Yeah so at the time a quite a large proof 250 pages.
1199.2 - 5.0: and 3 gigabytes of various notes and data um 

1202.96 - 2.56: they sent it to the top Journal of 

1204.2 - 2.359: mathematics the anal mathematics it took 

1205.52 - 4.36: four years to 

1206.559 - 4.921: referee uh which uh actually an has 

1209.88 - 4.279: taken longer for some papers but that 

1211.48 - 4.559: was pretty long um but the referees 

1214.159 - 3.161: could not they said they were only 99% 

1216.039 - 3.961: certain of the correction they 

1217.32 - 5.08: could not reproduce the calculations um 

1220.0 - 3.64: and so it was it was a that I noticed that 

1222.4 - 3.56: the very unusual thing of putting a 

1223.64 - 3.96: caveat like a disclaimer at the beginning of the paper that that the 

1225.96 - 3.56: editors do not vouch for the correctness of this paper they 

1231.679 - 5.561: have since removed that from the current 

1234.28 - 5.96: online version um yeah so it it was very 

1237.24 - 4.72: controversial at the time um so there 

1240.24 - 3.919: was a lot of incentive on especially from 

1241.96 - 4.12: Tom Hells to actually formalize this in 

1244.159 - 4.281: a computer language that for which um 

1246.08 - 3.64: there was just no uh no doubt that there 

1248.44 - 2.479: was no just a little sign error 

1249.72 - 4.04: somewhere that that invalidated the 

1250.919 - 5.361: whole thing um so he made a project he 

1253.76 - 4.84: got a f spe um he estimated it would 

1256.28 - 4.0: take 20 years to formalize every single 

1258.6 - 3.319: single step and he was very pleased that 

1260.28 - 5.279: it only took 

1261.919 - 6.081: 11 uh and yeah so was the form proof was 

1265.559 - 5.48: finally published in 2017 and with 

1268.0 - 5.6: many many uh collaborators so 

1271.039 - 4.441: that's all of the uh where things stood 

1273.6 - 4.8: until very recently like you could 

1275.48 - 5.199: formalize but it was so painful that 

1278.4 - 3.759: only for very very high high profile 

1280.679 - 5.401: projects would you would you want to do 

1282.159 - 7.561: it um but um now the technology has 

1286.08 - 7.64: gotten a lot better um still not perfect 

1289.72 - 6.64: by any means but we are beginning to um 

1293.72 - 4.64: uh like it's um you don't have to spend 

1296.36 - 4.24: um um years to do these things so you 

1298.36 - 4.559: can do this you can formalize in weeks 

1300.6 - 3.84: um so like very recently um I uh 

1302.919 - 3.681: together with four co-authors we proved 

1304.44 - 4.0: a conjecture in comics it's called the 

1306.6 - 3.559: polynomial fion conjecture although 

1308.44 - 2.96: despite the name is actually uh this 

1310.159 - 4.0: particular conjecture introduced by 

1311.4 - 4.6: computer scientist Katn Martin um it's 

1314.159 - 5.0: not important what the conjecture is uh 

1316.0 - 5.08: it's just some piece of math um it 

1319.159 - 3.361: uh we proved it by traditional means we 

1321.08 - 3.12: talked to each other we we exchanged 

1322.52 - 4.399: emails we worked on blackboard and so 

1324.2 - 5.12: forth uh and um you know we have this 33 

1326.919 - 5.801: page paper um which actually just got 

1329.32 - 6.599: accepted uh in the annals um that uh 

1332.72 - 5.36: approving this this result um but then 

1335.919 - 5.081: we decided Well I decided that uh this 

1338.08 - 5.16: was a good project to try to test the uh 

1341.0 - 4.039: the most recent um um infrastructure 

1343.24 - 3.28: for formalizing these things in a in a 

1345.039 - 5.201: more modern proof assist language Gord 

1346.52 - 5.36: Le um and uh so so we open a project and 

1350.24 - 3.48: it took about 3 weeks and involving 20 

1351.88 - 5.039: people most of whom I had I had not met 

1353.72 - 5.079: previously um so um the thing is that 

1356.919 - 3.321: yeah as I said you know I mean this 

1358.799 - 3.281: group of four people you know that's 

1360.24 - 4.24: about the four or five is close to the 

1362.08 - 5.199: maximum size of a math collaboration 

1364.48 - 5.48: currently because in math you know if 

1367.279 - 4.76: you um you have to trust every single 

1369.96 - 4.44: piece of of of an argument so if someone 

1372.039 - 3.52: supplies a proof of of one step and you 

1374.4 - 2.279: don't understand it you know maybe 

1375.559 - 3.48: there's an error in it then like the 

1376.679 - 4.0: whole thing can be wrong um 

1379.039 - 3.161: and so you have to verify every 

1380.679 - 3.161: contribution that that everyone else 

1382.2 - 4.28: contributes and and this is a 

1383.84 - 3.839: significant limiting factor in in 

1386.48 - 5.64: enlarging the size of collaboration 

1387.679 - 6.0: beyond four or five people uh but um uh 

1392.12 - 3.52: you can crowdsource a proof 

1393.679 - 4.561: formalization um in ways that you cannot 

1395.64 - 6.639: in a traditional formalization so the 

1398.24 - 7.679: way a modern um proof formalization um 

1402.279 - 5.921: um wow I just realized my time is almost 

1405.919 - 5.961: okay uh all right I'm going to have to 

1408.2 - 5.64: to to to speed up quite okay yeah um but 

1411.88 - 5.84: um the way a modern proof formalization 

1413.84 - 5.839: works is that um uh you take a big 

1417.72 - 3.839: complicated um statement and you break 

1419.679 - 4.281: it up into lots of little pieces lots of 

1421.559 - 4.36: little lemmas uh each of which is fairly 

1423.96 - 4.56: simple uh maybe a simple consequence of 

1425.919 - 3.841: other pieces um and so you know 

1428.52 - 2.92: there's this there's this statement on 

1429.76 - 2.919: the bottom so so the statement that we 

1431.44 - 2.839: have is called the pfr conjecture that 

1432.679 - 3.961: represents this little bubble at the 

1434.279 - 4.161: bottom at at the time of when I took the 

1436.64 - 3.56: screenshot this was um an empty bubble 

1438.44 - 3.479: which means that it hadn't been proven yet 

1440.2 - 4.52: um but there are other bubbles that we 

1441.919 - 4.88: we we we we we we stated all these 

1444.72 - 3.88: other facts that so this this this say 

1446.799 - 3.841: it depends on on these four some of 

1448.6 - 3.36: these we had already proven some are are 

1450.64 - 3.2: ready to be proven there a color coding 

1451.96 - 3.88: which I won't talk about but the thing 

1453.84 - 3.28: is that you could then crowdsource and 

1455.84 - 3.68: people could volunteer I'm going to work 

1457.12 - 4.24: on on on one proposition and and you 

1459.52 - 3.68: just need to prove there's one thing 

1461.36 - 3.36: that this lemma follows from from the 

1463.2 - 4.479: three things above it and you don't need 

1464.72 - 5.439: to understand the whole proof um so this 

1467.679 - 5.561: this was a the comics but most of the 

1470.159 - 5.281: contributors were not comorists um so 

1473.24 - 3.28: um and in fact many were not even 

1475.44 - 2.44: professional mathematicians you know 

1476.52 - 3.6: there were computer scientists people 

1477.88 - 4.48: from industry uh people who just liked 

1480.12 - 4.84: solving puzzles actually um you know um 

1482.36 - 4.199: so we got a very broad class of people 

1484.96 - 3.079: uh to work on this um and like every 

1486.559 - 4.921: contribution had to be formalized had to 

1488.039 - 5.52: be certified by this um uh by this 

1491.48 - 4.84: language lean um and so like we could 

1493.559 - 4.0: trust all the all the um you know so um 

1496.32 - 2.76: it didn't matter that I didn't know 

1497.559 - 2.881: these people and maybe they make 

1499.08 - 4.04: mistakes but they make mistakes it 

1500.44 - 5.56: wouldn't get accepted into the 

1503.12 - 5.32: project um and so we've been able to do 

1506.0 - 5.399: these large collaborations okay so I 

1508.44 - 4.4: think I will skip um yeah this is just 

1511.399 - 3.841: one example of what lean code looks like 

1512.84 - 3.6: it looks vaguely like math uh but also 

1515.24 - 3.84: like computer code it's some sort 

1516.44 - 8.0: weird hybrid of both okay but I 

1519.08 - 7.64: think I will skip the um uh yeah so um 

1524.44 - 4.56: um in many ways it's more tedious it's still 

1526.72 - 4.559: more tedious than um writing things 

1529.0 - 4.2: traditionally I would say that currently 

1531.279 - 3.481: if you want to write a formal proof it's 

1533.2 - 4.199: roughly about 10 times longer than 

1534.76 - 4.56: writing a proof in the traditional way 

1537.399 - 4.441: you know using a latch language and and 

1539.32 - 6.239: so forth um and so like it's not worth 

1541.84 - 6.199: doing um and and um at the current stage 

1545.559 - 4.161: like for everybody um you have to still 

1548.039 - 4.24: pick and choose which projects you want 

1549.72 - 4.0: to formalize so we're still kind of 

1552.279 - 2.921: focusing on relatively high profile 

1553.72 - 3.64: projects okay so maybe the highest 

1555.2 - 4.4: profile currently is that Kevin Buzzard 

1557.36 - 3.76: is one year into a 5-year project to 

1559.6 - 3.959: formalize the entire proof of Fermat's 

1561.12 - 4.799: Last Theorem um and here he estimates in 5 

1563.559 - 4.72: years he may not formalize all of it but 

1565.919 - 4.841: uh so W's proof was in the mid-90s he 

1568.279 - 4.801: wants to reduce at least that 

1570.76 - 5.36: statement to facts that were already 

1573.08 - 5.36: known in 1980 um and then there's still 

1576.12 - 5.679: some work to formalize those but that 

1578.44 - 7.28: seems to be the the the current 

1581.799 - 5.921: goal okay um maybe I tell you so that's 

1585.72 - 3.92: one way in which mathematics is being 

1587.72 - 3.88: transformed that we're beginning to we 

1589.64 - 5.88: are now able to collaborate at large 

1591.6 - 6.48: scales um and so um I I gave you a 

1595.52 - 4.0: project uh example where we um you're 

1598.08 - 3.479: formalizing something that already been 

1599.52 - 4.24: proven uh later hopefully I'll talk a 

1601.559 - 4.0: little bit about formalizing mathematics 

1603.76 - 4.0: I mean where the results haven't been 

1605.559 - 3.681: proven yet and and the the the formal 

1607.76 - 5.84: structure is actually part of how we 

1609.24 - 8.52: actually um uh arrive at the proof um 

1613.6 - 5.76: okay so another um um direction is is to 

1617.76 - 2.6: uh is to use these these large language 

1619.36 - 4.799: models so this is one of my favorite 

1620.36 - 7.64: stories um so um so this is a story from 

1624.159 - 6.12: knot theory so knot theory is a 

1628.0 - 4.12: uh is one of the branches of is a branch 

1630.279 - 4.28: of sub branch of topology you know so 

1632.12 - 3.919: you you make a loop in space um you know 

1634.559 - 3.6: there are various knots you can make and 

1636.039 - 4.561: some knots are are are different from 

1638.159 - 3.801: each other you can some you can deform 

1640.6 - 2.679: one to the other and some are genuinely 

1641.96 - 2.64: different and so one of the basic 

1643.279 - 3.4: questions in knot theory is how can you 

1644.6 - 6.16: tell whether two knots are equivalent or 

1646.679 - 5.441: not um and um um one of the ways we do 

1650.76 - 2.76: it is that we assign these things called 

1652.12 - 3.679: invariants okay so there are certain 

1653.52 - 3.96: numbers that you can assign to a knot 

1655.799 - 3.401: such that if you continuously deform the 

1657.48 - 3.16: knot around these numbers don't change and 

1659.2 - 3.16: so if two knots have this different 

1660.64 - 4.0: invariants then they are not the same 

1662.36 - 5.6: knot um now there's various different 

1664.64 - 4.6: ways you can construct invariants um 

1667.96 - 4.12: there's something called the signature 

1669.24 - 4.88: of a knot which is a certain integer um 

1672.08 - 3.4: and it comes from combinatorics you count 

1674.12 - 3.32: crossings and whether you cross over and 

1675.48 - 3.919: cross under and there's a linking matrix 

1677.44 - 4.2: there's some combinatorial recipe to 

1679.399 - 5.0: generate knots um and then there's these 

1681.64 - 5.36: geometric invariants um where you 

1684.399 - 4.041: look at the space outside the knot um so 

1687.0 - 3.2: this is three-dimensional space with a 

1688.44 - 3.44: knot removed uh this is what's called a 

1690.2 - 3.959: hyperbolic space and you can define the 

1691.88 - 4.039: things called hyperbolic volume and 

1695.919 - 4.161: hyperbolic cusp volume and there are 

1698.24 - 3.159: lots of real and complex numbers 

1700.08 - 3.04: attached to these knots okay so I'm not 

1701.399 - 3.561: going to define these things but like 

1703.12 - 5.279: this is a partial database of a whole 

1704.96 - 5.16: bunch of knots like um um and various 

1708.399 - 3.681: statistics attached to them so there are 

1710.12 - 4.919: these two unrelated ways to generate 

1712.08 - 4.319: invariants there's a combinatorial um recipe and 

1715.039 - 3.281: then there's these geometric recipes and 

1716.399 - 6.681: there was no connection known between 

1718.32 - 6.4: these two um so um um uh a bunch I 

1723.08 - 6.4: forget the the authors they're not listed 

1724.72 - 6.679: here but um um um a bunch of um 

1729.48 - 3.439: mathematicians decided to just throw 

1731.399 - 3.081: machine learning at this okay could you 

1732.919 - 4.401: get a neural network like if you just 

1734.48 - 4.88: feed the neural network the um um the 

1737.32 - 3.719: geometric invariance these like 20 real 

1739.36 - 2.88: numbers real complex numbers attached to 

1741.039 - 3.841: these knots could you predict the 

1742.24 - 4.159: signature and they found that there's 

1744.88 - 3.279: a network that they could make a 

1746.399 - 4.76: neural could do this with like 90% accuracy 

1748.159 - 5.24: or 99% accuracy something really um 

1751.159 - 3.76: superbly accurate so this told you that 

1753.399 - 3.201: there must be some relationship at least 

1754.919 - 3.36: invariants were related but the 

1756.6 - 3.24: relationship was given by this black box 

1758.279 - 4.52: this this neural network that that this 

1759.84 - 6.319: is very complicated um set of 

1762.799 - 5.12: weights and functions um and so you had 

1766.159 - 2.64: to somehow open up this black box and 

1767.919 - 4.0: understand 

1768.799 - 5.641: it so uh they did a very basic analysis 

1771.919 - 4.161: on this um so so once you have this 

1774.44 - 3.719: black box it's a basically a box that 

1776.08 - 4.0: takes in 20 numbers and spits out one 

1778.159 - 3.36: predicted number and so like you can 

1780.08 - 4.079: just turn these knobs like you can 

1781.519 - 4.88: change one of these um uh numbers and 

1784.159 - 4.721: see how much it changes the output and 

1786.399 - 4.081: they found that um of these 20 inputs 17 

1788.88 - 3.039: of them did almost nothing and but three 

1790.48 - 4.799: of them were really important that there 

1791.919 - 5.6: were three of the 20 um inputs that 

1795.279 - 4.4: really made a big difference um and 

1797.519 - 3.64: there were three inputs it's called the 

1799.679 - 3.681: longitudinal translation and the ru and 

1801.159 - 4.041: complex parts of the modal translation 

1803.36 - 3.48: um these were inputs they did not expect 

1805.2 - 4.24: to be important for example they they 

1806.84 - 3.52: expected the volume of the of this 

1809.44 - 2.2: volume to be the most important 

1810.36 - 4.439: invariant and it was actually almost 

1811.64 - 5.24: insignificant um so um with some 

1814.799 - 4.24: analysis they realized that there were 

1816.88 - 6.24: three inputs that were that were really 

1819.039 - 6.48: um um key and then they could plot they 

1823.12 - 4.36: could plot um those inputs against the 

1825.519 - 3.04: signature and so forth and then visually 

1827.48 - 3.84: they could see 

1828.559 - 4.681: um relationship and then they made a 

1831.32 - 4.4: conjecture based on sort of visually 

1833.24 - 5.08: fitting a curve to to the data 

1835.72 - 4.16: though all um once they had this 

1838.32 - 2.959: prediction they compared it against the 

1839.88 - 2.84: neural network and the neural network said 

1841.279 - 3.52: no this this conjecture can't be true 

1842.72 - 4.679: because here are some uh examples of 

1844.799 - 5.0: knots where that don't do this um but 

1847.399 - 5.481: the way that the conjecture failed uh 

1849.799 - 4.961: let um uh led them to see how to fix the 

1852.88 - 3.72: conjecture so they add an extra term to 

1854.76 - 3.279: make it more accurate and then once they 

1856.6 - 2.319: had the right form of the conjecture 

1858.039 - 2.88: could then actually prove it 

1858.919 - 3.801: theoretically um so it was really this 

1860.919 - 3.841: conversation between theory and 

1862.72 - 4.079: experiment and and conjecture and and 

1864.76 - 3.799: the machine learning and the humans um 

1866.799 - 3.961: and so they they they did rigorously 

1868.559 - 5.161: prove a connection between these uh 

1870.76 - 4.96: these facts so um this is another way in 

1873.72 - 4.52: which um mathematics is changing but it 

1875.72 - 3.64: needs data okay so what was what made 

1878.24 - 2.96: this work was that there was already a 

1879.36 - 4.159: database of a million knots um they 

1881.2 - 3.8: added two million more um to an existing 

1883.519 - 4.12: database and then they're able to do 

1885.0 - 3.88: this um right now we still have most of 

1887.639 - 3.88: mathematics do not have enough 

1888.88 - 4.56: databases we are still a data poor 

1891.519 - 4.961: science in many 

1893.44 - 4.359: ways okay um this I have some slides on 

1896.48 - 2.84: large language models but maybe there's 

1897.799 - 3.161: not much that hasn't already been said 

1899.32 - 4.0: um this was sort of you know I mean 

1900.96 - 4.36: large sometimes they can solve really 

1903.32 - 3.92: yeah so for example now they can solve 

1905.32 - 3.12: like Olympiad level um problems high 

1907.24 - 2.679: school math competitions that most high 

1908.44 - 3.32: school students can't solve and 

1909.919 - 3.921: sometimes they can get perfect answers 

1911.76 - 5.44: um and sometimes they can't do basic 

1913.84 - 5.28: arithmetic um so you know you you can 

1917.2 - 4.0: you can give it an arithmetic summer and 

1919.12 - 3.279: it would just uh happily spit out the 

1921.2 - 2.839: wrong answer and then you point out that 

1922.399 - 4.441: was wrong and say I'm sorry I had a typo 

1924.039 - 4.64: and so forth it's it's patent matching 

1926.84 - 4.48: it's it's weird that somehow this the 

1928.679 - 4.161: set of tasks that that large language models 

1931.32 - 3.4: are good at is almost orthogonal to the set 

1932.84 - 3.16: of tasks that humans are good at um so 

1934.72 - 2.559: things that we find hard they can find 

1936.0 - 5.159: easy and things that we find easy they 

1937.279 - 8.961: can find hard uh it's a very weird tool 

1941.159 - 6.48: um but um so you by themselves uh I mean 

1946.24 - 3.159: they are already useful by themselves for 

1947.639 - 3.481: for various things like if you want to 

1949.399 - 4.561: quickly learn a subject that's not quite 

1951.12 - 4.159: in your field um it's it's like a really 

1953.96 - 4.199: good version interactive version of 

1955.279 - 5.321: Wikipedia so you can do some sort of 

1958.159 - 4.441: literature search for basic things uh 

1960.6 - 4.679: you can you can Sly WR code you can you 

1962.6 - 4.72: can you can format you can write 

1965.279 - 3.481: you know if you have a tricky latch 

1967.32 - 2.64: image you want to make you can do that 

1968.76 - 5.399: there's lots of secondary tasks which is 

1969.96 - 5.28: very useful um you can also um ask it 

1974.159 - 2.161: for suggestions of how to solve a 

1975.24 - 3.2: problem and you know give you 10 

1976.32 - 3.959: suggestions of which seven are rubbish 

1978.44 - 2.8: um but and two are kind of things you 

1980.279 - 3.64: already thought of but you know one 

1981.24 - 6.039: might be an interesting idea 

1983.919 - 4.72: um um people beginning to combine all 

1987.279 - 4.081: these different ways of using computers 

1988.639 - 5.241: together um so uh this is very promising 

1991.36 - 4.0: approach by various groups to to 

1993.88 - 2.639: construct so one of the the biggest 

1995.36 - 2.24: problems in fluid equations in 

1996.519 - 2.88: mathematical fluid equations is to 

1997.6 - 2.88: construct solutions initial conditions 

1999.399 - 3.0: to fluids that actually develop 

2000.48 - 3.12: singularities in finite time there's a 

2002.399 - 2.64: particular equation called Navier-Stokes 

2003.6 - 2.88: that we really want to construct 

2005.039 - 2.36: solutions to but actually there's a lot 

2006.48 - 2.64: of other fluid equations that are 

2007.399 - 5.801: simpler uh that we would we would love 

2009.12 - 6.96: to um to rigorously show blow up um you 

2013.2 - 4.64: can um so there seems to be this 

2016.08 - 4.16: two-step process uh so the way to do 

2017.84 - 4.0: this we think now is to first use 

2020.24 - 3.159: machine learning and similar tools to 

2021.84 - 4.719: first construct approximate solutions 

2023.399 - 4.76: that almost blow up um but blow up 

2026.559 - 3.921: almost blow up but but to really high 

2028.159 - 4.281: accuracy that they're within like like 

2030.48 - 3.0: 10 decimal points in position to 

2032.44 - 2.88: something that actually does blow up in 

2033.48 - 4.439: some sense um and then combine that with 

2035.32 - 4.16: some really rigorously verified um p 

2037.919 - 3.521: analysis that shows that that any 

2039.48 - 4.319: approximate blob solution has to be 

2041.44 - 5.119: close to an exact solution so you can 

2043.799 - 5.08: use whatever non-rigorous error prone AI 

2046.559 - 3.84: you wish to find the candidate um 

2048.879 - 4.161: but then you you couple it with some 

2050.399 - 4.841: rigorous verification at the end um and 

2053.04 - 3.799: this has worked already for for for 

2055.24 - 3.48: simple fluid equations and we're so 

2056.839 - 3.481: slowly climbing the ladder of more more 

2058.72 - 3.6: sophisticated fluid equations I so I 

2060.32 - 3.96: think in 10 years we we might actually 

2062.32 - 4.799: get the Navier-Stokes it'll be a big 

2064.28 - 5.44: program but it's uh we're very close to 

2067.119 - 2.601: here 

2069.96 - 6.399: um okay so 

2073.72 - 5.72: um as you saw large language models are 

2076.359 - 6.401: very bad at arithmetic and it just um 

2079.44 - 5.199: they they they make so many mistakes um 

2082.76 - 4.2: um so like using them to directly 

2084.639 - 4.161: calculate in math is very unreliable 

2086.96 - 3.679: weirdly it works better if it's a very 

2088.8 - 4.039: high level math with not much numerical 

2090.639 - 5.48: calculation but the more nums there are 

2092.839 - 5.121: the more error prone it is um so what 

2096.119 - 3.281: we're slowly beginning to realize is that 

2097.96 - 3.36: the way to proceed actually is to get 

2099.4 - 4.12: the large language model not to directly 

2101.32 - 4.64: do the math but to generate code in a 

2103.52 - 4.28: more reliable language like Python what 

2105.96 - 4.6: a traditional computing language and 

2107.8 - 5.48: then run that um to solve your problem 

2110.56 - 6.64: um and this seems to be a a a much more 

2113.28 - 5.28: promising paradigm um uh for example 

2117.2 - 2.56: there there are many problems where the 

2118.56 - 2.72: task is to construct some high 

2119.76 - 2.92: dimensional counterexample and and 

2121.28 - 3.4: there's some really high dimensional 

2122.68 - 4.32: space of possible candidates and doing 

2124.68 - 5.0: standard optimization or or machine 

2127.0 - 4.64: learning doesn't work um but instead 

2129.68 - 3.48: writing a much smaller computer program 

2131.64 - 4.16: to generate a candidate which is high 

2133.16 - 5.64: dimensional running that and doing some 

2135.8 - 5.799: iteration on on that code uh it has 

2138.8 - 4.799: already begun to improve some um 

2141.599 - 3.841: mathematical props for example we the 

2143.599 - 3.881: fastest uh matrix modification 

2145.44 - 5.6: algorithm for large matrices now is is 

2147.48 - 6.8: due to this uh this AI fun fund search 

2151.04 - 6.72: which was created by Google 

2154.28 - 5.76: deep um and um there are these ongoing 

2157.76 - 3.839: um artificial um intelligence math 

2160.04 - 3.039: Olympiad challenges I'm actually on the 

2161.599 - 5.081: scientific advisory board of of 

2163.079 - 5.361: this of this one um so we have um the 

2166.68 - 3.28: dream is to get an AI to actually 

2168.44 - 5.52: achieve you know gold medal performance 

2169.96 - 6.04: at uh one of these uh these Olympiads um 

2173.96 - 3.359: um hopefully using something which is 

2176.0 - 3.0: open source and something that that can 

2177.319 - 3.441: actually be be replicated by other 

2179.0 - 4.079: people and not just requiring some you 

2180.76 - 5.04: know $10 million of compute uh and and 

2183.079 - 5.04: lots of lots of fine tuning um but you 

2185.8 - 4.84: know we now there open source models now 

2188.119 - 5.521: that can that can uh so we we haven't 

2190.64 - 4.679: yet achieved performance at at really 

2193.64 - 4.28: the limited level um one of the problems 

2195.319 - 6.681: actually is grading uh the output of of 

2197.92 - 5.84: of these uh um of these uh these models 

2202.0 - 4.16: uh we don't have enough human graders to 

2203.76 - 3.88: to evaluate the output here so we have 

2206.16 - 2.8: to content ourselves working with 

2207.64 - 2.84: problems that have numerical solutions 

2208.96 - 3.04: like a problem whose an is a three-digit 

2210.48 - 3.44: number because that we can check 

2212.0 - 4.839: automatically but uh they did 

2213.92 - 5.88: surprisingly well um so um you know so 

2216.839 - 4.48: on on a medium tier Olympiad level 

2219.8 - 6.08: you know they can now achieve you know 

2221.319 - 6.161: 50 60% performance um again the secret 

2225.88 - 3.439: was to not solve the problem directly 

2227.48 - 4.0: but to generate code that would then 

2229.319 - 5.52: then solve the 

2231.48 - 5.2: problem um yeah okay it says there's a 

2234.839 - 3.561: similar um there's another algorithm that 

2236.68 - 5.36: solves geometry questions but maybe I I 

2238.4 - 8.24: will skip uh skip that 

2242.04 - 8.319: um yeah so um there's been success uh so 

2246.64 - 4.959: instead of outputting in Python um um 

2250.359 - 4.0: people are beginning to figure out how 

2251.599 - 4.921: to get AIs to to to output in these um 

2254.359 - 5.48: proof verification languages like lean 

2256.52 - 5.839: so uh you can um um so this is recent 

2259.839 - 4.881: success in solving Olympiad like genuinely 

2262.359 - 4.441: Olympiad level questions by converting 

2264.72 - 5.32: the question into a lean statement and 

2266.8 - 6.12: then um using a version of AlphaZero's 

2270.04 - 6.12: uh um um program which is what DeepMind 

2272.92 - 7.0: used to like you know um um so go for 

2276.16 - 6.32: instance um and you know viewing these 

2279.92 - 4.08: math problems as this massive game 

2282.48 - 4.2: where there's certain moves you can do 

2284.0 - 5.4: and you just need to get from A to B um 

2286.68 - 4.159: and then they can prove quite 

2289.4 - 2.679: difficultly these Olympic level problems 

2292.079 - 4.441: after like massive massive compute um 

2294.839 - 3.881: although the proofs are really really 

2296.52 - 5.0: weird uh I mean the 

2298.72 - 5.0: they're um the proofs are completely 

2301.52 - 3.599: inefficient okay so for example this 

2303.72 - 3.44: they solved this IMO problem and the 

2305.119 - 3.0: first step is to induct on on the number 

2307.16 - 3.36: 10 

2308.119 - 3.561: uh which makes no sense um it's actually 

2310.52 - 2.64: it's a step that you could just delete 

2311.68 - 4.72: and it would still actually be a valid 

2313.16 - 4.88: proof um but uh yeah and then actually 

2316.4 - 4.24: there's some human commentary you 

2318.04 - 4.2: know they yeah they Pro spend 169 

2320.64 - 4.32: proving a lemma and then it gets 

2322.24 - 4.52: used without being used um like it's a 

2324.96 - 3.399: completely alien type of proof this 

2326.76 - 3.72: is not what a human would would would 

2328.359 - 3.681: would write but it can solve these 

2330.48 - 2.96: questions and we don't really understand 

2332.04 - 3.12: why partly because we don't have access 

2333.44 - 3.32: to the actual source code or
anything this is all just what Deep Mind reports but anyway right um yeah but you can solve these mive problems um one thing I've been involved in is um trying to use these tools to actually do new math rather than just solve existing questions um so I had created this test project where um so one thing which these tools can maybe do is do mass exploration of um um many many math problems at once you know so math editions right now we can only work on one problem at a time spend months on it and then we go to the next problem um but potentially now you can try to attack millions of problems not the most difficult problems but millions of sort of medium difficulty problems um using computers and that is a different style of more experimental mathematics which I think will become more and more um prevalent.

So here is one example just as proof of concept that we started doing um so um you may be familiar with various laws of algebra like the commutative law x * y = y * x and the associative law x * y * z = x * (y * z) um and so some axioms obey these laws and some don't um and so we just proceed to generate 4,000 laws of algebra okay so like the commutative law is this one here x * y = y * x but maybe you know x * a = x * y and so forth um so we just generated all these um um equations and we give them names um and some of them imply other ones um so for instance if x is equal to x * y then it turns out that x * y * z is always equal to x * w * u there's some algebraic deduction that you can use some of these laws to prove other ones but some laws are not connected um like uh um let's see for example uh this law x * x = y does not imply x * y = y * x because you can construct operations that obey this one but not the other one and so we have these 4,000 or so um laws and there's like 20 million pairs between these laws and the question is which laws imply which other ones uh and so the project is basically just to explore this entire graph um so any given edge is fairly easy you know like someone who has a graduate level exposure to algebra or something could maybe just take one of these pairs and by hand you know half an hour figure out which one's true which one's false but you have 22 million of these things you have to do it in an automated way um and so uh we managed to do this okay.

So in about two or three months we completely determined this graph some were easy some were hard um we did know in advance which ones were easy which ones were hard um and so uh this was crowdsourced there's going to be a paper with about 5050 co-authors which may be close to a record actually in mathematics um where um uh you know so we have these 20 million tasks and so people can work on one or ten or a million of these they can deploy their favorite AI tool and so scan all of these uh implications and see which ones uh they can do and can't and um then it all gets uploaded to a central database and everything has be verified in Lean so uh you can't corrupt I mean if there was one of them that was wrong it sort of ruins the whole thing but everything has to be certified.

Um and most of our collaboration we didn't know each other um there were people um most of them are not even mathematicians but um different people contribute different things um some people might uh one person might figure out one relationship between um um two of these equations and then someone else would generalize it and then write a computer tool in say Rust or something to search all the other um implications and then um and then some a third person would take that computer program and make it produce output in Lean when it gets uploaded and like no single person could do all this we always have these also these beautiful um visualizations that I have no idea how to write um but it all got uh put together.

Um we used um actually surprisingly we didn't actually use modern AI very much so we didn't use all these fancy tools partly because we didn't have the budget for the computer or anything um we used much more classical a thing called automated theorem proving that I mentioned very briefly at the beginning um the main application currently of these large language models was to build the graphic interfaces um around the project but not um they were not super successful at the actual tasks themselves but I think that's just a matter of time um but it's a new type of doing mathematics which you couldn't do without all these tools before I mean you could not prove 22 million of these implications with just humans.

So um yeah so where do I see all these tools in the near future um so you know I mean the the N thing is that you just you know you should you could just ask your favorite problem into chat GPT and it will give you the answer this does not work um but there's lots of side tasks which are very very useful so um semantic search um it's already beginning to get good at you know you write a very R question you know I need a tool that that controls this random variable given this assumption but I don't know what to search for and if it's something fairly standard it will give you exactly what it is to tell you exactly what it is or it can give you it may not give you the same right answer but it will give you some keywords that you can search for um formalization is still a pain as I said it takes 10 times longer to formalize the proof than to write it by hand but AI tools are beginning to chip this down from 10 to 9 to 8 there are lots of little uh AI assistants that can speed up either the top breaking up a big proof into lots of little pieces or filling in each of the little pieces um and um I think once we have more databases we can do a lot more with math than we can currently so a big bottleneck is just we have to actually get people to create high-quality math databases and we don't have enough um yeah I think we need to change or at least broaden our workflows of the ways we do mathematics.

So the traditional project is you pick one hard problem or maybe two or three related problems and you work towards that goal and every step has to be correct you have to have 100% um validity with your steps otherwise you don't have a proof at the end um but all these many of these tools particularly machine learning and AI tools have failure rates sometimes they give you rubbish um so either you need to filter everything through a verifier like Lean um so that's one possibility um but uh more generally you need to somehow have a very modular project where it's okay to have a failure rate you know like instead of solving one problem you solve 22 million problems and if AI tool only solves 10% of those that's already 2 million of the tasks done and you add that to the pile and then you run another AI um so uh we don't do that currently um you know but uh I mean in the other sciences and in the real world you know you deal with failure rates you know um but so uh we need somehow to embrace uh ways to do mathematics how to use AI tools to still produce um rigorous results at the end.

And but it seems like it is possible um and then the final thing I think which uh will potentially be transformed is that we can use these tools to find new ways to teach mathematics um you know so I mean already AI are kind of being used okay so so clearly they're being used to do homework assignments right but uh but um but AI as a service you know like um you know like if it's done in a publicly created way where like you know the AI teaching system does not give you the whole answer but it is it um you know like maybe it would do all the calculations for you but you still have to supply the high-level direction for it or conversely it will give you the high-level prompts and you have to do the step-by-step details like it could really enhance pedagogy I think textbooks can be much more interactive um you know I mean you read a math textbook if there's a step you don't understand you have to ask the instructor how to explain or you need to spend hours working up by yourself what was really meant especially if there's a typo um but um you know uh future textbooks should come with AI assistance you can just ask you know can you explain lemma 3.5 uh and like how does you know you can ask like really specialized questions and you can open up with proofs and and maybe you could get past to a lean version of this proof you can every sentence that is uh you can expand out into a much longer explanation expand and contract as needed there's already some um prototype software for doing this semi-automatically um so that's also I think very exciting uh so I think those are all the uh the different things that I I see so thank you very much.

All right thanks very much for the talk um so he's going to take some questions and there's a button close to your seat that you can use to ask questions uh if it doesn't work I can come over um to give you the mic all right so questions yeah please go ahead uh first of all Professor to thank you thank you for the very wonderful and engaging exciting talk.

Yes. 

Okay hello uh thank you Professor to for the very wonderful engaging and thought-provoking talk. My question was in regards to your mention of some areas of math lacking the data necessary for machine learning algorithms to tackle them. It seems like a lot of the problems you presented were like of very combinatorial nature and like very amenable and approachable by computers or machine learning algorithms to solve so I was curious as to like whether it’d be possible to use um computers or machine learning algorithms to attack problems in other areas of math that might not have as much data or I guess have as much.

Right um yeah yeah that is a challenge I mean um on the formal side actually um algebraic types of mathematics actually been easier to formalize than sort of analysis topics um yeah but uh but for using uh and and weirdly as I said large language models actually seem to be able to do high-level algebraic reasoning a bit better than high-level um um combinatorial or analytic reasoning um um somehow in algebra in particular there's often sort of a canonical way to do things or canonical way to define a certain object and how to use it.

Um yeah I well I'm not an algebraist yeah so I mean um yeah it's most of the data sets that I can't even imagine what data set we'd need okay so um some of it's just collecting literature in one place which which is already sort of useful there's so many fields where the known results in this area just completely dispersed um and hopefully AI can help doing literature reviews, that's another possible use case um another thing is that um like mostly we only uh the data that's out there is mostly only the results the proofs that actually worked um so um actually it's like um one thing that these um Deep Mind type explorations have found is that actually um it's very important to have in the training data not just complete successful proofs of various problems but also proofs that got halfway and then stopped um and then maybe they in the database they also have another proof of something else but they also um got that to something like that halfway point but they were able to keep going um and then somehow they're able to combine um these two things one that proved the right thing but but but stopped halfway and then one to prove something different but kept going and they could combine them um so you know behind every successful proof there's like months and months of trying things that didn't work and then figuring out why they didn't work and then changing your proof strategy and this is something that is almost completely private we don't share this information maybe if you're lucky your adviser might share one of these stories or something um but um you know or but uh or you are in a collaboration and you see real time one of your collaborators doing this um but it's not something that we share um yeah know same reason why we don't publish negative results as much in sciences um and uh maybe we need to do more of that uh just show the process um but I mean the AI in particular has sort of no access to this data and so they can either produce something that looks like a correct proof or something which is rubbish but they don't know how to fix it.

When things go wrong they're very bad at that right now um in one of the examples you mentioned there were lots of propositions most of them were easy to formalize but a few were very hard to formalize right.

Yeah um is there any common structural pattern for those hard to formalize propositions um that's a good question um yeah what we found was that there are these sort of techniques so there's these 20 million implications and we had certain techniques you so you could try using an automated improver you can play with small examples like just play with small modification tables there are certain constructions based on linear algebra um and each one sort of um covered some percentage of these um and so there's this sort of residual set of survivors that just sort of were somehow immune to all the previous techniques um and they were a very eclectic set um we don’t um the only thing in common is that none of the easy methods worked on them um so they did kind of look like uh yeah so there's sort of this math from Mars aspect you know so as I said you know there are some famous laws of algebra like the associative law and commutative law that are very well studied um and actually all the implications involving those were very easily dealt with um and then there's just these few random survivors it's it's like you'd be just passing through several filterings of different methods um and there wasn't a common pattern to them.

Maybe you can collect all of them and train a model just for the hard propositions?

Yeah yeah we were hoping I mean in some sense uh it was a pity that the project succeeded in like two or three months I was hoping that we would get stuck with some core of like 1,000 hard ones and and there would be different people trying increasingly clever things um but we ended up with like a core of about 100 um uh problems that would and so um and some of them implied other ones so like if you solved one you could get 10 for free um and so like the last 100 was just done by hand um yeah we um we didn't use fancy AI or anything at the end thank you.

Very interesting lecture um I'm curious if you've investigated like the latent representation of proofs or parts of proofs uh because one of the breakthroughs that happened with language models was to have a representation of first words and then combinations of words and then ideas in a high-dimensional space and with that the models are able to recognize patterns and form things and I'm thinking there might be an analogy of this in proofs and also objects of things like knots and so on.

Uh it's certainly possible um we have found for example there are databases of graphs um and and there's different ways you can describe a graph you can describe edges you can describe the adjacency matrix which is a big string of ones and zeros or you can list the edges um and there's some other ways to construct graphs and we have definitely found that the representation matters um that uh that some machine learning algorithms when trained on graphs with the wrong representation are much less efficient um and we don't really understand what is um like right now basically this is a trial and error process every time you say I'm going to use a new network to attack my problem you have to make all these decisions at the beginning how you represent your data what your parameters are and what you count what's your loss function and um it's not it's an art it's not a science yet.

Um it's possible that the same thing was true for proofs yeah I think um for now you know these proofs are just being tokenized as text um and somehow large language models they just have sort of a general understanding of text uh as written by humans but this seems good enough um I mean yeah but but if you got away from the text and got closer to the intrinsic uh mathematical operations and logic and reasoning that parts of the proof then it could build predictions and form patterns and yeah theoretically um I think the thing is it's very hard to compete with large language models because they have trained at great expense on massive amounts of text and there's no comparable database for these diagrammatic representations of proofs that um maybe you could start with all the Lean proofs and train from scratch small 0.1% of the size of sort of the internet you know which is sort of what LMS get to train on um so uh yeah but this will happen I think.

Yeah yeah thank you.

Last question.

Uh so thank you thank you very much for your talk so the examples you gave were from specific areas of mathematics not number theory or group theory where already the problem was pretty well identified yes and then they had some proof strategy which they explored further.

Now in the uh 1950s and 1960s as you know um what people discovered is that uh people in different areas of mathematics were doing similar things in different languages and this led to the development of category theory and the notion of functor and so on in order to transfer uh basically structures and results from one area to another and this uh discussion of latent structures reminds me of that is there any attempt to use the language and formalism of category theory to for example build high-level proof assistance which does not depend on a specific uh set of objects like specific universe of objects?

Yes, there are proposals okay yeah so so this thing called homotopy type theory which is in principle designed to do that uh it writes proofs in a way that you can really perturb the forms continuously of the objects that you’re working with and the proof somehow survives um uh none of the major proof assistant languages currently are based on that framework uh in principle it could be done um part of it is that most of mathematics is not written in these frameworks yet is written in much more orthodox you know set theory type things and so um you know in order to actually have enough of a critical mass of people working on these things you need to work in a language that most mathematicians are familiar with um so it's sort of two steps to like it's ideally we could write proofs in a in a much in this abstract language but that's not what we do as working mathematicians every day.

So the amount of effort that people would put into formalizing that would be very very small right now maybe once formalization becomes a lot easier with AI assistance we could we could start doing this that way and maybe maybe that would actually be a much more efficient way you could easily take a proof in topology and change it to a proof in...
3542.839 - 6.601: Geometry or something you know without 

3544.68 - 4.76: having to redo everything, yeah
