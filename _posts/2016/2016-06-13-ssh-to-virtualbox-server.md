---
id: 50
title: SSH to virtualbox server
date: 2016-06-13T21:55:50+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=50

categories:
  - Uncategorized
tags:
  - networking
  - ssh
  - virtualbox
---
So I have been trying to figure this out. I am supposed to be able to do some port forwarding, which isn&#8217;t hard, but it wasn&#8217;t working. Eventually I went with the option of setting up two network adapters, one set up on NAT (so the VM can access the www) and another as a host-only, so the host can access the guest on 192.168.x.x

I was having a problem though, it was refusing me. I turned off the VM and turned off the NAT adapter. Then I was able to connect via SSH using 192.168.x.x and then enabled the NAT adapter after having logged in via SSH and it worked.

Chances are I was probably doing something really retarded (still might be), but at least I&#8217;m in.