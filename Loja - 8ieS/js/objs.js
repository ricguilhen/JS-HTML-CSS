const adminAccount = {
    username: "admin",
    password: "admin"
};

const account = {
    username: "user",
    password: "user"
};

const product = {
    name: "product",
    image: "url",
    desc: "descrição",
    price: 10,
    category: document.getElementById("product-type").value
};

const receipt = {
        items: cart,
        address: document.getElementById("address-input").value,
        paymentMethod: {
            cardNumber: document.getElementById("card-number").value,
            cardName: document.getElementById("card-name").value,
            cardExpiration: document.getElementById("card-expiration").value,
            cardCVV: document.getElementById("card-cvv").value
        },
        totalPrice: totalPrice
};