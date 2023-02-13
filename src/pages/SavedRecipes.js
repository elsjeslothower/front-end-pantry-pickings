// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import RecipeList from "../components/RecipeList";
import mockRecipes from "../mockData/mockRecipes";

// AXIOS CALLS
import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"
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

  const onRemoveRecipe = (api_id) => {
    console.log("remove recipe here");
    // maybe add an option for if they change their mind?
  };

  // useEffect(() => {
  //   // data fetching code
  //   getSavedRecipes(userId)
  // }, [recipeData])

  return (
    <div className="container">
      <h1 className="display-1">{Userfront.user["name"]}'s Saved Recipes</h1>
      <div className="my-3 row">
        <RecipeList
          recipeData={recipeData}
          onRemoveRecipe={onRemoveRecipe}
        />
      </div>
    </div>
  );
};

export default SavedRecipes;