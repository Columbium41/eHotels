const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM Hotel';
        const result = await req.pgClient.query(query);
        const hotels = result.rows;
        res.json(hotels);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/area', async (req, res) => {
    try {
        const query = 'SELECT * FROM area';
        const result = await req.pgClient.query(query);
        res.json(result.rows);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/capacity', async (req, res) => {
    try {
        const query = 'SELECT * FROM totalcapacity';
        const result = await req.pgClient.query(query);
        res.json(result.rows);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
