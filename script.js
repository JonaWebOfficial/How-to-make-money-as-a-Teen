/* =========================================
   TEEN MONEY WEBSITE
   ========================================= */


const jobs = [

    {
        name: "Dog Walking",
        icon: "🐶",
        category: "local",
        description: "Walk dogs for people in your neighborhood.",
        min: 10,
        max: 20,
        unit: "walk",
        time: "30–45 minutes",
        difficulty: 2
    },

    {
        name: "Car Washing",
        icon: "🚗",
        category: "local",
        description: "Wash cars for neighbors, friends or family.",
        min: 15,
        max: 30,
        unit: "car",
        time: "1–2 hours",
        difficulty: 3
    },

    {
        name: "Grocery Help",
        icon: "🛒",
        category: "local",
        description: "Help people carry groceries or organize them.",
        min: 10,
        max: 20,
        unit: "job",
        time: "30 minutes",
        difficulty: 2
    },

    {
        name: "Lawn Mowing",
        icon: "🌱",
        category: "local",
        description: "Mow lawns for people in your neighborhood.",
        min: 20,
        max: 50,
        unit: "lawn",
        time: "30–90 minutes",
        difficulty: 3
    },

    {
        name: "Babysitting",
        icon: "👶",
        category: "local",
        description: "Look after children for families you know.",
        min: 10,
        max: 20,
        unit: "hour",
        time: "1–4 hours",
        difficulty: 5
    },

    {
        name: "House Cleaning",
        icon: "🧹",
        category: "local",
        description: "Help clean houses, rooms or garages.",
        min: 15,
        max: 40,
        unit: "job",
        time: "1–3 hours",
        difficulty: 4
    },

    {
        name: "Car Detailing",
        icon: "✨",
        category: "local",
        description: "Clean the inside and outside of cars.",
        min: 30,
        max: 80,
        unit: "car",
        time: "2–4 hours",
        difficulty: 5
    },

    {
        name: "Pet Sitting",
        icon: "🐱",
        category: "local",
        description: "Look after pets while their owners are away.",
        min: 15,
        max: 40,
        unit: "job",
        time: "1–3 hours",
        difficulty: 4
    },

    {
        name: "Video Editing",
        icon: "💻",
        category: "creative",
        description: "Edit videos for YouTubers, creators or small businesses.",
        min: 20,
        max: 100,
        unit: "video",
        time: "1–5 hours",
        difficulty: 6
    },

    {
        name: "Thumbnail Design",
        icon: "🎨",
        category: "creative",
        description: "Create thumbnails for YouTube videos.",
        min: 10,
        max: 50,
        unit: "thumbnail",
        time: "30–90 minutes",
        difficulty: 5
    },

    {
        name: "Social Media Editing",
        icon: "📱",
        category: "creative",
        description: "Create short videos and posts for social media.",
        min: 20,
        max: 100,
        unit: "project",
        time: "1–4 hours",
        difficulty: 6
    },

    {
        name: "Photography",
        icon: "📸",
        category: "creative",
        description: "Take photos for local events or small projects.",
        min: 25,
        max: 100,
        unit: "project",
        time: "1–3 hours",
        difficulty: 6
    },

    {
        name: "YouTube Channel",
        icon: "▶️",
        category: "online",
        description: "Create videos around topics you enjoy.",
        min: 0,
        max: 500,
        unit: "month",
        time: "Many hours",
        difficulty: 9
    },

    {
        name: "Making Roblox Games",
        icon: "🎮",
        category: "online",
        description: "Create Roblox games and learn game development.",
        min: 20,
        max: 1000,
        unit: "project",
        time: "Many hours",
        difficulty: 8
    },

    {
        name: "Graphic Design",
        icon: "🖌️",
        category: "creative",
        description: "Create logos, banners and graphics.",
        min: 15,
        max: 100,
        unit: "project",
        time: "1–5 hours",
        difficulty: 6
    },

    {
        name: "Website Design",
        icon: "🌐",
        category: "online",
        description: "Build simple websites for people or small businesses.",
        min: 30,
        max: 300,
        unit: "website",
        time: "3–10 hours",
        difficulty: 7
    },

    {
        name: "Tutoring",
        icon: "📚",
        category: "local",
        description: "Help younger students with subjects you know well.",
        min: 10,
        max: 25,
        unit: "hour",
        time: "1 hour",
        difficulty: 5
    },

    {
        name: "Reselling",
        icon: "📦",
        category: "business",
        description: "Sell items you own or items you can legally resell.",
        min: 10,
        max: 200,
        unit: "sale",
        time: "1–3 hours",
        difficulty: 7
    },

    {
        name: "Digital Products",
        icon: "📁",
        category: "business",
        description: "Create useful digital templates or designs.",
        min: 5,
        max: 100,
        unit: "sale",
        time: "1–5 hours",
        difficulty: 7
    },

    {
        name: "Tech Help",
        icon: "🖥️",
        category: "local",
        description: "Help family or neighbors with basic technology.",
        min: 10,
        max: 30,
        unit: "job",
        time: "30–90 minutes",
        difficulty: 4
    }

];


