---
title: "Send cyber junk to your Pi-hole: Protect your home network"
date: 2024-10-22T00:06:28.000Z
author: "Jon George"
featuredImage: "/images/writing/send-cyber-junk-to-your-pi-hole-2/photo-1708113457279-af6af999c415.jpeg"
featuredImageAlt: "Send cyber junk to your Pi-hole: Protect your home network"
description: "Block ads, telemetry, and tracking at the DNS level. Simple to set up, no maintenance, and it actually works."
category: "Tooling"
---

In today's world of digital advertisements, telemetry, and data collection, Pi-hole provides a layer of protection to your home network. It's simple to set up, consumes little resources, and requires no maintenance.

### What is Pi-hole?
Pi-hole is an [open source software application](https://github.com/pi-hole/pi-hole/tree/master) that runs on a computer in your home network. It filters DNS queries based on a configured list of domains known for ads, malware, trackers, and more.

### Use cases

- Improve your home network security and privacy by blocking domains known for malware, phishing, malvertising, tracking, and telemetry.
- Protect your children from consuming derogatory content by blocking domains known to promote violence, extremism, and sexually explicit material.
- Learn which of your devices are talking to the internet, even when they are powered off. Take action to eliminate devices that automatically reach out to sketchy domains or devices that send unnecessary data.
- Improve productivity and privacy by blocking social media sites by device or during the workday.

### How it works
To understand how Pi-hole works, you must first have a basic understanding of DNS.

Websites are files that live on a computer called a web server. A website can be accessed by other computers on the internet that request the website files. But how does your computer know where to send that request? The web server has an internet protocol (IP) address.

IP addresses are typically a grouping of numbers which may be difficult to remember. So a team of smart people created an address book where each IP address is associated with a name - a domain name. For simplicity, this address book is DNS.

Instead of having to remember an IP address, we use a domain name (i.e. example.com) when sending a request to a web server. Our computers use DNS to look up the web server's IP address by domain name. The IP address that it finds is where it sends the request.

The official list of domains and IP addresses do not live on our computers. This means that our computers must send the domain name to another computer on the internet that has the official list of domain names and IP addresses. The computer that has the official list is called an authoritative DNS server. Authoritative DNS servers send us the IP address associated with a domain name.

Pi-hole is a forwarding DNS server. This means, when your computer tries to look for an IP address by domain name, Pi-hole checks the domain name before sending it to an authoritative DNS server. If the domain is on Pi-hole's list of blocked domains, it does not send it to the authoritative DNS server. Instead, Pi-hole returns an empty response with an IP address of 0.0.0.0.

Where does Pi-hole get the list of domains to block? It comes with a list of common sites using [Steven Black's list of known advertisement domains](https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts) which currently includes 117,700 domains. You can also find additional Adlists online or create your own.

[mullvad/dns-blocklists](https://github.com/mullvad/dns-blocklists?tab=readme-ov-file#lists) — A collection of domains you may consider adding to your Pi-hole Adlist

### Limitations
DNS settings on a device control what DNS server the device uses. This means that it's possible for a device to be configured to use a DNS server other than your Pi-hole, effectively circumventing your block lists.

DNS can be bypassed altogether by using an IP address directly. If you or your computer already knows the IP address of another computer to connect with, the domain name look-up process does not happen.

Domains that you want to block must be known. Domains that are not known to disseminate ads, malware etc. can't be added to your Pi-hole unless you can predict new domains that you'll want to block.

For this reason Pi-hole or other network level DNS servers should never be the only security or privacy measure in place.

### Conclusion
By blocking malicious websites, reducing your exposure to online threats, and stopping invasive ads and trackers, Pi-hole helps you build a barrier between you and the growing number of digital threats. But it’s not just about security - it’s about feeling confident that when you, your family, or even your smart devices connect to the web, you’re doing so safely.
