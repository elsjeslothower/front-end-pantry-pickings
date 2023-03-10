import React from "react";
import PropTypes from 'prop-types';
import Recipe from "./Recipe";

const RecipeList = (props) => {
  return (
    props.recipeData.map((recipe) => (
      <Recipe
        key={recipe.api_id}
        recipe_id={recipe.recipe_id}
        api_id={recipe.api_id}
        recipe_title={recipe.recipe_title}
        summary={recipe.summary}
        source_url={recipe.source_url}
        recipe_img={recipe.recipe_img}
        used_ingredient_count={recipe.used_ingredient_count}
        missed_ingredient_count={recipe.missed_ingredient_count}
        onRemoveRecipe={props.onRemoveRecipe}
        handleSaveRecipe={props.handleSaveRecipe}
      />
    ))
  );
};

RecipeList.propTypes = {
  recipeData: PropTypes.arrayOf(PropTypes.shape({
    recipe_id: PropTypes.number,
    api_id: PropTypes.number.isRequired,
    recipe_title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    source_url: PropTypes.string,
    recipe_img: PropTypes.string,
    used_ingredient_count: PropTypes.number,
    missed_ingredient_count: PropTypes.number,
  })),
  onRemoveRecipe: PropTypes.func.isRequired,
  handleSaveRecipe: PropTypes.func.isRequired,
};

export default RecipeList;