/* =========================================
   ELEMENTS
   ========================================= */

const jobsContainer = document.getElementById("jobsContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const noResults = document.getElementById("noResults");
const jobCount = document.getElementById("jobCount");

const plannerJob = document.getElementById("plannerJob");
const jobsPerWeek = document.getElementById("jobsPerWeek");
const weeksPerMonth = document.getElementById("weeksPerMonth");
const calculateBtn = document.getElementById("calculateBtn");
const plannerResult = document.getElementById("plannerResult");

const darkModeBtn = document.getElementById("darkModeBtn");
const clearSearch = document.getElementById("clearSearch");


/* =========================================
   DIFFICULTY
   ========================================= */

function getDifficultyClass(difficulty) {

    if (difficulty <= 3) {
        return "easy";
    }

    if (difficulty <= 6) {
        return "medium";
    }

    if (difficulty <= 8) {
        return "hard";
    }

    return "very-hard";
}


function getDifficultyLabel(difficulty) {

    if (difficulty <= 2) {
        return "Very Easy";
    }

    if (difficulty <= 4) {
        return "Easy";
    }

    if (difficulty <= 6) {
        return "Medium";
    }

    if (difficulty <= 8) {
        return "Hard";
    }

    return "Very Hard";
}


/* =========================================
   DISPLAY JOBS
   ========================================= */

function displayJobs(list) {

    jobsContainer.innerHTML = "";

    jobCount.textContent =
        `${list.length} ${list.length === 1 ? "opportunity" : "opportunities"} found`;

    if (list.length === 0) {

        noResults.style.display = "block";

        return;
    }

    noResults.style.display = "none";


    list.forEach(job => {

        const difficultyClass =
            getDifficultyClass(job.difficulty);

        const difficultyLabel =
            getDifficultyLabel(job.difficulty);


        const card = document.createElement("article");

        card.className = "job-card";


        card.innerHTML = `

            <div class="job-icon">
                ${job.icon}
            </div>


            <div class="job-info">

                <h3>${job.name}</h3>

                <p>${job.description}</p>

            </div>


            <div class="job-meta">

                <strong>💵 $${job.min}–$${job.max}</strong>

                <span>per ${job.unit}</span>

            </div>


            <div class="job-meta">

                <strong>⏱️ Time</strong>

                <span>${job.time}</span>

            </div>


            <div class="difficulty ${difficultyClass}">

                <div class="difficulty-title">
                    Difficulty
                </div>

                <div>
                    <span class="difficulty-number">
                        ${job.difficulty}
                    </span>
                    <span>/10</span>
                </div>

                <div class="difficulty-bar">

                    <div
                        class="difficulty-fill"
                        style="width:${job.difficulty * 10}%"
                    ></div>

                </div>

                <span class="difficulty-label">
                    ${difficultyLabel}
                </span>

            </div>

        `;


        jobsContainer.appendChild(card);

    });

}


/* =========================================
   FILTER + SEARCH + SORT
   ========================================= */

function updateJobs() {

    const search =
        searchInput.value.toLowerCase().trim();

    const category =
        categoryFilter.value;

    let filtered = jobs.filter(job => {

        const matchesSearch =
            job.name.toLowerCase().includes(search) ||
            job.description.toLowerCase().includes(search);

        const matchesCategory =
            category === "all" ||
            job.category === category;

        return matchesSearch && matchesCategory;

    });


    const sort = sortSelect.value;


    if (sort === "difficulty-low") {

        filtered.sort(
            (a, b) => a.difficulty - b.difficulty
        );

    }


    if (sort === "difficulty-high") {

        filtered.sort(
            (a, b) => b.difficulty - a.difficulty
        );

    }


    if (sort === "earn-low") {

        filtered.sort(
            (a, b) => a.min - b.min
        );

    }


    if (sort === "earn-high") {

        filtered.sort(
            (a, b) => b.max - a.max
        );

    }


    displayJobs(filtered);

}


/* =========================================
   SEARCH EVENTS
   ========================================= */

searchInput.addEventListener(
    "input",
    updateJobs
);


categoryFilter.addEventListener(
    "change",
    updateJobs
);


sortSelect.addEventListener(
    "change",
    updateJobs
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        updateJobs();

        searchInput.focus();

    }
);


