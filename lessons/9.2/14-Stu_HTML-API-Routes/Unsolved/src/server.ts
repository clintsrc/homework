 /*
  *
 
  🏗️ Create an API Route
  Work with a partner to implement the following user story:
  As a developer, I want to receive data back when I make a request to an API route.

  Acceptance Criteria
  It's done when I've imported Express.js into my project.
  It's done when I've created an app variable set to the value of express().
  It's done when I've created an API route to /api/.
  It's done when GET requests made using the browser to the API endpoint return the content found in terms.json.

  💡 Hints
  Which method can we use on the res object that will allow us to send JSON to the client?

  🏆 Bonus
  If you've completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: What other properties and methods are available on the Express request and response parameters?
  A: Other request properties and methods include: req.hostname, req.ip, req.get(field), req.accepts(types). Some 
     response properties and methods include: res.headersSent, res.locals, res.attachment([filename]), 
     res.cookie(name, value [, options]).
     See:
     ref: https://expressjs.com/en/api.html#req, https://expressjs.com/en/api.html#res

 *
 */

// TODO: import express
import express from 'express';

// Import the JSON data
import { readFileSync } from 'fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));

// TODO: initialize app variable
const app = express();

const PORT = 3001;

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
// http://localhost:3001/api/
app.get('/api/', (_, res: express.Response) => {
  res.json(termData);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
