/*

🐛 Query Not Deleting Row from Table

Work with a partner to resolve the following issue(s):
As a user, I want to be able to delete a specific book from the favorite_books 
  table.

Expected Behavior
When I run server.ts, the row with the id of 2 should be deleted from the table 
  and the updated table displayed in the console.

Actual Behavior
When I run server.ts, an error is returned and the table is not updated.

Steps to Reproduce the Problem
In Postgres Shell, execute the db/schema.sql file.
Next, execute the db/seeds.sql file.
Run npm run build then npm run start to start the Express.js server. The 
  results of the query and the table are shown in the console.

Assets
The following image demonstrates the web application's appearance and 
  functionality:
[see screenshot in assets]
A successful console log displays results for id values of 1 through 7, but 
  the row with the id of 2 has been deleted.

💡 Hints
What does the $1 represent in a parameterized query?

🏆 Bonus
If you have completed this activity, work through the following challenge with 
  your partner to further your knowledge:
How can you set user-defined values using a SQL statement?

 */

DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

\c books_db;

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL
);
