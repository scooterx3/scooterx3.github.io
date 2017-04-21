---
id: 21
title: sysV notes
date: 2016-06-06T21:47:08+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=21

categories:
  - Uncategorized
tags:
  - init
  - sysv
---
Change runlevel:

~~~
telinit 5
~~~

&#8216;5&#8217; above being the runlevel you want to switch to.

Default runlevel specified in /etc/inittab:

~~~
<tt class="computeroutput">id:5:initdefault:</tt>
~~~