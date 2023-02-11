// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import RecipeCalcForm from "../components/forms/RecipeCalcForm";

// USERFRONT
import Userfront from "@userfront/react";

// AXIOS CALLS
import axios from "axios";
const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"
const localHost = "http://127.0.0.1:5000";

const rapidApiUrl = "https://webknox-recipes.p.rapidapi.com/recipes"
const rapidApiHost = 'webknox-recipes.p.rapidapi.com'

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
        'X-RapidAPI-Key': os.environ.get(X_RapidAPI_Key)
        'X-RapidAPI-Host': rapidApiHost
      }
    },)
    console.log(`successful call!! data here:"${res.data}"`)
    return (res.data);
  } catch (err) {
    console.log(err);
  }
}

// APP RENDERING
const RecipeCalculator = () => {
  // set useState hooks here
  
  // add handling functions here
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