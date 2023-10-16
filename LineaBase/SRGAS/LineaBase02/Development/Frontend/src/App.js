import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Welcome from './Welcome';
import ImageDetail from "./ImageDetail";
import { ReservationProvider } from './ReservationContext';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path="/imagen/:imageName" element={<ImageDetail />} />
      
    </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;
