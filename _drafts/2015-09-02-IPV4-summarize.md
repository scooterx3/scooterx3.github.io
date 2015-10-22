---
title: summarize
layout: post
---

Questions
===

 * What are two applications/uses for summary addresses?
 * What is the single best summary address for subnets 4, 8, 12 and 16 on the network 99.55.0.0/22?

Learn stuff
===

Apparently we want to try and summarize a group of subnets as an address. Summarizing the following subnets on 17.71.x.0: 

 * 244
 * 246
 * 248
 * 250 
 * 252
 * 254

The summary would be 17.71.240.0/20

Here are the steps
--- 

 1) Find the common bits
 2) Use the mask to cover common bits
 3) Zero the rest out
 4) Indicate new summary and mask

 The items of interest in this process is the summary mask and the summary address. Not that the mask can somehow be used to determine what the summary address is. 

