---
id: 89
title: piping and redirection
date: 2016-06-29T21:24:31+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=89

categories:
  - Uncategorized
tags:
  - bash
---
xargs &#8211; takes results from one command and uses them as arguments to another command.

~~~
&lt;command1&gt; | xargs &lt;command2&gt;
~~~

tee &#8211; takes stdin and prints to file and prints to screen. Thus to be able to capture and see output

~~~
&lt;command1&gt; | tee &lt;filename&gt;
~~~

Redirection

~~~
&lt;command&gt; &gt; file.txt 2&gt;&1
~~~

This sends stdin _and_ stdout&#8217;s output to file.txt