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

module.exports = router;
