import { Routes, Route, Navigate } from 'react-router-dom';
import React from "react";
import Login from './components/Login/Login';

import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
  return(
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/Login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate to="/Login" /> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/detail/:id" element={ <Detail/> } />
      </Routes>
    </div>
  );
}

export default App;
