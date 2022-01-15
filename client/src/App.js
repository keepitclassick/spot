import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Carousel, Nav } from "react-bootstrap";
import Footer from "./Components/Footer";
import CarouselContainer from "./Components/CarouselContainer";

function App() {
  return (
    <div className='page-container'>
			<div className="content-wrap">
			<Nav />
			<Link to='/'>Home </Link>
			<Routes>
				<Route path='/' element={<h1>Hello</h1>} />
			</Routes>
		</div>
		<Footer />
		</div>
  );
}

export default App;
