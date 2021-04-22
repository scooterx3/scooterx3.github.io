---
title: tr - translate or delete characters
tags: tr bash
layout: post
---

## purpose

the `tr` command is for "translating" (replacing or deleting) **characters** in a string. Accepts input from stdin, and puts output on stdout. I am bold about **characters** because it's not got a way to specify that you want to replace one string with another string (use `sed` for that).

## examples


### single character replacement
The basic usage on `tr` is to just replace one character with another. It's case-sensitive: 

~~~ bash
echo "aAbBcCdD1234" | tr 1 R
aAbBcCdDR234 #only the '1' was replaced with 'R'
~~~


### character set replacement

One can specify a set of characters to be replaced by a set of others: 

~~~ bash
echo "Johnny Apple Seed" | tr abcde ZYXWV
Johnny ApplV SVVW 
~~~

Something interesting to also note is what happens if the size of each set of characters differ: 

~~~ bash
echo "abcd1234" | tr 12 abcd #[[ L1 < L2 ]]: L2's extra chars take no effect
abcdab34
 
echo "abcd1234" | tr 1234 ab #[[ L1 > L2 ]]: L1's extra chars are replaced by last char in L2
abcdabbb
~~~

You can eliminate the weird side effect in the 2nd example above by "truncating" set1 (`tr -t`): 

~~~ bash
echo "abcd1234" | tr -t 1234 ab
abcdab34 # notice the '3' and '4' are still there. 
~~~


### delete characters

~~~ bash
echo "aAbBcCdD1234" | tr -d aC3
AbBcdD124
~~~

I keep seeing this specifically pop up to "translate" microsoft newline/carriage returns ('\r\n') and turn them into regular *nix newlines ('\n'): 

~~~ bash
file dosplaintext.txt 
#dosplaintext.txt: ASCII text, with CRLF line terminators

tr -d '\r' < dosplaintext.txt > plaintext.txt

file plaintext.txt 
#plaintext.txt: ASCII text
~~~


### complement

using the -c makes it so that the complement (all characters OTHER than the ones specified) gets translated. Here's a normal one followed by an inverted one: 

~~~ bash
echo "abcd1234" | tr 12 ab 
abcdab34

echo "abcd1234" | tr -c 12 ab 
bbbb12bbb
~~~

### compress

using -s makes it so that it "compresses" sequences of the same character (as well as translate, if a second set is given):

~~~ bash
echo "aabbccdd11223344" | tr -s 1
aabbccdd1223344 # notice only a single '1' is left behind

echo "aabbccdd11223344" | tr -s 1 a
abbccdda223344 # that same '1' got left behind, then translated to an 'a'. 
~~~

### interpreted sequences

Characters are taken literally; a=a, 1=1, b=b, etc. But some strings passed in sets are interpreted. There are several. Refer to the man for the full list, but there are things like `[:space:]` to represent white space, or `[:upper:]` to represent all upper case chars, etc. 

