const requestLogger = (req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request Parameters:`, req.params);
    console.log(`Request Query:`, req.query);
    console.log(`Request Body:`, req.body);
    console.log('');
    next();
};

module.exports = requestLogger;
