---
id: 118
title: Default grub entry centos 7
date: 2016-07-22T14:26:14+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=118

categories:
  - Uncategorized
---
/boot/grub2/grub.cfg has a list of menuentries with a lot of information in each. Starting at 0 count down to the one you want (you could script this out too). Then take that number and edit /etc/default/grub. In that file, add (or edit) a line:

~~~
GRUB_DEFAULT=x
~~~

x being the number of the menuentry you picked from looking in /boot/grub2/grub.cfg

Then you have to update the grub.cfg file by running:

~~~
grub2-mkconfig -o /boot/grub2/grub.cfg
~~~

grub2-mkconfig compiles settings &#8220;&#8230;using templates
  
\# from /etc/grub.d and settings from /etc/default/grub.&#8221;

I understand other systems to have a script called &#8220;update-grub&#8221; or &#8220;update-grub2&#8221; but all they do is run the &#8220;grub-mkconfig&#8221; or &#8220;grub2-mkconfig&#8221; in turn.