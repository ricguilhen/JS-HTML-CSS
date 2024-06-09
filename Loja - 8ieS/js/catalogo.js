function saveProduct(event) {
    event.preventDefault();

    const product = {
        name: document.getElementById("nome-prod").value,
        image: document.getElementById("image-prod").value,
        desc: document.getElementById("desc-prod").value,
        price: document.getElementById("price-prod").value,
        category: document.getElementById("product-type").value
    };

    let products = JSON.parse(localStorage.getItem("products"));

    if(products) {
        products.push(product);
    } else {
        products = [product];
    }

    localStorage.setItem("products", JSON.stringify(products));
    alert("Produto cadastrado com sucesso!");

    loadProducts();
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products"));

    if(products) {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.desc}</p>
                <h3>R$ ${product.price}</h3>
            `;
            document.getElementById("product-container").appendChild(productCard);
        });
    }
}

document.getElementById("form-cad").addEventListener("submit", saveProduct);
window.loadProducts = loadProducts;
window.addEventListener("load", loadProducts);