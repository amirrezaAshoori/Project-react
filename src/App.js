import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import PropertyDetails from './Pages/PropertyDetails';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Login from './Pages/Login';
import Signup from './Pages/SignUp';

export default function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}