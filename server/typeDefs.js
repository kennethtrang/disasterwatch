const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    me: String!
  }
`;

module.exports = typeDefs;
