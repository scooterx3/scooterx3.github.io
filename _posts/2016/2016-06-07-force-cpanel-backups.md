---
id: 25
title: Force cPanel backups
date: 2016-06-07T16:46:38+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=25

categories:
  - Uncategorized
tags:
  - cpanel
---
Real simple:

~~~
/usr/local/cpanel/bin/backup --force
~~~

Just that single command. So it IS possible. Everyone always tells me it isn&#8217;t&#8230; This force-runs the daily backup option. Mind you, it does so for ALL of the accounts listed in WHM.

One thing I noticed is it sticks the backup in /backup/<date> &#8230; Hmm&#8230;