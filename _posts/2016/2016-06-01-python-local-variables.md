---
id: 15
title: Python local variables
date: 2016-06-01T21:23:57+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=15

categories:
  - Uncategorized
tags:
  - python
---
Apparently variables are local to a given function simply by virtue of being defined within said function. No keyword needed:

&nbsp;

~~~
def f():
    s = 'some value'

print(s)
ERROR: You fool! s isn't defined!!
~~~

&nbsp;