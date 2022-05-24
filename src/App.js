import { Route, Routes } from "react-router-dom";
import Home from './features/customer/home';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
