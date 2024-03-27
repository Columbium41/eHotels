require('dotenv').config();

// Start express and pg
const express = require('express');
const pgClientMiddleware = require('./middleware/pgClient');
const requestLoggerMiddleware = require('./middleware/requestLogger');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(pgClientMiddleware);
app.use(requestLoggerMiddleware);

// Routers
const hotelChainsRouter = require('./routes/hotel_chains');
app.use('/api/hotel_chains', hotelChainsRouter);

const hotelsRouter = require('./routes/hotels');
app.use('/api/hotels', hotelsRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
});
