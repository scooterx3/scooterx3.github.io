---
id: 214
title: Various capture group methods
date: 2016-12-09T17:23:13+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=214

categories:
  - Uncategorized
---
Just wanted to write one or two of these, maybe more as time goes on:

egrep:

~~~
egrep -o "(['\"])root\1"
~~~

This one I wanted to get either a &#8216; or a &#8221; before the word &#8220;root&#8221; and then find the closing one, whichever it was. The key here is that with egrep you have to surround the statement in quotes, the opening/closing parentheses don&#8217;t need escaping, and use a backslash followed by a number to denote the group

&nbsp;

sed:

~~~
sed 's|\(['\''\"]\)root\1|great|g' sometest.txt
~~~

This one actually shows two interesting things about sed. One is quotes. Notice I had to close the first quotation, then escape a single quote, then reopen quotation. Sed is wacky.

But the point of this one is that I can use capture groups. reference by using \1. The opening/closing parentheses need to be escaped. The captured group can be referenced either in the part being replaced or the part doing the replacing.