---
title: OSI Model
layout: post
---

The Main Model
---

 1. **P**hysical
 2. **D**ata Link
 3. **N**etwork
 5. **T**ransport
 5. **S**ession
 6. **P**resentation
 7. **A**pplication

Acronym: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

![OSI Model image]({{ site.url }}/assets/osi-model.png)

Today's Model
---

The OSI can be boiled down to the following in today's TCP/IP suite (It isn't used exactly as outlined above under 'The Main Model': 

 1. **Physical**

 	Cables, etc. Where individual bits shine. 

 2. **Data Link**

 	Switches get involved at this layer, sending to the right MAC address. 

 3. **Network**

 	Routers are involved here, sending the data to the right IP address. 
 
 4. **Transport**

 	Where IP addresses are added as it's determined where a packet (segment) is going. Also where data is split apart into segments or put together again. 
 
 5. **Application**

 	This is just where all of the raw data is handled. 

Terminology used for the data as it's modified at each layer: 

 1. Bits

 2. Frames

 3. Packets

 4. Segments

 5. Data/Payload

"Encapsulation" is what they call it when data is handed down in the OSI model to the next layer. It's what happens when headers or other info is added to the data. 
