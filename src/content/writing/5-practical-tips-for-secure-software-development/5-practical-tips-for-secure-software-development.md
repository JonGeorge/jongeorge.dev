---
title: "5 practical tips for secure web development"
date: 2024-10-31T00:15:28.000Z
author: "Jon George"
featuredImage: "photo-1483389127117-b6a2102724ae.jpeg"
featuredImageAlt: "5 practical tips for secure web development"
---

Even the best developers fall prey to the common pitfalls that leave their code vulnerable to attacks. We all want to write performant, reliable, and secure code, but security can feel like an afterthought when we're up against competing priorities and tight deadlines. By following a few guidelines you can greatly reduce security risks in your applications without it becoming too overwhelming.

### Security-conscious developer starter pack

- Sanitize user input and use output encoding
- Avoid hard coding sensitive information
- Practice the principle of least privilege
- Regularly update dependencies
- Use error handling

### Sanitize user input and use output encoding
##### Input sanitization
Many programming languages provide libraries for sanitizing inputs. These libraries are the preferred tool for input sanitization compared to creating custom solutions, which may be prone to human error. Take [a zero trust approach](/secure-software-development-using-zero-trust/) by always assuming breech. Treat data from users and even from your own database, as malicious. For example, when working with HTML text inputs, sanitize the data by stripping away any script tags or unexpected character sequences.

It's best practice to implement input sanitization on both the client side and the server side. Client side code can be changed by the user or someone with malicious intent, but including sanitization on the client can help reduce the load of the server. Make sure that you do not modify the data after sanitization, else the data becomes dirty and untrusted again.

##### Output encoding
While sanitization "cleans" data as it comes in from the user, output encoding transforms data before it is sent to the browser. The encoding process should ideally occur on the server at the point when data is being prepared for the browser. This reduces the likelihood of executable code being injected into a payload from your system. Output encoding takes different forms depending on the context, but always involves encoding data being sent from a server to a client.

Ideally, input sanitization occurs as soon as possible after the data processing has begun. In contrast, output encoding would ideally occur as late as possible before data is sent to the browser. Don't encode or change data that's already been encoded. Encoding data multiple times may not yield the intended results.

### Avoid hard-coding sensitive information
Some software applications need to use API keys to access an API or database passwords to access a database. Sensitive information should never be stored in your code, and definitely not in a public repository. This is a common mistake that can have devastating consequences. Use environment variables to store sensitive information. Environment variables are accessible by your code, but is not leaked if your code is exposed.

Most cloud providers support environment files, so you can easily load secrets without embedding them in your codebase. Cloud providers sometimes also have "secrets management" tools which provide robust encryption and controls for sensitive data. Remember, if you need to store sensitive data, keep it out of your code and do not commit it to source control.

### Practice the principle of least privilege
Grant only the minimal level of access required for users, applications, and processes. It's a fundamental concept in security that often gets ignored when things get busy. Only grant users and services access that is absolutely necessary. For actions like updating user data, assign specific roles that can perform such operations. This way, if an account with minimal privileges is compromised, the impact is contained. The principle of least privilege is the best way to protect your application from internal and external threats.

### Regularly update dependencies
A package that is outdated may have known security vulnerabilities that attackers can exploit. Use automated tools like Dependabot or `npm audit` to scan your dependencies for known vulnerabilities and suggest fixes. Applying patches and updating dependencies regularly keeps your application secure and up to date with the latest security patches.

### Use error handling
Error messages are essential for debugging, but can also become a treasure trove of information for an adversary. Avoid overly detailed error messages in production to prevent attackers from gathering internal details about your system. Log errors in a way that is only accessible to developers using tools like Sentry or ELK (Elasticsearch, Logstash, and Kibana). These can capture the necessary information for debugging without leaking sensitive data. Balancing clarity with caution helps users while keeping important details hidden.

### Conclusion
By adopting these tips into your development, you'll find that security becomes a natural part of your development process. Secure software development is a habit that starts with writing secure code and building safer applications. Our responsibility to put security first becomes more important as technology evolves. I hope this brings you a little closer to making security a part of your dev flow!
