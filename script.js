/* =========================================
   DIFFICULTY SORTING
========================================= */

const sortSelect = document.getElementById("sortSelect");

const container = document.querySelector(".container");


sortSelect.addEventListener("change", function () {

    const cards = Array.from(
        container.querySelectorAll(".money-card")
    );


    cards.sort(function (a, b) {

        const difficultyA =
            Number(a.dataset.difficulty);

        const difficultyB =
            Number(b.dataset.difficulty);


        if (sortSelect.value === "low") {

            return difficultyA - difficultyB;

        } else {

            return difficultyB - difficultyA;

        }

    });


    cards.forEach(function (card) {

        container.insertBefore(
            card,
            document.getElementById("tips")
        );

    });

});


/* =========================================
   QUIZ
========================================= */

const startQuiz =
    document.getElementById("startQuiz");

const closeQuiz =
    document.getElementById("closeQuiz");

const quizOverlay =
    document.getElementById("quizOverlay");

const quizSubmit =
    document.getElementById("quizSubmit");

const quizPreference =
    document.getElementById("quizPreference");

const quizResult =
    document.getElementById("quizResult");


/* OPEN QUIZ */

startQuiz.addEventListener("click", function () {

    quizOverlay.classList.add("show");

});


/* CLOSE QUIZ */

closeQuiz.addEventListener("click", function () {

    quizOverlay.classList.remove("show");

});


/* CLICK OUTSIDE QUIZ */

quizOverlay.addEventListener("click", function (event) {

    if (event.target === quizOverlay) {

        quizOverlay.classList.remove("show");

    }

});


/* QUIZ RESULT */

quizSubmit.addEventListener("click", function () {

    const preference =
        quizPreference.value;


    let result = "";


    if (preference === "outside") {

        result =
            "🐶 Dog Walking or 🚗 Car Washing could be good places to start!";

    }


    if (preference === "online") {

        result =
            "💻 Video Editing could be a good skill to learn!";

    }


    if (preference === "gaming") {

        result =
            "🎮 Try learning Roblox Studio and building your own game!";

    }


    if (preference === "creative") {

        result =
            "📺 YouTube or 💻 Video Editing could suit you!";

    }


    quizResult.textContent = result;

    quizResult.style.display = "block";

});


/* =========================================
   ESCAPE KEY CLOSES QUIZ
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        quizOverlay.classList.remove("show");

    }

});
