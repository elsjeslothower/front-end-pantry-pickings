// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import Recipe from "../components/Recipe";
import RecipeList from "../components/RecipeList";
import mockRecipes from "../mockData/mockRecipes";

// AXIOS CALLS
import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/";
const localHost = "http://127.0.0.1:5000";

const getSavedRecipesApi = async (userId) => {
  try {
    const res = await axios
      .get(`${localHost}/user/${userId}/recipes`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// APP RENDERING
const SavedRecipes = () => {
  // set useState hooks here
  const [recipeData, setRecipeData] = useState(mockRecipes)
  const userId = Userfront.user["userId"]
  // add handling functions here
  const getSavedRecipes = (userId) => {
    getSavedRecipesApi(userId).then((recipes) => {
      setRecipeData(recipes);
    });
  };

  // useEffect(() => {
  //   // data fetching code
  //   getSavedRecipes(userId)
  // }, [recipeData])

  return (
    <div className="container">
      <h1 className="display-1">{Userfront.user["name"]}'s Saved Recipes</h1>
      <div className="row">
        <RecipeList
          recipeData={recipeData}
        />
      </div>
    </div>
  );
};

export default SavedRecipes;