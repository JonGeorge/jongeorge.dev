---
title: Slow cook your ideas
date: 2026-02-15T12:00:00.000Z
author: Jon George
description: "I’ve been using LLMs to simmer ideas before I build. The result is better output and a stronger mental model."
category: Engineering
---
After you have been marinating on a thought for some time, there’s something sweet about putting it on a slow simmer. An idea you didn’t rush to the terminal with, instead one that sat in conversation for days or weeks, getting turned over, pressure-tested, shaped, and then built only after it was fully cooked.

That’s how I’ve been working lately. I use LLMs as a thinking partner to develop ideas slowly before I write a single line of code. And I’ve noticed two things: the output is higher quality, and I have a much stronger mental model of what I’m building before I build it.

The process has a rhythm to it. I’ve started calling it **zoom out, zoom in, build, repeat**.

## The macro cycle

Every project starts with big, blurry questions. What is this thing? Who is it for? What’s the core interaction? What makes it different from the twelve other things that look like it?

These aren’t questions you answer in one sitting. They’re the kind of questions that benefit from a slow back-and-forth over days. I’ll open a conversation with Claude and describe the shape of an idea. Not the implementation, the intent. What I want someone to feel when they use it. What problem I keep running into that made me want to build it in the first place.

The LLM pushes back. It asks clarifying questions. It points out contradictions I glossed over. It suggests framings I hadn’t considered. And because the conversation persists, I can leave, think, come back, and pick it up again with more clarity.

This is the zoom-out phase. You’re circling the idea from altitude, getting the proportions right before you commit to anything.

## The micro cycle

Once the big picture feels solid, I zoom in. Way in. Now I’m talking about data models, component hierarchies, API shapes, edge cases. I’m asking things like “if a user has 200 tools in their stack, what does pagination look like here?” or “should this be a server component or a client component given that I need scroll tracking?”

This is where the LLM earns its keep differently. At the macro level it’s a thinking partner. At the micro level it’s a rubber duck with opinions. I describe what I’m about to build in detail, and the act of describing it, combined with the model’s responses, forces me to confront decisions I would have otherwise deferred until I was halfway through implementation and stuck.

The micro cycle is where hand-waving dies. You can’t describe a feature to an LLM in vague terms and get useful feedback. You have to be specific. And that specificity is the whole point.

## Then you build

After a few rounds of zooming out and zooming in, something clicks. The idea isn’t just an idea anymore. It’s a plan with clear edges. I know what I’m building, why each piece exists, and where the tricky parts are.

When I finally open my editor, the building phase is faster and more decisive. I’m not figuring things out as I go. I’ve already had the arguments with myself (via the LLM) about whether this should be a modal or a page, whether the state lives in the URL or in context, whether the MVP needs that feature or not.

I still hit surprises during implementation. But they’re smaller surprises. The structural decisions were already made during the slow cook.

And to be clear, this isn’t one pass through the cycle per project. A single feature might go through three or four iterations. I’ll zoom out on the concept, zoom in on the data model, build it, realize the UX feels wrong, zoom back out to reconsider the interaction pattern, zoom in on a different component structure, and build again. The cycle is fractal. It operates at the project level, the feature level, and sometimes even at the level of a single component that I can’t get right.

## Then you repeat

Here’s the part that took me a while to internalize: the cycle doesn’t end after you ship v1. Building reveals new questions that conversation alone couldn’t surface. Users do things you didn’t expect. Performance bottlenecks show up where you assumed things would be fast. A feature you thought was essential turns out to be noise.

So you zoom back out. You take what you’ve learned from building and bring it back to the conversation. “Here’s what happened when I shipped this. Here’s what users are actually doing. Here’s what I got wrong.” And the slow cook starts again, now with better ingredients.

The full loop looks like this:

**Zoom out**, Explore the idea. Challenge assumptions. Get the shape right.
**Zoom in**, Go deep on specifics. Force precision. Resolve ambiguity.
**Build**, Execute with confidence because you’ve already done the thinking.
**Repeat**, Learn from what you built and start the conversation again.

