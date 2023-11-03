
import express from 'express'
import cors from 'cors';
import IngredientsDao from './Dao/IngredientsDao.js';
import Recipesdao from './Dao/RecipesDao.js';
import recipesRoad from "./Routes/recipesRoad.js"
import ingredientsRoad from "./Routes/ingredientsRoad.js"
import { authentification } from './middleware/authentification.js';


export const ingredientsDao = new IngredientsDao()
export const recipesDao = new Recipesdao()
const port = 3001


const app = express();

app.use(cors());


app.use(express.json());


app.use('/recipesRoad', recipesRoad);
app.use('/ingredientsRoad', ingredientsRoad);


app.post('/authenticate', authentification, (req, res) => {
   console.log("authentification");
   res.status(200).send('Authentification réussie');
  });
  
     
  
app.listen(port, () => {
    ingredientsDao.readFileIngredients()
    recipesDao.readFileRecipes()
    console.log(`Server is running on http://127.0.0.1:${port}`);

});