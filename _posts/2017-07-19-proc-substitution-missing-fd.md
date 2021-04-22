---
title: Process Substitution - Missing File Descriptors
tags:
 - bash
 - file descriptors
 - process substitution
layout: post
---

I work with many servers each day, and more often than not I wind up sourcing a script or two from one of my remote servers, thusly: 

	. <(curl -Ss https://mygitrepo.whatever/repo/file.sh)

Now and then the server complains by responding: 

	bash: /dev/fd/63: No such file or directory

I went googling and found that actually it's not a very uncommon thing to have happen. It turns out the symlink `/dev/fd > /proc/self/fd` was missing. The thing is, when you use process substitution: 

	command 1 <(command 2)

what Linux does is runs `command 2` and sticks the output in a file descriptor under `/dev/fd/`, which is then used as the input "file" to `command 1`.

I don't know who/what is responsible for creating that in the first place, but simply creating the symlink fixed it. I'll have to learn more about it so I can understand what went wrong in the first place. A reboot will destroy the symlink I manually created (it's in a virtual filesystem that gets created on each boot), so it's important to find out how to get the system to automtically do that.  

I got to wondering why it is that stdin, stdout and stderr were working. I know they're also just file descriptors, and I assumed they would've been under `/dev/fd/[0..2]` also, but it turns out they're symlinks as well (or at least on the systems I'm using they are - Fedora, CentOS): 

	/dev/stderr -> /proc/self/fd/2
	/dev/stdin -> /proc/self/fd/0
	/dev/stdout -> /proc/self/fd/1

