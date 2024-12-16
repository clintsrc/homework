/*

📐 Add Comments to Implementation of Selecting and Inserting Data Using 
PostgreSQL

Work with a partner to add comments describing the functionality of the code 
found in insert-select.sql and schema.sql.

📝 Notes
Refer to the documentation:
PostgreSQL documentation on SELECT
PostgreSQL documentation on INSERT

🏆 Bonus
If you have completed this activity, work through the following challenge with 
your partner to further your knowledge:
  Q: Which operations can you perform on data using PostgreSQL?
  A: There are a wide variety of operations described in the Postgres
    documentation (https://www.postgresql.org/docs/17/sql-commands.html). Some
    fundamental operations are:
     Create records using INSERT
     Read records using SELECT
     Update using UPDATE
     Delete using DELETE

 */

DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
-- This creates a new database named books_db
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
-- This connects to the books_db and selects it for use
\c books_db;

-- TODO: What is the SQL code below doing?
-- This creates a new table named biographies
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  /*
   * This creates a new id field in the new biographies table and defines
   * it so that it must hold an integer value when adding a new record
   * and cannot be null.  The insert-select.sql script adds records with
   * data to meet this requirement
   */
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  /* 
   * This creates a new name field in the new biographies table and defines
   * it to hold a character string up to 100 characters in length. Like the
   * id above, the value must be specified when adding a new record, and cannot 
   * be null. The insert-select.sql script adds records with data to meet this 
   * requirement
   */
  name VARCHAR(100) NOT NULL
);

