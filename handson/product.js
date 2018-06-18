const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getProductTypes = function getProductTypes() {

  return getClient().then((client) => {

    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productTypeUri = requestBuilder.productTypes.build();
    const productRequest = {
      uri: productTypeUri,
      method: 'GET'
    };
    return client.execute(productRequest);
  });
};

const createProduct = function createProduct(name, key, description, productTypeId, sku, priceCentAmount, taxCategoryId) {
  // TODO: 4
  //Create a product

};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
