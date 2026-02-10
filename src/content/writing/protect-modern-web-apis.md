---
title: "Techniques for protecting web APIs from common threats in 2024"
date: 2024-11-01T23:18:29.000Z
author: "Jon George"
featuredImage: "/images/writing/protect-modern-web-apis/cyber-punk-small.webp"
featuredImageAlt: "Techniques for protecting web APIs from common threats in 2024"
description: "APIs are the most common threat vector in 2024. Here's what actually stops attacks in production."
category: "Security"
---

APIs are one of the most common threat vectors, [according to a 2024 Gartner report](https://www.gartner.com/en/documents/5471595). APIs provide a pathway for data exchange and facilitate access to critical resources. They are the lifeline of modern web applications, bridging the gap between various services, platforms, and devices. This makes APIs prime targets for bad actors looking for valuables. Here we'll share practices that every developer should be familiar with to secure their web APIs.

1. Authentication and authorization
2. Data encryption in transit and at rest
3. Validation and rate limiting
4. API gateway and web application firewalls
5. Testing and deployment pipeline

### Common threats to APIs
Compromised APIs can lead to compromised data, service outages, loss of public trust, and damage to your reputation. Before diving into the specifics, I believe it's important to understand the most common types of threats that target APIs today.

##### Injection attacks
Injection attacks have been around for ages, yet they still present a major issue for modern web applications. Injection attacks occur when untrusted inputs are improperly handled.

##### No encryption or weak encryption
Sensitive data is easily exposed during transmission between client and server. Appropriate encryption makes it much more difficult to decipher data being transmitted on a network.

##### Denial of service attacks
APIs without proper rate limiting can be overwhelmed by thousands, or millions, of request per second from a bad actor. The increased malicious network traffic within a very short period of time can bring down a system that isn't equipped to defend against this type of attack.

##### Broken authentication
Improper implementations of authentication mechanisms allow unauthorized access to resources and data.

### Authentication and authorization
OAuth 2.0 and OpenID Connect (OIDC) remain the industry standards for handling API authentication and authorization. OAuth 2.0 provides delegated access to specific resources on behalf of a user. OIDC is an authentication mechanism to verify a user's identity on top of OAuth 2.0. Together they offer secure and flexible access management solutions. Avoid relying solely on API keys for endpoints with sensitive data. Always pair API keys with a strong authentication method like OAuth. Use short-lived access tokens and refresh tokens to minimize risks if a token is exposed.

Role-based access controls enforce access restrictions based on user roles, allowing different levels of access based on predefined categories. Attribute-based access controls provide more precise rules for allowing access based on attributes such as location or device type. Combining both types of controls provides broad, but nuanced, access policies aligning with security best practices.

### Data encryption in transit and at rest
Encryption is essential. APIs frequently exchange sensitive information and should be secured using TLS 1.2 or higher. This ensures that data is encrypted while in transit between clients and minimizes the risk of interception from "man in the middle" attacks. For data that's stored on servers, use symmetric (i.e. AES-256) for fast, secure encryption of stored data. Hashing algorithms like `bcrypt` can be used to secure stored credentials like tokens and passwords. Even if a breach occurs, encryption renders the data unreadable.

### Validation and rate limiting
Without proper input validation, APIs are susceptible to injection attacks. Never trust inputs by default and always implement validation on both the client and server. Consider using validation libraries that filter or sanitize inputs. Additionally, protect APIs from being overwhelmed by an unmanageable number of repeated and concurrent requests by using rate limiting. Setting reasonable thresholds for the frequency that a user can access your API will prevent abuse and interruption of the service.

### API gateway and web application firewalls
In cloud infrastructure, API gateways are the central access point for APIs. Cloud service providers typically offer rate limiting, user authentication, and centralized logging and monitoring. Cloud providers also offer web application firewalls to filter malicious traffic based on predefined rules. Using an API gateway and a WAF together allows you to enforce security policies consistently across APIs.

### Deployment pipeline
API security must be integrated into your CI/CD pipeline. This makes it seamless to automate security scanners to catch vulnerabilities early in the development cycle. You may also consider static and dynamic analysis tools to detect potential issue in your code before deployment and in the running application.

### Conclusion
API security is a shared responsibility that requires attention at every layer. It's important to stay vigilant and aware of emerging threats and evolving security standards to keep APIs secure. The practices outlined in this articles provides a powerful toolkit to prevent potential threats. Security is no longer and option, it's a responsibility.
