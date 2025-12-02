Build New Habits: The Core Platform

Status: Phase 1 (Foundation) Complete. Ready for Phase 2.
Tech Stack: HTML5, CSS3, Vanilla JS (Modular ES6), LocalStorage.
Repository: build-new-habits-core
Live Link: https://github.com/build-new-habits/build-new-habits-core

1. The Business Strategy

We are building a single technical engine ("The Card Factory") that powers three distinct commercial products. The differentiator is that the software acts not just as a library, but as an Active Coach, using smart logic to guide behavior.

Product A: Student Life Hub (Commercial Priority)

Target: Colleges & Universities (B2B Site License).

Problem: Student dropout rates due to lack of life skills and executive dysfunction.

The "Smart" Angle: It doesn't just list recipes. It detects when a student is broke (budget input) or stressed (exam period) and actively pushes cheap, comfort meals or study timers.

Content: Budgeting, Cooking, Tenancy rights, Wellbeing.

Product B: AthleteOS (Personal Prototype)

Target: High-functioning adults/parents (B2C).

Problem: Static fitness plans that break when life gets busy.

The "Smart" Angle: It acts as a "Context-Aware Coach." If you log a high-sugar meal, it schedules a sprint. If you log back pain, it locks heavy lifting.

Content: Workouts, Macros, Injury Rehab, Mood Logging.

Product C: Senior Tech Skills (Social Impact)

Target: Local Councils / Libraries (Grant Funded).

Problem: Digital exclusion and fear of technology.

The "Smart" Angle: It detects frustration (repeated incorrect clicks or help requests) and simplifies the interface automatically.

Content: Large-text, step-by-step guides for tech literacy.

2. Phase Completion Log (What & Why)

A record of completed work and the strategic reasoning behind it.

✅ Phase 1: The Foundation (Foundation & Identity)

Status: Completed.

Feature Built

Technical Reason

Pedagogical/Psychological Reason

Modular Architecture (Store/Router/UI)

Allows one codebase to power 3 apps. Reduces technical debt.

Cognitive Load Management: Keeps the codebase distinct so we don't mix "Student" logic with "Athlete" logic.

The "Card Factory"

Enables infinite content expansion via simple JSON files.

Micro-Learning (Chunking): Information is presented in discrete, manageable cards to prevent overwhelm (ADHD friendly).

Design System (CSS Vars)

Instant re-branding (Dark Mode/University Colors).

Sensory Regulation: High contrast, low glare design reduces visual noise, aiding focus for neurodiverse users.

Context Engine

Stores user state locally without servers.

Privacy & Safety: Users feel safe knowing their health/finance data never leaves their device.

3. Master Product Development Plan

The roadmap for future development, linking features to learning outcomes.

🚧 Phase 2: The Command Center (Planning & Execution)

Goal: Move from "Viewing" to "Doing".
Current Status: Next to build.

Feature

Technical Implementation

Pedagogy & User Benefit

The Smart Planner

A drag-and-drop weekly grid. Logic to detect "Bad Combos" (e.g., Heavy Gym + Poor Sleep).

Executive Function Scaffolding: Offloads the mental energy of "scheduling" to the app. Prevents decision fatigue.

The "Add" Logic

A unified search bar (filter.js) that finds meals, habits, or tasks.

Just-in-Time Learning: Provides the right resource exactly when the user has the impulse to act.

Content Editor

A simple form UI to generate JSON data.

Empowerment: Allows non-coders (e.g., Teachers) to add content without fear of breaking the app.

🔜 Phase 3: The Soul (Emotional Regulation)

Goal: Integrate mental health as a data point.

Feature

Technical Implementation

Pedagogy & User Benefit

Mood Meter

Quadrant-based input (Energy vs. Pleasantness) using Marc Brackett's model.

Emotional Intelligence: Teaches the user to identify specific emotions, not just "good" or "bad."

Smart Recommendations

if (mood == 'anxious') recommend('breathwork').

Self-Regulation: Provides an immediate, healthy coping mechanism rather than impulsive scrolling/spending.

Dopamine Ledger

A virtual wallet tracking "Good Habits" vs "Spending".

Delayed Gratification: Gamifies the pause between "Urge" and "Action," retraining the dopamine reward loop.

🔮 Phase 4: The Commercial Polish (Scale)

Goal: Ready for B2B License sales.

Feature

Technical Implementation

Pedagogy & User Benefit

Data Export

JSON Export/Import buttons.

Ownership: The user owns their progress.

PWA Support

manifest.json for "Add to Home Screen".

Accessibility: Removes barriers to entry. No app store download needed.

White Label Config

A single config file to swap Logos/Names.

Institutional Identity: Colleges can brand it as their own, increasing student trust.

4. How to Resume Work

If starting a new AI session, paste this entire file and use this prompt:

"I am the Lead Developer of 'Build New Habits'. This README contains our Architecture, Strategy, and completed work. We are currently at the start of Phase 2. Please review the 'Master Product Development Plan' for Phase 2 and help me write the code for the Smart Planner Logic."
