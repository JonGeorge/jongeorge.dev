---
title: The five dimensions of cognitive work
date: 2026-02-21T14:29:34.000Z
author: Jon George
description: We track lines of code, tickets closed, PRs merged. Nobody tracks the four hours you spent holding a system in your head to find a one line of code fix.
category: Engineering
---

I was on a call with thirty people, leading a solutioning discussion, and my brain just stopped. Not gradually. Mid sentence. The system I'd been holding in my head, the one only I fully understood, the one I'd been carrying context on for months, just collapsed. What came out of my mouth was something like "uhh durr, my brain just stopped working, sorry guys." Thirty people on the line. Silence. Then I tried relentlessly to reload everything back in my mind to pick up the thread of my own thinking and resume like it hadn't happened.

That moment wasn't about being tired. I wasn't sleep deprived or burned out in the emotional sense. I'd hit a different kind of wall, one that software engineering hits in a way most jobs don't, and one we barely have language for.

In my last post I talked about [slow cooking your ideas](/writing/slow-cook-your-ideas) and ended with a concept I'd been thinking about: cognitive endurance. But as I kept pulling on that thread, I realized endurance is only one dimension of something larger. Software engineering is cognitive work, and we have almost no vocabulary for what that actually means.

We have language for output. Velocity, throughput, cycle time, etc. We have entire dashboards dedicated to measuring what came out the other end. But we have almost nothing for the work that happens before the fingers hit the keyboard. The four hours you spent holding a system in your head to find a one-line fix? That doesn't show up anywhere.

That's a problem. Not just because it's unfair to the people doing the work, but because it makes us bad at planning, bad at protecting our most valuable resource, and bad at understanding why some tasks take ten times longer than they "should."

Some teams have started to develop this language on their own, even if they don't realize it. On my team, the word you hear every day is "tracking." Someone will say "Ok, I'm tracking," meaning they understand, they've loaded the context. Or "I wasn't tracking that," meaning it wasn't in their mental model. Anytime I hear the word tracking, I know someone's context just got updated. Something was added, removed, or both. It's a small word, but it's doing real cognitive work: it tells the room whether information landed or didn't without anyone having to explain the mechanics of why.

That's one word. I think we need a whole vocabulary.

## Five dimensions

Over the past few years I've become aware of five distinct dimensions of cognitive work. I didn't learn these from a textbook. I learned them from hitting walls, watching teammates hit walls, and slowly building a vocabulary for what was happening.

**Cognitive load** is how complex a task is. Not how long it takes or how many lines of code it produces, how many interacting pieces you need to reason about simultaneously. Debugging a timing issue between two server side components might result in a one line fix. The load was enormous. The output was trivial. If you've ever finished a task and felt completely drained despite having "barely written any code," you were experiencing high load with low output, and no productivity metric in the world would have captured what that cost you.

If you map load against output, you get four quadrants. 

High load, high output is the dream. It's complex work that produces visible results. People get promoted for this. 

High output, low load is the grind. This is repetitive work that fills up a commit history without taxing the brain. It looks productive and it is, just not in the way that grows you. 

Low load, low output is downtime, and every team needs some. 

High load, low output is where the invisible work has the greatest impact. You spent the whole day reasoning through a system, tracing dependencies, weighing tradeoffs, and the only artifact is a one-line fix or a decision not to change anything at all. This is some of the most valuable work in software engineering, and it's the quadrant that's completely invisible to every productivity metric we use.

**Cognitive capacity** is how much you can hold in your mind at once. Think of it like RAM. A computer doesn't get slower because the task is harder. It gets slower when it runs out of memory and starts swapping to disk. Your brain does the same thing. When you exceed your capacity, things start falling out. You forget the edge case you were tracking. You lose the thread of why you made a decision three files ago. The system you were holding in your head collapses, and you have to rebuild it from scratch. But unlike a computer, you can't check your resource monitor or task manager app. You rarely know you've exceeded capacity until something drops.

This is different from load. Load is a property of the task. Capacity is a property of you, on this day, in this context. The same person can have vastly different capacity on a Monday morning after a quiet weekend versus a Thursday afternoon after three days of back to back meetings.

