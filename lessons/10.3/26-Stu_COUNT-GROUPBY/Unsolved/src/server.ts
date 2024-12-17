/*

📐 Add Comments to Implementation of Aggregate Functions in PostgreSQL Queries

Work with a partner to add comments describing the functionality of the code 
  found in server.

📝 Notes
Refer to the documentation:
PostgreSQL documentation on aggregate functions

🏆 Bonus
If you have completed this activity, work through the following challenge with 
  your partner to further your knowledge:
What other aggregate functions can we use in PostgreSQL queries?

ARRAY_AGG(): Returns an array of values.
STRING_AGG(): Concatenates values into a single string with a specified delimiter.
BOOL_AND(): Returns true if all input values are true.
BOOL_OR(): Returns true if at least one input value is true.
JSON_AGG(): Aggregates values into a JSON array.

 *
 */

import express from 'express';
import { QueryResult } from 'pg';
import { pool, connectToDb } from './connection.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Write a comment to explain what the following code is doing.
/* 
 * Run the SELECT query using an available connection from the pool.

 * The query returns the records matching a list of favorites grouped by whether
 * the title is in stock.
 * 
 * If there is an error running the query the details of the error are logged
 * to the console.
 * 
 * If the query is successful the matching rows are returned
 */
pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
});

// TODO: Write a comment to explain what the following code is doing.
/* 
 * Run the SELECT query using an available connection from the pool.
 * 
 * Queries a table of favorite books and returns sets of data for each section:
 * - total_in_section: the total number of favorite book items split out by each section
 * - max_quantity: the book with the highest quantity in stock
 * - min_quantity: the book with the lowest quantity in stock
 * - avg_quantity: the average quantity of books in stock for that section
 * 
 * If there is an error running the query the details of the error are logged
 * to the console.
 * 
 * If the query is successful the matching rows are returned
 */
pool.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', (err: Error, result: QueryResult) => {
  if (err) {
    console.log(err);
  } else if (result) {
    console.log(result.rows);
  }
});

app.use((_req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
