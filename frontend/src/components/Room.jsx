import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import StarRating from "./StarRating";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Room({ user, formData, roomData }) {
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/archives/', 
                { ...roomData, start_date: formData.start_date, end_date: formData.end_date, customer_ssn: user.customer_ssn });

            if (response.status === 200) {
                console.log("REDIRECT")
                navigate('/customer_archives');
            }
        } catch (err) {
            console.error("error submitting form:", err);   
        }
    };

    return (
        <Card className="w-1/5 bg-gray-300">
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-4">
                    { roomData.hotel_chain_name + " " + roomData.street + ": Room " + roomData.room_id }
                    <StarRating formData={null} setFormData={null} clickable={false} defaultStars={roomData.rating} />
                </Typography>
                <Typography className="text-black">
                    Region: { roomData.region + ", " + roomData.country }<br />
                    Capacity: { roomData.capacity }<br />
                    Extendable: { roomData.extendable ? "yes" : "no" }<br />
                    Price: ${ roomData.price }/day<br />
                    View: { roomData.view }
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button onClick={handleClick}>Book</Button>
            </CardFooter>
        </Card> 
    )
}

export default Room;
