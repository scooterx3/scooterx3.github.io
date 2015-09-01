---
title: IPV4 - room for one more?
layout: post
---

I believe he's asking us to determine how many host addresses fit in *a given subnet* as in the 'x.x.x.16' subnet, but not the total amount of host addresses you'd have available in all of the subnets you just created. That confused me at first. 

Questions
===

 * How many host addresses are available on a subnetwork that is using a /28 mask?
 * Why are there 2 unavailable addresses for each subnet? 
 * How many IP addresses can be assigned to hosts if the mask is /25? 

Counting available host addresses
===

Counting available hosts on a given subnet based on the mask

Pretty easy. Finger game. 

 1) Find out how many host bits are available based on the mask
 2) Finger game those host bits
 3) Subtract 2 (can't use the actual subnet address nor the broadcast address)

Let's take a /30 for example. There's a total of 32 bits in an IPV4, so 2 bits are left over for host addresses. Finger game says 2 bits = 4. So there are 4 addresses available on that subnet. But, subract 2 (one for subnet, one for broadcast) and you get 2. In a /30, each subnet can only have two hosts. 

Now let's do a /23. Finger game says take the first 2 octets plus 7 bits, so block size is 2. Example:

	SUBNET  	1ST HOST 	LAST HOST
    x.x.0.0		x.x.0.1		x.x.1.254

That first "chunk" (x.x.0.y) represented as follows: 1 <= y <= 255
That 2nd "chunk" (x.x.0.z) represented as follows: 0 <= z <= 254

Remember, the very first address is reserved for the subnet (minus 1) and the very last address is for broadcast (minus 1 again, for a total of minus 2). 

If you didn't have to reserve a bit in a "chunk" you'd just give it 256. If we happened to be operating on a subnet of a /8 network (x.0.0.0) you'd have 65536 possible addresses per "chunk". Not sure what to call 'em.
