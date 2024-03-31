import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import StarRating from "./StarRating";

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function CustomerArchives({ user }) {
    const [archives, setArchives] = useState(null);

    useEffect(() => {
        const fetchArchives = async () => {
            const response = await axios.get('http://localhost:3000/api/archives', { params: new URLSearchParams({ ssn: user.customer_ssn }) });
            setArchives(response.data);
        };

        fetchArchives();
    }, []);

    return (
        <div className="my-8 flex flex-wrap gap-x-6 gap-y-5 justify-center">
            {archives !== null && archives.map((archive, index) => (
                <Card className="w-1/5 bg-gray-300" key={index}>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-4">
                            { archive.hotel_chain_name + " " + archive.street + ": Room " + archive.room_id }
                            <StarRating formData={null} setFormData={null} clickable={false} defaultStars={archive.rating} />
                        </Typography>
                        <Typography className="text-black">
                            Region: { archive.region + ", " + archive.country }<br />
                            Capacity: { archive.capacity }<br />
                            Cost: ${ archive.cost }<br />
                            View: { archive.view }<br />
                            Dates: { formatDate(archive.start_date) } - { formatDate(archive.end_date) }
                        </Typography>
                    </CardBody>
                </Card> 
            )) }
        </div>
    )
}

export default CustomerArchives;
