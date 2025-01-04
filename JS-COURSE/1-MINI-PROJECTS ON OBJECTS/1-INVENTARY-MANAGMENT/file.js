let products = {};
let productIdCounter = 1;

const productListElement = document.getElementById('product-list');
const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('product-name');
const productQuantityInput = document.getElementById('product-quantity');

// Add product to the inventory
productForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const productName = productNameInput.value.trim();
  const productQuantity = parseInt(productQuantityInput.value, 10);

  if (!productName || isNaN(productQuantity) || productQuantity <= 0) {
    alert('Please provide valid product name and quantity');
    return;
  }

  const productId = productIdCounter++;
  products[productId] = {
    name: productName,
    quantity: productQuantity
  };

  updateProductList();
  productForm.reset();
});

// Update product list display
function updateProductList() {
  productListElement.innerHTML = '';
  Object.keys(products).forEach(id => {
    const product = products[id];
    const productItem = document.createElement('li');
    productItem.innerHTML = `
      <strong>${product.name}</strong> - Quantity: ${product.quantity}
      <button onclick="removeProduct(${id})">Remove</button>
      <button onclick="updateProduct(${id})">Update</button>
    `;
    productListElement.appendChild(productItem);
  });
}

// Remove product from inventory
function removeProduct(id) {
  delete products[id];
  updateProductList();
}

// Update product quantity
function updateProduct(id) {
  const newQuantity = prompt("Enter new quantity:", products[id].quantity);
  if (newQuantity && !isNaN(newQuantity) && newQuantity > 0) {
    products[id].quantity = parseInt(newQuantity, 10);
    updateProductList();
  } else {
    alert('Invalid quantity');
  }
}
