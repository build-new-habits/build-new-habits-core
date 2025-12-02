Build New Habits: The Core Platform

Status: Phase 1 (Foundation)
Tech Stack: HTML5, CSS3, Vanilla JS (Modular ES6), LocalStorage.
Repository Type: Private Monorepo.

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

2. The Technical Architecture

We use a "White Label" strategy. The code is identical for all three apps; only the Configuration, Data, and Logic Rules change.

The File Structure

index.html: The Universal Shell (Header, Nav, Viewport).

style.css: The Design System (CSS Variables allow instant re-branding).

js/app.js: The Logic Core (Store, Router, Factory, UI).

data/: (Planned) JSON files containing the specific content packs.

Key Logic Features

Card Factory (The Interface): A system that generates UI cards from JSON data automatically.

Smart Reasoning Engine (The Coach):

This is the "Secret Sauce". It uses heuristic rules ("If X then Y") to mimic an AI Coach.

Logic Example: If (Stress > 7) AND (Energy < 3) THEN (Hide 'HIIT' AND Show 'Meditation').

It actively intervenes rather than passively displaying data.

Context Engine (The Identity): User profiles (Injuries, Budget, Role) determine the baseline rules.

Local Persistence: Data saves to the browser (localStorage), ensuring privacy and zero server costs.

3. The Roadmap

✅ Phase 1: The Foundation (Completed)

[x] Universal HTML Shell created.

[x] CSS Design System (Solid cards, Mobile responsive) created.

[x] JS Engine (Router + Store) created.

[x] "Mode Switcher" implemented (Can toggle between Athlete/Student modes).

🚧 Phase 2: The Logic (Next Up)

[ ] The Smart Planner: A drag-and-drop schedule that rejects bad combinations (e.g., Heavy legs after a poor sleep log).

[ ] The Editor: A form to add new Cards to the library without writing code.

[ ] The Filter: Search logic to find specific content instantly.

🔜 Phase 3: The Soul (Wellbeing)

[ ] Mood Meter: Quadrant-based emotional check-in that feeds the Reasoning Engine.

[ ] Dopamine Ledger: A virtual wallet tracking "Good Habits" vs "Spending".

4. How to Resume Work

If starting a new AI session, provide this prompt:
"We are building 'Build New Habits', a modular web app. I have the Phase 1 files (HTML/CSS/JS) set up. Crucially, this uses a Smart Reasoning Engine to act as a Coach. We are now ready to start Phase 2: Building the Smart Planner Logic that can handle these recommendations. Please help me code the planner.js module."
