function generateReceipt(cart, totalPrice) {
    const receipt = {
        items: cart,
        address: document.getElementById("adress-input").value,
        paymentMethod: {
            cardNumber: document.getElementById("card-number").value,
            cardName: document.getElementById("card-name").value,
            cardExpiration: document.getElementById("card-expiration").value,
            cardCVV: document.getElementById("card-cvv").value
        },
        totalPrice: totalPrice
    };

    localStorage.setItem("receipt", JSON.stringify(receipt));

    console.log("Recibo gerado");

    setTimeout(function() {
        window.location.href = "receipt.html";
    }, 1000);
}

document.getElementById("pay-button").addEventListener("click", function() {

    if (!isLoggedIn()) {
        alert("Você precisa estar logado para pagar.");
        return;
    }
    
    const cart = JSON.parse(localStorage.getItem("cart"));
    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);

    const confirmation = confirm(`O preço total é R$${totalPrice.toFixed(2)}. Você confirma a compra?`);

    if(confirmation) {
        console.log("Compra confirmada");
        
        const receipt = {
            items: cart,
            address: document.getElementById("adress-input").value,
            paymentMethod: {
                cardNumber: document.getElementById("card-number").value,
                cardName: document.getElementById("card-name").value,
                cardExpiration: document.getElementById("card-expiration").value,
                cardCVV: document.getElementById("card-cvv").value
            },
            totalPrice: totalPrice
        };

        localStorage.setItem("receipt", JSON.stringify(receipt));

        console.log("Recibo gerado");

        setTimeout(function() {
            window.location.href = "receipt.html";
        }, 1000);
    }
});
