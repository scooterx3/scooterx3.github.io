---
title: Ethernet In A Nutshell
tags: ethernet networking 
---

Should this cover Ethernet 2 only? 	Maybe I could start out saying "There are a few variations of Ethernet, notably x y z and Ethernet 2..."

Packets vs Frames

Each time one goes down the OSI or Internet models, a payload of some kind is wrapped in some additional headers which becomes the payload to something else. The same is the case for Ethernet. An ethernet frame contains headers, payload and a frame check sequence. Once it's on the wire though it becomes an ethernet "packet" which adds headers of preamble and SFD, the "Start Frame Delimiter". Then the frame, then following the frame is an End Of Frame which I think is just a bunch of 0s, or maybe it's just "loss of signal" (which is ultimately the same). 

max length of packet is 1500 bytes. 
headers are 36 bytes long (I think, have to verify)
thus the Ethertype has to be of 1536 or higher to be interpreted as an EtherType thing. 

Apparently ARP and IPV4 can be specified in the EtherType section of an Ethernet frame. I don't know why we'd do that... 

EtherType is something newish for Ethernet II. 802.3 (old ethernet protocol) used only Size, so now we either determine size or EtherType depending on how high the value is of that field. 

"This field is needed because there are many other protocols that go directly over Ethernet: for example, IPv6, IPX, ARP, AppleTalk..." https://superuser.com/questions/423276/what-does-type-ip-0x0800-in-the-ethernet-ii-part-of-a-ping-packet-mean

EtherType is needed, but even 802.3 has some way to determine the protocol that a payload is for. This is so Ethernet knows which protocol to send to (considering any number of them could be used).  https://learningnetwork.cisco.com/thread/5196

"The Open Systems Interconnect (OSI) model uses a SAP to define the communication between layers (like Network, Transport, Session, and the other layers of the Seven-Layered Model), that is to identify which protocol should process an incoming message. Within a given layer, programs can exchange data by a mutually agreed upon protocol mechanism. A pair of programs that do not support a common protocol cannot communicate with each other. Thus for multiple protocols to coexist within a layer, it is necessary to determine which protocol is to be invoked to process a service data unit delivered by the lower layer." https://en.wikipedia.org/wiki/Subnetwork_Access_Protocol

