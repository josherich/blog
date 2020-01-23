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

### UVa839, cover of CLRS!

```js
let i = 0
function solve(ws) {
  let [w1, d1, w2, d2] = ws[i]

  i++
  if (i > ws.length) return

  let b1 = true, b2 = true
  if (!w1) [b1, w1] = solve(ws);
  if (!w2) [b2, w2] = solve(ws);
  return [b1 && b2 && (w1 * d1 === w2 * d2), w1 + w2]
}

function main(ws) {
  let [b, w] = solve(ws)
  console.log(b, w)
}

main([[0,2,0,4], [0,3,0,1], [1,1,1,1], [2,4,4,2], [1,6,3,2]])
```

### UVa 297, [quadtree](https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=233)

### print subset binary
```js
n = 10
function print_subset(n, s) {
  for (let i = 0; i < n; i++) {
    if (s & (1<<i)) console.log(i);
  }
  console.log('\n')
}
for (let i = 0; i < (1<<n); i++) {
  print_subset(n, i)
}
```

## 2020-01-10

```bash
#! /usr/bin/env bash
set -euo pipefail
# -e ensure stops on first command failure
# -u ensure stops on first unset variable, otherwise replace it with empty def values
# -o pipefail if any fail in pipeline, overall exit status is the one that fails
```

## 2020-01-14

### [ideal path](https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=24&page=show_problem&problem=4474)

https://github.com/aoapc-book/aoapc-bac2nd/blob/master/ch6/UVa1599.cpp


### [pairs of strings without common chars](https://www.quora.com/Given-a-dictionary-of-words-how-can-we-efficiently-find-a-pair-words-if-they-dont-have-characters-in-common-and-the-sum-of-their-length-is-the-maximum)

Our algorithm will consist of three steps:
1. For each set S of letters, find the longest word that consists of exactly those letters.
2. For each set S of letters, find the longest word that consists of at most those letters (i.e., some letters may be unused, but you cannot use a letter that does not belong to S).
3. For each word w, compute length(w) + length(longest word out of letters not in w) and pick the maximum.

Step 1 is easy: just take an array of size 2𝑎, then read the input, and for each word update the corresponding cell. This can be done in 𝑂(ℓ𝑛).

Step 2 can be done using dynamic programming. We process the subsets of our alphabet in the order 0, 1, ..., 2𝑎−1. (Note that this  order that has the property that for any set S, all subsets of S are processed before S.) For each set of letters S, the best word for S is either the best word made out of exactly these letters (this we computed in phase 1), or at least one letter is unused. We try all possibilities for the unused letter and pick the best one. All of this takes 𝑂(𝑎2𝑎) time.

Step 3 is again easy. If we stored the set of letters for each word in step 1, step 3 can now be done in 𝑂(𝑛) time. Hence the overall time complexity is 𝑂(ℓ𝑛+𝑎2𝑎).

## 2020-01-16

### longest-repeating-character-replacement

```js
function longestRepeat(s, k) {
  let start = 0
  for (let end = 0; end < s.length; end++) {
    // we only need to know the length of most frequent char
    maxCount = Math.max(maxCount, ++count[s[end]])
    while(end - start + 1 - maxCount > k) {
      count[s[start]]--
      start++
    }
    maxLen = Math.max(maxLen, end - start + 1)
  }
  return maxLen
}
```

### label and input association

When a `<label>` is clicked or tapped and it is associated with a form control, the resulting click event is also raised for the associated control.


### animation overview

box-shadow
width
event 'transitionend'
Web Animations API

transition: transform 500ms ease-out;
transition: transform 500ms cubic-bezier(0.465, 0.183, 0.153, 0.946);

Ensure that any animating element has will-change set for anything you plan to change well ahead of the animation starting. For view transitions, it’s highly likely you will want to use will-change: transform.

UI trigger by user: quick intro, slow outro
display as quick as 100ms, view out as quick as 300ms

UI trigger by code(err, modal): slow intro, quick outro

CSS-based animations, and Web Animations where supported natively, are typically handled on a thread known as the "compositor thread"

Include initial-scale=1 to establish a 1:1 relationship between CSS pixels and device-independent pixels.

### media query

