---
title: IPV4 - non-octet boundaries
layout: post
---

Starting subnetting from somewhere _other_ than a clean 8-bit boundary. Possible? Youbetcha. 

Questions
===

 * Starting with a subnet of 10.20.30.64/26, what would be the new Mask to create 4 new subnets? 
 * What is the last valid host address on the 1st new subnet, when using a /29 mask on network 192.168.10.64/26? 

Answers and such
===

Steps
---

 1) Start with what you have
 1) Determine number of subnets, apply new mask
 1) Validate that there's enough digits left for # of hosts needed
 1) Determine valid host range and start using the addresses