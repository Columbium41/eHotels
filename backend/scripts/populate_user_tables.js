require('dotenv').config();

const { Client } = require('pg');
const { faker } = require('@faker-js/faker');

const client = new Client({
    user: process.env.PG_USER || '',
    host: process.env.PG_HOST || '',
    database: process.env.PG_DATABASE || '',
    password: process.env.PG_PASSWORD || '',
    port: process.env.PG_PORT || '',
});

client.connect();

function generateRandomSSN() {
    const randomNumber = Math.floor(Math.random() * 1000000000);    
    const paddedNumberString = String(randomNumber).padStart(9, '0');
    const formattedNumberString = paddedNumberString.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    
    return formattedNumberString;
}

function generateRandomAddress() {
    const address = faker.location.streetAddress() + ', ' +
                faker.location.city() + ', ' +
                faker.location.state() + ', ' +
                faker.location.country();

    return address;
}

async function populateUserData() {
    const hotels = await client.query("SELECT hotel_id FROM Hotel");
    let employeeData = [];
    let customerData = [];
    
    for (const row of hotels.rows) {        
        employeeData.push([generateRandomSSN(), row.hotel_id, faker.person.firstName(), faker.person.middleName(), faker.person.lastName(), generateRandomAddress()]);
    }
    for (let i = 0; i < 10; i++) {
        customerData.push([generateRandomSSN(), faker.person.firstName(), faker.person.middleName(), faker.person.lastName(), generateRandomAddress()]);
    }

    try {
        await client.query('BEGIN');

        // populate preset users
        await client.query(`INSERT INTO Customer (customer_SSN, first_name, middle_name, last_name, address) VALUES ('123 456 789', 'John', 'Customer', 'Doe', '123 This Street, Ottawa, Ontario, Canada')`);
        await client.query(`INSERT INTO Employee (employee_SSN, hotel_id, first_name, middle_name, last_name, address) VALUES ('987 654 321', '0', 'Jane', 'Employee', 'Doe', '123 That Street, Ottawa, Ontario, Canada')`);

        // populate managers
        for (const [ssn, h_id, fn, mn, ln, address] of employeeData) { 
            await client.query('INSERT INTO Employee (employee_SSN, hotel_id, first_name, middle_name, last_name, address) VALUES ($1, $2, $3, $4, $5, $6)', [ssn, h_id, fn, mn, ln, address]);
            await client.query('INSERT INTO EmployeePositionJoin (employee_SSN, position) VALUES ($1, $2)', [ssn, 'Manager']);
        }

        // populate customers
        for (const [ssn, fn, mn, ln, address] of customerData) {
            await client.query('INSERT INTO Customer (customer_SSN, first_name, middle_name, last_name, address) VALUES ($1, $2, $3, $4, $5)', [ssn, fn, mn, ln, address]);
        }

        await client.query('COMMIT');
        console.log('Data inserted successfully');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error inserting data:', error);
    } finally {
        process.exit(0);
    }
}

populateUserData();