```
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
<link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
<link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
<link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
<style>
  @media (min-width: 500px) and (max-width: 600px) {
    h1 {
      color: fuchsia;
    }

    .desc:after {
      content:" In fact, it's between 500px and 600px wide.";
    }
  }
</style>
```

- don't use `min-device-width`

min-width is based on the size of the browser window whereas min-device-width is based on the size of the screen. Unfortunately some browsers, including the legacy Android browser, don't report the device width properly; they report the screen size in device pixels instead of the expected viewport width.

In addition, using min-device-width can prevent content from adapting on desktops or other devices that allow windows to be resized because the query is based on the actual device size, not the size of the browser window.

-  setting width: 100% on a top level div, ensures that it spans the width of the viewport and is never too big or too small for the viewport.

- Classic readability theory suggests that an ideal column should contain 70 to 80 characters per line (about 8 to 10 words in English)

### [responsive pattern](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)


## 2020-01-20

### [食物链 POJ1182](http://poj.org/problem?id=1182)

K pieces of information, either:

type 1: x, y belong to the same category
type 2: x eats y

solve:

i[xyz]-m[ABC]: animal i belongs to category m

type 1: union x-A and y-A, x-B and y-B
type 2: union x-A and y-B, x-B and y-C, and x-C and y-A

### subfolders to subdomain

```conf
location ^~ /admin/ {
    rewrite ^/admin/(.*) http://admin.example.com/$1 permanent;
}
```

### Rails code stats

[rails stats](https://github.com/rails/rails/blob/master/railties/lib/rails/code_statistics.rb)

### Compressing tries(prefix trees)

node v is redundant if v is not the root node, and v has 1 child, compress chains of node with 1 child to 1 single node.

### [tighyly packed tries](https://www.aclweb.org/anthology/W09-1505.pdf)

  - use array represent of tree

### Github Actions

[starter workflows](https://github.com/actions/starter-workflows/blob/master/ci/jekyll.yml)

[gh-pages](https://github.com/peaceiris/actions-gh-pages)

## 2020-01-22

### [Knight's Shortest Path](https://stackoverflow.com/questions/2339101/knights-shortest-path-on-chessboard/8778592#8778592) on Chessboard

- use dijkstra, A*

- symmetrical across the axes and the diagonals

- (x,x) to (0,0): 2\lfloor \frac{x+2}{3}\rfloor, it takes two moves for (x+3,x+3) to (x,x)

- (x,0) to (0,0): x - 2\lfloor\frac{x}{4}\rfloor, it takes two moves for (x+4,0) to (x,0)

- it takes 4 moves for (2,2) to (0,0), 3 moves for (1,0) to (0,0)

- or, the formula T(m,n) = 1 + min(T(m-2, n-1), T(m-1, n-2))

### [text editor implementation](https://everythingfrontend.com/pages/canvas-text-editor-tutorial.html#part2)

### [aoapc solution](https://github.com/aoapc-book/aoapc-bac2nd)

### [suffix tree](https://en.wikipedia.org/wiki/Suffix_tree)

  - Weiner 1973
  - online construction by Ukkonen 1995
  - optimal for all alphabets construction by farach 1997
  - a compressed trie
  - speed up for
    - locating a substring in S
    - locating a substring if a certain number of mistakes are allowed
    - locating matches for a regular expression pattern

  - Suffix trees also provide one of the first linear-time solutions for the longest common substring problem
  - find longest repeated substrings
  - longest palindromic substring

## todos

### implement Golang channel in JS

```js
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
var jchan = Chan()

js function(i) {
  var k = 'hey'
  jchan <- k
}(i)

jchan.then(e => {

})
.catch(err => {

})

// =============

const gresolve = null
var jchan = new Promise((resolve, reject) => {
  gresovle = resolve
})

// vvvvvvvvvvvvv worker.js
importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
// importScripts("../../../dist/umd/comlink.js");

var k = 'hey'

Comlink.expose(k);
// ^^^^^^^^^^^^^

const worker = new Worker("worker.js");
// WebWorkers use `postMessage` and therefore work with Comlink.
const obj = Comlink.wrap(worker);
console.log(obj)

// vvvvvvvvvvvvv or async
setTimeout(function() {
  var k = 'hey'
  gresolve(k)
})
// ^^^^^^^^^^^^^

jchan.then(e => {
  console.log(e)
})
.catch(err => {
  throw new Error(err)
})

```