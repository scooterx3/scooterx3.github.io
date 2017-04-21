---
id: 61
title: Escaping characters in echo
date: 2016-06-14T17:51:13+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=61

clean-journallayout-option:
  - default
clean-journalheader-image:
  - default
clean-journalfeatured-image:
  - default
categories:
  - Uncategorized
tags:
  - bash
  - echo
  - escaping
---
I knew of this option:

~~~
echo -e "\042asdf\042" # this prints ("asdf")
~~~

but never realized that one could also:

~~~
echo $'\042asdf\042' # this also prints ("asdf")
~~~

I don&#8217;t even know what to call that&#8230;