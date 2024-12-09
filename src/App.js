import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import JobListingsPage from './components/JobListingsPage';
import JobDetail from './components/JobDetail';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import Navbar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    if (email === 'watson@gmail.com' && password === 'watson@123') {
      setIsAuthenticated(true);
      return true;
    } else {
      alert('Incorrect email or password!');
      return false;
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/JobListingsPage" element={<JobListingsPage />} />
        <Route path="/job/:id" element={<JobDetail />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/login" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/EmployerDashboard"
          element={isAuthenticated ? <EmployerDashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/CandidateDashboard"
          element={isAuthenticated ? <CandidateDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
