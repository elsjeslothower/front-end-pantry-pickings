import React from "react";
import PropTypes from "prop-types";

const PantryItem = (props) => {
  return (
    <div className="card m-2" style={{background:"bisque", width: "18rem"}}>
      <div className="card-body" style={{color:"darksalmon"}}>
        <h4 className="card-title">Item: {props.pantry_item_title}</h4>
        <p className="card-text">
          <ul className="list-group list-group-flush" style={{color:"bisque", background:"bisque"}}>
            <li className="list-group-item" style={{color:"bisque", background:"darksalmon"}}>Category: {props.category}</li>
            <li className="list-group-item" style={{color:"bisque", background:"darksalmon"}}>Expiration Date: {props.exp_date}</li>
          </ul>
        </p>
        <button type="button" className="card-link btn btn-info" style={{color:"bisque"}}>Delete Item</button>
      </div>
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