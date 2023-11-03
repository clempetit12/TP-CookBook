import { useSelector } from "react-redux"

const DetailsPage = () => {

    const selectRecipe = useSelector(state => state.recipes.selectedRecipe)

    return (
<>


<h1 className="display-4">Détails de la recette </h1>
<hr />
<div className="d-flex justify-content-center ">
<div className="card " style={{ width: '50rem' }}>
    <h5 className="card-title display-5"><b></b>{selectRecipe.name}</h5>
    <hr />
    <div className="card-body">
    <p className="card-text"><b>Temps de cuisson : </b>{selectRecipe.timeCooking}</p>
        <p className="card-text"><b>Temps de préparation : </b>{selectRecipe.prepTime}</p>
        <p className="card-text"><b >Nombre de couverts : </b>{selectRecipe.servings}</p>
        <p className="card-text"><b >Description : </b>{selectRecipe.description}</p>
       
        
    </div>
</div>
</div>

</>
)
}
export default DetailsPage