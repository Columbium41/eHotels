const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = 'SELECT * FROM Employee';
        const result = await req.pgClient.query(query);
        const employees = result.rows;
        res.json(employees);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async(req, res) => {
    try {
        const query = `INSERT INTO Employee(first_name, middle_name, last_name, address, hotel_id, employee_ssn) 
                       VALUES ('${req.body.first_name}', '${req.body.middle_name}', '${req.body.last_name}', '${req.body.address}', '${req.body.hotel_id}', '${req.body.employee_ssn}')`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/', async(req, res) => {
    try {
        const query = `DELETE FROM Employee WHERE employee_ssn = '${req.query.employee_ssn}'`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.patch('/', async(req, res) => {
    try {
        const query = `UPDATE Employee SET
                       first_name='${req.body.first_name}', 
                       middle_name='${req.body.middle_name}', 
                       last_name='${req.body.last_name}', 
                       address='${req.body.address}', 
                       employee_ssn='${req.body.employee_ssn}',
                       hotel_id='${req.body.hotel_id}'
                       WHERE employee_ssn='${req.body.old_employee_ssn}'`;

        const result = await req.pgClient.query(query);
        res.status(200).json(result);
    } catch(err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
