---
id: 32
title: RAID vs LVM
date: 2016-06-08T21:30:35+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=32

categories:
  - Uncategorized
tags:
  - lvm
  - raid
---
### RAID

RAID (Redundant Array of Independent Disks) offers Performance and Reliability

Striped vs Mirrored &#8211; Striped has zero redundancy, but Mirrored is redundant.

Raid0 &#8211; striped. 4 drives in a raid0 at 20gb each provide 80gb total. High performance. You can write to all 4 drives at the same time (called striping). But it comes with a cost. Say that one HD goes down. Then the whole raid array fails because one file could be written across 4 drives, and if one drive goes down, the file is not usable.

Raid1 &#8211; mirrored / stacking. 4 drives still, but they work together. 2 drives mirror each other. 20g per, but only can use 40 gig total. But drive A and B share the same data. Drive C and D share the same data too. If Drive A bites the dust, drive B still has the data and one can swap Drive A out and we&#8217;re still good.

Raid5 &#8211; compromise between speed and reliability. parody drive. (4) 20gb drives, one of them acts like a &#8220;wildcard&#8221; which somehow steps in if one of the other drives bites the dust (so has to be replaced quickly). So 60gb is usable for striping across 3 drives but there&#8217;s a backup.

### LVM

LVM provides flexibility

4 drives:

  1. 10gb
  2. 50gb
  3. 300gb
  4. 40gb

total of 400gb. Uses striping. Allows for adding to an array at any time.

The advantage is when you throw some raid1 or raid5 arrays together in LVM so as to be able to be more flexible in adding space to a big array.

&nbsp;