import RentingForm from "./RentingForm";
import { useState } from "react";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function Book({ user }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [roomData, setRoomData] = useState(null);

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

  return (
    <>
      {formSubmitted 
        ? <RentingForm formData={formData} roomData={roomData} setFormSubmitted={setFormSubmitted} user={user} /> 
        : <RentingForm formData={formData} setFormData={setFormData} setFormSubmitted={setFormSubmitted} setRoomData={setRoomData} />
      }
    </>
  )
}

export default Book;
