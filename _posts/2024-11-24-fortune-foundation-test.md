---
layout: post
title:  "Zachtronics Fortune Foundation is super hard for LLM"
description: ""
date: 2024-11-24 00:00:01
categories: short
tags: [short]
---
This is used to prompt models, the results from Claude 3.5 Sonnet, Gemini 1.5 Pro and GPT-4o are very disappointing. They all start with the invalid step "Move 0 (Queue 2) to Major Arcana", probably due to some strong bias in the dataset.

```
Follow the rules and solve the following game:

How to play and show steps
Follow the rules and move one card in each step. For each step, show the resulting status of affected queues, or arcana.

Rules
There are 11 queues, the 6th queue is empty initially.
Only cards at the tails of each queue can be moved, and cards can only be moved to the tails of each queue. (e.g. only 8, 4, 12, 14, 5L, 11, 18, 7B, 9R, 10 can be moved in the first step because they are the tails in this example game). Cards in the middle of each queue can not be moved.
Only 0 or 21 can be moved to the major arcana when its head or tail is empty.
Cards may be stacked by suit in increasing or decreasing order.
Only one card may be moved at a time.
To win, move all cards to the foundations.
The major arcana are built up from 0 and down from 21 until they meet.
The minor arcana are built up by suit from A to K.
A card may be placed above the minor arcana foundation, but will block further minor arcana from moving there.

Notation
There are two types of cards, major cards and minor cards. Major cards don't have suits, minor cards have suits. There are four suits: L(green), B(blue), R(red), G(gold).

Foundations
major arcana: _, _
minor arcana: A/L, A/B, A/R, A/G

Cards
1: 5/R, 15, Q/R, 21, 2/G, 19, 8
2: 0, 6/L, 9/L, J/B, 8/L, K/L, 4
3: 8/R, 10/R, 3, 5, 4/R, 16, 12
4: 3/R, 3/G, 2/L, 5/G, J/G, 7/L, 14
5: 3/L, 10/B, 10/G, K/R, 4/B, 17, 5/L
6: _
7: 8/B, 4/G, 5/B, 7/G, 6/G, Q/G, 11
8: 3/L, 1, 4/L, 7/R, Q/L, 3/B, 18
9: 8/G, Q/B, 6, 9/B, 6/R, 9/G, 7/B
10: 6/B, 2/R, 2, K/G, K/B, 10/L, 9/R
11: 9, 20, 7, J/R, 13, 2/B, 10

Example
step 1: move 11 in queue 7 to queue 3 after 12
queue 3: 8/R, 10/R, 3, 5, 4/R, 16, 12, 11
queue 7: 8/B, 4/G, 5/B, 7/G, 6/G, Q/G
```
