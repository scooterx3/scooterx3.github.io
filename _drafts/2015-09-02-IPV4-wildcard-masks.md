---
title: IPV4 - wildcard masks
layout: post
---

Focusing on unloved, uncared about bits. 

Questions
===

 * When would we use wildcard masks?
 * What is the wildcard mask for the address 192.5.48.0/21?

Answers
===

Used by: 

 * Access Control Lists (ACLs)
 * Network statements in OSPF and EIGRP 

Steps: 

 * Invert the subnet mask on even boundaries
 * Least significant bit of mask -1 when dividing an octet (block size minus 1)

So the idea here is to just invert a mask, sort of. If I have: 

1.2.3.0/25, the mask would be 255.255.255.128. Then the wildcard (inverted) mask would be 0.0.0.127. You can do two things to get there: 

 1) either just invert the 0s and then for the partially used octet, find the block size and subtract one (as suggested above)
 2) Another standalone (or work-checking step) is to take the 255 and subtract from it whatever the mask value is of that network. 

The answer to the one from the **Questions** section above is 0.0.7.255 if you're curious