---
id: 71
title: BASH one-line if
date: 2016-06-16T21:30:00+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=71

categories:
  - Uncategorized
tags:
  - bash
  - conditional
---
I recently learned about this:

~~~
(( 1 )) && echo "true" || echo "false"
~~~

Which is a great way to do an if statement on a single line, if you ask me. I could just do _if [[ cond ]]; do something else; another thing; fi_ but I think this one is pretty slick.

~~~
[[ cond ]] && &lt;what happens if true&gt; || &lt;what happens if false&gt;
~~~