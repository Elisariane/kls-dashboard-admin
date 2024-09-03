import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Login from './pages/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Product from './pages/Product';


function App() {

  return (
  <Router>
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product" element={< Product />} />
    </Routes>
  </Router>
  )
}

export default App
