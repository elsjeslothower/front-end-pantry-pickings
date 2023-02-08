// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import Recipe from "../components/Recipe";
import RecipeList from "../components/RecipeList";
import mockRecipes from "../mockData/mockRecipes.js"

// AXIOS CALLS
import axios from "axios";

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

// APP RENDERING
const SavedRecipes = () => {
  // set useState hooks here
  const [recipeData, setRecipeData] = useState([mockRecipes])
  // add handling functions here

  return (
    <div className="container">
      <h1 className="display-1">Anya's Saved Recipes</h1>
      <p>Include Recipe in here:</p>
      <Recipe />
      <p>RecipeList (recipes mapped out) here:</p>
      <RecipeList
        recipeData={recipeData}
      />
    </div>
  );
};

export default SavedRecipes;