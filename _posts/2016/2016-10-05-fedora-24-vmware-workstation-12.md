---
id: 195
title: Fedora 24 VMware workstation 12
date: 2016-10-05T17:20:15+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=195

categories:
  - Uncategorized
tags:
  - kernel modules
  - vmware
---
When VMware gets installed, it checks to make sure the proper kernel modules are installed when first run. It fails for me on Fedora24. I am not savvy when it comes to these things so I had to go digging. I found this resource:

http://vcojot.blogspot.com/2015/11/vmware-worksation-12-on-fedora-core-23.html

Which worked wonderfully. Basically I had to run [this script](https://raw.githubusercontent.com/ElCoyote27/krynn-tools/master/Update_VMW.sh) that the author of the article made, which as I understand altered vmware files. Then I ran vmware-modconfig to go ahead and allow vmware to update kernel modules for me, which it did with no problem. Done. Woot!