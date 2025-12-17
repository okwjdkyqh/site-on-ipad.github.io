const projects = [
  {
    title: "пример: портрет",
    description: "представлен пример работы портрета какой-то девочки из пинтереста",
    img: "images/lol.png"
  },
  {
    title: "осеннее (или любое другое) меню",
    description: "например, это было сделано для кофейни.",
    img: "images/menufirst.jpeg"
  },
  {
    title: "диджитал-продукт",
    description: "иконки для айпада",
    img: "images/fun.jpeg"
  },
  {
    title: "брошюра",
    description: "билет в кино на Хэллоуин, для той же кофейни",
    img: "CAT TICKET.png"
  },
  {
    title: "стикеры",
    description: "позже будут распечатаны как 3д стикеры!",
    img: "sticker.png"
  },
  {
    title: "сумочка-брелок в виде фрукта из шерсти",
    description: "мандарин-брелок (для наушников и, как оказалось, в нем удобно носить мандарины) по технике мокрого валяния",
    img: "ididit.jpeg"
  }
];


const container = document.getElementById("products");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
  <div class="card bg-white text-dark shadow-sm h-100">
      <img src="${project.img}" class="card-img-top" alt="${project.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>

        <div class="mt-auto">
          <label class="form-label">Количество</label>
          <input type="number" class="form-control" value="0" min="0">
        </div>
      </div>
    </div>
  `;

  container.appendChild(col);
});
