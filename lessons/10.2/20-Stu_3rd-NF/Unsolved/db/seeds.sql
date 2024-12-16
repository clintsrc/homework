\c company;


INSERT INTO locations (location_id, location_name, location_manager) VALUES
(101, 'Annapolis, MD', 'Rita Ivanov'),
(102, 'Los Angeles, CA', 'Aaron Kamara'),
(103, 'Lincoln, NB', 'Farahd Mohamed'),
(104, 'Saskatchewan, CA', 'Amara Marquez');

SELECT * FROM locations;

-- Inserting data into businesses
INSERT INTO businesses (business_id, business_name, location_id) VALUES
(1, 'Prosser Lankovitch Products', 101),
(2, 'Ripley Enterprises', 102),
(3, 'Gormenghast, Inc.', 103),
(4, 'Nullhammer Corporation', 104);

SELECT * FROM businesses;
