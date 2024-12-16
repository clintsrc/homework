-- Add your code below and execute file in the PostgreSQL Shell --
\c company;
--FOREIGN KEY (location_id) REFERENCES locations(location_id)
SELECT 
    business_name, location_name, location_manager
FROM 
    locations
JOIN 
    businesses 
ON 
    locations.location_id = businesses.location_id;