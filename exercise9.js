const { createOrder } = require('./handson/cart.js');

//Complete the createOrder function in ./handson/cart.js

const cartId = '62604757-7a2f-4008-a180-03c7b1b2aa5a';
const cartVersion = 7;

createOrder(cartId, cartVersion).then(order => {
  console.log(JSON.stringify(order, null, 4));
}).catch(error => {
  console.log(error);
});
