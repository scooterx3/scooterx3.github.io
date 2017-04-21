---
id: 128
title: 'PHP&#8217;s DateTime hates handling variables directly'
date: 2016-08-11T14:27:50+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=128

categories:
  - Uncategorized
---
I&#8217;m working on an app and found that this keeps failing saying &#8220;DateTime __construct() Failed to parse time string (xxxxxxxx) at position x&#8221;

Code was as follows:

~~~
$epoch = 1447258140;
$dt = new DateTime($epoch); // This was the failing point
$timestamp = $dt-&gt;format('Y-m-d H:i:s');
~~~

But I learned here: http://stackoverflow.com/questions/17427503/php-datetime-construct-failed-to-parse-time-string-xxxxxxxx-at-position-x

That it&#8217;s best to just create the DateTime, then use one of its methods to set the time:

~~~
$epoch = 1447258140;
$dt = new DateTime();
$dt-&gt;setTimestamp($epoch); 
$timestamp = $dt-&gt;format('Y-m-d H:i:s');
~~~

That worked wonderfully!