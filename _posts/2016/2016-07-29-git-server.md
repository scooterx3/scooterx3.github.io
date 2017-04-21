---
id: 125
title: Git server
date: 2016-07-29T20:25:33+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=125

categories:
  - Uncategorized
---
Had trouble figuring out how to clone from a private git server. As long as git is installed, you can create a repository, then pull from it using:

~~~
git clone ssh://user@host/~user/repo/
~~~

or you could also:

~~~
git clone ssh://user@host/home/user/repo/
~~~

But it just doesn&#8217;t do relative paths (except for the ~user/ part)