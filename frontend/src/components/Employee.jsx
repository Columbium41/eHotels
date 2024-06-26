import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [updatedEmployee, setUpdatedEmployee] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newEmployee, setNewEmployee] = useState({ employee_ssn:"", hotel_id:"", first_name:"", middle_name:"", last_name:"", address:""});

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/api/employees');
        setEmployees(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEmployeeClick = (employee) => {
        // needs to be updated to pull proper information from the database
        setSelectedEmployee(employee);
        setUpdatedEmployee({ ...employee });
    };

    const handleInputChange = (e) => {
        // allows for the updating of information in the pop up
        const { name, value } = e.target;
        setUpdatedEmployee({ ...updatedEmployee, [name]: value });
    };

    const closeModel = () => {
        //closes the pop up
        setSelectedEmployee(null);
        setUpdatedEmployee(null);
        setShowAddForm(false);
    };

    const updateEmployee = async () => {
        const response = await axios.patch('http://localhost:3000/api/employees', { ...updatedEmployee, old_employee_ssn: selectedEmployee.employee_ssn });

        setSelectedEmployee(null);
        setUpdatedEmployee(null);

        if (response.status === 200) {
            fetchData();
        }
    };

    const deleteEmployee = async () => {
        const response = await axios.delete('http://localhost:3000/api/employees', { params: { employee_ssn: updatedEmployee.employee_ssn } });

        setSelectedEmployee(null);
        setUpdatedEmployee(null);

        if (response.status === 200) {
            fetchData();
        }
    };

    const addNewEmployee = async () => {
        const response = await axios.post('http://localhost:3000/api/employees', newEmployee);

        setNewEmployee({ employee_ssn: "", hotel_id: "", first_name: "", middle_name: "", last_name: "", address: ""}); //only adds locally
        setShowAddForm(false);

        if (response.status === 200) {
            fetchData();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Employees</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {employees.map((employee, index) => (
                    <div key={index} onClick={() => handleEmployeeClick(employee)} className="bg-gray-200 p-3 rounded cursor-pointer">
                        <h2 className="text-lg font-bold">{employee.employee_ssn}</h2>
                        <p className="text-gray">{employee.hotel_id}</p>
                        <p className="text-gray">{employee.first_name} {employee.last_name}</p>
                    </div>
                ))}
            </div>
            {selectedEmployee && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{selectedEmployee.first_name} {selectedEmployee.middle_name} {selectedEmployee.last_name}</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="employee_ssn" value={updatedEmployee.employee_ssn} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Employee SSN" />
                        <input type="text" name="hotel_id" value={updatedEmployee.hotel_id} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel Id" />
                        <input type="text" name="first_name" value={updatedEmployee.first_name} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="First Name" />
                        <input type="text" name="middle_name" value={updatedEmployee.middle_name} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Middle Name" />
                        <input type="text" name="last_name" value={updatedEmployee.last_name} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Last Name" />
                        <input type="text" name="address" value={updatedEmployee.address} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Address" />
                        <div className="flex justify-end">
                            <button onClick={deleteEmployee} className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mr-2">Delete</button>
                            <button onClick={updateEmployee} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">Update</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Add Employee</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="employee_ssn" value={newEmployee.employee_ssn} onChange={(e) => setNewEmployee({ ...newEmployee, employee_ssn: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Employee SSN" />
                        <input type="text" name="hotel_id" value={newEmployee.hotel_id} onChange={(e) => setNewEmployee({ ...newEmployee, hotel_id: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel Id" />
                        <input type="text" name="first_name" value={newEmployee.first_name} onChange={(e) => setNewEmployee({ ...newEmployee, first_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="First Name" />
                        <input type="text" name="last_name" value={newEmployee.last_name} onChange={(e) => setNewEmployee({ ...newEmployee, last_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Last Name" />
                        <input type="text" name="middle_name" value={newEmployee.middle_name} onChange={(e) => setNewEmployee({ ...newEmployee, middle_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Middle Name" />
                        <input type="text" name="address" value={newEmployee.address} onChange={(e) => setNewEmployee({ ...newEmployee, address: e.target.value })} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Address" />
                        <div className="flex justify-end">
                            <button onClick={addNewEmployee} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Add Employee</button>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => setShowAddForm(true)} className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4">Add Employee</button>
        </div>
    );
};

export default Employee;
