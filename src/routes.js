import React from 'react'
import Sarah from './Sarah'
import Umma from './Umma'
import App from './App'


import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
function RoutesList() {
  return (
    <div>

<BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/sarah" element={<Sarah />}/>
        <Route path="/umma" element={<Umma />}/>
        </Routes>
</BrowserRouter>


     
    </div>
  );
}

export default RoutesList;
