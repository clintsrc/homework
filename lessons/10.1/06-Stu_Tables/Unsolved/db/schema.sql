/*
🏗️ Add Table to Database
Work with a partner to implement the following user story:
As a developer, I want to delete a table from an existing database and replace it with a new table.

Acceptance Criteria
It's done when a new table biographies has been created and includes two columns id and name.
It's done when the id column has a data type of INTEGER and the name column has a data type of VARCHAR(100).

Assets
The following image demonstrates the biographies table:
[see the screenshot in assets]
A table called "biographies" contains fields for "id" and "name".

💡 Hints
How can you display a list of existing tables in a database?

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:
What is the difference between a table and a database?

 */

DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --
