function initializeProducts() {
    let products = getFromLocalStorage("products");

    if (!products || products.length === 0) {
        products = [
                {
                    name: "Roda Black Sheep 53mm",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/roda-bs-53mm1-addc95f0cad01008c716407128752425-1024-1024.webp",
                    desc: "Roda Skate Black sheep  53mm dureza 99a fabricada em poliuretano (PU) fundido.",
                    price: 123,
                    category: "roda"
                },
                {
                    name: "Truck Stronger Essência Vazado Tamboreado Logo 149mm",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/essenc-ea7cbc705549e2c62f17090573868553-1024-1024.webp",
                    desc: "Truck Stronger Hollow Fabricado em alumínio de alta resistência.",
                    price: 208,
                    category: "truck"
                },
                {
                    name: "Lixa Jessup emborrachada Rosa",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/lixa-rosa1-604fddb875f26c210816855596902652-1024-1024.webp",
                    desc: "Lixa Importada EMBORRACHADA com micro furos na lixa.",
                    price: 56,
                    category: "lixa"
                },
                {
                    name: "Mini Cruiser Collors lilac",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/pen061-44bcceee379e7e1bec16849500157546-1024-1024.webp",
                    desc: "Mini Curiser Collors é um skate retro, estilo os Dog Town,pequeno e leve,perfeito para aquele passeio nos dias de lazer.",
                    price: 284,
                    category: "longboard"
                },
                {
                    name: "Skate Montado Old School Mentex Zombies Atack",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/2-2c3f5e1dd78afd9aae17009446595988-1024-1024.webp",
                    desc: "Skate montado feito para quem curte uma transição ou ate mesmo a era Old, skate com um setup maior nas peças e o molde SKATE TUBARÂO",
                    price: 332,
                    category: "sk-montado"
                },
                {
                    name: "Shape Nineclouds - Futur",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/futur-d2a6b5a936d47f72c817141587578709-1024-1024.webp",
                    desc: "Shape Nineclounds construído com 7 camadas de maple (Pinho Canadense) prensadas e coladas com resina epoxy.",
                    price: 303,
                    category: "shape-maple"
                },
                {
                    name: "Shape Creature Powerlyte Logo Stump Verde",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/92871-990ac24cf70395fbbd16675055571968-1024-1024.webp",
                    desc: "Shape Creature Skateboards, fabricado com a tecnologia Powerlight que tem em sua base o Marfim + Fiber glass.",
                    price: 227,
                    category: "shape-powerlyte"
                },
                {
                    name: "Shape CBGANG Marfim Mike Dias Cerveja",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/foto-2-7b39afcdba2708f67617012000810310-1024-1024.webp",
                    desc: "Shape CBGANG Fabricado com marfim especial,  7 Laminas de marfim calibradas deixando o shape mais leve, para maior resistência, e pop, camadas coladas com resina epox mesma tecnologia dos shapes importados.",
                    price: 94,
                    category: "shape-nacional"
                },
                {
                    name: "Rolamento Spitfire Cheapshorts",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/rolamento-spitfire-cheapshots-1-cbskateshop-aeaa9bb0ba8053ffe315132702876658-1024-1024.webp",
                    desc: "Os Rolamentos Spitfire CheapShots possui duas  laterais blindadas em nylon uma na côr preta, já vem lubrificado e é Indicado para todas as modalidades.",
                    price: 123,
                    category: "rolamento"
                },
                {
                    name: "Shape Drop Dead Cruiser Dead Key Ring 9.25",
                    image: "https://acdn.mitiendanube.com/stores/087/236/products/drop051-8b638e148d9f3f7b0e16837289746932-1024-1024.webp",
                    desc: "Shape Drop Dead , Possui 7 lâminas selecionadas especialmente e calibradas, garantindo resistencia, POP, e a qualidade Drop Dead em shapes. Desenho em Transfer Americano.",
                    price: 265,
                    category: "old-school"
                },
                    
        ];

        saveToLocalStorage("products", products);
    }
}


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

function loadProducts(storageKey = "products") {
    const products = JSON.parse(localStorage.getItem(storageKey));
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

function getProductFromForm() {
    return {
        name: document.getElementById("nome-prod").value,
        image: document.getElementById("image-prod").value,
        desc: document.getElementById("desc-prod").value,
        price: document.getElementById("price-prod").value,
        category: document.getElementById("product-type").value
    };
}

function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Erro ao salvar no localStorage', e);
    }
}

function getFromLocalStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.error('Erro ao obter do localStorage', e);
        return null;
    }
}

function editProduct(index) {
    const products = getFromLocalStorage("products");
    const product = products[index];

    document.getElementById("nome-prod").value = product.name;
    document.getElementById("image-prod").value = product.image;
    document.getElementById("desc-prod").value = product.desc;
    document.getElementById("price-prod").value = product.price;
    document.getElementById("product-type").value = product.category;

    document.getElementById("form-cad").onsubmit = function(event) {
        event.preventDefault();
        const product = getProductFromForm();
        products[index] = product;
        saveToLocalStorage("products", products);
        loadProducts();
    }
}

function deleteProduct(index) {
    const products = getFromLocalStorage("products");
    products.splice(index, 1);
    saveToLocalStorage("products", products);
    loadProducts();
}

function addProduct(event) {
    event.preventDefault();

    const product = getProductFromForm();

    let products = getFromLocalStorage("products");

    if(products) {
        products.push(product);
    } else {
        products = [product];
    }

    saveToLocalStorage("products", products);
    alert("Produto cadastrado com sucesso!");

    loadProducts();
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

function filterProducts(searchValue) {
    const products = getFromLocalStorage("products");
    return products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
}

const checkboxes = document.querySelectorAll('input[name="category"]');

function filterProductsByCategory(category) {
    const products = getFromLocalStorage("products");
    return products.filter(product => product.category === category);
}

function displayProducts(products) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = '';

    products.forEach((product, index) => {
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

// Eventos

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(box => {
            if(box !== this) box.checked = false;
        });

        if(this.checked) {
            const category = this.value;
            const filteredProducts = filterProductsByCategory(category);
            displayProducts(filteredProducts);
        } else {
            const allProducts = getFromLocalStorage("products");
            displayProducts(allProducts);
        }
    });
});

window.addEventListener("load", function() {
    initializeProducts();
    loadProducts();
});

document.getElementById("btn-search").addEventListener("click", function() {
    const searchValue = document.getElementById("search-input").value;
    const filteredProducts = filterProducts(searchValue);
    localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));
    loadProducts("filteredProducts");
});

document.querySelector(".nav-link").addEventListener("click", function() {
    localStorage.removeItem("filteredProducts");
    loadProducts();
});

window.addEventListener("load", function() {
    localStorage.removeItem("filteredProducts");
    loadProducts();
});

window.loadProducts = loadProducts;
window.addEventListener("load", loadProducts);