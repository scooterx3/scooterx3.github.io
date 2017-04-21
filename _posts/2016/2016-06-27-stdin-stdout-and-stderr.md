---
id: 87
title: stdin, stdout and stderr
date: 2016-06-27T21:52:17+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=87

categories:
  - Uncategorized
---
Redirecting

stdin is a channel where one provides input (keyboard, typically)
  
stdout is a channel that a script or program uses to output information
  
stderr is another channel used by a script or program to output errors

< redirect stdin
  
> redirect stdout
  
2> redirect stderr

Examples:
  
This redirects any errors to the &#8216;err&#8217; file

~~~
ls nonexistentfile 2&gt; err
~~~

This redirects any actual output to the &#8216;out&#8217; file and errors to &#8216;err&#8217;

~~~
ls nonexistentfile 2&gt; err &gt; out
~~~

This redirects stderr to stdout and then both to the file:

~~~
ls nonexistentfile &gt; file.txt 2&gt;&1
~~~

Though I don&#8217;t yet understand why it is that it needs to happen in that particular order. I would&#8217;ve assumed 2>&1 > file.txt but it doesn&#8217;t work that way.