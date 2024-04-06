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
            const response = await axios.get('http://localhost:3000/api/archives/checkin');
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

    async function handleSubmit(){
        try {
            let id = document.getElementById("booking_id").value;
            let ssn = document.getElementById("employee_ssn").value;
            if (ssn != null){
                
            
                await axios.post('http://localhost:3000/api/archives/checkin', {
                    
                        archive_id: id,
                        employee_ssn: ssn
                });
            }

        } catch (err) {
            console.error("error submitting form:", err);   
        }

    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Check-In</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {archives.map((archive, index) => (
                    <div key={index} onClick={() => handleArchiveClick(archive)} className="bg-gray-200 p-3 rounded cursor-pointer">
                        
                        <h2 className="text-lg font-bold"> Booking ID: {archive.archive_id}</h2>
                        <p className="text-gray">Room ID: {archive.room_id}</p>
                        <p className="text-gray">Customer SSN: {archive.customer_ssn}</p>
                        <p className="text-gray">Start Date: {archive.start_date}</p>
                        <p className="text-gray">End Date: {archive.end_date}</p>
                        <p className="text-gray">Total Cost: {archive.cost}</p>


                    </div>
                ))}
            </div>
            {selectedArchive && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <laabel> Booking ID:</laabel>
                            <h2 className="text-xl font-bold" id='booking_id'>{selectedArchive.archive_id}</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" id="employee_ssn" onChange={handleInputChange} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder='Input Employee SSN rent' />
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick ="handleSubmit()">                 
                        Transform to Renting
                        </button>
                    </div>
                  
                    
                </div>
            )}
        </div>
    );
};

export default CheckIn;
