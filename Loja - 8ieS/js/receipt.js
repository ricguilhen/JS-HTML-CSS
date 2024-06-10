window.onload = function() {
    let receipt = JSON.parse(localStorage.getItem("receipt"));
    
    while (!receipt) {
        receipt = JSON.parse(localStorage.getItem("receipt"));
    }

    const receiptContainer = document.getElementById("receipt-container");

    receiptContainer.innerHTML = `
        <h2>Recibo</h2>
        <h3>Endereço: ${receipt.address}</h3>
        <h3>Método de pagamento: ${receipt.paymentMethod.cardNumber}</h3>
        <h3>Itens:</h3>
        <ul>
            ${receipt.items.map(item => `<li>${item.name} - R$${item.price}</li>`).join('')}
        </ul>
        <h3>Preço total: R$${receipt.totalPrice.toFixed(2)}</h3>
    `;
}