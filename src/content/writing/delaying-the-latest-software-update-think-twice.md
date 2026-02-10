---
title: "Delaying the latest software update? Think twice"
date: 2024-10-29T01:18:43.000Z
author: "Jon George"
featuredImage: "/images/writing/delaying-the-latest-software-update-think-twice/change-1080p.jpg"
featuredImageAlt: "Delaying the latest software update? Think twice"
description: "Skipping updates feels safe until it isn't. Why \"the current version works fine\" is a more dangerous stance than it sounds."
category: "Engineering"
---

Some organizations avoid updating their third party applications for fear of introducing new defects or changes that require development, testing, deployment, and end user training. After all, the current version has been tested and works great, right? As someone who is averse to change, I'm here to urge you to think again. Here are some factors to consider when "waiting until the kinks are worked out" in the latest software version.

### Why do we need software updates?
To non-software engineers, software can seem like a black box where things magically happen, but that's hardly the case. In fact, it's more like this:

![](/images/writing/delaying-the-latest-software-update-think-twice/image-3.png)
Source: [https://xkcd.com/2347/](https://xkcd.com/2347/)

Most modern software applications are composed of software built by other individuals and organizations. For most of us, the code that we write leverages other software projects to accomplishes some task in a way that meets our use case. This perspective is critical to understanding why we need software updates in the first place - change.

##### Changing software dependencies
Software is rarely perfect, and what is perfect today may not be perfect tomorrow. A single software application may depend on hundred, sometimes thousands of other pieces of software. Software dependencies are developed and maintained by other companies or people who may not be involved in our project in any way.

It's up to software teams to monitor their dependencies and adapt their software to the changes down stream. Third party software teams must also monitor their software dependencies and adapt to changes. Additionally, third party software may also change as a result of any the reasons below.

##### Changing threat landscape
As technology evolves, so do the ways in which bad guys exploit software systems. Security is one of the most critical reasons that software is updated. As vulnerabilities are discovered, software teams update the code to eliminate vulnerabilities. The newer, more secure code needs to be installed on all devices using the application.

##### Resolve defects
As software defects are identified and reported, the software team fixes the defect to improve the quality of their software. Defects may be introduced through changes in hardware or software dependencies or a mistake in configuration or business logic. In either case, resolving the defect will improve stability and result in a smoother experience.

##### Enhancements
As people use the application, software teams may request feedback on how the application can be improved. The result of this feedback is usually new code that provides additional capabilities or makes the application easier to use. Enhancement may also take the form of optimization which could result in performance improvements.

##### Updates to legal requirements
Software systems that must meet certain legal requirements may be updated to ensure their application remains compliant with new or updated laws and regulations. Regulations for software are usually in place to protect users and their data by providing specific requirements for how data is collected, what types of data may be collected, notification to the user of data collection, and how the data is stored and transmitted.

### Common reasons to delay software updates
I was a huge fan of Apple iPhone in the early days. I felt so strongly about iPhones that I purchased brand new iPhone 3Gs for family members who swear by iPhones still to this day. However, my passion for the iPhone quickly turned into frustration after several automatic software updates changed the user interface. After being forced to learn and adopt a new experiences many times over the years, I finally gave up the iPhone for good in favor of Android.

##### Change aversion or learning curve
Some people and organizations avoid updates simply because they are used to the current version. Updating the software may require readjustment or retraining that users just are not ready for.

##### Cost of testing and deployment
For organizations, updating software often involves testing the new version to make sure it works well within their systems. This usually requires significant time and resources, especially in larger organizations where testing and deployment are complex.

##### Waiting for stable versions
Updates can sometimes cause unintended side effects. Some users prefer to wait until early defects in a new release are fixed to avoid potential disruption or instability. They may hold off on installing an update until a few minor releases have addressed any initial issues.

##### Hardware constraints
Some older devices may struggle to handle newer updates as a result of increased resource consumption. We have seen companies like [Microsoft stop supporting five year old hardware](https://learn.microsoft.com/en-us/troubleshoot/windows-client/installing-updates-features-roles/processor-not-supported-together-with-windows-version) with Windows updates, and planned obscelescence [tactics used by Apple and Samsung](https://kluwerlawonline.com/api/Product/CitationPDFURL?file=Journals\EuCML\EuCML2018044.pdf).

### Factors to consider when evaluating your options
Some software creators continue to support older versions of their software. There are a handful of strategies for supporting multiple software versions, but the most common is an N - 1 or N - 2 strategy. If "N" is the current version of a software, support is also provided for the previous version or the previous two versions. This buffer allows more flexibility for users to plan and prepare for an update according to their own schedule and budget. Delay too long, and you may find yourself in a position where a major, forced upgrade becomes inevitable to maintain security or functionality. When you have the option to delay a software update, make sure you know the end-of-support timeline and consider the following factors.

##### Security
It is a race against the clock for attackers to exploit known vulnerabilities. By staying on older version, your systems are left unprotected against known threats that could expose sensitive data or allow unauthorized access. Review the release notes to determine the criticality and nature of updates. Prioritize updates with security patches by setting up alerts or implementing automated patching where possible to shield yourself or your organization from emerging threats. If you can't update right away, limit sensitive transactions on unsupported versions as they are more vulnerable to attacks.

##### Supply chain attacks
A software supply chain attacks occurs when a vulnerability in a software dependency is exploited. Supply chain vulnerabilities are a significant concern when dealing with third party applications. Software vendors are expected to actively monitor their own supply chains and release updates to secure components impacted by upstream vulnerabilities. Implement policies to evaluate and prioritize updates from third party vendors to ensure that your organization's defenses remain current.

##### Long term support versions
Long term support (LTS) versions are stable releases of software that maintained for a longer period of time than regular releases. LTS versions do not guarantee total security and waiting for the next LTS release could leave you without the latest security standards, especially when dealing with applications that need to handle sensitive information. Consider adopting a hybrid approach, balancing the stability of LTS releases with regular updates to keep your software secure and up to date.

##### Compatibility with other systems
Software is interconnected. Update may include enhancements that make applications compatible with other updated systems or programs. Map our the applications and systems in your ecosystem that have dependencies, and regularly update them to maintain compatibility.

### Final thoughts
Holding off on software updates may avoid short-term disruption, but the risks of delaying should not be overlooked. Establish a balanced approach that considers both stability and security. Review release notes to understand the impact of an update and plan for a smooth implementation. Software is designed to improve over time and software updates include the latest defenses against vulnerabilities. While it's smart to assess each update individually, a regular update schedule is a good idea. So next time an update is available, think twice before hitting "Remind me later."
