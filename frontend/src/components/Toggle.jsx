import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Toggle({ customerUI, setCustomerUI, setUser }) {
    const navigate = useNavigate();

    const handleChange = () => {
        setCustomerUI(!customerUI);
        sessionStorage.removeItem('ssn');
        sessionStorage.setItem('isChecked', !customerUI);
        setUser(null);
        navigate("/");
    };

    useEffect(() => {
        const savedState = sessionStorage.getItem('isChecked');
        if (savedState !== null) {
            setCustomerUI(savedState === 'true');
        }
    }, []);

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
