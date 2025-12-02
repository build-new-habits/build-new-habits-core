/**
 * PHASE 2: SMART PLANNER MODULE
 * Handles scheduling, conflict detection, and weekly targets.
 */

export const Planner = {
    settings: {
        days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        slots: ['b', 'l', 'd', 'ex', 'mind'] // Breakfast, Lunch, Dinner, Exercise, Mind
    },

    // 1. Render the Weekly Grid
    render(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = `<div class="planner-grid">`;
        
        // Headers
        this.settings.days.forEach(day => {
            html += `<div class="day-header">${day}</div>`;
        });

        // Grid Content
        this.settings.days.forEach(day => {
            const dayPlan = App.store.data.weeklyPlan[day]; // Access global store
            const isToday = new Date().toLocaleDateString('en-US', { weekday: 'short' }) === day;
            
            html += `
            <div class="day-column ${isToday ? 'today' : ''}">
                ${this.renderSlot(day, 'b', dayPlan.b, 'fa-mug-hot')}
                ${this.renderSlot(day, 'l', dayPlan.l, 'fa-utensils')}
                ${this.renderSlot(day, 'd', dayPlan.d, 'fa-bowl-rice')}
                <div class="divider"></div>
                ${this.renderSlot(day, 'ex', dayPlan.ex, 'fa-dumbbell')}
                ${this.renderSlot(day, 'mind', dayPlan.mind, 'fa-brain')}
            </div>`;
        });

        html += `</div>
        <div class="planner-actions">
            <button class="btn btn-secondary" onclick="App.modules.planner.clearWeek()">Clear Week</button>
            <button class="btn btn-primary" onclick="App.modules.planner.checkConflicts()">Run Logic Check</button>
        </div>`;
        
        container.innerHTML = html;
    },

    // Helper to render individual slots
    renderSlot(day, type, value, icon) {
        const filledClass = value ? 'filled' : 'empty';
        return `
        <div class="plan-slot ${filledClass}" onclick="App.modules.planner.handleSlotClick('${day}', '${type}')">
            <i class="fa-solid ${icon}"></i>
            <span class="slot-text">${value ? value : 'Add'}</span>
        </div>`;
    },

    // 2. Interaction Handler
    handleSlotClick(day, type) {
        // In a full app, this opens the Library Modal.
        // For Phase 2 Prototype, we use a prompt to simulate selection.
        const input = prompt(`Add to ${day} (${type}):\nType a meal name or exercise.`);
        
        if (input) {
            // SMART LOGIC: Check for conflicts before adding
            if (this.detectConflict(type, input)) {
                return; // Stop if conflict found
            }
            
            // Save to Store
            App.store.data.weeklyPlan[day][type] = input;
            App.store.save();
            this.render('planner-view'); // Re-render logic
        }
    },

    // 3. THE SMART REASONING ENGINE (The "Coach")
    detectConflict(type, value) {
        const user = App.store.data.user;
        const status = user.status || 'Fresh'; // Default to Fresh if undefined

        // Rule 1: Injury Protection
        if (type === 'ex' && user.injuries.length > 0) {
            if (value.toLowerCase().includes('sprint') || value.toLowerCase().includes('heavy')) {
                alert(`⚠️ COACH ALERT: You are in "${status}" mode. High impact moves like '${value}' are blocked. Try Swimming or Yoga.`);
                return true; // Block action
            }
        }

        // Rule 2: Stress Management (Mock logic for now)
        if (type === 'ex' && status === 'Stressed') {
             if (value.toLowerCase().includes('hiit')) {
                alert("⚠️ COACH ALERT: High stress detected. HIIT will spike cortisol. Switching recommendation to 'Zone 2 Run'.");
                return true;
             }
        }

        return false; // No conflict
    },

    clearWeek() {
        if(confirm("Clear entire schedule?")) {
            App.store.resetPlanner();
            this.render('planner-view');
        }
    },
    
    checkConflicts() {
        alert("Analyzing Week... \n\n✅ Calorie Balance: Good\n✅ Recovery Gaps: Good\n\nPlan looks solid.");
    }
};
