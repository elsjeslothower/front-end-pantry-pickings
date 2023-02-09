import React from "react";
import PropTypes from "prop-types";

const RecipeCalcForm = () => {
  return (
    <form htmlFor="rapidApiCall" className="container">
      <div htmlFor="pantry" className="mb-3">
        <label htmlFor="inputPantry" className="form-label">Search Type:</label>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
            <label class="form-check-label" for="exampleRadios1">
              Flexible
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
            <label class="form-check-label" for="exampleRadios2">
              Strict
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
            <label class="form-check-label" for="exampleRadios3">
              Exclusive
            </label>
          </div>
      </div>

      <div htmlFor="quantity">
        <label for="customRange2" class="form-label">How many recipes?</label>
        <input type="range" class="form-range" min="1" max="5" id="customRange2"/>
        <span className="text-start">1</span>
        <span className="float-end">5</span>
      </div>
      
      
      <div htmlFor="recipeOptions" className="my-3">
        <label htmlFor="inputOptions" className="form-label">Meal Options</label>
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label class="form-check-label" for="inlineCheckbox1">Vegetarian</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Vegan</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label class="form-check-label" for="inlineCheckbox1">Gluten-free</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Dairy-free</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label class="form-check-label" for="inlineCheckbox1">Healthy</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Cheap</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label class="form-check-label" for="inlineCheckbox1">Popular</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Sustainable</label>
          </div>
        </div>
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