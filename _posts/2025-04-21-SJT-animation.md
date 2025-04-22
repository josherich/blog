---
layout: post
title: "Animating the Steinhaus-Johnson-Trotter Permutation Generation Algorithm"
date: 2025-04-16 00:00:01
categories: short
tags: [short]
---

One way to generate permutations of `1 - n` from `1 - (n-1)` is adding n in a cyclic manner.

|---|---|---|---|---|---|---|
|   | 1 |   | 2 |   | 3 | **4** |
|   | 1 |   | 2 | **4** | 3 |   |
|   | 1 | **4** | 2 |   | 3 |   |
| **4** | 1 |   | 2 |   | 3 |   |
| **4** | 1 |   | 3 |   | 2 |   |
|   | 1 | **4** | 3 |   | 2 |   |
|   | 1 |   | 3 | **4** | 2 |   |
|   | 1 |   | 3 |   | 2 | **4** |
|   | 3 |   | 1 |   | 2 | **4** |
|   | 3 |   | 1 | **4** | 2 |   |
|   | 3 | **4** | 1 |   | 2 |   |
| **4** | 3 |   | 1 |   | 2 |   |
| **4** | 3 |   | 2 |   | 1 |   |
|   | 3 | **4** | 2 |   | 1 |   |
|   | 3 |   | 2 | **4** | 1 |   |
|   | 3 |   | 2 |   | 1 | **4** |
|   | 2 |   | 3 |   | 1 | **4** |
|   | 2 |   | 3 | **4** | 1 |   |
|   | 2 | **4** | 3 |   | 1 |   |
| **4** | 2 |   | 3 |   | 1 |   |
| **4** | 2 |   | 1 |   | 3 |   |
|   | 2 | **4** | 1 |   | 3 |   |
|   | 2 |   | 1 | **4** | 3 |   |
|   | 2 |   | 1 |   | 3 | **4** |

To generate permutations of `1 - n` in this manner, we could use the following procedure using numbers and arrows on top of them:

Begin with 1(←) 2(←) ... n(←).

While there exists a `mobile` integer, do the following:

> `mobile` integer: an integer i is mobile if it has an arrow pointing to a smaller integer adjacent to it.

1. Find the largest mobile integer m.
2. Switch m and the adjacent integer to which its arrow points.
3. Switch the direction of all the arrows above integers p with p > m.

Here's a simple animation of the algorithm in action:

<video width="650" height="" controls>
  <source src="/downloads/SteinhausJohnsonTrotter.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
