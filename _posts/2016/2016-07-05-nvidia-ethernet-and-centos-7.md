---
id: 99
title: Nvidia ethernet and centos 7
date: 2016-07-05T00:39:45+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=99

categories:
  - Uncategorized
---
So I bought a simple dual core desktop machine recently to use as a simple server. I fired it up with centos 7&#8217;s &#8220;minimal&#8221; ISO. Got up and going, network didn&#8217;t work (lights were flashing, but nothing but a loopback device was recognized by the system). So I installed the &#8220;DVD&#8221; iso, hoping it would have whatever extra thing in it that was needed for the networking but still no dice. Finally I found out that a kernel module called &#8220;forcedeth&#8221; was missing. This bug report led me to a solution:

https://bugs.centos.org/view.php?id=7359

I just downloaded the plus kernel (check the notes in the above, otherwise the &#8220;fixed&#8221; status is deceptive based on the title of the issue), USB-sticked it over to the ailing machine and RPM installed it. I found it here:

http://mirror.centos.org/centos/7/centosplus/x86_64/Packages/