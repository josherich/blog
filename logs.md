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


## 2020-01-07

### [import module, e.g. lodash, a benchmark](https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark/)
  - The smallest bundle size could also be reached by using the babel-plugin-lodash together with lodash-webpack-plugin for cherry-picking only the used functions.

### [web perf WG 2019](https://blog.yoav.ws/webperfwg_f2f_2019/)
  - SPA metrics, ways to measure soft navigation
  - [scheduling api](https://docs.google.com/presentation/d/1GUB081FTpvFEwEkfePagFEkiqcLKKnIHkhym-I8tTd8/edit#slide=id.g5b43bd1ecf_1_928)
  - [CPU reporting](https://docs.google.com/document/d/10vO0eRqLjY6SSWNurVwW_pf8g0hg1e63OUoxiEQDZiQ/edit#)
  - [memory api](https://github.com/ulan/javascript-agent-memory/blob/master/explainer.md)


## 2020-01-08

### a tricky linked list, [Broken keyboard](https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=3139)

```js
const scase = "This_is_a_[Beiju]_text"

function solve(s) {
  s = ' '+s
   const n = s.length
   let last = cur = 0
   let next = []
   next[0] = 0
  for (let i = 1; i <= n; i++) {
    if (s[i] === "[") {
      cur = 0
    } else if (s[i] === "]") {
      cur = last
    } else {
      next[i] = next[cur]
      next[cur] = i
      console.log(`next[${i}] = next[${cur}]`)
      console.log(`next[${cur}] = ${i}`)
      console.log(next)
      if (cur === last) last = i;
      cur = i
    }

  }
  let res = []
  console.log(next)
  for (let i = next[0]; i !== 0; i = next[i]) {
    // res.push(`${s[i]}:${i} `)
    res.push(s[i])
  }
  console.log(res.join(''))
}
solve(scase)
```

### doubly linked list, UVa 12657
```js
function link(l, r) {
  right[l] = r
  left[r] = l
}

function solve(n, cmds) {
  for (let i = 1; i <= n; i++) {
    left[i] = i-1
    right[i] = (i+1) % (n+1)
  }
  right[0] = 1
  left[0] = n

  let m = cmds.length, inv = false
  for (let j = 0; j < m; j++) {
    let [op, x, y] = cmds[j]
    if (op === 4) inv = !inv;
    else {
      if (op === 3 && right[y] === x) swap(x, y);
      if (op !== 3 && inv) op = 3 - op;
      if (op === 1 && x == left[y]) continue;
      if (op === 2 && x = right[y]) continue;

      let lx = left[x], rx = right[x], ly = left[y], ry = right[y]
      if (op === 1) {

      }
      else if (op === 2) {

      }
      else if (op === 3) {

      }

    }


  }

  for (let i = 0; i <= n; i++) {
    b = right[b]
    if (i % 2 === 1) ans += b;
  }
  if (inv && n % 2 === 0) {
    ans = n * (n+1)/2 - ans // flip odd and even
  }

  return ans
}
```



