/*


It's done when I have a GraphQL query that returns the following:
Every school's name, location, and student body count
Every class's name
Every professor's name
  query {
    schools {
      name
      location
      studentCount
    }
    classes {
      name
    }
    professors {
      name
    }
  }


It's done when I have a GraphQL query that returns the following:
Every class's name, credit hours, and building number
Every professor's name and student review score
  query {
    classes {
      name
      creditHours
      building
    }
    professors {
      name
      studentScore
    }
  }


It's done when I have a GraphQL query that returns the following:
Every professor's id, name, student review score, office hours, and office building number
  query {
    professors {
      _id
      name
      studentScore
      officeHours
      officeLocation
    }
  }

BONUS:
Q: What other GraphQL IDEs can you use besides the Apollo Sandbox?
A: Insomnia, Postman and others
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
