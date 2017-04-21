---
id: 182
title: 'What&#8217;s CPU steal?'
date: 2016-09-24T14:13:15+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=182

categories:
  - Uncategorized
---
I heard about CPU steal recently. Had no idea what it was, so went looking. I&#8217;ll write here what I find.

Hypervisors &#8211; those are the softwares that &#8220;lie&#8221; to a guest OS in telling it what kinds of resources it has available (keyboard, mouse, ram, cpu, disk space, etc)

Class 1 hypervisor &#8211; a virtualization host that runs on the bare metal. It&#8217;s own OS, per se. Lightweight.
  
Class 2 hypervisor &#8211; a piece of software that runs in an OS, such as vmware or virtualbox

So anyway, the hypervisor tells a virtual guest that it&#8217;s got such-and-such CPU in it, so the kernel says &#8220;cool man, thanks&#8221; and starts using it. The guest has no idea that there&#8217;s actually another (or multiple) other guests on the same machine all using the same CPU. The hypervisor has to balance things out between guests, and while one guest is trying to use 100% CPU, another might be trying to use CPU as well. Combined, they can&#8217;t use more than 100% of the CPU though, naturally. The guest kernels can only report that there is some time that it&#8217;s unable to use the processor. In TOP we&#8217;ll see a metric called &#8216;st%&#8217; and that&#8217;s the &#8220;steal&#8221; percentage. That&#8217;s the fraction of time that the guest can&#8217;t use the CPU. The kernel has no idea why, but of course it&#8217;s because too many VMs are &#8220;fighting&#8221; for the same CPU time, of which there isn&#8217;t enough to meet everyone&#8217;s demands.

Here&#8217;s a good case study I found that helped me understand it: <http://www.stackdriver.com/understanding-cpu-steal-experiment/>