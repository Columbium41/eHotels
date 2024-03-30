import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';

function App() {
  const [customerUI, setCustomerUI] = useState(true);

  return (
    <div className="">
      <Router basename="/">
        <div className="">
          <Navbar customerUI={customerUI} setCustomerUI={setCustomerUI} />

          <main>
            <AppRoutes />
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
