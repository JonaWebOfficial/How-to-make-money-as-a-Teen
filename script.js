/* ==========================================
   TEEN MONEY - 20 IDEAS
========================================== */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* ==========================================
   JOB DATABASE
========================================== */

const jobs = {

    "Dog Walking": {
        icon: "🐶",
        category: "Local",
        difficulty: "2/10",
        time: "30–45 minutes",
        money: "$10–$20",
        description: "Walk dogs for people in your neighborhood.",
        steps: [
            "Start with people you or your family know.",
            "Agree on the price and time beforehand.",
            "Follow the owner's instructions.",
            "Be responsible and respectful."
        ]
    },

    "Car Washing": {
        icon: "🚗",
        category: "Local",
        difficulty: "3/10",
        time: "1–2 hours",
        money: "$15–$30",
        description: "Wash cars for people you know or in your area.",
        steps: [
            "Ask someone if they need their car washed.",
            "Agree on the price beforehand.",
            "Ask before using equipment.",
            "Clean up when finished."
        ]
    },

    "Gardening": {
        icon: "🌱",
        category: "Local",
        difficulty: "4/10",
        time: "1–3 hours",
        money: "$10–$30",
        description: "Help people with simple gardening jobs.",
        steps: [
            "Ask people you know if they need help.",
            "Agree on exactly what you will do.",
            "Agree on payment beforehand.",
            "Ask for help with unfamiliar equipment."
        ]
    },

    "Cleaning": {
        icon: "🧹",
        category: "Local",
        difficulty: "3/10",
        time: "1–2 hours",
        money: "$10–$30",
        description: "Help people with simple cleaning tasks.",
        steps: [
            "Start with people you know.",
            "Agree on the job beforehand.",
            "Ask which cleaning products you can use.",
            "Leave the area tidy."
        ]
    },

    "Grocery Help": {
        icon: "🛒",
        category: "Local",
        difficulty: "2/10",
        time: "Around 1 hour",
        money: "$10–$20",
        description: "Help someone with simple grocery-related tasks.",
        steps: [
            "Start with family, friends or trusted neighbors.",
            "Agree on exactly what is needed.",
            "Keep receipts if money is involved.",
            "Never share unnecessary personal information."
        ]
    },

    "Helping With Moving": {
        icon: "📦",
        category: "Local",
        difficulty: "5/10",
        time: "2–4 hours",
        money: "$20–$50",
        description: "Help with simple moving and organizing tasks.",
        steps: [
            "Only help with tasks appropriate for you.",
            "Avoid lifting anything too heavy.",
            "Agree on the job beforehand.",
            "Ask an adult for help when needed."
        ]
    },

    "Pet Sitting": {
        icon: "🐱",
        category: "Local",
        difficulty: "3/10",
        time: "1–2+ hours",
        money: "$15–$40",
        description: "Look after pets for people you know.",
        steps: [
            "Start with trusted people.",
            "Learn the pet's routine.",
            "Follow the owner's instructions.",
            "Contact the owner if something goes wrong."
        ]
    },

    "Video Editing": {
        icon: "🎬",
        category: "Creative",
        difficulty: "6/10",
        time: "2–5 hours",
        money: "$20–$100",
        description: "Edit videos for yourself or other creators.",
        steps: [
            "Learn the basics of an editing program.",
            "Practice with your own videos.",
            "Build a small portfolio.",
            "Improve your editing skills."
        ]
    },

    "Graphic Design": {
        icon: "🎨",
        category: "Creative",
        difficulty: "6/10",
        time: "2–4 hours",
        money: "$20–$100",
        description: "Create graphics such as posters, logos and social media designs.",
        steps: [
            "Learn basic design principles.",
            "Practice making different designs.",
            "Create example projects.",
            "Build a portfolio."
        ]
    },

    "Photography": {
        icon: "📸",
        category: "Creative",
        difficulty: "5/10",
        time: "1–3 hours",
        money: "$20–$80",
        description: "Practice photography and create useful images.",
        steps: [
            "Learn basic photography.",
            "Practice with subjects you have permission to photograph.",
            "Edit your photos.",
            "Build a portfolio."
        ]
    },

    "YouTube Channel": {
        icon: "▶️",
        category: "Online",
        difficulty: "9/10",
        time: "Many hours",
        money: "Varies",
        description: "Create videos and build an audience over time.",
        steps: [
            "Choose a topic you enjoy.",
            "Create useful or entertaining videos.",
            "Learn basic editing.",
            "Improve your thumbnails and titles.",
            "Protect your personal information."
        ]
    },

    "Making Roblox Games": {
        icon: "🎮",
        category: "Gaming",
        difficulty: "8/10",
        time: "Many hours",
        money: "Varies",
        description: "Learn game development and build your own Roblox games.",
        steps: [
            "Learn Roblox Studio.",
            "Build a small project.",
            "Learn Lua scripting.",
            "Test your game.",
            "Improve it over time."
        ]
    },

    "Website Design": {
        icon: "🌐",
        category: "Online",
        difficulty: "7/10",
        time: "Several hours",
        money: "$30–$200+",
        description: "Learn HTML, CSS and JavaScript and build websites.",
        steps: [
            "Learn HTML.",
            "Learn CSS.",
            "Learn basic JavaScript.",
            "Build practice websites.",
            "Create a portfolio."
        ]
    },

    "Writing": {
        icon: "✍️",
        category: "Online",
        difficulty: "5/10",
        time: "1–3 hours",
        money: "$10–$60+",
        description: "Practice writing articles, stories or other content.",
        steps: [
            "Practice writing regularly.",
            "Choose topics you understand.",
            "Proofread your work.",
            "Build examples of your writing."
        ]
    },

    "Social Media Editing": {
        icon: "📱",
        category: "Online",
        difficulty: "6/10",
        time: "2–4 hours",
        money: "$20–$100",
        description: "Create and edit short-form social media content.",
        steps: [
            "Learn short-form editing.",
            "Practice making videos.",
            "Learn how captions and pacing work.",
            "Create example videos."
        ]
    },

    "Making Thumbnails": {
        icon: "🖼️",
        category: "Creative",
        difficulty: "5/10",
        time: "1–2 hours",
        money: "$10–$60",
        description: "Design thumbnails for videos and social media.",
        steps: [
            "Learn a design program.",
            "Study good thumbnail layouts.",
            "Practice different designs.",
            "Build examples for your portfolio."
        ]
    },

    "Selling Crafts": {
        icon: "👕",
        category: "Creative",
        difficulty: "5/10",
        time: "Several hours",
        money: "Varies",
        description: "Create handmade products and sell them with appropriate permission.",
        steps: [
            "Choose something you can make well.",
            "Calculate your material costs.",
            "Create a few examples.",
            "Ask a parent or guardian about selling online or locally."
        ]
    },

    "Tutoring": {
        icon: "📚",
        category: "Education",
        difficulty: "5/10",
        time: "Around 1 hour",
        money: "$10–$50",
        description: "Help younger students understand subjects you know well.",
        steps: [
            "Choose a subject you understand well.",
            "Start with people you know.",
            "Prepare simple explanations.",
            "Be patient and encouraging."
        ]
    },

    "Game Testing": {
        icon: "🕹️",
        category: "Gaming",
        difficulty: "6/10",
        time: "1–3 hours",
        money: "Varies",
        description: "Test games when legitimate opportunities are available.",
        steps: [
            "Look for legitimate opportunities.",
            "Check age requirements.",
            "Never pay someone just to receive a job.",
            "Report bugs clearly."
        ]
    },

    "Selling Digital Designs": {
        icon: "💡",
        category: "Online",
        difficulty: "7/10",
        time: "Several hours",
        money: "Varies",
        description: "Create digital artwork, templates or designs.",
        steps: [
            "Learn a design tool.",
            "Create original designs.",
            "Build a small collection.",
            "Ask a parent or guardian about platforms and payments."
        ]
    }

};


