import React from "react";
import PropTypes from "prop-types";

const PantryItem = (props) => {
  return (
    <div className="individual-item">
      <h1>{props.pantry_item_title}</h1>
      <ul>
        <li>{props.category}</li>
        <li>{props.exp_date}</li>
      </ul>
    </div>
  );
};

PantryItem.propTypes = {
  pantry_item_id: PropTypes.number.isRequired,
  pantry_item_title: PropTypes.string.isRequired,
  category: PropTypes.string,
  exp_date: PropTypes.string,
};

export default PantryItem;