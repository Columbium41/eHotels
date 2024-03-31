-- create_tables.sql

-- Hotel Chains
CREATE TABLE IF NOT EXISTS HotelChain(
    hotel_chain_name varchar(255) PRIMARY KEY,
    address varchar(255)
);

CREATE TABLE IF NOT EXISTS HotelChainPhoneNumber(
    phone_number varchar(20) PRIMARY KEY,
    hotel_chain_name varchar(255)
);

CREATE TABLE IF NOT EXISTS HotelChainEmailAddress(
    email varchar(255) PRIMARY KEY,
    hotel_chain_name varchar(255)
);

-- Hotels
CREATE TABLE IF NOT EXISTS Hotel(
    hotel_id int PRIMARY KEY,
    hotel_chain_name varchar(255),
    rating int CHECK (rating >= 1 AND rating <= 5),
    address varchar(255),
    email varchar(255),
    phone_number varchar(20)
);

-- Rooms
CREATE TABLE IF NOT EXISTS Room(
    room_id int PRIMARY KEY,
    hotel_id int,
    price decimal(10, 2) CHECK (price >= 0),
    capacity int CHECK (capacity > 0),
    view varchar(255),
    extendable boolean
);

CREATE TABLE IF NOT EXISTS RoomIssue(
    room_issue_id SERIAL PRIMARY KEY,
    room_id int,
    issue varchar(255)
);

CREATE TABLE IF NOT EXISTS Amenity(
    amenity varchar(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS RoomAmenityJoin(
    room_id int,
    amenity varchar(255),
    PRIMARY KEY (room_id, amenity)
);

-- Employees
CREATE TABLE IF NOT EXISTS Employee(
    employee_SSN varchar(11) PRIMARY KEY,
    hotel_id int,
    first_name varchar(20),
    middle_name varchar(20),
    last_name varchar(20),
    full_name varchar(60) GENERATED ALWAYS AS (first_name || ' ' || middle_name || ' ' || last_name) STORED,
    address varchar(255)
);

CREATE TABLE IF NOT EXISTS Position(
    position varchar(255) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS EmployeePositionJoin(
    employee_SSN varchar(11),
    position varchar(255),
    PRIMARY KEY (employee_SSN, position)
);

-- Customers
CREATE TABLE IF NOT EXISTS Customer(
    customer_SSN varchar(11) PRIMARY KEY,
    first_name varchar(20),
    middle_name varchar(20),
    last_name varchar(20),
    full_name varchar(60) GENERATED ALWAYS AS (first_name || ' ' || middle_name || ' ' || last_name) STORED,
    address varchar(255),
    date_of_registration timestamp DEFAULT CURRENT_TIMESTAMP
);

-- Archives
CREATE TABLE IF NOT EXISTS Archive(
    archive_id SERIAL PRIMARY KEY,
    room_id int,
    type varchar(255),
    start_date timestamp,
    end_date timestamp,
    cost decimal(10, 2) CHECK (cost >= 0)
);

-- BookingRentings
CREATE TABLE IF NOT EXISTS BookingRenting(
    booking_renting_id SERIAL PRIMARY KEY,
    archive_id int,
    employee_SSN varchar(11),
    customer_SSN varchar(11)
);

-- Foreign Key Constraints
ALTER TABLE HotelChainPhoneNumber ADD CONSTRAINT fk_hotel_chain_name FOREIGN KEY (hotel_chain_name) REFERENCES HotelChain(hotel_chain_name);
ALTER TABLE HotelChainEmailAddress ADD CONSTRAINT fk_hotel_chain_name FOREIGN KEY (hotel_chain_name) REFERENCES HotelChain(hotel_chain_name);

ALTER TABLE Hotel ADD CONSTRAINT fk_hotel_chain_name FOREIGN KEY (hotel_chain_name) REFERENCES HotelChain(hotel_chain_name);

ALTER TABLE Room ADD CONSTRAINT fk_hotel_id FOREIGN KEY (hotel_id) REFERENCES Hotel(hotel_id);

ALTER TABLE RoomIssue ADD CONSTRAINT fk_room_id FOREIGN KEY (room_id) REFERENCES Room(room_id);

ALTER TABLE RoomAmenityJoin ADD CONSTRAINT fk_room_id FOREIGN KEY (room_id) REFERENCES Room(room_id);
ALTER TABLE RoomAmenityJoin ADD CONSTRAINT fk_amenity FOREIGN KEY (amenity) REFERENCES Amenity(amenity);

ALTER TABLE Employee ADD CONSTRAINT fk_hotel_id FOREIGN KEY (hotel_id) REFERENCES Hotel(hotel_id);

ALTER TABLE EmployeePositionJoin ADD CONSTRAINT fk_employee_SSN FOREIGN KEY (employee_SSN) REFERENCES Employee(employee_SSN);
ALTER TABLE EmployeePositionJoin ADD CONSTRAINT fk_position FOREIGN KEY (position) REFERENCES Position(position);

ALTER TABLE Archive ADD CONSTRAINT fk_room_id FOREIGN KEY (room_id) REFERENCES Room(room_id);

ALTER TABLE BookingRenting ADD CONSTRAINT fk_archive_id FOREIGN KEY (archive_id) REFERENCES Archive(archive_id);
ALTER TABLE BookingRenting ADD CONSTRAINT fk_employee_SSN FOREIGN KEY (employee_SSN) REFERENCES Employee(employee_SSN);
ALTER TABLE BookingRenting ADD CONSTRAINT fk_customer_SSN FOREIGN KEY (customer_SSN) REFERENCES Customer(customer_SSN);
