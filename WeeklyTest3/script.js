const products = [
    { id: 1, name: 'Product-1', price: 100 },
    { id: 2, name: 'Product-2', price: 200 },
    { id: 3, name: 'Product-3', price: 300 },
];

let cart = {};

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <p>${product.name}</p>
            <p>${product.price}</p> 
            <div class='controls'>
            <button onclick="updateCart(${product.id}, -1)">-</button>
            <span id="quantity-${product.id}">0</span>
            <button onclick="updateCart(${product.id}, 1)">+</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function updateCart(id, change) {
    cart[id] = (cart[id] || 0) + change;
    if (cart[id] < 0) cart[id] = 0;

    document.getElementById(`quantity-${id}`).innerText = cart[id];
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    const cartMessage = document.getElementById('cart-message');
    cartDiv.innerHTML = '<h2>Cart</h2>'; // Clear previous items
    let totalPrice = 0;

    Object.keys(cart).forEach(id => {
        if (cart[id] > 0) {
            const product = products.find(p => p.id == id);
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            // cartItemDiv.innerText = `${product.name}    -   ${cart[id]} x ${product.price}`;
            cartItemDiv.innerHTML = `
            <p>${product.name}</p>
            <p>${cart[id]} x ${product.price}</p> 
        `;
            cartDiv.appendChild(cartItemDiv);
            totalPrice += product.price * cart[id];
        }
    });
     

    if (totalPrice > 0) {
        const totalDiv = document.createElement('div');
        totalDiv.className = 'total';
        totalDiv.innerHTML = `<h4>Total Price: ${totalPrice}</h4>`;
        cartDiv.appendChild(totalDiv);
        cartMessage.style.display = 'none';
    } else {
        cartMessage.style.display = 'block';
    }
}

renderProducts();