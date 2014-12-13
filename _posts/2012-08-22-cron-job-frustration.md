---
layout: post
title: !binary |-
  Q3JvbiBKb2IgRnJ1c3RyYXRpb24=
created: 1345677871
---
What a rookie mistake!

I'd been working on a very super simple script that I wanted to run in a cron that would analyze the memory usage of a certain process. Not hard. The script itself worked wonderfully, but I was trying to run 'crontab -e' to edit the crontab. Mine opens in VIM. I just would add the line and then save. It wouldn't work. Kept trying to add different styles of that, still no. 20+ minutes I sat there and banged my head on the table. Then I quit VIM because I was frustrated, then the 'watch' function that I was running updated as I'd expected!!! What the heck? 

AS IT TURNS OUT (and I already knew this), YOU MUST EXIT BEFORE THE CHANGES ARE COMMITTED TO THE CRONTAB FILE!!!

*sigh*. So my cron works now. :)

