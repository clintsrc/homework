/*

🏗️ Use Primary Key and Foreign Key to Define Relationship Between Tables

Work with a partner to implement the following user story:
As a developer, I want to organize my data by linking a customers table with a 
related customer_orders table.

Acceptance Criteria
It's done when the id column in the customers table is defined as the primary 
key.
It's done when the foreign key in the customer_orders table refers to the 
customers table primary key.

Assets
The following image demonstrates the customers and customer_orders tables:
The schema displays a customers table and a customer_orders table, each linked 
by the customer_id value.
[see screenshot in assets]

💡 Hints
What is the difference between primary and foreign key constraints?

🏆 Bonus
If you have completed this activity, work through the following challenge with 
your partner to further your knowledge:
Q: What are the advantages of using multiple, related tables to store data?
A: Having multiple tables prevents duplicating information in the database, 
   because you store the information only once in one table. When you need 
   information that isn't in the current table, you can link the two tables 
   together

 */

-- Write your Schema Here -- 
DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;

\c customers_db;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

CREATE TABLE customer_orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  order_details TEXT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
  ON DELETE SET NULL
);

\dt
\d customers
\d customerorders