/* ==========================================
   DARK MODE
========================================== */

const themeButton = $("#themeButton");

if (localStorage.getItem("teenMoneyDark") === "true") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "teenMoneyDark",
        dark
    );

    themeButton.textContent =
        dark ? "☀️" : "🌙";

});


/* ==========================================
   SEARCH
========================================== */

const searchInput = $("#searchInput");
const categoryFilter = $("#categoryFilter");
const clearSearch = $("#clearSearch");
const favoritesFilter = $("#favoritesFilter");

let favorites =
    JSON.parse(
        localStorage.getItem("teenMoneyFavorites") || "[]"
    );

let showFavoritesOnly = false;


function filterJobs() {

    const search =
        searchInput.value.toLowerCase().trim();

    const category =
        categoryFilter.value;

    let visible = 0;

    $$(".money-card").forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const matchesSearch =
            name.includes(search);

        const matchesCategory =
            category === "all" ||
            card.dataset.category === category;

        const isFavorite =
            favorites.includes(card.dataset.name);

        const matchesFavorite =
            !showFavoritesOnly ||
            isFavorite;

        const show =
            matchesSearch &&
            matchesCategory &&
            matchesFavorite;

        card.style.display =
            show ? "flex" : "none";

        if (show) visible++;

    });

    $("#noResults").style.display =
        visible === 0 ? "block" : "none";
}


