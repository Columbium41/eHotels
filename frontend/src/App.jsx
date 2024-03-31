import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import axios from 'axios';

function App() {
  const [customerUI, setCustomerUI] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const ssn = sessionStorage.getItem('ssn');

      if (ssn !== null) {
        const response = await axios.get('http://localhost:3000/api/auth/login', { params: new URLSearchParams({ ssn: ssn, isCustomer: customerUI }) });

        if (response.status === 201) {
          console.error("error fetching user");
        } else if (response.status === 200) {
          setUser(response.data);
        }
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="">
      <Router basename="/">
        <div className="">
          <Navbar customerUI={customerUI} setCustomerUI={setCustomerUI} setUser={setUser} />

          <main>
            <AppRoutes customerUI={customerUI} user={user} setUser={setUser} />
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
