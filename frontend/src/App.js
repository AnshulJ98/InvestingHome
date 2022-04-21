import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
} from "./components";

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
