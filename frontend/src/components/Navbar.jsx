import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar() {
    const location = useLocation();

    const [navigation, setNavigation] = useState([
        { name: 'Home', to: '/', current: true },
        { name: 'Link 2', to: '/link_2', current: false },
        { name: 'Link 3', to: '/link_3', current: false },
        { name: 'Link 4', to: '/link_4', current: false },
    ]);

    // useEffect to highlight current URL in navbar
    useEffect(() => {
        const updatedNavigation = navigation.map(item => ({
            name: item.name,
            to: item.to,
            current: (item.to === location.pathname) // Compare the item's 'to' property with the current pathname
        }));
        setNavigation(updatedNavigation);
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
                                {navigation.map((item, index) => (
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

