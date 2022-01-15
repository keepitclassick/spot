import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import Nav from './Components/Nav';

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home </Link>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
      </Routes>
    </div>
  );
}
