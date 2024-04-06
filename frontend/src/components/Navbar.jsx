import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "./Toggle";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar({ customerUI, setCustomerUI, setUser }) {
    const location = useLocation();

    const [customerNav, setCustomerNav] = useState([
        { name: 'Home', to: '/', current: true },
        { name: 'Book', to: '/book', current: false },
        { name: 'My Bookings', to: '/customer_archives', current: false }
    ]);

    const [employeeNav, setEmployeeNav] = useState([
        { name: 'Home', to: '/', current: true },
        { name: 'Booking Check-in', to: '/check_in', current: false},
        { name: 'Create Renting', to: '/renting', current: false},
        { name: 'Customer', to: '/customer', current: false },
        { name: 'Employee', to: '/employee', current: false },
        { name: 'Hotel', to: '/hotel', current: false }
    ]);

    // useEffect to highlight current URL in navbar
    useEffect(() => {  
        const updatedCustomerNavigation = customerNav.map(item => ({
            name: item.name,
            to: item.to,
            current: (item.to === location.pathname) // Compare the item's 'to' property with the current pathname
        }));
        setCustomerNav(updatedCustomerNavigation);

        const updatedEmployeeNavigation = employeeNav.map(item => ({
            name: item.name,
            to: item.to,
            current: (item.to === location.pathname) // Compare the item's 'to' property with the current pathname
        }));
        setEmployeeNav(updatedEmployeeNavigation); 
    }, [location.pathname]);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Navbar button */}
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="/public/vite.svg"
                                alt="Navbar Logo"
                            />
                        </div>

                        {/* Navigation Button Links */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {customerUI 
                                ? customerNav.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                            )
                                        }
                                        aria-current={ item.current ? 'page' : undefined }
                                    >
                                        {item.name}
                                    </Link >
                                    ))
                                : employeeNav.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-sm font-medium'
                                            )
                                        }
                                        aria-current={ item.current ? 'page' : undefined }
                                    >
                                        {item.name}
                                    </Link >
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 border-red-200 border-solid">
                        <Toggle customerUI={customerUI} setCustomerUI={setCustomerUI} setUser={setUser} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

