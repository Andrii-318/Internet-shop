document.addEventListener("DOMContentLoaded", function () {
  const categories = {
    Електроніка: [
      {
        name: "Телефон",
        description: "Сучасний смартфон з високою роздільною здатністю екрану.",
      },
      {
        name: "Телевізор",
        description: "Тільки природна передача яскравості і кольорів",
      },
    ],
    Одяг: [
      {
        name: "Футболка",
        description: "Зручна футболка з натуральної бавовни .",
      },
      { name: "Джинси", description: "Модні джинси з міцної тканини." },
    ],
    Продукти: [
      { name: "Яблука", description: "Свіжі соковиті яблука." },
      { name: "Молоко", description: "Органічне молоко без консервантів." },
    ],
  };

  const categoriesList = document.getElementById("categoriesList");
  const productsList = document.getElementById("productsList");
  const productInfo = document.getElementById("productInfo");

  //Категорії
  for (let category in categories) {
    const li = document.createElement("li");
    li.textContent = category;
    li.addEventListener("click", function () {
      displayProducts(category);
    });
    categoriesList.appendChild(li);
  }

  //Продукти
  function displayProducts(category) {
    productsList.innerHTML = "";
    productInfo.innerHTML = "";
    categories[category].forEach((product) => {
      const li = document.createElement("li");
      li.textContent = product.name;
      li.addEventListener("click", function () {
        displayProductInfo(product);
      });
      productsList.appendChild(li);
    });
  }

  // Інформація про продукт
  function displayProductInfo(product) {
    productInfo.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="buyProduct()">Купити</button>
        `;
  }

  // Покупка продукту
  window.buyProduct = function () {
    alert("Товар куплений!");
    productsList.innerHTML = "";
    productInfo.innerHTML = "";
  };
});
