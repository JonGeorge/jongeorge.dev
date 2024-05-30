---
title: FISMA ATO Streamlining Tool
for: for the National Cancer Institute
description: Through a combination of automation and process streamlining, this internal application reduced the time it takes to submit, review, and deliver a signed "Authority to Operate" by 82%.
role: Senior Software Engineer
uri: /project/fast
duration: 18 months
---

#### What is an ATO?
An "Authorization to Operate" (ATO) is an official decision by an Authorizing Official to allow the use of a technology system in government. The decision to grant an ATO is preceded by an extensive review of the system's security and privacy controls. This review process ensures that systems meet certain cybersecurity requirements to safeguard IT infrastructure and data.
#### ATO requirements
The cybersecurity requirements that a system must implement are determined by the level of risk associated with a system. A higher risk system must implement more strict security and privacy controls when compared to a lower risk system. As such, one of the first objectives in the ATO process is to assess the level of risk associated with a system.
#### Risk categorization
To determine the risk categorization of a system, the [NIST SP 800-60](https://csrc.nist.gov/pubs/sp/800/60/v1/r1/final) document maps the types of information that a system uses to security categories. A separate document, the [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), maps the security categories to the controls that must be implemented by the system.
#### ATO process
System owners must document the types of information that their system uses, and provide that as input to the ATO process to provisionally categorize their system. A team of security analysts validates the provisional categorization and implementation of the associated controls. System owners work with the security team to generate numerous other documents that are required as outlined in the [Risk Management Framework](https://csrc.nist.gov/projects/risk-management/about-rmf).
#### Receiving approval
After completing the ATO process successfully, an approval is provided by an Authorizing Official. Generally the approval is represented by a document, signed by the Authorizing Official, indicating that the system is authorized to operate. If approval is not granted, the system owner works with the security team to update their system and revise the documents.

#### Problem Statement
The ATO process is lengthy and resource intensive. For low-risk systems, it takes 3 to 6 months to complete the ATO process; for high-risk systems it can take upwards of 12 months or longer.

Nearly all of the communication and coordination between the security team and system owners happens through email. This makes it challenging to have consistency, traceability, and accountability.

As systems evolve and require updates to previously submitted documents, it is challenging to track changes to various forms completed by the system owner in the ATO process.

System owners are required to read lengthy PDFs to understand the information types and associated security controls. Also, there is no way to ensure that system owners are using the latest NIST documentation, as the information types and security controls are occasionally revised.
#### Solution
Our team built a web application that facilitates new and renewal ATO packages. It allows system owners to complete and submit the required documentation with more autonomy and in less than half the time. All forms in the ATO package can be audited and searched easily. The information types and security controls are codified and presented in an organized fashion - no more lengthy PDFs. Communications between system owners and security teams are tracked and associated with an ATO package.

The security teams work load is reduced with the introduction of automated business rules and email notifications. 51 quality control checks are automated, reducing the likelihood of mistakes. 

ATO packages are automatically forwarded to the Authorizing Official after approval from the security team. The authorizing official reviews the approved ATO packages and issues a signed ATO memo with the click of a button.
#### Outcomes
I was the engineering lead on the FISMA ATO Streamlining Tool (FAST). As part of a team of disruptors, we were tasked with changing the way things had been done for over 13 years. I worked with cybersecurity teams and system owners to identify areas for process improvement and digital transformation.

Through a combination of automation, process streamlining, and digitizing over a dozen government forms, the FAST application reduced the time it takes to complete an ATO by approximately 82% for systems categorized as low risk. Instead of 3 to 6 months, it now took about 2 to 4 weeks to complete an ATO.

#### Artifacts
Through user observations, interviews, and some informal discussions I was able to understand the current state. A fly-over picture of my findings is shown below to demonstrate the complexity of the current state.
![Business process modeling notation for FAST](../FISMA_ATO_Streamlining_Tool_solution.png)

#### Other considerations
Since the information types and security controls may change, I sought after a way to automatically update that information. There were several challenges with this: 
1. There was no notification mechanism to know when changes were made to NIST documents.
2. There was no mechanism to go out and search for and retrieve updates to NIST documents.
3. Updates to ATO forms may require updates to the database schema, which introduced another set of challenges.

During the development of the FAST application the [Open Security Controls Assessment Language (OSCAL)](https://pages.nist.gov/OSCAL/)was actively being developed by NIST. This was exactly what we needed - an way to programmatically retrieve the latest data from NIST. The features being developed would have allowed for our team to consistently offer the latest schema for ATO forms, the most up-to-date information categories, and the most appropriate security controls. 

18 months later, the [first version of OSCAL](https://github.com/usnistgov/oscal-content/tree/main) was released. 
