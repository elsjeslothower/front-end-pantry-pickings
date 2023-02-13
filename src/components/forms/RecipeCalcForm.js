import React from "react";
import { useState } from "react";

const RecipeCalcForm = ({ ingredients, handleRecipeSearchSubmit }) => {
  const [searchType, setSearchType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mealOptions, setMealOptions] = useState([]);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    handleRecipeSearchSubmit(ingredients, quantity);
  };

  const handleSearchType = (event) => {
    setSearchType(event.target.value);
  };

  const handleQuantity = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
    console.log(`quantity: ${event.target.value}`)
  };

  const handleMealOptions = (event) => {
    const newOption = event.target.value;
    if (mealOptions.includes(newOption)) {
      mealOptions.pop(newOption);
      console.log(`${newOption} popped`);
    } else {
      setMealOptions([...mealOptions, newOption]);
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmitSearch}
      htmlFor="rapidApiCall" 
      className="container">
      <div htmlFor="pantry" className="mb-3">
        <label htmlFor="inputPantry" className="form-label">
          Search Type:
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            value={searchType}
            onChange={handleSearchType}
            id="exampleRadios1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Flexible
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            value={searchType}
            onChange={handleSearchType}
            id="exampleRadios2"
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Strict
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            value={searchType}
            onChange={handleSearchType}
            id="exampleRadios3"
          />
          <label className="form-check-label" htmlFor="exampleRadios3">
            Exclusive
          </label>
        </div>
      </div>

      <div htmlFor="quantity">
        <label htmlFor="customRange2" className="form-label">
          How many recipes are you looking for?
        </label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="5"
          id="customRange2"
          value={quantity}
          onChange={handleQuantity}
        />
        <span className="text-start">1</span>
        <span className="float-end">5</span>
      </div>

      <div htmlFor="recipeOptions" className="my-3">
        <label htmlFor="inputOptions" className="form-label">
          Meal Options
        </label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="vegetarian"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Vegetarian
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="vegan"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Vegan
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="pescatarian"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Pescatarian
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              value="gluten-free"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Gluten-free
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox5"
              value="dairy-free"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Dairy-free
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="paleo"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Paleo
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox7"
              value="keto"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Keto
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox8"
              value="mediterrean"
              onChange={handleMealOptions}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Mediterranean
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-warning">
        Find-a-Recipe
      </button>
    </form>
  );
};

export default RecipeCalcForm;
