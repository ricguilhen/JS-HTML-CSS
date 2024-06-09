function saveProduct(event, index = null) {
    event.preventDefault();

    const product = {
        name: document.getElementById(`name-${index}`).value,
        image: document.getElementById(`image-${index}`).value,
        desc: document.getElementById(`desc-${index}`).value,
        price: document.getElementById(`price-${index}`).value,
        category: document.getElementById(`category-${index}`).value
    };

    let products = JSON.parse(localStorage.getItem("products"));

    if(index !== null) {
        products[index] = product;
    } else {
        if(products) {
            products.push(product);
        } else {
            products = [product];
        }
    }

    localStorage.setItem("products", JSON.stringify(products));
    alert("Produto atualizado com sucesso!");

    loadProducts();
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products"));
    const productTableBody = document.getElementById("product-table-body");
    const productContainer = document.getElementById("product-container");

    if(products) {
        productTableBody.innerHTML = '';
        productContainer.innerHTML = '';
        products.forEach((product, index) => {
            const productRow = document.createElement("tr");
            productRow.innerHTML = `
                <td><input type="text" id="name-${index}" value="${product.name}"></td>
                <td><input type="text" id="image-${index}" value="${product.image}"></td>
                <td><input type="text" id="desc-${index}" value="${product.desc}"></td>
                <td><input type="text" id="price-${index}" value="${product.price}"></td>
                <td>
                    <select id="category-${index}">
                        <option value="roda" ${product.category === 'roda' ? 'selected' : ''}>Rodas</option>
                        <option value="truck" ${product.category === 'truck' ? 'selected' : ''}>Truck</option>
                        <option value="longboard" ${product.category === 'longboard' ? 'selected' : ''}>Longboard</option>
                        <option value="rolamento" ${product.category === 'rolamento' ? 'selected' : ''}>Rolamento</option>
                        <option value="lixa" ${product.category === 'lixa' ? 'selected' : ''}>Lixa</option>
                        <option value="sk-montado" ${product.category === 'sk-montado' ? 'selected' : ''}>Skate Montado</option>
                        <option value="old-school" ${product.category === 'old-school' ? 'selected' : ''}>Old School</option>
                        <option value="shape-maple" ${product.category === 'shape-maple' ? 'selected' : ''}>Shape Maple</option>
                        <option value="shape-powerlyte" ${product.category === 'shape-powerlyte' ? 'selected' : ''}>Shape Powerlyte</option>
                        <option value="shape-nacional" ${product.category === 'shape-nacional' ? 'selected' : ''}>Shape Nacional</option>
                    </select>
                </td>
                <td>
                    <button onclick="saveProduct(event, ${index})">Salvar</button>
                    <button onclick="deleteProduct(${index})">Excluir</button>
                </td>
            `;
            productTableBody.appendChild(productRow);

            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.desc}</p>
                <h3>R$ ${product.price}</h3>
                <button id="add-btn" onclick="addToCart(${index})">Adicionar ao carrinho</button>
            `;
            productContainer.appendChild(productCard);
        });
    }
}

function editProduct(index) {
    const products = JSON.parse(localStorage.getItem("products"));
    const product = products[index];

    document.getElementById("nome-prod").value = product.name;
    document.getElementById("image-prod").value = product.image;
    document.getElementById("desc-prod").value = product.desc;
    document.getElementById("price-prod").value = product.price;
    document.getElementById("product-type").value = product.category;

    document.getElementById("form-cad").onsubmit = function(event) {
        event.preventDefault();
        saveProduct(event, index);
    }
}

function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem("products"));
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

function addProduct(event) {
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
    window.location.reload();
}

function addToCart(index) {
    const products = JSON.parse(localStorage.getItem("products"));
    const product = products[index];

    let cart = JSON.parse(localStorage.getItem("cart"));

    if(cart) {
        cart.push(product);
    } else {
        cart = [product];
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Produto adicionado ao carrinho!");
}

document.getElementById("form-open").addEventListener("click", function() {
    window.location.href = "home.html";
});

window.addEventListener("load", function() {
    document.getElementById("form-cad").addEventListener("submit", function(event) {
        event.preventDefault();
        addProduct(event);
    });
    loadProducts();
});
window.loadProducts = loadProducts;
window.addEventListener("load", loadProducts);