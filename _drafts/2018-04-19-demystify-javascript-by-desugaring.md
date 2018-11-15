---
layout: post
title:  "Demystify JavaScript by Desugaring"
description: ""
date:   2018-04-19 14:02:39
categories: Frontend
tags: [Javascript, frontend]
---

# Introduction

## small-step operational semantics

### Reduction

$$ \frac{\text if this stands}{\text then this stands} $$

### Reference(pointer)



# Semantics of JavaScript

Location
Values
Stores
Expression
Evalation contexts

## Functions and Objects

# Desugar

## desugar object

update and create use the same syntax

lookup nonexisted key return undefined

delete a key of an array does not affect array length, the element evaluate to undefined


## desugar function

function are object with 'code' field

### `__proto__` and `prototype`

### `this`

execution context

### implicit constructor and `new`

### instanceof

cat instance of Cat
is
cat.__proto__ === Cat.prototype


## desugar control flow

break l transfer control to l

return is break with label `ret`

## scope is an object

scope is implemented as an object
it has a parent field referencing the parent scope
forms a scope chain

use `with` statement to add any field to the scope object

## understand lifting by desugaring

# examples

from Jake and reddit comment
```javascript
let x = 0;
async function test() {
  x += await 2;
  console.log(x);
}

test();
x += 1;
console.log(x);
\\ prints 1 and then 2
```

and version without async
```
let val = 0;

function inc1() {
  val++;
  console.log(val);
}
function inc2() {
  val += inc1();
  console.log(val);
}

inc2();
\\ prints 1 and then 2
```

### footnote

- dynamic inheritance and mode-switching