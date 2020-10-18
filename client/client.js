import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'http://localhost:4000/graphql';
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
});

export default client;
