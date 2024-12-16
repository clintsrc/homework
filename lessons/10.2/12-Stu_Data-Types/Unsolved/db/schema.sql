/*

📖 Implement Data Types and Constraints

Work with a partner to implement the following user story:
As a developer, I want to limit each column so that it accepts only one type 
of data.

Acceptance Criteria
It's done when each column in the customers table has a defined data type and 
constraint.
It's done when the values in the id, first_name, and last_name columns cannot 
be NULL.

📝 Notes
Refer to the documentation:
PostgreSQL documentation on data types

💡 Hints
If no value is supplied to a column, what value is set by default?

🏆 Bonus
If you have completed this activity, work through the following challenge with 
your partner to further your knowledge:
Q: PostgreSQL constraints are classified as either column-level or table-level 
constraints. What is the difference?
A: 
   * Column-level constraints only apply to the column where they are defined
     right after the column type (e.g. id INTEGER NOT NULL).
   * Table-level constraints are defined after all the column definitions 
     in the CREATE TABLE statement, and they can apply to multiple columns,
     e.g.:
     CREATE TABLE customers (
       id INTEGER,
       first_name VARCHAR(100),
       NOT NULL (id, first_name)
     );
(ref: https://www.postgresql.org/docs/current/ddl-constraints.html)

 */

DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
  id INTEGER NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  value_card_member BOOLEAN DEFAULT FALSE,
);
