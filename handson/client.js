const { createClient } = require('@commercetools/sdk-client');
const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');
const { getCredentials } = require('@commercetools/get-credentials');

const authHost = 'https://auth.commercetools.co';
const projectKey = 'js-sdk-training';
const scopes = ['manage_project:js-sdk-training'];
const host = 'https://api.commercetools.co';

const getClient = function getClient() {
  // TODO: 1.3
  // Use getCredentials
  // then createClient
  // getCredentials pulls information from .ct-credentials.env
  // Credentials are stored by key CT_<KEY>

  return getCredentials('jssdktraining').then((credentials) => {
    const authConfig = {
      host: authHost,
      projectKey,
      credentials,
      scopes,
    };

  return createClient({
    middlewares: [
      middlewareAuth.createAuthMiddlewareForClientCredentialsFlow(authConfig),
      httpMiddleware.createHttpMiddleware({ host }),
    ]
  });
});
};

module.exports.getClient = getClient;
module.exports.projectKey = projectKey;
