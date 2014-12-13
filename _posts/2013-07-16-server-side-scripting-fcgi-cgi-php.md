---
layout: post
title: !binary |-
  U2VydmVyLXNpZGUgc2NyaXB0aW5nIChGQ0dJLCBDR0ksIFBIUC4uLik=
created: 1373980640
---
I was confused the other day, didn't understand the differences between CGI, FCGI and why PHP scripts could run without CGI. Let me give a basic rundown. Had found a good slideshow too <a href="http://www.slideshare.net/aimeemaree/a-look-at-fastcgi-modphp-architecture">here</a> with some more info. A timeline that I liked can be found <a href="http://royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web/">here</a>

<h2> What IS cgi anyway? </h2>
CGI (common gateway interface) is a way for a web server (apache) to run a script. Web servers really were only set up initially to display static stuff (html). But people wanted to dynamically process some things and needed a way to do it. CGI is born. (Hoping to include a bit more info on it later)

<h2> and FCGI? </h2>
FCGI is the better implementation of CGI, supposedly runs better but some would disagree.

<h2> Why doesn't PHP use either CGI or FCGI? </h2>
It could. That's up to you, but the thing is - to run CGI means there's a lot of overhead involved because it's a big animal that handles not only PHP, but PERL, PYTHON, C, etc etc etc. So to make things more lightweight for a popular scripting language a couple of modules exist. mod_php for one, and another one called suPHP (mod_suphp), which is apparently what Bluehost uses. I guess it's more secure than mod_php

<h2> I don't see them listed in "httpd -l" though </h2>
Apparently, httpd -l doesn't list dynamically loaded modules, only modules that are compiled with Apache (per the man page: "Output a list of modules compiled into the server. This will not list dynamically loaded modules included using the LoadModule directive."). I would guess that suPHP is loaded dynamically on my server at bluehost, as well as mod_fcgid as they don't show up when running 'httpd -l'. However, I've got some conflicting messages on that, have yet to find out for sure. Also I understand that it has something to do with Apache's <a href="http://httpd.apache.org/docs/2.2/mod/mod_mime.html#addhandler">AddHandler directive</a>, part of mod_mime (which shows up in httpd -l). For instance I know fcgid is loaded dynamically, hence "AddHandler fcgid-script .fcgi" in .htaccess files when trying to run scripts using fcgi

Here's some other good info too about other ways to run PHP: http://www.binarytides.com/choose-between-modphp-suphp-cgi-fastcgi-suexec/
