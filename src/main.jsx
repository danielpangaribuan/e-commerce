import React from 'react';
import { Routes, Route } from 'react-router-dom';

// PAGES
import Login from './pages/login';
import Home from './pages/home';


const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
export default Main;
