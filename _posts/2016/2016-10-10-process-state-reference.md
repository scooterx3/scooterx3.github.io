---
id: 198
title: Process state reference
date: 2016-10-10T15:23:03+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=198

categories:
  - Uncategorized
tags:
  - processes
---
Processes states that ps indicate are:

    D Uninterruptible sleep (usually IO)
    R Running or runnable (on run queue)
    S Interruptible sleep (waiting for an event to complete)
    T Stopped, either by a job control signal or because it is being traced.
    W paging (not valid since the 2.6.xx kernel)
    X dead (should never be seen)
    Z Defunct ("zombie") process, terminated but not reaped by its parent.
    

and the additional characters are:

    < high-priority (not nice to other users)
    N low-priority (nice to other users)
    L has pages locked into memory (for real-time and custom IO)
    s is a session leader
    l is multi-threaded (using CLONE_THREAD, like NPTL pthreads do)
    + is in the foreground process group 
    

Source: http://unix.stackexchange.com/questions/18474/what-does-this-process-stat-indicates