/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const moneyGrid =
    document.getElementById("moneyGrid");

const noResults =
    document.getElementById("noResults");


function filterCards() {

    const search =
        searchInput.value.toLowerCase().trim();

    const category =
        document.getElementById("categoryFilter").value;

    const cards =
        Array.from(
            document.querySelectorAll(".money-card")
        );

    let visible = 0;

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const cardCategory =
            card.dataset.category;

        const matchesSearch =
            name.includes(search);

        const matchesCategory =
            category === "all" ||
            cardCategory === category;

        if (matchesSearch && matchesCategory) {

            card.style.display = "";

            visible++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.style.display =
        visible === 0 ? "block" : "none";

}


searchInput.addEventListener(
    "input",
    filterCards
);


document
    .getElementById("categoryFilter")
    .addEventListener(
        "change",
        filterCards
    );


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        filterCards();

        searchInput.focus();

    }
);


/* =========================================
   SORTING
========================================= */

const sortSelect =
    document.getElementById("sortSelect");


sortSelect.addEventListener(
    "change",
    sortCards
);


function sortCards() {

    const cards =
        Array.from(
            moneyGrid.querySelectorAll(".money-card")
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


        if (mode === "low") {

            return difficultyA - difficultyB;

        }

        if (mode === "high") {

            return difficultyB - difficultyA;

        }

        if (mode === "earn") {

            return earningsB - earningsA;

        }

    });


    cards.forEach(card =>
        moneyGrid.appendChild(card)
    );

}


/* =========================================
   FAVORITES
========================================= */

const favorites =
    JSON.parse(
        localStorage.getItem("teenMoneyFavorites") || "[]"
    );


function updateFavorites() {

    document.querySelectorAll(".favorite")
        .forEach(button => {

            const job =
                button.dataset.job;

            if (favorites.includes(job)) {

                button.classList.add("active");

                button.textContent = "★";

            } else {

                button.classList.remove("active");

                button.textContent = "☆";

            }

        });

}


document
    .querySelectorAll(".favorite")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const job =
                    button.dataset.job;

                const index =
                    favorites.indexOf(job);


                if (index === -1) {

                    favorites.push(job);

                } else {

                    favorites.splice(index, 1);

                }


                localStorage.setItem(
                    "teenMoneyFavorites",
                    JSON.stringify(favorites)
                );


                updateFavorites();

            }
        );

    });


updateFavorites();


/* =========================================
   JOB DETAILS
========================================= */

const detailsModal =
    document.getElementById("detailsModal");

const closeModal =
    document.getElementById("closeModal");

const modalContent =
    document.getElementById("modalContent");


const jobInfo = {

    "Dog Walking": {

        icon: "🐶",

        title: "Dog Walking",

        difficulty: "2/10",

        time: "30–45 minutes",

        description:
            "Walk dogs for people in your neighborhood. This can be a simple way to gain experience and work locally.",

        steps: [
            "Ask a parent or guardian if this is suitable for you.",
            "Start by asking people you already know.",
            "Agree on the job and payment before starting.",
            "Be responsible with the dog and follow the owner's instructions."
        ]

    },


    "Car Washing": {

        icon: "🚗",

        title: "Car Washing",

        difficulty: "3/10",

        time: "1–2 hours",

        description:
            "Wash cars for people you know or in your local area.",

        steps: [
            "Find someone who wants their car washed.",
            "Agree on a price before beginning.",
            "Make sure you have permission to use the necessary equipment.",
            "Do a careful job and leave the area clean."
        ]

    },


    "Gardening": {

        icon: "🌱",

        title: "Gardening",

        difficulty: "4/10",

        time: "1–3 hours",

        description:
            "Help people with simple outdoor tasks such as gardening.",

        steps: [
            "Ask people you know if they need help.",
            "Agree on exactly what needs to be done.",
            "Agree on payment beforehand.",
            "Work safely and ask for help with tools you aren't familiar with."
        ]

    },


    "Video Editing": {

        icon: "💻",

        title: "Video Editing",

        difficulty: "6/10",

        time: "2–5 hours",

        description:
            "Learn video editing and potentially help creators with their videos.",

        steps: [
            "Learn the basics of an editing program.",
            "Create a few example edits.",
            "Build a small portfolio.",
            "Only work with clients through appropriate and safe arrangements."
        ]

    },


    "Making Roblox Games": {

        icon: "🎮",

        title: "Making Roblox Games",

        difficulty: "8/10",

        time: "Many hours",

        description:
            "Learn Roblox Studio, scripting and game design.",

        steps: [
            "Learn Roblox Studio.",
            "Build a very small game first.",
            "Learn Lua scripting.",
            "Improve your game based on feedback.",
            "Learn about Roblox's current rules and monetization requirements."
        ]

    },


    "YouTube Channel": {

        icon: "▶️",

        title: "YouTube Channel",

        difficulty: "9/10",

        time: "Many hours",

        description:
            "Create videos around topics you enjoy and build an audience over time.",

        steps: [
            "Choose a topic you enjoy.",
            "Make useful or entertaining videos.",
            "Learn basic editing and thumbnails.",
            "Upload consistently.",
            "Protect your personal information online."
        ]

    }

};


document
    .querySelectorAll(".details-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const job =
                    button.dataset.job;

                const info =
                    jobInfo[job];


                modalContent.innerHTML = `

                    <div class="job-icon ${getIconClass(job)}">
                        ${info.icon}
                    </div>

                    <h2>${info.title}</h2>

                    <p>
                        ${info.description}
                    </p>

                    <p>
                        <strong>Difficulty:</strong>
                        ${info.difficulty}
                    </p>

                    <p>
                        <strong>Typical time:</strong>
                        ${info.time}
                    </p>

                    <h3>How to get started</h3>

                    <ul>
                        ${info.steps
                            .map(step =>
                                `<li>${step}</li>`
                            )
                            .join("")}
                    </ul>

                `;


                detailsModal.classList.add("show");

            }
        );

    });


