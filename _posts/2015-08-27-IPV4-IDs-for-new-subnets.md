---
Title: IPV4 - IDs for new subnets
layout: post
---

Questions
===

 * What is the "Block size" and why does it matter when figuring out what the new subnets are? 
 * Beginning with the network 10.0.0.0/16, what is the 3rd subnet if you use a new and longer /19 mask for custom subnetting? 
 * Starting with the network 175.33.0.0/24, what is the 2nd subnet when using a /26 mask for custom subnetting?


Identify your subnet IDs
===

Determine Block Size (BS)
---

To get the value of the block size, just refer back to the mask values / finger game: 


    Mask	128 192 224 220 248 252 254 255
    Block   128	64  32  16  8   4   2   1
    Bits    1   2   3   4   5   6   7   8

If you need 4 bits, your block size is 16

Use block size to determine subnet IDs
---

If the block size is 16, you'd wind up saying that the first 5 subnets of some class B (x.x.0.0/16) are: 

    x.x.0.0/20
    x.x.8.0/20
    x.x.16.0/20
    x.x.24.0/20
    x.x.32.0/20

You start at zero (which is the same as the original network) and count up from there by the number of your block size. *Note too* that the mask value changed (it was /16 and now it's /20). 



