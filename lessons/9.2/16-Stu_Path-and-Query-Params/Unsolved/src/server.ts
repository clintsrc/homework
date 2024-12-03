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
  A: TODO

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

app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object

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

app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance

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
