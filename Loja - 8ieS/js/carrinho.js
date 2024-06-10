function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartTableBody = document.getElementById("cart-table-body");
    let totalPrice = 0;

    if(cart) {
        cartTableBody.innerHTML = '';
        cart.forEach((product, index) => {
            const productRow = document.createElement("tr");
            productRow.innerHTML = `
                <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;"></td>
                <td>${product.name}</td>
                <td id="price">R$${product.price}</td>
                <td><button id="rem-button" onclick="removeFromCart(${index})">Remover</button></td>
            `;
            cartTableBody.appendChild(productRow);
            totalPrice += parseFloat(product.price);
        });
    }

    document.getElementById("total-price").textContent = "Preço total: R$ " + totalPrice.toFixed(2);
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

document.getElementById("checkout-button").addEventListener("click", function() {
    window.location.href = "pay.html";
});

document.getElementById("form-open").addEventListener("click", function() {
    window.location.href = "home.html";
});

window.addEventListener("load", loadCart);