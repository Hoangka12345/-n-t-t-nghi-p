import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./pages/test";

index.propTypes = {};

function index(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default index;
