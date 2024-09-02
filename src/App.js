
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import CompanyInfo from './CompanyInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
          <Link to="/home">Movies</Link>
          <Link to="/company-info">Company Info</Link>
        </nav>

        {/* Wrap your <Route> components inside <Routes> */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