/* =========================================
   MONEY PLANNER
   ========================================= */

function setupPlanner() {

    plannerJob.innerHTML = "";

    jobs.forEach((job, index) => {

        const option =
            document.createElement("option");

        option.value = index;

        option.textContent =
            `${job.icon} ${job.name} ($${job.min}–$${job.max})`;

        plannerJob.appendChild(option);

    });

}


function calculateMoney() {

    const index =
        Number(plannerJob.value);

    const weeklyJobs =
        Number(jobsPerWeek.value);

    const monthlyWeeks =
        Number(weeksPerMonth.value);


    const job = jobs[index];


    if (!job || weeklyJobs < 0 || monthlyWeeks < 1) {

        plannerResult.innerHTML = `
            <span>Please enter valid numbers.</span>
        `;

        return;
    }


    /*
       Use the middle of the estimated
       earning range for the calculation.
    */

    const average =
        (job.min + job.max) / 2;


    const monthly =
        average *
        weeklyJobs *
        monthlyWeeks;


    plannerResult.innerHTML = `

        <span>
            Estimated monthly earnings from
            ${job.name}
        </span>

        <strong>
            $${Math.round(monthly).toLocaleString()}
        </strong>

    `;

}


calculateBtn.addEventListener(
    "click",
    calculateMoney
);


/* =========================================
   DARK MODE
   ========================================= */

function setDarkMode(enabled) {

    document.body.classList.toggle(
        "dark",
        enabled
    );


    if (enabled) {

        darkModeBtn.textContent = "☀️";

        localStorage.setItem(
            "teenMoneyDarkMode",
            "true"
        );

    } else {

        darkModeBtn.textContent = "🌙";

        localStorage.setItem(
            "teenMoneyDarkMode",
            "false"
        );

    }

}


darkModeBtn.addEventListener(
    "click",
    () => {

        const enabled =
            !document.body.classList.contains("dark");

        setDarkMode(enabled);

    }
);


/* =========================================
   LOAD SAVED DARK MODE
   ========================================= */

const savedDarkMode =
    localStorage.getItem("teenMoneyDarkMode");


if (savedDarkMode === "true") {

    setDarkMode(true);

}


/* =========================================
   START WEBSITE
   ========================================= */

setupPlanner();

updateJobs();
