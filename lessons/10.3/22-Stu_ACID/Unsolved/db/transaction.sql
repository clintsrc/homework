/*

📚 Implementing Transactions in the Library Database

Work with a partner to implement the following user story:
As a database administrator, I want to ensure that when adding new records to 
    the library database, all inserts are treated as a single transaction to 
    maintain data integrity.
As a developer, I want to utilize PostgreSQL's DO $$ ... END $$ block to ensure 
    that all inserts either fully complete or fully roll back, preventing any 
    partial inserts.

Acceptance Criteria
It's done when a DO $$ ... END $$ block has been added to the provided SQL 
    script ensuring that the inserts to both the books and authors tables 
    either complete together or fail together.
It's done when, in the context of this block, the proper error handling 
    mechanism has been implemented to catch any exceptions during the inserts.
It's done when the script, upon successful execution, inserts the specified 
    books and authors into their respective tables, and raises a notice 
    indicating the transaction completion.

💡 Hints
Remember to utilize the EXCEPTION clause within the DO $$ ... END $$ block 
    in PostgreSQL to handle any errors that might occur during the transaction.
How can you use RAISE NOTICE to log the outcome of the transaction, whether 
    it's successful or encounters an error?

🏆 Bonus
If you have completed this activity, challenge yourself further with the following:
Q: How can you extend the database schema to associate books with authors, taking 
    into consideration that a book might have multiple authors and an author 
    might have written multiple books?
A: See changes related to a new bibliography table

Q: Implement a mechanism to capture and log more details about the specific error 
    message that might be triggered during the transaction.
A: Adding a SQLSTATE can provide more error details:
   NOTICE:  An error occurred: duplicate key value violates unique 
      constraint "books_pkey", Error Code: 23505

 */

DROP DATABASE IF EXISTS library;

-- Create a new database
CREATE DATABASE library;

-- Connect to the newly created database
\c library;

DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS bibliography;

-- Create a books table
CREATE TABLE books (
    book_id INTEGER PRIMARY KEY,
    book_name VARCHAR(255)
);

-- Create an authors table
CREATE TABLE authors (
    author_id INTEGER PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL
);

CREATE TABLE bibliography (
    bibliography_id INTEGER PRIMARY KEY,
    author_id INTEGER NOT NULL,
    book_id INTEGER NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(author_id),
    FOREIGN KEY (book_id) REFERENCES books(book_id)
);

-- TODO: Add a transaction block here
DO $$
    DECLARE
        -- For variables
    BEGIN
        -- Begin transaction

    INSERT INTO books (book_id, book_name)
    VALUES
        (1, 'Pride and Prejudice'),
        (2, 'To Kill a Mockingbird'),
        (3, 'The Great Gatsby'),
        (4, 'Northanger Abbey');

    INSERT INTO authors (author_id, author_name)
    VALUES
        (10, 'Jane Austen'),
        (11, 'Harper Lee'),
        (12, 'F. Scott Fitzgerald');

    INSERT INTO bibliography (bibliography_id, author_id, book_id)
    VALUES
        (1001, 10, 1),
        (1002, 11, 2),
        (1003, 12, 3),
        (1004, 10, 4);

    -- Commit automatically happens when it reaches here
RAISE NOTICE 'Transaction completed successfully';

EXCEPTION
    WHEN OTHERS THEN
    RAISE NOTICE 'An error occurred: %, Error Code: %', SQLERRM, SQLSTATE;
    ROLLBACK;
END $$
