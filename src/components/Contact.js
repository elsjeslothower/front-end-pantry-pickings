import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <div htmlFor="individualCards">
      <div className="card m-2">
        <div className="card-body">
          <h1 className="card-title">{props.full_name}</h1>
          <p className="card-text">
            <ul>
              <li>{props.intolerances}</li>
              <li>{props.notes}</li>
            </ul>
          </p>
          <button className="card-link">Edit Contact</button>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact_id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  intolerances: PropTypes.string,
  dietary_preferences: PropTypes.string,
  notes: PropTypes.string,
};

export default Contact;