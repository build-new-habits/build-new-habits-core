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

Study Planner: * Features: Pomodoro timer, Flashcards (create/save), Spaced Repetition Tracker, Time Management Tips, Study Environment Hacks.

AI Learning Hub: Guides on using AI ethically (Research Assistant, Essay Coach, Exam Practice Partner) with templates and "boundary" warnings.

Timetable: Drag-and-drop schedule (Day/Week/Term view), Learning Goals with micro-detail options.

Referencing: Harvard Referencing Guide with generators for Books, Journals, Websites.

Meals: * Browsing: Filter by Meal Type, Budget (£/££/£££), Dietary (Vegan, Halal, etc.).

Smart Logic: "Leftovers" calculator (suggests recipes based on unused ingredients).

Meal Planner: Weekly view, auto-generated Shopping List (aggregating quantities, e.g., "Buy 500g butter" instead of 2x 250g).

Card Design: Front shows Cost/Calories/Rating; Back shows Portion/Nutrients/Complexity/Instructions.

Budgeting: * Calculators: Monthly Budget (Income vs Expenses), "Needs vs Wants vs Savings" (50/30/20 rule).

Goal Tracking: Savings Pots (Emergency Fund, Holiday, Laptop) with progress bars.

Education: Articles on Student Loans, Credit Scores, Pensions.

Cleaning/DIY: * Job Cards: Task-based guides (e.g., "Mop Kitchen", "Bleed Radiator") filtered by Room/Difficulty.

Routine: Scheduler for cleaning tasks (Today/Week/4-Week view).

Find Shops: Local store locator (Supermarkets, Hardware, Post Office) via Google Maps integration.

Legal/Support: * Rights Guide: "Flip and Expand" cards for Tenancy, Wages, Consumer Rights.

Emergency: One-tap access to 999, NHS 111, Samaritans, Campus Security.

Uni Essentials: Packing checklists (Bedroom, Kitchen, Study) with "Reset" function.

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

Design Style: "Option B" - Cards with coloured headers for categories.

Flip Interaction: "Option A" - Click anywhere to flip.

"Fake AI" Reasoning Engine: A logic layer that makes recommendations based on inputs (e.g., If Leftovers = Chicken THEN Show Chicken Curry).

Gamification Engine: * Mechanics: Points, Badges, Streaks.

Triggers: "First Meal Cooked", "Budget Kept", "All Week Complete" celebration animations.

Admin Update System: All reference data (Minimum Wage, Legal Limits) is stored in a single reference.json file for instant updates via a simple admin interface or direct file edit.

Accessibility:

Standard: Level AAA (WCAG).

Features: High contrast modes, Screen reader compatibility, Resizable text.

3. The Roadmap

✅ Phase 1: The Foundation (Completed)

$$x$$

 Universal HTML Shell created.

$$x$$

 CSS Design System (Solid cards, Mobile responsive) created.

$$x$$

 JS Engine (Router + Store) created.

$$x$$

 "Mode Switcher" implemented (Can toggle between Athlete/Student modes).

🚧 Phase 2: The Command Center (Planning & Execution)

$$$$

 The Smart Planner: A weekly grid that handles Meals (Student) or Workouts (Athlete).

Requirement: Must support dragging items, clearing the week, and saving "Regular Weeks" (Templates).

$$$$

 The "Add" Logic: A unified search bar (filter.js) that finds meals, habits, or tasks.

$$$$

 The Editor: A form to add new Cards to the library without writing code.

🔜 Phase 3: The Content Engines (Specifics)

$$$$

 Study Engine: Pomodoro Timer & Flashcard logic.

$$$$

 Budget Engine: "Envelope" budgeting logic with visual progress bars.

$$$$

 Meal Engine: "Leftover" matching logic and Shopping List aggregator.

$$$$

 Legal Engine: "Flip and Expand" dynamic window for detailed rights info.

🔮 Phase 4: The Commercial Polish

$$$$

 Gamification: Badges for "First Meal Cooked," "Budget Kept."

$$$$

 Data Export: Download Shopping List (PDF/Text).

$$$$

 PWA Support: "Add to Home Screen" capability.

4. How to Resume Work

If starting a new AI session, paste this entire file and use this prompt:

"I am the Lead Developer of 'Build New Habits'. This README contains our Architecture, Strategy, and completed work. We are currently at the start of Phase 2. Please review the 'Master Product Development Plan' for Phase 2 and help me write the code for the Smart Planner Logic."
