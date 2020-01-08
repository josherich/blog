---
layout: default
title: Logs
---

## 2020-01-01

### It takes a lot to invert a binary

[invert a binary](https://stackoverflow.com/questions/4338315/inverting-a-binary-value-of-a-number
)

```js
var x = 793; // input value
var y = x.toString(2);
var yl = y.length;
var mask = (Math.pow(2, yl) - 1); // calculate mask
var result = ~x & mask;
document.write(result.toString(2))
```

and you need to handle negative number as negative numbers use 2's complement notation

```js
var x = -1
(~x).toString(2);
```

### Beautiful array has a beatiful solution

[Odd + Even Pattern](https://leetcode.com/problems/beautiful-array/discuss/186679/Odd-%2B-Even-Pattern-O(N))

array a is a permutation of 1...N, for any pair i and j, no i < k < j s.t. a[k] * 2 = a[i] + a[j]

start from [1], construct concatenation of odd and even array(if we have equality a[k] * 2 = a[i] + a[j], i,j,k must have at least one odd, or one even number). Multiplication, addition constant and concatenation keep the i,j,k invariant.

```js
[1]
[1]       + [2]
[1,3]     + [2,4]
[1,5,3,7] + [2,6,4,8]
...
```

### Array from trick to implement range(N)

```js
let N = 10
let arr=Array.from({length:N}, (x,i)=>i+1);
```

### Zwitterion

the pipeline goes like:
browser fetch resource -> proxy intercept and sent to babel or other transpiler -> babel transile orginal files and send back

bundling is just fetch the html

### Dancing links

#### Doubly linked list






## 2020-01-02

### continuations

it transforms all code into a state machine and uses exceptions to save the state of all functions on the stack. This means that every function is transformed into a big switch statement with every expression as separate cases, giving us the ability to arbitrarily jump around.

wiki says:
an abstract representation of the control state of a computer program. A continuation reifies the program control state…

call/cc:  call-with-current-continuation

### private method leaks

```js
function somePublicApi() {
  console.log('public api called.')
}

(function() {
  var privateFuncOne = function() {
    console.log('secret one called.')
    somePublicApi()
  }

  var privateFuncTwo = function() {
    console.log('secret two called.')
    privateFuncOne()
  }

  window.exportFunc = function() {
    privateFuncTwo()
  }

}).call(this)

let privateFuncOne, privateFuncTwo
somePublicApi = function() {
  privateFuncOne = arguments.callee.caller;
  privateFuncTwo = privateFuncOne.caller;
}

exportFunc()
console.log(privateFuncOne)
console.log(privateFuncTwo)
```

### bytecode peephole optimization

count regexp usage, if 'hot', compile it to native code

```js
const re = /[^_]*/;
const str = 'a0b*c_ef';
re.exec(str);
// → matches 'a0b*c'
```

1. Load current character.
2. Check if character equals '_'.
3. If not, advance current position in the subject string and goto 1.

replace sequences of bytecodes with a new optimized bytecode that combines the functionality of multiple bytecodes

can even handle the implicit loop created by the goto explicitly in the new bytecode, thus a single bytecode handles all matching characters, saving 16 dispatches.

### CodeStubAssembler

![](https://v8.dev/_img/csa/csa.svg)

- builtins and hand-written assembly in V8
- type verificatio at IR(turboFan) level
- byte code peephole opt:
  - replace sequences of bytecodes with a new optimized bytecode that combines the functionality of multiple bytecodes
- JIT-less V8 ( --jitless )
  - allocating executable memory at runtime
    - turboFan create native code for hot js functions, need to allocate memory at runtime, fast. but
    - some disallow write to memory, and disallow write reduce exploit risk

- [turboFan](https://v8.dev/docs/turbofan) JIT implementation

  - [sea of nodes](https://darksi.de/d.sea-of-nodes/) IR allow more reording
    - AST to data-flow graph
    - and convert to SSA, remove control dependency, compiler is free to move them
    - control flow graph, group nodes to blocks
    - reduction
      - compute int range
      - compute limits
      - apply range and limits to decide length check is unnecessary
      - move code(arr.length) out of loop

- [ignition](https://v8.dev/blog/ignition-interpreter) interpreter

![](https://v8.dev/_img/ignition-interpreter/ignition-pipeline.png)

## 2020-01-03

### Matisse EB

[末世感叩击：《新世纪福音战士》的文字世界](https://thetype.com/2019/12/17434/)

![片头](https://thetype.com/wp-content/uploads/2019/11/06_95tv_allep_titlecard.gif)

机械拉伸的特殊质感

### dancing links, sodoku, polyominoes

exact cover problem


## 2020-01-04

Rust-lang

ClojureScript

streaming algorithm

string search algorithm

  - DFA, powerset construction

  - Knuth–Morris–Pratt computes a DFA that recognizes inputs with the string to search for as a suffix

  - Boyer–Moore starts searching from the end of the needle, so it can usually jump ahead a whole needle-length at each step

  - Baeza–Yates(Bitap) keeps track of whether the previous j characters were a prefix of the search string, and is therefore adaptable to fuzzy string searching

## 2020-01-05

Babel plugin system

Babel way: tokenizer, transform, codegen
visitor


## 2020-01-06

max flow