import axios from "axios";
import { useState, useEffect } from "react";
import StarRating from "./StarRating";

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function BookingForm({ setFormSubmitted, setRoomData }) {
    const [hotelChainNames, setHotelChainNames] = useState([]);

    const [formData, setFormData] = useState({
        start_date: formatDate(new Date()),
        end_date: formatDate(new Date()),
        room_capacity: '1',
        city: '',
        hotel_chain_name: 'Any',
        rating: '3',
        number_of_rooms: '',
        price: ''
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3000/api/rooms/search', { params: new URLSearchParams(formData) });
            setRoomData(response.data);
            setFormSubmitted(true);
        } catch (err) {
            console.error("error submitting form:", err);   
        }
    };

    // query hotel chains
    useEffect(() => {
        const fetchHotelChains = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/hotel_chains');
            setHotelChainNames(response.data);
        } catch(err) { 
            console.error("Error fetching hotel chains:", err)
        }
        };

        fetchHotelChains();
    }, []);

    return (
        <form className="w-1/2 mx-auto my-8 py-12 px-8 bg-slate-100 rounded-lg bg-gray-300" onSubmit={handleSubmit}>
            <div className="space-y-12">
                {/* Dates */}
                <div>
                    <div>
                        <label htmlFor="start-date">Start Date: </label>
                        <input type="date" id="start-date" name="start_date" onChange={handleFormChange} value={formData.start_date} />
                    </div>
                    
                    <div>
                        <label htmlFor="end-date">End Date: </label>
                        <input type="date" id="end-date" name="end_date" onChange={handleFormChange} value={formData.end_date} />
                    </div>
                </div>
                
                {/* Room Capacity */}
                <div>
                    <label htmlFor="room-capacity">Room Capacity: </label>
                    <input type="number" id="room-capacity" name="room_capacity" min="1" max="6" className="w-12" onChange={handleFormChange} value={formData.room_capacity} />
                </div>

                {/* Area (City) */}
                <div>
                    <label htmlFor="city">City: </label>
                    <input type="text" id="city" name="city" onChange={handleFormChange} value={formData.city} />
                </div>

                {/* Hotel Chain */}
                <div>
                    <label htmlFor="hotel-chain">Hotel Chain: </label>
                    <select name="hotel_chain_name" id="hotel-chain" onChange={(e) => {
                        setFormData({ ...formData, hotel_chain_name: e.target.value });
                    }}>
                        <option value="Any">Any</option>
                        {hotelChainNames.map((obj, index) => (
                        <option key={index} value={obj.hotel_chain_name} >
                            { obj.hotel_chain_name }
                        </option>
                        ))}
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="star-rating">Rating: </label>
                    <StarRating formData={formData} setFormData={setFormData} clickable={true} defaultStars={3} />
                </div>

                {/* # of rooms */}
                <div>
                    <label htmlFor="room-count">Number of Rooms: </label>
                    <input type="number" id="room-count" name="number_of_rooms" className="w-12" min="1" onChange={handleFormChange} value={formData.number_of_rooms} />
                </div>

                {/* price */}
                <div>
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" name="price" className="w-12" min="0" onChange={handleFormChange} value={formData.price} />
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Search
                </button>
            </div>
        </form>
    )
}

export default BookingForm;