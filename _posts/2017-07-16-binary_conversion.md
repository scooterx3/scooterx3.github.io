---
title: Binary Conversion
tags: binary math
---

This is a method I learned recently, figured I'd write it down. 

Start with the number that you're trying to convert. Divide it by two. If the result is even, leave a _zero_ behind and put the result to the left of the original number. If the result is odd, put the result *minus the remainder* to the left and leave a _one_ behind. 

Basically, even results get a `0`, odd results get a `1`.

Example (convert 240 to binary): 

	1	3	7	15	30	60	120	240
	1	1	1	1	0	0	0	0

Thus, 240 in binary is 11110000.