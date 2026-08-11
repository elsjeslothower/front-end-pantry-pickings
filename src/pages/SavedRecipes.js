// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import RecipeList from "../components/RecipeList";
import mockRecipes from "../mockData/mockRecipes";

// AXIOS CALLS
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const getSavedRecipesApi = async (token) => {
  try {
    const res = await axios
      .get(`${kBaseUrl}/user/recipes`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(`success getSavedRecipes!! data here:"${res.data}"`)
      console.log(res.data[0])
      return (res.data)
  } catch (err) {
    console.log(err);
  }
};

const removeRecipeApi = async (recipe_id, token) => {
  console.log(recipe_id)
  try {
    const res = await axios
      .delete(`${kBaseUrl}/recipes/${recipe_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [recipeData, setRecipeData] = useState([]);

  const getSavedRecipes = () => {
    getToken().then((token) => {
      getSavedRecipesApi(token).then((recipes) => {
        setRecipeData(recipes);
      });
    });
  };

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      navigate("/");
      return;
    }
    getSavedRecipes();
  }, [isLoaded, isSignedIn]);

  const onRemoveRecipe = (recipe_id) => {
    getToken().then((token) => {
      removeRecipeApi(recipe_id, token)
        .then(
          setRecipeData((recipeData) =>
          recipeData.filter((recipeData) => {
            return recipeData.recipe_id !== recipe_id;
          }))
        )
        .catch((err) => console.log(err))
    });
  };

  return (
    <div className="container">
      <h1 className="display-1">{user?.fullName}'s Saved Recipes</h1>
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