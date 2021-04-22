---
title: Sublime Text 3 builder for Python 3
tags: python
layout: post
---

I didn't know this but there's this thing in Sublime Text 3 referred to as a "builder" that basically lets you run some code against whatever file/project you're in. 

The reason I'm using this is because I hate having a separate terminal open to run a script I'm working on. Instead I can just use `ctrl+b` and it'll run the code and display the output in a window at the bottom of my Sublime window. 

Here's what I used: 

```
{
	"cmd": ["/usr/bin/python3", "-u", "$file"], 
}
```

I went to Tools > Build System > New Build System, pasted the above in and called it "python3.sublime-build". It resides under ~/.config/sublime-text-3/Packages/User/. Now when I hit `ctrl+b` it runs my Python and shows me the output! Sweet! 
