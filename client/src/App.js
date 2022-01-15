import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import { Carousel, Nav } from "react-bootstrap";
import Footer from "./Components/Footer";
import CarouselContainer from "./Components/CarouselContainer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
        <Link to="/">Home </Link>
        <Routes>
          <Route path="/" element={<h1>Hello</h1>} />
        </Routes>
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