## Why slow is fast (but not the fastest)

The instinct with LLMs is to go faster. Generate code immediately. Scaffold a project in minutes. And for known problems with clear solutions, that speed is great.

But for new ideas, the ones that don’t have an obvious shape yet, speed is a trap. You end up building the first thing that comes to mind, then spending twice as long refactoring when you realize the foundation was wrong.

Slow cooking with an LLM inverts this. You spend more time in conversation and less time in rework. The thinking phase is longer but the building phase is shorter and cleaner. Total time to a good outcome goes down, not up.

I want to be honest about where this sits on the speed spectrum. This process is significantly faster than pre-AI development. Before LLMs, the slow cook still happened, it just happened in your head, on whiteboards, in docs no one read, and in conversations with coworkers who had their own stuff to do. Having an always-available thinking partner that can engage deeply with your specific problem compresses weeks of noodling into days.

But it’s not as fast as handing everything to AI and accepting whatever comes back. If you prompt an agent to build your feature from a one-line description and ship whatever it generates, you’ll beat me to deployment every time. The question is what you’re left with afterward, which brings me to the part I’ve been thinking about most.

## The cognitive debt problem

There’s a term gaining traction that I think captures the real risk of AI-first development: cognitive debt. It’s what accumulates when you build things you don’t understand.

And it’s accumulating fast. Spotify’s co-CEO Gustav Söderström recently told investors that [the company’s most senior engineers haven’t written a single line of code since December](https://techcrunch.com/2026/02/12/spotify-says-its-best-developers-havent-written-a-line-of-code-since-december-thanks-to-ai/), they only generate and supervise it. Entire teams are optimizing their codebases for AI readability rather than human readability. Developers are fully outsourcing code generation to models and becoming dependent on them not just for productivity, but for comprehension of their own systems.

The result is a growing number of people who are shipping software they cannot reason about. They can prompt for changes. They can ask the model to fix bugs. But they’ve lost, or never built, the mental model of how their system actually works. They can’t trace a request through their own architecture. They can’t predict what will break when they change something. They’re operating on faith in the model, not understanding of the code.

This is where I think the slow cook matters most. The zoom out, zoom in, build, repeat cycle isn’t just a workflow preference. It’s a defense against cognitive debt. Every time you zoom out, you’re reinforcing your understanding of why the system exists. Every time you zoom in, you’re engaging with how it works at a granular level. Every time you build, you’re testing that understanding against reality. And every time you repeat, you’re updating your mental model with what you learned.

You end up with something that pure code generation can’t give you: a codebase you actually hold in your head. You can reason about it, extend it, debug it, and explain it, because you spent time thinking about it, not just prompting for it.

I’m not arguing against using AI to write code. I use it constantly. I’m arguing against using AI as a substitute for understanding what you’re building. There’s a difference between leveraging a tool and surrendering to one.

## The LLM as a slow cooker

I don’t think of Claude as a code generator. I think of it as the most patient conversation partner I’ve ever had. It doesn’t get bored when I revisit the same idea for the fifth time with a slightly different framing. It doesn’t lose context when I disappear for three days and come back with new constraints. It doesn’t judge me for changing my mind.

That patience is what makes the slow cook work. Good ideas need time and pressure. They need someone to keep asking “but why?” and “what about this case?” until the mushy parts firm up.

If you’re building something new and you find yourself jumping straight from idea to implementation, try slowing down. Open a conversation. Describe what you want to build without asking for code. Zoom out, zoom in, build, repeat.

Your ideas will be better for it. And so will your code.

-----

*I’ve been reading a lot about cognitive debt, and I think there’s a related concept that doesn’t get enough attention: cognitive endurance, the ability to sustain deep understanding of a system as it grows in complexity, and the cognitive load that comes with it. That’s what I’m writing about next.*
