---
id: 220
title: Why my PS1 sucked and what I did about it.
date: 2016-12-10T19:09:18+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=220

categories:
  - Uncategorized
---
I always had problems with my PS1 variable. It would show up like this (in green):

~~~
username@boxname:[~/Documents]
$
~~~

The idea was to have something bright to easily see the prompts while scrolling back up, and drop down a new line so I could allow the directory path to get as long as needed without reducing the amount of space I had to type in. Though the PROBLEM I had with it was that it prevented me from properly editing a command retrieved from history by pushing the up arrow on the keyboard. The resulting command would get scrambled up and give wrong output.

Here&#8217;s the PS1 I was using:

~~~
\[\e]0;\u@\h: \w\a\]\e[32;1m\u@\h:[\w]\n$\e[0m
~~~

Apparently, in setting colors like so:

~~~
\e[32;1m
~~~

It threw bash off on the length of the prompt (bash thought the prompt was longer than it actually was). Supposedly the way to get bash to understand how long the prompt is is to wrap the color statements in some square brackets. I didn&#8217;t have any luck doing that with the raw statements but instead had to set variables as follows:

~~~
green=$(tput setaf 2); 
reset=$(tput sgr0); 
bold=$(tput bold); 
PS1="\[\e]0;\u@\h: \w\a\]\[$bold$green\]\u@\h:[\w]\n$\[$reset\] "; 
clear
~~~

Got that info [here](http://askubuntu.com/questions/251154/long-lines-overlap-in-bash-ps1-customized-prompt) and [here](http://askubuntu.com/questions/111840/ps1-problem-messing-up-cli).

Also that tput command is pretty interesting. For some good info on that one, check [here](http://wiki.bash-hackers.org/scripting/terminalcodes).