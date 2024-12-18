-- Add your code below and execute file in the PostgreSQL Shell --
--\c books_db;

SELECT 
    favorite_books.book_name AS Name, 
    book_prices.price AS Price
FROM 
    book_prices
JOIN 
    favorite_books 
ON 
    book_prices.id = favorite_books.book_price;