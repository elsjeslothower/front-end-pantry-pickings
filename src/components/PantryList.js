import React from "react";
import PropTypes from 'prop-types';
import PantryItem from "./PantryItem";

const PantryList = (props) => {
  return (
    <PantryItem
    />
  )
}

PantryList.propTypes = {
  pantryItemData: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.bool.isRequired,
  }))
};

export default PantryList;