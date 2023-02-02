import { Link } from "react-router-dom";

import axios from "axios";

const kBaseUrl = "https://pantry-pickings-back-end.herokuapp.com/"

const Account = () => {
  return (
    <div>
      Hello from account info!
      <Link to="/dashboard"><button>Click here to see nav bar</button></Link>
    </div>
  );
};

export default Account;