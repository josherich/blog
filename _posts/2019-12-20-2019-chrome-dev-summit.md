---
layout: post
title:  "2019 Chrome Dev Summit highlight"
description: ""
date:   2019-12-20 14:02:39
categories: Reading
tags: [performance, css, chrome]
---

what if frontend is a CS research area

Then we wouldn’t talk about how to iterate faster. ppl would write paper on how to build a better browser, just as if they are building virtual machine technology.
ppl would write paper on better and robust dynamic languages, on how to make them as fast as native programs(wasm is awesome)
ppl would write paper on UI systems, instead of building new UI library, it’s more effective to discover new ways of UI abstraction.

The most important problem in frontend engineering is the browser infrastructure. A browser optimized for running large unstable scripts via unstable network.

Imagine a world without startup hype, where website and software release once each year. Does it matter anymore to have a frontend framework capable of building small demo really fast? or is it more vital to build robust and efficient software.

CI and building tool chain do matter these days, but does it in this context?

What about numerous JavaScript syntactic sugars from TC39? and the whole babel ecosystem?

## what does a web project winning [ACM Software System Award](https://en.wikipedia.org/wiki/ACM_Software_System_Award) look like?

## run the entire iOS in a browser
secure and complete access to os and hardware
fast and robust
releasing via network, instead of browsing

## a framework that just works, and supports exponential growth of productivity, an example would be Jupyter Notebook

React is close, but I'm not a fan of the ecosystem, redux is unnecessary, there is no winner in tool chains


## dev summit
https://developer.chrome.com/devsummit/schedule/

## HTML

[HTML isn’t done!](https://www.youtube.com/watch?v=ZFvPLrKZywA&feature=emb_title)

HTML is done

[Redesigned form elements](http://gwhitworth.com/blog/2019/07/form-controls-components/)

Tons of work has been done without browser support, this effort lacks incentives.

what about shadow DOM?

## CSS

custom property is the most exciting feature, others will follow

CSS working group draft
https://github.com/w3c/csswg-drafts

is selector
scroll snap
focus-within
prefer-*
@media (prefer-*)
@media (forced-colors, light-level)
logical property(block, inline)
sticky stack
flex-box gap
CSS Houdini, customized property
worklet, paint, animation
typed OM
`const { value, unit } = h1
  .computedStyleMap()
  .get('font-size')
`
css regions
`
  #this {
    flow-into: my-flow;
  }
  #there {
    flow-from: my-flow;
  }
`
CSS modules
https://github.com/w3c/webcomponents/issues/759

display: inner outer

https://css-at-cds.netlify.com/

## JS

### shipping process

https://discourse.wicg.io/

https://developers.chrome.com/origintrials/#/trials/active

### frameworks

differential loading

https://github.com/babel/preset-modules
find the closest es version, and fix(transpile) using as less code as possible

comformance
bit.ly/next-conformance

### web assembly

- thread
- SIMD
- async function calling

### incubator

https://wicg.io/

## PWA

add to home button
https://developers.google.com/web/updates/2018/06/a2hs-updates

## Network

adaptive loading: network type, is on Save data?
Chrome

Web Packaging and Content Indexing API

## Evil?

intertwine with google search, AMP
SEO opt decide what should webpage look like

### googlebot

at median, the time spent between crawling and having the rendered results is actually only 5 seconds.
loading=“lazy”
background-image is not indexed

## performance

https://web.dev/metrics/
https://web.dev/speed-tooling-evolutions-cds-2019/


lighthouse update https://www.youtube.com/watch?v=iaWLXf1FgI0
Largest Contentful Paint (LCP) aims to measure when the main, largest piece of content is visible for the user

Cumulative Layout Shift (CLS) measures the predictability aspect of a user experience, in addition to load and interactivity metrics. Essentially CLS measures the amount that elements move around during load.

Total Blocking Time (TBT) is used to quantify the risk in long tasks. It does this by measuring the impact of a long task with potential input delay, such as a JavaScript task that is loading an element on a page, for a users interaction on a website.

### Lighthouse CI

### Adaptive loading

network, CPU, memory
`saveData`, `deviceMemory`

### Off the main thread

## PWA

- portal
https://web.dev/hands-on-portals/

- periodic sync
https://web.dev/periodic-background-sync/

- content index
https://github.com/rayankans/content-index

- web bundle

### Install experience

## VS native
project fugu
https://bugs.chromium.org/p/chromium/issues/list?can=2&q=proj-fugu&sort=pri&colspec=ID+Pri+M+Stars+ReleaseBlock+Component+Status+Owner+Summary+OS+Modified&x=m&y=releaseblock&cells=ids

Web Authentication API
text msg api
contact picker
native file
web share
web xr
web bluetooth
web NFC

## Others
