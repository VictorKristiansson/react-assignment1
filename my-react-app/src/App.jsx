import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/portfolio" element={<Portfolio />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
