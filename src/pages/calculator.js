import "./calculator.css"

// ROUTER
import { Link } from "react-router-dom";

// REACT HANDLING
import React from "react";
import { useState, useEffect } from "react";

// COMPONENTS
import Recipe from "../components/Recipe";
import RecipeList from "../components/RecipeList";
import RecipeCalcForm from "../components/forms/RecipeCalcForm";

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

const addNewRecipeApi = (currentUserID, rId, title, rSummary, url, img) => {
  const currentData = {
    api_id: rId,
    recipe_title: title,
    summary: rSummary,
    source_url: url,
    recipe_img: img,
    user_id: currentUserID,
  };

  return axios
    .post(`${kBaseUrl}/recipes`, currentData)
    .then ((response) => {
      return response.data;
    })
    .catch((err) => {
      // maybe add error handling for api_id uniqueness
      console.log(err);
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
const RecipeCalculator = () => {
  // set useState hooks here
  
  // add handling functions here
  const handleRecipeFinder = () => {
    console.log("hey!! put something here!");
  };

  return (
    <div>
      <h1>Welcome to find-a-recipe!</h1>
      <p>Include Recipe in here:</p>
      <Recipe />
      <p>RecipeList (recipes mapped out) here:</p>
      {/* <RecipeList /> */}
      <p>Form for API call:</p>
      <RecipeCalcForm />
      <button onSubmit={handleRecipeFinder}>Let's find a recipe!</button>
      <div className="spacer"></div>
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default RecipeCalculator;