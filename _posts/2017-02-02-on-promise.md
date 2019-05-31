---
layout: post
title:  "Javascript Promise in Bullet Points"
description: "Javascript Promise pitfalls, explained in bullet points"
date:   2017-02-02 14:02:39
categories: Frontend
tags: [frontend, async, promise]
---

- Promise is about [spec](https://promisesaplus.com/) and implementations(then/promise, q, bluebird)

- Beside enabling async, Promise is another way to make function calling look nicer, kinda like pipe, instead of `f(g(x))`, do `x -> f -> g`

- `promise.then(undefined, onRejected)` is exactly the same as `promise.catch(onRejected)`.

- Build your own way of handling return value(like return a reason code) when promise chain is complicated. For example, if the promise chain continues after `catch()`, you need to handle return value from both previous `then()`s and `catch()`s

- Instead of `new Promise()`, use `Promise.resolve()` to start promise chain

- `Deferred` is just a wrapper of `promise`, it `resolve()` or `reject()` wherever you need in your code, while promise `resolve()` or `reject()` inside callbacks

- Promise chain works because each `.then()` or `.catch()` return a new promise

- To use promise in IE8 and below, replace `promise.catch()` with `promise['catch']()`

- In `Promise.race`, other promises won't stop or abort when first promise get fullfilled

- There is NO `abort` in ES6 Promise, while some libraries(bluebird) DO implement `abort`. Of course, you can implement it with lines of code like [this gist](https://gist.github.com/jurassix/64facb34686ad71463ca3121ee77db24)

- ES6 Promise comes from Promise/A+, which comes from CommonJS group(famous for CommonJS module spec)

- When unhandled rejection happens in promise callbacks, all you see is something like `Promise rejected` with no stack info.

- [a promise visualization](http://bevacqua.github.io/promisees/)

- Export promise, [reference](http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/)

  ```javascript
  function defer() {
    var res, rej;

    var promise = new Promise((resolve, reject) => {
      res = resolve;
      rej = reject;
    });

    promise.resolve = res;
    promise.reject = rej;

    return promise;
  }

  this.treeBuilt = defer();

  // Many, many lines below…

  this.treeBuilt.resolve();
  ```

- There is no elegant way to tell if a promise is resolved
  - given you have access to the promise, of course you can do:
    ```javascript
    let isResolved = false;
    p.then(function() {
      isResolved = true;
    });
    ```
  - if you don't have access to it:
    ```javascript
    const marker = {}
    async function isResolved(p) {
      return (await Promise.race([p, marker])) != marker
    }
    ```

