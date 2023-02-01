import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = (props) => {
  return (
    <div className="individual-card">
      <section className="contact_info">
        <h2>{props.full_name}</h2>
        <ul>
          <li>{props.intolerances}</li>
          <li>{props.notes}</li>
        </ul>
      </section>
      <section>
        <h2>Update {props.full_name}:</h2>
        <select name="dietary_preferences" multiple>
          <option>Gluten-Free</option>
          <option>Dairy-Free</option>
          <option>Vegan</option>
        </select>
        <input type="text" name="intolerances"/>
      </section>
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