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
    description: String
    source: String!
    publishedAt: String
    urlToImage: String
    url: String!
  }

  type VideoItem {
    id: ID!
  }

  input SearchInput {
    city: String!
    state: String
    disaster: DisasterType!
  }

  type Query {
    user: User!
    news(input: SearchInput!): [NewsItem]!
    videos(input: SearchInput!): [VideoItem]!
  }
`;

module.exports = typeDefs;
