require('dotenv').config();

const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = process.env.PORT || 5000;

const client = new Client({
    user: process.env.PG_USER || '',
    host: process.env.PG_HOST || '',
    database: process.env.PG_DATABASE || '',
    password: process.env.PG_PASSWORD || '',
    port: process.env.PG_PORT || '',
});

client.connect();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
