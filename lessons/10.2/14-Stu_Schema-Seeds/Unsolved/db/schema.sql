/*

🐛 Seed Data Not Populating Table

Work with a partner to resolve the following issue(s):
As a developer, I should be able to populate my table with seed data.

Expected Behavior
When the seeds.sql file is executed in PostgreSQL Shell, the data should populate my table.

Actual Behavior
When the seeds.sql file is executed, the data is not successfully populated in the table.

Steps to Reproduce the Problem
Execute schema.sql in PostgreSQL Shell to create the database and table.
Execute seeds.sql in PostgreSQL Shell to populate data in the table.
Run SELECT * FROM products; to view seeded data.

💡 Hints
Which PostgreSQL statement do we use to add data to a table?

🏆 Bonus
If you have completed this activity, work through the following challenge with your partner to further your knowledge:
How can you alter an existing table?

 */

DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

\c grocery_db;

CREATE TABLE products (
  id INTEGER NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);
