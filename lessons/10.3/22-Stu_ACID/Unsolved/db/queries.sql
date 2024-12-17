\c library

-- SELECT * from books;

-- SELECT * from authors;

/* 
SELECT * from bibliography
JOIN books ON books.book_id = bibliography.book_id
JOIN authors ON authors.author_id = bibliography.author_id;
*/

SELECT author_name, book_name from bibliography
JOIN books ON books.book_id = bibliography.book_id
JOIN authors ON authors.author_id = bibliography.author_id
ORDER BY author_name ASC;