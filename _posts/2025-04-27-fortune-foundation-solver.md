---
layout: post
title: "A Fortune Foundation Solver"
date: 2025-04-27 00:00:01
categories: short
tags: [short]
---

I enjoy playing Fortune's Foundation and using it as a benchmark for language model's [instruct following](https://www.josherich.me/short/fortune-foundation-test). Naturally I want to try solving it with code. Solving a solitaire style game is new to me. The first thing I did was BFS searching the game state. There are ony a few valid moves you can make so that decks change to a new unvisited state. I soon realized this is not the case as the game progresses. For a relative empty queue state, there are so many valid moves that the number of states explode quickly. The next thing I tried was sorting the states in the queue by game state scores using heuristics: straight cards like 3-4-5 is a positive; a blocking card in minor arcana is a negative; more empty queues is a positive.

![fortunes's foundation](/images/fortunes-foundation.png)

The naive BFS search with sorting still can't reach the solution before it runs out of Node's default 4G memory. I tried a few optimizations:
- Use a priority queue to speed up fetching the best state.
- Use dense string representation for the solution path.
- Use A star search where the score = g + h, where g is the number of moves and h is the heuristic score.
- For every 10k game states explored, limit the queue size to 1k, by pop minimum heap 1k times. (263s)
- For every 10k game states explored, limit the queue size to 100. (35s)
- For every 10k game states explored, limit the queue size to 50. (31s)

Here's one interactive solution that I made with 60% vibe coding, I had to fix a few quite significant bugs about moving cards around.

You can click the `Next` button and step through the solution shown below.

You can also play for yourself by clicking a card, and click a target slot to move the card there.

<iframe width="100%" height="800px" src="/js/fortune-foundation/index.html" frameborder="0" allowfullscreen></iframe>


```
Step 1: queue,0:queue,5
Step 2: queue,10:queue,6
Step 3: queue,0:queue,7
Step 4: queue,10:queue,2
Step 5: queue,10:queue,0
Step 6: queue,10:queue,5
Step 7: queue,10:queue,6
Step 8: queue,5:queue,10
Step 9: queue,5:queue,6
Step 10: queue,4:queue,5
Step 11: queue,10:queue,6
Step 12: queue,0:queue,10
Step 13: queue,0:queue,4
Step 14: queue,10:queue,4
Step 15: queue,2:queue,3
Step 16: queue,2:queue,10
Step 17: queue,3:queue,10
Step 18: queue,6:queue,10
Step 19: queue,6:queue,10
Step 20: queue,6:queue,10
Step 21: queue,6:queue,10
Step 22: queue,2:queue,0
Step 23: queue,2:queue,10
Step 24: queue,1:queue,10
Step 25: queue,2:queue,10
Step 26: queue,2:queue,4
Step 27: queue,9:queue,4
Step 28: queue,1:queue,7
Step 29: queue,3:queue,1
Step 30: queue,2:queue,4
Step 31: queue,3:queue,2
Step 32: queue,6:queue,2
Step 33: queue,3:queue,6
Step 34: queue,3:queue,0
Step 35: queue,5:queue,3
Step 36: queue,6:queue,5
Step 37: queue,6:queue,5
Step 38: queue,6:queue,5
Step 39: queue,6:queue,8
Step 40: queue,5:queue,6
Step 41: queue,5:queue,6
Step 42: queue,9:queue,6
Step 43: queue,9:queue,5
Step 44: queue,9:queue,2
Step 45: queue,9:queue,10
Step 46: queue,8:queue,0
Step 47: queue,8:queue,0
Step 48: queue,8:queue,5
Step 49: queue,7:queue,0
Step 50: queue,7:queue,0
Step 51: queue,10:queue,7
Step 52: queue,10:queue,7
Step 53: queue,10:queue,7
Step 54: queue,2:queue,3
Step 55: queue,2:queue,3
Step 56: queue,1:queue,3
Step 57: queue,1:queue,2
Step 58: queue,7:queue,0
Step 59: queue,6:queue,0
Step 60: queue,1:queue,0
```

Here's the main loop:

```js
let queue = [];
queue.push([getStateScore(initialState), initialState, []])
const visited = new Set();
while (queue.length > 0) {
    let [score, currentState, currentPath] = queue.pop();
    if (visited.has(hashState(currentState))) {
        continue;
    }
    visited.add(hashState(currentState));
    if (isGoalState(currentState)) {
        return currentPath;
    }
    const validMoves = getValidMoves(currentState);

    for (const move of validMoves) {
        const nextState = applyMove(currentState, move);
        const nextStateHash = hashState(nextState);

        if (!visited.has(nextStateHash)) {
            const nextg = g + 1;
            const newPath = [...currentPath, `${move.fromType},${move.fromIndex}:${move.toType},${move.toIndex}`];
            queue.push([getStateScore(nextState), nextState, newPath]);
        }
    }
}
```
