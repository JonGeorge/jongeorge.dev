---
title: "Are larger, monolithic functions actually better?"
date: 2024-10-23T23:37:49.000Z
author: "Jon George"
featuredImage: "photo-1523800503107-5bc3ba2a6f81.jpeg"
featuredImageAlt: "Are larger, monolithic functions actually better?"
---

Deciding whether to decompose code into smaller functions significantly impacts the maintainability, readability, and sometimes the performance of our software projects. A blanket, one-size-fits-all, approach is rarely appropriate for engineering decisions and this topic is no exception. Are monolithic functions better? It depends. Below you'll find a strategy to evaluate when to break down functions or methods into smaller ones.

### Programming languages 101
Software applications contain instructions that tell a computer what actions to perform. For example: display a website, send an email, etc. These instructions are communicated to the computer in the form of 1's and 0's - machine code. Creating software by writing instructions in machine code is challenging and infeasible (although possible) for most of us.

To make it easier for humans to tell computers what to do, some really smart people invented programming languages. Programming languages allow us to write instructions for a computer in a way that is more natural to humans when compared to writing only 1's and 0's. To run a program, the instructions that we write in a programming language must be translated to machine code, and machine code is executed on the computer.

This post is primarily concerned with high-level programming languages that are multiple layers of abstraction away from machine code. Since programs can have hundreds or thousands of lines of code, we structure our code in a way that's easy for us to read and understand. Decomposition is one of the strategies used to structure code for maintainability, readability, and extensibility.

### Illustrative analogies
The best way to understand the two ends of the spectrum is with examples.

##### Overly monolithic
You pick up a book and begin to read. There are no chapters, no table of contents, and no clear breaks between different parts of the plot. Although it's possible to read the entire book, it would be difficult to follow. For larger books, it'd become increasingly difficult. If the author needed to revise one part of the story, they would have to sift through the entire book to find the relevant section since there is no clear structure to navigate.

##### Overly decomposed
On the other hand, you pick up a second book and begin to read. Every chapter is broken down into dozens of tiny subsections, sometimes just a few sentences long. Each subsection focuses on a minute detail like a single line of dialogue or a brief description of a scene. You have to constantly jump between sections to piece together a narrative and the constant breaks disrupt the flow of the story. If the author needed to revise one part of the story, they would have to touch multiple tiny subsections, making the process unnecessarily complex.

### Strategy for deciding when to decompose
A strategy for deciding when to decompose code provides us with guardrails to ensure that we never end up at the extreme of either end of the spectrum. We create more consistency in our decision making process which translates to increased likelihood of consistently achieving your desired result.

Breaking down a code solution into more manageable parts seems intuitive, but there are several things to consider before making a decision. Here are some factors to consider in order of highest to lowest priority.

- Is the decomposition a dependency for something else?If another piece of code or another system is dependent on our code being decomposed, that might be an indicator of a larger issue related to code structure. In this case we should absolutely consider decomposition.
- Does the code base follow an established pattern of modularity?Consistency is priority. If there is an existing pattern for function decomposition, consider decomposition. Changing or improving on the pattern is a separate discussion.
- Will decomposition improve clarity and maintainability?The ultimate purpose of decomposition is to change how we structure our code. We determined that no other part of the system is dependent on our decomposition, so the only other reason to consider decomposition is to improve readability. If decomposition will not help someone else understand the code, consider keeping the monolithic function.
- Is the decomposition part of a rapid prototype or rapid development effort?True prototypes might evolve into a production product, but there's no guarantee that it will. Avoid over-engineering or solving for problems that don't exist. If speed is the top priority and this is early-stage code, consider keeping the monolithic function.
- Are you decomposing tightly coupled logic?If multiple pieces of logic are tightly coupled, it may not make sense to separate them. Forcing decomposition solely for the sake of modularity results in convoluted solutions. Consider keeping the monolithic function.
- Is this logic used in multiple places, or is it reusable in other parts of the code?If the logic can be reused elsewhere in the code, encapsulate it in a function. Consider decomposition.
- Does the function do a single, straightforward thing? Sometimes straightforward things like database transactions, or processing a file, requires multiple steps. Since we have determined that the logic is not used in multiple parts of the code, it's acceptable to break the Single Responsibility Principle here. Consider keeping the monolithic function.
- Is cyclomatic or cognitive complexity high?If we reached this point and cyclomatic or cognitive complexity is high, consider decomposition to make your code easier for others to digest.
- Is the function large? Large is subjective. [NASA's Power of 10 rules](https://en.wikipedia.org/wiki/The_Power_of_10:_Rules_for_Developing_Safety-Critical_Code) says to avoid functions larger than a printed page. This does not account for font size, but you or your team may elect to choose a more appropriate, concrete threshold. Consider decomposition of large functions to make your code easier for others to digest.

![](Decision-Tree-for-Function-Decomposition--simplified-.svg)

### Benefits of decomposed functions

- Function length - Lengthy functions are often frowned upon and are shortened through decomposition into smaller functions.
- Cyclomatic complexity - Cyclomatic complexity is a measure of the number of separate, independent paths that a program can take. While decomposition does not reduce cyclomatic complexity, it can make code easier to understand.
- Single responsibility principle - A function that does multiple things is more difficult to maintain. Decomposition involves extracting functionality into separate functions such that each function does one thing well. Additionally, functions that perform a single task are easier to test.
- Don't repeat yourself principle - Using similar logic in multiple places bloats your code, making it more difficult to maintain. Decomposition extracts common logic into a single function that can be reused.

### Benefits of monolithic functions

- Speed - When speed is a priority, keeping things monolithic can allow for faster iterations. In the case of rapid development and prototyping, starting with a monolithic approach upfront can help avoid premature abstraction. Allow patterns to emerge and let that inform your decomposition.
- Simplicity - Forcing decomposition for the sake of modularity can result in over-engineered solutions. If a large function contains tightly coupled logic, it may make more sense to keep that logic together instead of separating it.
- Atomic tasks - Tasks that are naturally atomic may not benefit from being decomposed. For example, decomposing a function that handles a single, straightforward transaction could lead to unnecessary complexity without improving clarity or maintainability.
- You ain't guna need it principle - If your function works well and there is no compelling reason or need to break it apart, don't do it.

### Conclusion
Extremes within software development are usually not optimal as there are always trade offs associated with every decision, including when and how we break our code into smaller pieces. Use and modify the model presented above or come up with your own decision making process to help you decide when to break down large functions. A model will help you evaluate relevant decision factors when determining, arrive at an answer with greater consistency, and have a concrete justification for your decision.

The best way to decide if you should decompose a function is highly dependent on the context of the project, the team, and the code. Thoughtful decomposition leads to more maintainable, scalable, and testable code, but only when it is applied judiciously and aligned with the overall architecture and goals of the project.
