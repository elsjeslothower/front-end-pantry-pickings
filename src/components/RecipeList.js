import React from "react";
import PropTypes from 'prop-types';
import Recipe from "./Recipe";

const RecipeList = (props) => {
  return (
    <Recipe
    />
  );
};

RecipeList.propTypes = {
  recipeData: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.bool.isRequired,
  }))
};

export default RecipeList;