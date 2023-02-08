import { Link } from "react-router-dom";

import axios from "axios";

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

const Account = () => {
  return (
    <div className="container">
      <h1 className="display-1">Account information for Anya</h1>
      <p className="btn btn-warning">Insert info here if time allows</p>
      <p>Optional Enhancements:</p>
      <ul>
        <li>Update account information</li>
        <li>Option to delete account</li>
      </ul>
    </div>
  );
};

export default Account;