-- TODO: What is the SQL code below doing?

/* 
 * Identifies the fields (id and name) in an existing table (biographies) 
 * where new records will be created with the values specified for each
 * of those fields. The database itself is created with and its schema is
 * is defined in the schema.sql script
 *
 * The id field is meant to have a unique identifier that acts as an index to
 * the records, here a 3-digit number. The name field represents the title of 
 * each biography book record.
 *
 */
INSERT INTO biographies (id, name)
VALUES
    ( 001, 'Diary of Anne Frank'),
    ( 002, 'Frida: A Biography of Frida Kahlo'),
    ( 003, 'Long Walk to Freedom');
/*
 * This statement displays the contents of the biographies table after 
 * the records have been added
 */
SELECT * FROM biographies;
