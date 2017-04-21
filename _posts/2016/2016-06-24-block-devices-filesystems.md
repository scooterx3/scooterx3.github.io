---
id: 83
title: Block devices, filesystems
date: 2016-06-24T21:33:52+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=83

categories:
  - Uncategorized
tags:
  - block device
  - cpio
  - dd
  - filesystem
  - tar
---
_**dd**_ &#8211; strictly works with block systems, not filesystems. It takes an input file (if), an output file(of) and block size as arguments. It copies everything block for block from one block device / file to another. That&#8217;s why you can use dd to create a bootable USB. it takes the _if_ of an .iso and an _of_ of /dev/sdb (a usb drive perhaps) and copies it straight over.  Requires sudo in many cases because we&#8217;re dealing directly with devices (/dev/sd*).

_**tar**_ &#8211; works on the filesystem, not block systems directly.

_**cpio**_ &#8211; stands for _copy-in, copy-out_. It&#8217;s obnoxious that one has to pipe the results of some other command into cpio for it to have a list of stuff to put together in an archive. And you have to redirect the output into somefile.cpio. The advantage here is that you could specify a bunch of really specific files using _find_ and pipe that into cpio. If all you want is a backup of whatever is in a particular directory, then just use _tar. _A note: the &#8216;-d&#8217; flag is __probably required for it&#8217;s correct operation (maybe a test q)