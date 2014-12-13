---
layout: post
title: !binary |-
  LmJhc2hyYyBhbmQgLnZpbXJj
created: 1352571607
---
I do a lot of work when logged into many different accounts on different servers via SSH. My terminal windows though just keep saying "terminal" and I typically find myself getting lost easily among all of those windows.

So I edited my bashrc and added the following:

 # If this is an xterm set the title to user@host:dir
  case "$TERM" in
  xterm*|rxvt*)
  PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
  ;;
  *)
  ;;
 esac

So that made my window title show up as "user@hostname: workingdirectory" - which is HANDY. I'm still deciphering what all of that is doing however. 

Also though I noticed in VIM that it didn't show up as my user. Still picking this apart too, but the basics are:

 let &titlestring = $USER . "[vim(" . expand("%:t") . ")]"
 if &term == "screen"
   set t_ts=^[k
   set t_fs=^[\
 endif
 if &term == "screen" || &term == "xterm"
   set title
 endif

So now my title shows user[vim(filename)]

