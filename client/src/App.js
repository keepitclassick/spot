import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Link to="/">Home </Link>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </div>
  );
}
