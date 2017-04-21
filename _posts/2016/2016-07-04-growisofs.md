---
id: 95
title: growisofs
date: 2016-07-04T03:22:19+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=95

categories:
  - Uncategorized
tags:
  - burn
  - growisofs
---
Found this cool tool to burn an ISO to CD or DVD with a quick command:

~~~
growisofs -Z /dev/dvdrw=&lt;path to iso&gt;
~~~

An example:

~~~
growisofs -Z /dev/dvdrw=/home/riley/Downloads/CentOS-7-x86_64-Minimal-1511.iso
~~~