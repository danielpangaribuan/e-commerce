import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

// PAGES
import Login from './pages/login';
import Home from './pages/home';

// COMPONENTS
import Header from './components/header';

const Main = () => {
    return (
        <div className='main-container'>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}
export default Main;
