import React, { useState } from 'react';

function StarRating({ formData, setFormData }) {
    const [rating, setRating] = useState(3);

    return (
        <div className="star-rating">
        {[...Array(5)].map((star, index) => {
            index += 1;
            
            return (
                <button
                    type="button"
                    key={index}
                    className={(index <= (rating) ? "text-amber-500" : "text-black") + " text-3xl mr-1"}
                    onClick={() => {
                        setRating(index);
                        setFormData({ ...formData, rating: index });
                    }}
                >
                    <span className="star">&#9733;</span>
                </button>
            );
        })}
        </div>
    );
};

export default StarRating;
