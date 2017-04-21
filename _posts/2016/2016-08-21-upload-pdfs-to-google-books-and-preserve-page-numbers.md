---
id: 133
title: Upload PDFs to Google Books and preserve page numbers
date: 2016-08-21T16:15:01+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=133

categories:
  - Uncategorized
tags:
  - ebook
  - google books
  - pdf
---
When uploading to Google Docs, the PDF doesn&#8217;t make it through without getting beat up. My page numbers are missing, the table of contents is gone, etc. I heard that if one converts the PDF to ePub, the data is preserved. I know of a program called Calibre that allows one to convert PDF to ePub. [This post suggested some commands](http://askubuntu.com/questions/169618/is-there-a-way-to-convert-a-pdf-file-to-epub-format-without-using-calibre):

&nbsp;

    ebook-convert file.pdf file.epub

If the output looks a little wrong &#8211; try this

    ebook-convert file.pdf file.epub --enable-heuristics
    

It will try a &#8220;smart&#8221; way to convert. Not perfect, but can work well in most conversions.

* * *

So I tried this, and it honestly didn&#8217;t work out so well. Sure, I had an epub formatted book but it didn&#8217;t at all match the layout of the original document and appeared all jumbled.