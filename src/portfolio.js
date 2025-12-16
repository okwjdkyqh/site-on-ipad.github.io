const products = [
  {
    title: "Проект 1",
    description: "Описание проекта",
    price: 100,
    img: "https://via.placeholder.com/300"
  },
  {
    title: "Проект 2",
    description: "Описание проекта",
    price: 200,
    img: "https://via.placeholder.com/300"
  }
];

const container = document.getElementById("products");

products.forEach(product => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card shadow-sm h-100">
      <img src="${product.img}" class="card-img-top">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>

        <div class="mt-auto">
          <label class="form-label">Количество</label>
          <input type="number" class="form-control" value="1" min="1">
        </div>
      </div>
    </div>
  `;

  container.appendChild(col);
});
