import { useFetch } from "../../hooks/useFetch";
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
      {data && data.map((recipe) => <h2 key={recipe.id}>{recipe.title}</h2>)}
    </div>
  );
}

export default Home;
