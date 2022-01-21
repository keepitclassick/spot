import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import HomepagePets from "./Components/HomepagePets";
import Login from "./Components/Login";
import EmailForm from "./Components/EmailForm";
import Adopt from "./Components/Adopt";
import Registration from "./Components/Registration";
import AboutUs from "./Components/AboutUs";
import Resources from "./Components/Resources";
import Dashboard from "./Components/Dashboard";
// import Details from "./Components/details";
import Home from "./Components/Home";
import CarouselContainer from "./Components/CarouselContainer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navigation />
        <Routes>
          {<Route exact path="/" element={<Home />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/email" element={<EmailForm />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/admin" element={<Dashboard />} />
          {/* <Route path="/details/:id" element={<Details />} /> */}
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="carousel" element={<CarouselContainer />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
