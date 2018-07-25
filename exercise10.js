const { deleteCart } = require('./handson/cart.js');

//Complete the deleteCart function in ./handson/cart.js

const cartId = '78f5237d-d387-48a3-9d55-fb237da3acfa';
const cartVersion = 1;

deleteCart(cartId, cartVersion).then(order => {
  console.log(JSON.stringify(order, null, 4));
}).catch(error => {
  console.log(error);
});
