import React from "react";
import PropTypes from 'prop-types';
import PantryItem from "./PantryItem";

const PantryList = (props) => {
  return (
    props.pantryItemData.map((pantryItem) => (
      <PantryItem
        key={pantryItem.pantry_item_id}
        pantry_item_id={pantryItem.pantry_item_id}
        category={pantryItem.category}
        exp_date={pantryItem.exp_date}
      />
    ))
  );
};

PantryList.propTypes = {
  pantryItemData: PropTypes.arrayOf(PropTypes.shape({
    pantry_item_id: PropTypes.number.isRequired,
    category: PropTypes.string,
    exp_date: PropTypes.string,
  }))
};

export default PantryList;