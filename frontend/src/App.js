import AddRecipeForm from "./components/recipe/AddRecipeForm";
import NavBar from "./components/shared/NavBar";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">




<NavBar/>
<Outlet/>

{/* to remove */}
<AddRecipeForm/>


    </div>
  );
}

export default App;