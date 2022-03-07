import { BrowserRouter, Switch, Route } from "react-router-dom";
// Page Components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search.jsx";
// Navbar Component
import Navbar from "./components/Navbar";
// ThemeSelector Component
import ThemeSelector from "./components/ThemeSelector";
// useTheme hook
import { useTheme } from "./hooks/useTheme";
// Styles
import "./App.css";

function App() {
  // Pull out mode property from our useTheme hook using object destructuring
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/create">
            <Create />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
