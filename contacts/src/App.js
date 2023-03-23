import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
