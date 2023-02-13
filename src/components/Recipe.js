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
        <h5 className="card-title text-center">{props.recipe_title}</h5>
        <p className="card-text" style={{background:"bisque"}}>
          {props.summary 
          ? props.summary 
          : `This recipe utilizes ${props.used_ingredient_count} 
            items already in your pantry. You would need to buy 
            ${props.missed_ingredient_count} extra item(s) from the store.`}
        </p>
      </div>
      <div className="mb-3 align-bottom">
        <a href={props.source_url ? props.source_url : "/404"} 
          className="me-5 btn btn-info" 
          style={{color:"#531209"}}
        >
          Full Recipe
        </a>
        <button 
          className={props.source_url ? "ms-4 btn btn-danger" : "ms-4 btn btn-success"}
          style={{color: "bisque"}}
          onClick={props.source_url
            ? () => props.onRemoveRecipe(props.api_id)
            : () => props.handleSaveRecipe(props.api_id, props.used_ingredient_count, props.missed_ingredient_count)
          }
        >
          {props.source_url ? "Unsave" : "Save"}
        </button>
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

export default Recipe;