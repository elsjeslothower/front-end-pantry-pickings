import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";

const Account = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isLoaded, isSignedIn])

  return (
    <div className="container">
      <h1 className="display-1">Account information for {user?.fullName}</h1>
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