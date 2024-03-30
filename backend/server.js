require('dotenv').config();

// Start express and pg
const express = require('express');
const pgClientMiddleware = require('./middleware/pgClient');
const requestLoggerMiddleware = require('./middleware/requestLogger');
const app = express();
const PORT = process.env.PORT || 5000;

const pg = require('pg');
const conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
const client = new pg.Client(conString);


app.use(pgClientMiddleware);
app.use(requestLoggerMiddleware);

// Routers
const hotelChainsRouter = require('./routes/hotel_chains');
app.use('/api/hotel_chains', hotelChainsRouter);

const hotelsRouter = require('./routes/hotels');
app.use('/api/hotels', hotelsRouter);

app.get('/api/booking', async (req, res) => {
    let SSN = req.query;
    let q = 'SELECT * FROM BookingRenting WHERE customer_SSN = ' + SSN;
    let data = databaseQuery(q)
    res.send();
    res.status(200).send({status: 'received'});
});

async function databaseQuery(q){
    client.connect();
    let rows = await client.query(q);
    console.log(rows);
    client.end();
    return rows;
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
});
