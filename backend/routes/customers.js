const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM Customer';
        const result = await req.pgClient.query(query);
        const customers = result.rows;
        res.json(customers);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async(req, res) => {
    try {
        const query = `INSERT INTO Customer(first_name, middle_name, last_name, address, customer_ssn) 
                       VALUES ('${req.body.first_name}', '${req.body.middle_name}', '${req.body.last_name}', '${req.body.address}', '${req.body.customer_ssn}')`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/', async(req, res) => {
    try {
        const query = `DELETE FROM Customer WHERE customer_ssn = '${req.query.customer_ssn}'`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.patch('/', async(req, res) => {
    try {
        const query = `UPDATE Customer SET
                       first_name='${req.body.first_name}', 
                       middle_name='${req.body.middle_name}', 
                       last_name='${req.body.last_name}', 
                       address='${req.body.address}', 
                       customer_ssn='${req.body.customer_ssn}'
                       WHERE customer_ssn='${req.body.old_customer_ssn}'`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
