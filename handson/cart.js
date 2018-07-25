const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const createCart = (body) => {
    return getClient().then((client) => {
      const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
      const cartUri = requestBuilder.carts.build();
      const createCartRequest = {
        uri: cartUri,
        method: 'POST',
        body: body
      };
      console.log(createCartRequest);
      return client.execute(createCartRequest);
    })
};

const getCart = (cartId) => {
    return getClient().then((client) => {
      const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
      const cartUri = requestBuilder.carts.byId('62604757-7a2f-4008-a180-03c7b1b2aa5a').build();
      const getCartRequest = {
        uri: cartUri,
        method: 'GET'
      };
      console.log(getCartRequest);
      return client.execute(getCartRequest);
    })
  };


const updateCart = function updateCart(cartId, cartVersion, sku, customerId, country) {
    return getClient().then((client) => {
      const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
      const cartUri = requestBuilder.carts.byId('62604757-7a2f-4008-a180-03c7b1b2aa5a').build();
      const updateCartRequest = {
        uri: cartUri,
        method: 'POST',
        body: {
          'version':cartVersion,
          'actions': [
            {
              'action':'addLineItem',
              'sku':sku,
            },
            {
              'action':'setShippingAddress',
              'address':{
                'country':country
              }
            },
            {
              'action':'setCustomerId',
              'customerId': customerId
            }
          ]
        }
      };
      console.log(updateCartRequest);
      return client.execute(updateCartRequest);
    })
}

const createOrder = function createOrder(cartId, cartVersion) {
  return getClient().then((client) => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const orderUri = requestBuilder.orders.build();
    const createOrderRequest = {
      uri: orderUri,
      method: 'POST',
      body: {
        id: cartId,
        version: cartVersion
      }
    };

    console.log(createOrderRequest);
    return client.execute(createOrderRequest);
  })
}

const deleteCart = function deleteCart(cartId, cartVersion) {
    return getClient().then((client) => {
      const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
      const cartUri = requestBuilder.carts.byId(cartId).withVersion(cartVersion).build();
      const deleteCartRequest = {
        uri: cartUri,
        method: 'DELETE'
      }

      console.log(deleteCartRequest);
      return client.execute(deleteCartRequest);
    })
};

module.exports.createCart = createCart;
module.exports.getCart = getCart;
module.exports.updateCart = updateCart;
module.exports.createOrder = createOrder;
module.exports.deleteCart = deleteCart;
