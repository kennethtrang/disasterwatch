const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    const app = express();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: () => ({
        env: process.env,
      }),
    });

    // app.use(express.urlencoded({ extended: false }), express.json());
    // app.use(express.static('assets'));

    // app.use('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
  } catch (e) {
    console.log('Error starting server: ', e);
  }
};

startServer();
