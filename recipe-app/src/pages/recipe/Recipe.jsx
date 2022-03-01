import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Recipe.css";

function Recipe() {
  // Pull out id from useParams Hook
  const { id } = useParams();

  // Construct url using id
  const url = "http://localhost:3000/recipes/" + id;

  // Destructure and pull out properties from the useFetch Hook
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Meal Time: {data.cookingTime}</p>
          <ul>
            {data.ingredients.map((ing, idx) => (
              <li key={idx}> {ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
