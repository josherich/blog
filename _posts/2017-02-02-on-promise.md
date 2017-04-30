---
layout: post
title:  "On Promise"
description: "on promise"
date:   2017-02-02 14:02:39
categories: Frontend
tags: [frontend, async, promise]
---

# On Promise

- `promise.then(undefined, onRejected)` is exactly the same as `promise.catch(onRejected)`.

- Build your own way of handling return value when promise chain is complicated. For example, if the promise chain continues after `catch()`, you need to handle return value from both previous `then()`s and `catch()`s

- Instead of `new Promise()`, use `Promise.resolve()` to start promise chain

- `Deferred` is just a wrapper of `promise`, it `resolve()` or `reject()` wherever you need in your code, while promise `resolve()` or `reject()` inside callbacks

- To use promise in IE8 and below, replace `promise.catch()` with `promise['catch']()`

- In `Promise.race`, other promises won't stop or abort when first promise get fullfilled

- There is NO `abort` in ES6 Promise, while some libraries(bluebird) DO implement `abort`

- ES6 Promise comes from Promise/A+, which comes from CommonJS group(famous for CommonJS module spec)

- When unhandled rejection happens in promise callbacks, all you see is something like `Promise rejected` with no stack info.