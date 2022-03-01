import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
// Styles
import "./Create.css";

function Create() {
  // Component Level State
  const [recipeTitle, setRecipeTitle] = useState("");
  const [cookingMethod, setCookingMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  // Setup useRef Hook for ingredient input
  const ingredientInput = useRef(null);

  // Function that handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipeTitle, cookingMethod, cookingTime, ingredients);
  };

  // Function that handles adding a single ingredient
  const handleAddIngredient = (e) => {
    e.preventDefault();
    // Init and trim ingredient variable
    const ing = newIngredient.trim();
    // Check if ingredient exists and is not already part of the ingredients array
    if (ing && !ingredients.includes(ing)) {
      // Add new ingredient to the ingredients array
      setIngredients((prevState) => {
        return [...prevState, newIngredient];
      });
      // Clear out ingredient text field
      setNewIngredient("");
      // use the useRef constant created earlier, to focus the ingredient input field
      ingredientInput.current.focus();
    }
  };
  return (
    <div className="create">
      <h2 className="page-title">Add A New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input
            type="text"
            onChange={(e) => setRecipeTitle(e.target.value)}
            value={recipeTitle}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAddIngredient}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Instructions:</span>
          <textarea
            onChange={(e) => setCookingMethod(e.target.value)}
            value={cookingMethod}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes)</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Create;
