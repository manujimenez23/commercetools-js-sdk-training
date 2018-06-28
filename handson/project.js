const sdkRequestBuilder = require('@commercetools/api-request-builder');
const { getClient, projectKey } = require('./client.js');

const getProject = function getProject() {
  return getClient().then((client) => {
    // Use the request builder to execute project request
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const projectUri = requestBuilder.project.build();
    const projectRequest = {
      uri: projectUri,
      method: 'GET'
    };

    return client.execute(projectRequest);

  });
};

module.exports.getProject = getProject;
