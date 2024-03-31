const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {

    try {
        const ssn = req.query.ssn;
        let result = null;

        if (req.query.isCustomer === 'true') {
            result = await req.pgClient.query(`SELECT * FROM Customer WHERE customer_SSN='${ssn}'`)
        } else {
            result = await req.pgClient.query(`SELECT * FROM Employee WHERE employee_SSN='${ssn}'`);
        }

        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(201).json({ error: 'User Not Found' })
        }
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
