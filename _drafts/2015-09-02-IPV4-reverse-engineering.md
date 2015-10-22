---
title: IPV4 Reverse Engineering
layout: post
---

Questions
===

 * What is the subnet that the host 22.23.24.121/26 is connected to?
 * Is the address 172.16.3.32/28 a subnet or host address?

Answers
===

This should be easy based on everything else I've done thus far. Just figure out the block size and find out what the available subnets are. 

A shortcut is to divide the last *network* octet by the block size. Forget the remainder. Take whatever answer you got (without the remainder) and multiply it by the block size. The answer to that is the subnet that you're on. 