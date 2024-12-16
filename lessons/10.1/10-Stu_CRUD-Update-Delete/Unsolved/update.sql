-- When I execute a SQL statement, I want only the data with a id of 2 to 
-- update to Candide.

-- Use books_db database --
\c books_db;

UPDATE fiction 
SET name = 'Candide'
-- fixd here
WHERE id = '002';

-- show the updated table
SELECT * FROM fiction
ORDER BY id ASC;