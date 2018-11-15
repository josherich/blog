---
layout: post
title:  "[译] SmallTalk 的早期历史 The Early History of Smalltalk"
description: "SmallTalk的早期历史 The Early History of Smalltalk"
date:   2015-02-02 20:02:39
categories: history
tags: [language, smalltalk, functional]
---
摘要

太阳底下没有新鲜事。六十年代，随着交互式计算机，图形屏幕和指示设备的出现，在ARPA社区中兴起了“人机共存”的概念。为了模拟像石油过滤和半智能行为这样的复杂系统，人们发明了高级计算机语言。六十年代的那些工作不仅是老一套，随后衍生的现代个人计算，包括窗口界面，面向对象的设计等范式正是扎跟于此。无论是对大型计算，终端用户的功能使用，让数据结构更抽象，都有重大的意义。单位体积和单位价格的计算能力呈现指数级的增长，人们期望找到六十年代的成果中真正的创新。比如手持Dynabook的便携计算是大型机无法匹敌的；Dynabook有着上百万的潜在用户，这也意味着用户界面需要变成符合 Montessori 和 Bruner 教育规范的学习环境。较大的可视屏幕，减少复杂度，用户可以在上面读写，这些都要求数据和控制结构todo

早期的 Smalltalk 是这些新观点的第一个完整实现，也继承了其在硬件，语言和用户界面设计方面的先辈们。她成了新一代计算的典范，部分的原因是当时正经历着关于信仰系统本质上的转换-和印刷媒体的发明同样具有意义的一种(库恩范式)[https://en.wikipedia.org/wiki/Paradigm_shift]-因此我们对这些观点极力推崇，推动了这些技术的发明todo

Abstract

Most ideas come from previous ideas. The sixties, particularly in the ARPA community, gave rise to a host of notions about "human-computer symbiosis" through interactive time-shared computers, graphics screens and pointing devices. Advanced computer languages were invented to simulate complex systems such as oil refineries and semi-intelligent behavior. The soon-to-follow paradigm shift of modern personal computing, overlapping window interfaces, and object-oriented design came from seeing the work of the sixties as something more than a "better old thing." 
This is, more than a better way: to do mainframe computing; for end-users to invoke functionality; to make data structures more abstract. Instead the promise of exponential growth in computing/$/volume demanded that the sixties be regarded as "almost a new thing" and to find out what the actual "new things" might be. For example, one would compute with a handheld "Dynabook" in a way that would not be possible on a shared mainframe; millions of potential users meant that the user interface would have to become a learning environment along the lines of Montessori and Bruner; and needs for large scope, reduction in complexity, and end-user literacy would require that data and control structures be done away with in favor of a more biological scheme of protected universal cells interacting only through messages that could mimic any desired behavior.

Early Smalltalk was the first complete realization of these new points of view as parented by its many predecessors in hardware, language and user interface design. It became the exemplar of the new computing, in part, because we were actually trying for a qualitative shift in belief structures—a new Kuhnian paradigm in the same spirit as the invention of the printing press—and thus took highly extreme positions which almost forced these new styles to be invented.

目录

简介
1. 1960-66 早期 OOP 和六十年代其他的形式概念
B220 文件系统
SketchPad 和 Simula

2. 1967-69 FLEX机，一种基于 OOP 的个人电脑
Doug Englebart 和 NLS
Plasma Panel, GRAIL, LOGO, Dynabook

3. 1970-72 Xerox PARC 12
KiddiKomp
miniCOM
Smalltalk-71
Overlapping Windows
字体编辑，绘画，动画，音乐
字节码
符号编程 Iconic Programming

4. 1972-76 Xerox PARC: 第一个真正的 Smalltalk
两个赌注: Smalltalk 的诞生和 Interim Dynabook
Smalltalk 72 原则
Smalltalk 的用户界面
Smalltalk 应用和系统的发展
Smalltalk 的进化: ST-74, ooze 存储管理
Smalltalk 和她的孩子们

5. 1976-80 第一个现代Smalltalk (-76)
烧掉我们的磁盘包
记笔记
Smalltalk 76
继承
Xerox的更多麻烦
ThingLab
Apple 演示

6. 1980-83 Smalltalk的发布(-80)
变换
Coda

参考
附录1 KiddiKomp Memo
附录2 Smalltalk-72 解释器设计
附录3 致谢
附录4 事件驱动循环的例子
附录5 Smalltalk 76 内部结构


Introduction
简介

我正坐在35000英尺高的飞机上写这篇简介。在我膝盖上的是一台5磅todo重的笔记本 1992年的Interim Dynabook，那年底她的售价低于700美元。在她平坦，脆弱的高清位图屏幕上，包含着窗口，图标，和一个指示设备，可观的存储和计算能力，其中最好的软件是面向对象实现的。她内置高端的网络功能，更可以选装无线网络。这套系统运行着Smalltalk，我也用Smalltalk来完成我现在todo有关孩子的工作。可以说她不只是一台Dynabook（数量上），也可以说她还不是一台Dynabook（质量上）。总之，非常符合六十年代晚期的想象。

Smalltalk是ARPA伟大事业的一部分，也是稍晚Xerox PARC，也就是我称之为个人计算的一部分。研究社区中的许多人都在不同阶段作出了贡献，所以很难准确地说功劳应该属于谁。事实上，正如 Bob Barton 经常引用歌德的话所说: 我们应该共享发现的喜悦，而不是徒劳地争取功名。

I'm writing this introduction in an airplane at 35,000 feet. On my lap is a five pound notebook computer—1992's "Interim Dynabook"—by the end of the year it sold for under $700. It has a flat, crisp, high-resolution bitmap screen, overlapping windows, icons, a pointing device, considerable storage and computing capacity, and its best software is object-oriented. It has advanced networking built-in and there are already options for wireless networking. Smalltalk runs on this system, and is one of the main systems I use for my current work with children. In some ways this is more than a Dynabook (quantitatively), and some ways not quite there yet (qualitatively). All in all, pretty much what was in mind during the late sixties.

Smalltalk was part of this larger pursuit of ARPA, and later of Xerox PARC, that I called personal computing. There were so many people involved in each stage from the research communities that the accurate allocation of credit for ideas is intractably difficult. Instead, as Bob Barton liked to quote Goethe, we should "share in the excitement of discovery without vain attempts to claim priority."

我会尽量向你们展示影响从何而来，他们又是怎样在个人计算的浪潮中转变成型的。Smalltalk 发明归功于先驱们的态度和伟大的理念。这个时代许多我所欣赏的人-包括 Ivan Sutherland, Marvin Minsky, Seymour Papert, Gordon Moore, Bob Barton, Dave Evans, Butler Lampson, Jerome Bruner 等等-似乎都认为他们的发明在相对标准下虽然十分出彩，但并没有达到取得突破需要的界限。渺小的头脑会形成宗教，伟大的头脑只想要到达山顶的捷径。牛顿说自己在巨人的肩膀上看得更远，计算机科学家却经常站在对方的脚趾上。即使不缺少巨人的肩膀，近视才是问题所在，看得远比看得深更重要，却总被异常敏感的审美和批评压制着。

程序语言可以被归纳为几类: 声明式，应用式，逻辑式，问题导向式等等。但他们要么是“特性的粘合”，要么是“风格的具体化”。COBOL, PL/1, Ada 等属于第一种，LISP, APL 和 Smalltalk 属于第二种。粘合性的语言都是委员会所发起，而具体化语言多由个人创造，这也是意料之中了。

I will try to show where most of the influences came from and how they were transformed in the magnetic field formed by the new personal computing metaphor. It was the attitudes as well as the great ideas of the pioneers that helped Smalltalk get invented. Many of the people I admired most at this time—such as Ivan Sutherland, Marvin Minsky, Seymour Papert, Gordon Moore, Bob Barton, Dave Evans, Butler Lampson, Jerome Bruner, and others—seemed to have a splendid sense that their creations, though wonderful by relative standards, were not near to the absolute thresholds that had to be crossed. Small minds try to form religions, the great ones just want better routes up the mountain. Where Newton said he saw further by standing on the shoulders of giants, computer scientists all too often stand on each other's toes. Myopia is still a problem where there are giants' shoulders to stand on—"outsight" is better than insight—but it can be minimized by using glasses whose lenses are highly sensitive to esthetics and criticism.

Programming languages can be categorized in a number of ways: imperative, applicative, logic-based, problem-oriented, etc. But they all seem to be either an "agglutination of features" or a "crystallization of style." COBOL, PL/1, Ada, etc., belong to the first kind; LISP, APL— and Smalltalk—are the second kind. It is probably not an accident that the agglutinative languages all seem to have been instigated by committees, and the crystallization languages by a single person.

Smalltalk 的设计和存在是出于这样一种观点: 即我们能描述的一切事物可以由单个行为模块递归地组成，这些模块把自己的状态和过程隐藏起来，只通过消息交换来操作。在哲学层面，Smalltalk 的对象和莱布尼兹的[单子]()，和20世纪物理和生物中的概念都颇为相似。 她创造对象的方式颇为柏拉图式，因为某些创造对象的方法是理想化的抽象概念，这些概念可以产生具象的东西。而这些概念本身又是更高层次的抽象概念的具象化，依次类推。因此这个系统可以完全的自我描述。柏拉图一定会欣赏这个极端的 todo 恶作剧。



Smalltalk's design—and existence—is due to the insight that everything we can describe can be represented by the recursive composition of a single kind of behavioral building block that hides its combination of state and process inside itself and can be dealt with only through the exchange of messages. Philosophically, Smalltalk's objects have much in common with the monads of Leibniz and the notions of 20th century physics and biology. Its way of making objects is quite Platonic in that some of them act as idealizations of concepts—Ideas—from which manifestations can be created. That the Ideas are themselves manifestations (of the Idea-Idea) and that the Idea-Idea is a-kind-of Manifestation-Idea—which is a-kind-of itself, so that the system is completely self-describing— would have been appreciated by Plato as an extremely practical joke [Plato].

In computer terms, Smalltalk is a recursion on the notion of computer itself. Instead of dividing "computer stuff" into things each less strong than the whole—like data structures, procedures, and functions which are the usual paraphernalia of programming languages—each Smalltalk object is a recursion on the entire possibilities of the computer. Thus its semantics are a bit like having thousands and thousands of computers all hooked together by a very fast network. Questions of concrete representation can thus be postponed almost indefinitely because we are mainly concerned that the computers behave appropriately, and are interested in particular strategies only if the results are off or come back too slowly.

Though it has noble ancestors indeed, Smalltalk's contribution is a new design paradigm—which I called object-oriented—for attacking large problems of the professional programmer, and making small ones possible for the novice user. Object-oriented design is a successful attempt to qualitatively improve the efficiency of modeling the ever more complex dynamic systems and user relationships made possible by the silicon explosion.

"We would know what they thought
when they did it."
—Richard Hamming

"Memory and imagination are but two
words for the same thing."
—Thomas Hobbes

In this history I will try to be true to Hamming's request as moderated by Hobbes' observation. I have had difficulty in previous attempts to write about Smalltalk because my emotional involvement has always been centered on personal computing as an amplifier for human reach—rather than programming system design—and we haven't got there yet. Though I was the instigator and original designer of Smalltalk, it has always belonged more to the people who make it work and got it out the door, especially Dan Ingalls and Adele Goldberg. Each of the LRGers contributed in deep and remarkable ways to the project, and I wish there was enough space to do them all justice. But I think all of us would agree that for most of the development of Smalltalk, Dan was the central figure. Programming is at heart a practical art in which real things are built, and a real implementation thus has to exist. In fact many if not most languages are in use today not because they have any real merits but because of their existence on one or more machines, their ability to be bootstrapped, etc. But Dan was far more than a great implementer, he also became more and more of the designer, not just of the language but also of the user interface as Smalltalk moved into the practical world.

Here, I will try to center focus on the events leading up to Smalltalk-72 and its transition to its modern form as Smalltalk-76. Most of the ideas occurred here, and many of the earliest stages of OOP are poorly documented in references almost impossible to find.

This history is too long, but I was amazed at how many people and systems that had an influence appear only as shadows or not at all. I am sorry not to be able to say more about Bob Balzer, Bob Barton, Danny Bobrow, Steve Carr, Wes Clark, Barbara Deutsch, Peter Deutsch, Bill Duvall, Bob Flegal, Laura Gould, Bruce Horn, Butler Lampson, Dave Liddle, William Newman, Bill Paxton, Trygve Reenskaug, Dave Robson, Doug Ross, Paul Rovner, Bob Sproull, Dan Swinehart, Bert Sutherland, Bob Taylor, Warren Teitelman, Bonnie Tennenbaum, Chuck Thacker, and John Warnock. Worse, I have omitted to mention many systems whose design I detested, but that generated considerable useful ideas and attitudes in reaction. In other words "histories" should not be believed very seriously but considered as "FEEBLE GESTURES OFF" done long after the actors have departed the stage.

Thanks to the numerous reviewers for enduring the many drafts they had to comment on. Special thanks to Mike Mahoney for helping so gently that I heeded his suggestions and so well that they greatly improved this essay—and to Jean Sammet, an old old friend, who quite literally frightened me into finishing it—I did not want to find out what would happen if I were late. Sherri McLoughlin and Kim Rose were of great help in getting all the materials together.