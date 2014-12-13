---
layout: post
title: !binary |-
  SW5zdGFsbCBTUUxpdGUgb24gYSBzaGFyZWQgaG9zdGluZyBwbGF0Zm9ybQ==
created: 1365774060
---
For some reason I've been getting this question lately. I am not entirely sure why anyone would want SQLite on a big server that already has mySQL on it, especially for a website. But I was playing around with it the other day and wanted to try installing it to my shared hosting account. 


I start by making a directory for it. My case: /home/user/bin/sqlite3

Then cd to that directory and download: 
<pre style=white-space:pre-wrap;>
[~/]$ cd ~/bin/sqlite3
[~/bin/sqlite3]$ wget http://www.sqlite.org/2013/sqlite-autoconf-3071601.tar.gz
.
.
.
.
2013-04-12 06:14:02 (2.74 MB/s) - “sqlite-autoconf-3071601.tar.gz” saved [1854392/1854392]
</pre>

Untar: 

<pre style=white-space:pre-wrap;>
[~/bin/sqlite3]$ tar xzvf sqlite-autoconf-3071601.tar.gz
</pre>

Then head into the new directory and run the configure, make and make install:
<pre style=white-space:pre-wrap;>
[~/bin/sqlite3]$ ls
./  ../  sqlite-autoconf-3071601/  sqlite-autoconf-3071601.tar.gz
.
.
.
[~/bin/sqlite3]$ cd sqlite-autoconf-3071601
[~/bin/sqlite3/sqlite-autoconf-3071601]$ ./configure --codefix=/home2/rloaderb/bin/sqlite3/
.
.
.
[~/bin/sqlite3/sqlite-autoconf-3071601]$ make
.
.
.
[~/bin/sqlite3/sqlite-autoconf-3071601]$ make install
.
.
.
</pre>

Then you'll get something new in the ~/bin/sqlite3 directory: 

<pre style=white-space:pre-wrap;>
[~/bin/sqlite3]$ ls
./  ../  bin/  include/  lib/  share/  sqlite-autoconf-3071601/  sqlite-autoconf-3071601.tar.gz
rloaderb@box792:[~/bin/sqlite3]$ cd bin/
rloaderb@box792:[~/bin/sqlite3/bin]$ ls
./  ../  sqlite3*
</pre>

Great, it's there. Now you can just run it! 

<pre style=white-space:pre-wrap;>
rloaderb@box792:[~/bin/sqlite3/bin]$ ./sqlite3 

SQLite version 3.7.16.1 2013-03-29 13:44:34
Enter ".help" for instructions
Enter SQL statements terminated with a ";"
sqlite>
</pre>

If you've not already done this, you can export the PATH variable so that whatever is in ~/bin/ is executable from whichever directory you may happen to be in. 

<pre style=white-space:pre-wrap;>
PATH=$PATH:/home/user/bin
export PATH
</pre>
