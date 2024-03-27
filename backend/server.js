require('dotenv').config();

// Start express and pg
const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = process.env.PORT || 5000;

// create postgres client
const client = new Client({
    user: process.env.PG_USER || '',
    host: process.env.PG_HOST || '',
    database: process.env.PG_DATABASE || '',
    password: process.env.PG_PASSWORD || '',
    port: process.env.PG_PORT || '',
});

client.connect();

// Routes
app.get('/api/hotel_chains', async (req, res) => {
    try {
        const query = 'SELECT * FROM HotelChain';
        const result = await client.query(query);
        const hotelChains = result.rows;
        res.json(hotelChains);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/hotels', async (req, res) => {
    try {
        const query = 'SELECT * FROM Hotel';
        const result = await client.query(query);
        const hotels = result.rows;
        res.json(hotels);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
