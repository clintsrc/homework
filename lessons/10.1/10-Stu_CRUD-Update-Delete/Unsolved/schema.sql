/*

🐛 Data Not Updating in Database
Work with a partner to resolve the following issue(s):
As a user, I want to update a single row of data in a table using a SQL statement.

Expected Behavior
When I execute a SQL statement, I want only the data with a id of 2 to update to Candide.

Actual Behavior
When I execute a SQL statement to update the data, the data in every row displays the new value.

Steps to Reproduce the Problem
Create a books_db database and select it for use.
Execute the insert.sql file in the command line to insert data.
Execute the update.sql file to update the table.
Enter the query SELECT * FROM fiction to view the contents of the table.

💡 Hints
Which clause do we use to filter and select specific rows to be updated?

 */

DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;

-- Use books_db database --
\c books_db;

CREATE TABLE fiction (
  -- Creates a numeric column called "id" which cannot contain null --
  id INTEGER NOT NULL,
  -- Creates a string column called "name" which can hold up to 100 characters and cannot contain null --
  name VARCHAR(100) NOT NULL
);
