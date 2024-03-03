CREATE DATABASE postgres;

CREATE TABLE customers (
    sno SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    age INTEGER,
    phone VARCHAR(20),
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO customers (customer_name, age, phone, location, created_at) VALUES
    ('John Doe', 30, '123-456-7890', 'New York', CURRENT_TIMESTAMP),
    ('Jane Smith', 25, '456-789-0123', 'Los Angeles', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Alice Johnson', 35, '789-012-3456', 'Chicago', CURRENT_TIMESTAMP),
    ('Bob Brown', 40, '012-345-6789', 'Houston', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Emily Davis', 28, '345-678-9012', 'San Francisco', CURRENT_TIMESTAMP),
    ('Michael Wilson', 45, '678-901-2345', 'Miami', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Sarah Taylor', 32, '901-234-5678', 'Seattle', CURRENT_TIMESTAMP),
    ('David Martinez', 37, '234-567-8901', 'Boston', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Jessica Rodriguez', 29, '567-890-1234', 'Denver', CURRENT_TIMESTAMP),
    ('Christopher Anderson', 42, '890-123-4567', 'Phoenix', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Jennifer Garcia', 34, '012-345-6789', 'Dallas', CURRENT_TIMESTAMP),
    ('Matthew Lopez', 39, '234-567-8901', 'Atlanta', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Amanda Hernandez', 31, '456-789-0123', 'Philadelphia', CURRENT_TIMESTAMP),
    ('James King', 44, '678-901-2345', 'Detroit', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Laura Perez', 27, '789-012-3456', 'Portland', CURRENT_TIMESTAMP),
    ('Daniel Gonzales', 38, '901-234-5678', 'Las Vegas', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Elizabeth Lee', 33, '012-345-6789', 'San Diego', CURRENT_TIMESTAMP),
    ('Kevin Scott', 41, '234-567-8901', 'Minneapolis', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Megan Young', 26, '345-678-9012', 'Salt Lake City', CURRENT_TIMESTAMP),
    ('Steven Adams', 43, '567-890-1234', 'Charlotte', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Rachel Turner', 36, '678-901-2345', 'Orlando', CURRENT_TIMESTAMP),
    ('Andrew Campbell', 30, '890-123-4567', 'San Antonio', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Rebecca Phillips', 40, '901-234-5678', 'Kansas City', CURRENT_TIMESTAMP),
    ('Thomas Hill', 35, '012-345-6789', 'Tampa', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Michelle Torres', 29, '234-567-8901', 'Raleigh', CURRENT_TIMESTAMP),
    ('Brandon Powell', 45, '345-678-9012', 'Indianapolis', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Stephanie Ward', 31, '456-789-0123', 'Nashville', CURRENT_TIMESTAMP),
    ('Eric Bailey', 39, '567-890-1234', 'Memphis', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Kimberly Foster', 28, '678-901-2345', 'Louisville', CURRENT_TIMESTAMP),
    ('Patrick Murphy', 42, '789-012-3456', 'Columbus', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Cassandra Simmons', 32, '901-234-5678', 'Milwaukee', CURRENT_TIMESTAMP),
    ('Gregory Diaz', 44, '012-345-6789', 'Albuquerque', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Christina Barnes', 27, '234-567-8901', 'Oklahoma City', CURRENT_TIMESTAMP),
    ('Joshua Ross', 43, '345-678-9012', 'Honolulu', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Nicole Coleman', 33, '456-789-0123', 'Anchorage', CURRENT_TIMESTAMP),
    ('Keith Alexander', 41, '567-890-1234', 'Boise', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Monica Kelly', 26, '678-901-2345', 'Des Moines', CURRENT_TIMESTAMP),
    ('Jeremy Griffin', 40, '789-012-3456', 'Fargo', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Vanessa Bryant', 34, '901-234-5678', 'Montgomery', CURRENT_TIMESTAMP),
    ('Justin Nguyen', 39, '012-345-6789', 'Jackson', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Carolyn Reed', 28, '234-567-8901', 'Baton Rouge', CURRENT_TIMESTAMP),
    ('Terry Adams', 42, '345-678-9012', 'Little Rock', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Katherine Hamilton', 35, '456-789-0123', 'Salt Lake City', CURRENT_TIMESTAMP),
    ('Kyle Cox', 41, '567-890-1234', 'Louisville', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('Hannah Morales', 29, '678-901-2345', 'Columbia', CURRENT_TIMESTAMP),
    ('Gerald Vasquez', 43, '789-012-3456', 'Charleston', CURRENT_TIMESTAMP);
    -- Add more dummy records as needed
    ('swetha', 34, '456-123-0123', 'china', CURRENT_TIMESTAMP),
    ('jhansi', 41, '787-890-1234', 'korea', CURRENT_TIMESTAMP),
    -- Add more dummy records as needed
    ('koumudhi', 34, '948-901-2345', 'Columbia', CURRENT_TIMESTAMP),
    ('nishwitha', 22, '987-012-3456', 'Charleston', CURRENT_TIMESTAMP);