const projects = [
  {
    title: "Проект 1",
    description: "Короткое описание проекта",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Проект 2",
    description: "Короткое описание проекта",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Проект 3",
    description: "Короткое описание проекта",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Проект 4",
    description: "Короткое описание проекта",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Проект 5",
    description: "Короткое описание проекта",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Проект 6",
    description: "Короткое описание проекта",
    img: "https://via.placeholder.com/400x250"
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
          <input type="number" class="form-control" value="1" min="1">
        </div>
      </div>
    </div>
  `;

  container.appendChild(col);
});
