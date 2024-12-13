/*

📐 Add Comments to Implementation of Selecting and Inserting Data Using PostgreSQL
Work with a partner to add comments describing the functionality of the code found in insert-select.sql and schema.sql.

📝 Notes
Refer to the documentation:
PostgreSQL documentation on SELECT
PostgreSQL documentation on INSERT

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:
Which operations can you perform on data using PostgreSQL?

 */

DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
\c books_db;

-- TODO: What is the SQL code below doing?
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  name VARCHAR(100) NOT NULL
);

