/* =========================================
   TEEN MONEY
   COMPLETE JAVASCRIPT
========================================= */


/* =========================================
   20 MONEY IDEAS
========================================= */

const moneyIdeas = [

    {
        name: "Dog Walking",
        icon: "🐕",
        category: "local",
        difficulty: 2,
        time: 40,
        timeText: "30–45 min",
        earnings: 15,
        earningsText: "10–20 kr+",
        description:
            "Walk dogs for people you know or trusted neighbors.",
        details:
            "Dog walking can be a simple way to earn money while getting some exercise. Start with people your family knows and agree on the price beforehand."
    },

    {
        name: "Grocery Help",
        icon: "🛒",
        category: "local",
        difficulty: 2,
        time: 30,
        timeText: "Around 30 min",
        earnings: 20,
        earningsText: "10–30 kr+",
        description:
            "Help someone with simple grocery tasks.",
        details:
            "You could help carry, organize or put away groceries for people you know. Agree on the task and payment beforehand."
    },

    {
        name: "Car Washing",
        icon: "🚗",
        category: "local",
        difficulty: 3,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 40,
        earningsText: "25–60 kr+",
        description:
            "Wash cars for people you know.",
        details:
            "Offer basic car washing to family, friends or trusted neighbors. Always ask before using their equipment."
    },

    {
        name: "Lawn Mowing",
        icon: "🌱",
        category: "local",
        difficulty: 3,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 50,
        earningsText: "30–80 kr+",
        description:
            "Help people with basic garden work.",
        details:
            "You can offer simple garden jobs to people you know. Only use equipment you are allowed and able to use safely."
    },

    {
        name: "Babysitting",
        icon: "👶",
        category: "local",
        difficulty: 6,
        time: 120,
        timeText: "2+ hours",
        earnings: 80,
        earningsText: "50–150 kr+",
        description:
            "Help trusted families look after children.",
        details:
            "Babysitting is a responsibility. Start with families your parents or guardians know and make sure everyone agrees on the arrangements."
    },

    {
        name: "Tutoring",
        icon: "📚",
        category: "skills",
        difficulty: 5,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 60,
        earningsText: "40–100 kr+",
        description:
            "Help younger students with subjects you know.",
        details:
            "If you are good at a school subject, you could help younger students understand it."
    },

    {
        name: "Video Editing",
        icon: "🎬",
        category: "creative",
        difficulty: 6,
        time: 120,
        timeText: "1–3 hours",
        earnings: 100,
        earningsText: "50–300 kr+",
        description:
            "Edit videos, Shorts and social media clips.",
        details:
            "Learn an editing program and make example projects. A portfolio can help demonstrate what you can do."
    },

    {
        name: "Graphic Design",
        icon: "🎨",
        category: "creative",
        difficulty: 6,
        time: 120,
        timeText: "1–3 hours",
        earnings: 100,
        earningsText: "50–300 kr+",
        description:
            "Create thumbnails, posters and graphics.",
        details:
            "Practice making thumbnails, posters and simple graphics. Build examples before offering your work."
    },

    {
        name: "Content Creation",
        icon: "📱",
        category: "online",
        difficulty: 7,
        time: 180,
        timeText: "2–4 hours",
        earnings: 20,
        earningsText: "Varies",
        description:
            "Create videos around something you enjoy.",
        details:
            "You can build a channel around gaming, football, art, education or another interest. Earnings are not guaranteed and usually take time."
    },

    {
        name: "Photography",
        icon: "📸",
        category: "creative",
        difficulty: 5,
        time: 90,
        timeText: "1–2 hours",
        earnings: 80,
        earningsText: "40–200 kr+",
        description:
            "Take photos for projects or events.",
        details:
            "Practice photography and create a small portfolio. Always get permission before photographing people."
    },

    {
        name: "Pet Sitting",
        icon: "🐈",
        category: "local",
        difficulty: 3,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 50,
        earningsText: "30–100 kr+",
        description:
            "Help trusted people look after their pets.",
        details:
            "Pet sitting can involve feeding, checking on or spending time with pets while their owners are away."
    },

    {
        name: "Cleaning Help",
        icon: "🧹",
        category: "local",
        difficulty: 3,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 50,
        earningsText: "30–100 kr+",
        description:
            "Help with simple household cleaning.",
        details:
            "Offer basic cleaning help to people you know. Agree on exactly what you will do before starting."
    },

    {
        name: "Tech Help",
        icon: "💻",
        category: "skills",
        difficulty: 5,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 70,
        earningsText: "40–150 kr+",
        description:
            "Help people with basic technology.",
        details:
            "If you understand computers or phones well, you can help with simple tasks such as settings or basic software."
    },

    {
        name: "Website Design",
        icon: "🌐",
        category: "online",
        difficulty: 8,
        time: 240,
        timeText: "3–6 hours",
        earnings: 200,
        earningsText: "100–500 kr+",
        description:
            "Build simple websites.",
        details:
            "Learn HTML, CSS and JavaScript and practice by creating your own websites."
    },

    {
        name: "Social Media Help",
        icon: "📲",
        category: "online",
        difficulty: 6,
        time: 120,
        timeText: "1–3 hours",
        earnings: 120,
        earningsText: "50–300 kr+",
        description:
            "Help a small business with social media content.",
        details:
            "Learn how social media works and practice creating posts, captions or simple graphics."
    },

    {
        name: "Sell Crafts",
        icon: "🧶",
        category: "creative",
        difficulty: 5,
        time: 120,
        timeText: "1–3 hours",
        earnings: 60,
        earningsText: "Varies",
        description:
            "Create and sell handmade items with adult help.",
        details:
            "Make something you enjoy and explore selling it with a parent or guardian helping with accounts and payments."
    },

    {
        name: "Carrying Help",
        icon: "📦",
        category: "local",
        difficulty: 2,
        time: 30,
        timeText: "Around 30 min",
        earnings: 30,
        earningsText: "15–50 kr+",
        description:
            "Help trusted people with light carrying jobs.",
        details:
            "Offer help with light items. Do not attempt to carry anything too heavy or dangerous."
    },

    {
        name: "Sell Old Items",
        icon: "♻️",
        category: "local",
        difficulty: 3,
        time: 60,
        timeText: "Around 1 hour",
        earnings: 80,
        earningsText: "Varies",
        description:
            "Sell things you no longer need with adult help.",
        details:
            "Look through your old belongings and ask a parent or guardian about selling things you no longer use."
    },

    {
        name: "Art Commissions",
        icon: "🖌️",
        category: "creative",
        difficulty: 6,
        time: 120,
        timeText: "1–3 hours",
        earnings: 80,
        earningsText: "20–300 kr+",
        description:
            "Create drawings or digital artwork.",
        details:
            "Practice your art and build a portfolio of examples before offering custom artwork."
    },

    {
        name: "Coding",
        icon: "👨‍💻",
        category: "skills",
        difficulty: 9,
        time: 240,
        timeText: "3–6 hours",
        earnings: 200,
        earningsText: "Varies",
        description:
            "Learn programming and build useful projects.",
        details:
            "HTML, CSS, JavaScript and other programming skills can help you create websites, games and tools."
    }

];