searchInput.addEventListener(
    "input",
    filterJobs
);

categoryFilter.addEventListener(
    "change",
    filterJobs
);

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        filterJobs();

    }
);

favoritesFilter.addEventListener(
    "click",
    () => {

        showFavoritesOnly =
            !showFavoritesOnly;

        favoritesFilter.textContent =
            showFavoritesOnly
                ? "⭐ Showing Favorites"
                : "⭐ My Favorites";

        filterJobs();

    }
);


/* ==========================================
   SORTING
========================================== */

const sortSelect = $("#sortSelect");
const moneyGrid = $("#moneyGrid");

sortSelect.addEventListener(
    "change",
    sortJobs
);


function sortJobs() {

    const cards =
        Array.from($$(".money-card"));

    const mode =
        sortSelect.value;

    cards.sort((a, b) => {

        if (mode === "difficulty-low")
            return Number(a.dataset.difficulty)
                - Number(b.dataset.difficulty);

        if (mode === "difficulty-high")
            return Number(b.dataset.difficulty)
                - Number(a.dataset.difficulty);

        if (mode === "earnings")
            return Number(b.dataset.earnings)
                - Number(a.dataset.earnings);

        if (mode === "time-low")
            return Number(a.dataset.time)
                - Number(b.dataset.time);

    });

    cards.forEach(card =>
        moneyGrid.appendChild(card)
    );

}


/* ==========================================
   FAVORITES
========================================== */

function updateFavorites() {

    $$(".favorite").forEach(button => {

        const job = button.dataset.job;

        if (favorites.includes(job)) {

            button.textContent = "★";
            button.classList.add("active");

        } else {

            button.textContent = "☆";
            button.classList.remove("active");

        }

    });

}


$$(".favorite").forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const job =
                button.dataset.job;

            if (favorites.includes(job)) {

                favorites =
                    favorites.filter(
                        item => item !== job
                    );

            } else {

                favorites.push(job);

            }

            localStorage.setItem(
                "teenMoneyFavorites",
                JSON.stringify(favorites)
            );

            updateFavorites();

            filterJobs();

        }
    );

});

updateFavorites();


/* ==========================================
   DETAILS MODAL
========================================== */

const detailsModal = $("#detailsModal");
const detailsContent = $("#detailsContent");
const closeDetails = $("#closeDetails");