function getIconClass(job) {

    if (job === "Dog Walking")
        return "dog";

    if (job === "Car Washing")
        return "car";

    if (job === "Gardening")
        return "garden";

    if (job === "Video Editing")
        return "editing";

    if (job === "Making Roblox Games")
        return "gaming";

    return "youtube";

}


closeModal.addEventListener(
    "click",
    () => detailsModal.classList.remove("show")
);


detailsModal.addEventListener(
    "click",
    event => {

        if (event.target === detailsModal) {

            detailsModal.classList.remove("show");

        }

    }
);


/* =========================================
   CALCULATOR
========================================= */

const moneyPerJob =
    document.getElementById("moneyPerJob");

const jobsPerWeek =
    document.getElementById("jobsPerWeek");

const weeklyResult =
    document.getElementById("weeklyResult");

const monthlyResult =
    document.getElementById("monthlyResult");


function calculateMoney() {

    const money =
        Number(moneyPerJob.value) || 0;

    const jobs =
        Number(jobsPerWeek.value) || 0;

    const weekly =
        money * jobs;

    const monthly =
        weekly * 4;


    weeklyResult.textContent =
        "$" + weekly.toFixed(2);

    monthlyResult.textContent =
        "$" + monthly.toFixed(2);

}


moneyPerJob.addEventListener(
    "input",
    calculateMoney
);

jobsPerWeek.addEventListener(
    "input",
    calculateMoney
);


/* =========================================
   QUIZ
========================================= */

const quizModal =
    document.getElementById("quizModal");

const startQuiz =
    document.getElementById("startQuiz");

const heroQuiz =
    document.getElementById("heroQuiz");

const closeQuiz =
    document.getElementById("closeQuiz");

const quizSubmit =
    document.getElementById("quizSubmit");

const quizResult =
    document.getElementById("quizResult");


function openQuiz() {

    quizModal.classList.add("show");

    quizResult.style.display = "none";

}


startQuiz.addEventListener(
    "click",
    openQuiz
);

heroQuiz.addEventListener(
    "click",
    openQuiz
);


closeQuiz.addEventListener(
    "click",
    () => quizModal.classList.remove("show")
);


quizModal.addEventListener(
    "click",
    event => {

        if (event.target === quizModal) {

            quizModal.classList.remove("show");

        }

    }
);


quizSubmit.addEventListener(
    "click",
    () => {

        const interest =
            document.getElementById("quizInterest").value;

        const location =
            document.getElementById("quizLocation").value;

        const time =
            document.getElementById("quizTime").value;


        const scores = {

            "Dog Walking": 0,

            "Car Washing": 0,

            "Gardening": 0,

            "Video Editing": 0,

            "Making Roblox Games": 0,

            "YouTube Channel": 0

        };


        if (interest === "animals")
            scores["Dog Walking"] += 6;

        if (interest === "outside") {

            scores["Dog Walking"] += 3;

            scores["Car Washing"] += 5;

            scores["Gardening"] += 5;

        }

        if (interest === "creative") {

            scores["Video Editing"] += 6;

            scores["YouTube Channel"] += 4;

        }

        if (interest === "technology") {

            scores["Video Editing"] += 4;

            scores["Making Roblox Games"] += 6;

        }

        if (interest === "gaming") {

            scores["Making Roblox Games"] += 7;

            scores["YouTube Channel"] += 2;

        }

        if (interest === "people") {

            scores["Dog Walking"] += 3;

            scores["Car Washing"] += 2;

        }


        if (location === "outside") {

            scores["Dog Walking"] += 4;

            scores["Car Washing"] += 4;

            scores["Gardening"] += 4;

        }

        if (location === "online") {

            scores["Video Editing"] += 5;

            scores["Making Roblox Games"] += 5;

            scores["YouTube Channel"] += 5;

        }


        if (time === "little") {

            scores["Dog Walking"] += 5;

            scores["Car Washing"] += 3;

        }

        if (time === "medium") {

            scores["Gardening"] += 3;

            scores["Video Editing"] += 3;

            scores["Dog Walking"] += 2;

        }

        if (time === "lots") {

            scores["Video Editing"] += 4;

            scores["Making Roblox Games"] += 5;

            scores["YouTube Channel"] += 5;

        }


        const results =
            Object.entries(scores)
                .sort((a,b) => b[1] - a[1])
                .slice(0,3);


        quizResult.innerHTML = `

            <h3>🏆 Your Top 3</h3>

            ${results.map((result, index) => `

                <div class="result-item">

                    <strong>
                        ${index + 1}.
                        ${result[0]}
                    </strong>

                    <br>

                    Match score:
                    ${result[1]}

                </div>

            `).join("")}

            <p>
                💡 These are suggestions rather than guarantees.
            </p>

        `;


        quizResult.style.display = "block";

    }
);


/* =========================================
   DARK MODE
========================================= */

const themeButton =
    document.getElementById("themeButton");


if (
    localStorage.getItem("teenMoneyDark") === "true"
) {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");


        localStorage.setItem(
            "teenMoneyDark",
            dark
        );


        themeButton.textContent =
            dark ? "☀️" : "🌙";

    }
);


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");


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


/* =========================================
   ESCAPE CLOSE
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal.show")
                .forEach(modal =>
                    modal.classList.remove("show")
                );

        }

    }
);
