import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return <h1>App</h1>;
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import Nav from './Components/Nav';


function App() {
  return (
    <div className='App'>
			<Link to='/'>Home </Link>
			<Routes>
				<Route path='/' element={<h1>Hello</h1>} />
			</Routes>
		</div>
  );
}

export default App;
}
