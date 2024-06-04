---
title: NIH COVID-19 Bio-repository
description: A repository of COVID-19 specimen data, with an integrated approval process for COVID-19 studies, allowed scientists to extract insights and trends from dashboards containing data for COVID-19 specimens and their associated studies during the onset of the pandemic.
for: for the National Institutes of Health
role: Senior Software Engineer
date: March 2020
uri: /project/covid
site: https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub
duration: 2 weeks
---
#### Background
In December of 2019, just a one month before the first confirmed COVID-19 case in the United States, I developed a proof-of-concept application called Bio-medical Specimen Tracker. This application stored information about diabetes-related specimens involved in research studies within the Division of Cancer, Epidemiology, and Genetics (DCEG). The use case for the proof-of-concept closely aligned with the need to track COVID-19 specimens.

During the second week of March 2020, I received a phone call from a project manager on my team. "Jon we need you to build an a bio-repository for COVID-19 specimens. It has to be delivered within two-weeks." I immediately began planning the project phases and timeline. I provided a short list of specific people I needed on my team to make this happen: a business analyst and a UX designer that I previously worked with on another project. At this point, our mission was clear as mud.

#### Problem
The NIH was inundated with millions of COVID-19 specimens, thousands of requests to conduct research, and no way to support the surge.

The information included in requests was not standardized since requests were submitted via email.

There was no way to catalog all specimens reliably, as this event exceeded the limitations of the shared Excel spreadsheet in use.

There was no way to share statistics and analytics on specimen data and associated studies within the NIH.

Getting accurate reports for leadership was an insurmountable task because the data was unstructured and disparate.

#### Solution
Provide a centralized system to view specimen data, communicate with the investigators, and manage the studies associated with each set of specimens.

Create a platform for the internal review board (IRB) to track the influx of requests to conduct studies on COVID-19 specimens. The IRB will be able to evaluate each request, then provide an approval or rejection response back to the requester and the investigator.

Create dashboards that allow 20,000 employees in the NIH to view all COVID-19 studies across all 27 Institutes and Centers. 

Generate reports on the various COVID-19 related studies being undertaken by the NIH for leadership. 
#### Phase 1
While our UX designer and business analyst led requirements elicitation, I gleaned as many technical requirements as possible from those initial discussions. On day two I began setting up the scaffolding for the project - the initial AngularJS front-end and an initial approval workflow on the back end. As more requirements became known, our business analyst documented them, and our UX designer produced initial designs. As I built the application, our business analyst executed functional tests of completed features, and mapped test cases back to requirements for traceability. Our designer performed design quality control and continued designing subsequent pages in parallel. 
#### Phase 2
By day four, I'd finished setting up page routes with initial pages, authentication, landing page, tables and fields, HTML forms with inline form validation, a custom file upload tool, and an approval workflow, all with pixel-perfect precision to match the designs. We delivered this as the first release on day five and used the remaining time to refine requirements, test, and quickly iterate. The final pieces to be stood up were the approval dashboard, email notifications, and the specimen dashboard to be released to 20,000 employees in the National Institutes of Health. We completed the project with a couple days to spare. I presented demos to various stakeholders and shared a great sense of purpose and accomplishment with my team.
#### Outcomes
The rapid delivery timeline of this project allowed the NIH to quickly adapt to the demand resulting from the Coronavirus pandemic in March 2020. 

Scientists within the DCEG are able to assess the types of COVID-19 specimens being used in NIH research. 

Specimens may be linked to research studies which helps provide an overview of COVID-19 research efforts across the enterprise.

Principal investigators and the internal review board now have a structured system to track the state of each request to conduct research. 

Lastly, the DCEG supports internal information sharing by exposing COVID-19 specimen data and their associated studies to the broader NIH population.
#### Artifacts
The diagram below provides a 10,000 foot view of how data flows and the external entities that interact with the data.

![NIH COVID-19 Biorepository Data Flow](../NIH_COVID-19_Biorepository_solution.png)

#### Live project
[https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub](https://service.cancer.gov/nih-covid-19-dashboard?xpage=landing_pub)

---

### More work at the National Institutes of Health

As a Senior Software Engineer, I worked on many other projects for the National Institutes of Health including:

[[Bio-medical Specimen Tracker]]<br/>
[[FISMA ATO Streamlining Tool]]<br/>
[[Genomic Data Sharing]]<br/>
[[Risk Management Application]]<br/>
[[Good Clinical Practice]]<br/>