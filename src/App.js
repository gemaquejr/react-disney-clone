import { Routes, Route, Navigate } from 'react-router-dom';
import React from "react";
import Login from './components/Login/Login';

import './App.css'

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route path="/Login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate to="/Login" /> } />
      </Routes>
    </div>
  );
}

export default App;
