---
id: 6
title: Discord Bot
date: 2016-05-25T05:09:08+00:00
author: riley
layout: post
guid: https://scooterx3.net/?p=6

categories:
  - Uncategorized
tags:
  - api
  - discord
  - gateway
---
I had a bunch of problems getting a discord bot going. Here&#8217;s what I did:

  1. Registered an app and set up a bot user.
  2. Sign into the gateway (only required once, but it won&#8217;t let your bot send messages otherwise). I ran this JS snippet in the console of Chrome: 
    ~~~
var ws = new WebSocket('wss://gateway.discord.gg');

mystring = JSON.stringify({
 "op": 2,
 "d": {
 "token": "&lt;bot token&gt;",
 "properties": {
 "$os": "linux",
 "$browser": "sometestingbrowser",
 "$device": "sometestingdevice",
 "$referrer": "",
 "$referring_domain": "",
 },
 "compress": true,
 "large_threshold": 250,
 } 
})

ws.send(mystring)
~~~

  3. POSTed to the API server: 
    ~~~
discord_body='this is my variabled message'
echo "{\"content\":\"$discord_body\"}" | curl -v -H "Authorization: MTgzOTY1MDU1NDQ2OTQxNjk4.CiNoWw.WnZ_PiKSWVg5Nrq4JlVud37j76Q" -H "User-Agent: myBotThing (https://scooterx3.net, v0.1)" -H "Content-Type: application/json" -X POST --data-binary "@-" https://discordapp.com/api/channels/175975476253163521/messages
~~~
    
    And that pretty much wraps it up. Not a hugely awesome bunch of documentation but it&#8217;ll trigger my brain if I need it in the future.</li> </ol> 
    
    &nbsp;