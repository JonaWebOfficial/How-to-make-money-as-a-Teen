/* ==========================================
   TEEN MONEY - MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       DARK MODE
    ========================================== */

    const darkModeBtn = document.getElementById("darkModeBtn");

    if (localStorage.getItem("teenMoneyDark") === "true") {
        document.body.classList.add("dark");
        darkModeBtn.textContent = "☀️";
    }

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark = document.body.classList.contains("dark");

        localStorage.setItem("teenMoneyDark", dark);

        darkModeBtn.textContent = dark ? "☀️" : "🌙";

        addXP(5);
    });


    /* ==========================================
       SEARCH + FILTER + SORT
    ========================================== */

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const difficultyFilter = document.getElementById("difficultyFilter");
    const sortSelect = document.getElementById("sortSelect");
    const ideasGrid = document.getElementById("ideasGrid");
    const noResults = document.getElementById("noResults");

    function updateIdeas() {

        const search = searchInput.value.toLowerCase().trim();
        const category = categoryFilter.value;
        const difficulty = difficultyFilter.value;
        const sort = sortSelect.value;

        const cards = Array.from(
            ideasGrid.querySelectorAll(".idea-card")
        );

        cards.forEach(card => {

            const name = card.dataset.name.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            const matchesSearch =
                name.includes(search) ||
                description.includes(search);

            const matchesCategory =
                category === "all" ||
                card.dataset.category === category;

            const matchesDifficulty =
                difficulty === "all" ||
                card.dataset.difficulty === difficulty;

            card.style.display =
                matchesSearch &&
                matchesCategory &&
                matchesDifficulty
                    ? ""
                    : "none";
        });


        /* SORT */

        const visibleCards = cards.filter(
            card => card.style.display !== "none"
        );

        visibleCards.sort((a, b) => {

            const aDiff = Number(a.dataset.difficulty);
            const bDiff = Number(b.dataset.difficulty);

            const aTime = Number(a.dataset.time);
            const bTime = Number(b.dataset.time);

            const aEarn = Number(a.dataset.earnings);
            const bEarn = Number(b.dataset.earnings);

            if (sort === "difficulty-low")
                return aDiff - bDiff;

            if (sort === "difficulty-high")
                return bDiff - aDiff;

            if (sort === "time-low")
                return aTime - bTime;

            if (sort === "time-high")
                return bTime - aTime;

            if (sort === "earnings-low")
                return aEarn - bEarn;

            if (sort === "earnings-high")
                return bEarn - aEarn;

            return 0;
        });

        visibleCards.forEach(card => {
            ideasGrid.appendChild(card);
        });


        noResults.style.display =
            visibleCards.length === 0
                ? "block"
                : "none";
    }

    searchInput.addEventListener("input", updateIdeas);
    categoryFilter.addEventListener("change", updateIdeas);
    difficultyFilter.addEventListener("change", updateIdeas);
    sortSelect.addEventListener("change", updateIdeas);


    /* ==========================================
       FAVORITES
    ========================================== */

    const favorites = JSON.parse(
        localStorage.getItem("teenMoneyFavorites") || "[]"
    );

    document.querySelectorAll(".idea-card").forEach(card => {

        const button = card.querySelector(".favorite");
        const name = card.dataset.name;

        if (favorites.includes(name)) {
            button.classList.add("active");
            button.textContent = "★";
        }

        button.addEventListener("click", () => {

            const index = favorites.indexOf(name);

            if (index === -1) {
                favorites.push(name);

                button.classList.add("active");
                button.textContent = "★";

                addXP(10);

            } else {
                favorites.splice(index, 1);

                button.classList.remove("active");
                button.textContent = "☆";
            }

            localStorage.setItem(
                "teenMoneyFavorites",
                JSON.stringify(favorites)
            );
        });
    });


    /* ==========================================
       LEARN MORE MODAL
    ========================================== */

    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const modalDone = document.getElementById("modalDone");

    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalIcon = document.getElementById("modalIcon");

    document.querySelectorAll(".learn-more").forEach(button => {

        button.addEventListener("click", () => {

            const card = button.closest(".idea-card");

            modalTitle.textContent = button.dataset.title;
            modalDescription.textContent = button.dataset.description;
            modalIcon.textContent =
                card.querySelector(".idea-icon").textContent;

            modal.classList.add("show");

            addXP(5);
        });
    });

    function closeTheModal() {
        modal.classList.remove("show");
    }

    closeModal.addEventListener("click", closeTheModal);
    modalDone.addEventListener("click", closeTheModal);

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeTheModal();
        }
    });


    /* ==========================================
       RANDOM IDEA
    ========================================== */

    const randomIdeaBtn =
        document.getElementById("randomIdeaBtn");

    randomIdeaBtn.addEventListener("click", () => {

        const cards = Array.from(
            document.querySelectorAll(".idea-card")
        );

        const random =
            cards[Math.floor(Math.random() * cards.length)];

        random.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        random.style.transform = "scale(1.04)";

        setTimeout(() => {
            random.style.transform = "";
        }, 700);

        addXP(5);
    });


    /* ==========================================
       MONEY PLANNER
    ========================================== */

    const plannerGoal =
        document.getElementById("plannerGoal");

    const plannerWeekly =
        document.getElementById("plannerWeekly");

    const plannerWeeks =
        document.getElementById("plannerWeeks");

    const plannerText =
        document.getElementById("plannerText");

    const plannerProgress =
        document.getElementById("plannerProgress");


    function updateMoneyPlanner() {

        const goal = Number(plannerGoal.value);
        const weekly = Number(plannerWeekly.value);

        if (
            !Number.isFinite(goal) ||
            !Number.isFinite(weekly) ||
            goal <= 0 ||
            weekly <= 0
        ) {

            plannerWeeks.textContent = "Enter valid amounts";

            plannerText.textContent =
                "Enter your savings goal and expected weekly earnings.";

            plannerProgress.style.width = "0%";

            return;
        }

        const weeks = Math.ceil(goal / weekly);

        plannerWeeks.textContent =
            `${weeks} week${weeks === 1 ? "" : "s"}`;

        plannerText.textContent =
            `At $${weekly.toFixed(2)} per week, a $${goal.toFixed(2)} goal would take about ${weeks} week${weeks === 1 ? "" : "s"}.`;

        plannerProgress.style.width = "100%";
    }


    plannerGoal.addEventListener(
        "input",
        updateMoneyPlanner
    );

    plannerWeekly.addEventListener(
        "input",
        updateMoneyPlanner
    );

    updateMoneyPlanner();


    /* ==========================================
       EARNINGS CALCULATOR
    ========================================== */

    const calcAmount =
        document.getElementById("calcAmount");

    const calcJobs =
        document.getElementById("calcJobs");

    const weeklyResult =
        document.getElementById("weeklyResult");

    const monthlyResult =
        document.getElementById("monthlyResult");


    function updateCalculator() {

        const amount = Number(calcAmount.value) || 0;
        const jobs = Number(calcJobs.value) || 0;

        const weekly = amount * jobs;
        const monthly = weekly * 4;

        weeklyResult.textContent =
            `$${weekly.toFixed(2)}`;

        monthlyResult.textContent =
            `About $${monthly.toFixed(2)} per month`;
    }


    calcAmount.addEventListener(
        "input",
        updateCalculator
    );

    calcJobs.addEventListener(
        "input",
        updateCalculator
    );

    updateCalculator();


    /* ==========================================
       SAVINGS GOAL
    ========================================== */

    const goalAmount =
        document.getElementById("goalAmount");

    const savedAmount =
        document.getElementById("savedAmount");

    const goalProgressBar =
        document.getElementById("goalProgressBar");

    const goalText =
        document.getElementById("goalText");

    const goalPercent =
        document.getElementById("goalPercent");


    function updateGoal() {

        const goal =
            Number(goalAmount.value) || 0;

        const saved =
            Number(savedAmount.value) || 0;

        if (goal <= 0) {
            goalProgressBar.style.width = "0%";
            goalText.textContent = "$0 saved";
            goalPercent.textContent = "0%";
            return;
        }

        const percent =
            Math.min((saved / goal) * 100, 100);

        goalProgressBar.style.width =
            `${percent}%`;

        goalText.textContent =
            `$${saved.toFixed(2)} saved`;

        goalPercent.textContent =
            `${Math.round(percent)}%`;

        localStorage.setItem(
            "teenMoneyGoal",
            goal
        );

        localStorage.setItem(
            "teenMoneySaved",
            saved
        );
    }


    const savedGoal =
        localStorage.getItem("teenMoneyGoal");

    const savedMoney =
        localStorage.getItem("teenMoneySaved");

    if (savedGoal) {
        goalAmount.value = savedGoal;
    }

    if (savedMoney) {
        savedAmount.value = savedMoney;
    }

    goalAmount.addEventListener(
        "input",
        updateGoal
    );

    savedAmount.addEventListener(
        "input",
        updateGoal
    );

    updateGoal();


    /* ==========================================
       QUIZ
    ========================================== */

    let selectedCategory = null;
    let selectedDifficulty = null;


    document.querySelectorAll(".quiz-options").forEach(group => {

        const buttons =
            group.querySelectorAll("button");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                buttons.forEach(btn =>
                    btn.classList.remove("selected")
                );

                button.classList.add("selected");

                if (
                    group.dataset.question ===
                    "category"
                ) {
                    selectedCategory =
                        button.dataset.value;
                }

                if (
                    group.dataset.question ===
                    "difficulty"
                ) {
                    selectedDifficulty =
                        Number(button.dataset.value);
                }
            });
        });
    });


    document.getElementById("quizButton")
        .addEventListener("click", () => {

            const result =
                document.getElementById("quizResult");

            if (!selectedCategory ||
                !selectedDifficulty) {

                result.textContent =
                    "Choose an answer for both questions first.";

                return;
            }

            const cards =
                Array.from(
                    document.querySelectorAll(".idea-card")
                );

            const matches =
                cards.filter(card => {

                    const categoryMatch =
                        card.dataset.category ===
                        selectedCategory;

                    const difficulty =
                        Number(card.dataset.difficulty);

                    return categoryMatch &&
                        difficulty <= selectedDifficulty;
                });

            if (matches.length === 0) {

                result.textContent =
                    "No perfect matches found. Try choosing a higher difficulty.";

                return;
            }

            const names =
                matches
                    .slice(0, 3)
                    .map(card => card.dataset.name);

            result.innerHTML =
                `<strong>🎯 Your matches:</strong><br>
                ${names.join(" • ")}`;

            addXP(25);
        });


    /* ==========================================
       XP SYSTEM
    ========================================== */

    let xp =
        Number(
            localStorage.getItem("teenMoneyXP")
        ) || 0;


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

        const levelXP =
            xp % 100;

        document.getElementById(
            "userLevel"
        ).textContent = level;

        document.getElementById(
            "xpText"
        ).textContent =
            `${levelXP} / 100 XP`;

        document.getElementById(
            "xpBar"
        ).style.width =
            `${levelXP}%`;
    }


    updateXP();


    /* ==========================================
       KEYBOARD SHORTCUT
    ========================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            searchInput.focus();
        }

        if (event.key === "Escape") {
            closeTheModal();
        }
    });


    /* ==========================================
       INITIALIZE
    ========================================== */

    updateIdeas();

});
