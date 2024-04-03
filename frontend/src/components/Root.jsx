import { Card, CardBody, Input, Typography, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

function Root({ customerUI, user, setUser }) {
    const [formData, setFormData] = useState({ ssn: '', isCustomer: customerUI });
    const [hotelsPerArea, setHotelsPerArea] = useState(null);  // view 1
    const [hotelsCapacity, setHotelsCapacity] = useState(null);  // view 2

    useEffect(() => {
        const fetchData = async () => {
            const response1 = await axios.get('http://localhost:3000/api/hotels/area');
            setHotelsPerArea(response1.data);

            const response2 = await axios.get('http://localhost:3000/api/hotels/capacity');
            setHotelsCapacity(response2.data);
        };

        fetchData();
    }, []);

    useEffect(() => {
        setFormData({ ...formData, isCustomer: customerUI });
    }, [customerUI]);

    const handleChange = (e) => {
        setFormData({ ...formData, ssn: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3000/api/auth/login', { params: new URLSearchParams(formData) });
            
            if (response.status === 201) {
                document.getElementById('form-error').classList.remove('hidden');
            } else if (response.status === 200) {
                setUser(response.data);

                if (customerUI) {
                    sessionStorage.setItem('ssn', response.data.customer_ssn);
                } else {
                    sessionStorage.setItem('ssn', response.data.employee_ssn);
                }
            }
        } catch (err) {
            console.error("error submitting form:", err);   
        }
    }

    const handleLogout = (e) => {
        sessionStorage.removeItem('ssn');
        window.location.reload();
    }

    return (
        <div className="text-center my-8 mx-40">
            { user === null ? 
                <form className="w-96 mx-auto" onSubmit={handleSubmit}>
                    <Typography>
                        Enter your SSN (format: xxx xxx xxx):
                    </Typography>
                    <Input 
                        placeholder="000 000 000"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-96"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={handleChange}
                    />
                    <Button type="submit" className="mt-4">
                        Sign In
                    </Button>
                    <Typography id="form-error" className="mt-3 hidden text-red-500">
                        Invalid SSN
                    </Typography>
                </form>
                :
                <>
                    <div className="mb-12">
                        <Typography variant="h2" className="mb-2">
                            E-Hotels
                        </Typography>
                        <Typography>    
                            Welcome to the E-Hotels booking system { user.full_name }, 
                            you are logged in as { customerUI ? 'a Customer' : 'an Employee' }.
                        </Typography>
                        { customerUI && 
                            <Typography>
                                We have collaborated with 5 hotel chains and 40 hotels from across North America to deliver
                                the best booking experience for you.<br />
                                In order to book a room from our partnered hotels, click on the Book link in the navbar.
                            </Typography>
                        }
                    </div>
                    <div className="mb-12">
                        <Typography variant="h4" className="mb-2">
                            Number of Hotels per Area
                        </Typography>
                        <div className="my-8 flex flex-wrap gap-x-6 gap-y-5 justify-begin">
                            { hotelsPerArea !== null && hotelsPerArea.map((row, index) => (
                                <Card key={index} className="text-left bg-gray-300 p-3">
                                    <Typography variant="h5" color="blue-gray" className="mb-4">
                                        { row.city + ", " + row.region }
                                    </Typography>
                                    <CardBody>
                                        <Typography className="text-black">
                                            Rooms: { row.rooms }
                                        </Typography>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="mb-12">
                        <Typography variant="h4" className="mb-2">
                            Hotel Capacity
                        </Typography>
                        <div className="my-8 flex flex-wrap gap-x-6 gap-y-5 justify-begin">
                            { hotelsCapacity !== null && hotelsCapacity.map((row, index) => (
                                <Card key={index} className="text-left bg-gray-300 p-3">
                                    <Typography variant="h5" color="blue-gray" className="mb-4">
                                        { row.hotel_chain_name + ": " + row.street }
                                    </Typography>
                                    <CardBody>
                                        <Typography className="text-black">
                                            Capacity: { row.total_capacity }
                                        </Typography>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button className="mt-3 bg-red-500" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </>
            }
        </div>
    )
}

export default Root;
