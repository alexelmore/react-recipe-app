import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
// Styles
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="brand" to="/">
          React Recipes App
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;
