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
import NavBarHome from "./components/navbar/NavbarHome";

function App() {
  return (
    <BrowserRouter>
      <NavBarHome />
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
