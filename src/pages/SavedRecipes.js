// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import Recipe from "../components/Recipe";
import RecipeList from "../components/RecipeList";

// AXIOS CALLS
import axios from "axios";

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

const getRecipesApi = (user_id) => {
  return axios
    .get(`${kBaseUrl}/user/${user_id}/recipes`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err)
    });
};

const deleteRecipeApi = (recipe_id) => {
  return axios
    .delete(`${kBaseUrl}/recipes/${recipe_id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// APP RENDERING
const SavedRecipes = () => {
  // set useState hooks here
  
  // add handling functions here

  return (
    <div>
      <h1>Welcome to your saved recipes!</h1>
      <p>Include Recipe in here:</p>
      {/* <Recipe /> */}
      <p>RecipeList (recipes mapped out) here:</p>
      {/* <RecipeList /> */}
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default SavedRecipes;