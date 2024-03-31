const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const query =  `WITH HotelRoomCounts AS (
                            SELECT COUNT(room_id) AS room_count,
                                   Hotel.*
                            FROM Hotel NATURAL JOIN Room
                            GROUP BY Hotel.hotel_id
                            HAVING COUNT(room_id)>=${req.query.number_of_rooms}
                        )
                        
                        SELECT HotelChain.address AS hotel_chain_address,
                            HotelRoomCounts.*,
                            Room.room_id,
                            Room.price,
                            Room.capacity,
                            Room.view,
                            Room.extendable
                            FROM (HotelChain JOIN HotelRoomCounts ON HotelChain.hotel_chain_name = HotelRoomCounts.hotel_chain_name) NATURAL JOIN Room
                        WHERE capacity=${req.query.room_capacity} 
                            and city='${req.query.city}'
                            and HotelRoomCounts.hotel_chain_name='${req.query.hotel_chain_name}'
                            and rating>=${req.query.rating}
                            and price<=${req.query.price}`;


        const result = await req.pgClient.query(query);
        const rooms = result.rows;
        res.json(rooms);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