/* =========================================
   START
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderIdeas();

    setupFilters();

    setupFavorites();

    setupModal();

    setupRandomIdea();

    setupPlanner();

    setupCalculator();

    setupSavingsGoal();

    setupQuiz();

    setupDarkMode();

    setupXP();

});


/* =========================================
   ELEMENT HELPERS
========================================= */

function get(id) {
    return document.getElementById(id);
}


/* =========================================
   RENDER IDEAS
========================================= */

function renderIdeas() {

    const grid = get("ideasGrid");

    grid.innerHTML = "";

    moneyIdeas.forEach((idea, index) => {

        const card = document.createElement("article");

        card.className = "idea-card";

        card.dataset.index = index;

        card.innerHTML = `

            <div class="idea-icon">
                ${idea.icon}
            </div>

            <div class="idea-top">

                <span class="category">
                    ${idea.category.toUpperCase()}
                </span>

                <button
                    class="favorite"
                    data-index="${index}"
                    type="button"
                    aria-label="Favorite ${idea.name}"
                >
                    ☆
                </button>

            </div>

            <h3>
                ${idea.name}
            </h3>

            <p>
                ${idea.description}
            </p>

            <div class="idea-info">

                <span>
                    ⭐ Difficulty ${idea.difficulty}/10
                </span>

                <span>
                    ⏱️ ${idea.timeText}
                </span>

                <span>
                    💵 ${idea.earningsText}
                </span>

            </div>

            <button
                class="learn-more"
                data-index="${index}"
                type="button"
            >
                Learn More →
            </button>
        `;

        grid.appendChild(card);
    });

    get("ideaCount").textContent = moneyIdeas.length;

    updateFavoriteButtons();

    setupCardButtons();
}


