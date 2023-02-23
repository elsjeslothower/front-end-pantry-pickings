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

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com"
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

const removeRecipeApi = async (recipe_id) => {
  console.log(recipe_id)
  try {
    const res = await axios 
      .delete(`${kBaseUrl}/recipes/${recipe_id}`,
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

const isEmpty = (recipeData) => {
  for (let prop in recipeData) {
    if (Object.prototype.hasOwnProperty.call(recipeData, prop)) {
      return false;
    }
  }
  return true;
};

// APP RENDERING
const SavedRecipes = () => {
  const navigate = useNavigate();
  const loggedIn = Userfront.accessToken();
  const [recipeData, setRecipeData] = useState([]);
  const userId = Userfront.user["userId"]

  const supportStringToHTML = () => {
    if (!window.DOMParser) {
      return false;
    }
    let parser = new DOMParser();
    try {
      parser.parseFromString('x', 'text/html');
    } catch(err) {
      return false;
    }
    return true;
  };
  
  const stringToHTML = (summary) => {
    if (supportStringToHTML) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(summary, 'text/html');
      return doc.body.innerText
    } else {
      let dom = document.createElement('div');
      dom.innerHTML = summary;
      return dom;
    }
  };

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

  const onRemoveRecipe = (recipe_id) => {
    removeRecipeApi(recipe_id)
    .then(
      setRecipeData((recipeData) =>
      recipeData.filter((recipeData) => {
        return recipeData.recipe_id !== recipe_id;
      }))
    )
    .catch((err) => console.log(err))
  };

  return (
    <div className="container">
      <h1 className="display-1">{Userfront.user["name"]}'s Saved Recipes</h1>
      {isEmpty(recipeData) ? 
        <h6 className="mt-4 text-center alert alert-info">
          Recipes will appear here after using the save feature in <a 
          href="/calculator" 
          className="alert-link">
            Find-A-Recipe
          </a>
        </h6> :
        <div className="my-3 row">
          <RecipeList
            recipeData={recipeData}
            onRemoveRecipe={onRemoveRecipe}
            renderSummary={stringToHTML}
          />
        </div>
      }
      
    </div>
  );
};

export default SavedRecipes;