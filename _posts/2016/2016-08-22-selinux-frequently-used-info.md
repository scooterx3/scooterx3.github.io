---
id: 137
title: SELinux frequently used info
date: 2016-08-22T17:43:43+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=137

categories:
  - Uncategorized
---
## Disable/enable on the fly

Either turn it on:

~~~
sudo setenforce enforcing
~~~

or turn it off:

~~~
sudo setenforce permissive
~~~

These aren&#8217;t permanent changes; next reboot it&#8217;ll go back to whatever the config is set to. But this will let you on the fly turn on or off SELinux. I use it if I suspect SELinux to be blocking something.

## Change context

Sometimes one has to change context of a file or directory. Doing it recursively for a particular directory is as easy as:

~~~
$ sudo chcon -Rv --type=httpd_sys_content_t &lt;directory&gt;
~~~

Where httpd\_sys\_content_t is the &#8220;type&#8221; of context. Generally that&#8217;s all I ever use this for.