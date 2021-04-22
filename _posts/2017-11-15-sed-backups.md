---
title: Back up files when doing inline sed operations
tag: sed
layout: post
---

I was accustomed to using sed's `-i` option but never realized until now that it can be used to back up the original file before overwriting. 

One can append a suffix to the `-i` option thusly: 

```
sed -i.backup 's|foo|bar|g' file.txt
```

This results in the original `file.txt` being copied to `file.txt.backup`. 

Not only that, but asterisks can be placed in the suffix. Every asterisk that appears in the suffix will be replaced by the entire filename. That way you can dump your files into another directory (providing the directory exists already): 

```
sed -ibak/* 's|foo|bar|g' file.txt
```

This moved `file.txt` to `bak/file.txt`, then overwrote the original with the new data. Sweet. The wording in the manual was strange at first but now it makes sense. Here's what I was reading: 

> This option specifies that files are to be edited in-place. GNU sed does this by creating a temporary file and sending output to this file rather than to the standard output.1.
>
> This option implies -s.
>
> When the end of the file is reached, the temporary file is renamed to the output file’s original name. The extension, if supplied, is used to modify the name of the old file before renaming the temporary file, thereby making a backup copy2).
>
> This rule is followed: if the extension doesn’t contain a *, then it is appended to the end of the current filename as a suffix; if the extension does contain one or more * characters, then each asterisk is replaced with the current filename. This allows you to add a prefix to the backup file, instead of (or in addition to) a suffix, or even to place backup copies of the original files into another directory (provided the directory already exists).
>
> If no extension is supplied, the original file is overwritten without making a backup.