import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import StarRating from "./StarRating";

function Room({ roomData }) {
    return (
        <Card className="w-1/5 bg-gray-300">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-4">
                    { roomData.hotel_chain_name + " " + roomData.street + ": Room " + roomData.room_id }
                    <StarRating setFormData={null} clickable={false} defaultStars={roomData.rating} />
                </Typography>
                <Typography className="text-black">
                    Region: { roomData.region + ", " + roomData.country }<br />
                    Capacity: { roomData.capacity }<br />
                    Extendable: { roomData.extendable ? "yes" : "no" }<br />
                    Price: ${ roomData.price }<br />
                    View: { roomData.view }
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Book</Button>
            </CardFooter>
        </Card> 
    )
}

export default Room;
