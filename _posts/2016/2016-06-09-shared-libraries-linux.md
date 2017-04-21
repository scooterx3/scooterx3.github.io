---
id: 39
title: Shared libraries in linux
date: 2016-06-09T22:07:57+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=39

categories:
  - Uncategorized
tags:
  - libraries
---
Programs on a system need to use libraries of code. It makes sense to share those libraries because several programs might utilize the same library. That way it doesn&#8217;t require as much RAM and disk space to run 10 programs that it would if they didn&#8217;t share libraries.

~~~
ldd
~~~

The above command allows me to find out what libraries that a particular program depends on. Such as:

~~~
$ ldd /bin/ls
 linux-vdso.so.1 =&gt; (0x00007ffe290c4000)
 libselinux.so.1 =&gt; /lib/x86_64-linux-gnu/libselinux.so.1 (0x00007f19c3966000)
 libacl.so.1 =&gt; /lib/x86_64-linux-gnu/libacl.so.1 (0x00007f19c375d000)
 libc.so.6 =&gt; /lib/x86_64-linux-gnu/libc.so.6 (0x00007f19c3392000)
 libpcre.so.3 =&gt; /lib/x86_64-linux-gnu/libpcre.so.3 (0x00007f19c3125000)
 libdl.so.2 =&gt; /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f19c2f21000)
 /lib64/ld-linux-x86-64.so.2 (0x0000557b7392b000)
 libattr.so.1 =&gt; /lib/x86_64-linux-gnu/libattr.so.1 (0x00007f19c2d1b000)
 libpthread.so.0 =&gt; /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f19c2afd000)
~~~

Alakazam, you have a list of libraries in use by the &#8216;ls&#8217; command.

Some key items in /etc/:

  * ld.so.conf << tells system where to look for library files (points to ld.so.conf.d/)
  * ld.so.conf.d/ << a folder full of conf files specifying locations of various libraries in available packages
  * ld.so.cache << Makes it so the system doesn&#8217;t have to read the ld.so.conf file, then following the bread crumbs. The &#8216;ldconfig&#8217; command generates this cache file. It&#8217;s binary.

This environment variable allows you to expand the system&#8217;s reach to other libraries you may want to put in other places:

LD\_LIBRARY\_PATH

I tested on ubuntu and centos though and it&#8217;s empty by default, so it must be used only as a way to add something to what&#8217;s already in ld.so.cache