$$(".details-button").forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const job =
                button.dataset.job;

            const info =
                jobs[job];

            if (!info) return;

            detailsContent.innerHTML = `

                <div class="job-icon dog">
                    ${info.icon}
                </div>

                <span class="section-label">
                    ${info.category}
                </span>

                <h2>${job}</h2>

                <p>${info.description}</p>

                <p>💵 <strong>${info.money}</strong></p>

                <p>⏱️ <strong>${info.time}</strong></p>

                <p>
                    ⭐ <strong>
                    Difficulty: ${info.difficulty}
                    </strong>
                </p>

                <h3>How to get started</h3>

                <ol>
                    ${info.steps
                        .map(step => `<li>${step}</li>`)
                        .join("")}
                </ol>

                <div class="safety-card">

                    <div class="safety-icon">🛡️</div>

                    <p>
                        Talk to a parent or guardian
                        when appropriate and keep
                        your personal information private.
                    </p>

                </div>

            `;

            detailsModal.classList.add("show");

        }
    );

});


closeDetails.addEventListener(
    "click",
    () => detailsModal.classList.remove("show")
);


/* ==========================================
   CALCULATOR
========================================== */

const moneyPerJob = $("#moneyPerJob");
const jobsPerWeek = $("#jobsPerWeek");

function calculate() {

    const money =
        Number(moneyPerJob.value) || 0;

    const jobs =
        Number(jobsPerWeek.value) || 0;

    const weeklyAmount =
        money * jobs;

    const monthlyAmount =
        weeklyAmount * 4;

    const yearlyAmount =
        weeklyAmount * 52;

    $("#weekly").textContent =
        "$" + weeklyAmount.toFixed(2);

    $("#monthly").textContent =
        "$" + monthlyAmount.toFixed(2);

    $("#yearly").textContent =
        "$" + yearlyAmount.toFixed(2);

}


moneyPerJob.addEventListener(
    "input",
    calculate
);

jobsPerWeek.addEventListener(
    "input",
    calculate
);

calculate();


/* ==========================================
   SAVINGS GOAL
========================================== */

const goalAmount = $("#goalAmount");
const savedAmount = $("#savedAmount");


function updateGoal() {

    const goal =
        Number(goalAmount.value) || 0;

    const saved =
        Number(savedAmount.value) || 0;

    if (goal <= 0) {

        $("#goalPercent").textContent = "0%";

        $("#goalText").textContent =
            "$0 of $0 saved";

        $("#goalProgress").style.width = "0%";

        return;
    }

    const percent =
        Math.min(
            100,
            Math.round((saved / goal) * 100)
        );

    $("#goalPercent").textContent =
        percent + "%";

    $("#goalText").textContent =
        `$${saved} of $${goal} saved`;

    $("#goalProgress").style.width =
        percent + "%";

    localStorage.setItem(
        "teenMoneyGoal",
        goal
    );

    localStorage.setItem(
        "teenMoneySaved",
        saved
    );

}


goalAmount.addEventListener(
    "input",
    updateGoal
);

savedAmount.addEventListener(
    "input",
    updateGoal
);


const storedGoal =
    localStorage.getItem("teenMoneyGoal");

const storedSaved =
    localStorage.getItem("teenMoneySaved");

if (storedGoal !== null)
    goalAmount.value = storedGoal;

if (storedSaved !== null)
    savedAmount.value = storedSaved;

updateGoal();


/* ==========================================
   QUIZ
========================================== */

const quizModal = $("#quizModal");


function openQuiz() {
    quizModal.classList.add("show");
}


$("#openQuiz").addEventListener(
    "click",
    openQuiz
);

$("#heroQuiz").addEventListener(
    "click",
    openQuiz
);

$("#closeQuiz").addEventListener(
    "click",
    () => quizModal.classList.remove("show")
);


