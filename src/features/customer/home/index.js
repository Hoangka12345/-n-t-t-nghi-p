import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TourPage from './pages/TourPage';


function Home() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/tour" element={<TourPage />} />
        </Routes>
    );
}

export default Home;