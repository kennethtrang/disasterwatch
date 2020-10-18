const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
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

    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });

    app.use(cors({
      origin: 'http://localhost:8080',
      credentials: true,
    }));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(express.static('assets'));

    apolloServer.applyMiddleware({
      app,
      cors: false,
    });

    app.listen({ port: 4000 }, () => {
      console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
    });
  } catch (e) {
    console.log('Error starting server: ', e);
  }
};

startServer();
