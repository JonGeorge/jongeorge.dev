---
title: "Data privacy: How developers can prepare for the future"
date: 2024-10-24T20:49:14.000Z
author: "Jon George"
featuredImage: "/images/writing/data-privacy-how-developers-can-prepare-for-the-future/photo-1461685265823-f8d5d0b08b9b.jpeg"
featuredImageAlt: "Data privacy: How developers can prepare for the future"
description: "Privacy laws are catching up to how data actually gets collected. What engineers should be doing now before they're forced to."
category: "Privacy"
---

As technology advances, so do the ways in which our personal data is collected, stored, and shared. The evolution of data collection has prompted law makers to be more privacy-conscious and invested in when, how, and why attributes about us are collected. As software engineers, we are at the forefront of these changes. Our work impacts how data is managed, and we have a responsibility to anticipate and adapt to privacy demands. Here is a look at the future of privacy, why it matters, and how developers can prepare.

### The future
New technologies mean more data. With the increasing number of smart devices and the infusion of AI into our daily lives, organizations are collecting, buying, selling, and using more data than ever before. Large companies, like Google, Apple and Mozilla, are making shifts away from third-party cookies in the browser in favor of newer technologies. Software regulation and compliance requirements are evolving with laws such as [GDPR](https://gdpr.eu/what-is-gdpr/), [COPPA](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions#A.%20General%20Questions), and [CCPA](https://oag.ca.gov/privacy/ccpa) being introduced with pretty significant penalties if not followed. With documentaries like "The Social Dilemma," and things like the Cambridge Analytica scandal, people are becoming more aware of the importance protecting their right to privacy. Taking steps to protect that right is another hurdle we'll save for another day.

### Why data privacy matters
Trust is everything. Users want to know that they can trust the apps and platforms they interact with. A lack of confidence in a digital product or service due to mishandled or leaked data could mean the end of the road for that company. While [fines for violating privacy laws are steep](https://www.securityweek.com/linkedin-hit-with-310-million-euro-fine-for-data-privacy-violations-from-irish-watchdog/), privacy shouldn't just be about avoiding fines. Instead, it could be leveraged to differentiate a product or service, turning compliance into a competitive advantage. 

Additionally, data privacy is an extension of the fundamental right to privacy. Protecting data is critical for maintaining personal autonomy, freedom from surveillance, and safeguarding against misuse or exploitation. Without data privacy, the broader right to privacy cannot be fully realized, threatening the integrity of democratic societies.

### How to prepare
##### Don't collect what you don't need
Privacy starts at the inception of a product. Evaluate and make considerations for the data elements that you really need, and ignore everything else. You don't need to protect data that you don't have. Also, giving users the ability to control their data, preferably by **opting in** rather than **opting out**, makes privacy settings more intuitive and accessible.

##### Use encryption and anonymization
If you are handling user data of any kind, encryption is your best friend. Encrypt data in transit and at rest, making sure that only authorized users and devices have access to it. For analytics where you don't need to identify individual users, anonymize the data. It's a win-win, you get the data you need, and users' privacy stays in tact.

##### Use a zero trust approach
[Trust no one by default, and always verify.](/writing/zero-trust-in-code) Verify every user and device before granting access to a resource. Striking a balance between security and convenience can be challenging, but zero trust provides a solution to the traditional security-convenience trade off.

![](/images/writing/data-privacy-how-developers-can-prepare-for-the-future/Screen-Shot-2021-11-01-at-1.00.52-PM-1024x343.png)

![](/images/writing/data-privacy-how-developers-can-prepare-for-the-future/Screen-Shot-2021-11-01-at-1.02.43-PM-1024x394.png)
Source: [VMware End-User Computing Blog](https://blogs.vmware.com/euc/2021/11/zero-trust-avoids-the-traditional-security-versus-convenience-tradeoffs.html#:~:text=It%20literally%20changes%20the%20relationship,or%20a%20lot%20of%20security.)

##### Make privacy usable
Who enjoys jumping through hoops just to feel safe online? No one. We should aim to make privacy as user friendly as possible. Create concise privacy policies in [plain language](https://www.plainlanguage.gov/). Simplify privacy settings so they are easy to find, understand, and use. Let users know in real-time when data is being collected or shared.

##### Be cautious with AI
[AI features are being integrated more frequently into software systems](https://www.securityweek.com/user-outcry-as-slack-scrapes-customer-data-for-ai-model-training/). Things like facial recognition and predictive analytics collect large amounts of data without users even realizing it. Developers should be knowledgeable about the algorithms used in third-party AI solutions to ensure that they do not infringe on user privacy rights. The key here is transparency. Succinctly and clearly let users know what data is being used by AI and how it is processed.

### Wrapping up
The future of privacy is one where developers are responsible for safeguarding user's privacy and advocating for users' right to decide what data is collected, stored, and shared. Just because technology can do something doesn't mean that it should. Embrace "privacy by design" by building systems that prioritize greater transparency and security. Our role as technologists is a privilege, and the decisions we make today will echo for eternity.