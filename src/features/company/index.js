import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

index.propTypes = {};

function index(props) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
}

export default index;
