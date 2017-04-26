---
title: cut - remove sections from each line of files
tags: cut
---

## purpose

This prints to stdout selected parts of lines from either files or stdin, and spits them out on stdout. It can select byte ranges, character ranges and fields based on delimiters. 

## bytes

I'm still working out what actual use cases are for this, but here's a basic example using the `-b` flag: 

~~~ bash
$ echo 'El Niño' | cut -b 1
E #since 'E' is 1 byte long, and I wanted the first byte of the string, it returned 'E'
~~~

I can do a range: 

~~~ bash 
echo 'El Niño' | cut -b 1-4
El N
~~~

I can specify exact byte positions: 

~~~ bash
echo 'El Niño' | cut -b 1,4
EN
~~~

## characters

An interesting thing is that the 'ñ' takes up two bytes. I wouldn't be able to use `-b` to get it unless I specified the appropriate byte range. 

I could select by character by using `-c`: 

~~~ bash
echo 'El Niño' | cut -c 6
ñ #ñ is the 6th character
~~~

The same ranges, and specific character positions apply to characters as they did to bytes. 

## fields

`-f` is used to specify fields. Seems to require the use of `-d` as well to specify the delimiter: 

~~~ bash
echo "the quick, brown fox" | cut -f 2 -d,
 brown fox

echo "the quick, brown fox" | cut -f 2 -d,
 brown fox

echo "the quick, brown fox" | cut -f 2,4 -d' '
quick, fox
~~~

## output delimiter

Using `--output-delimiter`, you can specify a different delimiter besides the default space (`' '`). 

~~~ bash
echo "the quick, brown fox" | cut -f 1,3 -d' ' --output-delimiter :
the:brown
~~~

## complement

Get the complement (opposite) of what was specified by using `--complement`

~~~ bash
echo "the quick, brown fox" | cut -f 2 -d' ' --complement
the brown fox
~~~
