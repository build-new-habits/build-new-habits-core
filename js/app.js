/**
 * BUILD NEW HABITS CORE (v1.0)
 * The Universal Engine for AthleteOS, StudentHub, and SeniorSkills.
 */

const App = {
    // 1. CONFIGURATION (The Switch)
    config: {
        // CHANGE THIS TO SWITCH MODES: 'athlete', 'student', or 'senior'
        currentMode: 'athlete', 
        
        modes: {
            athlete: {
                title: "AthleteOS",
                color: "#10b981", // Emerald
                nav: [
                    { id: 'dash', icon: 'fa-layer-group', label: 'Dash' },
                    { id: 'gym', icon: 'fa-dumbbell', label: 'Gym' },
                    { id: 'food', icon: 'fa-utensils', label: 'Food' },
                    { id: 'mind', icon: 'fa-brain', label: 'Mind' },
                    { id: 'plan', icon: 'fa-calendar', label: 'Plan' }
                ]
            },
            student: {
                title: "Student Life Hub",
                color: "#3b82f6", // University Blue
                nav: [
                    { id: 'dash', icon: 'fa-home', label: 'Home' },
                    { id: 'cook', icon: 'fa-utensils', label: 'Cook' },
                    { id: 'money', icon: 'fa-sterling-sign', label: 'Budget' },
                    { id: 'life', icon: 'fa-book', label: 'Life Skills' }
                ]
            },
            senior: {
                title: "Tech Skills",
                color: "#f59e0b", // Warm Amber (High Contrast)
                nav: [
                    { id: 'home', icon: 'fa-home', label: 'Home' },
                    { id: 'learn', icon: 'fa-graduation-cap', label: 'Learn' },
                    { id: 'help', icon: 'fa-question-circle', label: 'Help' }
                ]
            }
        }
    },

    // 2. DATA STORE
    store: {
        data: {
            user: { name: "User", streak: 0, points: 0 },
            library: [] // Content loads here
        },
        init() {
            const saved = localStorage.getItem('bnh_core_v1');
            if (saved) this.data = JSON.parse(saved);
            
            // SIMULATED CONTENT LOADING (In Phase 2, this comes from a real JSON file)
            this.loadContentPack();
        },
        save() {
            localStorage.setItem('bnh_core_v1', JSON.stringify(this.data));
        },
        loadContentPack() {
            // Seeding data based on the selected mode
            const mode = App.config.currentMode;
            
            if (mode === 'athlete') {
                this.data.library = [
                    { title: "Morning Run", type: "gym", desc: "Zone 2 Cardio", tags: ["Health"] },
                    { title: "Salmon Bowl", type: "food", desc: "High Protein", tags: ["Fuel"] }
                ];
            } else if (mode === 'student') {
                this.data.library = [
                    { title: "Boil an Egg", type: "cook", desc: "Perfect soft boiled eggs.", tags: ["Basics"] },
                    { title: "Budget Tracker", type: "money", desc: "Track your loan.", tags: ["Finance"] }
                ];
            } else if (mode === 'senior') {
                this.data.library = [
                    { title: "Send a Photo", type: "learn", desc: "How to use WhatsApp.", tags: ["Comm"] },
                    { title: "Increase Text Size", type: "help", desc: "Make the screen easier to see.", tags: ["Settings"] }
                ];
            }
        }
    },

    // 3. UI RENDERER
    ui: {
        init() {
            // Apply Theme
            const mode = App.config.modes[App.config.currentMode];
            document.documentElement.style.setProperty('--primary', mode.color);
            document.getElementById('header-title').innerText = mode.title;
            
            // Build Nav
            const nav = document.getElementById('main-nav');
            nav.innerHTML = '';
            mode.nav.forEach(item => {
                nav.innerHTML += `
                    <button class="nav-item" onclick="App.router.go('${item.id}')">
                        <i class="fa-solid ${item.icon}"></i>
                        <span>${item.label}</span>
                    </button>
                `;
            });
            
            // Highlight first nav item
            if(nav.firstElementChild) nav.firstElementChild.classList.add('active');
        },

        renderCards(containerId, filterType) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            App.store.data.library.forEach(item => {
                // If filterType is null, show all. Else filter.
                if (filterType && item.type !== filterType) return;

                container.innerHTML += `
                <div class="card" onclick="this.classList.toggle('flipped')">
                    <div class="card-inner">
                        <div class="card-front" style="--card-color: var(--primary)">
                            <div class="card-title">${item.title}</div>
                            <p>${item.desc}</p>
                            <div class="card-tags">
                                ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                            </div>
                        </div>
                        <div class="card-back">
                            <h3>Actions</h3>
                            <button class="btn btn-primary" onclick="event.stopPropagation(); alert('Added!')">Add to Plan</button>
                        </div>
                    </div>
                </div>`;
            });
        },
        
        closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }
    },

    // 4. ROUTER
    router: {
        go(pageId) {
            const viewport = document.getElementById('app-viewport');
            viewport.innerHTML = `<h2>${pageId.toUpperCase()}</h2><div id="grid-${pageId}"></div>`;
            
            // Render Cards filtered by the page ID
            App.ui.renderCards(`grid-${pageId}`, pageId === 'dash' ? null : pageId);
            
            // Update Nav State
            document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
            // (Note: In a full build, we match the button ID to the page ID to highlight it)
        }
    }
};

// BOOTSTRAP
App.store.init();
App.ui.init();
App.router.go('dash');

// Expose App to window for HTML onclick events
window.App = App;
