import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TourDetailPage from './pages/TourDetailPage';
import TourPage from './pages/TourPage';


function Home() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/tours" element={<TourPage />} />
            <Route path="/tour-detail" element={<TourDetailPage />} />
        </Routes>
    );
}

export default Home;