---
title: IPV4 - Stealing Host Bits
layout: post
---

Questions
===
 * How many bits would be sacrificed to network addressing to create exactly 16 new subnetworks?
 * In the finger game, when you start with a 2 and verbally double the number with each new digit raised, does the number you speak represent how many new subnets you can create, and the digits in the air represent the number of host bits sacrificed? 
 * What is the new mask, in the octet where 2 previous host bits are being converted over to network addressing? 



Make room for more network address space
===

Take an existing network address and chop it up into smaller pieces

Process
---

 1. Identify # of new subnets needed
 2. Find out how mny bits you can steal from the host portion (finger game, see below)
 3. Identify # of bits to sacrifice (still finger game)
 4. Let everyone know (modify the mask)

Finger Game
---

Used to determine how many bits one needs to steal from the host section. 
Count on your fingers starting with your thumb, then index, etc. Thumb is worth two, index is doubled (4), middle is doubled (8) and so on. 

    bits(fingers):	1 2 3 4  5  6  7   8
    subnets:		2 4 8 16 32 64 128 256

IE: If you need 6 subnets you'd need to steal 3 bits. 


Mask Values
---

    Values	128 192 224 220 248 252 254 255
    Weights 128	64  32  16  8   4   2   1

