/*
📖 Execute a SQL File Using PostgreSQL Shell

Work with a partner to implement the following user story:

As a developer, I want to install PostgreSQL on my Mac or Windows machine.
As a developer, I want to execute SQL statements from a file using the PostgreSQL command-line interface.

Acceptance Criteria
It's done when using the command psql -U postgres enters the PostgreSQL command-line interface.
It's done when the schema.sql file is executed using the command-line interface and a message reading Query OK is returned.
    psql -U postgres -f schema.sql
-or-
    From within the interactive console:
    psql -U postgres
    \i schema.sql

📝 Notes
Refer to the documentation:
PostgreSQL Download and Installation page
PostgreSQL documentation on meta-commands such as executing SQL statements from a text file

💡 Hints
Which commands do you use to start PostgreSQL in the command-line interface?
    psql -U postgres
Which meta-command can you use to quit out of the PostgreSQL command-line interface?
    \i schema.sql

You may need to change the file encoding for Windows:
Get-Content .\schema-utf8.sql | Set-Content -Encoding utf8 schema-utf8.sql
*/

-- Drops the sample_db if it exists currently --
DROP DATABASE IF EXISTS sample_db;
-- Creates the sample_db database --
CREATE DATABASE sample_db;
