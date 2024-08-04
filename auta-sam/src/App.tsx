import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Landing } from './views/Landing';
import Navbar from './components/navbar/Navbar';
import { GlobalStyle } from './styled-components/global-styles';
import VehicleList from './components/vehicles/vehicles-list';
import SignInWithGoogle from './components/auth/auth-google';
import VehicleDetail from './components/vehicles/vehicle-detail';
import Cart from './components/cart/cart';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Autos" element={<VehicleList />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Ingresar" element={<SignInWithGoogle />} />
      </Routes>
    </Router> 
  );
}

export default App;
