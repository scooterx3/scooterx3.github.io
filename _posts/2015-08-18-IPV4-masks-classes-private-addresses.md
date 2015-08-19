---
title: IPV4 Mask, Classes and Private Addresses
layout: post
created: 1440022232
---

Questions
===

 * What class does the IP address 191.192.127.99 belong to? 
 * What is the default mask for the IP address of 175.32.66.123?
 * What is the range for the class B private address space?
 * Why does knowing the class of an IP address matter? 


Classes
===

There are 3 classes: A, B and C. They can be identified by whatever the first octet is: 

 * **A**: 1-126.x.x.x
 * **B**: 128-191.x.x.x
 * **C**: 192-223.x.x.x

**Note:** 127 address space is RESERVED. 

The reason we care so much about classes is because that determines what the default mask is. Class A's mask covers the first octet. Class B's covers the 1st and 2nd, and Class C's covers 1st, 2nd and 3rd. Again, the mask determines what portion of the address is the network portion and leaves the rest for hosts. 

Default masks:
---

 * **A**: N.-.-.-
 * **B**: N.N.-.-
 * **C**: N.N.N.-


**Trivia**: Apparently the "subnet" is the same as the "network" address (I think, I'll confirm later).

Private Address Space
===

Private address space are the IP ranges used on an internal network by the various hosts. Nobody on the outside sees these. 

 * **A**: 10.x.x.x
 * **B**: 172.16-31.x.x
 * **C**: 192.168.x.x





