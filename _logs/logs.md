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

## 2020-01-24

### [heuristics and observations of teams resolving internet service outages](https://blog.acolyer.org/2020/01/22/trade-offs-under-pressure-part-1/)

Klein shows us that teams have some advantages over individuals:
  - a wider range of attention
  - a broader range of expertise
  - built-in variability
  - a greater capability for reorganising their activities
  - and the ability to work in parallel

Hollnagel enumerates a set of judgement heuristics often used in scenarios involving uncertainty and multiple conflicting goals:
  - ETTO (efficiency-thoroughness trade-off)
  - Similarity matching – judging the similarity between triggering conditions and stored attributes of appropriate action
  - Frequency gambling – choosing among partially matched options based on the frequency of their occurence
  - Representativeness – if it looks like X, it probably is X
  - Availability – choosing by how easily the option comes to mind
  - Focus gambling – opportunistically changing from one hypothesis to another
  - Conservative gambling – moving slowly and incrementally to build up a hypothesis
  - Simultaneous scanning – trying out several hypotheses at the same time

thematic vagabonding: Too much jumping between options, never getting deep enough in any one area

cognitive fixation: people can become fixated on a specific idea or solution even to the exclusion of incoming signals that indicate otherwise

case study etsy:

- the big slowdown came because the 400 errors for the missing shop data bypassed the caching mechanism, causing a full request to be made on every page load

- "process tracing"

four heuristic emerged
- First look for any correlation to the last change made to the system
- If no correlated change is implicated, then widen the diagnostic search space to any potential signals
- When forming hypotheses and evaluating diagnostic directions, use pattern matching of signals or symptoms to either specific past events or recent events.
- During incident management, prefer peer review of any code changes to gain confidence as opposed to automated tests or other procedures.

> the greatest sources of success in automation-rich environments are (perhaps ironically) the adaptive capacities of human cognition and activity, not the pseudo-intelligence of the software

## 2020-01-25

### inline defer in Golang

