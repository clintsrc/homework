/*
Update Professors to Include Their Classes
As a user, I want to be able to query for professors and their classes at the same time.

Acceptance Criteria
It's done when a query in the Apollo Sandbox is able to return data similar to the following:
"professors": [
  {
    "name": "Rebecca Watts",
    "classes": [
      {
        "name": "Introduction to Computational Thinking"
      },
      {
        "name": "User Interface Design"
      },
      {
        "name": "Internet Architecture and Protocols"
      }
    ]
  }
]

Example query:
  query GetProfessorsWithClasses {
    professors {
      name
      classes {
        name
      }
    }
  }

BONUS:
Q: What other types can be used in a GraphQL schema?
A:
  Scalars: Int, Float, String, Boolean, ID (and custom scalars).
  Object Types: Defines a complex object with fields.
  Query Types: Defines read operations.
  Mutation Types: Defines write operations.
  Subscription Types: Defines real-time data updates.
  Enum Types: Restricts a field to predefined values.
  Interface Types: Defines common fields that multiple types can implement.
  Union Types: Represents a field that can return one of multiple types.
  List Types: Represents an array of values.
  Non-Null Types: Ensures a field is never null.
  Input Types: Used for input values in mutations.
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
