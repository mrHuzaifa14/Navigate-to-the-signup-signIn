import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedVehicles from './components/FeaturedVehicles';
import Footer from './components/Footer';
import SignupForm from './components/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Routes>
            {/* Route for Signup/Login */}
            <Route path="/login" element={<SignupForm />} />
            <Route path="/signup" element={<SignupForm />} />

            {/* Route for the main content */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <FeaturedVehicles />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
