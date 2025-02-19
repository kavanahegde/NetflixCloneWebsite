import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home'
import Login from  './Components/Pages/Login/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
