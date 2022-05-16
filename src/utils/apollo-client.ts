import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
// Connection to api
const url = createHttpLink({
  uri: process.env.VUE_APP_GQL_QUERTY_URL,
});

// Setup memory cache
const cache = new InMemoryCache();

// Create client
const apolloClient = new ApolloClient({
  link: url,
  cache,
});
export { apolloClient };
