import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
    </BrowserRouter>
    
    
  )
}

export default App;
