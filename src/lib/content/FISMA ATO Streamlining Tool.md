---
title: FISMA ATO Streamlining Tool
description: Through a combination of automation and process streamlining, this internal application decreased the time it takes to complete an ATO by 82%.
for: for the National Cancer Institute
role: Lead engineer
date: October 2020
uri: /project/fast
---
#### Summary

I was the lead engineer on the FISMA ATO Streamlining Tool (FAST) also dubbed ATO-as-a-Service. Through a combination of automation and process streamlining, this internal application decreased the time it takes to complete an ATO by approximately 82% for systems categorized as low risk.

As the lead developer I worked with a Business Analyst, Project Manager, and cybersecurity teams to determine areas for automation and process improvement.

The application features a user-friendly AngularJS interface where system owners can submit, review, and update ATO packages for their systems. Security advisors interact with system owners and update ATO data through ServiceNow. The Security Officer reviews the approved ATO packages and issues a memo based on their determination.
#### Outcomes
The time it takes to complete an ATO was decreased from 3+ months to about 2 weeks for systems categorized as low risk according to the FIPS 199 Information Categories and by the definitions provided by the NIST SP 800-60.

#### Project Brief

#### Current state
Through user observations, interviews, and discussions about the existing processes, we were able to get an understanding of the current state. An excerpt is shown below to demonstrate the number of people involved in the ATO process and the complexity of the information captured during this phase.
![Business process modeling notation for FAST](../FISMA_ATO_Streamlining_Tool_solution.png)


#### Other considerations
Form fields, verbiage, and other information are regularly updated on certain ATO forms. As a result, those updates need to be manually implemented in ServiceNow. 

During the development of the FAST application the [Open Security Controls Assessment Language (OSCAL)](https://pages.nist.gov/OSCAL/) was actively being developed by NIST. The features being developed would have allowed for our team to consistently offer the latest schema for ATO forms. Dynamic and automated updates to form schema was placed on hold until OSCAL is ready.
