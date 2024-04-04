-- view 1
DROP VIEW IF EXISTS area;

Create VIEW area AS
WITH validrooms AS (
    SELECT room.hotel_id,
        count(room.room_id) AS valid_rooms_count
    FROM room
    LEFT JOIN archive ON room.room_id = archive.room_id 
        AND archive.start_date <= CURRENT_DATE 
        AND CURRENT_DATE <= archive.end_date
    WHERE archive.room_id IS NULL
    GROUP BY room.hotel_id
)
SELECT h.city,
    h.region,
    COALESCE(validrooms.valid_rooms_count, 0::bigint) AS rooms
FROM hotel h
LEFT JOIN validrooms ON h.hotel_id = validrooms.hotel_id
ORDER BY h.city, h.region;


-- view 2
DROP VIEW IF EXISTS totalcapacity;

CREATE VIEW totalcapacity AS
SELECT hotel.hotel_id,
       hotel.hotel_chain_name,
       hotel.street,
    sum(room.capacity) AS total_capacity
FROM hotel
    JOIN room ON hotel.hotel_id = room.hotel_id
GROUP BY hotel.hotel_id
ORDER BY hotel.hotel_id;