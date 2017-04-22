---
id: 250
title: symlinks and hardlinks
date: 2017-03-25T20:26:02+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=250
permalink: /?p=250
categories:
  - Uncategorized
tags:
  - filesystems
  - linking
---
&nbsp;

  * ls creates symlinks and hardlinks (use the -s flag for a symlink)
  * symlinks are identified by the &#8216;l&#8217; in the attributes of a file (random example from my current machine):

<pre>lrwxrwxrwx.  1 riley riley         33 Oct  3 08:29 .xbindkeysrc -&gt; /home/riley/dotfiles/.xbindkeysrc
 drwxrwxr-x.  4 riley riley       4096 Mar 24 08:42 xdrive
 -rw-rw-r--.  1 riley riley      26918 Oct  9 08:31 .xfce4-session.verbose-log
</pre>

Notice the first one has an &#8216;l&#8217; in it, that means it&#8217;s a symlink (but also the stuff on the far right makes it obvious). The other is a &#8216;d&#8217; which means it&#8217;s a directory. The last one is just a regular file.

  * hard links aren&#8217;t easily identified. Thing is, EVERY file you look at (file, not necessarily directory) is a hard link. Hard links are just entries in the directory listing table thingy (not sure that&#8217;s the right word for it) that map a filename to an inode. The only giveaway is this:

<pre>ls -ial
 total 12
 13897726 drwxrwxr-x.  2 riley riley 4096 Mar 25 14:15 .
 25427969 drwx------. 80 riley riley 4096 Mar 25 13:41 ..
 13897727 -rw-rw-r--.  1 riley riley    0 Mar 25 13:41 a
 13897728 -rw-rw-r--.  1 riley riley    0 Mar 25 13:41 b
 13897729 -rw-rw-r--.  2 riley riley    0 Mar 25 13:41 c
 13897729 -rw-rw-r--.  2 riley riley    0 Mar 25 13:41 d
</pre>

adding &#8216;-i&#8217; to the &#8216;ls&#8217; command displays the inode number for each entry in the directory. In this case, a and b have their own specific inode numbers. Note that c and d share the same inode number. d was created using:

<pre>ln c d
</pre>

One last note is that syminks CAN cross filesystem boundaries, but hardlinks canNOT.