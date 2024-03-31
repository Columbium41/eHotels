import { Input, Typography, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

function Root({ customerUI, user, setUser }) {
    const [formData, setFormData] = useState({ ssn: '', isCustomer: customerUI });

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

    return (
        <div className="text-center my-8">
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
                <div>
                    <Typography>
                        Welcome { user.full_name }, you are logged in as { customerUI ? 'a Customer' : 'an Employee' }
                    </Typography>
                </div>
            }
        </div>
    )
}

export default Root;
