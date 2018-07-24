const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const createCustomer = (email, password,firstName,lastName,country) => {
  return getClient().then((client) => {
  const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
  const customerUri = requestBuilder.customers.build();
  const customerRequest = {
    uri: customerUri,
    method: 'POST',
    body: {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      country: country
    }
  };
    console.log(customerRequest);
    return client.execute(customerRequest);
  });
};

module.exports.createCustomer = createCustomer;
