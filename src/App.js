import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/SKills/Skills";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";
import Volunteer from "./pages/Volunteering/Volunteer";
import Contacts from "./pages/Contacts/Contacts";
import Error from "./pages/Error/Error";
import Footer from "./components/footer/Footer";
import NavBarHome from "./components/navbar/Regular/NavbarHome";
import New from "./pages/New/New.jsx";
import "flowbite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<New />} />
        <Route path="#about" element={<New />} />
        <Route path="#skills" element={<New />} />
        <Route path="#projects" element={<New />} />
        <Route path="#contacts" element={<New />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
