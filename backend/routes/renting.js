const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let query = `INSERT INTO Archive (room_id, customer_SSN, employee_SSN, type, start_date, end_date) VALUES
            (${req.body.room_id}, '${req.body.customer_ssn}', '${req.body.emplyoee_ssn}', 'renting', '${req.body.start_date}', '${req.body.end_date}'`;

        const result = await req.pgClient.query(query);
        res.json(result.rows);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
