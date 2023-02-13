// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import RecipeCalcForm from "../components/forms/RecipeCalcForm";
import RecipeList from "../components/RecipeList";
import mockRecipes from "../mockData/mockRecipes";

// USERFRONT
import Userfront from "@userfront/react";

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/";
const localHost = "http://127.0.0.1:5000";

const rapidApiUrl = "https://webknox-recipes.p.rapidapi.com/recipes";
const rapidApiHost = 'webknox-recipes.p.rapidapi.com';
const X_RAPIDAPI_KEY = '9053c90f68mshba9d59e69d50d31p17b1efjsn1c96b08397ba';

Userfront.init("6bg65zyn");

// API CALLS
const getRecipesRapidApi = async (req) => {
  try {
    const res = await axios
    .get(`${rapidApiUrl}/findByIngredients`, 
    {
      params: {
        ingredients: req.ingredients,
        number: req.quantity
      },
      headers: {
        'X-RapidAPI-Key': X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': rapidApiHost
      }
    },)
    console.log(`successful call!! data here:"${res.data}"`)
    return (res.data);
  } catch (err) {
    console.log(err);
  }
};

const saveRecipeApi = async (req) => {
  console.log(req);
  try {
    const res = await axios
      .post(`${localHost}/recipes`, req,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      }, 
    );
  console.log(`success! data here: ${res.data}`);
  return res.data;
  } catch (err) {
    console.log(err);
  }
};

const removeRecipeApi = async (api_id) => {
  console.log(api_id)
  try {
    const res = await axios 
      .delete(`${localHost}/recipes/${api_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      },
    );
    console.log(`success!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

const getPantryApi = async () => {
  try {
    const res = await axios
      .get(`${localHost}/user/pantry`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      })
      console.log(`success getPantry!! data here:"${res.data}"`)
      console.log(res.data[0])
      return (res.data)
  } catch (err) {
    console.log(err);
  }
};

// APP RENDERING
const RecipeCalculator = () => {
  const [results, setResults] = useState([]);
  const [ingredients, setIngredients] = useState("");
  
  console.log(`YOOOOOOOO ${results}`);

  const formatRapidApiResponse = (res) => {
    let recipeData = []
    for (let i = 0; i < res.length; i++) {
      recipeData.push({
        "api_id": res[i]["id"],
        "recipe_title": res[i]["title"],
        "recipe_img": res[i]["image"],
        "used_ingredient_count": res[i]["usedIngredientCount"],
        "missed_ingredient_count": res[i]["missedIngredientCount"]
      })
    }
    setResults(recipeData);
  }

  const formatIngredients = (pantryItems) => {
    const ingredientList = [];
    for (let i = 0; i < pantryItems.length; i++) {
      const item = pantryItems[i]["pantry_item_title"].toLowerCase()
      ingredientList.push(item)
    }
    const ingredients = ingredientList.toString();
    console.log(`Ingredients here: ${ingredientList}`)
    return ingredients;
  };

  const getIngredients = () => {
    getPantryApi().then((pantryItems) => {
      const ingredients = formatIngredients(pantryItems);
      setIngredients(ingredients);
    })
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const handleSaveRecipe = (recipeData) => {
    const newRecipeData = {
      "saveRecipe handling here": 1,
    };
  };

  const onRemoveRecipe = (api_id) => {
    console.log("remove recipe here");
  }

  const handleRecipeFinder = (ingredients, quantity) => {
    const requestData = {
      "ingredients": ingredients,
      "quantity": Number(quantity),
    };
    getRecipesRapidApi(requestData)
      .then((res) => {
        console.log(`${res} from RapidApi`);
        formatRapidApiResponse(res);
      })
      .catch((err) => console.log(err))
  };

  return (
    <div className="container">
      <h1 className="display-1">Find-a-Recipe</h1>
      <RecipeCalcForm
        ingredients={ingredients}
        handleRecipeSearchSubmit={handleRecipeFinder}
      />
      <div className="spacer p-3"></div>
      <div id="liveAlertPlaceholder"></div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Heads up!</strong> Links to recipes will only be active <strong>after</strong> you save them.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      <div id="liveAlertPlaceholder"></div>
      <h1 className="text-start display-5">
        Results Listed Here:
      </h1>
      <div>
        <RecipeList
          recipeData={mockRecipes}
          onRemoveRecipe={onRemoveRecipe}
          handleSaveRecipe={handleSaveRecipe}
        />
      </div>
    </div>
  );
};

export default RecipeCalculator;