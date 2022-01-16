import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Carousel, Nav } from "react-bootstrap";
import Footer from "./Components/Footer";
import CarouselContainer from "./Components/CarouselContainer";
import Login from "./Components/Login";
import EmailForm from "./Components/EmailForm";
// import Login  from "./Components/Login";

function App() {
  return (
    <div className='page-container'>
			<div className="content-wrap">
			<Navigation />
			{/* <Login /> */}
			<EmailForm />
			<Link to='/'>Home </Link>
			<Routes>
				<Route path='/' element={<h1>Hello</h1>} />
				<Route path='/Login' element={Login} />
			</Routes>
		</div>
		<Footer />
		</div>
  );
}

export default App;

