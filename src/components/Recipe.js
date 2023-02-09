import React from "react";
import PropTypes from "prop-types";



const Recipe = (props) => {
  return (
    <div className="card m-2" style={{background:"bisque", width: "18rem"}}>
      <img 
        src={props.recipe_img} 
        className="card-img-top" 
        alt={`dish: ${props.recipe_title}`}
      />
      <div className="card-body" style={{color:"darksalmon"}}>
        <h5 className="card-title">Title:{props.recipe_title}</h5>
        <p className="card-text" style={{background:"bisque"}}>
          Summary:{props.summary}
        </p>
        <a href={props.source_url} className="btn btn-info">Full Recipe</a>
        <button className="btn btn-success">Toggle Save</button>
      </div>
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