/*

📖 Implement Data Types and Constraints

Work with a partner to implement the following user story:
As a developer, I want to limit each column so that it accepts only one type of data.

Acceptance Criteria
It's done when each column in the customers table has a defined data type and constraint.
It's done when the values in the id, first_name, and last_name columns cannot be NULL.

📝 Notes
Refer to the documentation:
PostgreSQL documentation on data types

💡 Hints
If no value is supplied to a column, what value is set by default?

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:
PostgreSQL constraints are classified as either column-level or table-level constraints. What is the difference?

 */

DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

\c customer_db;

CREATE TABLE customers (
  id,
  first_name,
  last_name,
  value_card_member
);
