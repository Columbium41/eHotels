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

router.post('/', async (req, res) => {
    try {
        const startDate = req.body.start_date;
        const endDate = req.body.end_date;

        let query = `INSERT INTO Archive (room_id, type, start_date, end_date, cost) VALUES
                     (${req.body.room_id}, 'booking', '${req.body.start_date}', '${req.body.end_date}', '${getNumberOfDaysBetweenDates(new Date(req.body.start_date), new Date(req.body.end_date)) * req.body.price}')`;
        
        const result = await req.pgClient.query(query);
        console.log(result);

        res.status(200);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
