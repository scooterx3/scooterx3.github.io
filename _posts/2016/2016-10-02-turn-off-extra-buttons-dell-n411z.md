---
id: 191
title: turn off extra buttons Dell N411Z
date: 2016-10-02T19:02:53+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=191

categories:
  - Uncategorized
---
I&#8217;ve got a Dell N411Z laptop. Nothing flashy, and it got dropped on one corner so when I adjust the tilt of the screen, the broken hinge triggers a button, which randomly sends a signal for the letter &#8216;x&#8217; to whatever app is active at the time. Here are my notes to get it to quit doing that.

install &#8216;xbindkeys&#8217; (available in main repositories for both Ubuntu and Fedora). You have to find out what the &#8220;signal&#8221; looks like to xbindkeys, do so by running <span style="font-family: monospace;"><span style="font-size: 14.4px;">xbindkeys -k.</span></span> It tells you then to push a key. Just push the key at the top (the left two are the same signal, the right is a different one as I recall but it doesn&#8217;t work anymore). I got this out of it:

~~~
"(Scheme function)"
 m:0x40 + c:133
 Mod4 + Super_L
~~~

So then I paste that into ~/.xbindkeysrc, replacing the &#8220;(Scheme function)&#8221; part with just &#8220;&#8221;. Then to make it take effect, just run `xbindkeys -p` and you&#8217;re golden.