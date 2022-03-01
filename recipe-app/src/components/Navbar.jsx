import { Link } from "react-router-dom";
// Styles
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="brand" to="/">
          React Recipes App
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;