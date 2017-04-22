---
id: 234
title: And then it dawned on me
date: 2017-01-07T18:54:04+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=234
permalink: /?p=234
categories:
  - Uncategorized
tags:
  - bridge
  - kvm
  - networking
  - vm
---
Had to write this down. I&#8217;ve been trying to get up and going with KVM recently. I got a break from school and need KVM up on my home server so I can experiment with many other things. I read through a bunch of the libvirt documentation, specifically about virt-install, and then once I had a grasp I ran through some tutorials. Most of the tutorials I found out there and virt-install one-liners had me using a network option as follows:

<pre>--network bridge=virbr0</pre>

I eventually learned that that was  not what I wanted to use for a server VM. But the thing is, I was trying to re-follow a guide where I needed to create a bridge network device on the host and link my primary ethernet one to it, so that the VMs could reside on the same network as the host. I anticipated making some changes that I admittedly didn&#8217;t understand, and thought I might break the network connection. In preparation I created a user/pass for my brother, whose house is where the server resides. That was wise, because sure enough, I broke it. But the odd part is that no sooner did I break it than the thought finally blazed into my brain that I&#8217;d been using the wrong bridge the entire time! I had physically created this new bridge &#8216;br0&#8217; but constantly had been creating VMs and having them use this &#8216;virbr0&#8217; one instead. Croike. It took me a few days to actually be able to sit down with my brother over the phone so I could get him to copy my backed-up network script back into place and get me going. I just got that done and finally now I&#8217;m up and going since I&#8217;m using the proper network device as my bridge.

Life is funny. I&#8217;ll be using this for my VMs from now on:

<pre>--network bridge=br0</pre>