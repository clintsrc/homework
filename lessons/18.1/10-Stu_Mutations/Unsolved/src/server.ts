/*
  Class Mutation Does Not Show that Object Was Updated
  As a user, I want to see the latest information reflected on the application so that 
  I can stay informed and make timely decisions based on current data.

  Expected Behavior
    Updating a class's building number should show the new value in the returned object.
  Actual Behavior
    The returned object still shows the old building number.

  Steps to Reproduce the Problem
  1. In the command line, navigate to 10-Stu_Mutations/Unsolved.
  2. Run npm install, npm run build, npm run seed, and npm start.
  3. Open localhost:3001/graphql in the browser.
  4. Set the following variables in the Query Variables panel:
    1. Find available class ids/buildings:
    query {
      classes {
        _id
        name
        building
      }
    }
    2. Add a variable:
    {
      "id": "<insert ID of a class here>",
      "building": "AA"
    }
  5. Run the following mutation:
    mutation updateClass($id: ID!, $building: String!) {
      updateClass(id: $id, building: $building) {
        name
        building
      }
    }
  6. Note that the building property in the returned data is not set to "AA".



  BONUS:
  Q: What tools will you need to run GraphQL queries in your own front end?
  A: TODO
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
