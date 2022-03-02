import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";
// Styles
import "./Search.css";

function Search() {
  // Init and retrieve queryString using the useLocation Hook
  const queryString = useLocation().search;

  // Init new queryParams object passing our queryString const as an argument into the JavaScript URLSearchParams API
  const queryParams = new URLSearchParams(queryString);

  // Get query params using "q" as a term
  const query = queryParams.get("q");

  // URL containing endpoint for our search
  const url = "http://localhost:3000/recipes?q=" + query;

  // Setup for sending a fetch request for search term
  const { data, isPending, error } = useFetch(url);

  // Send request
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="page-title">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Search;
