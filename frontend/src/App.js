import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  House,
  Tiers,
  ContactUs,
  AboutUs,
  Listings
} from "./components";

function App() {
  return (
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<House />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/tiers" element={<Tiers />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
