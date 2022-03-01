import { BrowserRouter, Switch, Route } from "react-router-dom";
// Page Components
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search.jsx";
// Navbar Component
import Navbar from "./components/Navbar";
// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
