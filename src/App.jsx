import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import CreateCapsule from './Pages/CreateCapsule/CreateCapsule';
import MyCapsules from './Pages/MyCapsules/MyCapsules';
import Register from './Pages/Register/Register';
import Explore from './Pages/Explore/Explore';
import PutInCapsule from './Pages/PutInCapsule/PutInCapsule';
import Profile from './Pages/Profile/Profile';
import { ProtectedRoute } from './Components/ProtectedRoute/ProtectedRoute';
import './styles/index.css';
import './styles/style.css';
import './styles/variables.css';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/create" element={<CreateCapsule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/putInCapsule" element={<PutInCapsule />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
