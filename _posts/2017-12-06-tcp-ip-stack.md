---
title: TCP/IP stack
tags: networking
layout: post
---


The TCP/IP stack is a networking model that describes what happens to data in transit from one application to another. 

## How does it differ from OSI? 

The TCP/IP stack is just another model, similar to OSI. At the end of the day, TCP/IP stack aims to describe the same thing that OSI does. It's just a different description. Like learning the same subject from two different people. 

## The layers: 

* Application
* Transport
* IP
* Link

### Application

This layer defines what data is to be sent and "encodes" it so that the receiving application can understand it. 

### Transport

Transport layer wraps the payload in a header specifying the port that the packet should go to on the receiving host

### Internet

This is where the packet is wrapped with a source and destination IP address

### Link

The link layer wraps the packet in a source and destination MAC address and does the whole ARP thing to send the packets to the correct ports on the machine so they travel towards their destination. 

