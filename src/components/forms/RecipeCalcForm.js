import React from "react";
import PropTypes from "prop-types";

const RecipeCalcForm = () => {
  return (
    <form htmlFor="rapidApiCall" className="container">
      <div htmlFor="pantry" className="mb-3">
        <label htmlFor="inputPantry" className="form-label">Pantry items</label>
        <input type="text" className="form-control" id="inputPantry"/>
      </div>

      <div htmlFor="quantity" className="mb-3">
        <label htmlFor="inputQuantity" className="form-label">How many recipes?</label>
        <input type="text" className="form-control" id="inputQuantity"/>
      </div>

      <div htmlFor="recipeOptions" className="mb-3">
        <label htmlFor="inputOptions" className="form-label">Type of meal</label>
        <input type="text" className="form-control" id="inputOptions"/>
      </div>
      <button type="submit" className="btn btn-warning">Find-a-Recipe</button>
    </form>
  );
};

RecipeCalcForm.propTypes = {
  user_id: PropTypes.number.isRequired,
  // need to plan this better; shelved for now
};

export default RecipeCalcForm;