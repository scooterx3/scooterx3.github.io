---
title: paste - merge lines of files
tags: paste
---

The purpose of the `paste` command is to merge lines of files together. So for instance between file1 and file2, the default behavior is to paste the lines of the files side by side with a tab between them. 

file `a`: 
~~~ plaintext
the quick brown fox
jumped over the dirty, soggy log
the cow jumped over the moon
the dish ran away with the spoon
that one guy put his wife in a pumpkin
some kid's head got all big because he pulled a plum out of a pie
~~~

file `b`:
~~~ plaintext
Lorem ipsum dolor sit amet
consectetur adipisicing elit
sed do eiusmod
there are probably other lines of
gobbledygook out there but I don't 
think I need any more. 
~~~

## default behavior

~~~ plaintext
$ paste a b
the quick brown fox	Lorem ipsum dolor sit amet
jumped over the dirty, soggy log	consectetur adipisicing elit
the cow jumped over the moon	sed do eiusmod
the dish ran away with the spoon	there are probably other lines of
that one guy put his wife in a pumpkin	gobbledygook out there but I don't 
some kid's head got all big because he pulled a plum out of a pie	think I need any more.
~~~

Notice that line 1 from file `a` is next to line 1 from file `b`? 

## serial

Using `-s` makes file `a` reside on first line and file `b` reside on second line (added `>` for clarity): 

~~~ plaintext
$ paste a b -s
> the quick brown fox	jumped over the dirty, soggy log	the cow jumped over the moon	the dish ran away with the spoon	that one guy put his wife in a pumpkin	some kid's head got all big because he pulled a plum out of a pie
> Lorem ipsum dolor sit amet	consectetur adipisicing elit	sed do eiusmod	there are probably other lines of	gobbledygook out there but I don't 	think I need any more. 
~~~

## delimiter

the `-d` flag allows one to specify something other than tabs to delimit the lines: 

~~~ plaintext
paste a b -d:
the quick brown fox:Lorem ipsum dolor sit amet
jumped over the dirty, soggy log:consectetur adipisicing elit
the cow jumped over the moon:sed do eiusmod
the dish ran away with the spoon:there are probably other lines of
that one guy put his wife in a pumpkin:gobbledygook out there but I don't 
some kid's head got all big because he pulled a plum out of a pie:think I need any more.
~~~

It doesn't allow for more than one character though it seems. I tried a fancy string but it only took the first character: 

~~~ plaintext
paste a b -d'<a b>'
the quick brown fox<Lorem ipsum dolor sit amet
jumped over the dirty, soggy log<consectetur adipisicing elit
the cow jumped over the moon<sed do eiusmod
the dish ran away with the spoon<there are probably other lines of
that one guy put his wife in a pumpkin<gobbledygook out there but I don't 
some kid's head got all big because he pulled a plum out of a pie<think I need any more.
~~~