/* =========================================
   CARD BUTTONS
========================================= */

function setupCardButtons() {

    document.querySelectorAll(".learn-more").forEach(button => {

        button.addEventListener("click", () => {

            const idea =
                moneyIdeas[Number(button.dataset.index)];

            openModal(idea);

            addXP(5);
        });

    });


    document.querySelectorAll(".favorite").forEach(button => {

        button.addEventListener("click", () => {

            const index =
                Number(button.dataset.index);

            toggleFavorite(index);

        });

    });

}


/* =========================================
   FAVORITES
========================================= */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem("teenMoneyFavorites")
        ) || [];

    } catch {

        return [];

    }
}


function saveFavorites(favorites) {

    localStorage.setItem(
        "teenMoneyFavorites",
        JSON.stringify(favorites)
    );
}


function toggleFavorite(index) {

    const favorites = getFavorites();

    if (favorites.includes(index)) {

        const position =
            favorites.indexOf(index);

        favorites.splice(position, 1);

    } else {

        favorites.push(index);

        addXP(10);
    }

    saveFavorites(favorites);

    updateFavoriteButtons();
}


function updateFavoriteButtons() {

    const favorites = getFavorites();

    document.querySelectorAll(".favorite").forEach(button => {

        const index =
            Number(button.dataset.index);

        if (favorites.includes(index)) {

            button.textContent = "★";
            button.classList.add("active");

        } else {

            button.textContent = "☆";
            button.classList.remove("active");

        }

    });
}


function setupFavorites() {
    updateFavoriteButtons();
}


/* =========================================
   FILTERS
========================================= */

function setupFilters() {

    get("searchInput")
        .addEventListener("input", filterIdeas);

    get("categoryFilter")
        .addEventListener("change", filterIdeas);

    get("difficultyFilter")
        .addEventListener("change", filterIdeas);

    get("sortSelect")
        .addEventListener("change", filterIdeas);

    get("clearFilters")
        .addEventListener("click", () => {

            get("searchInput").value = "";
            get("categoryFilter").value = "all";
            get("difficultyFilter").value = "all";
            get("sortSelect").value = "default";

            filterIdeas();
        });
}


function filterIdeas() {

    const search =
        get("searchInput")
            .value
            .toLowerCase()
            .trim();

    const category =
        get("categoryFilter").value;

    const difficulty =
        get("difficultyFilter").value;

    const sort =
        get("sortSelect").value;


    let results = moneyIdeas.filter(idea => {

        const searchable =
            `${idea.name} ${idea.description} ${idea.category}`
                .toLowerCase();

        const searchMatch =
            searchable.includes(search);

        const categoryMatch =
            category === "all" ||
            idea.category === category;

        const difficultyMatch =
            difficulty === "all" ||
            idea.difficulty === Number(difficulty);

        return (
            searchMatch &&
            categoryMatch &&
            difficultyMatch
        );
    });


    /* SORT */

    if (sort === "difficulty-low") {

        results.sort(
            (a, b) =>
                a.difficulty - b.difficulty
        );

    }

    if (sort === "difficulty-high") {

        results.sort(
            (a, b) =>
                b.difficulty - a.difficulty
        );

    }

    if (sort === "time-low") {

        results.sort(
            (a, b) =>
                a.time - b.time
        );

    }

    if (sort === "time-high") {

        results.sort(
            (a, b) =>
                b.time - a.time
        );

    }

    if (sort === "earnings-low") {

        results.sort(
            (a, b) =>
                a.earnings - b.earnings
        );

    }

    if (sort === "earnings-high") {

        results.sort(
            (a, b) =>
                b.earnings - a.earnings
        );

    }


    const grid = get("ideasGrid");

    grid.innerHTML = "";

    results.forEach(idea => {

        const originalIndex =
            moneyIdeas.indexOf(idea);

        const card =
            createIdeaCard(
                idea,
                originalIndex
            );

        grid.appendChild(card);
    });


    get("resultsText").textContent =
        `Showing ${results.length} of ${moneyIdeas.length} ideas`;


    get("noResults").style.display =
        results.length === 0
            ? "block"
            : "none";


    setupCardButtons();

    updateFavoriteButtons();
}


/* =========================================
   CREATE CARD
========================================= */

