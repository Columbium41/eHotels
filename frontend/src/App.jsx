import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <div className="app-content">
          <Navbar />

          <main>
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
