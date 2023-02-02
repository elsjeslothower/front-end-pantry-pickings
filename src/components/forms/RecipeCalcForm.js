import React from "react";
import PropTypes from "prop-types";
import "./Forms.css";

const RecipeCalcForm = (props) => {
  return (
    <div className="individual-card">
      <section>
        <h2>Form to make call to RapidAPI:</h2>
        <select name="dietary_preferences" multiple>
          <option>Gluten-Free</option>
          <option>Dairy-Free</option>
          <option>Vegan</option>
        </select>
        <input type="text" placeholder="intolerances"/>
      </section>
    </div>
  );
};

RecipeCalcForm.propTypes = {
  user_id: PropTypes.number.isRequired,
  // need to plan this better; shelved for now
};

export default RecipeCalcForm;