import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Error from "./pages/Error/Error";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home.jsx";
import "flowbite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="#about" element={<Home />} />
        <Route path="#skills" element={<Home />} />
        <Route path="#projects" element={<Home />} />
        <Route path="#contacts" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
