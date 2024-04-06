import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckIn = () => {
    const [archives, setArchives] = useState([]);
    const [selectedArchive, setSelectedArchive] = useState(null);
    const [updatedArchive, setUpdatedArchive] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newArchive, setNewArchive] = useState({ archive_id:"", room_id:"", customer_ssn:"", employee_ssn:"", type:"", start_date:"", end_date:"", cost:"" });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/api/archives');
            setArchives(response.data);
        };

        fetchData();
    }, []);

    const handleArchiveClick = (archive) => {
        setSelectedArchive(archive);
        setUpdatedArchive({ ...archive });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedArchive({ ...updatedArchive, [name]: value });
    };

    const closeModel = () => {
        setSelectedArchive(null);
        setUpdatedArchive(null);
        setShowAddForm(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Check-In</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {archives.map((archive, index) => (
                    <div key={index} onClick={() => handleArchiveClick(archive)} className="bg-gray-200 p-3 rounded cursor-pointer">
                        <h2 className="text-lg font-bold">{archive.archive_id}</h2>
                        <p className="text-gray">{archive.room_id}</p>
                    </div>
                ))}
            </div>
            {selectedArchive && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{selectedArchive.archive_id}</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="room_id" value={updatedArchive.room_id} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Room ID" />
                        <input type="text" name="customer_ssn" value={updatedArchive.customer_ssn} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Customer SSN" />
                        <input type="text" name="employee_ssn" value={updatedArchive.employee_ssn} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Employee SSN" />
                        <input type="text" name="type" value={updatedArchive.type} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Type" />
                        <input type="text" name="start_date" value={updatedArchive.start_date} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Start Date" />
                        <input type="text" name="end_date" value={updatedArchive.end_date} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="End Date" />
                        <input type="text" name="cost" value={updatedArchive.cost} onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Cost" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckIn;
