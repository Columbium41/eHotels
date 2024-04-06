require('dotenv').config();

// Start express and pg
const express = require('express');
const cors = require('cors');
const pgClientMiddleware = require('./middleware/pgClient');
const requestLoggerMiddleware = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(pgClientMiddleware);
app.use(requestLoggerMiddleware);

// enable CORS for frontend port
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Routers
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

const hotelChainsRouter = require('./routes/hotel_chains');
app.use('/api/hotel_chains', hotelChainsRouter);

const hotelsRouter = require('./routes/hotels');
app.use('/api/hotels', hotelsRouter);

const roomsRouter = require('./routes/rooms');
app.use('/api/rooms', roomsRouter);

const archivesRouter = require('./routes/archives');
app.use('/api/archives', archivesRouter);

const customersRouter = require('./routes/customers');
app.use('/api/customers', customersRouter);

const employeesRouter = require('./routes/employees');
app.use('/api/employees', employeesRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
});
