---
title: "Secure software development using zero trust"
date: 2024-10-23T01:20:23.000Z
author: "Jon George"
featuredImage: "photo-1709477544343-56ceb8272ceb.jpeg"
featuredImageAlt: "Secure software development using zero trust"
---

Zero trust is often discussed in terms of networks, devices, and infrastructure because these are usually the first line of defense against external threats. However, as modern software development moves toward microservices, APIs, infrastructure-as-code and cloud architectures, the boundaries between infrastructure and applications are blurring. Here I provide a brief introduction to zero trust and provide use cases for applying its concepts directly to software application code.

### What is zero trust?
*Zero trust* is a set of three principles aimed at protecting digital assets, services, and network infrastructure: 

- Assume a breach has occurred
- Apply least-privilege access
- Perform explicit and continuous verification

In practice this may take the form of microsegmentation, granting access to users for only the resources needed, and continuously monitoring and verifying users and devices connected to the network.

The concept of zero trust assumes that everything and everyone is a potential threat until the user and/or device has been authenticated and authorized to access a resource. After the initial authentication, zero trust environments continuously validate access attempts to ensure that only authenticated and authorized users, devices, and systems can interact with resources on a protected network.

Building on this concept, a *zero trust architecture* applies zero trust principles to a network or system. In a sense, it is the application of the zero trust model to a design or implementation, typically in an enterprise.

### Software development and zero trust
The concepts of zero trust are usually applied to network and infrastructure layers for safeguarding digital assets and resources. But what about the software applications that run on zero trust networks? 

Applying zero trust to software application code provides a more holistic approach that improves security at every layer of the stack - from network access to application logic. By ensuring that our application logic applies principles of least-privilege access, continuous authentication and continuous authorization, we can create more secure software to protect against modern attack vectors.

### The software development life cycle
The [DevSecOps approach](https://www.redhat.com/en/topics/devops/what-is-devsecops) treats security as a shared responsibility across all stages of software development. But we all know that security is sometimes deprioritized when teams are under pressure to deliver quickly. When faced with a decision between security and time-to-market, it's the responsibility of the team to communicate the trade-offs effectively to stakeholders. If a product release can't be delayed in favor of security and a compromise is the next best option, queue up the technical debt for the next opportunity to release.

Introducing automation into the software development life cycle can also help reduce the overhead of developing and reviewing code for security. There are a host of tools available to perform [static code analysis](https://owasp.org/www-community/controls/Static_Code_Analysis) and [vulnerability scanning](https://owasp.org/www-community/Vulnerability_Scanning_Tools) that can help identify issues early on in the process.

### Insider threats
Software development teams often have access to critical systems and sensitive data. If a developer with elevated permission is compromised, the entire application and its data is at risk. Zero trust limits the potential damage by applying least privilege access to ensure that developers and systems can only access what is strictly necessary for their specific tasks. Code repositories and environments should be segmented to limit unnecessary access across teams and services. A front-end developer working on a user interface should not have access to sensitive back-end databases unless absolutely required.

### Supply chain risks
Modern software is built on the shoulders of giants; it involves using third-party libraries, frameworks and APIs. These external dependencies can introduce security vulnerabilities that affect the integrity of the entire application or system. Zero trust requires strict monitoring of all external code and libraries that are integrated into the development process. [Dependency management tools](https://cloud.google.com/software-supply-chain-security/docs/dependencies#dependency-tools) can help you understand and evaluate the security posture of your project and its dependencies.

### API security
APIs are often a target for attackers because they provide a direct path to sensitive data or services. Zero trust ensures that every API call is authenticated, authorized, and encrypted - even within internal systems. Internal and external APIs should be equally secured to ensure no implicit trust exists within the system. For example, internal APIs should use token-based authentication in the same manner as external APIs.

### Conclusion
Zero trust provides a comprehensive, forward-thinking framework for ensuring that software remains secure in the face of modern challenges. Although the zero trust model has historically been applied to networks and infrastructure, we can expect to see more sophisticated implementations that bridge the gap between infrastructure and application security. 

Applying zero trust principles to software development is essential for building secure, resilient, and compliant applications. By prioritizing least privilege access, continuous verification, and strict segmentation within software applications, we can bolster our cybersecurity strategy and greatly reduce our attack surface.