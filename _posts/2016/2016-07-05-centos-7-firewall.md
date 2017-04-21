---
id: 103
title: Centos 7 firewall
date: 2016-07-05T01:21:41+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=103

categories:
  - Uncategorized
---
Just a quick note, I had to open up a hole in the firewall on the server itself (even though I had my router stuff all set right already) by doing:

~~~
<i>sudo firewall-cmd --permanent --zone=public --add-port=80/tcp
sudo firewall-cmd --reload
</i>
~~~

Worked great. I guess having a firewall on the server itself is good too. Instead of just relying on the one on the outer edge of the network.