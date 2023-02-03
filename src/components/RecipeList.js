import React from "react";
import PropTypes from 'prop-types';
import Recipe from "./Recipe";

const RecipeList = (props) => {
  return (
    props.recipeData.map((recipe) => (
      <Recipe
        key={recipe.recipe_id}
        recipe_id={recipe.recipe_id}
        api_id={recipe.api_id}
        recipe_title={recipe.recipe_title}
        summary={recipe.summary}
        source_url={recipe.source_url}
        recipe_img={recipe.recipe_img}
      />
    ))
  );
};

RecipeList.propTypes = {
  recipeData: PropTypes.arrayOf(PropTypes.shape({
    recipe_id: PropTypes.number.isRequired,
    recipe_title: PropTypes.string.isRequired,
    source_url: PropTypes.string,
    recipe_img: PropTypes.string,
  }))
};

export default RecipeList;