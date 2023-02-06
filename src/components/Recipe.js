import React from "react";
import PropTypes from "prop-types";

const Recipe = (props) => {
  return (
    <div className="individual-recipe">
      <h2>{props.recipe_title}</h2>
      <a target="_blank" href={props.source_url}>
        <img
          className="img-thumbnail" 
          src={props.recipe_img} 
          alt={`dish: ${props.recipe_title}`}
        />
      </a>
      <ul>
        <li>recipe #{props.api_id}</li>
        <li>summary: {props.summary}</li>
      </ul>
    </div>
  );
};

Recipe.propTypes = {
  recipe_id: PropTypes.number.isRequired,
  api_id: PropTypes.number.isRequired,
  recipe_title: PropTypes.string,
  summary: PropTypes.string,
  source_url: PropTypes.string,
  recipe_img: PropTypes.string,
};

// Need to add used/missing ingredient count?

export default Recipe;