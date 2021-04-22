---
id: 48
title: YUM and RPM
date: 2016-06-13T22:04:58+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=48

categories:
  - Uncategorized
tags:
  - package management
  - rpm
  - yum
---
RPM = **R**edhat **P**ackage **M**anager

YUM = **Y**ellowdog **U**pdater **M**odified

Yum is different from APT in that it automagically does an update of the local cache when you&#8217;re checking a repository for whatever.

Some YUM commands

~~~
yum search
yum info
yum install
yum remove
yum provides # shows what package provided a particular binary, file, etc
yum update
~~~

Important paths:

~~~
/etc/yum.conf # some configuration for yum, including the directory where repos are stored
/etc/yum.repos.d/* # files in here determine which repos the system uses
~~~

&nbsp;