---
title: User and Group Management Cheat Sheet
tags: users
layout: post
---

> "I fight for the users!" -Tron

Just a basic syntax cheat-sheet, for things I'd most likely use these for. 

## useradd

* **-c**: add a comment (typically used for the user's full name)
* **-d**: specify home directory (but this doesn't necessarily create it)
* **-m**: create home diretory 
* **-r**: system account (for things like Apache where it's best to run under a user acct)

## usermod

* **-a**: append; adds user to groups (only use with -G option)
* **-c**: overwrite current comment
* **-d**: specify new home direcctory
* **-G**: a list of groups that the user is a member of (overwrites the list unless used with -a)
* **-L**: lock password (this won't block SSH with a key)
* **-m**: move home (move user's home to a new location)

## groupadd

* **-r**: system

## groupmod

* **-n**: new name for the group