import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {

  return (
    <div className="card m-2" style={{ background: "bisque", width: "18rem" }}>
      <div className="card-body" style={{ color: "darksalmon" }}>
        <h4 className="text-center text-capitalize card-title" style={{ color: "#531209" }}>{props.full_name}</h4>
        <div className="card-text">
          <ul className="mt-3 list-group list-group-flush" style={{ color: "bisque", background: "bisque" }}>
            <li className="list-group-item" style={{ color: "bisque", background: "darksalmon" }}>
              Intolerances: {props.intolerances ? props.intolerances : "none specified"}
            </li>
            <li className="list-group-item" style={{ color: "bisque", background: "darksalmon" }}>
              Dietary Preferences: {props.dietary_preferences.slice(1, -1)}
            </li>
            <li className="list-group-item" style={{ color: "bisque", background: "darksalmon" }}>
              Notes: {props.notes}
            </li>
          </ul>
        </div>
      </div>
      <div className=" mb-3 align-bottom text-center">
          <a onClick={() => props.onUpdateContact(props.contact_id)} 
            className="card-link" style={{ color: "#531209" }}
          >
            Edit Contact
          </a>
          <a onClick={() => props.onDeleteContact(props.contact_id)} 
            className="card-link" style={{ color: "#531209" }}
          >
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
