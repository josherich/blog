---
layout: post
title:  "Why does it take so long to write to an array with one billion elements in Python?"
description: ""
date: 2025-04-03 00:00:01
categories: podcast
tags: [short]
---

TIL writing one billion elements to an array using python3 takes a jarring 172 seconds. The good news is `-OO` makes it a bit faster at 80 seconds. `pypy3` is even faster at 2.3 seconds.

The bad news is it takes Java 0.25 seconds.

```py
import time
capacity = 1000000000
arr = [-1] * capacity

start = time.time()
for i in range(capacity): arr[i] = i
for i in range(capacity): arr[i] = -1
print(time.time() - start, 'seconds')
```

```java
final int SIZE = 1_000_000_000;
int[] bigArray = new int[SIZE];

long startWrite = System.nanoTime();
for (int i = 0; i < SIZE; i++) { bigArray[i] = i; }
for (int i = 0; i < SIZE; i++) { bigArray[i] = -1; }
long endWrite = System.nanoTime();
double elapsedSeconds = (endWrite - startWrite) / 1e9;
System.out.printf("%.2f seconds%n", elapsedSeconds);
```
