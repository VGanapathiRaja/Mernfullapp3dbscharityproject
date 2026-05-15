import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Menus/Homepage/Home";
import About from "./Menus/Aboutpage/About";
import Charity from "./Menus/Charitypage/Charity";
import Contact from "./Menus/Contactpage/Contact";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/charity" element={<Charity/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;