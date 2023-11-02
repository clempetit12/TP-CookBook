import express from 'express'
import {ingredientsDao} from "../app.js"
import { Ingredients } from '../Models/Ingredients.js'
import IngredientsDao from '../Dao/IngredientsDao.js'



const ingredientsRoad = express.Router()

//Récupérer la liste de tous les ingredients
ingredientsRoad.get ("/",(req,res) => {
   res.send(ingredientsDao.getAllIngredients()) 
})

// Créer un nouvel ingrédient
ingredientsRoad.post("/", (req,res) => {
    const {name,quantity} = req.body
    let newIngredient = new Ingredients(null, name, quantity)
    console.log(newIngredient);
    res.json(ingredientsDao.saveIngredient(newIngredient))

    

    })

//Récupère un ingrédient spécifique
ingredientsRoad.get("/:id", (req,res) => {
    const ingredientId = +req.params.id
    let findIngredient = ingredientsDao.getOneIngredient(ingredientId)
    console.log(findIngredient);
    if (!findIngredient) {
        res.status(404).json({code: 404, message: "aucun ingrédient trouvé"});

    }
    res.json(findIngredient)
})

// Met à jour un ingrédient existant 
ingredientsRoad.put("/:id", (req,res) => {
    const {name,quantity} = req.body
    if(+req.params.id != id) res.sendStatus(409);
    let ingredient = new Ingredients(null,name, quantity);
    ingredientsDao.updateIngredient(ingredient  ) ? res.sendStatus(200) : res.status(400).json({code: 400, message: "problème lors de la mise à jour de l'ingrédient"})
})

//Supprime un ingrédient 
ingredientsRoad.delete("/:id", (req,res) => {
   ingredientsDao.deleteIngredient(+req.params.id)
   res.sendStatus(200)
})