$("#quizSubmit").addEventListener(
    "click",
    () => {

        const interest =
            $("#quizInterest").value;

        const location =
            $("#quizLocation").value;

        const time =
            $("#quizTime").value;

        const goal =
            $("#quizGoal").value;


        const scores = {};

        Object.keys(jobs).forEach(
            job => scores[job] = 0
        );


        if (interest === "animals")
            scores["Dog Walking"] += 10;

        if (interest === "outdoor") {

            scores["Gardening"] += 8;
            scores["Car Washing"] += 7;
            scores["Dog Walking"] += 5;

        }

        if (interest === "creative") {

            scores["Graphic Design"] += 9;
            scores["Video Editing"] += 9;
            scores["Photography"] += 7;
            scores["Making Thumbnails"] += 8;

        }

        if (interest === "technology") {

            scores["Website Design"] += 9;
            scores["Making Roblox Games"] += 9;
            scores["Video Editing"] += 6;

        }

        if (interest === "gaming") {

            scores["Making Roblox Games"] += 10;
            scores["Game Testing"] += 9;
            scores["YouTube Channel"] += 5;

        }

        if (interest === "people") {

            scores["Tutoring"] += 8;
            scores["Pet Sitting"] += 5;
            scores["Dog Walking"] += 5;

        }


        if (location === "outside") {

            scores["Dog Walking"] += 7;
            scores["Car Washing"] += 7;
            scores["Gardening"] += 7;
            scores["Pet Sitting"] += 5;

        }

        if (location === "online") {

            scores["Website Design"] += 7;
            scores["Video Editing"] += 7;
            scores["YouTube Channel"] += 7;
            scores["Graphic Design"] += 6;

        }


        if (time === "little") {

            scores["Dog Walking"] += 7;
            scores["Grocery Help"] += 6;
            scores["Tutoring"] += 5;

        }

        if (time === "medium") {

            scores["Video Editing"] += 5;
            scores["Photography"] += 5;
            scores["Writing"] += 5;

        }

        if (time === "lots") {

            scores["YouTube Channel"] += 7;
            scores["Making Roblox Games"] += 7;
            scores["Website Design"] += 6;

        }


        if (goal === "quick") {

            scores["Dog Walking"] += 7;
            scores["Car Washing"] += 6;
            scores["Cleaning"] += 6;

        }

        if (goal === "skill") {

            scores["Video Editing"] += 7;
            scores["Website Design"] += 7;
            scores["Graphic Design"] += 6;

        }

        if (goal === "long") {

            scores["YouTube Channel"] += 8;
            scores["Making Roblox Games"] += 8;
            scores["Selling Digital Designs"] += 6;

        }


        const results =
            Object.entries(scores)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3);


        $("#quizResult").innerHTML = `

            <h3>🏆 Your Top 3 Matches</h3>

            ${results.map(
                (result, index) => `

                    <div class="result-item">

                        <strong>
                            ${index + 1}.
                            ${result[0]}
                        </strong>

                        <br>

                        ⭐ Great match for your answers

                    </div>

                `
            ).join("")}

            <p>
                💡 These are suggestions, not guarantees.
                Always make sure the activity is safe
                and appropriate for you.
            </p>

        `;

        $("#quizResult").style.display = "block";

    }
);


/* ==========================================
   MODAL CLOSE
========================================== */

$$(".modal").forEach(modal => {

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                modal.classList.remove("show");
            }

        }
    );

});


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            $$(".modal.show").forEach(
                modal =>
                    modal.classList.remove("show")
            );

        }

    }
);


/* ==========================================
   BACK TO TOP
========================================== */

const backTop = $("#backTop");

window.addEventListener(
    "scroll",
    () => {

        backTop.classList.toggle(
            "show",
            window.scrollY > 500
        );

    }
);

backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ==========================================
   MOBILE MENU
========================================== */

$("#mobileMenu").addEventListener(
    "click",
    () => {

        $("#nav").classList.toggle(
            "mobile-open"
        );

    }
);


/* ==========================================
   START
========================================== */

$("#ideaCount").textContent =
    $$(".money-card").length + "+";

filterJobs();
sortJobs();
updateFavorites();

console.log(
    "Teen Money - 20 ideas loaded successfully 🚀"
);
