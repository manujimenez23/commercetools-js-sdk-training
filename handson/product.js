const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getProductTypes = function getProductTypes() {

  return getClient().then((client) => {

    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productTypeUri = requestBuilder.productTypes.build();
    const productTypeRequest = {
      uri: productTypeUri,
      method: 'GET'
    };
    return client.execute(productTypeRequest);
  });
};

const createProduct = function createProduct(name, key, description, productTypeId, sku, priceCentAmount, taxCategoryId) {
  //Create a product

  return getClient().then((client) => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productUri = requestbuilder.products.build();
    const productRequest = {
      uri:productUri,
      method: 'POST',
      body: {
        name: { en: name },
        key: key,
        description: { en: description },
        productType: {
          id: productTypeId,
          typeId: 'product-type'
        },
        slug: { en: key },
        taxCategory: {
          typeId: 'tax-category',
          id: taxCategoryId
        },
        masterVariant: {
          sku: sku,
          prices: [{
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: priceCentAmount
            }
          }]
        }
      }
    };
    return client.execute(productRequest);
  });
};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