[proposal](https://github.com/golang/proposal/blob/master/design/34481-opencoded-defers.md)

- LIFO order
- For each deferred function, compiler generates a runtime.deferproc call at the call site and call into runtime.deferreturn at the return point of the function.
- in 1.14, compiler do inline for better perf

## 2020-01-26

### deep copy using structral clone

Safari limits the amount of calls to replaceState to 100 within a 30 second window.

```js
function structuralClone(obj) {
  const oldState = history.state;
  history.replaceState(obj, document.title);
  const copy = history.state;
  history.replaceState(oldState, document.title);
  return copy;
}

const obj = /* ... */;
const clone = structuralClone(obj);
```

### deep copy using MessageChannel

handle cyclical data structures, built-in data types like Map, Set and ArrayBuffer etc.

```js
function structuralClone(obj) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel();
    port2.onmessage = ev => resolve(ev.data);
    port1.postMessage(obj);
  });
}

const obj = /* ... */;
const clone = await structuralClone(obj);
```

### [postMessage perf](https://dassur.ma/things/is-postmessage-slow/)

Even on the slowest devices, you can postMessage() objects up to 100KiB and stay within your 100ms response budget. If you have JS-driven animations, payloads up to 10KiB are risk-free.

## 2020-01-27

### Ocaml signature

- A signature specifies which components of a structure are accessible from the outside, and with which type.



## 2020-01-28

### Conditional Mutual Information

- form: any observable realization of language
- meaning: relation between forms and something external to language
- Turing test a,b, and octupus

### Schrodinger problem and connection with optimal transport

### Gradient Surgery for Multi-Task Learning

- projects a task’s gradient onto the normal plane of the gradient of any other task that has a conflicting gradient

### Multilingual Denoising Pre-training for Neural Machine Translation

### The Nonstochastic Control Problem


## 2020-01-29

## [sync task](https://gist.github.com/sebmarkbage/2c7acb6210266045050632ea611aebee)
```js
let cache = new Map();
let pending = new Map();

function fetchTextSync(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  if (pending.has(url)) {
    throw pending.get(url);
  }
  let promise = fetch(url).then(
    response => response.text()
  ).then(
    text => {
      pending.delete(url);
      cache.set(url, text);
    }
  );
  pending.set(url, promise);
  throw promise;
}

async function runPureTask(task) {
  for (;;) {
    try {
      return task();
    } catch (x) {
      if (x instanceof Promise) {
        await x;
      } else {
        throw x;
      }
    }
  }
}

// run
function getUserName(id) {
  var user = JSON.parse(fetchTextSync('/users/' + id));
  return user.name;
}

function getGreeting(name) {
  if (name === 'Seb') {
    return 'Hey';
  }
  return fetchTextSync('/greeting');
}

function getMessage() {
  let name = getUserName(123);
  return getGreeting(name) + ', ' + name + '!';
}

runPureTask(getMessage).then(message => console.log(message));
```

### Language Server Protocol

[protocol](https://github.com/sourcegraph/language-server-protocol/blob/streaming/protocol.md)

idea: document server protocol
  - plugin service
  - semantic service

## 2020-01-30

### [Normalization of deviance](https://danluu.com/wat/)

[John Banja, normalization of deviance in health care](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2821100/)

The paper has specific sub-sections on how to prevent normalization of deviance, which I recommend reading in full
  - Pay attention to weak signals
  - Resist the urge to be unreasonably optimistic
  - Teach employees how to conduct emotionally uncomfortable conversations
  - System operators need to feel safe in speaking up
  - Realize that oversight and monitoring are never-ending

tech postmortem blog post

cargo cult diffusion

> If there were an acute failure, you might see a postmortem, but while we'll do postmortems for "the site was down for 30 seconds", we rarely do postmortems for "this takes 10x as much ops effort as the alternative and it's a death by a thousand papercuts", "we architected this thing poorly and now it's very difficult to make changes that ought to be trivial", or "a competitor of ours was able to accomplish the same thing with an order of magnitude less effort". I'll sometimes do informal postmortems by asking everyone involved oblique questions about what happened, but more for my own benefit than anything else, because I'm not sure people really want to hear the whole truth. This is especially sensitive if the effort has generated a round of promotions, which seems to be more common the more screwed up the project. The larger the project, the more visibility and promotions, even if the project could have been done with much less effort.


### SIMD in WASM

https://v8.dev/features/simd

mediapipe project


### WASM

- magic n: 0061736d

- WebAssembly has the following value types:

  i32: 32-bit integer
  i64: 64-bit integer
  f32: 32-bit floating point
  f64: 64-bit floating point
  Each parameter and local variable has exactly one value type. Function signatures consist of a sequence of zero or more parameter types and a sequence of zero or more return types. (Note: in the MVP, a function can have at most one return type).

- table and memory section implement core security

- -s SIDE_MODULE=2, generate side module

- WEBASSEMBLY JAVASCRIPT API

```js
WebAssembly.instantiateStreaming(fetch("side_module.wasm"), importObject).then(result => {
const value = result.instance.exports._Increment(17); console.log(value.toString());
});
```

```js
instantiate
instantiateStreaming

compile
compileStreaming

importObject: {
  env: {
    memory: {}
  }
}

Module.__malloc(256)
Module._free()
Module.ccall(name, returnTypes, [returns], [args])
Module.HEAP32.BYTES_PERS_ELEMENT
Module.HEAP32.set()
```

```c
#ifdef __EMSCRIPTEN__
  #include <emscripten.h>
#endif

#ifdef __cplusplus
  extern C {
#endif
#ifdef __cplusplus
  }
#endif

EMSCRIPTEN_KEEPLIVE

typedef void(*onSuccess) (void)
typedef void(*onError) (const char*)

EXPORTED_FUNCTIONS
EXTRA_EXPORTED_RUNTIME_METHODS
RESERVED_FUNCTION_POINTERS
```


## 2020-02-02

### Rust

```rust
use rand::Rng;

String::new()

std::cmp::Ordering;

match guess.cmp(&secret_number) {
  Ordering::Less => println!(" ")
  _ => " "
}

let guess : u32 = match guess.trim().parse() {
  Ok(num) => num,
  Err(_) => continue,
};

let tup : (i32, f64, u8) = (500, 6.4, 1);

fn five() -> i32 {
  5
}

let mut guess = String::new()

io::stdin().read_line(&mut guess).expect("Fail")

let guess : u32 = guess.trim().parse().expect(" ")

for element in a.iter() { }

for number in (1..4).rev() { }

enum Message {
  Quit,
  Move { x: i32, y: i32 },
  Write,
}

enum Option<T> {
  Some(T),
  None,
}

let y : Option<i8> = Some(5) = None

let v : Vec<i32> = Vec::new();

let v = Vec![1,1,2]

let third : &i32 = &v[2]
let third : &i32 = v.get(2)

for i in &v { }

for i in &mut v { }

// deref coersion
let s3 = s1 + &s2

use std::collections::HashMap;
let mut scores = HashMap::new();

let scores : HashMap<_,_> = teams.iter().zip(initial.iter()).collect()

entry().or_insert()

panic!()

RUST_BACKTRACE=1

enum Result<T, E. {
  OK(T),
  Err(E),
}

let f = match f {
  Ok(file) => file,
  Err(error) => {
    panic!("fail")
  }
}

println!("{:?}", error)

match f.read_to_string(&mut s)

unwrap()

impl Guess {
  pub fn new(value: u32) -> Guess
}

fn largest<T>(list: &[T]) -> T { }

struct Point<T> {
  x: T,
  y: T,
}

impl <T> Point<T> {
  fn x(&self) -> &T {
    &self.x
  }
}

// Trait Type
// Trait Bound
fn some_f<T, U>(t: T, u: U) -> i32
  where T: Display + Clone,
        U: Clone + Debug,

// lifetimes
fn largest<'a>(x: &'a str, y: &'a str) -> &'a str { }

// smart pointer
Box<T>
Rc<T>
Ref<T>
RefMut<T>

RefCell<T>
std::cell:RefCell
// allows mutable borrows checked at runtime
self.a.borrow_mut()

std::rc::Rc
Rc::Clone
Rc::strong_count(&a)

// prevent ref cycle
Weak<T>
RefCell<Weak<Node>>
RefCell::new(Weak::new())
// branch, leaf
*leaf.parent.borrow_mut() = Rc::downgrade(&branch)
leaf.parent.borrow().upgrade()


// thread
use std::thread;
use std::time::Duration;

let handle = thread::spawn(|| {
  thread::sleep(Duration::from_millis(1))
})

handle.join().unwrap();

// thread take ownership
thread::spawn(move || { })


```


## 2020-02-04

### [opslang](https://doc.openresty.com/en/opslang/)


### [G style guide](https://github.com/google/styleguide)



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