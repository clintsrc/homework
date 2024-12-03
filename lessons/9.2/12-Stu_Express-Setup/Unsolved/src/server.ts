/*
 *

  🏗️ Implement Express.js Routing
  Work with a partner to implement the following user story:
  As a user, I want to receive HTML content when I visit specific URLs.

  Acceptance Criteria
  It's done when I've created an app variable set to the value of express().
  It's done when I've set up middleware to serve static files from /public.
  It's done when I've created an HTML route to serve up paths.html.

  💡 Hints
  What is the path module used for when defining routes?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What is a PORT? Can you find some additional examples of applications that use specific PORTs while in use?
  A: A port is a numeric identifier that a client uses to communicate with applications running on a server.
     Other examples of commonly used ports include HTTP web communication on port 80, HTTPS secure web communication 
     on port 443, telnet used to run remote commands on port 22, and ftp to transfer
     files over port 21

*
*/

import express from 'express';

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TODO: Create an instance of the Express.js server and assign it to a variable called 'app'
const app = express();

const PORT = 3001;

// TODO: Invoke app.use() to serve static files from the 'public' folder
app.use( 
  express.static(path.join(__dirname, '../public'))
);

app.get('/', (_req, res) => res.send('Navigate to /send or /paths'));

app.get('/send', (_req, res) =>
  res.sendFile(path.join(__dirname, '../public/send.html'))
);

// TODO: Create a new route for the '/paths' endpoint that sends the 'paths.html' file
app.get('/paths', (_req, res) =>
  res.sendFile(path.join(__dirname, '../public/paths.html'))
)

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
