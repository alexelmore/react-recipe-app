import { useFetch } from "../../hooks/useFetch";
// ReceipeList Component
import RecipeList from "../../components/RecipeList";
// Styles
import "./Home.css";

function Home() {
  // Destructure and pull out data,isPending and error from useFetch Hook
  // Pass the useFetch Hook the URL to our json db
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
