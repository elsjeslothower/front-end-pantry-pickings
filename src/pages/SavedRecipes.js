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

// APP RENDERING
const SavedRecipes = () => {
  // set useState hooks here
  
  // add handling functions here

  return (
    <div>
      <h1>Welcome to your saved recipes!</h1>
      <p>Include Recipe in here:</p>
      <Recipe />
      <p>RecipeList (recipes mapped out) here:</p>
      {/* <RecipeList /> */}
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default SavedRecipes;