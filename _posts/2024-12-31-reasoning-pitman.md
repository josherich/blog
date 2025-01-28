---
layout: post
title:  "Reasoning with Pitman(Catrap)"
description: ""
date: 2024-12-31 00:00:01
categories: short
tags: [short]
---

Pitman is a classic puzzle game on GameBoy, also known as Catrap. I find the game super intuitive and a perfect benchmark to measure reasoning ability. All latest models struggle terribly to solve anything beyond level 1.

![pitman level 1 2 3](/images/pitman-level-1-2-3.png)

### Here's the original prompt:

------------

Follow the instructions and solve the following game:

In this game, two explorers try to kill all monsters in an underground platform maze.
- The maze is a grid of cells in platform view, each cell is either a wall, a rock, a monster, or an empty space.
- The explorers can move left or right by 1 cell each time, but they can't move through walls or rocks.
- The explorers can climb ladders up or down, but they can't climb up to the top of ladders if there is a rock above the ladder.
- The explorers can climb up to top of a ladder and stand on top of it.
- The explorers can stand on top of walls, rocks, or monsters. But they can not stand on empty spaces and will fall down until they stand on something due to gravity.
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

----

### Improved prompt suggested by Claude

You are an AI tasked with solving a puzzle game involving explorers and monsters in a maze-like environment. Your goal is to provide a sequence of moves that will allow the explorers to eliminate all monsters in the level.

First, analyze the level layout provided below:

<level_layout>
WxAxMxRxxMW
WWWWWWWxWWW
</level_layout>

Game Rules and Mechanics:

1. Environment:
   - The maze is a grid of cells in platform view.
   - Each cell can be one of the following: wall (W), rock (R), monster (M), empty space (x), or ladder (L).
   - Explorers are represented by 'A' (and 'B' if present, though 'B' can be ignored if not showing up).

2. Movement:
   - Explorers can move left or right by 1 cell each time.
   - Explorers cannot move through walls or rocks.
   - Explorers can climb ladders up or down.
   - Explorers can stand on top of walls, rocks, monsters, or ladders.
   - Explorers cannot stand on empty spaces and will fall due to gravity until they land on a solid object.
   - Explorers can jump down from any height.

3. Interaction:
   - Explorers can push rocks, but cannot push rocks into walls or other rocks.
   - Explorers kill monsters by running into them.
   - Monsters stay still and cannot be killed by rocks.

4. Physics:
   - All objects (including explorers, rocks, and monsters) are affected by gravity.
   - Objects fall down if there is nothing below them.
   - Explorers cannot climb up to the top of ladders if there is a rock above the ladder.

5. Winning Condition:
   - The explorers win if they kill all monsters in the level.

Your task is to provide a solution in the form of a sequence of explorer moves. Each move should be one of the following:
- "A left"
- "A right"
- "A up"
- "A down"

Before providing the final solution, analyze the level layout, plan your moves, and consider the consequences of each action in <analysis> tags. Make sure to account for the physics of the game world and any potential chain reactions caused by moving rocks or eliminating monsters. Follow these steps:

1. Count and list the number of explorers, monsters, and rocks.
2. Identify key features like ladders and their positions.
3. Describe potential paths to reach monsters.
4. Consider possible rock movements and their impact.
5. Outline a high-level strategy for solving the level.
6. Simulate the first few moves and their consequences.

Example output format:
<analysis>
[Your analysis and planning goes here]
</analysis>

Solution:
1. A right
2. A right
3. A up
4. A left
5. [continue with more moves as needed]

Please proceed with your analysis and solution for the given level layout.
