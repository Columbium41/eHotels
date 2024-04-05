import React, { useState, useEffect } from 'react';

const Customer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        //api goes here
    }, []);

    const addCustomer = (customer) => {
    };

    const updateCustomer = (customer) => {
    };

    const deleteCustomer = (customerId) => {
    };

    return (
        <div>
            <h1>The customer webpage</h1>
            {customers.map((customer) => (
                <div key={customer.id}>
                    <h2>{customer.name}</h2>
                    <p>{customer.email}</p>
                    {/* Add UI here */}
                </div>
            ))}
            {/* Add customer or something here*/}
        </div>
    );
};

export default Customer;