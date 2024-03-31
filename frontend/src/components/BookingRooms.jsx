import Room from "./Room";

function BookingRooms({ formData, roomData, setFormSubmitted }) {
    return (
        <div className="my-8 flex flex-wrap gap-x-6 gap-y-5 justify-center">
            { roomData.map((room, index) => (
                <Room key={index} roomData={room} formData={formData} />
            )) }
        </div>
    )
}

export default BookingRooms;
