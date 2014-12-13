---
layout: post
title: !binary |-
  T3B0aW9ucyBJbmRleGVz
created: 1363697379
---
This is a basic thing that can be done as a security measure. 

Basically, .htaccess can control whether directories on an Apache server can be browsed or not. This is important, because if you have them set to allow for  browsing, anyone could come along and just surf around in your files and see what you've got - finding an exploit. I don't like people poking around in my files at their leisure. 

In the .htaccess file for a certain directory that you don't want to be surfed (~/public_html/.htaccess if you want the entire account to not be browseable), you could just either edit any existing "Options Indexes" line or add a new one: 

Options -Indexes

The minus (-) is what differentiates. without the minus, you're explicitly saying "yes, let people surf the directories". With the minus, you're saying "No, nobody should be able to surf the directories". 

This however to my knowledge is only needed where you don't already have Apache loading up another file, such as index.html or index.php. 
