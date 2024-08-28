document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        const cartItems = document.getElementById('cartItems');
        const listItem = document.createElement('li');
        listItem.textContent = ${productName} - $${productPrice};        
cartItems.appendChild(listItem);

        document.getElementById('cartModal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'none';
});

document.getElementById('checkout').addEventListener('click', () => {
    alert('Gracias por tu compra!');
});
