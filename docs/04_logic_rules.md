04. Smart Reasoning Engine ("Fake AI")

The "Smart" features are powered by Heuristic Logic Rules. These act as the "Coach."

1. The Budget Coach

Input: User sets "Weekly Budget: £50".

Trigger: User logs expense. Remaining < £10.

Action:

Change Dashboard Mode to "Budget Emergency".

Filter Meal Browser to show ONLY "Cheap (£)" meals.

Push Notification: "Tight week? Here are 3 meals for under £1."

2. The Study Coach

Input: User adds "Exam" to Calendar (Date: 3 days away).

Action:

Inject "Revision Block" into Empty Planner Slots.

Suggest "Pomodoro Timer" card on Dashboard.

Disable "Gaming" or "Netflix" suggestions (if tracked).

3. The Leftovers Engine

Input: User checks "I have: Chicken, Rice" in the Kitchen.

Logic: Filter meals.json where ingredients includes "Chicken" AND "Rice".

Action: Show "Chicken Fried Rice" card.

4. The Athlete Coach (Context Aware)

Input: User toggles "Status: Injured (Knee)".

Logic: Filter exercises.json -> Exclude tags ["High Impact", "Jump", "Run"].

Action:

Lock "Sprints" card (Visual Padlock).

Highlight "Swimming" and "Upper Body" cards.

5. The "Vice Tax" (Dopamine)

Input: User clicks "Buy Coffee (£3.50)".

Logic: Wallet.Credits - 350.

Check: If Credits < 350 -> Block Transaction (Show "Go for a run first" modal).
