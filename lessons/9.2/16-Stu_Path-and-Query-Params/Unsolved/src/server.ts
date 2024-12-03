/*
 *

  📐 Add Comments to Implementation of Path Parameters and Query Parameters
  Work with a partner to add comments describing the functionality of the code found in Unsolved.

  📝 Notes
  How are path parameters denoted when building route paths?
  How can we chain multiple query parameters together?
  Does the order of query parameters matter?
  Refer to the documentation:
  Express.js documentation on route paths
  Express.js documentation on req.query

  🏆 Bonus
  If you have completed this activity, work through the following challenge with your partner to further your knowledge:
  Q: When would you use query string parameters vs. route parameters?
  A: 
     * string parameters are used to modify or filter the data,
         e.g. /api/users?username=joeuser&employeeid=5150
     * route parameters are used to  modify or identify pecific resources, 
         e.g. /api/term/:term such as /api/term/Docker

 *
 */

import express from 'express';

// Import the JSON data
import { readFileSync } from 'fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));

// Import sortData function
import sortData from './sortdata.js';

// import Term type
import { Term } from './sortdata.js';


const app = express();
const PORT = 3001;

const sortHelper = (type: 'asc' | 'dsc') =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
 /*
  * get() retrieves api terms and provides an option to sort them if the
  *    'sort' parameter is included: 
  *       if the sort parameter is dsc they are sorted in descending order
  *       if the sort parameter is asc they are sorted in ascending order
 */
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
  /* 
   * The req.query object contains a key-value pair property for each 
   * parameter of the query string.
   * Example: 
   *    query string: ?username=joeuser&employeeid=5150
   *    req.query: {username: 'joeuser', employeeid: '5150'}
   */

  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return
/* 
 * If the matching :term is found it will return its value in lowercase
 * If it doesn't find a matching term it returns the string: 'No term found'
 */
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
  /* 
   * req.params contains key-value pairs for the URL parameters
   * req.params.term will have the term the user requested if it exists
   * Example:
   *    If the parameter is: /api/term/Docker
   *    req.params.term will be "Docker".
   * 
   */

  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
/* 
  If the user provides a category in the api url parameter that matches, 
     e.g. cloud in http://localhost:3001/api/terms/cloud then it will return
     all terms from terms.json with a matching category, such as this Docker term:
    {
      "term": "Docker",
      "definition": "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.",
      "url": "https://en.wikipedia.org/wiki/Docker_(software)",
      "category": "cloud",
      "relevance": 5
    },
 */
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
/*
 * This route will return all categories available in the terms.json
 * The route to invoke it is: /api/categories
 * It would return an array of unique categories found for all of the
 * records, e.g. ['web', 'cloud', 'networking']
 * 
 */
app.get('/api/categories', (_req, res) => {
  const categories = termData.map((term: Term) => term.category);

  const result = categories.filter(
    (cat: string, i: number) => categories.indexOf(cat) === i
  );

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
