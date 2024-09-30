import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AddService from './components/AddService';
import AllServices from './components/AllServices';
import Update from './components/Update';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<AllServices/>}></Route>
          <Route path="addservice" element={<AddService />}></Route>
          <Route path="update" element={<Update/>}></Route>
        </Route>
         
      </Routes>

    </BrowserRouter>
  )
}

export default App
