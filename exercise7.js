const { getCart } = require('./handson/cart.js');

//Complete the getCart function in ./handson/cart.js

const cartId = '62604757-7a2f-4008-a180-03c7b1b2aa5a';  // From exercise 5

getCart(cartId).then(cart => {
  //Make a note of your cartID for future exercises
  console.log(JSON.stringify(cart, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
