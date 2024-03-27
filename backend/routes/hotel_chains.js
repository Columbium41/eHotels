const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM HotelChain';
        const result = await req.pgClient.query(query);
        const hotelChains = result.rows;
        res.json(hotelChains);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
