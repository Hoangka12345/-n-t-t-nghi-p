import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import TourDetailPage from "./pages/TourDetailPage";
import TourPage from "./pages/TourPage";
import HistoryPage from "./pages/HistoryPage";
import NaturePage from "./pages/NaturePage";
import FoodPage from "./pages/FoodPage";

function Home() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tours" element={<TourPage />} />
      <Route path="/tour-detail" element={<TourDetailPage />} />
      <Route path="/check-out" element={<Checkout />} />

      <Route path="/history" element={<HistoryPage />} />
      <Route path="/nature" element={<NaturePage />} />
      <Route path="/food" element={<FoodPage />} />
    </Routes>
  );
}

export default Home;
