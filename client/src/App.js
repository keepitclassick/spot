import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Navigation from "./Components/Navigation";
import { Carousel, Nav } from "react-bootstrap";
import Banner from "./Components/Banner";
import Calltoaction from "./Components/Calltoaction";
import Footer from "./Components/Footer";
import CarouselContainer from "./Components/CarouselContainer";
import HomepagePets from "./Components/HomepagePets";
import Login from "./Components/Login";
import EmailForm from "./Components/EmailForm";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
        <Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/email" element={<EmailForm />} />
        </Routes>
        <Banner />
        <Calltoaction />
        <HomepagePets />
      </div>
      <Footer />
    </div>
  );
}

export default App;
