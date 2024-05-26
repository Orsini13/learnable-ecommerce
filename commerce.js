const products = [{ id: 1, name: 'T-Shirt', price: 20 }, 
{ id: 2, name: 'Jeans', price: 50 }, 
{ id: 3, name: 'Sneakers', price: 80 }];
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    product && cart.push(product);
}

addToCart(1);
console.log(cart);