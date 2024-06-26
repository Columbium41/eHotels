require('dotenv').config();

const { Client } = require('pg');

const pgClient = (req, res, next) => {
    req.pgClient = new Client({
        user: process.env.PG_USER || '',
        host: process.env.PG_HOST || '',
        database: process.env.PG_DATABASE || '',
        password: process.env.PG_PASSWORD || '',
        port: process.env.PG_PORT || '',
    });

    req.pgClient.connect();
    next();
};

module.exports = pgClient;
