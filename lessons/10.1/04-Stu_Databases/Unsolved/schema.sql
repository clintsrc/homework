/*
📖 Use PostgreSQL Statements to Delete, Create, and Select a Database

Work with a partner to implement the following user story:
As a developer, I want to delete an existing database.
As a developer, I want to create a new database and select that database for use.

Acceptance Criteria
It's done when sample_db is dropped and longer appears on the list of all 
    databases.
It's done when a new books_db database is created and selected for use.

📝 Notes
Refer to the documentation:
PostgreSQL documentation on meta-commands such as executing SQL statements from 
    a text file

💡 Hints
Which statement can we use to show all databases?

🏆 Bonus
If you have completed this activity, work through the following challenge with 
    your partner to further your knowledge:

    Q: PostgreSQL is a relational database management system, or RDBMS. What 
    are the characteristics of an RDBMS? What other database systems fall into 
    the category of RDBMS?
    A:
    * Characteristics of an RDBMS:
        * It uses SQL Queries to access the data
        * It has tables that are are related to each other based on data they 
          have in common
        * Primary keys are used for unique identification across rows
        * Foreign keys are used to ensure data integrity across tables.
        * Indexes are used for faster data retrieval
        * It provides data security (user authentication, access controls, 
          encryption, and audit logging)
    * Other RDBMS: MySQL, Microsoft SQL Server, Oracle 
 
 */

-- Write code here or enter directly in PostgreSQL shell --

-- psql -U postgres -f scriptname.sql

/* 
 * List the available databases (before creation)
 * 
 */
-- should the available dbs
\list

/* 
 * Delete an existing database: 
 * drop sample_db
 *
 */
DROP DATABASE IF EXISTS sample_db;

/*
 * Create a new database and select that database for use:
 * Create a books_db database then select it for uses
 *
 */
CREATE DATABASE books_db;
-- sample_db shoul not exist, books_db should be visible
\list

\connect books_db
