import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useTheme } from "../hooks/useTheme";
// Styles
import "./Navbar.css";

function Navbar() {
  // Init a constant for our useTheme Hook and then pull out the color value property using object destructuring
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
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
