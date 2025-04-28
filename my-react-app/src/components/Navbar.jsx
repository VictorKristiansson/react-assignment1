import { Link } from "react-router-dom";
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Victor Kristiansson</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
