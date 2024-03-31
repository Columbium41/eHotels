import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Toggle({ customerUI, setCustomerUI, setUser }) {
    const navigate = useNavigate();

    const handleChange = () => {
        setCustomerUI(!customerUI);
        sessionStorage.removeItem('ssn');
        setUser(null);
        navigate("/");
    };

    return (
        <>
            <span className="text-white mr-4">Customer</span>
            <Switch 
                color="teal" 
                checked={!customerUI}
                onChange={handleChange}
            />
            <span className="text-white ml-4">Employee</span>
        </>
    )
}

export default Toggle;
