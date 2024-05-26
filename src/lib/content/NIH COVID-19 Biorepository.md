---
title: NIH COVID-19 Bio-repository
description: A repository of COVID-19 specimen data, together with an approval process for COVID-19 studies, allowed
  scientists to extract insights and trends from dashboards containing data for COVID-19 specimens and their associated
  studies.
for: for the National Institutes of Health
role: Senior Software Engineer
date: March 2020
uri: /project/covid
site: https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub
duration: 2 weeks
---

### Summary

I was the lead engineer for the NIH COVID-19 Biorepository. Scientists needed a way to track and report on the millions
of COVID-19 specimens that were delivered to the NIH and their associated research studies within the Division of Cancer
Epidemiology and Genetics (DCEG).

During the onset of the COVID-19 pandemic, I was responsible for developing a custom portal to handle the submission of
Intramural Research Program studies approved by the Institutional Review Board. The timeline for delivery of the final
product was 5 days.

The solution included an approval workflow, email notifications, automated dashboards and reports, and a portal
interface for interacting with the application. The portal was designed collaboratively between a UX Researcher and I;
it included a simple interface for handling specimen study submissions and approvals.

In an effort to make COVID-19 specimen data available to the twenty thousand NIH employees, we created dashboards within
ServiceNow and exposed them via the portal.

Live
project: [https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub](https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub)

### Outcomes

The rapid delivery timeline of this project allowed the NIH to quickly adapt to the demand resulting from the new
Coronavirus pandemic in March 2020. The scientists within the Division of Cancer Epidemiology and Genetics (DCEG) were
able to assess the types of COVID-19 specimens in possession at the NIH. Principal investigators and the internal review
board have a structured means of communicating the state of each request to conduct a study. The DCEG helped promote
information sharing and open data by exposing COVID-19 specimen data and their associated studies to the broader NIH
population.

### Project Brief

The National Institutes of Health (NIH) was receiving tens of millions of COVID-19 specimens across multiple global
locations between February 2020 and March 2020. As a result, there was an urgent need for a centralized system to view
the specimen data, communicate with the investigators, and manage the studies associated with each set of specimens.
This single pane of glass would allow everyone in the NIH to view all COVID-19 studies across all 27 Institutes and
Centers.

Additionally, the internal review board (IRB) needed a way to track the influx of requests they received to conduct
studies on COVID-19 specimens. More specifically, the IRB needed to evaluate each request, and provide an approval or
rejection response back to the requester and the investigator.

Lastly, there was a need to report on the various COVID-19 related studies being undertaken by the NIH. Information
sharing across the enterprise was critical for this project to be deemed a success.

### Solution

![NIH COVID-19 Biorepository Data Flow](../NIH_COVID-19_Biorepository_solution.png)

Server-side

1. Use the Request and Requested Item tables to manage requests submitted from the portal.
2. Create tables for storing locations, specimen types, and COVID-19 studies.
3. Create email notifications/triggers.
4. Integrate with identity provider for PIV authentication.

Client-side

1. Work with UX Researcher to produce initial user flows, email designs, and interface design in InVision.
2. Create SCSS variables for reusable styling.
3. Create ServiceNow widget for handling the authentication process.
4. Configure and code application shell for menus, navigation, header, footer, and AngularJS routing.
5. Write code for custom request form that aligns with the designs.
6. Write code for HTML emails.
7. Add AngularJS form validation and business rules.
8. Create admin interface for approvals using jQuery and Bootstrap.
9. Connect front end components to the server-side.
10. Create ServiceNow dashboards and add them to the portal navigation.

A principal investigator (or someone who acts on their behalf) submits a request to study specific types of COVID-19
specimens. The requests are evaluated by the Internal Review Board who responds to the submitter with a decision.

Email notifications are sent to the appropriate individuals when requests are submitted, when a decision is made on a
request, and when messages are sent through the system.

### Other considerations

Ideally, more time on this project would have allowed for more planning and software design. With a timeline of five
days to produce a fully tested and fully functional product, we chose to honor the customer's request to prioritize the
user experience.

Secondly, the direction from the government's engineering leadership was to deliver modular products that could be
ported to other technologies. To avoid being locked-in to the ServiceNow platform, developing custom portals was the
government's preferred method for new projects.

---

### More work at the National Institutes of Health

As a Senior Software Engineer, I worked on many other projects for the National Institutes of Health including:
[[Biomedical Specimen Tracker]]
[[FISMA ATO Streamlining Tool]]
[[Genomic Data Sharing]]
[[Risk Management Application]]
[[Good Clinical Practice]]