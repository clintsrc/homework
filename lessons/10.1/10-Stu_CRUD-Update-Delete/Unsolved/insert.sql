-- Use books_db database --
\c books_db;

INSERT INTO fiction (id, name)
VALUES
    ( 001, 'To Kill a Mockingbird'),
    ( 002, '100 Years of Solitude'),
    ( 003, 'War and Peace');

SELECT * FROM fiction;