
const portfolioItems = [
    {
        img: "images/1.jpg",
        title: "Проект 1",
        description: "Краткое описание проекта №1."
    },
    {
        img: "images/2.jpg",
        title: "Проект 2",
        description: "Краткое описание проекта №2."
    },
    {
        img: "images/3.jpg",
        title: "Проект 3",
        description: "Краткое описание проекта №3."
    },
    {
        img: "images/4.jpg",
        title: "Проект 4",
        description: "Краткое описание проекта №4."
    },
    {
        img: "images/5.jpg",
        title: "Проект 5",
        description: "Краткое описание проекта №5."
    },
    {
        img: "images/6.jpg",
        title: "Проект 6",
        description: "Краткое описание проекта №6."
    }
];

// одну карточку
function createPortfolioCard(item) {
    const card = document.createElement("article");
    card.className = "portfolio-card";

    // картинка
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;
    img.className = "portfolio-image";
    card.appendChild(img);

    // заголовок
    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    h3.className = "portfolio-title";
    card.appendChild(h3);

    // оооописание
    const p = document.createElement("p");
    p.textContent = item.description;
    p.className = "portfolio-description";
    card.appendChild(p);

    return card;
}

// вставляем все карточки в контейнер
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("portfolio");
    if (!container) {
        console.error("Не найден контейнер #portfolio");
        return;
    }

    portfolioItems.forEach(item => {
        const card = createPortfolioCard(item);
        container.appendChild(card);
    });
});
