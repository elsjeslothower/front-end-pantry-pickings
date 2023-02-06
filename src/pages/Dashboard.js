import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import Userfront from "@userfront/react";

const Dashboard = () => {
  let navigate = useNavigate();
  let loggedIn = Userfront.accessToken()

  useEffect(() => {
    if (!loggedIn) {
      return navigate("/login");
    };
  }, [loggedIn])
  
  
  return (
    <div>
      Hello from Dashboard!!
      This div element will serve as a makeshift Nav bar.
      Here are your options:
      <ol>
        <li><Link to={"/"}>To homepage (welcome!)</Link></li>
        <li><Link to={"/login"}>To login page</Link></li>
        <li><Link to={"/register"}>To signup page</Link></li>
        <li><Link to={"/dashboard"}>To dashboard</Link></li>
        <li><Link to={"/full-pantry"}>To pantry</Link></li>
        <li><Link to={"/calculator"}>To find-a-recipe</Link></li>
        <li><Link to={"/saved-recipes"}>To saved recipes</Link></li>
        <li><Link to={"/address-book"}>To address book</Link></li>
        <li><Link to={"/account"}>To account info</Link></li>
        <li><Link to={"/404"}>To 404</Link></li>
      </ol>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;