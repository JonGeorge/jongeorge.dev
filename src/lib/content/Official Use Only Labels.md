---
title: Official Use Only Labels
description:  By programmatically generating, displaying, printing and managing "Official Use Only" labels in ServiceNow forms and portal widgets, the organization remained compliant through an enterprise transition to the ServiceNow platform.
for: for the Idaho National Laboratories
role: Principal Developer
date: September 2022
uri: /project/ouo
duration: 3 months
---
### Summary
I was the technical lead on a project to create "Official Use Only" (OUO) labels across the ServiceNow platform. OUO labels were created based on the specs, design and guidance provided by the Department of Energy.

We created mechanisms for generating, displaying, printing and managing OUO labels in ServiceNow Native UI forms (tasks, requests, catalog items etc.) and portal widgets used across the organization's multiple portals. The feature included dynamic, record-based FOIA exemptions and titles of data classification as per the DoE standard.

### Outcomes
Implemented platform wide "Official Use Only" labels with a management interface and printing capability. The Idaho National Laboratory met the Department of Energy mandate for displaying the appropriate label in all required locations.

![Example OUO Label](../src/lib/assets/OUO_Label_example.png)

### Project Brief
The Idaho National Laboratory (INL) is a Department of Energy (DoE) national laboratory focused on nuclear energy research. The DoE is mandated to display "Official use only" (OUO) labels on certain digital and hard copy forms and documents.

After INL adopted the ServiceNow platform, they were required to meet the mandate by conditionally displaying an OUO label on Native UI forms and Service Portal pages.

The content of an OUO label must reflect the categorization for FOIA exemptions, applicable guidance, date, and name of the information owner.

The Idaho National Laboratory also needs to print hard-copies of ServiceNow web pages containing OUO labels from the Native UI and the Service Portal. The OUO labels shall be present on the printed pages in specific locations.

OUO labels need to be occasionally updated with new information, or may be removed. Changes to or removal of an OUO label should be reflected in all locations where that label is present.

### The Solution
1. Store the mutable OUO label data in a ServiceNow table. The table contains columns for category, guidance, exemptions, date, and name.
2. Add a reference field called OUO label to the catalog item table. Only one OUO label may be on a catalog item. Catalog items that capture data designated as OUO require an OUO label; there is a change management process for vetting new catalog items before production use is permitted.
3. Create a UI Macro that displays the OUO label with the data from the OUO label table.
4. Add the UI Macro to Catalog Items as a variable. This allows the OUO label to appear any where the catalog item form is displayed within the Native UI.
5. UI Macros did not play nicely with Service Portal's AngularJS, and vice versa. We also needed to identify the catalog item being displayed and get its associated OUO label data. To pass this data from the client side portal to the server, a new OUO widget on the SC Task portal page was the most viable option.
6. To address printing, a custom UI Action allows the user to open a UI Page with the form data formatted for 8.5" x 11" paper.

![OUO Label Diagram](../src/lib/assets/OUO_Label_solution.png)

Implementing this solution means that the users would have to follow this process to create and maintain OUO labels:
1. During the creation of a new catalog item, the user may associate an existing OUO label with the catalog item or create a new one.
2. If a new OUO label needs to be created, the OUO label form is completed by the user and the new OUO label record is automatically added to the catalog item.
3. Updates are made to the OUO label by updating a record OUO label table.

### Other Considerations
Ideally, the static template and styling code for the OUO label would live in a single location. During the project we explored a couple options for implementing it this way.
1. Add template and styling code to a UI Macro and call the macro from within the Service Portal
2. Add template and styling code to a portal widget and add the widget to Native UI forms using an iframe.

Ultimately, neither of these solutions worked well for our use case. In particular, the UI Macro could not be displayed in an AngularJS widget, and the iframe did not work with catalog item variables in the Native UI. Given that the OUO label template will not change, maintaining the template in these locations was deemed to be a low risk.

---

### More work at the Idaho National Laboratory
As a principal ServiceNow Developer, I conducted dozens of code reviews for various in-flight projects during my three-month contract. I manually inspected architectural and development work and used code analysis tools to help formulate and provide feedback to developers.