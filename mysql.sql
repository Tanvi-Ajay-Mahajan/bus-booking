-- Create a database
CREATE DATABASE gowheels;

USE gowheels;

CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    route VARCHAR(255) NOT NULL,
    busSize VARCHAR(50) NOT NULL,
    busEvent VARCHAR(100) NOT NULL,
    time VARCHAR(50) NOT NULL,
    busFacility VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
GRANT ALL PRIVILEGES ON gowheels.* TO 'tanvi-ajay-mahajan'@'%' IDENTIFIED BY 'Mahajan@123S';
FLUSH PRIVILEGES;

DESCRIBE bookings;

INSERT INTO bookings (route, busSize, busEvent, time, busFacility)
VALUES ('Test Route', '40', 'Test Event', '9:00 AM', 'WiFi, AC');

USE gowheels;
SHOW CREATE TABLE bookings;

SHOW GRANTS FOR 'tanvi-ajay-mahajan'@'%';
