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
      <p>Idea: Make forms collapsable?</p>
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