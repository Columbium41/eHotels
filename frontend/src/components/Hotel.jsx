import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Hotel = () => {
    const [hotels, setHotels] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [updatedHotel, setUpdatedHotel] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newHotel, setNewHotel] = useState({ hotel_id:"", hotel_chain_name:"", rating:"", address:"", email:""});
    const [room, setRoom] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [updatedRoom, setUpdatedRoom] = useState(null);
    const [showAddRoomForm, setShowAddRoomForm] = useState(false);
    const [newRoom, setNewRoom] = useState({ room_id:"", hotel_id:"", price:"", capacity:"", view:"", extendable:""});

    useEffect(() => {
        const fetchHotels = async () => {
            const response = await axios.get('http://localhost:3000/api/hotels');
            setHotels(response.data);
        };

        const fetchRoom = async () => {
            const response = await axios.get('http://localhost:3000/api/rooms');
            setRoom(response.data);
        };
        fetchHotels();
        fetchRoom();
    }, []);

    const handleHotelClick = (hotel) => {
        setSelectedHotel(hotel);
        setUpdatedHotel({ ...hotel });
    };

    const handleRoomClick = (room) => {
        setSelectedRoom(room);
        setUpdatedRoom({ ...room });
    };

    const handleInputChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'hotel') {
            setUpdatedHotel({ ...updatedHotel, [name]: value });
        } else {
            setUpdatedRoom({ ...updatedRoom, [name]: value });
        }
    };

    const closeModel = () => {
        setSelectedHotel(null);
        setUpdatedHotel(null);
        setShowAddForm(false);
        setSelectedRoom(null);
        setUpdatedRoom(null);
        setShowAddRoomForm(false);
    };

    const updateHotel = () => {
        const updatedHotels = hotels.map((hotel) =>
            hotel.hotel_id === updatedHotel.hotel_id ? updatedHotel : hotel
        );
        setHotels(updatedHotels);
        setSelectedHotel(null);
        setUpdatedHotel(null);
    };

    const deleteHotel = () => {
        const filteredHotels = hotels.filter((hotel) => hotel.hotel_id !== updatedHotel.hotel_id);
        setHotels(filteredHotels);
        setSelectedHotel(null);
        setUpdatedHotel(null);
    };

    const addNewHotel = () => {
        setHotels([...hotels, { ...newHotel, id: Date.now() }]);
        setNewHotel({ hotel_id:"", hotel_chain_name:"", rating:"", address:"", email:""});
        setShowAddForm(false);
    };

    const updateRoom = () => {
        const updatedRoom = room.map((room) =>
            room.room_id === updatedRoom.room_id ? updatedRoom : room
        );
        setRoom(updatedRoom);
        setSelectedRoom(null);
        setUpdatedRoom(null);
    };

    const deleteRoom = () => {
        const filteredRoom = room.filter((room) => room.room_id !== updatedRoom.room_id);
        setRoom(filteredRoom);
        setSelectedRoom(null);
        setUpdatedRoom(null);
    };

    const addNewRoom = () => {
        setRoom([...room, { ...newRoom, id: Date.now() }]);
        setNewRoom({ room_id: '', hotel_id: '', price: '', capacity: '', view: '', extendable: '' });
        setShowAddRoomForm(false);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Hotels</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotels.map((hotel, index) => (
                    <div key={index} onClick={() => handleHotelClick(hotel)} className="bg-gray-200 p-3 rounded cursor-pointer">
                        <h2 className="text-lg font-bold">{hotel.hotel_chain_name}</h2>
                        <p className="text-gray">{hotel.address}</p>
                    </div>
                ))}
            </div>
            {selectedHotel && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{selectedHotel.hotel_chain_name}</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="hotel_id" value={updatedHotel.hotel_id} onChange={(e) => handleInputChange(e, 'hotel')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel ID" />
                        <input type="text" name="hotel_chain_name" value={updatedHotel.hotel_chain_name} onChange={(e) => handleInputChange(e, 'hotel')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel Chain Name" />
                        <input type="text" name="rating" value={updatedHotel.rating} onChange={(e) => handleInputChange(e, 'hotel')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Rating" />
                        <input type="text" name="address" value={updatedHotel.address} onChange={(e) => handleInputChange(e, 'hotel')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Address" />
                        <input type="email" name="email" value={updatedHotel.email} onChange={(e) => handleInputChange(e, 'hotel')} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Email" />
                        <div className="flex justify-end">
                            <button onClick={deleteHotel} className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mr-2">Delete</button>
                            <button onClick={updateHotel} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">Update</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                    <div className="bg-white rounded-lg p-8 max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Add Hotel</h2>
                            <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                        </div>
                        <input type="text" name="hotel_id" value={newHotel.hotel_id} onChange={(e) => setNewHotel({ ...newHotel, hotel_id: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel Id" />
                        <input type="text" name="hotel_chain_name" value={newHotel.hotel_chain_name} onChange={(e) => setNewHotel({ ...newHotel, hotel_chain_name: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel Chain Name" />
                        <input type="text" name="rating" value={newHotel.rating} onChange={(e) => setNewHotel({ ...newHotel, rating: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Rating" />
                        <input type="text" name="address" value={newHotel.address} onChange={(e) => setNewHotel({ ...newHotel, address: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Address" />
                        <input type="email" name="email" value={newHotel.email} onChange={(e) => setNewHotel({ ...newHotel, email: e.target.value })} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Email" />
                        <div className="flex justify-end">
                            <button onClick={addNewHotel} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Add Hotel</button>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => setShowAddForm(true)} className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4">Add Hotel</button>

            {/* Room List */}
            <div className="mt-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Room List</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {room.map((room, index) => (
                        <div key={index} onClick={() => handleRoomClick(room)} className="bg-gray-200 p-3 rounded cursor-pointer">
                            <h2 className="text-lg font-bold">{room.room_id}</h2>
                            <p className="text-gray">Hotel Id: {room.hotel_id}</p>
                        </div>
                    ))}
                </div>
                {selectedRoom && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                        <div className="bg-white rounded-lg p-8 max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">{selectedRoom.hotel_chain_name}</h2>
                                <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                            </div>
                            <input type="text" name="room_id" value={updatedRoom.room_id} onChange={(e) => handleInputChange(e, 'room')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Room ID" />
                            <input type="text" name="hotel_id" value={updatedRoom.hotel_id} onChange={(e) => handleInputChange(e, 'room')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel ID" />
                            <input type="text" name="price" value={updatedRoom.price} onChange={(e) => handleInputChange(e, 'room')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Price" />
                            <input type="text" name="capacity" value={updatedRoom.capacity} onChange={(e) => handleInputChange(e, 'room')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Capacity" />
                            <input type="text" name="view" value={updatedRoom.view} onChange={(e) => handleInputChange(e, 'room')} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="View" />
                            <input type="text" name="extendable" value={updatedRoom.extendable} onChange={(e) => handleInputChange(e, 'room')} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Extendable" />
                            <div className="flex justify-end">
                                <button onClick={deleteRoom} className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mr-2">Delete</button>
                                <button onClick={updateRoom} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">Update</button>
                            </div>
                        </div>
                    </div>
                )}
                {showAddRoomForm && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-10">
                        <div className="bg-white rounded-lg p-8 max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Add Room</h2>
                                <button onClick={closeModel} className="text-gray-700 hover:text-gray-900">&times;</button>
                            </div>
                            <input type="text" name="room_id" value={newRoom.room_id} onChange={(e) => setNewRoom({ ...newRoom, room_id: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Room ID" />
                            <input type="text" name="hotel_id" value={newRoom.hotel_id} onChange={(e) => setNewRoom({ ...newRoom, hotel_id: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Hotel ID" />
                            <input type="text" name="price" value={newRoom.price} onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Price" />
                            <input type="text" name="capacity" value={newRoom.capacity} onChange={(e) => setNewRoom({ ...newRoom, capacity: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="Capacity" />
                            <input type="text" name="view" value={newRoom.view} onChange={(e) => setNewRoom({ ...newRoom, view: e.target.value })} className="block w-full border-gray-300 rounded-md mb-2 px-4 py-2" placeholder="View" />
                            <input type="text" name="extendable" value={newRoom.extendable} onChange={(e) => setNewRoom({ ...newRoom, extendable: e.target.value })} className="block w-full border-gray-300 rounded-md mb-4 px-4 py-2" placeholder="Extendable" />
                            <div className="flex justify-end">
                                <button onClick={addNewRoom} className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2">Add Room</button>
                            </div>
                        </div>
                    </div>
                )}
                <button onClick={() => setShowAddRoomForm(true)} className="fixed bottom-8 left-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4">Add Room</button>
            </div>
        </div>
    );
};

export default Hotel;