02. Technical Architecture

Technology Stack

Core: HTML5, CSS3, Vanilla JavaScript (ES6 Modules).

Data: JSON Files (Static Content), LocalStorage (User Data).

Hosting: GitHub Pages / Firebase Hosting.

Constraint: Zero-Backend initially. All logic runs in the browser for privacy and zero cost.

The "Card Factory" Pattern

The entire app is based on a Content Management System (CMS) architecture.

JSON Data: Content (Meals, Workouts, Guides) is stored in text files (meals.json, study.json).

The Factory: A JavaScript function (renderCard()) reads this data and generates HTML cards dynamically.

The Benefit: We can add 1,000 new meals without writing a single line of new code.

The Modular File Structure

index.html: The Universal Shell (Header, Nav, Viewport).

style.css: The Global Design System (CSS Variables).

/js/app.js: The Orchestrator (Init, Router).

/js/store.js: State Management (User Profile, Wallet, Settings).

/js/modules/: Feature-specific logic (e.g., planner.js, budget.js).

/data/: The Content Packs (e.g., student_content.json).

Key Technical Decisions

No External APIs: We do not integrate with Garmin/MyFitnessPal directly to avoid OAuth complexity and cost. We use "Frictionless Manual Input" or simple CSV imports.

Offline First: The app must load and function without a server connection.

Theming Engine: CSS Variables (--primary-color, --font-main) allow instant re-branding for different clients (e.g., changing Blue to Red for a different College).
