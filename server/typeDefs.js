const gql = require('graphql-tag');

const typeDefs = gql`
  enum DisasterType {
    WILDFIRE
    EARTHQUAKE
    TORNADO
    HURRICANE
  }

  type User {
    id: ID!
    username: String!
    email: String!
    city: String!
    state: String!
  }

  type NewsItem {
    id: ID!
    title: String!
    description: String!
    source: String!
    publishedAt: String!
    img: String!
    url: String!
  }

  type Video {
    id: ID!
    title: String!
  }

  input SearchInput {
    city: String!
    state: String
    disaster: DisasterType!
  }

  type Query {
    user: User!
    news(input: SearchInput!): [NewsItem]!
    videos(input: SearchInput!): [Video]!
  }
`;

module.exports = typeDefs;
