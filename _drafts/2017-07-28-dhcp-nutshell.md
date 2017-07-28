---
title: DHCP In A Nutshell
tags: dhcp networking
---

DHCP provides **automatic, dynamic IP address assignment to client machines on a given network**. It's great for configuration because it removes lots of potential human error from the equation, and prevents one from needing to manually reconfigure a portable machine (laptop) that hops from one network to another. 

## Notes
DHCP operates at the **application layer** in OSI / Internet model (it's just a client/server application)

Server listens on port 67 (UDP)

Client listens on port 68 (UDP)

DHCP configures critical network host parameters such as: 
 * IP address and subnet mask 
 * default gateway 
 * DNS name servers 

Other things can be assigned by DHCP too, including: 
 * Name servers
 * Time servers
 * Hostname
 * lots more ([full list here](https://www.iana.org/assignments/bootp-dhcp-parameters/bootp-dhcp-parameters.xhtml))

I heard at one point that every single transaction in the DHCP exchange was a *broadcast*. But my observation lately was that the server would *unicast* to the Layer 2 address of the client.

The addresses that the Server gives out are only *leased* for a time. Each server can be different, but generally I hear that 48 hours is "normal". 

At certain intervals the Client will send another DHCPRequest packet, basically asking to renew the lease. If it happens to not get a response, it'll try a few more times, eventually relinquishing the IP address and disconnecting itself from the network if it never hears back from the DHCP server. 

## DHCP Lease process

* DHCP client broadcasts a DHCPDiscover message to the local subnet (by sending to 255.255.255.255)

* DHCP server offers an address (and other info as configured) to client with a 'DHCPOffer' packet. 

  * Note that if no server offers anything, the client can: 
    * self-configure an IP for its interface (assuming this feature is enabled)
    * keep resending DHCPDiscover messages (about once a minute) until it gets a DHCPOffer message back from a server.

* The client communicates back to the server that it accepts the offer by sending a DHCPRequest message (or that it doesn't, in which case the process starts all over). 

* The server records the assignment and sends to the client a DHCPAck message, approving the lease. 

Once the client receives the DHCPAck, it configures TCP/IP settings with that info sent by the DHCP server, and then hops on the network. 

## DHCP Renewal Process

Windows and Linux differ, but generally the Client sends DHCPRequest (as a means of renewal) when 1/2 of the lease has expired. If it never hears back it will try again at 3/4 of the duration, 7/8 of the duration, and then after all that it will have to resort to releasing the IP and sending another DHCPDiscover message.
