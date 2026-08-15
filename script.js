/* ==========================================
   TEEN MONEY 2.0
========================================== */


/* ==========================================
   HELPERS
========================================== */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    document.querySelectorAll(selector);


/* ==========================================
   DARK MODE
========================================== */

const themeButton = $("#themeButton");

if (
    localStorage.getItem("teenMoneyDark") === "true"
) {
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
   MOBILE MENU
========================================== */

const mobileMenu = $("#mobileMenu");
const nav = $("#nav");

mobileMenu.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* ==========================================
   SEARCH + FILTER
========================================== */

const searchInput = $("#searchInput");
const clearSearch = $("#clearSearch");
const categoryFilter = $("#categoryFilter");
const favoritesFilter = $("#favoritesFilter");
const moneyGrid = $("#moneyGrid");
const noResults = $("#noResults");

let showFavoritesOnly = false;


function filterJobs() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const category =
        categoryFilter.value;

    const cards =
        Array.from(
            $$(".money-card")
        );

    let visible = 0;

    cards.forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase();

        const cardCategory =
            card.dataset.category;

        const matchesSearch =
            name.includes(search);

        const matchesCategory =
            category === "all" ||
            cardCategory === category;

        const isFavorite =
            favorites.includes(
                card.dataset.name
            );

        const matchesFavorites =
            !showFavoritesOnly ||
            isFavorite;

        const show =
            matchesSearch &&
            matchesCategory &&
            matchesFavorites;

        card.style.display =
            show ? "flex" : "none";

        if (show) visible++;

    });

    noResults.style.display =
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

        searchInput.focus();

    }
);

