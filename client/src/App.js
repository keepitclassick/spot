import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Link to="/">Home </Link>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
      <Banner />
    </div>
  );
}
