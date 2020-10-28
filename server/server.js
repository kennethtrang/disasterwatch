const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const socketio = require('socket.io');
require('dotenv').config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

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

    const httpServer = http.createServer(app);
    httpServer.listen(4000, () => {
      console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`);
    });

    const io = socketio(httpServer);
    io.on('connection', (socket) => {
      socket.on('disconnect', () => {
      });

      socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
      });
    });
  } catch (e) {
    console.log('Error starting server: ', e);
  }
};

startServer();
