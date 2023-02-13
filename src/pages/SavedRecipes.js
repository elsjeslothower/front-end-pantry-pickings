// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecipeList from "../components/RecipeList";
import mockRecipes from "../mockData/mockRecipes";

// AXIOS CALLS
import axios from "axios";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"
const localHost = "http://127.0.0.1:5000";

const getSavedRecipesApi = async () => {
  try {
    const res = await axios
      .get(`${kBaseUrl}/user/recipes`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `u ${Userfront.tokens.accessToken}`,
        }
      })
      console.log(`success getSavedRecipes!! data here:"${res.data}"`)
      console.log(res.data[0])
      return (res.data)
  } catch (err) {
    console.log(err);
  }
};

const removeRecipeApi = async (api_id) => {
  console.log(api_id)
  try {
    const res = await axios 
      .delete(`${kBaseUrl}/recipes/${api_id}`,
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
  const navigate = useNavigate();
  const loggedIn = Userfront.accessToken();
  const [recipeData, setRecipeData] = useState([]);
  const userId = Userfront.user["userId"]
  
  const getSavedRecipes = () => {
    getSavedRecipesApi().then((recipes) => {
      setRecipeData(recipes);
    });
  };

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/");
    } else {
      getSavedRecipes();
    }
  }, []);

  const onRemoveRecipe = (api_id) => {
    removeRecipeApi(api_id);
    setRecipeData((recipeData) =>
      recipeData.filter((recipeData) => {
        return recipeData.api_id !== api_id;
      }))
  };

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