-- hotel_id for quickly getting information about specific hotels such as location, 
-- checking in guests, and enhances join with other tables when creating multi table queries
CREATE INDEX IF NOT EXISTS hotelID ON Hotel(hotel_id);

-- room_id for quickly accessing data about specifc rooms in the hotel
-- such as price, view and capacity and checking in customers
CREATE INDEX IF NOT EXISTS roomID ON Room(room_id);

-- customer_ssn for quickly accessing customer information during the booking 
-- and renting process, and as occupancy in hotels increases, having an index
-- will make searching for customers by employees a multitude times faster 
CREATE INDEX IF NOT EXISTS customerSSN ON Customer(customer_SSN);