favoritesFilter.addEventListener(
    "click",
    () => {

        showFavoritesOnly =
            !showFavoritesOnly;

        favoritesFilter.classList.toggle(
            "active",
            showFavoritesOnly
        );

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

sortSelect.addEventListener(
    "change",
    sortJobs
);


function sortJobs() {

    const cards =
        Array.from(
            $$(".money-card")
        );

    const mode =
        sortSelect.value;

    cards.sort((a, b) => {

        const difficultyA =
            Number(a.dataset.difficulty);

        const difficultyB =
            Number(b.dataset.difficulty);

        const earningsA =
            Number(a.dataset.earnings);

        const earningsB =
            Number(b.dataset.earnings);

        const timeA =
            Number(a.dataset.time);

        const timeB =
            Number(b.dataset.time);


        if (mode === "difficulty-low")
            return difficultyA - difficultyB;

        if (mode === "difficulty-high")
            return difficultyB - difficultyA;

        if (mode === "earnings")
            return earningsB - earningsA;

        if (mode === "time-low")
            return timeA - timeB;

    });

    cards.forEach(card =>
        moneyGrid.appendChild(card)
    );

}


/* ==========================================
   FAVORITES
========================================== */

let favorites =
    JSON.parse(
        localStorage.getItem(
            "teenMoneyFavorites"
        ) || "[]"
    );


function updateFavorites() {

    $$(".favorite").forEach(button => {

        const job =
            button.dataset.job;

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
   JOB INFORMATION
========================================== */

const jobs = {

    "Dog Walking": {

        icon: "🐶",

        category: "Local",

        difficulty: "2/10",

        time: "30–45 minutes",

        money: "$10–$20 per walk",

        description:
            "Walk dogs for people in your neighborhood.",

        steps: [
            "Talk to a parent or guardian first.",
            "Start with people you already know.",
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

        money: "$15–$30 per car",

        description:
            "Wash cars for people you know or in your area.",

        steps: [
            "Ask if someone needs their car washed.",
            "Agree on the price beforehand.",
            "Make sure you have permission to use equipment.",
            "Clean up when you're finished."
        ]

    },


    "Gardening": {

        icon: "🌱",

        category: "Local",

        difficulty: "4/10",

        time: "1–3 hours",

        money: "$10–$30 per job",

        description:
            "Help people with simple gardening and outdoor tasks.",

        steps: [
            "Ask people you know if they need help.",
            "Agree on exactly what you'll do.",
            "Agree on payment beforehand.",
            "Ask for help with unfamiliar equipment."
        ]

    },


    "Video Editing": {

        icon: "🎬",

        category: "Creative",

        difficulty: "6/10",

        time: "2–5 hours",

        money: "$20–$100 per video",

        description:
            "Learn video editing and potentially create videos for others.",

        steps: [
            "Learn the basics of an editing program.",
            "Practice by making example videos.",
            "Create a small portfolio.",
            "Build your skills over time.",
            "Keep your personal information private."
        ]

    },


    "Making Roblox Games": {

        icon: "🎮",

        category: "Gaming",

        difficulty: "8/10",

        time: "Many hours",

        money: "Varies",

        description:
            "Learn game development, scripting and design.",

        steps: [
            "Learn the basics of Roblox Studio.",
            "Build a very small game.",
            "Learn scripting.",
            "Improve your game over time.",
            "Check the current platform rules before monetizing."
        ]

    },


    "YouTube Channel": {

        icon: "▶️",

        category: "Online",

        difficulty: "9/10",

        time: "Many hours",

        money: "Varies",

        description:
            "Create videos around a topic you enjoy.",

        steps: [
            "Choose a topic you enjoy.",
            "Create useful or entertaining videos.",
            "Learn basic editing.",
            "Improve your thumbnails and titles.",
            "Protect your personal information."
        ]

    }

};


/* ==========================================
   DETAILS MODALS
========================================== */

const detailsModal =
    $("#detailsModal");

const detailsContent =
    $("#detailsContent");

const closeDetails =
    $("#closeDetails");


$$(".details-button").forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const job =
                button.dataset.job;

            const info =
                jobs[job];

            detailsContent.innerHTML = `

                <div class="job-icon dog"
                     style="margin-bottom:15px">
                    ${info.icon}
                </div>

                <span class="section-label">
                    ${info.category}
                </span>

                <h2>${job}</h2>

                <p>
                    ${info.description}
                </p>

                <p>
                    💵 <strong>${info.money}</strong>
                </p>

                <p>
                    ⏱️ <strong>${info.time}</strong>
                </p>

                <p>
                    ⭐ <strong>Difficulty:
                    ${info.difficulty}</strong>
                </p>

                <h3>
                    How to get started
                </h3>

                <ol>
                    ${info.steps.map(step =>
                        `<li>${step}</li>`
                    ).join("")}
                </ol>

                <div class="safety-card">

                    🛡️

                    <span>
                        Talk to a parent or guardian
                        when appropriate and keep
                        personal information private.
                    </span>

                </div>

            `;

            detailsModal.classList.add("show");

        }
    );

});


closeDetails.addEventListener(
    "click",
    () =>
        detailsModal.classList.remove("show")
);


/* ==========================================
   EARNINGS CALCULATOR
========================================== */

const moneyPerJob =
    $("#moneyPerJob");

const jobsPerWeek =
    $("#jobsPerWeek");

const weeks =
    $("#weeks");

const weekly =
    $("#weekly");

const monthly =
    $("#monthly");

const yearly =
    $("#yearly");


function calculate() {

    const money =
        Number(moneyPerJob.value) || 0;

    const jobs =
        Number(jobsPerWeek.value) || 0;

    const week =
        money * jobs;

    const month =
        week * 4;

    const year =
        week * 52;


    weekly.textContent =
        "$" + week.toFixed(2);

    monthly.textContent =
        "$" + month.toFixed(2);

    yearly.textContent =
        "$" + year.toFixed(2);

}


moneyPerJob.addEventListener(
    "input",
    calculate
);

jobsPerWeek.addEventListener(
    "input",
    calculate
);

weeks.addEventListener(
    "input",
    calculate
);

calculate();


/* ==========================================
   SAVINGS GOAL
========================================== */

const goalAmount =
    $("#goalAmount");

const savedAmount =
    $("#savedAmount");

const goalPercent =
    $("#goalPercent");

const goalText =
    $("#goalText");

const goalProgress =
    $("#goalProgress");


function updateGoal() {

    const goal =
        Number(goalAmount.value) || 0;

    const saved =
        Number(savedAmount.value) || 0;


    if (goal <= 0) {

        goalPercent.textContent = "0%";

        goalText.textContent =
            "$0 of $0 saved";

        goalProgress.style.width = "0%";

        return;

    }


    const percentage =
        Math.min(
            100,
            Math.round(
                (saved / goal) * 100
            )
        );


    goalPercent.textContent =
        percentage + "%";

    goalText.textContent =
        `$${saved} of $${goal} saved`;

    goalProgress.style.width =
        percentage + "%";


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


/* LOAD GOAL */

const storedGoal =
    localStorage.getItem(
        "teenMoneyGoal"
    );

const storedSaved =
    localStorage.getItem(
        "teenMoneySaved"
    );


if (storedGoal !== null)
    goalAmount.value = storedGoal;

if (storedSaved !== null)
    savedAmount.value = storedSaved;


updateGoal();


/* ==========================================
   QUIZ
========================================== */

const quizModal =
    $("#quizModal");

const openQuiz =
    $("#openQuiz");

const heroQuiz =
    $("#heroQuiz");

const closeQuiz =
    $("#closeQuiz");

const quizSubmit =
    $("#quizSubmit");

const quizResult =
    $("#quizResult");


function showQuiz() {

    quizModal.classList.add("show");

    quizResult.style.display = "none";

}


openQuiz.addEventListener(
    "click",
    showQuiz
);

heroQuiz.addEventListener(
    "click",
    showQuiz
);


closeQuiz.addEventListener(
    "click",
    () =>
        quizModal.classList.remove("show")
);


quizSubmit.addEventListener(
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


        const scores = {

            "Dog Walking": 0,

            "Car Washing": 0,

            "Gardening": 0,

            "Video Editing": 0,

            "Making Roblox Games": 0,

            "YouTube Channel": 0

        };


        /* INTEREST */

        if (interest === "animals")
            scores["Dog Walking"] += 7;

        if (interest === "outdoor") {

            scores["Dog Walking"] += 3;

            scores["Car Washing"] += 5;

            scores["Gardening"] += 6;

        }

        if (interest === "creative") {

            scores["Video Editing"] += 7;

            scores["YouTube Channel"] += 4;

        }

        if (interest === "technology") {

            scores["Video Editing"] += 5;

            scores["Making Roblox Games"] += 7;

        }

        if (interest === "gaming") {

            scores["Making Roblox Games"] += 8;

            scores["YouTube Channel"] += 3;

        }

        if (interest === "people") {

            scores["Dog Walking"] += 4;

            scores["Car Washing"] += 3;

        }


        /* LOCATION */

        if (location === "outside") {

            scores["Dog Walking"] += 5;

            scores["Car Washing"] += 5;

            scores["Gardening"] += 5;

        }

        if (location === "online") {

            scores["Video Editing"] += 5;

            scores["Making Roblox Games"] += 5;

            scores["YouTube Channel"] += 5;

        }


        /* TIME */

        if (time === "little") {

            scores["Dog Walking"] += 6;

            scores["Car Washing"] += 3;

        }

        if (time === "medium") {

            scores["Gardening"] += 4;

            scores["Video Editing"] += 4;

            scores["Dog Walking"] += 2;

        }

        if (time === "lots") {

            scores["Video Editing"] += 5;

            scores["Making Roblox Games"] += 6;

            scores["YouTube Channel"] += 6;

        }


        /* GOAL */

        if (goal === "quick") {

            scores["Dog Walking"] += 5;

            scores["Car Washing"] += 4;

            scores["Gardening"] += 3;

        }

        if (goal === "skill") {

            scores["Video Editing"] += 6;

            scores["Making Roblox Games"] += 5;

        }

        if (goal === "long") {

            scores["YouTube Channel"] += 6;

            scores["Making Roblox Games"] += 5;

        }


        /* RESULTS */

        const results =
            Object.entries(scores)
                .sort(
                    (a,b) =>
                        b[1] - a[1]
                )
                .slice(0,3);


        quizResult.innerHTML = `

            <h3>🏆 Your Top 3 Matches</h3>

            ${results.map(
                (result, index) => {

                    const match =
                        Math.min(
                            99,
                            50 + result[1] * 2
                        );

                    return `

                        <div class="result-item">

                            <strong>
                                ${index + 1}.
                                ${result[0]}
                            </strong>

                            <br>

                            ⭐ Approx.
                            ${match}% match

                        </div>

                    `;

                }
            ).join("")}

            <p>
                💡 A quiz result is only a suggestion.
                Choose something you enjoy and make sure
                it's appropriate and safe for you.
            </p>

        `;

        quizResult.style.display =
            "block";

    }
);


/* ==========================================
   MODAL BACKGROUND CLICK
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


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            $$(".modal.show")
                .forEach(modal =>
                    modal.classList.remove("show")
                );

        }

    }
);


/* ==========================================
   BACK TO TOP
========================================== */

const backTop =
    $("#backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

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
   COUNT IDEAS
========================================== */

const cards =
    $$(".money-card");

$("#ideaCount").textContent =
    cards.length + "+";


/* ==========================================
   STARTUP
========================================== */

filterJobs();

sortJobs();

console.log(
    "Teen Money 2.0 loaded successfully 🚀"
);
