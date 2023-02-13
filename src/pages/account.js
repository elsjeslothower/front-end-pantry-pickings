import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Userfront from "@userfront/react";
Userfront.init("6bg65zyn");

const Account = () => {
  const navigate = useNavigate();
  const loggedIn = Userfront.accessToken();
  
  useEffect(() => {
    if (!loggedIn) {
      return navigate("/");
    }
  }, [])
  
  return (
    <div className="container">
      <h1 className="display-1">Account information for {Userfront.user["name"]}</h1>
      <p className="btn btn-warning my-3">Insert info here if time allows</p>
      <p>Optional Enhancements:</p>
      <ul>
        <li>Update account information</li>
        <li>Option to delete account</li>
      </ul>
    </div>
  );
};

export default Account;