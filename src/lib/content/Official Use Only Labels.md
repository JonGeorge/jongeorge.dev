---
title: Official Use Only Labels
description: By programmatically generating, displaying, printing and managing "Official Use Only" labels, we reduced manual work by 10 hours per week and increased overall data quality by 22%.
for: for the Idaho National Laboratories
role: Principal Developer
date: September 2022
uri: /project/ouo
duration: 3 months
---
#### Background
The Idaho National Laboratory (INL) is a national laboratory with about 6,000 scientists, researchers, and staff. The lab is one of many within the Department of Energy that focuses on nuclear energy research and advancing renewable energy technology.
#### Problem
Labs under the DoE are required to display "Official Use Only" (OUO) labels on certain documents within the organization. In an effort to digitize dozens of paper forms and business processes, INL needed a way to display OUO labels on all digital forms.

The tool used for the digital transformation at INL is ServiceNow. The core architecture for managing digital forms had already been implemented. Digital versions of forms are displayed in multiple areas, in different formats, and could even be printed from the browser multiple ways that produced visually different results.

#### Solution
Forms requiring OUO labels could be catalog items, or native ServiceNow forms. Catalog item forms may be displayed across several custom AngularJS portals and in the ServiceNow form view. Forms could also be printed using the "print-to-pdf" feature in the browser, or using the standard print. 

To cover all the use cases, we needed to centralize the management of OUO labels and their associated forms. OUO labels may have a life span, and they may change over time. This means that each label has unique metadata that needed to be stored. Also, forms meeting specific criteria needed to be linked with to an OUO label. 

A new centralized system means major changes to business processes. The data requirements aligned with the centralized model and our stakeholders were on board with the new process to manage OUO labels.

We created mechanisms for generating, displaying, printing and managing OUO labels in ServiceNow Native UI forms (tasks, requests, catalog items etc.) and portal widgets used across the organization's multiple portals. The feature included dynamic, record-based FOIA exemptions and titles of data classification as per the DoE standard.

#### Outcomes
With the new system, we replaced the manual work to manage OUO labels with a new process that introduced automation and higher data quality. 100% of the forms the need an OUO label has one.

#### Artifacts
Below is an example OUO label. The blue markings are variable data, unique to each label.
![Example OUO Label](../OUO_Label_example.png)

#### Implementation details
1. Store the mutable OUO label data in a ServiceNow table. The table contains columns for category, guidance, exemptions, date, and name.
2. Add a reference field called OUO label to the catalog item table. Only one OUO label may be on a catalog item. Catalog items that capture data designated as OUO require an OUO label; there is a change management process for vetting new catalog items before production use is permitted.
3. Create a UI Macro that displays the OUO label with the data from the OUO label table.
4. Add the UI Macro to Catalog Items as a variable. This allows the OUO label to appear any where the catalog item form is displayed within the Native UI.
5. UI Macros did not play nicely with Service Portal's AngularJS, and vice versa. We also needed to identify the catalog item being displayed and get its associated OUO label data. To pass this data from the client side portal to the server, a new OUO widget on the SC Task portal page was the most viable option.
6. To address printing, a custom UI Action allows the user to open a UI Page with the form data formatted for 8.5" x 11" paper.

Implementing this solution means that the users would have to follow this process to create and maintain OUO labels:
1. During the creation of a new catalog item, the user may associate an existing OUO label with the catalog item or create a new one.
2. If a new OUO label needs to be created, the OUO label form is completed by the user and the new OUO label record is automatically added to the catalog item.
3. Updates are made to the OUO label by updating a record OUO label table.

<img src="../OUO_Label_solution.png" alt="OUO Label Diagram" width="600"/><br/>
#### Other Considerations
Ideally, the static template and styling code for the OUO label would live in a single location. During the project we explored a couple options for implementing it this way.
1. Add template and styling code to a UI Macro and call the macro from within the Service Portal
2. Add template and styling code to a portal widget and add the widget to Native UI forms using an iframe.

Ultimately, neither of these solutions worked well for our use case. In particular, the UI Macro could not be displayed in an AngularJS widget, and the iframe did not work with catalog item variables in the Native UI. Given that the OUO label template will not change, maintaining the template in these locations was deemed to be a low risk.

---

### More work at the Idaho National Laboratory
As a principal ServiceNow Developer, I conducted dozens of code reviews for various in-flight projects during my three-month contract. I manually inspected architectural and development work and used code analysis tools to help formulate and provide feedback to developers.