function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartContainer = document.querySelector("#cart-container");
    let totalPrice = 0;
    if(cart) {
        cart.forEach((product, index) => {
            const productRow = document.createElement("tr");
            const productDetails = document.createElement("td");
            productDetails.classList.add("p-4");
            productDetails.innerHTML = `
    <div class="media">
        <div class="media-image">
            <img src="${product.image}" class="d-block ui-w-40 ui-bordered mr-4" alt="">
        </div>
        <div class="media-body">
            <a href="#" class="d-block text-dark">${product.name}</a>
            <small>
                <span class="text-muted">Descrição: </span> ${product.desc}
            </small>
        </div>
    </div>
`;
            productRow.appendChild(productDetails);
            const productPrice = document.createElement("td");
            productPrice.classList.add("text-right", "font-weight-semibold", "align-middle", "p-4");
            productPrice.textContent = `R$ ${product.price}`;
            productRow.appendChild(productPrice);
            const productTotal = document.createElement("td");
            productTotal.classList.add("text-right", "font-weight-semibold", "align-middle", "p-4");
            productTotal.textContent = `R$ ${parseFloat(product.price).toFixed(2)}`;
            productRow.appendChild(productTotal);
            const productRemove = document.createElement("td");
            productRemove.classList.add("text-center", "align-middle", "px-0");
            productRemove.innerHTML = '<a href="#" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a>';
            productRow.appendChild(productRemove);
            cartContainer.appendChild(productRow);
            totalPrice += parseFloat(product.price);
        });
    }

    const totalPriceElement = document.querySelector(".text-large strong");
    totalPriceElement.textContent = `R$ ${totalPrice.toFixed(2)}`;

    const checkoutButton = document.querySelector(".btn.btn-primary");
    checkoutButton.addEventListener("click", function() {
        window.location.href = "payment.html";
    });
}

window.addEventListener("load", loadCart);