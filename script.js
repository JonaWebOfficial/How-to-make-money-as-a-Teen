const sortSelect = document.getElementById("sortSelect");
const container = document.querySelector(".container");

sortSelect.addEventListener("change", function () {
    const cards = Array.from(
        document.querySelectorAll(".money-card")
    );

    cards.sort((a, b) => {
        const difficultyA = Number(a.dataset.difficulty);
        const difficultyB = Number(b.dataset.difficulty);

        if (this.value === "low") {
            return difficultyA - difficultyB;
        } else {
            return difficultyB - difficultyA;
        }
    });

    cards.forEach(card => {
        container.appendChild(card);
    });
});
