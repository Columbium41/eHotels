import React, { useState, useEffect } from 'react';

const Employee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        //api goes here
    }, []);

    const addEmployee = (employee) => {
    };

    const updateEmployee = (employee) => {
    };

    const deleteEmployee = (employeeId) => {
    };

    return (
        <div>
            <h1>The employee webpage</h1>
            {employees.map((employee) => (
                <div key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p>{employee.email}</p>
                    {/* Add UI here */}
                </div>
            ))}
            {/* Add employee or something here*/}
        </div>
    );
};

export default Employee;