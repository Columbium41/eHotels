-- view 1
Create VIEW area AS
SELECT h.city,
    h.region,
    count(r.room_id) AS rooms
FROM hotel h
    LEFT JOIN room r ON h.hotel_id = r.hotel_id
GROUP BY h.city, h.region
ORDER BY h.city, h.region;

-- view 2
CREATE VIEW totalcapacity AS
SELECT hotel.hotel_id,
    sum(room.capacity) AS total_capacity
FROM hotel
    JOIN room ON hotel.hotel_id = room.hotel_id
GROUP BY hotel.hotel_id
ORDER BY hotel.hotel_id;