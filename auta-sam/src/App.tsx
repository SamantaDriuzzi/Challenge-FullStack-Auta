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
import AddVehicleForm from './components/admin/add-vehicle';
import { PanelAdmin } from './components/admin/panel';
import AdminVehicleList from './components/admin/admin-vehicles-list';
import EditVehicle from './components/admin/edit-vehicle-id';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Favorites from './components/favorites/favorites';

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
        <Route path="/Admin" element={<ProtectedRoute element={<PanelAdmin />} admin />} />
        <Route path="/Admin/addVehicle" element={<ProtectedRoute element={<AddVehicleForm />} admin />} />
        <Route path="/Admin/editVehicleList" element={<ProtectedRoute element={<AdminVehicleList />} admin />} />
        <Route path="/Admin/editVehicle/:id" element={<ProtectedRoute element={<EditVehicle />} admin />} />
        <Route path="/Favoritos" element={<Favorites />} />

      </Routes>
    </Router>
  );
}

export default App;
