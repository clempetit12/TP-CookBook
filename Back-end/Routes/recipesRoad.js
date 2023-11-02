import express from 'express'
import {recipesDao} from "../app.js"
import { Recipes } from '../Models/Recipes.js'
import { authentification } from '../middleware/authentification.js'


const recipesRoad = express.Router()



// Récupérer la liste de toutes les recettes
recipesRoad.get('/',(req,res) => {
    res.send(recipesDao.getAllRecipes())
})

//Récupérer une recette spécifique
recipesRoad.get('/:id',(req,res) => {
    const recipeid = +req.params.id
    let findRecipe = recipesDao.getOneRecipe(recipeid)
    console.log(findRecipe);
    if (!findRecipe) {
        res.status(404).json({code: 404, message: "aucune recette trouvée"});

    }
    res.json(findRecipe)
}

)

//Créer une nouvelle recette 
recipesRoad.post("/",authentification, (req,res) => {
    const {name, description, timeCooking, prepTime, servings, ingredients} = req.body
    let newRecipe = new Recipes(null,name, description, timeCooking, prepTime, servings, ingredients)
    console.log(newRecipe);
    res.json(recipesDao.saveRecipe(newRecipe))
    console.log(recipesDao);
})


//Mettre à jour une recette existante
recipesRoad.put("/:id",authentification, (req,res) => {
    const {id, name, description, timeCooking, prepTime, servings, ingredients} = req.body
    if(+req.params.id != id) res.sendStatus(409);
    let recipe = new Recipes(id,name, description, timeCooking, prepTime, servings, ingredients);
    recipesDao.updateRecipe(recipe) ? res.sendStatus(200) : res.status(400).json({code: 400, message: "problème lors de la mise àde la recette"})
});

//Supprimer une recette 
recipesRoad.delete("/:id",authentification, (req,res) => {
   const recipeId = +req.params.id
   recipesDao.deleteRecipe(recipeId)
   res.sendStatus(200);


})

export default recipesRoad;