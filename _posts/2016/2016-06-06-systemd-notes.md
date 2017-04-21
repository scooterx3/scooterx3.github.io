---
id: 23
title: systemd notes
date: 2016-06-06T22:06:49+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=23

categories:
  - Uncategorized
tags:
  - init
  - systemd
---
Change target / mode:

~~~
systemctl isolate &lt;target&gt;
~~~

Find default mode:

~~~
systemctl get-default
~~~

Set a default mode:

~~~
systemctl set-default &lt;target&gt;
~~~

Note the <target> needs to end in &#8220;.target&#8221; ie:

~~~
systemctl set-default multi-user.target
~~~

Locations:

/etc/systemd/system
  
/usr/lib/systemd/system