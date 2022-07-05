import { Route, Routes } from "react-router-dom";
import Home from "./features/customer/home";
import Company from "./features/company";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/company/*" element={<Company />} />
    </Routes>
  );
}

export default App;
