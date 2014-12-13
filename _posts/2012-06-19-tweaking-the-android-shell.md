---
layout: post
title: !binary |-
  VHdlYWtpbmcgdGhlIEFuZHJvaWQgc2hlbGw=
created: 1340152265
---
So, I've been playing around with my android (Samsung Galaxy S), just rooted it finally after having had it for 1 year! O_o

That was way too long. Anyway, so here I finally sit down to use adb, I wanna start maybe writing a couple of apps for the android just to play around with it, but in goofing around with the shell I wanted to cry. It's TERRIBLE. Very very basic functionality, hard to read, etc. I've come across a great link that helps get bash on the android:

http://forum.xda-developers.com/showthread.php?t=537827

That got things going. I've found that it works better, tab to complete is working, etc. It's an older version of bash which is OK in my book. I'm still working on the thing, trying to customize the bash_profile some. 

I also found this though:

http://groomws.info/index.php?title=AndroidNativeBinaries

It's got a more up to date bash (4.1) and some other sweet binaries such as grep (who can live without it?) among others. I'm kinda having a ball here. I also found out that the main point of that site was for something called GroomDroid - a webserver for android! I don't know yet what I want to do with it, but it sounds like it might serve some good purpose. Or at least be fun. There'd be all KINDS of possibilities if I were to combine it with a <a href="http://www.sparkfun.com/products/10748"> IOIO! </a> 

...but I just busted something in trying to update to 4.1 from the other version I was using... O_o. Let's see what I can do to fix it. I'm afraid I'll have to bring it back to life from a nandroid backup. I couldn't do r/w on the /system folder (the app I have for that needs shell) so I couldn't just do things like that. I wonder if I could just do a link to an always-writeable directory and run it that way? That'd be smart of me :) I'll try it once I restore. .... dang it doesn't work. Trying to figure that out...

So far no good, I found an article about the diff partitions tho: http://www.addictivetips.com/mobile/android-partitions-explained-boot-system-recovery-data-cache-misc/ That may help figure things out

Here's where I hope to get an answer from:
http://forum.xda-developers.com/showthread.php?t=1721053

It may have something to do with how I have the card formatted...
http://androidforums.com/android-lounge/331386-cannot-chown-while-root-how-come.html
http://ubuntuforums.org/showthread.php?t=1646849