Senior engineers seem like they're seeing around corners. They're not. They're rotating the problem faster than you can track. That's **mental agility**, the ability to view a problem from multiple perspectives and shift between them fluidly. Can you think about this from the user's perspective, then the database's perspective, then the API perspective, then back to the user's? Can you hold the current implementation in your head while simultaneously reasoning about an alternative architecture? Agility is what separates "I think this will work" from "I can see three ways this breaks and two ways to prevent it."

**Cognitive endurance** is the ability to sustain high-load cognitive work over extended periods. Not in bursts. Continuously. This is the dimension I teased at the end of my last post, and the one I think is most underappreciated because the tasks that demand it most are often the ones that look the least productive from the outside.

I was on a team of four when we hired fifteen people all at once. Getting them up to speed while continuing to develop and ship was probably the highest-effort cognitive task of my career. For eighteen months, nearly every workday involved teaching, coaching, sharing context, reviewing code, creating diagrams and documentation, making and explaining design decisions, repeating things until they clicked, helping people find their place on the team, all while developing and shipping my own features. In a post-AI world, this may not sound like a lot. It was a lot.

The hardest part wasn't any individual day. It was that it didn't stop. Eighteen months of operating above your baseline, carrying context that only you hold, being the person the team turns to for both the problem definition and the solution. There were many times I felt like quitting, but I'm not a quitter and I love my team. I endured. And after those eighteen months, people began operating with more autonomy and high agency. They started contributing ideas that were sometimes better than my own. The investment paid off, but endurance is what it cost.

The call with thirty people where my brain collapsed? That happened during this period. I was the only person on the team who truly understood a complex problem. Being the sole carrier of that cognitive burden is difficult when you're the only person on the team, period. With over a dozen people depending on you to bring the right problem, the right solution, and all of the thought-work on how to deliver? The weight compounds. You show up every day with a smile, and then one day on a call your brain just quits mid-sentence.

Maybe this is normal for a seasoned engineering manager or director. I was a software developer thrown into the deep end of managing people and technical systems at the same time. Nobody told me the job was going to be an endurance event.

**Context switching cost** is the toll of moving between cognitive tasks. Every developer knows this one intuitively, but I think we underestimate how it interacts with the other four. Switching between two low-load tasks is cheap. Switching between two high-load tasks is devastating. You lose time by dumping everything out of your cognitive capacity and reloading a completely different system, with no guarantee you'll get the first one all back. During that eighteen-month stretch, I was context switching between teaching, designing, coding, and managing dozens of times a day. Each switch had a cost. The costs accumulated.

Then there's forced context switching, the kind you have no control over. You've loaded a full system into your brain. You're tracking multiple conditions and side effects, headphones on, deep in it. And someone taps you on the shoulder to tell you something completely unrelated. Everything you were holding just scattered. The interruption took five seconds. Rebuilding the mental state takes thirty minutes, if you can get it all back at all.

Random side note: This is the reason that despite having a multitude of apps installed on my phone, the only notifications I allow are phone calls and text messages. And when I'm deep in work, even those are disabled. It's self defense. Every notification is a forced context switch, and every forced context switch has a cognitive cost that the person/app sending the notification never has to pay.

## Cognitive proprioception

There's a sixth concept here that doesn't fit neatly into the five dimensions, but I think it might be the most important one: cognitive proprioception.

Physical proprioception is your body's awareness of where it is in space. You can close your eyes and touch your nose because your body knows where your hand is without looking. Cognitive proprioception is the same thing for your mental state. It's the ability to sense where you are cognitively at any given moment. Am I approaching my capacity ceiling? Is this task high-load or am I just tired? Do I need a break, or should I push through because I'm close to cracking the problem?

Early in my career I couldn't distinguish between those states. I'd push until I crashed, not realizing I'd been past my limit for an hour. Sometimes I'd spend all day trying to solve a problem, and only after reaching a breaking point, decide to take a walk outside. Then boom. As I'm on my walk, the solution I was looking for hits me. Barbara Oakley calls this "diffuse mode."

