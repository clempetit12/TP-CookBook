import AddRecipeForm from "./components/recipe/AddRecipeForm";
import NavBar from "./components/shared/NavBar";
import { Link, Outlet } from "react-router-dom";
import DeleteRecipe from "./components/recipe/DeleteRecipe.jsx";
import EditRecipe from "./components/recipe/EditRecipe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
