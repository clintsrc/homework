/*

🏗️ Convert Database from 1NF to 3NF

Work with a partner to implement the following user story:
As a developer, I want to normalize a database currently in 1NF to 3NF to 
improve efficiency, reduce redundancy, and ensure data integrity.

Acceptance Criteria
It's done when a database table in 1NF is successfully decomposed into multiple 
    tables eliminating repeating groups, ensuring every attribute is 
    functionally dependent on the primary key and removing transitive 
    dependencies.
It's done when relationships between the tables have been established using 
    foreign keys.
It's done when we can retrieve the same set of information from the 3NF tables 
    as the original 1NF table using JOIN clauses.

1. Identify the primary key for each table.
2. Remove any repeating groups or arrays to achieve 1NF.
3. Ensure that all non-key attributes are fully dependent on the primary key to 
   achieve 2NF.
4. Eliminate any transitive dependencies to reach 3NF.


Assets
The following image demonstrates the expected result after converting to 3NF:
    [see the screenshot in assets]
A collection of interconnected tables showing students, courses, and 
    enrollments. Each table has distinct non-repeating data.

💡 Hints
Remember the steps to convert from 1NF to 2NF and then to 3NF. Focus on 
identifying and eliminating any repeating groups, ensuring attributes are 
functionally dependent on the primary key, and removing columns not dependent 
on the primary key.

🏆 Bonus
If you have completed this activity, work through the following challenge with 
your partner to further your knowledge:

How would you handle situations where attributes in a table depend on multiple 
attributes (composite key)? How does this affect normalization?

 */

DROP DATABASE IF EXISTS company;
CREATE DATABASE company;

\c company;

-- CONVERT THE FOLLOWING INTO 3RD NORMAL FORM STANDARDIZATION --
CREATE TABLE locations (
    location_id INTEGER PRIMARY KEY,
    location_name VARCHAR(255),
    location_manager VARCHAR(255)
);

CREATE TABLE businesses (
    business_id INTEGER PRIMARY KEY,
    business_name VARCHAR(255),
    location_id INTEGER,
    FOREIGN KEY (location_id) REFERENCES locations(location_id)
);

\dt
\d locations
\d businesses