const { getProductTypes } = require('./handson/product.js');

// Complete getProductTypes function in ./handson/product.js

getProductTypes().then(productTypes => {
  console.log(JSON.stringify(productTypes, null, 4));
}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
