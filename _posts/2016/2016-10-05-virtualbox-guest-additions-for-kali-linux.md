---
id: 193
title: Virtualbox Guest Additions for Kali Linux
date: 2016-10-05T04:20:12+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=193

categories:
  - Uncategorized
tags:
  - guest additions
  - virtualbox
---
I just started goofing off with Kali Linux (metasploit against a metasploitable image) and had installed it to virtualbox. I tried to install Guest Additions so as to be able to make the screen match my actual monitor and allow for fullscreening. In trying to do that, I was told I needed kernel headers for the 4.7 kernel, but the Kali I just installed (2016.2 version) was running on the 4.6 kernel, and no headers were found in the repository. I had to dnf dist-upgrade to upgrade the kernel (along with the rest of everything). Then I was able to install guest additions and away I went. I am posting this from a fullscreened Kali install inside of VirtualBox. Yay!