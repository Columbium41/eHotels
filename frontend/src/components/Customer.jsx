import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [updatedCustomer, setUpdatedCustomer] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newCustomer, setNewCustomer] = useState({ customer_ssn:"", first_name:"", middle_name:"", last_name:"", address:""});

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/api/customers');
        setCustomers(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCustomerClick = (customer) => {
        // needs to be updated to pull proper information from the database
        setSelectedCustomer(customer);
        setUpdatedCustomer({ ...customer });
    };

    const handleInputChange = (e) => {
        // allows for the updating of infomation in the pop up
        const { name, value } = e.target;
        setUpdatedCustomer({ ...updatedCustomer, [name]: value });
    };

    const closeModel = () => {
        //closes the pop up
        setSelectedCustomer(null);
        setUpdatedCustomer(null);
        setShowAddForm(false);
    };

    const updateCustomer = async () => {
        const response = await axios.patch('http://localhost:3000/api/customers', { ...updatedCustomer, old_customer_ssn: selectedCustomer.customer_ssn });

        setSelectedCustomer(null);
        setUpdatedCustomer(null);

        if (response.status === 200) {
            fetchData();
        }
    };

    const deleteCustomer = async () => {
        const response = await axios.delete('http://localhost:3000/api/customers', { params: { customer_ssn: updatedCustomer.customer_ssn } });

        setSelectedCustomer(null);
        setUpdatedCustomer(null);

        if (response.status === 200) {
            fetchData();
        }
    };

    const addNewCustomer = async () => {
        const response = await axios.post('http://localhost:3000/api/customers', newCustomer);

        setNewCustomer({ customer_ssn: '', first_name: '', middle_name: '', last_name: '', address: '' }); 
        setShowAddForm(false);

        if (response.status === 200) {
            fetchData();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Customers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customers.map((customer, index) => (
                    <div key={index} onClick={() => handleCustomerClick(customer)} className="bg-gray-200 p-3 rounded cursor-pointer">
                        <h2 className="text-lg font-bold">{customer.customer_ssn}</h2>
                        <p className="text-gray">{customer.first_name} {customer.last_name}</p>
                    </div>
                ))}
            </div>
            {selectedCustomer && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{selectedCustomer.first_name} {selectedCustomer.middle_name} {selectedCustomer.last_name}</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="customer_ssn" value={updatedCustomer.customer_ssn} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Customer SSN" />
                        <input type="text" name="first_name" value={updatedCustomer.first_name} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="First Name" />
                        <input type="text" name="middle_name" value={updatedCustomer.middle_name} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Middle Name" />
                        <input type="text" name="last_name" value={updatedCustomer.last_name} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Last Name" />
                        <input type="text" name="address" value={updatedCustomer.address} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Address" />
                        <div className="flex justify-end">
                            <button onClick={deleteCustomer} className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mr-2">Delete</button>
                            <button onClick={updateCustomer} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">Update</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Add Customer</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="first_name" value={newCustomer.first_name} onChange={(e) => setNewCustomer({ ...newCustomer, first_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="First Name" />
                        <input type="text" name="last_name" value={newCustomer.last_name} onChange={(e) => setNewCustomer({ ...newCustomer, last_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Last Name" />
                        <input type="text" name="middle_name" value={newCustomer.middle_name} onChange={(e) => setNewCustomer({ ...newCustomer, middle_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Middle Name" />
                        <input type="text" name="customer_ssn" value={newCustomer.customer_ssn} onChange={(e) => setNewCustomer({ ...newCustomer, customer_ssn: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Customer SSN" />
                        <input type="text" name="address" value={newCustomer.address} onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Address" />
                        <div className="flex justify-end">
                            <button onClick={addNewCustomer} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Add Customer</button>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => setShowAddForm(true)} className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4">Add Customer</button>
        </div>
    );
};

export default Customer;
