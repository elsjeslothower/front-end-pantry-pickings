// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
const findByIngredientsRapidApi = async (req) => {
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
    console.log(`success findByIngredients!! data here:"${res.data}"`)
    return (res.data);
  } catch (err) {
    console.log(err);
  }
};

const getRecipeInfoRapidApi = async (api_id) => {
  try {
    const res = await axios
    .get(`${rapidApiUrl}/${api_id}/information`, 
    {
      params: {
        id: api_id,
      },
      headers: {
        'X-RapidAPI-Key': X_RAPIDAPI_KEY,
        'X-RapidAPI-Host': rapidApiHost
      }
    },)
    console.log(`successful RecipeInfo!! data here:"${res.data}"`)
    return (res.data);
  } catch (err) {
    console.log(err);
  }
};

const saveRecipeApi = async (req) => {
  console.log(req);
  try {
    const res = await axios
      .post(`${kBaseUrl}/recipes`, req,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
          "Access-Control-Allow-Origin": `${kBaseUrl}/recipes`,
          "Access-Control-Allow-Methods": "POST",
        }
      }, 
    );
  console.log(`success saveRecipeApi! data here: ${res.data}`);
  return res.data;
  } catch (err) {
    console.log(err);
  }
};

const removeRecipeApi = async (recipe_id) => {
  console.log(recipe_id)
  try {
    const res = await axios 
      .delete(`${kBaseUrl}/recipes/${recipe_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
          "Access-Control-Allow-Origin": `${kBaseUrl}/recipes/${recipe_id}`,
          "Access-Control-Allow-Methods": "DELETE",
        }
      },
    );
    console.log(`success removeRecipeApi!! data here:"${res.data}"`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

const getPantryApi = async () => {
  try {
    const res = await axios
      .get(`${kBaseUrl}/user/pantry`, 
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
  const navigate = useNavigate();
  const loggedIn = Userfront.accessToken();
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
    if (!loggedIn) {
      return navigate("/");
    } else {
      getIngredients();
    }
  }, []);

  const handleSaveRecipe = (api_id, used_ingredient_count, missed_ingredient_count) => {
    getRecipeInfoRapidApi(api_id)
    .then((res) => {
      console.log(`handleSaveRecipe: success recipeInfoApi! ${res["id"]} here`);
      const newRecipeData = {
        "api_id": api_id,
        "recipe_title": res["title"],
        "summary": res["summary"],
        "source_url": res["sourceUrl"],
        "recipe_img": res["image"],
        "used_ingredient_count": used_ingredient_count,
        "missed_ingredient_count": missed_ingredient_count
      };
      saveRecipeApi(newRecipeData)
        .then((newRecipe) => {
          console.log(`handleSaveRecipe: success saveRecipeApi! ${newRecipe} here`);
          setResults([...results, newRecipe])
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
  };

  const onRemoveRecipe = (recipe_id) => {
    removeRecipeApi(recipe_id);
    setResults((results) =>
      results.filter((results) => {
        return results.recipe_id !== recipe_id;
      }))
  };

  const handleRecipeFinder = (ingredients, quantity) => {
    const requestData = {
      "ingredients": ingredients,
      "quantity": quantity,
    };
    findByIngredientsRapidApi(requestData)
      .then((res) => {
        console.log(`${res[0]["id"]} from RapidApi`);
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
        Results:
      </h1>
      <div className="my-3 row">
        <RecipeList
          recipeData={results}
          onRemoveRecipe={onRemoveRecipe}
          handleSaveRecipe={handleSaveRecipe}
        />
      </div>
    </div>
  );
};

export default RecipeCalculator;