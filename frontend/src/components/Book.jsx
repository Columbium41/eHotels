import BookingForm from "./BookingForm";
import { useState } from "react";
import BookingRooms from "./BookingRooms";

function Book({ user }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [roomData, setRoomData] = useState(null);

  return (
    <>
      {formSubmitted 
        ? <BookingRooms roomData={roomData} setFormSubmitted={setFormSubmitted} /> 
        : <BookingForm setFormSubmitted={setFormSubmitted} setRoomData={setRoomData} />
      }
    </>
  )
}

export default Book;
