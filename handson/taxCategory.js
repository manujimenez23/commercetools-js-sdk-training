const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getTaxCategories = function getTaxCategories() {

  return getClient().then((client) => {

    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const taxCategoryUri = requestBuilder.taxCategories.build();
    const taxCategoryRequest = {
      uri: taxCategoryUri,
      method: 'GET'
    };
    return client.execute(taxCategoryRequest);

  });

};

module.exports.getTaxCategories = getTaxCategories;