function createIdeaCard(idea, index) {

    const card =
        document.createElement("article");

    card.className = "idea-card";

    card.innerHTML = `

        <div class="idea-icon">
            ${idea.icon}
        </div>

        <div class="idea-top">

            <span class="category">
                ${idea.category.toUpperCase()}
            </span>

            <button
                class="favorite"
                data-index="${index}"
                type="button"
            >
                ☆
            </button>

        </div>

        <h3>
            ${idea.name}
        </h3>

        <p>
            ${idea.description}
        </p>

        <div class="idea-info">

            <span>
                ⭐ Difficulty ${idea.difficulty}/10
            </span>

            <span>
                ⏱️ ${idea.timeText}
            </span>

            <span>
                💵 ${idea.earningsText}
            </span>

        </div>

        <button
            class="learn-more"
            data-index="${index}"
            type="button"
        >
            Learn More →
        </button>
    `;

    return card;
}


/* =========================================
   MODAL
========================================= */

function setupModal() {

    get("closeModal")
        .addEventListener(
            "click",
            closeModal
        );

    get("modalDone")
        .addEventListener(
            "click",
            closeModal
        );

    get("modal")
        .addEventListener("click", event => {

            if (
                event.target ===
                get("modal")
            ) {
                closeModal();
            }

        });

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeModal();
            }

        }
    );
}


function openModal(idea) {

    get("modalIcon").textContent =
        idea.icon;

    get("modalTitle").textContent =
        idea.name;

    get("modalDescription").textContent =
        idea.details;

    get("modalDifficulty").textContent =
        `⭐ Difficulty ${idea.difficulty}/10`;

    get("modalTime").textContent =
        `⏱️ ${idea.timeText}`;

    get("modalEarnings").textContent =
        `💵 ${idea.earningsText}`;

    get("modal").classList.add("show");
}


function closeModal() {

    get("modal").classList.remove("show");
}


/* =========================================
   RANDOM IDEA
========================================= */

function setupRandomIdea() {

    get("randomBtn")
        .addEventListener("click", () => {

            const index =
                Math.floor(
                    Math.random() *
                    moneyIdeas.length
                );

            const idea =
                moneyIdeas[index];

            openModal(idea);

            addXP(5);
        });
}


/* =========================================
   MONEY PLANNER
========================================= */

function setupPlanner() {

    const goal =
        get("plannerGoal");

    const weekly =
        get("plannerWeekly");

    goal.addEventListener(
        "input",
        updatePlanner
    );

    weekly.addEventListener(
        "input",
        updatePlanner
    );

    updatePlanner();
}


function updatePlanner() {

    const goal =
        Number(get("plannerGoal").value);

    const weekly =
        Number(get("plannerWeekly").value);


    if (
        !Number.isFinite(goal) ||
        !Number.isFinite(weekly) ||
        goal <= 0 ||
        weekly <= 0
    ) {

        get("plannerWeeks").textContent =
            "Enter valid amounts";

        get("plannerExplanation").textContent =
            "Enter a savings goal and weekly earnings.";

        return;
    }


    const weeks =
        Math.ceil(goal / weekly);


    get("plannerWeeks").textContent =
        `${weeks} week${weeks === 1 ? "" : "s"}`;


    get("plannerExplanation").textContent =
        `At ${formatMoney(weekly)} per week, a ${formatMoney(goal)} goal would take about ${weeks} week${weeks === 1 ? "" : "s"}.`;

}


/* =========================================
   CALCULATOR
========================================= */

function setupCalculator() {

    get("calcAmount")
        .addEventListener(
            "input",
            updateCalculator
        );

    get("calcJobs")
        .addEventListener(
            "input",
            updateCalculator
        );

    updateCalculator();
}


function updateCalculator() {

    const amount =
        Number(get("calcAmount").value) || 0;

    const jobs =
        Number(get("calcJobs").value) || 0;

    const weekly =
        amount * jobs;

    const monthly =
        weekly * 4;


    get("weeklyResult").textContent =
        formatMoney(weekly);


    get("monthlyResult").textContent =
        `About ${formatMoney(monthly)} per month`;
}


/* =========================================
   SAVINGS GOAL
========================================= */

