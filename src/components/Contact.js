import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <div className="card m-2" style={{ background: "bisque", width: "18rem" }}>
      <div className="card-body" style={{ color: "darksalmon" }}>
        <h4 className="card-title">Name: {props.full_name}</h4>
        <div className="card-text">
          <ul className="list-group list-group-flush" style={{ color: "bisque", background: "bisque" }}>
            <li className="list-group-item" style={{ color: "bisque", background: "darksalmon" }}>
              Intolerances: {props.intolerances}
            </li>
            <li className="list-group-item" style={{ color: "bisque", background: "darksalmon" }}>
              Dietary Preferences: {props.dietary_preferences}
            </li>
            <li className="list-group-item" style={{ color: "bisque", background: "darksalmon" }}>
              Notes: {props.notes}
            </li>
          </ul>
        </div>
        <a onClick={() => props.onUpdateContact(props.contact_id)} 
          className="card-link"
        >
          Edit Contact
        </a>
        <a onClick={() => props.onDeleteContact(props.contact_id)} className="card-link">
          Delete Contact
        </a>
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
