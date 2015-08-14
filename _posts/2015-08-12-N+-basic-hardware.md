---
title: network+ notes (basic hardware)
layout: post
---
Notes from some vids I'm watching. 

Routers & Switches
===

**Switches:** Layer 2 on the OSI, deal with physical addresses (mac addresses)

 * forward info to specific ports based on mac address

**Routers:** Layer 3 on the OSI, deal with IP addresses (IP addresses, duh)

These days when you buy a Belkin "router" at walmart that has multiple ethernet ports on it, you've bought what industry seems to refer to as a "multi-layer switch". 

Speeds - a side note
---

Now I know specifically what they're talking about...

 * 10Mbps - Ethernet
 * 100Mbps - "Fast" ethernet
 * 1000Mbps - "Gigabit" ethernet


Firewalls and load balancers
===

**Firewall:** blocks traffic on ports

Some of these have "UTM" (unified threat management), which is used supposedly to block by category, etc. 


**Load Balancer:**just that - if you have several servers all serving the same content which are accessible at one IP, it makes sure that one of them doesn't get heavy load, while the rest of them get nothing. 

There are varying types of "algorithms" that can be used to balance the load, but that's what they do. 


Intrusion Detection & Prevention
===



**IDS**: Network Intrusion Detection

 * A separate piece of hardware OR virtual machine
 * Just watches traffic and lets us know if there's some malicious traffic heading into the server, doesn't stop it. 

**IPS**: Network Intrusion Protection

 * A separate piece of hardware OR virtual machine
 * all traffic goes through this BEFORE hitting the servers, and blocked if considered malicious

**HIDS**: Host based Intrusion Detection/Prevention

 * Software installed right to the web server handles this 
 * Alerts and blocks

Modems, Hubs and VPN Concentrators
===

**Analog Modem:** (Mod)ulator/(Dem)odulator

 * What translates the (in this example) phone (analog) signal into a digital signal
 * rarely used these days anymore, at least at home by an end-user

**Hub:** A dumb switch, a repeater

 * Layer 1 device
 * repeat anything it receives to whatever is connected to the other ports
 * Only one "person" can be sending info at a time. 
 * rarely used

**VPN Concentrator:**

 * A device attached to the firewall
 * Some firewalls (good ones) have VPN built in. 

Types of security used in VPN: 

 * IPSec
 * SSL/TLS


Packet Shaper, Content Filter, Access Point
===

Wide Area Network (WAN)

> Q: what's WAN vs VPS?

**Packet Shaper**: Proritizes traffic across a WAN/Network.  

 * QoS (Quality of Service)
 * Not enough bandwidth, O NOEZ
 * Could be integrated into a router, could be separate devices at either end
 * Usually found on the slowest link in a network? 

**Content Filter**: Controller to use with a firewall to block certain traffic. I think this comes from the "UTM (Unified Threat Management) discussed above". 

**Access Point**: Wifi. AP. 

 * Generally connect wire from switch to AP
 * Part of layer 3

 


