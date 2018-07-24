const { getProductTypes, createProduct } = require('./handson/product.js');
const { getTaxCategories } = require('./handson/taxCategory.js');

const p1 = getProductTypes();
const p2 = getTaxCategories();

Promise.all([p1, p2]).then((responses) => {
  const productType = responses[0].body.results[0];
  const taxCategory = responses[1].body.results[0];

  createProduct({
    name:'Air Force One',
    key:'airforce',
    description:'Fresh Nikes',
    productTypeId:productType.id,
    slug:'airforce-1',
    taxCategoryId:taxCategory.id,
    sku:'12345', //string
    priceCentAmount:10000, //number
    publish: true //Boolean

  }).then(product => {
    console.log(JSON.stringify(product, null, 4));
  }).catch(err => {
  console.log('There was an error')
  console.log(JSON.stringify(err, null, 4));
  });

}).catch(error => {
  console.log(JSON.stringify(error, null, 4));
});
