import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { useContext } from "react";
// Styles
import "./Navbar.css";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  // Init our context, passing in our ThemeContext as an argument to the useContext Hook and then pulling out the color value property using object destructuring
  const { color } = useContext(ThemeContext);
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
