import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { Carousel, Nav } from "react-bootstrap";
import Footer from "./Components/Footer";
import CarouselContainer from "./Components/CarouselContainer";
import HomepagePets from "./Components/HomepagePets";
import Login from "./Components/Login";
import EmailForm from "./Components/EmailForm";
import Adopt from "./Components/Adopt";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
        <Routes>
          {<Route exact path="/" element={<HomepagePets />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/email" element={<EmailForm />} />
          <Route path="/adopt" element={<Adopt />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
