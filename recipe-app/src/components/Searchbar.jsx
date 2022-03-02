import { useState } from "react";
import { useHistory } from "react-router-dom";
// Styles
import "./Searchbar.css";
function Searchbar() {
  // Component Level State
  const [term, setTerm] = useState("");

  // Init useHistory Hook
  const history = useHistory();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect the user to the Search page, with query param
    history.push(`/search?q=${term}`);
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </div>
  );
}

export default Searchbar;
