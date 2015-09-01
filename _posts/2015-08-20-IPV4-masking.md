---
title: IPV4 masking
layout: post
---

Questions
===

 * A PC has the IP address of 15.69.35.28 with a mask of 255.255.0.0; what is the network this computer is connected to? 
 * How many bits from the IP are being used to represent the "network"?
 * What is the significance of a bit being "on" in a mask? 
 * Do the mask bits, going left to right, have to be "on" in order? 
 * What is the purpose of the mask? 

Answers
===

When doing IP addresses and masking, break it out into binary. 

**Example**

    Decimal IP:	 	192.168.1.15
	Binary IP:		11000000.10101000.00000001.00001111
	
	Decimal Mask: 	255.255.255.0
	Binary Mask:	11111111.11111111.11111111.00000000

The part where the 1's stop in the binary mask marks the line between the network (left) side and the hosts (right) side of the IP address. It can be said then of the above that the computer resides on network 192.168.1, and it's address is 15. 

In the above case, we're on a network also recognized as a "24 bit" network. The first 24 bits are "reserved" to represent the network. It can be written as follows: 

  192.168.1.0/24

There are other sized networks too:

  192.168.0.0/16 (mask would be 255.255.0.0)
  
  192.0.0.0/8 (mask would be 255.0.0.0)

You'll never run into a mask such as this: 

  11101111.00000000.00000000.00000000

There will always be a solid chunk of 1s and then a solid chunk of 0s. 

