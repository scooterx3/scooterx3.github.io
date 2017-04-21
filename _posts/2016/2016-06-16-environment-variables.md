---
id: 76
title: Environment variables
date: 2016-06-16T21:53:33+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=76

categories:
  - Uncategorized
tags:
  - bash
---
The only thing I really need to know is that this command displays all of them from the current session:

~~~
env<del></del>
~~~

But I guess I&#8217;ll write down some other stuff too.

The &#8216;**_export_**&#8216; command makes a variable available to any children of the current session. That&#8217;s the only real reason that it should be used. Otherwise you can prepend to the path for instance using:

~~~
PATH=/home/myself/bin/:$PATH
~~~

You can unset variables using the &#8216;_**unset**_&#8216; command