function setupSavingsGoal() {

    const savedGoal =
        localStorage.getItem(
            "teenMoneyGoal"
        );

    const savedMoney =
        localStorage.getItem(
            "teenMoneySaved"
        );


    if (savedGoal !== null) {
        get("goalAmount").value =
            savedGoal;
    }

    if (savedMoney !== null) {
        get("savedAmount").value =
            savedMoney;
    }


    get("goalAmount")
        .addEventListener(
            "input",
            updateSavingsGoal
        );

    get("savedAmount")
        .addEventListener(
            "input",
            updateSavingsGoal
        );


    updateSavingsGoal();
}


function updateSavingsGoal() {

    const goal =
        Number(get("goalAmount").value) || 0;

    const saved =
        Number(get("savedAmount").value) || 0;


    if (goal <= 0) {

        get("goalProgressBar")
            .style.width = "0%";

        get("goalText").textContent =
            "0 kr saved";

        get("goalPercent").textContent =
            "0%";

        return;
    }


    const percentage =
        Math.min(
            Math.max(
                (saved / goal) * 100,
                0
            ),
            100
        );


    get("goalProgressBar")
        .style.width =
        `${percentage}%`;


    get("goalText").textContent =
        `${formatMoney(saved)} saved`;


    get("goalPercent").textContent =
        `${Math.round(percentage)}%`;


    localStorage.setItem(
        "teenMoneyGoal",
        goal
    );

    localStorage.setItem(
        "teenMoneySaved",
        saved
    );
}


/* =========================================
   QUIZ
========================================= */

let quizCategory = null;
let quizDifficulty = null;


function setupQuiz() {

    document
        .querySelectorAll(
            "#categoryOptions button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            "#categoryOptions button"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "selected"
                            )
                        );

                    button.classList.add(
                        "selected"
                    );

                    quizCategory =
                        button.dataset.value;
                }
            );

        });


    document
        .querySelectorAll(
            "#difficultyOptions button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            "#difficultyOptions button"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "selected"
                            )
                        );

                    button.classList.add(
                        "selected"
                    );

                    quizDifficulty =
                        Number(
                            button.dataset.value
                        );
                }
            );

        });


    get("quizButton")
        .addEventListener(
            "click",
            showQuizResult
        );
}


function showQuizResult() {

    const result =
        get("quizResult");


    if (
        quizCategory === null ||
        quizDifficulty === null
    ) {

        result.textContent =
            "Please answer both questions first.";

        return;
    }


    const matches =
        moneyIdeas.filter(idea => {

            return (
                idea.category ===
                quizCategory &&
                idea.difficulty <=
                quizDifficulty
            );

        });


    if (matches.length === 0) {

        result.textContent =
            "No perfect matches found. Try the Medium or Hard option.";

        return;
    }


    const topMatches =
        matches.slice(0, 3);


    result.innerHTML = `
        <strong>🎯 Your best matches:</strong>
        <br><br>
        ${topMatches
            .map(idea =>
                `${idea.icon} ${idea.name}`
            )
            .join("<br>")}
    `;


    addXP(25);
}


/* =========================================
   DARK MODE
========================================= */

function setupDarkMode() {

    const saved =
        localStorage.getItem(
            "teenMoneyDark"
        );


    if (saved === "true") {

        document.body.classList.add("dark");

        get("darkModeBtn").textContent =
            "☀️";
    }


    get("darkModeBtn")
        .addEventListener(
            "click",
            () => {

                document.body
                    .classList
                    .toggle("dark");


                const isDark =
                    document.body
                        .classList
                        .contains("dark");


                localStorage.setItem(
                    "teenMoneyDark",
                    isDark
                );


                get("darkModeBtn")
                    .textContent =
                    isDark
                        ? "☀️"
                        : "🌙";


                addXP(5);
            }
        );
}


/* =========================================
   XP
========================================= */

let xp = 0;


function setupXP() {

    xp =
        Number(
            localStorage.getItem(
                "teenMoneyXP"
            )
        ) || 0;

    updateXP();
}


function addXP(amount) {

    xp += amount;

    localStorage.setItem(
        "teenMoneyXP",
        xp
    );

    updateXP();
}


function updateXP() {

    const level =
        Math.floor(xp / 100) + 1;

    const currentXP =
        xp % 100;


    get("userLevel").textContent =
        level;

    get("xpText").textContent =
        `${currentXP} / 100 XP`;

    get("xpBar").style.width =
        `${currentXP}%`;
}


/* =========================================
   MONEY FORMAT
========================================= */

function formatMoney(amount) {

    return (
        Math.round(amount)
            .toLocaleString("da-DK") +
        " kr"
    );
}
