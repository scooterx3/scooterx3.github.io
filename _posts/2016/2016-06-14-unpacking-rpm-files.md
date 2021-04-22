---
id: 64
title: Unpacking RPM files
date: 2016-06-14T21:42:25+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=64

categories:
  - Uncategorized
tags:
  - package management
  - rpm
  - yum
---
rpm2cpio and yumdownloader

If you ever happen to want to get some files from an RPM to do whatever you want with them, you could:

~~~
yumdownloader &lt;package&gt; 
rpm2cpio &lt;package.rpm&gt; &gt; file.cpio
cpio -idv &lt; file.cpio # extracts from file.cpio all package files into the current working dir
~~~

Pretty simple and small, but a good tool to have if you need it.