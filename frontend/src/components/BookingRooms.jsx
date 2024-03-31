import Room from "./Room";

function BookingRooms({ roomData, setFormSubmitted }) {
    return (
        <div className="my-8 flex flex-wrap gap-x-6 gap-y-5 justify-center">
            { roomData.map((room, index) => (
                <Room key={index} roomData={room} />
            )) }
        </div>
    )
}

export default BookingRooms;
