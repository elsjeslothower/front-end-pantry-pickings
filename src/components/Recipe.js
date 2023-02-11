import React from "react";
import PropTypes from "prop-types";

const Recipe = (props) => {
  return (
    <div className="card m-2" style={{background:"bisque", width: "18rem"}}>
      <img 
        src={props.recipe_img} 
        className="mt-3 card-img-top" 
        alt={`dish: ${props.recipe_title}`}
      />
      <div className="card-body" style={{color:"darksalmon"}}>
        <h5 className="card-title">Title:{props.recipe_title}</h5>
        <p className="card-text" style={{background:"bisque"}}>
          {props.summary 
          ? props.summary 
          : `This recipe utilizes ${props.used_ingredient_count} 
            items already in your pantry`}
        </p>
      </div>
      <div className="mb-3 align-bottom text-center">
        <a href={props.source_url} className="me-4 btn btn-info">Full Recipe</a>
        <button className="ms-4 btn btn-danger">Remove</button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe_id: PropTypes.number,
  api_id: PropTypes.number.isRequired,
  recipe_title: PropTypes.string,
  summary: PropTypes.string,
  source_url: PropTypes.string,
  recipe_img: PropTypes.string,
  used_ingredient_count: PropTypes.number,
  missed_ingredient_count: PropTypes.number,
};

// Need to add used/missing ingredient count?

export default Recipe;