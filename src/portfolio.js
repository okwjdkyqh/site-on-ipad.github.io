const productsData = [
  {
    title: "Товар 1",
    price: 100,
    description: "Описание 1"
  },
  {
    title: "Товар 2",
    price: 200,
    description: "Описание 2"
  }
];

const container = document.getElementById("products");

productsData.forEach(product => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <strong>${product.price} ₽</strong>
  `;

  container.appendChild(div);
});
