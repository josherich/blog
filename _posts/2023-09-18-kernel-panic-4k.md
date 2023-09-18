---
layout: post
title:  "Software Doesn't Work For the Happiest Path"
description: "Kernel panic - not syncing: VFS: Unable to mount root fs on unknown block(0,0)"
date: 2023-09-18 00:00:01
categories: short
tags: [ubuntu,kernel,linux,4k,short]
---
Anyone with the slightest amount of software experience will know that it's always better to NOT upgrade unless you absolutely have to. I payed the price for not strictly following this advice and naively believing it's okay if I'm supposed to be on the happiest path. Here's what happened:

10 minutes after agreeing to upgrade Ubuntu 22.04 to 23.04, the monitor went completely black. I had to manually reboot the system and it kept doing nothing. Not much can be inferred from a complete black screen, unresponsive keyboard and mouse. My hunch was that the upgrade was interrupted by the manual reboot, the black screen could be related to the 4k monitor driving issue, both of which turned out to be right. After connecting a 1080 monitor, the following text showed after booting the new 6 kernel failed:

> Kernel panic - not syncing: VFS: Unable to mount root fs on unknown block(0,0)

The rest is obvious, after successfully booting from the old 5 kernel, running `dpkg --configure -a` would redo and finish the upgrade.

The same lesson just repeated over and over: The software is nowadays written in a way that no robustness is guarantee even for the happiest path. I got the most popular motherboard, the most popular graphics card, the most popular linux distro, the most popular monitor category. When combined, the reliability is embarrassing.