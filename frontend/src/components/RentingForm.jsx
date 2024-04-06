import axios from "axios";
import { useState } from "react";


function RentingForm() {

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }

    const [formData, setFormData] = useState({
        start_date: formatDate(new Date()),
        end_date: formatDate(new Date()),
        room_id: '',
        employee_ssn: '',
        customer_ssn: ''
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            let startDate = formatDate(new Date());
            let endDate = document.getElementById("end-date").value;
            let roomID = document.getElementById("room-id").value;
            let customerSSN = document.getElementById("customer-ssn").value;
            let employeeSSN = document.getElementById("employee-ssn").value;

            await axios.put('http://localhost:3000/api/archives', {
                
                    start_date: startDate,
                    end_date: endDate,
                    room_id: roomID,
                    customer_ssn: customerSSN,
                    employee_ssn: employeeSSN
                });
        } catch (err) {
            console.error("error submitting form:", err);   
        }
    };

    return (
        <form className="w-1/2 mx-auto my-8 py-12 px-8 bg-slate-100 rounded-lg bg-gray-300" onSubmit={handleSubmit}>
            <div className="space-y-12">
                {/* Dates */}
                <div>
                    {/* <div>
                        <label htmlFor="start-date">Start Date: </label>
                        <input type="date" id="start-date" name="start_date" onChange={handleFormChange} value={formData.start_date} />
                    </div> */}

                    <div>
                        <label htmlFor="end-date">End Date: </label>
                        <input type="date" id="end-date" name="end_date" 
                        // onChange={handleFormChange} value={formData.end_date} 
                        />
                    </div>
                </div>
                
                {/* Room */}
                <div>
                    <label htmlFor="room-id">Room ID: </label>
                    <input type="text" id="room-id" name="room_id" min="0" className="w-12"
                    //  onChange={handleFormChange} value={formData.room_id} 
                    />
                </div>

                {/* Cusomer */}
                <div>
                    <label htmlFor="customer-ssn">Customer SSN: </label>
                    <input type="text" id="customer-ssn" name="customer_ssn" className="w-12" 
                    // onChange={handleFormChange} value={formData.customer_ssn} 
                    />
                </div>

                {/* Employee */}
                <div>
                    <label htmlFor="employee-ssn">Employee SSN: </label>
                    <input type="text" id="employee-ssn" name="employee_ssn" className="w-12"
                    //  onChange={handleFormChange} value={formData.employee_ssn} 
                     />
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Finish
                </button>
            </div>
        </form>
    )
}

export default RentingForm;