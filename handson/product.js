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

const createProduct = ({name, key, description, productTypeId, slug,taxCategoryId, sku, priceCentAmount, publish }) => {
  //Create a published product

  return getClient().then((client) => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productUri = requestBuilder.products.build();
    const productRequest = {
      uri: productUri,
      method: 'POST',
      body: {
        name: { en: name },
        key: key,
        description: { en: description },
        productType: {
          id: productTypeId,
          typeId: 'product-type'
        },
        slug: { en: slug },
        taxCategory: {
          "typeId": "tax-category",
          "id": taxCategoryId
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
        },
        publish: publish
      }
    };
    console.log(productRequest);
    return client.execute(productRequest);
  });
};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
