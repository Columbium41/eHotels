import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import Root from "./Root";
import Book from "./Book";
import CustomerArchives from "./CustomerArchives";

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
                path="*" 
                element={<NotFound />} 
            />
        </Routes>
    )
}

export default AppRoutes;
