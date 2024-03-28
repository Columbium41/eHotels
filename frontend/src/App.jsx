import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className="">
      <Router basename="/">
        <div className="">
          <Navbar />

          <main>
            <AppRoutes />
          </main>
        </div>
      </Router>
    </div>
  )
}

export default App
