---
id: 216
title: Get rid of prefix/suffix bash
date: 2016-12-09T17:08:04+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=216

categories:
  - Uncategorized
---
Sometimes a dude just needs to get rid of a prefix or a suffix:

~~~
string=some_database-file.sql
suffix=.sql
stuff=${string%$suffix}
echo $stuff
~~~

get rid of prefix using &#8216;#&#8217;: `${string#$prefix}`
  
get rid of suffix using &#8216;%&#8217;: `${string%$prefix}`