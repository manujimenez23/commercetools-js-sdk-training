const { updateCart } = require('./handson/cart.js');

//Complete the updateCart function in ./handson/cart.js

const sku = '12345'; // From exercise 3
const customerId = 'c27d062d-9b04-4905-b686-1c5b0b89eff0'; // From exercise 4
const cartId = '62604757-7a2f-4008-a180-03c7b1b2aa5a';  // From exercise 5
const cartVersion = 1 // From exercise 5
const country = 'US';

updateCart(cartId, cartVersion, sku, customerId, country).then(cart => {
  // Save cart version for additional updates.
  console.log(JSON.stringify(cart, null, 4));
}).catch(error => {
  console.log(error);
});
