---
id: 91
title: Foreground and background jobs
date: 2016-07-05T21:47:32+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=91

categories:
  - Uncategorized
---
FG BG jobs nohup, disown, screen

## Jobs

What are Jobs? A **job** is a concept used by the shell &#8211; any program you interactively start that doesn&#8217;t detach (ie, not a daemon) is a **job. **Jobs can reside in the foreground (spitting output to the terminal) or in the background (they run, but you don&#8217;t get their output spat to the terminal).

One can send a job to BG right away using the &#8216;&&#8217; at the end of the command. Ex:

~~~
somecrazycommand &
~~~

If you&#8217;ve already started a command, use &#8216;ctrl+z&#8217; to suspend it (stopping the process from continuing), then &#8216;bg&#8217; (which will allow it to run in the background). Ex:

~~~
$ sleep 444444
^Z 
[3]+ Stopped
$ bg
[3]+ sleep 444444 &
~~~

You could specify a job number by &#8216;bg %<job number>&#8217;.

List jobs: use the &#8216;jobs&#8217; command:

~~~
$ jobs
[1] Running sleep 22222 &
[2] Running sleep 11111 &
[3] Running sleep 444444 &
[4]- Stopped sleep 66666
[5]+ Stopped sleep 7777
~~~

Jobs 4 and 5 are suspended, not running in fg or bg.

To get the job back to the foreground, use &#8216;fg %<job number>&#8217;:

~~~
$ fg %4
sleep 66666
~~~

These jobs are all attached to the current terminal window. If closed/exited, they all get killed (Hung Up  or &#8220;hup&#8221;). Enter NOHUP & DISOWN

## NOHUP & DISOWN

A way to protect jobs from being killed when closing terminal. One is a command called &#8216;nohup&#8217;. Can do:

~~~
nohup sleep 44444 &
~~~

The sleep command would run in the background, no output would be sent to the terminal but instead sent to nohup.out in whatever dir you were standing in at the time.

Another way to do it is using &#8216;disown&#8217;. A list of jobs:

~~~
$ jobs
[1] Running sleep 22222 &
[2] Running sleep 11111 &
[3] Running sleep 444444 &
[4]- Running sleep 66666 &
[5]+ Stopped sleep 7777
~~~

Then can do:

~~~
disown %3
~~~

New list of jobs:

~~~
$ jobs
[1] Running sleep 22222 &
[2] Running sleep 11111 &
[4]- Running sleep 66666 &
[5]+ Stopped sleep 7777
~~~

job %3 is now &#8220;disowned&#8221; and the computer keeps running it even if the window is closed.

The problem with nohup and disown is that you can&#8217;t resume the jobs after you&#8217;ve nohupped or disowned. Enter screen

## Screen

Screen you know, it lets you jump into a session that you can allow to stay alive, detach from, reattach from anywhere, etc. Awesome and stuff.