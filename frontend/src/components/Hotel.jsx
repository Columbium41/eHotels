import React, { useState, useEffect } from 'react';

const Hotel = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        //api goes here
    }, []);

    const addHotel = (hotel) => {
    };

    const updateHotel = (hotel) => {
    };

    const deleteHotel = (hotelId) => {
    };

    return (
        <div>
            <h1>The hotel webpage</h1>
            {hotels.map((hotel) => (
                <div key={hotel.id}>
                    <h2>{hotel.name}</h2>
                    <p>{hotel.email}</p>
                    {/* Add UI here */}
                </div>
            ))}
            {/* Add hotel or something here*/}
        </div>
    );
};

export default Hotel;