In 2016 after taking [Barbara Oakley's course, "Learning how to learn,"](https://www.coursera.org/learn/learning-how-to-learn) I increased my cognitive proprioception and cognitive awareness. Now I can usually feel when I'm approaching the edge, and I can make better decisions about how to spend what's left. That awareness doesn't prevent the crash, but it lets me see it coming and choose how to respond.

Proprioception develops with experience. So does raw capacity. A junior engineer's ceiling for holding system complexity is lower than a senior's, not because they're less intelligent, but because they haven't built the mental scaffolding yet. Years of loading systems into your head, tracing data flows, debugging across layers, that practice rewires how you reason about complexity. These cognitive properties aren't fixed. They're more like muscles. The more time you spend working them, the stronger they get and the more aware of them you become.

But even the strongest muscles have limits. The crash still comes. It just comes later, and you see it coming sooner.

## The invisible work

If you're leading a team and you don't have a model for cognitive work, you're going to mismanage it. You're going to look at someone's light commit history and assume they had an unproductive day. You're going to schedule a "quick" architecture review between two deep debugging sessions and not understand why both suffer. You're going to estimate tasks by output complexity when you should be estimating by cognitive load.

A senior engineer staring at the ceiling for two hours is sometimes the most productive person on the team. They're not slacking. They're loading a system into their head, rotating it, finding the fault line, and preparing to make a precise intervention that will save everyone else days of work. But if your productivity metrics only measure output, that engineer looks like they're doing nothing.

Here's the flip side: when a team does cognitive work *together*, something happens that can't happen alone. I've seen it in design sessions and architecture reviews where the whole team is genuinely thinking together, not presenting to each other, but instead building on each other's reasoning in real time. Someone throws out a undercooked idea, maybe even a bad one, and it sparks something in someone else. That spark leads to a direction nobody would have reached individually. The "trash" idea turns out to be the catalyst for the best idea in the room. And because everyone participated in the cognitive process of getting there, everyone feels individually invested. They understand the reasoning. They own the outcome. The quality of what gets built afterward is noticeably higher than when one person designs in isolation and hands down the plan.

I'm known at work for writing elegant code. But to me simplifying code isn't just an aesthetic choice, it's a capacity investment. Every abstraction that reduces cognitive load for the next reader is giving them back capacity they can spend on the actual problem instead of on understanding my code. The tolerance for complexity in a codebase should be inversely proportional to how many people need to touch it. It's not thats simple code is "better," but because every additional person who needs to reason about that code multiplies the cognitive cost.

## Cognitive currency

Here's a question I keep coming back to: should we be accounting for cognitive cost the way we account for time and effort?

When an engineer estimates a task, they're usually estimating how long it will take or how many story points it's "worth." But those estimates rarely capture what the task will actually cost the person doing it. A two-point story that requires holding three services in your head simultaneously costs more than a five-point story that's just tedious repetition. The points are higher on the second one, but the cognitive price is higher on the first. And the person who finishes the two-pointer will be more depleted than the person who finishes the five-pointer, which means whatever they pick up next will take longer than it should.

What if we had a way to talk about cognitive currency: how much cognitive capacity a task will cost, not just how much time? Not as a formal estimation framework, but as a shared language that a team can use when planning. "This ticket is low effort but high cognitive cost" is a sentence that would change how a team sequences work, protects focus time, and understands why someone needs a lighter afternoon after a heavy morning.

We track every other kind of engineering cost. Compute costs. Infrastructure costs. Opportunity costs. The one cost we never track is the cognitive cost to the humans doing the work. And it's the one that most directly determines quality, velocity, and retention.

## What changes

If teams actually adopted this language, three things would shift.

First, estimation gets more honest. When you can say "this is a high-load, high-endurance task" instead of just "this is hard," you can plan around it. You can protect the time. You can avoid scheduling a context-switch landmine in the middle of it.

Second, invisible work becomes visible. The four hours someone spent holding a system in their head to find a one line fix stops looking like an unproductive morning and starts looking like what it was... the most cognitively expensive work on the team that week.

Third, people get better at managing themselves. Once you have the vocabulary, you develop the proprioception. You start to notice when you're approaching your ceiling. You learn which kinds of work drain your endurance fastest. You stop pushing past the cliff because you finally have a name for what's happening on the other side of it.

We track lines of code, tickets closed, PRs merged. We don't track the cognitive cost of the work that produced them. I don't think we'll get better at managing cognitive work until we have better language for it. This is the vocabulary I wish I'd had ten years ago.

-----

*This is the second post in a series I'm writing about the cognitive side of software engineering. The first was [Slow cook your ideas](/writing/slow-cook-your-ideas), about using LLMs as thinking partners to develop stronger mental models before building. Next I want to explore what cognitive debt looks like at the team level, when an entire organization loses the ability to reason about its own systems.*
