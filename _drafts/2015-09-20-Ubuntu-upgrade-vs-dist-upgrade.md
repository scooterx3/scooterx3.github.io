---
title: Ubuntu - upgrade vs dist-upgrade
layout: post
---

I'm terribly confused on the whole topic of keeping software up to date in Ubuntu. [Here's a snippet I found](https://ubuntu-mate.community/t/apt-get-upgrade-vs-apt-get-dist-upgrade/632/2): 


> apt-get update updates the list of available packages and their versions, but it does not install or upgrade any packages.

> apt-get upgrade actually installs newer versions of the packages you have. After updating the lists, the package manager knows about available updates for the software you have installed. This is why you first want to update.

> apt-get dist-upgrade, in addition to performing the function of apt-get upgrade, also intelligently handles changing dependencies with new versions of packages and will attempt to upgrade the most important packages at the expense of less important ones if necessary. Thus, the apt-get dist-upgrade command may actually remove some packages in rare but necessary instances.

So from what I can tell, `apt-get upgrade` then just updates packages to whatever versions are in the list obtained by the `apt-get update` but doesn't remove anything. Yet `apt-get dist-upgrade` does change dependencies, per the above. But the confusing part for me is that I would expect `apt-get upgrade` to do the same. A package is a package, right? Whether it's a dependency or no? 

It seems like the big differences are *changing dependencies* and possibly *removing packages*. 

With regards to changing dependencies though, what does that mean? If when I `upgrade` and a dependency for "x package" changes as well as the version for "x package", wouldn't that dependency be installed and the new version of "x package" already just look for and use the new dependency? 






