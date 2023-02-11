// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import RecipeCalcForm from "../components/forms/RecipeCalcForm";
import getPantryApi from "../pages/FullPantry";

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

const saveRecipe = async (req) => {
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

const removeRecipe = async (api_id) => {
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

// APP RENDERING
const RecipeCalculator = () => {
  const [results, setResults] = useState([]);
  
  const handleRecipeFinder = () => {
    console.log("hey!! put something here!");
  };

  return (
    <div className="container">
      <h1 className="display-1">Find-a-Recipe</h1>
      <RecipeCalcForm
        handleRecipeFinder={handleRecipeFinder}
      />
      <div className="spacer p-3"></div>
      <h1 className="text-start display-5">Results:</h1>
      <p>Hide this ^^^ until API responds</p>
    </div>
  );
};

export default RecipeCalculator;