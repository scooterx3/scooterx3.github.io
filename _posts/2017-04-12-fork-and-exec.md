---
id: 253
title: Fork and Exec
date: 2017-04-12T20:38:18+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=253
permalink: /?p=253
categories:
  - Uncategorized
---
I was just trying to understand Exec a bit better, specifically in scripting. I went down a small rabbit hole, and I&#8217;m not sure I&#8217;m any closer to understanding the purpose of exec in scripting yet, but I just had a lightbulb that I figured I should write down. My objective is to show the relationship between fork and exec, and what exec&#8217;s purpose is.

Let&#8217;s start with some random process. For simplicity, I&#8217;ll just grab my current bash instance, which happens to have a PID of 10059. I&#8217;ve created these 3 scripts which I&#8217;ll use to illustrate what happens:

* * *

<pre>#!/bin/bash
#forkingscript.sh

echo "[forkingscript.sh] my parent is: $PPID"
echo "[forkingscript.sh] my pid is: $$"

</pre>

<pre>/home/user/childprocess.sh</pre>

* * *

<pre>#!/bin/bash
#childprocess.sh

echo "[childprocess.sh] my parent is: $PPID"
echo "[childprocess.sh] my pid is: $$"

exec /home/user/execprocess.sh</pre>

* * *

<pre>#!/bin/bash
#execprocess.sh

echo "[execprocess.sh] my parent is: $PPID"
echo "[execprocess.sh] my pid is: $$"</pre>

* * *

You&#8217;ll notice that the first calls the second. This is going to be a &#8216;fork&#8217;. The second will call the 3rd using &#8216;exec&#8217;. When I run the first forkingscript.sh script, this is what happens:

<pre>$ ./forkingscript.sh 
[forkingscript.sh] my parent is: 10059
[forkingscript.sh] my pid is: 25397
[childprocess.sh] my parent is: 25397
[childprocess.sh] my pid is: 25398
[execprocess.sh] my parent is: 25397
[execprocess.sh] my pid is: 25398</pre>

So, let&#8217;s analyze.

In forkingscript.sh, you&#8217;ll notice it has its own new PID of 25397. The parent is 10059, which is the bash instance that&#8217;s running. Then once childprocess.sh is called, it gets a new PID, and the parent was the process that called it (forkingscript.sh). Now what just lightbulbed for me was that when using exec, a new process isn&#8217;t created, but rather the existing one is used, essentially taking over the process that called it. Note that the PID in &#8216;execprocess.sh&#8217; is the same as the PID from &#8216;childprocess.sh&#8217;.

I need to explain that forking runs an exec as well. When a process forks, it creates a clone of itself. So from bash, when I ran forkingscript.sh, it actually created a new bash clone (with a new PID) and then that bash clone exec&#8217;d the forkingscript.sh, which then essentially replaced that child bash process with whatever came with forkingscript.sh.

I also need to explain that at the point in a program or script, when exec is run, that is the literal end of that script. Any code that may have been written after the exec call will never run.

I found this video helpful: https://www.youtube.com/watch?v=mj2VjcOXXs4