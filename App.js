import React from "react";

import './App.css';


import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Sign from "./Sign";



function App() {
    return (
        <div className="all">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/Sign" element={<Sign />} />
                
               
            </Routes>
        </div>
    )
}

export default App
