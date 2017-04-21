---
id: 189
title: /opt vs /usr/local
date: 2016-09-28T15:45:59+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=189

categories:
  - Uncategorized
---
I just realized that both are places that one might put software not &#8220;native&#8221; to a system. I found [this post](http://unix.stackexchange.com/questions/11544/what-is-the-difference-between-opt-and-usr-local) and here are the main points to get the gist:

> `/usr/local` is a place to install files built by the administrator, typically by using the `make` command. The idea is to avoid clashes with files that are part of the operating system&#8230;
> 
> On the other hand, `/opt` is a directory for installing unbundled packages, each one in its own subdirectory. They are already built whole packages provided by an independent third party software distributor.