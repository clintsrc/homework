/* 
Add Comments to Implementation of the MERN-stack Architecture
Describe the functionality of the code found in
   - client/vite.config.ts
   - server/src/server.ts
   - package.json:
     The package json scripts are setup to for a top level set of scripts that
     change to client and server directories to call their equivalent script 
     appropriately. The build commands use typescript to transpile the code to be 
     executed. Vite manages the client-side build for dev and production, but only 
     serves the client code in dev mode.
     The server-side code is transpiled by the typescript compiler and served up by
     node. In production the Node server also delivers the React client-side bundle from
     the build output (dist/) folder (as specified in the server.ts).
      "install": "cd server && npm i && cd ../client && npm i":
        handle the npm install for both the server and client by chaining their scripts
      "build": "concurrently \"cd server && npm run build\" \"cd client && npm run build\"",:
        uses the concurrently package to simultaneously build the server and the 
        client, chaining each of their build scripts
      "client:build": "cd client && npm run build",:
        build the client front-end only
      "render-build": "npm install && npm run build":
        run the production build (for the Render environment). It automatically installs 
        the package dependencies before executing the build.
      "seed": "cd server && npm run seed",:
        seed the database (usually only for the dev environment)
      "server:dev": "cd server && npm run dev",:
        run the back-end server in dev mode (with nodemon)
      "client:dev": "cd client && npm run dev",:
        run the front-end client in dev mode (with vite)
      "start:dev": "concurrently \"npm run server:dev\" \"wait-on tcp:3001 && npm run client:dev\"",:
        run the full stack in dev mode by chaining each of their start scripts
      "server": "cd server && npm start",:
        run the back-end server in production mode using node
      "start": "npm run client:build && npm run server",:
        run the client build in production mode.  It runs the production build of the 
        client then starts the production server
      "test": "echo \"Error: no test specified\" && exit 1",:
        this doesn't do anything but write a message to the console, and never has in 
        these examples. Hopefully that will change in the next module.

BONUS:
Q: What GitHub tool can we use to automate functionality, such as running tests or deploying our applications?
A: GitHub actions automates workflows:
   - CI/CD build and deployment
   - automated test execution
   - repository events can trigger custom workflows (pushes, PRs, scheduled tasks
 */


import express from 'express';
import db from './config/connection.js';
import path from 'node:path';

/* Importing tje ApolloServer class from the Apollo Server library to create a 
new instance.*/
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

/* Import the two parts of a GraphQL schema: 
  typeDefs schema
  resolvers queries/controllers */
import { typeDefs, resolvers } from './schemas/index.js';

/* Load the GraphQL schema into the Apollo Server */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  // start the Apollo server
  await server.start();
  // connect to the mongodb database
  await db();

  // set up Express to listen on default port 3001
  const PORT = process.env.PORT || 3001;
  // instantiate the express server
  const app = express();

  // configure the middleware to parse URL-encoded data.
  app.use(express.urlencoded({ extended: false }));
  
  // Middleware to parse JSON data
  app.use(express.json());

  // client-side '/graphql' requests will be handled by the Apollo Server
  app.use('/graphql', expressMiddleware(server));

  /* In production the Node server also delivers the React client-side bundle from
     the build output (dist/) folder.
     In development mode, a tool (e.g. Vite) would serve up the client side instead
     and manage hot reloading and other developer-friendly functionality */
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // The app is running and listening for graphql requests
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
