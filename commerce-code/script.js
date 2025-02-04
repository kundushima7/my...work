let cart = [];
let cartCount = 0;
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartCount++;
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function checkout() {
    if (cartCount === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(`Checkout successful! Total price: $${totalPrice.toFixed(2)}`);
    cart = [];
    cartCount = 0;
    totalPrice = 0;
    updateCartDisplay();
    toggleCart();
}
