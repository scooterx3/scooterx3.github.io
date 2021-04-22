---
id: 176
title: Process management
date: 2016-09-23T19:45:31+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=176

categories:
  - Uncategorized
---
I was recently asked how to show threads instead of PIDs using the &#8216;ps&#8217; command. I wanted to find out why that&#8217;s even desired in the first place. I don&#8217;t have experience dealing with such things. I did learn new things, but still don&#8217;t really know why one would care about listing the threads. Can one manipulate them? Wouldn&#8217;t it cause erratic behavior? Is the killing of individual threads of a process allowed from outside? Or would it kill the whole process? I don&#8217;t know!

## Threads are little pieces inside of processes

I think of processes to the overall computer as I do threads to the process. There are some differences. Here&#8217;s a little bit of an outline:

### Processes

  * Do not share address space
  * Execute independently of one another. Synchronization is handled by the kernel.
  * Context switching between processes is slow
  * interaction between processes handled via IPC &#8211; inter-process communication

### Threads

  * Do share address space (within the same process)
  * Thread synchronization is handled by the parent process
  * Context switching between threads is fast
  * Threads under the same process share memory, text, etc so can easily interact
  * threads don&#8217;t know which thread created them

Furthermore:

  * Threads in the same process share: 
      * Process instructions
      * Most data
      * open files (descriptors)
      * signals and signal handlers
      * current working directory
      * User and group id
  * Each thread has a unique: 
      * Thread ID
      * set of registers, stack pointer
      * stack for local variables, return addresses
      * signal mask
      * priority
      * Return value: <tt>errno</tt>

Ok, so that was honestly just kindof a dump of info. What I&#8217;ve learned though is that there are ways to display the threads that pertain to a particular process. The first time I saw it and realized what it was, I was using htop and noticed my starbound_server process had what I thought were several instances of the same process running under it:

<img class="aligncenter" src="http://69.89.26.186/screenshots/20160923-185356-8607.png" width="759" height="173" />What I didn&#8217;t realize was that those green lines are the THREADS  under pid2499. What I don&#8217;t understand yet is why they appear to have their own PIDs. Because in `ps H 2499` I get:

~~~
[riley@whitey ~]$ ps H 2499 
 PID TTY STAT TIME COMMAND
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:02 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
 2499 pts/1 Sl+ 0:00 ./starbound_server
~~~

Where it&#8217;s apparent that they are displaying as all using the same PID, which I assume is supposed to make it so it&#8217;s obvious that they&#8217;re all threads of the same process.

Anyway, the original question is now answered. `ps H` is the appropriate command to show the threads of a process.

Something else I&#8217;ve learned is that there&#8217;s apparently a max number of processes. It&#8217;s found in \`/proc/sys/kernel/pid_max\`, or at least on Ubuntu and CentOS.

~~~

~~~