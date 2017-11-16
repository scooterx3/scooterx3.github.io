---
title: Bash exit code range
tag: bash
---

I just learned that bash's exit codes only go as high as 255. If you go to 256, it loops back around to 0 again. Playing with sed here (the number following the `q` command tells it to return that particular exit code): 

```
sed '/Steve/q255' file.txt; echo $?
```

If 'Steve' is found in file.txt, return with error code 255. Steve was in the file, so it returned 255 as expected. 

Had I done either of these: 

```
sed '/Steve/q257' file.txt; echo $?
sed '/Steve/q264' file.txt; echo $?
```

It would've returned 1 and 8, respectively. Kinda' interesting. 