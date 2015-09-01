---
title: IPV4 - Valid host addresses
layout: post
---


Questions
===

 * What is the valid host range for the network 1.4.0.0/15? 
 * What is the broadcast address for network 200.1.2.64/27?
 * What is the first valid host on subnet 172.16.16.0/20?
 * Is the IP of 9.12.0.0/15 a valid IP for a host to use? 

Identify the subnet range
===

 * List subnets
 * First host: subnet +1 (last octet)
 * Last host: next subnet -2
 * Broadcast address: Next subnet -1

Examples
---

*/24 network*
Say we want to take a /24 network and create 7 subnets. Finger game says we need 3 bits (2, 4, 8). Block size becomes 32. Subnets would look as follows: 

	x.x.x.0
	x.x.x.32
	x.x.x.64
	x.x.x.96
	x.x.x.128
	x.x.x.160
	x.x.x.192
	x.x.x.224

Then you'd have to come up with the ranges which would be valid host addresses (see above). First column = subnet, 2nd column = first host address, 3rd column = last host address, 4th column = broadcast address. 

	SUBNET 		1ST HOST 	LAST HOST   B/C ADDRESS
	x.x.x.0		x.x.x.1		x.x.x.30	x.x.x.31
	x.x.x.32	x.x.x.33	x.x.x.62	x.x.x.63
	x.x.x.64	x.x.x.65	x.x.x.94	x.x.x.95
	x.x.x.96	x.x.x.97	x.x.x.126	x.x.x.127
	x.x.x.128	x.x.x.129	x.x.x.158	x.x.x.159
	x.x.x.160	x.x.x.161	x.x.x.190	x.x.x.191
	x.x.x.192	x.x.x.193	x.x.x.222	x.x.x.223
	x.x.x.224	x.x.x.225	x.x.x.254	x.x.x.255

The process is about the same for a /16 network but if you're not used to it it could be tricky. Let's assume we divide a /16 into 15 subnets. I'll give the first few as an example: 

	SUBNET 		1ST HOST 	LAST HOST   B/C ADDRESS
	x.x.0.0		x.x.0.1		x.x.15.254	x.x.15.255
	x.x.16.0	x.x.16.1	x.x.32.254	x.x.32.255
	x.x.32.0	x.x.47.1	x.x.47.254	x.x.47.255
	x.x.48.0	x.x.48.1	x.x.63.254	x.x.63.255
	...


Same goes for a /8 network divided into 120 subnets. (first few as an example):

	SUBNET 		1ST HOST 	LAST HOST   B/C ADDRESS
	x.0.0.0		x.0.0.1		x.1.255.254	x.1.255.255
	x.2.0.0		x.2.0.1		x.3.255.254	x.3.255.255
	x.4.0.0		x.4.0.1		x.5.255.254	x.5.255.255
	x.6.0.0		x.6.0.1		x.7.255.254	x.7.255.255
	...


Yay! 