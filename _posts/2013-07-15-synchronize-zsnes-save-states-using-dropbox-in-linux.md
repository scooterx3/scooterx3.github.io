---
layout: post
title: !binary |-
  U3luY2hyb25pemUgWnNuZXMgc2F2ZSBzdGF0ZXMgdXNpbmcgRHJvcGJveCBp
  biBMaW51eA==
created: 1373944109
---
I'd been looking for a way to do this, all over google and nothing really had come up. Couldn't figure out how to do it. It's actually super simple. What I WAS doing was dropping the files from ~/.zsnes/ into a folder in ~/Dropbox/ and then making a symlink from ~/.zsnes to ~/Dropbox/zsnes/ (or whatever the folder is). For some reason that wasn't taking. It wasn't pulling the save state info. I'd seen awhile back in the gui config screen that it asked where the directory was that you planned on dumping the saves in. That thing only throws down upper case letters, so doesn't work on a Linux system. I did find though in my ~/.zsnes folder a file called "zsnesl.cfg" and a line for "SRAMPath=". If you just put in quotes after the = sign the full path where you want it to store and check for saved states, it'll do just that. Set it to your ~/Dropbox/zsnes/ directory and away you go. 
