const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        let query =`WITH ValidRooms AS (
                        SELECT Room.*
                        FROM Room
                        LEFT JOIN Archive ON Room.room_id = Archive.room_id
                                        AND (Archive.start_date BETWEEN '${req.query.start_date}' AND '${req.query.end_date}'
                                            OR Archive.end_date BETWEEN '${req.query.start_date}' AND '${req.query.end_date}')
                        WHERE Archive.room_id IS NULL
                    ),
                    HotelRoomCounts AS (
                        SELECT COUNT(room_id) AS room_count,
                            Hotel.*
                        FROM Hotel NATURAL JOIN ValidRooms
                        GROUP BY Hotel.hotel_id
                        HAVING COUNT(room_id)>=${req.query.number_of_rooms === '' ? '1' : req.query.number_of_room}
                    )

                    SELECT HotelChain.address AS hotel_chain_address,
                        HotelRoomCounts.*,
                        Room.room_id,
                        Room.price,
                        Room.capacity,
                        Room.view,
                        Room.extendable
                        FROM (HotelChain JOIN HotelRoomCounts ON HotelChain.hotel_chain_name = HotelRoomCounts.hotel_chain_name) NATURAL JOIN Room
                    WHERE rating>=${req.query.rating}`;
            
        if (req.query.room_capacity !== '') {
            query += `\nand capacity=${req.query.room_capacity}`;
        }
        if (req.query.city !== '') {
            query += `\nand city='${req.query.city}'`
        }
        if (req.query.hotel_chain_name !== 'Any') {
            query += `\nand HotelRoomCounts.hotel_chain_name='${req.query.hotel_chain_name}'`;
        }
        if (req.query.price !== '') {
            query += `\nand price<=${req.query.price}`;
        }
        
        query += `\n ORDER BY Room.price`;

        const result = await req.pgClient.query(query);
        const rooms = result.rows;
        res.json(rooms);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
