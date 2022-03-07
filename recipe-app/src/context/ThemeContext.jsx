// Import createContext and useReducer from react
import { createContext, useReducer } from "react";

// Init and export a const containing our context for ThemeContext
export const ThemeContext = createContext();

// Our Reducer function that takes in a state argument as its first argument, which represents the initial state, and an action argument as its second argument, which represents the type of change to apply to the state
const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

// Export a custom React Component, which returns a JSX template, which is wrapped inside our ThemeContext.Provider property. This function will take in a prop and pull out the children property of the prop using object destructuring. The ThemeContext.Provider component, wrapping the children prop, will also have a value property, containing a color property.
export function ThemeProvider({ children }) {
  // Init useReducer Hook, passing it our themeReducer function as its first argument and its second argument is the inital state that we want to use. The useReducer hook returns two values back to us: The inital state that we specified and a dispatch function, which we use to make changes to our state.
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#42b883",
    mode: "dark",
  });
  // Function that takes in a color argument and then calls the dispatch function above, passing it an object (dispatch action) with a type propety, telling our reducer function what type of change to apply to our current state, and also a payload property, which represent the change to apply to said state
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  // Funtion that changes mode from dark to light or vice versa
  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
