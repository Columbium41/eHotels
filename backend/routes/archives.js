const express = require('express');
const router = express.Router();

function getNumberOfDaysBetweenDates(startDate, endDate) {
    // Convert both dates to milliseconds
    const startMillis = startDate.getTime();
    const endMillis = endDate.getTime();

    // Calculate the difference in milliseconds
    const differenceMillis = endMillis - startMillis;

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const days = Math.ceil(differenceMillis / (1000 * 60 * 60 * 24));

    return days + 1;
}

router.get('/', async (req, res) => {
    try {
        const query = `SELECT * From Archive NATURAL JOIN Room NATURAL JOIN Hotel WHERE customer_ssn='${req.query.ssn}'`;
        const result = await req.pgClient.query(query);
        const archives = result.rows;
        res.json(archives);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        let query = `INSERT INTO Archive (room_id, customer_SSN, employee_SSN, type, start_date, end_date, cost) VALUES
                     (${req.body.room_id}, '${req.body.customer_ssn}', NULL, 'booking', '${req.body.start_date}', '${req.body.end_date}', '${getNumberOfDaysBetweenDates(new Date(req.body.start_date), new Date(req.body.end_date)) * req.body.price}')`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
