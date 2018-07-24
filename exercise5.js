const { createCustomer } = require('./handson/customer.js');

//Complete the createCustomer function in ./handson/customer.js
createCustomer(
  'jones@gmail.com',
  'password-jones',
  'Jim',
  'Jones',
  'US'
).then(customer => {
  console.log(customer);
}).catch(error => {
  console.log('There was an error');
  console.log(error);
});
