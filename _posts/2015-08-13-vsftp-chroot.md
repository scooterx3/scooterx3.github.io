---
title: chroot vsftp stuff
layout: post
---

I was trying to set up vsftp for chrooted stuff and had set the following

> chroot\_local\_user=YES
> chroot\_list\_enable=NO

And for some reason I kept getting *500 OOPS: vsftpd: refusing to run with writable root inside chroot() Keep user jailed*

The key in this case was to also add: 

> allow_writeable_chroot=YES

There are other things of course that need to be taken into account (permissions, home dir, etc) but otherwise this is how to do it. 

