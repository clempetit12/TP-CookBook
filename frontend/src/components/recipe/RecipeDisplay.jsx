import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { deleteRecipes, fetchRecipes, setSelectedRecipe } from "./recipeSlice"

const RecipeDisplay = () => {

    const recipes = useSelector(state => state.recipes.recipes)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const selectedRecipe = useSelector(state => state.recipes.selectedRecipe)
    const user = useSelector(state => state.auth.user)


    const detailsHandler = (recipe) => {
        console.log("details");
        dispatch(setSelectedRecipe(recipe));
        console.log(selectedRecipe);
        navigate("/details");
      }

    const editHandler = (recipe) => {
        console.log("edit");
        dispatch(setSelectedRecipe(recipe))
        navigate("/editRecipe")
    }

    useEffect(() => {
        dispatch(fetchRecipes())
        
      }, [])
    

    return (
        <>
            <h1 className="display-4 mt-2">Recipes</h1>
            <hr />
            {user ? (<div><NavLink to={"/addRecipe"} type="button" className="btn btn-success">Add</NavLink> </div>) : null}
            <div >
                {recipes.length === 0 ? (
                    <p>Il n'y a pas de recettes</p>
                ) : recipes.map((recipe) =>
                    <div className="card m-3  " >

                        <div className="card-header display-6 d-flex justify-content-between">
                            <span key={recipe.id} className="card-title mr-4 "> {recipe.name}</span>
                            <span className="card-title ml-3 "> {recipe.prepTime}</span>
                            <span className="card-title ml-3 "> {recipe.timeCooking}</span>
                            <span className="card-title ml-3 "> {recipe.servings}</span>

                        </div>
                        <div className="card-body" >
                            <p class="card-text">{recipe.description}</p>
                        </div>
                        <div className="card-footer">
                            {user ? (<div><button onClick={() => editHandler(recipe)} className="btn btn-warning">Edit</button><button onClick={() => { dispatch(deleteRecipes(recipe)) }} className="btn btn-danger">Delete</button></div>) : " "}
                            <div className="d-flex" >
                                <button onClick={() => detailsHandler(recipe)} className="btn btn-primary ms-auto">Details</button>
                            </div>

                        </div>
                    </div>)}
            </div>






        </>

    )
}

export default RecipeDisplay