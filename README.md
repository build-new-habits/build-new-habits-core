Build New Habits: The Core Platform

Status: Phase 1 (Foundation)
Tech Stack: HTML5, CSS3, Vanilla JS (Modular ES6), LocalStorage.
Repository Type: Private Monorepo.

1. The Business Strategy

We are building a single technical engine ("The Card Factory") that powers three distinct commercial products.

Product A: Student Life Hub (Commercial Priority)

Target: Colleges & Universities (B2B Site License).

Problem: Student dropout rates due to lack of life skills (cooking, budgeting, loneliness).

Solution: A "Digital Pocket Coach" providing scaffolded life advice.

Content: Budgeting, Cooking, Tenancy rights, Wellbeing.

Product B: AthleteOS (Personal Prototype)

Target: High-functioning adults/parents (B2C).

Problem: Burnout, injury, and static fitness plans that don't adapt to life.

Solution: A context-aware tracker that monetizes sweat (Vice Tax) and manages dopamine.

Content: Workouts, Macros, Injury Rehab, Mood Logging.

Product C: Senior Tech Skills (Social Impact)

Target: Local Councils / Libraries (Grant Funded).

Problem: Digital exclusion among seniors.

Solution: Large-text, step-by-step guides for tech literacy.

2. The Technical Architecture

We use a "White Label" strategy. The code is identical for all three apps; only the Configuration and Data change.

The File Structure

index.html: The Universal Shell (Header, Nav, Viewport).

style.css: The Design System (CSS Variables allow instant re-branding).

js/app.js: The Logic Core (Store, Router, Factory, UI).

data/: (Planned) JSON files containing the specific content packs.

Key Logic Features

Card Factory: A system that generates UI cards from JSON data automatically.

Context Engine: User profiles (Injuries, Budget, Role) determine what content is shown.

Local Persistence: Data saves to the browser (localStorage), ensuring privacy and zero server costs.

3. The Roadmap

✅ Phase 1: The Foundation (Completed)

[x] Universal HTML Shell created.

[x] CSS Design System (Solid cards, Mobile responsive) created.

[x] JS Engine (Router + Store) created.

[x] "Mode Switcher" implemented (Can toggle between Athlete/Student modes).

🚧 Phase 2: The Logic (Next Up)

[ ] The Planner: A drag-and-drop style weekly schedule that handles Meals, Workouts, and Tasks.

[ ] The Editor: A form to add new Cards to the library without writing code.

[ ] The Filter: Search logic to find specific content instantly.

🔜 Phase 3: The Soul (Wellbeing)

[ ] Mood Meter: Quadrant-based emotional check-in.

[ ] Dopamine Ledger: A virtual wallet tracking "Good Habits" vs "Spending".

4. How to Resume Work

If starting a new AI session, provide this prompt:
"We are building 'Build New Habits', a modular web app. I have the Phase 1 files (HTML/CSS/JS) set up. We are using a 'Card Factory' pattern where JSON data generates the UI. We are now ready to start Phase 2: Building the Weekly Planner Logic. Please help me code the planner.js module."
