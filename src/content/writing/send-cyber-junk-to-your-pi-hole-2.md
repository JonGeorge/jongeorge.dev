---
title: "Send cyber junk to your Pi-hole: Protect your home network"
date: 2024-10-22T00:06:28.000Z
updated: 2026-02-12T00:02:12.000Z
author: Jon George
featuredImage: /images/writing/send-cyber-junk-to-your-pi-hole-2/photo-1708113457279-af6af999c415.jpeg
featuredImageAlt: "Send cyber junk to your Pi-hole: Protect your home network"
description: How an embarrassing movie night led me to discover what my home network was leaking, and how Pi-hole fixed it.
category: Security
---

A family member came over for movie night. Before the movie started, we sat through the usual barrage of ads. Except these weren't the usual ads. These were clearly, specifically, _personally_ targeted at my guest, the kind of ads that made the room go quiet for a beat too long.

It was awkward. And afterward, I couldn't stop thinking about how it happened.

### My Theory
My family member had connected his phone to my home wifi earlier that evening. That's normal everyone does it. His phone, now on my network, started doing what phones do: talking to ad servers, syncing data, pinging analytics endpoints. His advertising profile, built from his browsing habits, app usage, and who knows what else, became associated with my home IP address. When the streaming service served ads, it pulled from that profile. On my TV. In front of everyone.

I wanted to see if I was right. And I wanted to make sure it never happened again.

### What I found
I started monitoring DNS requests on my home network, and what I found was jarring. Devices I thought were idle were constantly reaching out to ad servers, analytics endpoints, and domains I'd never heard of. My wife's computers were making requests to dozens of tracking domains even while they were in sleep mode.

Every one of those requests is a data point. Enough data points and ad networks can build a profile tied to your IP address, your devices, and anyone who connects to your network. That's how my guest's ad profile bled into my living room.

### Enter Pi-hole
[Pi-hole](https://github.com/pi-hole/pi-hole/tree/master) is an open source DNS server that runs on a computer in your home network. Your devices use DNS to translate domain names into IP addresses. Pi-hole intercepts that step; it filters DNS queries based on a configured list of domains known for ads, malware, trackers, and more. When a device tries to reach a domain, Pi-hole checks it against a blocklist before the request ever leaves your network. If the domain is on the list, Pi-hole returns nothing. The request dies silently.

### What it actually looks like
After running Pi-hole for a week, my dashboard showed that roughly 52% of all DNS queries on my network were being blocked. Most of those were ad servers and telemetry endpoints. A few were domains I'd never seen before, quietly collecting data from devices I forgot were even connected.

My wife's computers got noticeably quieter. Ads on free streaming services didn't disappear entirely since some are baked into the video stream itself. But the targeted ones dropped off. The creepy "how did they know that" factor went away.

### What Pi-hole won't do
Pi-hole isn't a silver bullet, and I'd rather be honest about that than oversell it.

**Devices can bypass it.** DNS settings are per-device. If a device is hardcoded to use Google's DNS (8.8.8.8) or Cloudflare (1.1.1.1), it skips your Pi-hole entirely. Some smart TVs and streaming devices do this. You can mitigate it with router-level firewall rules that redirect all DNS traffic to your Pi-hole, but that's an extra step.

**IP addresses bypass DNS altogether.** If an app already knows the IP address of the server it wants to reach, it doesn't need to look up a domain name. No DNS query means Pi-hole never sees it.

**Unknown domains slip through.** Pi-hole can only block what's on the list. New tracking domains get created constantly. Keeping your blocklists updated helps, but there will always be gaps.

For these reasons, Pi-hole should be one layer in your setup, not the only layer. Pair it with a browser ad blocker, a VPN if that matters to you, and basic network hygiene.

### Worth it?
Absolutely. Pi-hole is free, runs on minimal hardware (a Raspberry Pi, an old laptop, a Docker container), takes maybe 30 minutes to set up, and requires almost no maintenance once it's running. I run Pi-hole on an old Dell XPS from 2016.

More importantly, it changed how I think about my home network. Before Pi-hole, I had no visibility into what my devices were doing. Now I do. And the next time someone connects to my wifi for movie night, I'm not worried about what the TV is going to show us.

I've since added a Ubiquiti Dream Router 7 to my setup, and what I found there makes the Pi-hole discoveries look tame. More on that soon.
