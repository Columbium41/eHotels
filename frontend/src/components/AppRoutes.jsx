import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./NotFound";
import Root from "./Root";
import Book from "./Book";

function AppRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route 
                exact path="/"
                element={<Root />}
            />
            <Route 
                exact path="/book"
                element={<Book />}
            />
            <Route 
                path="*" 
                element={<NotFound />} 
            />
        </Routes>
    )
}

export default AppRoutes;
