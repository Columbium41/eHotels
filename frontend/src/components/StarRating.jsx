import React, { useState } from 'react';

function StarRating({ setFormData, clickable, defaultStars }) {
    const [rating, setRating] = useState(defaultStars);

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
                        if (clickable) {
                            setRating(index);
                            
                            if (setFormData !== null) {
                                setFormData({ ...formData, rating: index });
                            }
                        }
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
