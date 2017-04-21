---
id: 142
title: 'Owncloud 9&#8217;s Documents app'
date: 2016-08-22T20:20:36+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=142

categories:
  - Uncategorized
---
I had heard at some point of an app that would allow one to edit .odt files in the browser, and apparently also .doc and .docx files (microsoft). I had to just download and unpack the app to the right location in my ownCloud instance, then install libreoffice (I prefer libre over open for some reason). One thing I didn&#8217;t know though was that I needed to install the &#8220;libreoffice-headless&#8221; package so it wouldn&#8217;t try to use the x server (nonexistent) on the machine. It was trying to, but failed a bunch naturally.