---
layout: post
title: Replace multiple strings with a single sed operation
---

Pretty easy actually, just use a semicolon (;) as follows: 

```
sed -i 's|aaaaa|bbbbb|g;s|ccccc|ddddd|g' file.txt
```
