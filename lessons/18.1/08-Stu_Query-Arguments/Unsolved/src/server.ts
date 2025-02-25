/* 
Create a Class Resolver to Return Individual Classes
As a developer, I want to be able to query for individual classes.

Acceptance Criteria
It's done when the following GraphQL query returns a single class object:
  query class($id: ID!) {
    class(id: $id) {
      name
      professor {
        name
      }
    }
  }

  NOTE: add a JSON variable:
  1. find available IDs
  query {
    classes {
      _id
      name
    }
  }

  2. Set a variable for a known ID:
  {
    "id": "67bcf507d46230bb5993b58d"
  }


  BONUS:
  Q: How do you differentiate between required and optional arguments?
  A:
    A required argument has a ! after its type, e.g.
      query class($id: ID!) ...
    An optional argument doesn't
*/

import express from 'express';
import db from './connection.js';

// Import the ApolloServer class
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// Import the two parts of a GraphQL schema
import { typeDefs, resolvers } from './schemas/index.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {

  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
