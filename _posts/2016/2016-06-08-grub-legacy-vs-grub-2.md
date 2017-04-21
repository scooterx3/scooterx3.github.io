---
id: 34
title: Grub Legacy vs Grub 2
date: 2016-06-08T21:53:07+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=34

categories:
  - Uncategorized
tags:
  - grub
---
**GR**and **U**nified **B**oot System

Essentially, Grub Legacy is easy to reconfigure by just changing a single file. Grub 2 has several config files, then once you&#8217;ve changed them, you have to run a script to update the cfg file that grub2 reads in order for the changes to take effect.

### Legacy config is simple:

/boot/grub/menu.lst << how you change how the system boots, unique to grub legacy

### Grub2 config:

/etc/default/grub << one of the config files
  
grub2-mkconfig -o /path/to/grub.cfg (probably /etc/grub2/grub.cfg)

Hafta&#8217; change config file, then run the mkconfig to regenerate the grub.cfg, then your changes take effect.

### OS differences

#### Ubuntu

  * grub2 since 2009
  * backward compatible
  * grub2 stuff in /boot/grub/grub.cfg

#### Enterprise 6 (centos, rhel, whatev)

  * grub legacy
  * no grub2 tools

#### Enterprise 7 (centos, rhel, whatev)

  * grub2
  * no backwards compatibility
  * /boot/grub2/