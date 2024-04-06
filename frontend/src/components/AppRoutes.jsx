import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Root from "./Root";
import Book from "./Book";
import CustomerArchives from "./CustomerArchives";
import Customer from "./Customer";
import Employee from "./Employee";
import Hotel from "./Hotel";
import CreateRenting from "./RentingForm";
import CheckIn from "./CheckIn";

function AppRoutes({ customerUI, user, setUser }) {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route 
                exact path="/"
                element={<Root customerUI={customerUI} user={user} setUser={setUser} />}
            />
            <Route 
                exact path="/book"
                element={ user !== null && customerUI ? <Book user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                exact path="/customer_archives"
                element={ user !== null && customerUI ? <CustomerArchives user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                exact path="/renting"
                element={ user !== null && !customerUI ? <CreateRenting user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                exact path="/check_in"
                element={ user !== null && !customerUI ? <CheckIn user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                exact path="/customer"
                element={ user !== null && !customerUI ? <Customer user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                exact path="/employee"
                element={ user !== null && !customerUI ? <Employee user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                exact path="/hotel"
                element={ user !== null && !customerUI ? <Hotel user={user} /> : <Navigate to="/" /> }
            />
            <Route 
                path="*" 
                element={<NotFound />} 
            />
        </Routes>
    )
}

export default AppRoutes;
