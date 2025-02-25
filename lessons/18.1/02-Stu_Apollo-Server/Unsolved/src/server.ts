import express from 'express';
import db from './connection.js';

// TODO: Add a comment describing the functionality of this expression
// Importing ApolloServer from the Apollo Server library to create a new Apollo server instance.
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// TODO: Add a comment describing the functionality of this expression
// Importing type definitions and resolvers for the GraphQL schema from the schemas directory.
import { typeDefs, resolvers } from './schemas/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// TODO: Add a comment describing the functionality of this async function
// This async function initializes the Apollo server, connects to the database, and sets up the Express application.
const startApolloServer = async () => {
  await server.start(); // start the Apollo server.
  await db(); // connect to the database

  const PORT = process.env.PORT || 3001; // Sets the port for the server to listen on.
  const app = express(); // Creates an instance of an Express application.

  app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data.
  app.use(express.json()); // Middleware to parse JSON data.

  // sets up the '/graphql' endpoint to handle GraphQL requests.
  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`); // log startup status
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`); // provides the GraphQL endpoint URL.
  });
};

// Call the async function to start the server
startApolloServer();
