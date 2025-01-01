---
layout: post
title:  "Reasoning with Pitman(Catrap)"
description: ""
date: 2024-12-31 00:00:01
categories: short
tags: [short]
---

Pitman is a classic puzzle game on GameBoy, also known as Catrap. I find the game super intuitive and the perfect benchmark to measure reasoning ability. All latest models struggle to solve anything beyond level 1.

![pitman level 1 2 3](/images/pitman-level-1-2-3.png)

Here's the prompt:

------------

Follow the instructions and solve the following game:

In this game, two explorers try to kill all monsters in an underground maze.
- The maze is a grid of cells, each cell is either a wall, a rock, a monster, or an empty space.
- The explorers can move left or right, but they can't move through walls or rocks.
- The explorers can climb ladders, but they can't climb ladders if there is a rock above the ladder.
- The explerers can climb up to top of a ladder and stand on top of it.
- The explorers can also stand on top of walls, rocks, or monsters.
- The explorers can jump down from any height.
- The monsters stay still.
- The explorers can push rocks, but they can't push rocks into walls or other rocks.
- The explorers can kill monsters by running into them. Monsters can not be killed by rocks.
- All objects have gravity, so they fall down if there is nothing below them.
- The explorers win if they kill all monsters.

The maze grid is shown as follows:

- W: wall
- A: explorer A
- B: explorer B (can be ignored if not showing up)
- M: monster
- R: rock
- x: empty space
- L: ladders

The solution is a sequence of explorer moves, each move is either "A left", "A right", "A up", "A down"

level 1:

```
WxAxMxRxxMW
WWWWWWWxWWW
```

level 2:

```
WxxxxxxxW
WLWWxRxxW
WLWWxRxMW
WLWWWWxWW
WLxxAWxWW
WWWWWWWWW
```

level 3:
```
WWxxxxxxxxxW
WxxWWLxxWWLW
WxRxxLxxxxLW
WLWxxLxxxxLW
WLxxxxLxxxLW
WLxxRxxMxALW
WWWWWxxWxWWW
WWWWWWWWWWWW
```
