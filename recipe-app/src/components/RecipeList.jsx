import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
// styles
import "./RecipeList.css";

function RecipeList({ recipes, term }) {
  // Init history constant for useHistory Hook
  const history = useHistory();

  // useEffect Hook to redirect user back to the Home page if there are not recipes for the given search term
  useEffect(() => {
    if (recipes.length === 0) {
      setTimeout(() => {
        history.push("/");
      }, 4500);
    }
  }, [recipes.length, history]);

  if (recipes.length === 0) {
    return <div className="error">No recipes for {term}</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
