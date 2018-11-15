---
layout: post
title:  "Jank Free in Chrome"
description: ""
date:   2014-05-11 20:02:39
categories: Math
tags: [Chrome, Web]
---
http://jankfree.org/
http://www.html5rocks.com/en/tutorials/speed/scrolling/
http://calendar.perfplanet.com/2013/the-runtime-performance-checklist/

use Chrome devTool, timeline -> frames, hit record and do something on the page.
use "show repaint rectangles"
use "show potential scroll bottlenecks"

4 types of events: loading scripting rendering painting

- make minimum painting area to reduce painting time.
composite layer: browser group content into composite layer, repaint the whole layer when one of its elements changes.

- reflow: recalculate the document flow if elements are resized

- to get 60 fps, everything should be done in 16.7ms, if some fn costs more than 16.7ms, jank

- expensive css style make big different, like box shadow, background-image

- even visit a DOM property can be expensive, like offsetTop, browser will recalculate it everytime you ask for it.

- deboucing scroll events, set scroll position in scroll callback and use them in requestAnimation

- heavy css paint time [css paint time][http://www.html5rocks.com/en/tutorials/speed/css-paint-times/]