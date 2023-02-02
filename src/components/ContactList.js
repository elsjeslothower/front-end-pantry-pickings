import React from "react";
import PropTypes from 'prop-types';
import Contact from "./Contact";

const ContactList = (props) => {
  return (
    props.contactData.map((contact) => (
      <Contact
        key={contact.contact_id}
        contact_id={contact.contact_id}
      />  
    ))
  );
};

ContactList.propTypes = {
  contactData: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.bool.isRequired,
  }))
};

export default ContactList;