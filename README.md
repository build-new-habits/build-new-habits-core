Build New Habits: The Core Platform

Status: Phase 1 (Foundation) Complete. Ready for Phase 2.
Tech Stack: HTML5, CSS3, Vanilla JS (Modular ES6), LocalStorage.
Repository: build-new-habits-core
Live Link: https://github.com/build-new-habits/build-new-habits-core

1. The Business Strategy

We are building a single technical engine ("The Card Factory") that powers three distinct commercial products. The differentiator is that the software acts not just as a library, but as an Active Coach, using smart logic ("Fake AI") to guide behavior.

Product A: Student Life Hub (The Flagship)

Target: Colleges & Universities (B2B Site License).

Problem: Student dropout rates due to lack of life skills (cooking, budgeting, loneliness).

The "Smart" Angle: "Just-in-Time Learning." It detects when a student is broke (budget input) or stressed (exam period) and actively pushes cheap, comfort meals or study timers.

Core Modules:

Study Planner: Pomodoro timer, Flashcards, AI Prompt Engineering guide.

Meals: Budget-filtered recipes, "Leftovers" logic, Shopping List generator.

Budgeting: Student Loan calculator, "Needs vs Wants" tracker.

Cleaning/DIY: "Job Cards" for tasks (e.g., "How to bleed a radiator").

Legal/Support: Rights guide (Tenancy, Wages) + Emergency Contacts.

Product B: AthleteOS (Personal Prototype)

Target: High-functioning adults/parents (B2C).

Problem: Static fitness plans that break when life gets busy.

The "Smart" Angle: It acts as a "Context-Aware Coach." If you log a high-sugar meal, it schedules a sprint. If you log back pain, it locks heavy lifting.

Content: Workouts, Macros, Injury Rehab, Mood Logging.

Product C: Senior Tech Skills (Social Impact)

Target: Local Councils / Libraries (Grant Funded).

Problem: Digital exclusion.

Content: Large-text, step-by-step guides for tech literacy (WhatsApp, Zoom, Scams).

2. Technical Architecture

We use a "White Label" strategy. The code is identical for all three apps; only the Configuration (config.js) and Data (data/*.json) change.

Key Features (Derived from "Project Plan")

The "Card Factory": Generates UI cards from JSON data. Supports "Flip" animation for details.

"Fake AI" Reasoning Engine: A logic layer that makes recommendations based on inputs (e.g., If Leftovers = Chicken THEN Show Chicken Curry).

Gamification Engine: Points, Badges, and Streaks tracked in store.js.

Admin Update System: All reference data (Minimum Wage, Legal Limits) is stored in a single reference.json file for instant updates.

3. The Roadmap

✅ Phase 1: The Foundation (Completed)

[x] Universal HTML Shell created.

[x] CSS Design System (Solid cards, Mobile responsive) created.

[x] JS Engine (Router + Store) created.

[x] "Mode Switcher" implemented (Can toggle between Athlete/Student modes).

🚧 Phase 2: The Command Center (Planning & Execution)

[ ] The Smart Planner: A weekly grid that handles Meals (Student) or Workouts (Athlete).

[ ] The "Add" Logic: A unified search bar (filter.js) that finds meals, habits, or tasks.

[ ] The Editor: A form to add new Cards to the library without writing code.

🔜 Phase 3: The Content Engines (Specifics)

[ ] Study Engine: Pomodoro Timer & Flashcard logic.

[ ] Budget Engine: "Envelope" budgeting logic.

[ ] Meal Engine: "Leftover" matching logic.

🔮 Phase 4: The Commercial Polish

[ ] Gamification: Badges for "First Meal Cooked," "Budget Kept."

[ ] Data Export: Download Shopping List (PDF/Text).

[ ] PWA Support: "Add to Home Screen" capability.

4. How to Resume Work

If starting a new AI session, paste this entire file and use this prompt:

"I am the Lead Developer of 'Build New Habits'. This README contains our Architecture, Strategy, and completed work. We are currently at the start of Phase 2. Please review the 'Master Product Development Plan' for Phase 2 and help me write the code for the Smart Planner Logic."
