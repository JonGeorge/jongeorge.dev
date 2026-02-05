---
title: "From black box to open book: Understand your browser's behavior using net logs"
date: 2024-10-31T09:23:06.000Z
author: "Jon George"
featuredImage: "http-keys-1.jpg"
featuredImageAlt: "From black box to open book: Understand your browser's behavior using net logs"
---

Software engineers understand the importance of transparency in a system. When it comes to network communication, the most critical insights are often hidden in mundane technical details. We need visibility into software behavior to effectively troubleshoot, evaluate, and secure our systems. Network logs offer a look under the hood into a browser's inner workings. It reveals insights that can help identify performance issues, improve web app security, and ensure user privacy. We will walk through why net logs are useful, how to collect them, and how to use them to understand your browser's behavior.

### Why net logs matter
[Chrome's net-export](https://www.chromium.org/developers/design-documents/network-stack/netlog/) feature allows us to record every HTTP/HTTPS request made and every response received by the browser as it interacts with websites. The logs contain details about the URLs accessed, request and response times, headers, and resources loaded. By inspecting these details we can pin point long load times, unencrypted requests, issues with CORS requests, DNS queries, SSL certificates, and any external resource a site calls (analytics scripts, trackers, etc.).

### How to use net-export
Net-export is currently a feature available to Chromium-based browsers. This includes the latest MS Edge, Vivaldi, Brave, Google Chrome, and others. It works by clicking a button to start recording network data to a file, interacting with a website, then stopping the recording. Afterward, the data is output to a `.json` file that can be used to inspect the data. There are several tools available, like [Netlog-viewer](https://netlog-viewer.appspot.com/), to view, analyze, and interact with the JSON data in a more user friendly manner. Here are steps to use net-export:

- Open a chrome-based browser and navigate to chrome://net-export.
- Click "Start logging to disk" and save the `.json` file.
- In a separate tab or window, navigate to a site or reproduce an issue you might have.
- Go back to your net-export tab and click "Stop logging".

### Analyzing the data
You now have a raw record of browser network traffic. Chrome net logs are intricate and contain valuable details for analyzing browser behavior. Each entry in the log has an event type. Each event is linked with a source ID which groups related events in the same session or request flow. Below I've included a description of some key events that may be of interest.

`URL_REQUEST_START_JOB` starts an HTTP job for a URL request.

`HTTP_STREAM_REQUEST` starts an HTTP stream request.

`HTTP_STREAM_REQUEST_BOUND_TO_JOB` links an HTTP stream request to a specific job like an API call or a JavaScript `fetch()`.

`HTTP_TRANSACTION_SEND_REQUEST` indicates when an HTTP request is sent.

`HTTP_TRANSACTION_READ_RESPONSE_HEADERS` marks the receipt of HTTP response headers.

`SSL_CONNECT` begins the SSL/TLS handshake process.

`SOCKET` events represent TCP connection attempts, including DNS resolution and SSL handshake events.

`SSL_HANDSHAKE_MESSAGE` logs each handshake in the SSL/TLS process.

`CERT_VERIFIER_JOB` verifies the SSL certificate.

`TCP_CONNECT_ATTEMPT` attempts to establish a TCP connection.

`TCP_CONNECT` logs the start of a TCP connection.

`SOCKET_POOL_CONNECT_JOB` represents a job connecting to a socket.

`SOCKET_IN_USE` shows the socket being used for communication.

`QUIC_SESSION` logs a [QUIC session](https://en.wikipedia.org/wiki/QUIC).

### Privacy and security considerations
When handling net logs, remember they contain sensitive information, including session cookies, access tokens, and personal data. Store logs in a secure location and encrypt it. Also consider redacting sensitive headers or payloads that may contain personal data before sharing.

### Closing thoughts
Net-export allows us to unravel the network intricacies of browser behavior. By understanding net logs we gain insight into every request and response exchanged between our browser and the internet. This sheds light on security risks, privacy concerns, and performance issues. Next time that you are troubleshooting an issue or working on a security assessment, remember that net logs are waiting to be explored.