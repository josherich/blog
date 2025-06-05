---
layout: post
title: "CppCon 2014: Mike Acton "Data-Oriented Design and C++""
date: 2025-04-07 00:00:01
categories: podcast
tags: [podcast_script]
---


[CppCon 2014: Mike Acton "Data-Oriented Design and C++"](https://www.youtube.com/watch?v=rX0ItVEVjHc)

I want to introduce someone who's going to introduce our keynote speaker. I want to bring up Alex Rosenberg. He's the manager of Platform Architecture for Sony Playstation. 

[applause] 

I got asked, "Who from the games industry should come talk to this crowd?" The games industry is largely... well, the console gaming industry is largely C++-based, so really there's only one name for me, and that's who we're going to see today: Mike Acton, who is engine director at Insomniac Games. 

I don't know if you know their titles, but they've done some like "Resistance" and "Ratchet & Clank," and "Fuse," and "Sunset Overdrive" is their new one. They pretty reliably put out two console games a year, which, if you have no frame of reference, is a herculean effort. Hundreds of people are involved in these things, and getting it all to happen on schedule is very challenging, and that's a core part of what Mike does there. 

He's also been responsible for quite a bit of technology sharing in the games industry. The first thing that I have in my head is the Cell performance website, which was for people working on the Cell chips that we used in the Playstation 3, as well as researchers who were using them. More recently, Mike did AltDevBlogADay, where he encouraged people from the games industry to write a single blog entry each day on a common shared website, so there was always something to read. On Insomniac's page, there are papers on various research they've done and things they've had success with. It's all been fascinating reading. 

With that, it's my pleasure to introduce Mike Acton. 

[applause] 

Thanks. 

Hello, everybody. Thanks, Alex. So, yes, I'm Mike Acton. I'm Engine Director at Insomniac Games. How many people here are game developers? 

OK. That's a relatively small minority of you. I want to give a little bit of background, anticipating that... on what I do, what our team does in the context of making games. So we as a team generally build the runtime systems, especially the systems that require the most performance, and are the most used in a game as far as the amount of data that's been transformed. 

So the examples are the rendering system, animation and gestures, streaming, cinematics, visual effects, post effects, navigation, localization, basically all the big kind of systems that are not specifically the game itself. We also do all the development tools, so the tools that we use inside the studio as the studios to make the games: the level creation tools, the lighting tools, the material editing tools, visual effects creation tools, animation/state machine tools for animators, visual scripting, scene painting, cinematics… tons, tons of tools… hundreds of tools.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "I want to introduce someone who's going to introduce our keynote speaker.",
      "section_level": 1,
      "section_title": "Introduction of Alex Rosenberg"
    },
    {
      "index_sentences": "I got asked, \"Who from the games industry should come talk to this crowd?\"",
      "section_level": 1,
      "section_title": "Introduction of Mike Acton"
    },
    {
      "index_sentences": "I don't know if you know their titles, but they've done some like \"Resistance\" and \"Ratchet & Clank,\" and \"Fuse,\" and \"Sunset Overdrive\" is their new one.",
      "section_level": 2,
      "section_title": "Insomniac Games and Production"
    },
    {
      "index_sentences": "He's also been responsible for quite a bit of technology sharing in the games industry.",
      "section_level": 2,
      "section_title": "Contributions to Technology Sharing"
    },
    {
      "index_sentences": "With that, it's my pleasure to introduce Mike Acton.",
      "section_level": 1,
      "section_title": "Formal Introduction and Keynote Begins"
    },
    {
      "index_sentences": "I want to give a little bit of background, anticipating that... on what I do, what our team does in the context of making games.",
      "section_level": 1,
      "section_title": "Mike Acton's Role at Insomniac Games"
    },
    {
      "index_sentences": "So we as a team generally build the runtime systems, especially the systems that require the most performance, and are the most used in a game as far as the amount of data that's been transformed.",
      "section_level": 2,
      "section_title": "Team Focus: Runtime Systems"
    },
    {
      "index_sentences": "We also do all the development tools, so the tools that we use inside the studio as the studios to make the games: the level creation tools, the lighting tools, the material editing tools, visual effects creation tools, animation/state machine tools for animators, visual scripting, scene painting, cinematics… tons, tons of tools… hundreds of tools.",
      "section_level": 2,
      "section_title": "Team Focus: Development Tools"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "Alex Rosenberg introduced Mike Acton, and the initial speaker introduced Alex Rosenberg.",
      "index_of_source": "I want to introduce someone who's going to introduce our keynote speaker. I want to bring up Alex Rosenberg. He's the manager of Platform Architecture for Sony Playstation.",
      "question": "According to the text, who introduced Mike Acton, and who introduced the person who introduced him?"
    },
    {
      "answer": "According to the speaker, Mike Acton was chosen because the console gaming industry is largely C++-based, and he was considered the \"only one name\" suitable for the crowd.",
      "index_of_source": "The games industry is largely... well, the console gaming industry is largely C++-based, so really there's only one name for me, and that's who we're going to see today: Mike Acton, who is engine director at Insomniac Games.",
      "question": "What was the primary reason given for selecting Mike Acton to speak?"
    },
    {
      "answer": "Reliably releasing two console games a year is considered a \"herculean effort\" because it involves hundreds of people, and getting everything done on schedule is very challenging.",
      "index_of_source": "They reliably put out two console games a year, which, if you have no frame of reference, is a herculean effort. Hundreds of people are involved in these things, and getting it all to happen on schedule is very challenging, and that's a core part of what Mike does there.",
      "question": "Why is Insomniac Games' achievement of reliably putting out two console games per year described as a \"herculean effort\"?"
    },
    {
      "answer": "Mike Acton has been involved in initiatives like the Cell performance website for PS3 developers, starting AltDevBlogADay to encourage daily industry blogging, and publishing papers on Insomniac's website.",
      "index_of_source": "He's also been responsible for quite a bit of technology sharing in the games industry. The first thing that I have in my head is the Cell performance website, which was for people working on the Cell chips that we used in the Playstation 3, as well as researchers who were using them.",
      "question": "What were some of the technology sharing efforts that Mike Acton has been involved with?"
    },
    {
      "answer": "Mike Acton's team builds runtime systems, particularly those requiring high performance and transforming large amounts of data, such as rendering, animation, streaming, cinematics, visual effects, navigation, and localization.",
      "index_of_source": "So we as a team generally build the runtime systems, especially the systems that require the most performance, and are the most used in a game as far as the amount of data that's been transformed. So the examples are the rendering system, animation and gestures, streaming, cinematics, visual effects, post effects, navigation, localization, basically all the big kind of systems that are not specifically the game itself.",
      "question": "What types of runtime systems does Mike Acton's team at Insomniac Games specialize in building?"
    },
    {
      "answer": "Besides runtime systems, Mike Acton's team is responsible for creating all the development tools used internally at Insomniac Games to make their games.",
      "index_of_source": "We also do all the development tools, so the tools that we use inside the studio as the studios to make the games: the level creation tools, the lighting tools, the material editing tools, visual effects creation tools, animation/state machine tools for animators, visual scripting, scene painting, cinematics… tons, tons of tools… hundreds of tools.",
      "question": "What is the other major area of responsibility for Mike Acton's team apart from runtime systems?"
    },
    {
      "answer": "The text implies that Mike Acton's role as Engine Director is a \"core part\" of the effort to get the games done on schedule, highlighting its importance in navigating the challenges of timely releases involving hundreds of people.",
      "index_of_source": "Hundreds of people are involved in these things, and getting it all to happen on schedule is very challenging, and that's a core part of what Mike does there.",
      "question": "How does Mike Acton's position as Engine Director contribute to Insomniac Games' ability to reliably meet their challenging release schedule?"
    },
    {
      "answer": "The text states that the console gaming industry being largely C++-based makes Mike Acton the \"only one name\" for the speaker, but it does not explicitly detail *why* this characteristic specifically qualifies him above all others for this audience.",
      "index_of_source": "The games industry is largely... well, the console gaming industry is largely C++-based, so really there's only one name for me, and that's who we're going to see today: Mike Acton, who is engine director at Insomniac Games.",
      "question": "The speaker mentions the console gaming industry is largely C++-based as the reason Mike Acton is the \"only one name\" to speak; why does this characteristic make him uniquely suitable for this crowd?"
    }
  ]
};
</script>
