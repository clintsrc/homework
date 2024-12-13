/*

🏗️ Implement Join Clause to Combine Two Tables

Work with a partner to implement the following user story:
As a developer, I want to create a single query that includes data on book 
titles and prices.

Acceptance Criteria
It's done when the matching values in the book_prices and favorite_books tables 
are combined and returned as the result.

Assets
The following image demonstrates the output of the new query:
[see screenshot in assets]
The new query includes both book_name and price columns.

💡 Hints
What is the relationship between the two tables?

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:
What is a many-to-many relationship?

 */

DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

\c books_db;

CREATE TABLE book_prices (
  id SERIAL PRIMARY KEY,
  price INTEGER NOT NULL
);

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  book_price INTEGER,
  FOREIGN KEY (book_price)
  REFERENCES book_prices(id)
  ON DELETE SET NULL
);

